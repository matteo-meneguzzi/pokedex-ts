import { State } from "./state.js";

export async function commandMap (state: State): Promise<void>
{
    const locations = await state.PokeAPI.fetchLocations(state.nextLocationsURL);

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
};