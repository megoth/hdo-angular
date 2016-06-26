class Query {
  boolean: boolean;
  facet: boolean;
  keyword: boolean;
}

class Term {
  active: boolean;
  clear_url: string;
  count: number;
  filter_url: string;
  name: string;
}

export class Navigator {
  filter_url: string;
  param: string;
  query: Object;
  terms: Term[];
  title: string;
  type: Query;
  value: string;
}