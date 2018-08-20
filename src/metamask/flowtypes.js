/* @flow */

export type MetamaskInpageProviderType = {
  mux: Object,
  publicConfigStore: {
    _events: Object,
    _state: Object,
  },
  rpcEngine: Object,
};

export type Web3CallbackType = (error: Error, result: string) => any;

export type MetamaskStateEventsObserverType = (state: Object) => any;

export type MetamaskWalletConstructorArgumentsType = {
  address: string,
};

export type signMessageMethodType = (
  signature: string,
  currentAddress: string,
  callback: Web3CallbackType,
) => void;

export type signTrasactionMethodType = (
  transactionObject: Object,
  callback: Web3CallbackType,
) => void;

export type verifyMessageMethodType = (
  message: string,
  signature: string,
  callback: Web3CallbackType,
) => void;