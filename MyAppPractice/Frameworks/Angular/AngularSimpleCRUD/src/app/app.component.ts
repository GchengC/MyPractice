import {Component} from '@angular/core';

import {Employee} from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeArray: Employee[] = [
    {id: 1, name: 'Ryan', country: 'USA'},
    {id: 2, name: 'Angelica', country: 'USA'},
    {id: 3, name: 'Joe', country: 'USA'},
  ];

  selectedEmployee: Employee = new Employee();
}
