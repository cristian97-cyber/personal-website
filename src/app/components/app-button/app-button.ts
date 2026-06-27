import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonTypeEnum } from '../../enum/button-type.enum';
import { ButtonVariantEnum } from '../../enum/button-variant.enum';
import { ButtonSizeEnum } from '../../enum/button-size.enum';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './app-button.html',
  styleUrl: './app-button.scss',
})
export class AppButton {
  @Input() type: ButtonTypeEnum = ButtonTypeEnum.Button;
  @Input() variant: ButtonVariantEnum = ButtonVariantEnum.Primary;
  @Input() size: ButtonSizeEnum = ButtonSizeEnum.Md;
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Input() extraClass = '';
  @Input() href = '';
  @Input() routerLink: string | readonly unknown[] | null = null;
  @Input() download = '';
  @Input() target = '';
  @Input() rel = '';

  @Output() click$ = new EventEmitter<MouseEvent>();

  get buttonClass(): string {
    return [
      'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      'disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
      this.variantClass,
      this.sizeClass,
      this.extraClass,
    ]
      .filter(Boolean)
      .join(' ');
  }

  private get variantClass(): string {
    const variants: Record<ButtonVariantEnum, string> = {
      primary: 'bg-primary !text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      ghost: 'bg-transparent text-card-foreground hover:text-primary',
      gradient:
        'bg-linear-to-r from-primary to-secondary !text-primary-foreground shadow-lg shadow-primary/20 hover:brightness-110',
      outline:
        'border border-border bg-card/70 text-card-foreground shadow-sm hover:border-primary/45 hover:bg-primary/10 hover:text-primary',
    };

    return variants[this.variant];
  }

  private get sizeClass(): string {
    const sizes: Record<ButtonSizeEnum, string> = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-md',
      xl: 'h-14 px-6 text-md',
      icon: 'size-10 p-0',
    };

    return sizes[this.size];
  }

  onClick(event: MouseEvent): void {
    this.click$.emit(event);
  }
}
