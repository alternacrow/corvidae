export type DictionaryItem<T extends string = string> = {
  id: T;
};

export type Dictionary<T extends DictionaryItem = DictionaryItem> = {
  byId: Record<T['id'], T>;
  allIds: T['id'][];
};
