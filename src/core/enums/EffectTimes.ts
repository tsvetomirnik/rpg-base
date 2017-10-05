export enum EffectTimes {
  // Move
  OnMoveStart,
  OnMoveStop,
  // Attack
  BeforeAttack,
  AfterDamageDealth,
  AfterDamageBlocked,
  AfterAttack,
  // Defence
  // Other
  OnEffectApplied // After Stun on the character
}