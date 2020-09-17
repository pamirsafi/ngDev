import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { CarItem } from 'src/app/shared/carItem';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss'],
})
export class CarEditComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      id: 0,
      marke: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, Validators.min(1)],
      ps: 0,
    });
  }

  carForm: FormGroup;

  @Input() car: CarItem;
  @Output() saveCar: EventEmitter<CarItem> = new EventEmitter();
  @Output() addCar: EventEmitter<CarItem> = new EventEmitter();

  ngOnInit(): void {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.car != undefined) {
      this.carForm.setValue(changes.car.currentValue);
    }
  }

  doSave(carForm) {
    this.saveCar.emit(carForm.value);
  }

  doAdd() {
    this.addCar.emit(this.car);
  }
}
