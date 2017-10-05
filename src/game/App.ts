import {
  AbilityType,
  Scene,
  CharacterBuilder
} from '../core/index';

import { SimpleMaxHealthCalculator } from './calculators/SimpleMaxHealthCalculator';
import { SimpleHealthLossCalculator } from './calculators/SimpleHealthLossCalculator';
import { BasicAttack } from './attacks/BasicAttack';
import { RougeClass } from './RougeClass';

export class App {

  start() {
    let basicAttack = new BasicAttack();

    var baseCharacterBuilder = new CharacterBuilder({
      maxHealthCalculator: new SimpleMaxHealthCalculator(),
      healthLossCalculator: new SimpleHealthLossCalculator(),
      classes: [new RougeClass()],
      attacks: [new BasicAttack()]
    });

    let hero = baseCharacterBuilder.createCharacter('Ashton');
    hero.setAbility(AbilityType.Strength, 10);
    hero.setAbility(AbilityType.Constitution, 2);
    hero.setAbility(AbilityType.Dexterity, 4);

    let monster = baseCharacterBuilder.createCharacter('Skeleton');
    monster.setAbility(AbilityType.Strength, 1);
    monster.setAbility(AbilityType.Constitution, 1);
    monster.setAbility(AbilityType.Dexterity, 1);

    let scene = new Scene([hero, monster]);

    // Log characters information
    scene.characters.forEach((character) => {
      console.log(`__${character.name}____________`);
      console.log(`Level: ${character.level}`);
      console.log(`Classes: ${character.characterClasses.map((c) => c.name).join()}`);
      console.log(`MaxHealth: ${character.maxHealth}`);
      console.log(`Attacks: ${character.getAttacks().map((a) => a.name).join()}`);
      //console.log(`Abilities: ${}`);
    });
    
    // Run battle
    const maxRounds = 100;
    let roundCounter = 0;
    do {
      console.log(`__Round ${roundCounter + 1}____________`);
      scene.playerAttacks(hero, monster, BasicAttack);
      scene.playerAttacks(monster, hero, BasicAttack);
      roundCounter++;
    } while (!hero.isDead && !monster.isDead && roundCounter < maxRounds);
  }

}