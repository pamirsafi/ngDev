import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fs: FoodService) { }

  food = this.fs.getFood(); 

  foodItems: FoodItem[];

  ngOnInit(): void {
    this.fs.getFood().suscribe(data) => (this.foodItems = data));
  }

}
