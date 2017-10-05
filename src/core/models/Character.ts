import { AbilityType } from '../enums/AbilityType';
import { Attack } from './Attack';
import { MaxHealthCalculator } from '../calculators/MaxHealthCalculator';
import { HealthLossCalculator } from '../calculators/HealthLossCalculator';

export class Character {

  private _name: string;
  public get name(): string {
    return this._name;
  }

  public level: number = 0;

  public characterClasses = [];

  //* CALCULATORS */

  public maxHealthCalculator: MaxHealthCalculator;
  public healthLossCalculator: HealthLossCalculator;

  // TODO: The current implementation could be a base class
  // These props or other could be added additionally with interfaces
  public canMove: Boolean = true;
  public canAttack: Boolean = true;
  public canDefend: Boolean = true;

  /* HEALTH */

  // Health
  private _health: number;
  public get health() {
    return this._health;
  }
  public set health(value: number) {
    let newHealth = value > 0 ? value : 0;
    if (newHealth > this.maxHealth) {
      newHealth = this.maxHealth;
    }
    this._health = newHealth;
  }

  // Max Health
  public get maxHealth(): number {
    return this.maxHealthCalculator.calc(this);
  }

  // Is Dead
  public get isDead(): Boolean {
    return this.health === 0;
  }

  // Abilities
  private _abilities: { [abilityType: string]: number; } = {};

  constructor(name: string) {
    this._name = name;

    this._abilities[AbilityType.Strength] = 0;
    this._abilities[AbilityType.Dexterity] = 0;
    this._abilities[AbilityType.Constitution] = 0;
  }

  public getAbility(ability: AbilityType) {
    return this._abilities[ability];
  }

  public setAbility(ability: AbilityType, value: number) {
    this._abilities[ability] = value;
  }

  /** ATTACK */

  private attacks: Attack[] = [];
  public setAttacks(attacks: Attack[]) {
    this.attacks = attacks;
  }
  public addAttack(attack: Attack) {
    this.attacks.push(attack);
  }
  public getAttacks(): Attack[] {
    // TODO: Weapones could produce more attacks, that should be added here
    return this.attacks;
  }

  public getAttackByType(attackType: typeof Attack): Attack {
    var attack = this.getAttacks().filter((attack) => attack instanceof attackType)[0];
    if (!attack) {
      throw new Error('Not existing attack');
    }
    return attack;
  }

  /** DEFENCE */

  // TODO: Make it like the Attack scheme
  get defence() {
    return this.getAbility(AbilityType.Strength) * 0.5;
  }

}