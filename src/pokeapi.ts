import { GetLocationsResult, LocationArea } from "./types/location";
import { Cache } from "./pokecache.js"
import { PokemonInfo } from "./types/pokemon";

export class PokeAPI
{
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;
    constructor (cacheInterval: number)
    {
        this.cache = new Cache(cacheInterval);
    }

    closeCache ()
    {
        this.cache.stopReapLoop();
    }

    async fetchLocations (pageURL: string): Promise<void | GetLocationsResult>
    {
        let fullURL = pageURL || `${ PokeAPI.baseURL }/location-area?offset=0&limit=20`;
        const URLinCacheData = this.cache.get<GetLocationsResult>(fullURL)
        if (URLinCacheData)
        {
            return URLinCacheData;
        }

        try
        {
            const result = await fetch(fullURL)
            if (!result.ok)
            {
                throw new Error(`${ result.status } ${ result.statusText }`);
            }
            const locationsData: GetLocationsResult = await result.json()
            this.cache.add(fullURL, locationsData)

            return locationsData
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
    }

    async fetchLocation (locationName: string): Promise<void | LocationArea>
    {
        const fullURL = `${ PokeAPI.baseURL }/location-area/${ locationName }`;
        const URLinCacheData = this.cache.get<LocationArea>(fullURL)
        if (URLinCacheData)
        {
            return URLinCacheData;
        }

        try
        {
            const result = await fetch(fullURL)
            if (!result.ok)
            {
                throw new Error(`${ result.status } ${ result.statusText }`);
            }
            const locationData: LocationArea = await result.json()
            this.cache.add(fullURL, locationData);

            return locationData
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
    }

    async fetchPokemonInfo (pokemonName: string): Promise<void | PokemonInfo>
    {
        const fullURL = `${ PokeAPI.baseURL }/pokemon/${ pokemonName }`;
        const cached = this.cache.get<PokemonInfo>(fullURL);
        if (cached)
        {
            return cached;
        }
        try
        {
            const result = await fetch(fullURL)
            if (!result.ok)
            {
                throw new Error(`${ result.status } ${ result.statusText }`);
            }
            const pokemonInfo: PokemonInfo = await result.json()
            this.cache.add(fullURL, pokemonInfo);

            return pokemonInfo
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
    }
}

