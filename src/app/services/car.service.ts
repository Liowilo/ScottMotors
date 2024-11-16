// src/app/services/car.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
  color: string;
  imageUrl: string;
  editing?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [];
  private carsSubject = new BehaviorSubject<Car[]>([]);
  private readonly STORAGE_KEY = 'cars_data';

  private defaultCars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      price: 589000,
      year: 2024,
      color: 'Plata',
      imageUrl: '/assets/images/toyota.jpg'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      price: 548000,
      year: 2024,
      color: 'Negro',
      imageUrl: '/assets/images/honda.jpg'
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang',
      price: 989000,
      year: 2023,
      color: 'Rojo',
      imageUrl: '/assets/images/ford.jpg'
    },
    {
      id: 4,
      brand: 'Chevrolet',
      model: 'Silverado',
      price: 1189000,
      year: 2022,
      color: 'Azul Marino',
      imageUrl: '/assets/images/chevrolet.jpg'
    },
    {
      id: 5,
      brand: 'BMW',
      model: '330i',
      price: 1289000,
      year: 2021,
      color: 'Blanco',
      imageUrl: '/assets/images/bmw.jpg'
    },
    {
      id: 6,
      brand: 'Mercedes-Benz',
      model: 'C300',
      price: 1389000,
      year: 2020,
      color: 'Gris Metalizado',
      imageUrl: '/assets/images/mercedes.jpg'
    },
    {
      id: 7,
      brand: 'Audi',
      model: 'A4',
      price: 1189000,
      year: 2023,
      color: 'Negro Metálico',
      imageUrl: '/assets/images/audi.jpg'
    },
    {
      id: 8,
      brand: 'Volkswagen',
      model: 'Tiguan',
      price: 729000,
      year: 2022,
      color: 'Verde Oscuro',
      imageUrl: '/assets/images/volkswagen.jpg'
    },
    {
      id: 9,
      brand: 'Tesla',
      model: 'Model 3',
      price: 1089000,
      year: 2021,
      color: 'Rojo Metalizado',
      imageUrl: '/assets/images/tesla.jpg'
    },
    {
      id: 10,
      brand: 'Hyundai',
      model: 'Tucson',
      price: 689000,
      year: 2020,
      color: 'Plata Brillante',
      imageUrl: '/assets/images/hyundai.jpg'
    }
  ];

  constructor() {
    this.initializeData();
    // Agregamos un listener para el evento beforeunload
    window.addEventListener('beforeunload', () => {
      this.saveToStorage();
    });
  }

  private initializeData() {
    try {
      // Intentar recuperar datos del sessionStorage primero
      const sessionData = sessionStorage.getItem(this.STORAGE_KEY);
      if (sessionData) {
        this.cars = JSON.parse(sessionData);
      } else {
        // Si no hay datos en sessionStorage, intentar recuperar del localStorage
        const localData = localStorage.getItem(this.STORAGE_KEY);
        if (localData) {
          const parsedData = JSON.parse(localData);
          // Verificar si hay datos válidos
          if (Array.isArray(parsedData) && parsedData.length > 0) {
            this.cars = parsedData;
          } else {
            this.cars = [...this.defaultCars];
          }
        } else {
          this.cars = [...this.defaultCars];
        }
        // Guardar en sessionStorage
        this.saveToStorage();
      }
      this.updateSubject();
    } catch (error) {
      console.error('Error initializing data:', error);
      this.cars = [...this.defaultCars];
      this.saveToStorage();
      this.updateSubject();
    }
  }

  private saveToStorage() {
    try {
      // Remover la propiedad editing antes de guardar
      const carsToSave = this.cars.map(({ editing, ...car }) => car);
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(carsToSave));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(carsToSave));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  updateCar(updatedCar: Car) {
    const index = this.cars.findIndex(car => car.id === updatedCar.id);
    if (index !== -1) {
      // Crear una copia del carro actualizado sin la propiedad editing
      const { editing, ...carWithoutEditing } = updatedCar;
      this.cars[index] = { ...carWithoutEditing };
      this.saveToStorage();
      this.updateSubject();
    }
  }

  private updateSubject() {
    this.carsSubject.next([...this.cars]);
  }

  getCars(): Observable<Car[]> {
    return this.carsSubject.asObservable();
  }

  addCar(car: Car) {
    const { editing, ...carWithoutEditing } = car;
    this.cars.push({
      ...carWithoutEditing,
      id: this.generateNewId()
    });
    this.saveToStorage();
    this.updateSubject();
  }

  deleteCar(id: number) {
    this.cars = this.cars.filter(car => car.id !== id);
    this.saveToStorage();
    this.updateSubject();
  }

  private generateNewId(): number {
    return this.cars.length > 0 
      ? Math.max(...this.cars.map(car => car.id)) + 1 
      : 1;
  }

  resetToDefault() {
    this.cars = [...this.defaultCars];
    this.saveToStorage();
    this.updateSubject();
  }
}