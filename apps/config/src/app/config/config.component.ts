import { Component, OnInit } from '@angular/core';

 interface Hero {
  id: number,
  name: string,
  power: string,
  alterEgo?: string
}

@Component({
  selector: 'micro-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model: Hero =  {id: 18, name: 'Dr IQ', power: this.powers[0], alterEgo: 'Chuck Overstreet'};

  submitted = false;

  onSubmit() { this.submitted = true; }
}
