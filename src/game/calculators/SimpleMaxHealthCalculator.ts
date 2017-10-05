import { Character } from '../../core/models/index';
import { MaxHealthCalculator } from '../../core/calculators/MaxHealthCalculator';

export class SimpleMaxHealthCalculator extends MaxHealthCalculator {
  public calc(character: Character): number {
    // NOTE: We still don't have abilities set here
    // return 10 + character.getAbility(AbilityType.Strength) * 2;
    return 10 + (character.level * 2);
  }
}

