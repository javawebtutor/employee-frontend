import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employee = [
    //   {
    //     "id": 1,
    //     "firstName": "Ravi",
    //     "lastName": "Raj",
    //     "email": "r@gmail.com"
    //   },
    //   {
    //     "id": 2,
    //     "firstName": "Amit",
    //     "lastName": "Raj",
    //     "email": "ra@gmail.com"
    //   },
    //   {
    //     "id": 3,
    //     "firstName": "Ragini",
    //     "lastName": "Mehta",
    //     "email": "ragini@gmail.com"
    //   }

    // ];
    this.getAllemployee();
  }

  getAllemployee(){
    this.employeeService.getAllEmployee().subscribe(data=>{
      this.employee = data;
    });
  }

}
