import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { CarItem } from 'src/app/shared/carItem';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  constructor() {}
  @Input()
  car: CarItem[];
  @Output()
  carSelected: EventEmitter<CarItem> = new EventEmitter();
  @Output()
  deleteSelected: EventEmitter<CarItem> = new EventEmitter();

  displayedColumns: string[] = ['id', 'marke', 'price', 'ps', 'deleteItem'];
  dataSource: MatTableDataSource<CarItem> = new MatTableDataSource([]);

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.car.currentValue);
    this.dataSource = new MatTableDataSource(changes.car.currentValue);
  }

  selectCar(p: CarItem) {
    this.carSelected.emit(p);
  }

  addCar() {
    this.carSelected.emit({
      id: this.getNextId(),
      marke: '',
      price: 0,
      ps: 0,
    });
  }

  getNextId(): number {
    return this.car.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1;
  }
  deleteCar(p: CarItem) {
    this.deleteSelected.emit(p);
  }
}
