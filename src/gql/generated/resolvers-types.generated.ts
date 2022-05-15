import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Contract = {
  __typename?: 'Contract';
  address: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nfts?: Maybe<Array<Maybe<Nft>>>;
};

export type Nft = {
  __typename?: 'NFT';
  amount?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['String']>;
  block_number_minted?: Maybe<Scalars['String']>;
  contract_type?: Maybe<Scalars['String']>;
  frozen?: Maybe<Scalars['Int']>;
  is_valid?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_of?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  synced_at?: Maybe<Scalars['String']>;
  syncing?: Maybe<Scalars['Int']>;
  token_address?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  token_uri?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  contract?: Maybe<Contract>;
  userByAddr?: Maybe<User>;
  userByEns?: Maybe<User>;
};


export type QueryContractArgs = {
  address: Scalars['String'];
};


export type QueryUserByAddrArgs = {
  address: Scalars['String'];
};


export type QueryUserByEnsArgs = {
  ens: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  balance: Scalars['Float'];
  ens?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contract: ResolverTypeWrapper<Contract>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  NFT: ResolverTypeWrapper<Nft>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Contract: Contract;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  NFT: Nft;
  Query: {};
  String: Scalars['String'];
  User: User;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nfts?: Resolver<Maybe<Array<Maybe<ResolversTypes['NFT']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFT'] = ResolversParentTypes['NFT']> = {
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  block_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  block_number_minted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frozen?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_valid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_of?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  synced_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  syncing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  token_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractArgs, 'address'>>;
  userByAddr?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByAddrArgs, 'address'>>;
  userByEns?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEnsArgs, 'ens'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ens?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Contract?: ContractResolvers<ContextType>;
  NFT?: NftResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

