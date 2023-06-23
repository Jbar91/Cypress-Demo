import { Component } from '@angular/core';
import { MenuOptions } from 'src/types/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  options: MenuOptions[];
  constructor() {
    this.options = [
      { label: 'Home', path: '' },
      { label: 'Login', path: 'login' },
      { label: 'Register', path: 'register' },
    ];
  }
}
