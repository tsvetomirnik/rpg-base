import { Character } from './Character';
import { Attack } from './Attack';
import { Effect } from './Effect';

export class Scene {
  public characters: Array<Character> = [];

  constructor(characters: Array<Character>) {
    this.characters = characters;
  }

  public playerAttacks(attacker: Character, defender: Character, attackType: typeof Attack) {
    // TODO: Apply attack effects before and after hit

    var attack = attacker.getAttackByType(attackType);

    var healthLoss = attacker.healthLossCalculator.calc(attacker, defender, attack);
    if (healthLoss > 0) {
      defender.health -= healthLoss;
    }

    // TODO: Filter post hit effects
    this.applyEffects(attack.effects, attacker, defender);

    // Log information
    console.log(`${attacker.name} attack with ${attack.getPower()} power.`);
    if (healthLoss > 0) {
      console.log(`${attacker.name} dealth ${healthLoss} damage to ${defender.name}.`);
    } else {
      console.log(`${defender.name} blocked ${attacker.name}'s attack.`)
    }
    console.log(`${defender.name} has [${defender.health}/${defender.maxHealth}] health.`);
    if (defender.isDead) {
      console.log(`${defender.name} died.`);
    }
  }

  private applyEffects(effects: Effect[], attacker: Character, defender: Character){
    effects.forEach((effect) => {
      effect.apply(attacker, defender);
    });
  }
}