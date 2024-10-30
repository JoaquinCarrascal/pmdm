import { PokemonRandomizerPipe } from './pokemon-randomizer.pipe';

describe('PokemonRandomizerPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonRandomizerPipe();
    expect(pipe).toBeTruthy();
  });
});
