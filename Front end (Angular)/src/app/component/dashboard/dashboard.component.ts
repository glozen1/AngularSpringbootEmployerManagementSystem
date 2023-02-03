import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Employer } from 'src/app/model/employer';
import { EmployerService } from 'src/app/service/employer.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Employer = new Employer();
  empList : Employer[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployerService) { }

  ngOnInit(): void {

    this.getAllEmployer();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      email: [''],
      startDate : [''],
      endDate: [''],
      company : [''],
      url: [''],
      phone: [''],
      description: [''],
      salary: ['']
    });

  }

  addEmployer() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.startDate = this.empDetail.value.startDate;
    this.empObj.endDate = this.empDetail.value.endDate;
    this.empObj.company = this.empDetail.value.company;
    this.empObj.url = this.empDetail.value.url;
    this.empObj.phone = this.empDetail.value.phone;
    this.empObj.description = this.empDetail.value.description;
    this.empObj.salary = this.empDetail.value.salary;

    this.empService.addEmployer(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployer();
    },err=>{
      console.log(err);
    });

  }

  getAllEmployer() {
    this.empService.getAllEmployer().subscribe(res=>{
      this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEmployer(emp : Employer) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['startDate'].setValue(emp.startDate);
    this.empDetail.controls['endDate'].setValue(emp.endDate);
    this.empDetail.controls['company'].setValue(emp.company);
    this.empDetail.controls['url'].setValue(emp.url);
    this.empDetail.controls['phone'].setValue(emp.phone);
    this.empDetail.controls['description'].setValue(emp.description);
    this.empDetail.controls['salary'].setValue(emp.salary);

  }

  updateEmployer() {

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.startDate = this.empDetail.value.startDate;
    this.empObj.endDate = this.empDetail.value.endDate;
    this.empObj.company = this.empDetail.value.company;
    this.empObj.url = this.empDetail.value.url;
    this.empObj.phone = this.empDetail.value.phone;
    this.empObj.description = this.empDetail.value.description;
    this.empObj.salary = this.empDetail.value.salary;

    this.empService.updateEmployer(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployer();
    },err=>{
      console.log(err);
    })

  }

  deleteEmployer(emp : Employer) {

    this.empService.deleteEmployer(emp).subscribe(res=>{
      console.log(res);
      alert('Employer deleted successfully');
      this.getAllEmployer();
    },err => {
      console.log(err);
    });

  }

}
