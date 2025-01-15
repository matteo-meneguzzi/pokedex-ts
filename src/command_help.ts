import { State } from "./state.js";

export async function commandHelp (state: State): Promise<void>
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