export type GetLocationsResult = {
    count: number
    next: string
    previous: string | null
    results: ShallowLocation[]
}
export type ShallowLocation = {
    name: string
    url: string
}

export type LocationArea = {
    encounter_method_rates: EncounterMethodRate[]
    game_index: number
    id: number
    location: Location
    name: string
    names: Name[]
    pokemon_encounters: PokemonEncounter[]
}

export type EncounterMethodRate = {
    encounter_method: EncounterMethod
    version_details: VersionDetail[]
}

export type EncounterMethod = {
    name: string
    url: string
}

export type VersionDetail = {
    rate: number
    version: Version
}

export type Version = {
    name: string
    url: string
}

export type Region = {
    name: string
    url: string
}

export type Name = {
    name: string
    language: Language
}

export type Language = {
    name: string
    url: string
}

export type GameIndex = {
    game_index: number
    generation: Generation
}

export type Generation = {
    name: string
    url: string
}

export type Area = {
    name: string
    url: string
}

export type PokemonEncounter = {
    pokemon: PokemonShallowInfo
    version_details: VersionDetail2[]
}

export type PokemonShallowInfo = {
    name: string
    url: string
}

export type VersionDetail2 = {
    encounter_details: EncounterDetail[]
    max_chance: number
    version: Version2
}

export type EncounterDetail = {
    chance: number
    condition_values: any[]
    max_level: number
    method: Method
    min_level: number
}

export type Method = {
    name: string
    url: string
}

export type Version2 = {
    name: string
    url: string
}