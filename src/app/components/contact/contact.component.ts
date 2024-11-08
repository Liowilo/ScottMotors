// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Encabezado -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-scott-green mb-4 font-roboto-slab">Contáctanos</h1>
          <p class="text-gray-600 text-lg">Estamos aquí para responder tus preguntas</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Información de Contacto -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-semibold text-scott-green mb-6 font-itim">Información de Contacto</h2>
            
            <div class="space-y-6">
              <!-- Dirección -->
              <div class="flex items-start space-x-4">
                <div class="bg-scott-green rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Dirección</h3>
                  <p class="text-gray-600">Ciudad de México, México</p>
                  <p class="text-gray-600">Calle Principal #123</p>
                </div>
              </div>

              <!-- Teléfono -->
              <div class="flex items-start space-x-4">
                <div class="bg-scott-green rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Teléfono</h3>
                  <p class="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="bg-scott-green rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Email</h3>
                  <p class="text-gray-600">info&#64;scottmotors.com</p>
                </div>
              </div>

              <!-- Horario -->
              <div class="flex items-start space-x-4">
                <div class="bg-scott-green rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Horario</h3>
                  <p class="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p class="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulario de Contacto -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-semibold text-scott-green mb-6 font-itim">Envíanos un mensaje</h2>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Nombre -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input 
                  type="text" 
                  formControlName="name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                  [ngClass]="{'border-red-500': submitted && contactForm.get('name')?.errors}"
                >
                <div *ngIf="submitted && contactForm.get('name')?.errors?.['required']" class="mt-1 text-red-500 text-sm">
                  El nombre es requerido
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  formControlName="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                  [ngClass]="{'border-red-500': submitted && contactForm.get('email')?.errors}"
                >
                <div *ngIf="submitted && contactForm.get('email')?.errors?.['required']" class="mt-1 text-red-500 text-sm">
                  El email es requerido
                </div>
                <div *ngIf="submitted && contactForm.get('email')?.errors?.['email']" class="mt-1 text-red-500 text-sm">
                  Email inválido
                </div>
              </div>

              <!-- Teléfono -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  formControlName="phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                >
              </div>

              <!-- Mensaje -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  formControlName="message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                  [ngClass]="{'border-red-500': submitted && contactForm.get('message')?.errors}"
                ></textarea>
                <div *ngIf="submitted && contactForm.get('message')?.errors?.['required']" class="mt-1 text-red-500 text-sm">
                  El mensaje es requerido
                </div>
              </div>

              <!-- Botón Submit -->
              <button 
                type="submit"
                class="w-full bg-scott-green hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario
      alert('Mensaje enviado correctamente');
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}