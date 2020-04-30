import { validators as messages } from './messages';

import { MetaMaskInpageProvider } from './types';

/**
 * Validate Metamask's internal state object.
 * Basically, it checks for important props to be there.
 *
 * @method validateMetamaskState
 *
 * @param {Object} stateObject State object who's props to check
 *
 * @return {boolean} Throws if object is not valid. If it's all good, it returns true.
 */
export const validateMetaMaskState = (
  stateObject: MetaMaskInpageProvider,
): boolean => {
  if (!stateObject || typeof stateObject !== 'object') {
    throw new Error(messages.noState);
  }
  if (!stateObject.selectedAddress) {
    throw new Error(messages.noStateAddress);
  }
  if (!stateObject.networkVersion) {
    throw new Error(messages.noStateNetwork);
  }
  return true;
};
