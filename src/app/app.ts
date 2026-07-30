import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DecimalTwoDirective } from './decimal-two.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, DecimalTwoDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firstApp');
  value = '0.00';
}
