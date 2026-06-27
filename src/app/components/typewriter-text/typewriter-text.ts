import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnInit, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-typewriter-text',
  imports: [],
  templateUrl: './typewriter-text.html',
  styleUrl: './typewriter-text.scss',
})
export class TypewriterText implements OnInit {
  @Input({ required: true }) texts: string[] = [];
  @Input() typingDelay = 45;
  @Input() deletingDelay = 25;
  @Input() completedPause = 1600;
  @Input() nextTextPause = 300;

  readonly displayedText = signal('');

  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private textIndex = 0;
  private characterIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    const firstText = this.texts[0] ?? '';

    if (!firstText) {
      return;
    }

    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion()) {
      this.displayedText.set(firstText);
      return;
    }

    this.scheduleNextStep(this.typingDelay);

    this.destroyRef.onDestroy(() => {
      this.clearScheduledStep();
    });
  }

  private runStep(): void {
    const currentText = this.texts[this.textIndex] ?? '';

    if (this.isDeleting) {
      this.characterIndex -= 1;
      this.displayedText.set(currentText.slice(0, this.characterIndex));

      if (this.characterIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        this.scheduleNextStep(this.nextTextPause);
        return;
      }

      this.scheduleNextStep(this.deletingDelay);
      return;
    }

    this.characterIndex += 1;
    this.displayedText.set(currentText.slice(0, this.characterIndex));

    if (this.characterIndex === currentText.length) {
      this.isDeleting = true;
      this.scheduleNextStep(this.completedPause);
      return;
    }

    this.scheduleNextStep(this.typingDelay);
  }

  private scheduleNextStep(delay: number): void {
    this.clearScheduledStep();
    this.timeoutId = setTimeout(() => {
      this.runStep();
    }, delay);
  }

  private clearScheduledStep(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }
}
