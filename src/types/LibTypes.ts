// Library functions

export type GetEtherBalance = (address: string) => Promise<number>;

export type GetEnsName = (address: string) => Promise<string> | undefined;

export type GetTwitterHandle = (ens: string) => Promise<string> | undefined;

export type ResolveEns = (ens: string) => Promise<string> | undefined;
