import { Component, OnInit } from '@angular/core';
import { IUser } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] = []
  
  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(users => {
      this.users = users;
    },
    error => console.log(error)

  );
  }

}
