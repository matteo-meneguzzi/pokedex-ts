import { State } from "./state.js";

export async function commandInspect (state: State, ...args: string[]): Promise<void>
{
    if (args.length !== 1)
    {
        throw new Error('you must provide a pokemon name');
    }
    const pokemonName = args[0];
    const pokemonData = state.pokedex[pokemonName]

    if (pokemonData)
    {
        console.log(`Height: ${ pokemonData.height }`);
        console.log(`Weight: ${ pokemonData.weight }`);
        console.log("Stats:");
        pokemonData.stats.forEach(stat =>
        {
            console.log(`-${ stat.stat.name }: ${ stat.base_stat }`);
        });

        console.log("Types:");
        pokemonData.types.forEach(type =>
        {
            console.log(`- ${ type.type.name }`);
        });
    } else
    {
        console.log("you have not caught that pokemon");
    }
};