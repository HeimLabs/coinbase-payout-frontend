import { http, createConfig } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
    chains: [import.meta.env.VITE_APP_APP_ENV == "production" ? base : baseSepolia],
    connectors: [
        coinbaseWallet({ appName: 'Batch Payouts', preference: 'smartWalletOnly' }),
    ],
    // @ts-ignore
    transports: import.meta.env.VITE_APP_APP_ENV == "production"
        ? {
            [base.id]: http(),
        }
        : {
            [baseSepolia.id]: http(),
        },
});

declare module 'wagmi' {
    interface Register {
        config: typeof config;
    }
}
