// src/app/components/shared/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true, // Aseguramos que esté declarado como standalone
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-scott-green text-white">
      <!-- Logo y contenido principal -->
      <div class="border-t border-gray-700"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo y descripción -->
          <div class="flex flex-col items-center md:items-start space-y-4">
            <img
              src="assets/images/scott-motors-white.png"
              alt="Scott Motors Logo"
              class="h-24 md:h-32 object-contain scale-125 hover:scale-150 transition-transform duration-300"
            />
            <p class="text-sm text-gray-300 text-center md:text-left">
              Tu concesionario de confianza para encontrar el auto de tus
              sueños.
            </p>
          </div>

          <!-- Enlaces rápidos -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div class="flex flex-col space-y-2">
              <a
                routerLink="/"
                class="text-gray-300 hover:text-scott-turquoise transition-colors"
                >Inicio</a
              >
              <a
                routerLink="/mantenimiento"
                class="text-gray-300 hover:text-scott-turquoise transition-colors"
                >Mantenimiento</a
              >
              <a
                routerLink="/contacto"
                class="text-gray-300 hover:text-scott-turquoise transition-colors"
                >Contacto</a
              >
            </div>
          </div>

          <!-- Información de contacto -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-lg font-semibold mb-4">Contacto</h3>
            <div class="flex flex-col space-y-2 text-gray-300">
              <p class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Ciudad de México, México
              </p>
              <p class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (555) 123-4567
              </p>
              <p class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info&#64;scottmotors.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Barra de copyright -->
      <div class="border-t border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p class="text-center text-sm text-gray-300">
            © {{ year }} Scott Motors. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
