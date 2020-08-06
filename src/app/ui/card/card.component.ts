import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //title and value
  @Input() value: Number;
  @Input() title: String;

  constructor() { }

  ngOnInit(): void {
  }

}
