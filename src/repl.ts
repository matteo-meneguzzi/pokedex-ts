import { createInterface } from 'readline';
import { getCommands } from './commands.js';

export function startREPL ()
{
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'pokedex > ',
    });

    //rl.prompt();

    rl.on('line', async (input) =>
    {
        const words = cleanInput(input);
        if (words.length === 0)
        {
            rl.prompt();
            return;
        }

        const commandName = words[0];

        const commands = getCommands();
        if (commandName in commands)
        {
            commands[commandName].callback(commands)
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