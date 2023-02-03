import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from '../model/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:9091/emp/addEmployer';
    this.getEmpURL = 'http://localhost:9091/emp/getAll';
    this.updateEmpUrl = 'http://localhost:9091/emp/updateEmployer';
    this.deleteEmpUrl = 'http://localhost:9091/emp/deleteEmployerById';

   }

   addEmployer(emp : Employer): Observable<Employer> {
     return this.http.post<Employer>(this.addEmpURL,emp);
   }

   getAllEmployer(): Observable<Employer[]>{
     return this.http.get<Employer[]>(this.getEmpURL);
   }

   updateEmployer(emp :Employer) : Observable<Employer>{
     return this.http.put<Employer>(this.updateEmpUrl, emp);
   }

   deleteEmployer(emp : Employer) : Observable<Employer> {
     return this.http.delete<Employer>(this.deleteEmpUrl+'/'+emp.id);
   }


}
