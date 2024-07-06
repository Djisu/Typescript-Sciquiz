declare module 'ssl-root-cas' {
  export function defaults(): string[];
  export function inject(certs: string[]): void;
}