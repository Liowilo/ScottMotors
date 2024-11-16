// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarModalComponent } from '../car-modal/car-modal.component';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';

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
  imports: [CommonModule, FormsModule, CarModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  selectedBrand: string = '';
  selectedYear: string = '';
  selectedCar: Car | null = null;
  isModalOpen: boolean = false;
  currentIndex = 0;
  private intervalId: any;

  // Arrays para los datos
  allCars: Car[] = [];
  filteredCars: Car[] = [];
  banners = [{ id: 1 }];

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

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
      this.allCars = cars;
      this.filteredCars = [...cars];
    });
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
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  scrollToCatalog() {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  goToContact() {
    this.router.navigate(['/contacto']);
  }
  

   // Función para filtrar
   filterCars() {
    this.filteredCars = this.allCars.filter(car => {
      const matchesBrand = !this.selectedBrand || car.brand === this.selectedBrand;
      const matchesYear = !this.selectedYear || car.year === parseInt(this.selectedYear);
      return matchesBrand && matchesYear;
    });
  }

  // Función para limpiar filtros
  clearFilters() {
    this.selectedBrand = '';
    this.selectedYear = '';
    this.filteredCars = [...this.allCars];
  }

  // Función para formatear precio en pesos mexicanos
  formatPrice(price: number): string {
    return price.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

  showCarDetails(car: Car) {
    this.selectedCar = car;
    this.isModalOpen = true;
  }
}