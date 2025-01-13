import { CLICommand } from "./types/command.js";

export function commandHelp (commands: Record<string, CLICommand>)
{
    let helpStr = "Welcome to the Pokedex!\nUsage:\n\n"
    for (const key in commands)
    {
        const element = commands[key];
        helpStr += `${ key }: ${ element.description }\n`
    }

    console.log(helpStr);
};