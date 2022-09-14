import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id:1,
    name:'Windstorm'
  }

  constructor() { }

  // lifecycle hook: Angular calls this shortly after creating a component
  // good place to put initialization logic.
  ngOnInit(): void {
  }

}
