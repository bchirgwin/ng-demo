import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  items = [
    {
      name: 'Bold Coffee',
      sizes: ['S', 'M', 'L'],
    },
    {
      name: 'Simply Tea',
      sizes: ['S', 'M', 'L']
    },
    {
      name: 'Sand',
      sizes: ['S', 'M', 'L']
    },
    {
      name: 'Hot Sand',
      sizes: ['S', 'M', 'L']
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
