import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-covid',
  templateUrl: './table-covid.component.html',
  styleUrls: ['./table-covid.component.css']
})
export class TableCovidComponent implements OnInit {

  sortOrder = "asc";//desc 
  v = 1;//asc -1desc
  lNewConfirmedCount:number = 0;
  gNewConfirmedCount:number = 0;
  constructor() { }
  @Input() data: Object[];

  ngOnInit(): void {
  }

  //asc or desc

  sortOrderHandller(key) {
    this.v *= -1;//1
    this.data.sort((a, b) => {

      if (this.v == 1) {
        return a[key] < b[key] ? 1 : -1;

      }
      else{
        
        return a[key] > b[key] ? 1 : -1;
      }     

    });
    console.log(this.data);

  }

  btnSortOrderHandller(key,v) {
    
    this.data.sort((a, b) => {

      if (v == -1) {
        return a[key] < b[key] ? 1 : -1;

      }
      else{
        
        return a[key] > b[key] ? 1 : -1;
      }     

    });
    console.log(this.data);

  }

  filterNewConfirmedCount(){
    if(this.lNewConfirmedCount!=0){
      this.data.filter((d)=>{
        if(d["NewConfirmed"]>=this.lNewConfirmedCount){
          return true;
        }
      })
    }
    console.log(this.lNewConfirmedCount);
  }
  //[33,22,11,11,44,55]
  //sort -1,+1, 0
  //-1 is desc, +1 asc, 0 equlas

}
