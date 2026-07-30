import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DecimalTwoDirective } from './decimal-two.directive';

@Component({
  standalone: true,
  imports: [DecimalTwoDirective],
  template: `<input appTwoDecimal />`,
})
class TestHostComponent {}

describe('DecimalTwoDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  it('restricts input to two decimal places', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.value = '123.456';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('123.45');

    input.value = '12.3';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('12.3');
  });

  it('formats the value to two decimal places on blur', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.value = '5';
    input.dispatchEvent(new Event('blur'));
    expect(input.value).toBe('5.00');
  });
});
