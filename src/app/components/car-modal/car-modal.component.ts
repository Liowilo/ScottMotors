// src/app/components/car-modal/car-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
  color: string;
  imageUrl: string;
}

@Component({
  selector: 'app-car-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!-- Overlay -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        (click)="closeModal()"
      ></div>

      <!-- Modal -->
      <div
        class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <!-- Close button -->
            <button
              (click)="closeModal()"
              class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Content -->
            <div class="sm:flex sm:items-start">
              <!-- Image -->
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <img
                  [src]="car?.imageUrl"
                  [alt]="car?.brand + ' ' + car?.model"
                  class="w-full h-64 object-cover rounded-lg mb-4"
                />

                <h3
                  class="text-2xl font-bold leading-6 text-gray-900 mb-4"
                  id="modal-title"
                >
                  {{ car?.brand }} {{ car?.model }}
                </h3>

                <div class="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p class="font-semibold">Marca:</p>
                    <p>{{ car?.brand }}</p>
                  </div>
                  <div>
                    <p class="font-semibold">Modelo:</p>
                    <p>{{ car?.model }}</p>
                  </div>
                  <div>
                    <p class="font-semibold">Año:</p>
                    <p>{{ car?.year }}</p>
                  </div>
                  <div>
                    <p class="font-semibold">Color:</p>
                    <p>{{ car?.color }}</p>
                  </div>
                  <div class="col-span-2">
                    <p class="font-semibold">Precio:</p>
                    <p class="text-xl font-bold text-scott-green">
                      {{ formatPrice(car?.price) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              (click)="closeModal()"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class CarModalComponent {
  @Input() car: Car | null = null;
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  closeModal() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

  formatPrice(price: number | undefined): string {
    if (!price) return '';
    return price.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
}
