import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  
  constructor() { }
  
  createDb() {
    const heroes = [
      { id: 2, name: 'Nipper' },
      { id: 3, name: 'Shaker' },
      { id: 4, name: 'Shank' },
      { id: 5, name: 'Bella' },
      { id: 6, name: 'Sheila' },
      { id: 7, name: 'Matt' },
      { id: 10, name: 'Tornado' },
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
  
}
