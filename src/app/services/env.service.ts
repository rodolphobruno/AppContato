import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://192.168.64.2/ApiContato/public/api';
  
  constructor() { }
}