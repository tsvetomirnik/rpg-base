import { Character, Attack } from '../../core/models/index';
import { HealthLossCalculator } from '../../core/calculators/HealthLossCalculator';

export class SimpleHealthLossCalculator extends HealthLossCalculator {
  public calc(attacker: Character, defender: Character, attack: Attack): number {
    return attack.getPower() - defender.defence;
  }
}

