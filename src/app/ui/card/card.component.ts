import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //title and value
  // @Input() value: Number;
  // @Input() title: String;
  // @Input() imgUrl: String;
  @Input() data: {};
  value: Number;
  title: String;
  className: String;
  imgUrl: String;

  constructor() {




  }

  ngOnInit(): void {
    this.value = this.data["value"] as Number;
    this.title = this.data["title"] as String;
    this.className = this.data["className"] as String;
    this.imgUrl = this.data["imgUrl"] as String;

    console.log(this.data);
  }

}
