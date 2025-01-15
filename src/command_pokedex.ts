import { State } from "./state.js";

export async function commandPokedex (state: State): Promise<void>
{
    const pokedex = state.pokedex
    if (Object.keys(pokedex).length === 0)
    {
        console.log("You have no Pokémon inside your Pokedex");

    }
    else
    {
        console.log("Your Pokedex:");

        for (const key in pokedex)
        {
            console.log(`- ${ key }`);
        }
    }
};