import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { CarService } from '../../services/car.service';

interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
  color: string;
  imageUrl: string;
  editing?: boolean;
}

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="bg-gray-50 min-h-screen py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-scott-green mb-4 font-roboto-slab">
            Mantenimiento de Vehículos
          </h1>
          <p class="text-gray-600">
            Registra y administra el inventario de vehículos
          </p>
        </div>

        <!-- Formulario de Registro -->
        <div class="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-3xl mx-auto">
          <h2 class="text-2xl font-semibold text-scott-green mb-6 font-itim">
            Registrar Nuevo Vehículo
          </h2>

          <form [formGroup]="carForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Marca -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Marca</label
              >
              <select
                formControlName="brand"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                [ngClass]="{
                  'border-red-500': submitted && carForm.get('brand')?.errors
                }"
              >
                <option value="">Selecciona una marca</option>
                <option *ngFor="let brand of brands" [value]="brand">
                  {{ brand }}
                </option>
              </select>
              <div
                *ngIf="submitted && carForm.get('brand')?.errors?.['required']"
                class="mt-1 text-red-500 text-sm"
              >
                La marca es requerida
              </div>
            </div>

            <!-- Modelo -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Modelo</label
              >
              <input
                type="text"
                formControlName="model"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                [ngClass]="{
                  'border-red-500': submitted && carForm.get('model')?.errors
                }"
              />
              <div
                *ngIf="submitted && carForm.get('model')?.errors?.['required']"
                class="mt-1 text-red-500 text-sm"
              >
                El modelo es requerido
              </div>
            </div>

            <!-- Precio -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Precio</label
              >
              <div class="relative">
                <span class="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  formControlName="price"
                  class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                  [ngClass]="{
                    'border-red-500': submitted && carForm.get('price')?.errors
                  }"
                />
              </div>
              <div
                *ngIf="submitted && carForm.get('price')?.errors?.['required']"
                class="mt-1 text-red-500 text-sm"
              >
                El precio es requerido
              </div>
            </div>

            <!-- Año -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Año</label
              >
              <select
                formControlName="year"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                [ngClass]="{
                  'border-red-500': submitted && carForm.get('year')?.errors
                }"
              >
                <option value="">Selecciona un año</option>
                <option *ngFor="let year of years" [value]="year">
                  {{ year }}
                </option>
              </select>
              <div
                *ngIf="submitted && carForm.get('year')?.errors?.['required']"
                class="mt-1 text-red-500 text-sm"
              >
                El año es requerido
              </div>
            </div>

            <!-- Color -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Color</label
              >
              <input
                type="text"
                formControlName="color"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                [ngClass]="{
                  'border-red-500': submitted && carForm.get('color')?.errors
                }"
              />
              <div
                *ngIf="submitted && carForm.get('color')?.errors?.['required']"
                class="mt-1 text-red-500 text-sm"
              >
                El color es requerido
              </div>
            </div>

            <!-- URL de la imagen -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >URL de la imagen</label
              >
              <input
                type="text"
                formControlName="imageUrl"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-scott-turquoise focus:border-scott-turquoise"
                [ngClass]="{
                  'border-red-500': submitted && carForm.get('imageUrl')?.errors
                }"
              />
              <div
                *ngIf="submitted && carForm.get('imageUrl')?.errors?.['required']"
                class="mt-1 text-red-500 text-sm"
              >
                La URL de la imagen es requerida
              </div>
            </div>

            <!-- Vista previa de la imagen -->
            <div *ngIf="carForm.get('imageUrl')?.value" class="mt-4">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Vista previa</label
              >
              <img
                [src]="carForm.get('imageUrl')?.value"
                alt="Vista previa"
                class="w-full h-48 object-cover rounded-lg"
                (error)="handleImageError($event)"
              />
            </div>

            <!-- Botones -->
            <div class="flex gap-4 pt-4">
              <button
                type="submit"
                class="flex-1 bg-scott-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
              >
                Registrar Vehículo
              </button>

              <button
                type="button"
                (click)="resetForm()"
                class="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors font-medium"
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>

        <!-- Lista de vehículos registrados -->
        <div class="mt-12 bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h2 class="text-2xl font-semibold text-scott-green mb-6 font-itim">
            Vehículos Registrados
          </h2>

          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Imagen
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Marca
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Modelo
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Año
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Precio
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Color
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr *ngFor="let car of cars">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="relative group">
                      <img
                        [src]="car.imageUrl"
                        [alt]="car.brand + ' ' + car.model"
                        class="h-12 w-20 object-cover rounded"
                      />
                      <input
                        *ngIf="car.editing"
                        type="text"
                        [(ngModel)]="car.imageUrl"
                        class="absolute inset-0 w-full opacity-0 group-hover:opacity-100 px-2 py-1 border rounded"
                        (blur)="saveCarChanges(car)"
                      />
                    </div>
                  </td>

                  <!-- Marca -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="relative">
                      <span
                        *ngIf="!car.editing"
                        (click)="startEditing(car)"
                        class="cursor-pointer"
                      >
                        {{ car.brand }}
                      </span>
                      <select
                        *ngIf="car.editing"
                        [(ngModel)]="car.brand"
                        class="w-full px-2 py-1 border rounded"
                        (blur)="saveCarChanges(car)"
                      >
                        <option *ngFor="let brand of brands" [value]="brand">
                          {{ brand }}
                        </option>
                      </select>
                    </div>
                  </td>

                  <!-- Modelo -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="relative">
                      <span
                        *ngIf="!car.editing"
                        (click)="startEditing(car)"
                        class="cursor-pointer"
                      >
                        {{ car.model }}
                      </span>
                      <input
                        *ngIf="car.editing"
                        type="text"
                        [(ngModel)]="car.model"
                        class="w-full px-2 py-1 border rounded"
                        (blur)="saveCarChanges(car)"
                      />
                    </div>
                  </td>

                  <!-- Año -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="relative">
                      <span
                        *ngIf="!car.editing"
                        (click)="startEditing(car)"
                        class="cursor-pointer"
                      >
                        {{ car.year }}
                      </span>
                      <select
                        *ngIf="car.editing"
                        [(ngModel)]="car.year"
                        class="w-full px-2 py-1 border rounded"
                        (blur)="saveCarChanges(car)"
                      >
                        <option *ngFor="let year of years" [value]="year">
                          {{ year }}
                        </option>
                      </select>
                    </div>
                  </td>

                  <!-- Precio -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="relative">
                      <span
                        *ngIf="!car.editing"
                        (click)="startEditing(car)"
                        class="cursor-pointer"
                      >
                        {{ formatPrice(car.price) }}
                      </span>
                      <input
                        *ngIf="car.editing"
                        type="number"
                        [(ngModel)]="car.price"
                        class="w-full px-2 py-1 border rounded"
                        (blur)="saveCarChanges(car)"
                      />
                    </div>
                  </td>

                  <!-- Color -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="relative">
                      <span
                        *ngIf="!car.editing"
                        (click)="startEditing(car)"
                        class="cursor-pointer"
                      >
                        {{ car.color }}
                      </span>
                      <input
                        *ngIf="car.editing"
                        type="text"
                        [(ngModel)]="car.color"
                        class="w-full px-2 py-1 border rounded"
                        (blur)="saveCarChanges(car)"
                      />
                    </div>
                  </td>

                  <!-- Acciones -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex space-x-2">
                      <button
                        (click)="
                          car.editing ? saveCarChanges(car) : startEditing(car)
                        "
                        class="text-scott-green hover:text-scott-green-light"
                      >
                        {{ car.editing ? 'Guardar' : 'Editar' }}
                      </button>
                      <button
                        *ngIf="car.editing"
                        (click)="cancelEditing(car)"
                        class="text-gray-600 hover:text-gray-800"
                      >
                        Cancelar
                      </button>
                      <button
                        (click)="deleteCar(car.id)"
                        class="text-red-600 hover:text-red-900"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MaintenanceComponent implements OnInit {
  carForm: FormGroup;
  submitted = false;
  cars: Car[] = [];

  brands: string[] = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Volkswagen',
    'Tesla',
    'Hyundai',
  ];

  years: number[] = [];

  constructor(private fb: FormBuilder, private carService: CarService) {
    // Inicializamos el formulario directamente en el constructor
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      year: ['', Validators.required],
      color: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });

    this.initYears();
  }

  ngOnInit() {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  private originalData: { [key: number]: Car } = {};

  startEditing(car: Car) {
    // Guardar el estado original antes de editar
    this.originalData[car.id] = { ...car };
    car.editing = true;
  }

  cancelEditing(car: Car) {
    // Restaurar el estado original
    const original = this.originalData[car.id];
    Object.assign(car, original);
    car.editing = false;
    delete this.originalData[car.id];
  }

  saveCarChanges(car: Car) {
    if (!car.editing) return;

    // Validar los datos antes de guardar
    if (this.validateCarData(car)) {
      car.editing = false;
      delete this.originalData[car.id];
      this.carService.updateCar(car);
    } else {
      alert('Por favor verifica los datos ingresados');
      this.cancelEditing(car);
    }
  }

  private validateCarData(car: Car): boolean {
    return (
      car.brand?.trim() !== '' &&
      car.model?.trim() !== '' &&
      car.price > 0 &&
      car.year > 0 &&
      car.color?.trim() !== '' &&
      car.imageUrl?.trim() !== ''
    );
  }

  private initYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear + 1; year >= currentYear - 10; year--) {
      this.years.push(year);
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.carForm.valid) {
      const newCar: Car = {
        id: this.generateId(),
        ...this.carForm.value,
      };

      this.carService.addCar(newCar);
      this.resetForm();
      alert('Vehículo registrado exitosamente');
    }
  }

  resetForm() {
    this.carForm.reset();
    this.submitted = false;
  }

  deleteCar(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este vehículo?')) {
      this.carService.deleteCar(id);
    }
  }

  private generateId(): number {
    return this.cars.length > 0
      ? Math.max(...this.cars.map((car) => car.id)) + 1
      : 1;
  }

  private saveCars() {
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = '/assets/images/car-placeholder.jpg'; // Asegúrate de tener una imagen de placeholder
  }
}
