import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredCars: Car[] = [
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
      year: 2024,
      color: 'Rojo',
      imageUrl: '/assets/images/ford.jpg'
    },
    {
      id: 4,
      brand: 'Chevrolet',
      model: 'Silverado',
      price: 1189000,
      year: 2023,
      color: 'Azul Marino',
      imageUrl: '/assets/images/chevrolet.jpg'
    },
    {
      id: 5,
      brand: 'BMW',
      model: '330i',
      price: 1289000,
      year: 2024,
      color: 'Blanco',
      imageUrl: '/assets/images/bmw.jpg'
    },
    {
      id: 6,
      brand: 'Mercedes-Benz',
      model: 'C300',
      price: 1389000,
      year: 2023,
      color: 'Gris Metalizado',
      imageUrl: '/assets/images/mercedes.jpg'
    },
    {
      id: 7,
      brand: 'Audi',
      model: 'A4',
      price: 1189000,
      year: 2024,
      color: 'Negro Metálico',
      imageUrl: '/assets/images/audi.jpg'
    },
    {
      id: 8,
      brand: 'Volkswagen',
      model: 'Tiguan',
      price: 729000,
      year: 2023,
      color: 'Verde Oscuro',
      imageUrl: '/assets/images/volkswagen.jpg'
    },
    {
      id: 9,
      brand: 'Tesla',
      model: 'Model 3',
      price: 1089000,
      year: 2024,
      color: 'Rojo Metalizado',
      imageUrl: '/assets/images/tesla.jpg'
    },
    {
      id: 10,
      brand: 'Hyundai',
      model: 'Tucson',
      price: 689000,
      year: 2023,
      color: 'Plata Brillante',
      imageUrl: '/assets/images/hyundai.jpg'
    }
  ];

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
    'Hyundai'
  ];
  
  years: number[] = [2024, 2023, 2022, 2021, 2020];

  // Función para formatear precio en pesos mexicanos
  formatPrice(price: number): string {
    return price.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
}