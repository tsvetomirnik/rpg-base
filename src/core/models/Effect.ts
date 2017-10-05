import { Character } from './Character';

export abstract class Effect {
  public name: string;

  constructor(name) {
    this.name = name;
  }

  public abstract apply(character: Character, opponent: Character): any;

  public abstract compare(other: Effect): number;
}