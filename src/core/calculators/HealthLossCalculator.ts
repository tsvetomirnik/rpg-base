import { Character, Attack } from '../models/index';

export abstract class HealthLossCalculator {
  abstract calc(attacker: Character, defender: Character, attack: Attack): number;
}