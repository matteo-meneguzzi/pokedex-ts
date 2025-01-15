import { State } from "./state.js";

export async function commandCatch (state: State, ...args: string[]): Promise<void>
{
    if (args.length !== 1)
    {
        throw new Error('you must provide a pokemon name');
    }
    const pokemonName = args[0];
    const pokemonData = await state.PokeAPI.fetchPokemonInfo(pokemonName);

    if (pokemonData)
    {
        console.log(`Throwing a Pokeball at ${ pokemonData.name }...`);

        const random = Math.random();
        const captureCohefficient = pokemonData.base_experience / (1000 * random)

        if (captureCohefficient <= 0.3)
        {
            console.log(`${ pokemonData.name } was caught!`);
            state.pokedex[pokemonData.name] = pokemonData
        } else
        {
            console.log(`${ pokemonData.name } escaped!`);
        }
    }
};