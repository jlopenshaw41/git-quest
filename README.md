# Manchester Codes Git-Quest

Git workflow group task.

## getting started

One member of your group should fork this repository. This person should give the other members of the group write permission to the repo. 

Open the repository:

```bash
  cd git-quest/
```

Install dependencies:

```bash
  npm install
```

Run tests:

```bash
  npm test
```

Make a dev branch: 

```bash
  git checkout -b dev
```

## Challenge

For this challenge you will be working together to add features to a pre-existing code base. You should make a `dev` branch from `master`, and each new feature should be made on a separate branch before being merged into `dev`.


### Character

Add the following features to the `Character` prototype:

- Characters should have a `level` property at their construction, unless otherwise stated it should be level 1.

- Characters should have an `baseAttack` and `baseDefense` property at their construction. These should be `0` unless otherwise stated.

- Characters should have a `get attackTotal` and `get defenseTotal` method. It should return the appropriate property added to the `level`. For example `Character.attackTotal()` should return `baseAttack + level`. 

### Enemy

Add the following features to the `Enemy` prototype:

- Enemies no longer need their damage property. They will instead base their damage on the `Character.attackTotal()` method. re-write the tests to account for this. 

- Enemies should have an `experienceReward` property. If this is not set at construction, it should be `100` by default. 

- Enemies should not be able to attack if they are dead. Add a guard clause to prevent this. 

### Player

Add the following features to the `Player` prototype:

- Players should have a `levelUp` method that increases their `level` by one.

- Players should have a `nextLevel` proprty at creation, this should be `1000` by default. 

- Players should have a `currentExperience` property that is set to `0` at creation.

- Players should now calculate the damage dealt to targets as `attackTotal` + `weapon.damage`.

- Change the `Player.attack(target)` method so that a killing blow will add the target's `experienceReward` to the `Player.currentExperience`.

- After a killing blow and experience reward, Players should check if their `currentExperience` is equal to or greater than their `nextLevel` property. If so, the `levelUp()` method should be called, and a new `nextLevel` target that is 10% larger should be set.  




