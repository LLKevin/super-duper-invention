import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] = [];

  constructor(private heroService:HeroService, 
    private messageService:MessageService) { }

  // lifecycle hook: Angular calls this shortly after creating a component
  // good place to put initialization logic.
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    //synchronous signature -- fetch heroes synchronously
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

  selectedHero?: Hero;
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
