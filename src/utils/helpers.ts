export const numberWithCommas = (x: string): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getRate = (pricePerEth: string): string => {
  const pricePerEthNum: number = parseFloat(pricePerEth);
  if (pricePerEthNum > 1) {
    throw new Error('input should not be bigger than 1');
  } else if (pricePerEthNum <= 0) {
    throw new Error('input should not be smaller than 0');
  }
  // multiplicative inverse
  const pricePerEthInverted = 1 / pricePerEthNum;
  let rate = pricePerEthInverted;
  // parse integer
  rate = parseInt(rate.toString(), 10);
  // return string integer
  return rate.toString();
};

export const inverseNumber = (nubmerStr: string): string => {
  const numFloat: number = parseFloat(nubmerStr);
  if (numFloat <= 0) {
    throw new Error('input should not be smaller than 0');
  }
  // multiplicative inverse
  const numFloatInverted: number = 1 / numFloat;
  // return string
  return numFloatInverted.toString();
};

export const changeQueryStringToJSON = (qs: string): any => {
  if (!qs) {
    return {};
  }
  const pairs = qs.split('&');

  const result = {};
  pairs.forEach((item) => {
    const pair = item.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  return JSON.parse(JSON.stringify(result));
};

export const getInputValidationState = (key: string, value: string, regex: RegExp) => {
  const isInvalid: boolean = regex.test(value);
  const keyValid = key + 'Valid';
  const keyInvalid = key + 'Invalid';
  const state = {};
  if (!value) {
    state[keyValid] = false;
    state[keyInvalid] = false;
    return state;
  }
  if (isInvalid) {
    state[keyValid] = true;
    state[keyInvalid] = false;
    return state;
  } else {
    state[keyValid] = false;
    state[keyInvalid] = true;
    return state;
  }
};

export const getAddressURLFromEtherScan = (address: string, network: string): string => {
  let link = `https://${network}.etherscan.io/address/${address}`;
  if (network === 'mainnet') {
    link = `https://etherscan.io/address/${address}`;
  }
  return link;
};
