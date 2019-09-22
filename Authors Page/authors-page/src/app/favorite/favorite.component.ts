import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  selected = "fa fa-star";
  notSelected = "fa fa-star-o";

  @Input() isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  text: string;

  current = this.selected;

  onClick () {
    if (this.current == this.selected){
      this.current = this.notSelected;
      this.isFavorite = false;
    } else if (this.current == this.notSelected){
      this.current = this.selected;
      this.isFavorite = true;
    }

    this.change.emit({ newValue: this.isFavorite });
  }
  

  onKeyUp() {

  }

  constructor() { }

  ngOnInit() {
  }
  

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
