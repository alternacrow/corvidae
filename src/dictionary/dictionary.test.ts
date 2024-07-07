import { describe, expect, it } from 'vitest';
import {
  empty,
  isEmpty,
  fromArray,
  get,
  contains,
  remove,
  set,
  sort,
  toArray,
  find,
  filter,
} from './dictionary';
import type { Dictionary } from './types';

describe('Dictionary', () => {
  type TestItem = {
    id: `item${number}`;
    name: string;
  };

  type TestDictionary = Dictionary<TestItem>;

  const item1: TestItem = { id: 'item1', name: 'item1name' };
  const item2: TestItem = { id: 'item2', name: 'item2name' };
  const item3: TestItem = { id: 'item3', name: 'item3name' };

  describe('empty', () => {
    it('should return an empty dictionary', () => {
      const actual = empty();
      const expedted: TestDictionary = {
        byId: {},
        allIds: [],
      };
      expect(actual).toEqual(expedted);
    });
  });

  describe('isEmpty', () => {
    it('should return true if the dictionary is empty', () => {
      const dictionary: TestDictionary = {
        byId: {},
        allIds: [],
      };
      const actual = isEmpty(dictionary);
      expect(actual).toBe(true);
    });

    it('should return false if the dictionary is not empty', () => {
      const dictionary: TestDictionary = {
        byId: { [item1.id]: item1 },
        allIds: [item1.id],
      };
      const actual = isEmpty(dictionary);
      expect(actual).toBe(false);
    });
  });

  describe('contains', () => {
    it('should return true if the dictionary contains the id', () => {
      const dictionary: TestDictionary = {
        byId: { [item1.id]: item1 },
        allIds: [item1.id],
      };
      const actual = contains(dictionary, item1.id);
      expect(actual).toBe(true);
    });

    it('should return false if the dictionary does not contain the id', () => {
      const dictionary: TestDictionary = {
        byId: {},
        allIds: [],
      };
      const actual = contains(dictionary, item1.id);
      expect(actual).toBe(false);
    });
  });

  describe('get', () => {
    it('should return the item if the dictionary contains the id', () => {
      const dictionary: TestDictionary = {
        byId: { [item1.id]: item1 },
        allIds: [item1.id],
      };
      const actual = get(dictionary, item1.id);
      expect(actual).toEqual(item1);
    });

    it('should throw an error if the dictionary does not have the id', () => {
      const dictionary: TestDictionary = {
        byId: {},
        allIds: [],
      };
      expect(() => get(dictionary, item1.id)).toThrowError();
    });
  });

  describe('set', () => {
    it('should add the item to the dictionary', () => {
      const dictionary: TestDictionary = {
        byId: {},
        allIds: [],
      };
      const actual = set(dictionary, item1);
      const expedted = {
        byId: { [item1.id]: item1 },
        allIds: [item1.id],
      };
      expect(actual).toEqual(expedted);
    });

    it('should update the item in the dictionary', () => {
      const dictionary: TestDictionary = {
        byId: { [item1.id]: item1 },
        allIds: [item1.id],
      };
      const actual = set(dictionary, { ...item1, name: 'updated' });
      const expedted = {
        byId: { [item1.id]: { ...item1, name: 'updated' } },
        allIds: [item1.id],
      };
      expect(actual).toEqual(expedted);
    });
  });

  describe('remove', () => {
    it('should remove the item from the dictionary', () => {
      const dictionary: TestDictionary = {
        byId: { [item1.id]: item1 },
        allIds: [item1.id],
      };
      const actual = remove(dictionary, item1.id);
      const expedted = {
        byId: {},
        allIds: [],
      };
      expect(actual).toEqual(expedted);
    });
  });

  describe('fromArray', () => {
    it('should convert an array to a dictionary', () => {
      const items = [item1, item2, item3];
      const actual = fromArray(items);
      const expedted: TestDictionary = {
        byId: {
          [item1.id]: item1,
          [item2.id]: item2,
          [item3.id]: item3,
        },
        allIds: [item1.id, item2.id, item3.id],
      };
      expect(actual).toEqual(expedted);
    });
  });

  describe('toArray', () => {
    it('should convert a dictionary to an array', () => {
      const dictionary: TestDictionary = {
        byId: {
          [item1.id]: item1,
          [item2.id]: item2,
          [item3.id]: item3,
        },
        allIds: [item1.id, item2.id, item3.id],
      };
      const actual = toArray(dictionary);
      const expedted = [item1, item2, item3];
      expect(actual).toEqual(expedted);
    });
  });

  describe('find', () => {
    it('should find an item in the dictionary', () => {
      const dictionary: TestDictionary = {
        byId: {
          [item1.id]: item1,
          [item2.id]: item2,
          [item3.id]: item3,
        },
        allIds: [item1.id, item2.id, item3.id],
      };
      const actual = find(dictionary, (item) => item.name === 'item2name');
      expect(actual).toEqual(item2);
    });

    it('should return undefined if the item is not found', () => {
      const dictionary: TestDictionary = {
        byId: {
          [item1.id]: item1,
          [item2.id]: item2,
          [item3.id]: item3,
        },
        allIds: [item1.id, item2.id, item3.id],
      };
      const actual = find(dictionary, (item) => item.name === 'notfound');
      expect(actual).toBeUndefined();
    });
  });

  describe('filter', () => {
    it('should filter items in the dictionary', () => {
      const dictionary: TestDictionary = {
        byId: {
          [item1.id]: item1,
          [item2.id]: item2,
          [item3.id]: item3,
        },
        allIds: [item1.id, item2.id, item3.id],
      };
      const actual = filter(dictionary, (item) =>
        ['item1name', 'item3name'].includes(item.name),
      );
      const expedted: TestDictionary = {
        byId: {
          [item1.id]: item1,
          [item3.id]: item3,
        },
        allIds: [item1.id, item3.id],
      };
      expect(actual).toEqual(expedted);
    });
  });

  describe('sort', () => {
    it('should sort a dictionary by id', () => {
      const dictionary: TestDictionary = {
        byId: {
          [item3.id]: item3,
          [item1.id]: item1,
          [item2.id]: item2,
        },
        allIds: [item3.id, item1.id, item2.id],
      };

      const actual = sort(dictionary, (a, b) => a.id.localeCompare(b.name));
      const expedted: TestDictionary = {
        byId: {
          [item1.id]: item1,
          [item2.id]: item2,
          [item3.id]: item3,
        },
        allIds: [item1.id, item2.id, item3.id],
      };
      expect(actual).toEqual(expedted);
    });
  });
});
