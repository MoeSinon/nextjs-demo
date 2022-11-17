/* 65d3c687dfc3493dcbc914675d9b2a898ac9efcc
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export declare type DeleteAddressMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;
export declare type DeleteAddressMutation = {
  __typename?: 'Mutation';
  deleteAddress: {
    __typename?: 'Address';
    id: string;
    title: string;
    type: Types.AddressType;
    default: boolean;
    address: {
      __typename?: 'UserAddress';
      country?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      street_address?: string | null;
    };
  };
};
export declare const DeleteAddressDocument: Apollo.DocumentNode;
export declare type DeleteAddressMutationFn = Apollo.MutationFunction<DeleteAddressMutation, DeleteAddressMutationVariables>;
/**
 * __useDeleteAddressMutation__
 *
 * To run a mutation, you first call `useDeleteAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAddressMutation, { data, loading, error }] = useDeleteAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */

export declare function useDeleteAddressMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAddressMutation, DeleteAddressMutationVariables>): Apollo.MutationTuple<DeleteAddressMutation, Types.Exact<{
  id: string;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type DeleteAddressMutationHookResult = ReturnType<typeof useDeleteAddressMutation>;
export declare type DeleteAddressMutationResult = Apollo.MutationResult<DeleteAddressMutation>;
export declare type DeleteAddressMutationOptions = Apollo.BaseMutationOptions<DeleteAddressMutation, DeleteAddressMutationVariables>;