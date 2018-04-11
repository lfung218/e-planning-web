import { Component, OnInit } from '@angular/core';
import { IUser } from '../users/users';
import { UsersService } from '../users/users.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
