import { CLICommand, State } from "./state.js";
import { type Interface } from "readline";

export function commandExit (state: State)
{
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close()
    process.exit(0)
};