import { GNOSIS, MAINNET } from '$lib/config/chains';

export const TOKENS = {
	[GNOSIS]: [
		{
			name: 'Dai Stablecoin',
			symbol: 'DAI',
			decimals: 18,
			address: '0x44fA8E6f47987339850636F88629646662444217',
			isStable: true,
			imageUrl: '/dai.png'
		},
		{
			name: 'OLAS',
			symbol: 'OLAS',
			decimals: 18,
			address: '0x79C872Ed3Acb3fc5770dd8a0cD9Cd5dB3B3Ac985',
			isStable: true,
			imageUrl: '/olas.png'
		}
	],
	[MAINNET]: [
		{
			name: 'Dai Stablecoin',
			symbol: 'DAI',
			decimals: 18,
			address: '0x44fA8E6f47987339850636F88629646662444217',
			isStable: true,
			imageUrl: '/dai.png'
		},
		{
			name: 'OLAS',
			symbol: 'OLAS',
			decimals: 18,
			address: '0x79C872Ed3Acb3fc5770dd8a0cD9Cd5dB3B3Ac985',
			isStable: true,
			imageUrl: '/olas.png'
		},
		{
			name: 'USD Coin',
			symbol: 'USDC',
			decimals: 6,
			address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
			isStable: true,
			imageUrl: 'usdc.png'
		},
		{
			name: 'Tether',
			symbol: 'USDT',
			decimals: 6,
			address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
			isStable: true,
			imageUrl: '/tether.png'
		}
	]
};

const CHAIN_IDS = [GNOSIS, MAINNET];

export const TOKENS_MAP = {};
export const TOKENS_BY_SYMBOL_MAP = {};

for (let j = 0; j < CHAIN_IDS.length; j++) {
	const chainId = CHAIN_IDS[j];
	TOKENS_MAP[chainId] = {};
	TOKENS_BY_SYMBOL_MAP[chainId] = {};
	let tokens = TOKENS[chainId];

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		TOKENS_MAP[chainId][token.address] = token;
		TOKENS_BY_SYMBOL_MAP[chainId][token.symbol] = token;
	}
}

export function getChainTokens(chainId) {
	return TOKENS[chainId];
}

export function getToken(chainId, address) {
	if (!TOKENS_MAP[chainId]) {
		throw new Error(`Incorrect chainId ${chainId}`);
	}
	if (!TOKENS_MAP[chainId][address]) {
		throw new Error(`Incorrect address "${address}" for chainId ${chainId}`);
	}
	return TOKENS_MAP[chainId][address];
}

export const getLogo = (currency, chainId = MAINNET) => {
	console.log('currency', currency);
	console.log('chainId', chainId);
	console.log('TOKENS_BY_SYMBOL_MAP', TOKENS_BY_SYMBOL_MAP);
	if (currency && !!chainId) {
		const token = TOKENS_BY_SYMBOL_MAP[chainId]?.[currency];

		console.log('getTokenBySymbol', token);
		if (!token) return null;
		return token.imageUrl;
	}
	return null;
};
