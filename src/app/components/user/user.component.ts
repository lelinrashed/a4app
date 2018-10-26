import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: Boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = 'lelinrashed';
    this.age = 30;
    this.email = 'lelin.rashed784@gmail.com';
    this.address = {
      street: '50 main st',
      city: 'landon',
      state: '221/b'
    };
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 20;

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });

  }

  onClick() {
    this.name = 'Md.Rashedul Islam';
    this.hobbies.push('New hobby');
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}


interface Address {
  street: string;
  city: string;
  state: string;
}


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
