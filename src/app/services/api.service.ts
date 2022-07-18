import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postaddSCR4104012(data : any ){
    return this.http.post<any>("http://localhost:3000/CoverageListSCR4104012/",data);
  }
  getaddSCR4104012(){
    return this.http.get<any>("http://localhost:3000/CoverageListSCR4104012/");
  }

  putDataSCR4104012(data : any,id : number){
    return this.http.put<any>("http://localhost:3000/CoverageListSCR4104012/"+id, data);
  }

  deleteDataSCR4104012(id:number){
    return this.http.delete<any>("http://localhost:3000/CoverageListSCR4104012/"+id);
  }
}
