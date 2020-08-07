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
  // strarr:String [] = [
  //   "NewConfirmed",
  //   "TotalConfirmed",
  //   "NewDeaths",
  //   "TotalDeaths",
  //   "NewRecovered",
  //   "TotalRecovered"
  // ]

  summary = []
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

  }

  ngOnInit(): void {
    this._covid.getSummary().subscribe((res) => {
      this.covidData = res as Covid19Model;

      console.log(this.covidData);
      // this.summary.forEach(element => {
      //   //console.log(element["title"]);

      // });
      //console.log(this.summary);
      this.summary = [
        { title: "NewConfirmed", value: 0, className: "card bg-primary text-white mb-4", imgUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/death2-circle-red-512.png" },
        { title: "TotalConfirmed", value: 0, className: "card bg-warning text-white mb-4", imgUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/death2-circle-red-512.png" },
        { title: "NewDeaths", value: 0, className: "card bg-danger text-white mb-4", imgUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/death2-circle-red-512.png" },
        { title: "TotalDeaths", value: 0, className: "card bg-danger text-white mb-4", imgUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/death2-circle-red-512.png" },
        { title: "NewRecovered", value: 0, className: "card bg-success text-white mb-4", imgUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/death2-circle-red-512.png" },
        { title: "TotalRecovered", value: 0, className: "card bg-success text-white mb-4", imgUrl: "https://image.flaticon.com/icons/png/512/1513/1513277.png" }
      ];
      for (let index = 0; index < this.summary.length; index++) {
        const title = this.summary[index]["title"];
        this.summary[index]["value"] = this.covidData.Global[title];
      }

      console.log(this.summary);



    });
  }

}
