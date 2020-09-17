import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CarItem } from "./carItem";

@Injectable({
  providedIn: "root",
})
export class CarService {
  constructor(private httpClient: HttpClient) {}

  getCar(): Observable<CarItem[]> {
    return this.httpClient.get<CarItem[]>("/assets/food.json");
  }
}
