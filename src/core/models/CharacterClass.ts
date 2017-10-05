import { Character } from './Character';

export abstract class CharacterClass {

  private _name: string;
  public get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  abstract apply(character: Character): void;
  abstract remove(character: Character): void;
}