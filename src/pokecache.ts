export type CacheEntry<T> = {
    createdAt: number
    val: T
}

export class Cache
{
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor (interval: number)
    {
        this.#interval = interval
        this.#startReapLoop()
    }
    public add<T> (key: string, val: T): void 
    {
        const entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val
        };
        this.#cache.set(key, entry);
    }

    public get<T> (key: string): T | undefined
    {
        const entry = this.#cache.get(key);

        return entry?.val;
    }

    #reap (): void
    {
        this.#cache.forEach((entry, key) =>
        {
            if (Date.now() - entry.createdAt > this.#interval)
            {
                this.#cache.delete(key);
            }
        });
    }

    #startReapLoop (): void
    {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval)
    }

    public stopReapLoop (): void
    {
        if (this.#reapIntervalId)
        {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}