import { Character } from '../models/Character';

export abstract class MaxHealthCalculator {
  abstract calc(character: Character): number;
}