import { Effect } from '../../core/models/Effect';
import { Character } from '../../core/models/Character';

export class StunEffect extends Effect {
  name: string;

  // Duration
  private _duration: number;
  public get duration() {
    return this._duration;
  }
  public set duration(value) {
    this._duration = value > 0 ? value : 0;
  }

  // Chance
  private _chance: number;
  public get chance() {
    return this._duration;
  }
  public set chance(value) {
    this._chance = value > 0 ? value : 0;
  }

  constructor(duration: number, chance: number) {
    super('Stun');
    this.duration = duration;
    this.chance = chance;
  }

  public apply(player: Character, opponent: Character) {
    opponent.canAttack = false;
  }

  public compare(other: StunEffect) {
    let getValue = (effect: StunEffect) => {
      return effect._chance * effect._duration;
    };

    let result = getValue(this) - getValue(other);
    return result || result === 0 ? 0 : -1;
  }
}