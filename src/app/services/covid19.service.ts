import { Injectable } from '@angular/core';
import {urls} from '../utils/urls';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private _HttpClient:HttpClient) { }

  getSummary(){
    let _urlSummary = new urls().List[0].toString();
    return this._HttpClient.get(_urlSummary);
  }
}
