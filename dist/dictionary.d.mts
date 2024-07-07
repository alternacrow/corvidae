type DictionaryItem<T extends string = string> = {
    id: T;
};
type Dictionary<T extends DictionaryItem = DictionaryItem> = {
    byId: Record<T['id'], T>;
    allIds: T['id'][];
};

declare const empty: <T extends DictionaryItem>() => Dictionary<T>;
declare const isEmpty: <T extends DictionaryItem>(dictionary: Dictionary<T>) => boolean;
declare const contains: <T extends DictionaryItem>(dictionary: Dictionary<T>, id: T["id"]) => boolean;
declare const get: <T extends DictionaryItem>(dictionary: Dictionary<T>, id: T["id"]) => T;
declare const set: <T extends DictionaryItem>(dictionary: Dictionary<T>, item: T) => Dictionary<T>;
declare const remove: <T extends DictionaryItem>(dictionary: Dictionary<T>, id: T["id"]) => Dictionary<T>;
declare const fromArray: <T extends DictionaryItem>(items: T[]) => Dictionary<T>;
declare const toArray: <T extends DictionaryItem>(dictionary: Dictionary<T>) => T[];
declare const find: <T extends DictionaryItem>(dictionary: Dictionary<T>, predicateFn: (item: T) => boolean) => T | undefined;
declare const filter: <T extends DictionaryItem>(dictionary: Dictionary<T>, predicateFn: (item: T) => boolean) => Dictionary<T>;
declare const sort: <T extends DictionaryItem>(dictionary: Dictionary<T>, compareFn: (a: T, b: T) => number) => Dictionary<T>;

declare const dictionary_contains: typeof contains;
declare const dictionary_empty: typeof empty;
declare const dictionary_filter: typeof filter;
declare const dictionary_find: typeof find;
declare const dictionary_fromArray: typeof fromArray;
declare const dictionary_get: typeof get;
declare const dictionary_isEmpty: typeof isEmpty;
declare const dictionary_remove: typeof remove;
declare const dictionary_set: typeof set;
declare const dictionary_sort: typeof sort;
declare const dictionary_toArray: typeof toArray;
declare namespace dictionary {
  export { dictionary_contains as contains, dictionary_empty as empty, dictionary_filter as filter, dictionary_find as find, dictionary_fromArray as fromArray, dictionary_get as get, dictionary_isEmpty as isEmpty, dictionary_remove as remove, dictionary_set as set, dictionary_sort as sort, dictionary_toArray as toArray };
}

export { dictionary as Dictionary, type DictionaryItem };
