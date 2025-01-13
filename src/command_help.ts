import { State } from "./state.js";

export function commandHelp (state: State)
{
    let commands = state.commands
    let helpStr = "Welcome to the Pokedex!\nUsage:\n\n"
    for (const key in commands)
    {
        const element = commands[key];
        helpStr += `${ key }: ${ element.description }\n`
    }

    console.log(helpStr);
};