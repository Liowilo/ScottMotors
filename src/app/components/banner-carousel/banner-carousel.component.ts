// src/app/components/banner-carousel/banner-carousel.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Banner {
  id: number;
  imageUrl: string;
}

@Component({
  selector: 'app-banner-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Header Banner -->
    <div class="w-full">
      <img
        src="assets/images/banner_1_.jpg"
        alt="Header Banner"
        class="w-full h-[150px] object-cover"
      />
    </div>

    <!-- Promotional Carousel -->
    <div class="relative w-full mt-8">
      <div class="overflow-hidden">
        <div
          class="transition-transform duration-500 ease-out flex"
          [style.transform]="'translateX(-' + currentIndex * 100 + '%)'"
        >
          <div class="w-full flex-shrink-0">
            <img
              src="assets/images/Banner_2_.jpg"
              alt="Promotional Banner"
              class="w-full h-[420px] object-cover"
            />
          </div>
          <!-- Puedes añadir más imágenes al carrusel aquí -->
        </div>
      </div>

      <!-- Controles del carrusel -->
      <button
        (click)="prevSlide()"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        (click)="nextSlide()"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <!-- Indicadores -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <div
          *ngFor="let banner of banners; let i = index"
          (click)="goToSlide(i)"
          class="w-3 h-3 rounded-full cursor-pointer transition-colors"
          [ngClass]="{
            'bg-scott-turquoise': i === currentIndex,
            'bg-white/50': i !== currentIndex
          }"
        ></div>
      </div>
    </div>
  `,
})
export class BannerCarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private intervalId: any;

  banners: Banner[] = [
    { id: 1, imageUrl: 'assets/images/Banner_2_.jpg' },
    // Puedes añadir más banners aquí si lo necesitas
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
