import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTwoDecimal]',
})
export class DecimalTwoDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  private formatValue(value: string): string {
    const sanitized = value.replace(/[^0-9.]/g, '');
    const parts = sanitized.split('.');

    if (parts.length > 2) {
      return `${parts[0]}.${parts.slice(1).join('')}`;
    }

    if (parts.length === 2) {
      const [integer, fraction] = parts;
      return `${integer}.${fraction.slice(0, 2)}`;
    }

    return sanitized;
  }

  @HostListener('input')
  onInput(): void {
    const input = this.el.nativeElement as HTMLInputElement;
    const value = this.formatValue(input.value);
    input.value = value;
  }

  @HostListener('blur')
  onBlur(): void {
    const input = this.el.nativeElement as HTMLInputElement;

    if (!input.value) {
      input.value = '0.00';
      return;
    }

    const numericValue = Number.parseFloat(input.value);
    if (!Number.isNaN(numericValue)) {
      input.value = numericValue.toFixed(2);
    }
  }
}
