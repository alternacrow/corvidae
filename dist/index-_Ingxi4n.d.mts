declare const mulberry32: (initialSeed?: number) => () => number;

declare const index_mulberry32: typeof mulberry32;
declare namespace index {
  export { index_mulberry32 as mulberry32 };
}

export { index as i, mulberry32 as m };
