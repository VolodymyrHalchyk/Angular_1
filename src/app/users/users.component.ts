import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  singleUser: User;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  getBubbleUp(user: User):void{
    this.singleUser = user;
  }
}
