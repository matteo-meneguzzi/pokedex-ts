import { createInterface } from 'readline';
import { getCommands } from './commands.js';
import { State } from './state.js';

export function startREPL (state: State)
{
    let rl = state.rl
    rl.on('line', async (input) =>
    {
        const words = cleanInput(input);
        if (words.length === 0)
        {
            rl.prompt();
            return;
        }

        const commandName = words[0];

        const commands = state.commands
        if (commandName in commands)
        {
            commands[commandName].callback(state)
        } else
        {
            console.log("Unknown command");
            rl.prompt()
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