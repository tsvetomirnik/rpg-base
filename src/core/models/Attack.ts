import { Effect } from './Effect';
import { Character } from './Character';

export abstract class Attack {

  private _name: string;
  public get name(): string {
    return this._name;
  }

  public type: string;
  public effects: Effect[];

  public attacker: Character;
  public opponents: Character[];

  constructor(name: string, type: string, effects: Effect[], attacker: Character, opponents: Character[]) {
    this._name = name;
    this.type = type;
    this.effects = effects;
    this.attacker = attacker;
    this.opponents = opponents;
  }

  public abstract getPower(): number;
}