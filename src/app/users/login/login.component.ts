import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: FormGroup;
  constructor(
    public fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private zone: NgZone
  ) {
    this.login = fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    const logUser = {
      user: this.login.value.user,
      password: this.login.value.password,
    };

    this.usersService.logUser(logUser).subscribe((x) => {
      this.zone.run(() => {
        this.router.navigateByUrl('');
      });
      console.log(x);
    });

    console.log(logUser);
  }
}
