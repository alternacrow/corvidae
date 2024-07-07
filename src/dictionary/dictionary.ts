import type { Dictionary, DictionaryItem } from './types';

export const empty = <T extends DictionaryItem>(): Dictionary<T> => {
  return {
    byId: {} as Record<T['id'], T>,
    allIds: [],
  };
};

export const isEmpty = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
): boolean => {
  return dictionary.allIds.length === 0;
};

export const contains = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
  id: T['id'],
) => {
  return id in dictionary.byId;
};

export const get = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
  id: T['id'],
): T => {
  if (!contains(dictionary, id)) {
    throw Error(`dictionary does not contain id: ${id}`);
  }
  return dictionary.byId[id];
};

export const set = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
  item: T,
): Dictionary<T> => {
  return {
    byId: { ...dictionary.byId, [item.id]: item },
    allIds: dictionary.allIds.includes(item.id)
      ? dictionary.allIds
      : [...dictionary.allIds, item.id],
  };
};

export const remove = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
  id: T['id'],
): Dictionary<T> => {
  const copiedById = { ...dictionary.byId };
  delete copiedById[id];
  return {
    byId: copiedById,
    allIds: dictionary.allIds.filter((_id) => _id !== id),
  };
};

export const fromArray = <T extends DictionaryItem>(
  items: T[],
): Dictionary<T> => {
  return items.reduce((dictionary, item) => set(dictionary, item), empty<T>());
};

export const toArray = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
): T[] => {
  return dictionary.allIds.map((id) => dictionary.byId[id]);
};

export const find = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
  predicateFn: (item: T) => boolean,
): T | undefined => {
  const id = dictionary.allIds.find((id) => predicateFn(dictionary.byId[id]));
  return id ? dictionary.byId[id] : undefined;
};

export const filter = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
  predicateFn: (item: T) => boolean,
): Dictionary<T> => {
  const filtered = dictionary.allIds.reduce(
    (acc, id) => {
      const item = dictionary.byId[id];
      if (predicateFn(item)) {
        acc.byId[id] = item;
        acc.allIds.push(id);
      }
      return acc;
    },
    { byId: {} as Record<T['id'], T>, allIds: [] } as Dictionary<T>,
  );
  return filtered;
};

export const sort = <T extends DictionaryItem>(
  dictionary: Dictionary<T>,
  compareFn: (a: T, b: T) => number,
): Dictionary<T> => {
  const sortedIds = [...dictionary.allIds].sort((aId, bId) =>
    compareFn(dictionary.byId[aId], dictionary.byId[bId]),
  );
  return {
    byId: dictionary.byId,
    allIds: sortedIds,
  };
};
