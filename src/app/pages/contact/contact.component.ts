import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  title = 'Interested in working with us?';
  description =
    'We are a product development agency in Woodstock CapeTown. Come have a coffee!';
  constructor() {}

  ngOnInit(): void {}
}
