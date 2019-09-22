import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  selected = "fa fa-star";
  notSelected = "fa fa-star-o";

  text: string;

  current = this.selected;

  onClick () {
    if (this.current == this.selected){
      this.current = this.notSelected;
    } else if (this.current == this.notSelected){
      this.current = this.selected;
    }
  }

  onKeyUp() {

  }

  constructor() { }

  ngOnInit() {
  }

}
