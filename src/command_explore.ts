import { State } from "./state.js";

export async function commandExplore (state: State, ...args: string[]): Promise<void>
{
    if (args.length !== 1)
    {
        throw new Error('you must provide a location name');
    }
    const locationArea = args[0];
    const locationData = await state.PokeAPI.fetchLocation(locationArea);

    if (locationData)
    {
        console.log(`Exploring ${ locationArea }...`);
        console.log('Found Pokemon:');

        for (const pokemon_enc of locationData.pokemon_encounters)
        {
            console.log(pokemon_enc.pokemon.name);
        }
    }
};