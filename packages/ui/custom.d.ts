declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
  interface Global {
    fetch: typeof fetch;
  }
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const node: DocumentNode;
  export default node;
}
