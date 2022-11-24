import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Bringing digital to life through story, emotion and touch.';
  description =
    'We build digital products; we are on a mission to partner with people who want to change the game.';
  constructor() {}

  ngOnInit(): void {}
}
