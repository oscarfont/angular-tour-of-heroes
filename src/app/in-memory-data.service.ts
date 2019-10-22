import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService {
  constructor() { }

  createDb(){
    const heroes = [
      {id: 1, name: 'Thanos'},
      {id: 2, name: 'Superman'},
      {id: 3, name: 'Batman'},
      {id: 4, name: 'Ironman'},
      {id: 5, name: 'Spiderman'},
      {id: 6, name: 'Captain America'},
      {id: 7, name: 'Hulk'},
      {id: 8, name: 'The Human Torch'},
      {id: 9, name: 'The Thing'},
      {id: 10, name: 'Invisible woman'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number.
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
