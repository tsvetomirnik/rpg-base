import { Attack, Character, CharacterClass } from '../models/index';
import { MaxHealthCalculator, HealthLossCalculator } from '../calculators/index';

export interface CharacterBuilderArguments {
  maxHealthCalculator:  MaxHealthCalculator;
  healthLossCalculator: HealthLossCalculator;
  classes: CharacterClass[];
  attacks: Array<Attack>;
}

export class CharacterBuilder {
  constructor(private args: CharacterBuilderArguments
  ) { }

  public createCharacter(name: string) {
    var character = new Character(name);

    // Common properties
    character.maxHealthCalculator = this.args.maxHealthCalculator;
    character.healthLossCalculator = this.args.healthLossCalculator;
    character.characterClasses = this.args.classes;
    character.setAttacks(this.args.attacks);

    character.health = character.maxHealth;
    return character;
  }
}

