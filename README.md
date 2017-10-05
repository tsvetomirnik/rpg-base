# RPG Base

RPG Base Architecture

## How to run

```bash
  npm install
  npm test
```

## Terminology

- `Character` - game personnage (incl. monsters)
- `Attacker` - a character who initiates an attack
- `Defender` - a character which is defending agains an attacker character
- `Abilities` - character specific skill points
- `Level` - a measurement how much experience the character has
- `Health` - a characteristic to show how far the character is from death
- `MaxHealth` - maximum healht value
- `Class` - a way to group characters by a certain distinctive feature, to bring more features to the character
- `Effect` - a special logic that is applies after a specific action
- `Scene` - is used to define how characters interacts to each other

## Tasks

- [ ] Define Actions like Heal. See if Atk/Def could be actions.
  - Attacks could be actions. Actions are like attacks without damage with Effects.
  - Consider: Move, Stun, Heal, Speak
- [ ] AttackType could have more values. See if the enum is the right structure.
  - It have to be moved out of the core
- [x] Define calculators
  - [x] MaxHealth
  - [x] Health Dealth
- [ ] Implement CharacterClass class
  - [ ] Allow multiple classes per Character
- [ ] Fix scene to support allies as well
- [ ] Add Effect which can be used as a Buff
- [ ] Add events
- [ ] Add items
- [ ] Replace karma-typescript plugin with karma-webpack
- [ ] Include Class diagram