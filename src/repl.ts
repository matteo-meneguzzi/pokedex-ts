import { createInterface } from "readline";

export function cleanInput (input: string): string[]
{
    const result = input.toLowerCase()
        .trim()
        .split(' ')
        .filter((word) => word !== '');
    return result
}

export function startREPL ()
{
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > "
    });

    rl.prompt()

    rl.on('line', async (input) =>
    {
        const words = cleanInput(input)
        if (words.length === 0)
        {
            rl.prompt()
            return
        }
        console.log(`Your command was: ${ words[0] }`);
        rl.prompt()
    });
}