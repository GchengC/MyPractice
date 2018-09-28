import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users2: String[] = ['ryan', 'cloe', 'cameron', 'jhon', 'carl'];

  users = ['ryan', 'cloe', 'cameron', 'jhon', 'carl', 'esto es forma dinamica'];

  activated = true;
  name: String = 'Ryan Ray';

  age: number;
  address: {
    street: String;
    city: String;
  };
  hobbies: String[];

  nameDobleE: String = 'Guillermo';
  ageDobleE = 27;

  posts = [];


  constructor(private dataService: DataService) {
    this.age = 28;
    this.address = {
      street: 'Av. Martin Vera Guerra',
      city: 'Guarenas'
    };

    this.hobbies = ['swing', 'walk', 'read'];

    this.dataService.getData().subscribe(data => {
      /*console.log(data);*/
      this.posts = data;
    });

  }


  sayHello() {
    alert('Hola!');
  }

  deleteUser(user) {
    for (let i = 0; i < this.users2.length; i++) {
      if (user === this.users2[i]) {
        this.users2.splice(i, 1);
      }
    }
  }

  sendUser(user) {
    this.users2.push(user.value);
    user.value = '';
    user.focus();
    return false;
  }

  ngOnInit() {
  }

}
