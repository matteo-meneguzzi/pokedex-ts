import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap } from "./command_map.js";
import { commandMapBack } from "./command_mapb.js";
import { CLICommand } from "./state.js";

export function getCommands (): Record<string, CLICommand>
{
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays names of 20 location areas in the Pokemon world",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays names of previous 20 location areas in the Pokemon world",
            callback: commandMapBack,
        },
        explore: {
            name: "explore <location_name>",
            description: "Displays list of all the Pokémon in a given area",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon_name>",
            description: "Attempt to catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon_name>",
            description: "Attempt to inspect a pokemon characteristics",
            callback: commandInspect,
        }
    };
}