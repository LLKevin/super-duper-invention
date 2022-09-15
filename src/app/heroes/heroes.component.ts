import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from 'src/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros = HEROES; //binds an array for binding 
  constructor() { }

  // lifecycle hook: Angular calls this shortly after creating a component
  // good place to put initialization logic.
  ngOnInit(): void {
  }

  selectedHero?: Hero;
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
}
