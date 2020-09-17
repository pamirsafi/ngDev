import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpCLient: HttpClient) {}

  food: FoodItem[] = [
    { name: 'Pommes', price: 2 },
    { name: 'Falaffel', price: 2 },
  ];
  getFood(): Observable<FoodItem[]> {
    let url = '/assets/food.json';
    return this.httpCLient.get<FoodItem[]>(url);
  }
}
