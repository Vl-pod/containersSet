import Team from '../team';

describe('Team class', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  it('should add a character to the team', () => {
    const character = { name: 'Character 1' };
    team.add(character);
    expect(team.toArray()).toEqual([character]);
  });

  it('should not allow adding the same character twice', () => {
    const character = { name: 'Character 1' };
    team.add(character);
    expect(() => team.add(character)).toThrow('Character already in the team.');
  });

  it('should add multiple characters to the team', () => {
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };
    const character3 = { name: 'Character 3' };
    team.addAll(character1, character2, character3);
    expect(team.toArray()).toEqual([character1, character2, character3]);
  });

  it('should not add duplicates when using addAll', () => {
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };
    team.addAll(character1, character2);
    team.addAll(character1, character2); // Should not throw an error
    expect(team.toArray()).toEqual([character1, character2]);
  });

  it('should convert the team to an array', () => {
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });
});
