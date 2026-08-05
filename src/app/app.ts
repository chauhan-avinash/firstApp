import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firstApp');
  value = '0.00';
  scale: number = 1;
  step: number = 0.1;
  minScale: number = 0.5;
  maxScale: number = 3;

  products = [
    { name: 'BumTum', image: 'bumtum1.jfif' },
    { name: 'Combo', image: 'image1.png' },
    { name: 'BumTum', image: 'bumtum1.jfif' },
    { name: 'Combo', image: 'image1.png' },
    { name: 'BumTum', image: 'bumtum1.jfif' },
    { name: 'Combo', image: 'image1.png' },
    { name: 'BumTum', image: 'bumtum1.jfif' },
    { name: 'Combo', image: 'image1.png' }
  ];

  zoomIn() {
    if (this.scale < this.maxScale) {
      this.scale += this.step;
    }
  }

  zoomOut() {
    if (this.scale > this.minScale) {
      this.scale -= this.step;
    }
  }

  resetZoom() {
    this.scale = 1;
  }
}
