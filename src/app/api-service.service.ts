import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from './Global';
import {Veg} from './Class'
import { NonVeg } from './Class';

// import { environment } from 'src/environment/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": 'GET, POST, OPTIONS, DELETE,PUT',
      "Content-Security-Policy": 'upgrade-insecure-requests'
    })
  };


  constructor(private http: HttpClient) {
   
  
  
   }

   AddAllVeg(Veg): Observable<any> {
    return this.http.post<Veg>(GlobalVariable.SERVICE_API_URL +"Veg/AddAllVeg",Veg, this.httpOptions);  
  } 
  GetAllVeg(): Observable<any> {
  return this.http.get<Veg>( GlobalVariable.SERVICE_API_URL +"Veg/GetAllVeg" , this.httpOptions);
}

GetVegById(VegId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Veg/GetVegById?VegId="+VegId,this.httpOptions);
}   
UpdateVeg(Veg): Observable<any> {
  return this.http.post<Veg>( GlobalVariable.SERVICE_API_URL +"Veg/UpdateVeg?" , Veg,this.httpOptions);
}
DeleteVeg(VegId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Veg/DeleteVeg?VegId="+VegId,this.httpOptions);
}


// NonVeg

AddNonVeg(NonVeg): Observable<any> {
  return this.http.post<NonVeg>(GlobalVariable.SERVICE_API_URL +"NonVeg/AddNonVeg",NonVeg, this.httpOptions);  
} 
GetAllNonVeg(): Observable<any> {
return this.http.get<NonVeg>( GlobalVariable.SERVICE_API_URL +"NonVeg/GetAllNonVeg" , this.httpOptions);
}

GetNonVegById(NonVegId:any): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"NonVeg/GetNonVegById?NonVegId="+NonVegId,this.httpOptions);
} 
UpdateNonVeg(NonVeg): Observable<any> {
  return this.http.post<NonVeg>( GlobalVariable.SERVICE_API_URL +"NonVeg/UpdateNonVeg?" , NonVeg,this.httpOptions);
}
DeleteNonVeg(NonVegId): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"NonVeg/DeleteNonVeg?NonVegId="+NonVegId,this.httpOptions);
}
}