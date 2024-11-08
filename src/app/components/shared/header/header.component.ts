// src/app/components/shared/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-scott-green shadow-lg">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24 md:h-28">
          <!-- Reducida la altura de h-32 md:h-40 a h-24 md:h-28 -->
          <!-- Logo con altura ajustada -->
          <div class="flex-shrink-0 flex items-center w-40 md:w-64">
            <img
              src="assets/images/scott-motors-white.png"
              alt="Scott Motors Logo"
              class="w-full h-20 md:h-24 object-contain scale-[1.75] hover:scale-[2] transition-transform duration-300"
            />
          </div>

          <!-- Navigation Links con padding ajustado -->
          <div class="hidden md:block">
            <div class="flex items-center space-x-8">
              <!-- Reducido el espacio entre links -->
              <a
                routerLink="/"
                routerLinkActive="text-scott-turquoise"
                [routerLinkActiveOptions]="{ exact: true }"
                class="text-white hover:text-scott-turquoise px-3 py-2 text-base font-medium transition-colors"
              >
                Inicio
              </a>
              <a
                routerLink="/mantenimiento"
                routerLinkActive="text-scott-turquoise"
                class="text-white hover:text-scott-turquoise px-3 py-2 text-base font-medium transition-colors"
              >
                Mantenimiento
              </a>
              <a
                routerLink="/contacto"
                routerLinkActive="text-scott-turquoise"
                class="text-white hover:text-scott-turquoise px-3 py-2 text-base font-medium transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          <!-- Mobile menu button más compacto -->
          <div class="md:hidden">
            <button
              type="button"
              (click)="toggleMobileMenu()"
              class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-scott-turquoise focus:outline-none"
            >
              <svg
                class="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              routerLink="/"
              routerLinkActive="text-scott-turquoise"
              [routerLinkActiveOptions]="{ exact: true }"
              class="text-white hover:text-scott-turquoise block px-3 py-2 text-base font-medium"
            >
              Inicio
            </a>
            <a
              routerLink="/mantenimiento"
              routerLinkActive="text-scott-turquoise"
              class="text-white hover:text-scott-turquoise block px-3 py-2 text-base font-medium"
            >
              Mantenimiento
            </a>
            <a
              routerLink="/contacto"
              routerLinkActive="text-scott-turquoise"
              class="text-white hover:text-scott-turquoise block px-3 py-2 text-base font-medium"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 50;
      }

      .router-link-active {
        color: #00c9d2;
      }

      img {
        filter: drop-shadow(
          0 4px 6px rgba(0, 0, 0, 0.1)
        ); /* Sombra suave para el logo */
      }
    `,
  ],
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
