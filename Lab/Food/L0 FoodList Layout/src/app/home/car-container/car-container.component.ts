import { Component, OnInit } from '@angular/core';
import { CarItem } from 'src/app/shared/carItem';
import { CarService } from 'src/app/shared/car.service';

@Component({
  selector: 'app-car-container',
  templateUrl: './car-container.component.html',
  styleUrls: ['./car-container.component.scss'],
})
export class CarContainerComponent implements OnInit {
  car: CarItem[];
  selected: CarItem;
  constructor(private cs: CarService) {}

  ngOnInit(): void {
    this.cs.getCar().subscribe((data) => (this.car = data));
  }

  selectCar(f: CarItem) {
    this.selected = { ...f };
  }

  carSaved(p: CarItem) {
    const existing: CarItem = this.car.find((i) => i.marke === p.marke);
    if (existing != null) {
      Object.assign(existing, p);
    } else {
      p.id = this.car.length + 1;
      let newCars: CarItem[] = Object.assign([], this.car);
      newCars.push(p);
      this.car = newCars;
    }
  }

  deleteCar(f: CarItem) {
    this.car = this.car.filter((item) => item.id != f.id);
  }

  // addCar(p: CarItem) {
  //   const existing: CarItem = this.car.find((i) => i.marke === p.marke);
  //   if (existing == null) {
  //     p.id = this.car.length + 1;
  //     let newCars: CarItem[] = Object.assign([], this.car);
  //     newCars.push(p);
  //     this.car = newCars;
  //   }
  // }
}
