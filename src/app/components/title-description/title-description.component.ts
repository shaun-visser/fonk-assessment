import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.scss'],
})
export class TitleDescriptionComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
