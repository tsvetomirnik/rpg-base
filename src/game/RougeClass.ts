import { Character } from '../core//models/Character';
import { CharacterClass } from '../core//models/CharacterClass';

export class RougeClass extends CharacterClass {
  constructor() {
    super('Rouge');
  }
  public apply(character: Character): void {
    // Add a special attack
    // character.addAttack(specialAttack);
  }
  public remove(character: Character): void {
    // Nothing
  }
}