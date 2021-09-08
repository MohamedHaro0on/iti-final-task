import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-team',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$:any;

  constructor(private userService : UserService) { 
    users$ : [];
  }

  ngOnInit(): void {
    this.fetchPeople();
    console.log(this.users$);
  }
  fetchPeople(){
    this.users$ = this.userService.FetchPeople();
  }

}
