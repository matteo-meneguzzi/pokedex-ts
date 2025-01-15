import { State } from "./state.js";

export async function commandMapBack (state: State): Promise<void>
{
    if (!state.prevLocationsURL)
    {
        console.log("you're on the first page");
    } else
    {
        const locations = await state.PokeAPI.fetchLocations(String(state.prevLocationsURL));

        if (locations)
        {
            state.nextLocationsURL = locations.next;
            if (locations.previous)
            {
                state.prevLocationsURL = locations.previous;
            }

            for (const loc of locations.results)
            {
                console.log(loc.name);
            }
        }
    }
};