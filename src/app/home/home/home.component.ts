import { Component } from '@angular/core';
import { MemesService } from 'src/app/services/memes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(protected memesService: MemesService) {}

  ngOnInit() {
    this.memesService.queryAll().subscribe();
  }
}
