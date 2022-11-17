/* c7024ad2e96e826b650eedbf7bb2498de6a090c5
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export declare type OrderPartsFragment = {
  __typename?: 'Order';
  id: string;
  tracking_number: string;
  customer_contact: string;
  language: string;
  amount: number;
  sales_tax: number;
  total: number;
  paid_total: number;
  payment_id?: string | null;
  payment_gateway?: Types.PaymentGatewayType | null;
  discount?: number | null;
  delivery_fee: number;
  delivery_time?: string | null;
  created_at: any;
  updated_at: any;
  customer: {
    __typename?: 'User';
    name: string;
  };
  status: {
    __typename?: 'OrderStatus';
    id: string;
    name: string;
    color: string;
    serial: number;
  };
  products: Array<{
    __typename?: 'Product';
    id: string;
    name: string;
    slug: string;
    price?: number | null;
    sale_price?: number | null;
    created_at: any;
    shop_id?: string | null;
    quantity: number;
    unit: string;
    my_review?: Array<{
      __typename?: 'Review';
      id: string;
      variation_option_id: string;
      rating: number;
      comment: string;
      photos: Array<{
        __typename?: 'Attachment';
        id?: string | null;
        thumbnail?: string | null;
        original?: string | null;
      }>;
    }> | null;
    image?: {
      __typename?: 'Attachment';
      id?: string | null;
      original?: string | null;
      thumbnail?: string | null;
    } | null;
    variation_options?: Array<{
      __typename?: 'Variation';
      id: string;
      title: string;
    }> | null;
    pivot?: {
      __typename?: 'OrderProductPivot';
      variation_option_id?: string | null;
      order_quantity: number;
      unit_price: number;
      subtotal: number;
    } | null;
  }>;
  coupon?: {
    __typename?: 'Coupon';
    code: string;
    amount: number;
    type: Types.CouponType;
    id: string;
  } | null;
  billing_address?: {
    __typename?: 'UserAddress';
    country?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    street_address?: string | null;
  } | null;
  shipping_address?: {
    __typename?: 'UserAddress';
    country?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    street_address?: string | null;
  } | null;
  refund?: {
    __typename?: 'Refund';
    id: string;
    title: string;
    amount: string;
    status?: Types.RefundStatus | null;
  } | null;
  wallet_point?: {
    __typename?: 'WalletPoint';
    id: string;
    amount: number;
  } | null;
};
export declare type OrdersQueryVariables = Types.Exact<{
  tracking_number?: Types.InputMaybe<Types.Scalars['String']>;
  orderBy?: Types.InputMaybe<Types.Scalars['String']>;
  sortedBy?: Types.InputMaybe<Types.Scalars['String']>;
  customer_id?: Types.InputMaybe<Types.Scalars['ID']>;
  shop_id?: Types.InputMaybe<Types.Scalars['ID']>;
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  page?: Types.InputMaybe<Types.Scalars['Int']>;
}>;
export declare type OrdersQuery = {
  __typename?: 'Query';
  orders: {
    __typename?: 'OrderPaginator';
    data: Array<{
      __typename?: 'Order';
      id: string;
      tracking_number: string;
      customer_contact: string;
      language: string;
      amount: number;
      sales_tax: number;
      total: number;
      paid_total: number;
      payment_id?: string | null;
      payment_gateway?: Types.PaymentGatewayType | null;
      discount?: number | null;
      delivery_fee: number;
      delivery_time?: string | null;
      created_at: any;
      updated_at: any;
      customer: {
        __typename?: 'User';
        name: string;
      };
      status: {
        __typename?: 'OrderStatus';
        id: string;
        name: string;
        color: string;
        serial: number;
      };
      products: Array<{
        __typename?: 'Product';
        id: string;
        name: string;
        slug: string;
        price?: number | null;
        sale_price?: number | null;
        created_at: any;
        shop_id?: string | null;
        quantity: number;
        unit: string;
        my_review?: Array<{
          __typename?: 'Review';
          id: string;
          variation_option_id: string;
          rating: number;
          comment: string;
          photos: Array<{
            __typename?: 'Attachment';
            id?: string | null;
            thumbnail?: string | null;
            original?: string | null;
          }>;
        }> | null;
        image?: {
          __typename?: 'Attachment';
          id?: string | null;
          original?: string | null;
          thumbnail?: string | null;
        } | null;
        variation_options?: Array<{
          __typename?: 'Variation';
          id: string;
          title: string;
        }> | null;
        pivot?: {
          __typename?: 'OrderProductPivot';
          variation_option_id?: string | null;
          order_quantity: number;
          unit_price: number;
          subtotal: number;
        } | null;
      }>;
      coupon?: {
        __typename?: 'Coupon';
        code: string;
        amount: number;
        type: Types.CouponType;
        id: string;
      } | null;
      billing_address?: {
        __typename?: 'UserAddress';
        country?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
        street_address?: string | null;
      } | null;
      shipping_address?: {
        __typename?: 'UserAddress';
        country?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
        street_address?: string | null;
      } | null;
      refund?: {
        __typename?: 'Refund';
        id: string;
        title: string;
        amount: string;
        status?: Types.RefundStatus | null;
      } | null;
      wallet_point?: {
        __typename?: 'WalletPoint';
        id: string;
        amount: number;
      } | null;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem: number;
      hasMorePages: boolean;
      lastItem: number;
      lastPage: number;
      perPage: number;
      total: number;
    };
  };
};
export declare type PaginatorPartsFragment = {
  __typename?: 'PaginatorInfo';
  count: number;
  currentPage: number;
  firstItem: number;
  hasMorePages: boolean;
  lastItem: number;
  lastPage: number;
  perPage: number;
  total: number;
};
export declare type OrderQueryVariables = Types.Exact<{
  tracking_number?: Types.InputMaybe<Types.Scalars['String']>;
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;
export declare type OrderQuery = {
  __typename?: 'Query';
  order: {
    __typename?: 'Order';
    id: string;
    tracking_number: string;
    customer_contact: string;
    language: string;
    amount: number;
    sales_tax: number;
    total: number;
    paid_total: number;
    payment_id?: string | null;
    payment_gateway?: Types.PaymentGatewayType | null;
    discount?: number | null;
    delivery_fee: number;
    delivery_time?: string | null;
    created_at: any;
    updated_at: any;
    children: Array<{
      __typename?: 'Order';
      id: string;
      tracking_number: string;
      customer_contact: string;
      language: string;
      amount: number;
      sales_tax: number;
      total: number;
      paid_total: number;
      payment_id?: string | null;
      payment_gateway?: Types.PaymentGatewayType | null;
      discount?: number | null;
      delivery_fee: number;
      delivery_time?: string | null;
      created_at: any;
      updated_at: any;
      customer: {
        __typename?: 'User';
        name: string;
      };
      status: {
        __typename?: 'OrderStatus';
        id: string;
        name: string;
        color: string;
        serial: number;
      };
      products: Array<{
        __typename?: 'Product';
        id: string;
        name: string;
        slug: string;
        price?: number | null;
        sale_price?: number | null;
        created_at: any;
        shop_id?: string | null;
        quantity: number;
        unit: string;
        my_review?: Array<{
          __typename?: 'Review';
          id: string;
          variation_option_id: string;
          rating: number;
          comment: string;
          photos: Array<{
            __typename?: 'Attachment';
            id?: string | null;
            thumbnail?: string | null;
            original?: string | null;
          }>;
        }> | null;
        image?: {
          __typename?: 'Attachment';
          id?: string | null;
          original?: string | null;
          thumbnail?: string | null;
        } | null;
        variation_options?: Array<{
          __typename?: 'Variation';
          id: string;
          title: string;
        }> | null;
        pivot?: {
          __typename?: 'OrderProductPivot';
          variation_option_id?: string | null;
          order_quantity: number;
          unit_price: number;
          subtotal: number;
        } | null;
      }>;
      coupon?: {
        __typename?: 'Coupon';
        code: string;
        amount: number;
        type: Types.CouponType;
        id: string;
      } | null;
      billing_address?: {
        __typename?: 'UserAddress';
        country?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
        street_address?: string | null;
      } | null;
      shipping_address?: {
        __typename?: 'UserAddress';
        country?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
        street_address?: string | null;
      } | null;
      refund?: {
        __typename?: 'Refund';
        id: string;
        title: string;
        amount: string;
        status?: Types.RefundStatus | null;
      } | null;
      wallet_point?: {
        __typename?: 'WalletPoint';
        id: string;
        amount: number;
      } | null;
    }>;
    customer: {
      __typename?: 'User';
      name: string;
    };
    status: {
      __typename?: 'OrderStatus';
      id: string;
      name: string;
      color: string;
      serial: number;
    };
    products: Array<{
      __typename?: 'Product';
      id: string;
      name: string;
      slug: string;
      price?: number | null;
      sale_price?: number | null;
      created_at: any;
      shop_id?: string | null;
      quantity: number;
      unit: string;
      my_review?: Array<{
        __typename?: 'Review';
        id: string;
        variation_option_id: string;
        rating: number;
        comment: string;
        photos: Array<{
          __typename?: 'Attachment';
          id?: string | null;
          thumbnail?: string | null;
          original?: string | null;
        }>;
      }> | null;
      image?: {
        __typename?: 'Attachment';
        id?: string | null;
        original?: string | null;
        thumbnail?: string | null;
      } | null;
      variation_options?: Array<{
        __typename?: 'Variation';
        id: string;
        title: string;
      }> | null;
      pivot?: {
        __typename?: 'OrderProductPivot';
        variation_option_id?: string | null;
        order_quantity: number;
        unit_price: number;
        subtotal: number;
      } | null;
    }>;
    coupon?: {
      __typename?: 'Coupon';
      code: string;
      amount: number;
      type: Types.CouponType;
      id: string;
    } | null;
    billing_address?: {
      __typename?: 'UserAddress';
      country?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      street_address?: string | null;
    } | null;
    shipping_address?: {
      __typename?: 'UserAddress';
      country?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      street_address?: string | null;
    } | null;
    refund?: {
      __typename?: 'Refund';
      id: string;
      title: string;
      amount: string;
      status?: Types.RefundStatus | null;
    } | null;
    wallet_point?: {
      __typename?: 'WalletPoint';
      id: string;
      amount: number;
    } | null;
  };
};
export declare type OrderStatusesQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  page?: Types.InputMaybe<Types.Scalars['Int']>;
  text?: Types.InputMaybe<Types.Scalars['String']>;
  language?: Types.InputMaybe<Types.Scalars['String']>;
  orderBy?: Types.InputMaybe<Array<Types.QueryOrderStatusesOrderByOrderByClause> | Types.QueryOrderStatusesOrderByOrderByClause>;
}>;
export declare type OrderStatusesQuery = {
  __typename?: 'Query';
  orderStatuses: {
    __typename?: 'OrderStatusPaginator';
    data: Array<{
      __typename?: 'OrderStatus';
      id: string;
      name: string;
      color: string;
      serial: number;
    }>;
    paginatorInfo: {
      __typename?: 'PaginatorInfo';
      count: number;
      currentPage: number;
      firstItem: number;
      hasMorePages: boolean;
      lastItem: number;
      lastPage: number;
      perPage: number;
      total: number;
    };
  };
};
export declare type VerifyCheckoutMutationVariables = Types.Exact<{
  input: Types.CheckoutVerificationInput;
}>;
export declare type VerifyCheckoutMutation = {
  __typename?: 'Mutation';
  verifyCheckout: {
    __typename?: 'VerifiedCheckoutData';
    total_tax: number;
    shipping_charge: number;
    unavailable_products: Array<string>;
    wallet_amount: number;
    wallet_currency: number;
  };
};
export declare type CreateOrderMutationVariables = Types.Exact<{
  input: Types.CreateOrderInput;
}>;
export declare type CreateOrderMutation = {
  __typename?: 'Mutation';
  createOrder: {
    __typename?: 'Order';
    id: string;
    tracking_number: string;
    customer_contact: string;
    language: string;
    amount: number;
    sales_tax: number;
    total: number;
    paid_total: number;
    payment_id?: string | null;
    payment_gateway?: Types.PaymentGatewayType | null;
    discount?: number | null;
    delivery_fee: number;
    delivery_time?: string | null;
    created_at: any;
    updated_at: any;
    customer: {
      __typename?: 'User';
      name: string;
    };
    status: {
      __typename?: 'OrderStatus';
      id: string;
      name: string;
      color: string;
      serial: number;
    };
    products: Array<{
      __typename?: 'Product';
      id: string;
      name: string;
      slug: string;
      price?: number | null;
      sale_price?: number | null;
      created_at: any;
      shop_id?: string | null;
      quantity: number;
      unit: string;
      my_review?: Array<{
        __typename?: 'Review';
        id: string;
        variation_option_id: string;
        rating: number;
        comment: string;
        photos: Array<{
          __typename?: 'Attachment';
          id?: string | null;
          thumbnail?: string | null;
          original?: string | null;
        }>;
      }> | null;
      image?: {
        __typename?: 'Attachment';
        id?: string | null;
        original?: string | null;
        thumbnail?: string | null;
      } | null;
      variation_options?: Array<{
        __typename?: 'Variation';
        id: string;
        title: string;
      }> | null;
      pivot?: {
        __typename?: 'OrderProductPivot';
        variation_option_id?: string | null;
        order_quantity: number;
        unit_price: number;
        subtotal: number;
      } | null;
    }>;
    coupon?: {
      __typename?: 'Coupon';
      code: string;
      amount: number;
      type: Types.CouponType;
      id: string;
    } | null;
    billing_address?: {
      __typename?: 'UserAddress';
      country?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      street_address?: string | null;
    } | null;
    shipping_address?: {
      __typename?: 'UserAddress';
      country?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      street_address?: string | null;
    } | null;
    refund?: {
      __typename?: 'Refund';
      id: string;
      title: string;
      amount: string;
      status?: Types.RefundStatus | null;
    } | null;
    wallet_point?: {
      __typename?: 'WalletPoint';
      id: string;
      amount: number;
    } | null;
  };
};
export declare const OrderPartsFragmentDoc: Apollo.DocumentNode;
export declare const PaginatorPartsFragmentDoc: Apollo.DocumentNode;
export declare const OrdersDocument: Apollo.DocumentNode;
/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      tracking_number: // value for 'tracking_number'
 *      orderBy: // value for 'orderBy'
 *      sortedBy: // value for 'sortedBy'
 *      customer_id: // value for 'customer_id'
 *      shop_id: // value for 'shop_id'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */

export declare function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>): Apollo.QueryResult<OrdersQuery, Types.Exact<{
  tracking_number?: Types.InputMaybe<string> | undefined;
  orderBy?: Types.InputMaybe<string> | undefined;
  sortedBy?: Types.InputMaybe<string> | undefined;
  customer_id?: Types.InputMaybe<string> | undefined;
  shop_id?: Types.InputMaybe<string> | undefined;
  first?: Types.InputMaybe<number> | undefined;
  page?: Types.InputMaybe<number> | undefined;
}>>;
export declare function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>): Apollo.QueryTuple<OrdersQuery, Types.Exact<{
  tracking_number?: Types.InputMaybe<string> | undefined;
  orderBy?: Types.InputMaybe<string> | undefined;
  sortedBy?: Types.InputMaybe<string> | undefined;
  customer_id?: Types.InputMaybe<string> | undefined;
  shop_id?: Types.InputMaybe<string> | undefined;
  first?: Types.InputMaybe<number> | undefined;
  page?: Types.InputMaybe<number> | undefined;
}>>;
export declare type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export declare type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export declare type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export declare const OrderDocument: Apollo.DocumentNode;
/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      tracking_number: // value for 'tracking_number'
 *      id: // value for 'id'
 *   },
 * });
 */

export declare function useOrderQuery(baseOptions?: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>): Apollo.QueryResult<OrderQuery, Types.Exact<{
  tracking_number?: Types.InputMaybe<string> | undefined;
  id?: Types.InputMaybe<string> | undefined;
}>>;
export declare function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>): Apollo.QueryTuple<OrderQuery, Types.Exact<{
  tracking_number?: Types.InputMaybe<string> | undefined;
  id?: Types.InputMaybe<string> | undefined;
}>>;
export declare type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export declare type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export declare type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export declare const OrderStatusesDocument: Apollo.DocumentNode;
/**
 * __useOrderStatusesQuery__
 *
 * To run a query within a React component, call `useOrderStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderStatusesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *      text: // value for 'text'
 *      language: // value for 'language'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */

export declare function useOrderStatusesQuery(baseOptions?: Apollo.QueryHookOptions<OrderStatusesQuery, OrderStatusesQueryVariables>): Apollo.QueryResult<OrderStatusesQuery, Types.Exact<{
  first?: Types.InputMaybe<number> | undefined;
  page?: Types.InputMaybe<number> | undefined;
  text?: Types.InputMaybe<string> | undefined;
  language?: Types.InputMaybe<string> | undefined;
  orderBy?: Types.InputMaybe<Types.QueryOrderStatusesOrderByOrderByClause | Types.QueryOrderStatusesOrderByOrderByClause[]> | undefined;
}>>;
export declare function useOrderStatusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderStatusesQuery, OrderStatusesQueryVariables>): Apollo.QueryTuple<OrderStatusesQuery, Types.Exact<{
  first?: Types.InputMaybe<number> | undefined;
  page?: Types.InputMaybe<number> | undefined;
  text?: Types.InputMaybe<string> | undefined;
  language?: Types.InputMaybe<string> | undefined;
  orderBy?: Types.InputMaybe<Types.QueryOrderStatusesOrderByOrderByClause | Types.QueryOrderStatusesOrderByOrderByClause[]> | undefined;
}>>;
export declare type OrderStatusesQueryHookResult = ReturnType<typeof useOrderStatusesQuery>;
export declare type OrderStatusesLazyQueryHookResult = ReturnType<typeof useOrderStatusesLazyQuery>;
export declare type OrderStatusesQueryResult = Apollo.QueryResult<OrderStatusesQuery, OrderStatusesQueryVariables>;
export declare const VerifyCheckoutDocument: Apollo.DocumentNode;
export declare type VerifyCheckoutMutationFn = Apollo.MutationFunction<VerifyCheckoutMutation, VerifyCheckoutMutationVariables>;
/**
 * __useVerifyCheckoutMutation__
 *
 * To run a mutation, you first call `useVerifyCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCheckoutMutation, { data, loading, error }] = useVerifyCheckoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */

export declare function useVerifyCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCheckoutMutation, VerifyCheckoutMutationVariables>): Apollo.MutationTuple<VerifyCheckoutMutation, Types.Exact<{
  input: Types.CheckoutVerificationInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type VerifyCheckoutMutationHookResult = ReturnType<typeof useVerifyCheckoutMutation>;
export declare type VerifyCheckoutMutationResult = Apollo.MutationResult<VerifyCheckoutMutation>;
export declare type VerifyCheckoutMutationOptions = Apollo.BaseMutationOptions<VerifyCheckoutMutation, VerifyCheckoutMutationVariables>;
export declare const CreateOrderDocument: Apollo.DocumentNode;
export declare type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */

export declare function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>): Apollo.MutationTuple<CreateOrderMutation, Types.Exact<{
  input: Types.CreateOrderInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export declare type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export declare type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;