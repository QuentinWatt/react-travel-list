export interface CountrySearchResult<T extends string = string> {
  name: {
    common: string;
    official: string;
  };
  flags?: {
    png: string;
    alt: string;
  };
  capital?: string[];
  currencies?: Partial<
    Record<
      T,
      {
        name: string;
        symbol: string;
      }
    >
  >;
}
