// Library functions

export type GetEtherBalance = (address: string) => Promise<number>;

export type GetEnsName = (address: string) => Promise<string> | undefined;
