import { Attack } from '../../core/models/Attack';
import { AttackType } from '../../core/enums/AttackType';

export class BasicAttack extends Attack {

  constructor() {
    super('Hit', AttackType[AttackType.Melee], [], null, null);
  }

  // Crit Chance, Crit Damage, Armor Penetration, Pierce
  //let effects: Effect[] = [
  // { name: 'Accuracity', value: 0.8, apply: () => {} },
  // { name: 'Pierce', duration: 10, chance: 0.33, apply: () => { /* Pierce Effect */ } },
  // { name: 'Stun', duration: 10, chance: 0.33 },
  // { name: 'Push', distance: 1 },
  // { name: 'Poison', duration: 1, apply: function () { /* Poison Effect */ } },
  //new StunEffect(0.1, 0.3)
  //];

  getPower() {
    return 1;
  }
}