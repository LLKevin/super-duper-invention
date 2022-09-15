import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //heros = HEROES; //binds an array for binding 
  @Input() hero?:Hero;
  constructor() { }
  ngOnInit(): void {
  }
}
