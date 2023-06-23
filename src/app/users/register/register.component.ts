import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  register: FormGroup;
  constructor(public fb: FormBuilder, private usersService: UsersService) {
    this.register = fb.group({
      userName: new FormControl(),
      email: [null, [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  handleRegister() {
    const registerUser = {
      userName: this.register.value.userName,
      email: this.register.value.email,
      password: this.register.value.password,
    };

    this.usersService.registerUser(registerUser).subscribe();

    console.log(registerUser);
  }
}
