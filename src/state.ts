import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { PokemonInfo } from "./types/pokemon.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>
    PokeAPI: PokeAPI;
    pokedex: Record<string, PokemonInfo>;
    prevLocationsURL: string | null;
    nextLocationsURL: string;
};

export function initState (cacheInterval: number)
{
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > ',
    });

    const state: State = {
        readline: rl,
        commands: getCommands(),
        PokeAPI: new PokeAPI(cacheInterval),
        pokedex: {},
        prevLocationsURL: null,
        nextLocationsURL: ""
    }

    return state
}