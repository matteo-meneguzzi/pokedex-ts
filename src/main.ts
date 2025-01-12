// repl.js actually refers to repl.ts
import { cleanInput, startREPL } from "./repl.js";
import { createInterface } from "readline";
function main ()
{
    startREPL();
}

main();