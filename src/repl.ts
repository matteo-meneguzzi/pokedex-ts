import { createInterface } from 'readline';
import { getCommands } from './commands.js';
import { State } from './state.js';

export async function startREPL (state: State)
{
    let readline = state.readline
    readline.prompt();

    readline.on('line', async (input) =>
    {
        const words = cleanInput(input);
        if (words.length === 0)
        {
            readline.prompt();
            return;
        }

        const commandName = words[0];
        const args = words.slice(1);

        const commands = state.commands
        if (commandName in commands)
        {
            try
            {
                await commands[commandName].callback(state, ...args)
                readline.prompt();
            } catch (error)
            {
                if (error instanceof Error)
                {
                    console.log(error.message);
                } else
                {
                    console.log("Unknown Error: " + error);
                }
            }
        } else
        {
            console.log("Unknown command");
            readline.prompt()
        }
    });
}

export function cleanInput (input: string): string[]
{
    return input
        .toLowerCase()
        .trim()
        .split(' ')
        .filter((word) => word !== '');
}