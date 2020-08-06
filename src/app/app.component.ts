import { Component } from '@angular/core';
import { Covid19Service } from './services/covid19.service';
import { Covid19Model } from './models/covid19';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  //covid_19_data = [];//simple object
  covidData = new Covid19Model();
  strarr:String [] = [
    "NewConfirmed",
    "TotalConfirmed",
    "NewDeaths",
    "TotalDeaths",
    "NewRecovered",
    "TotalRecovered"
  ]

  arr = [
    {title:"NewConfirmed",value:1},{title:"Total",value:1},{title:"New",value:1}
  ]
  constructor(private _covid: Covid19Service) {
    //get: it will return some data to client (angular app) https://api.covid19api.com/summary
    //get single/multiple: it will return single/multiple data at a time https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z
    //post: send data to api for create or insert https://api.com/covide-19
    //put: will update the existing data https://api.com/covide-19/1
    //delete: as per the name need to emove
    // var object = new urls();    

    // httpClient.get(object.List[0].toString()).subscribe((data)=>{
    //   this.covid_19_data = data["Countries"];
    //   console.log(this.covid_19_data);

    // });
    this._covid.getSummary().subscribe((res) => {
      this.covidData = res as Covid19Model;

      console.log(this.covidData);
    });

  }

}
