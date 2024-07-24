import React from "react";
import styles from "../styles/Connect.module.scss";
import { logo } from "../assets";
import { useConnect } from "wagmi";

export default function Connect(): React.JSX.Element {
    const { connectors, connect, error, isPending } = useConnect();

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <img src={logo} alt="Paymaker Logo" />
                <div className={styles.taglines}>
                    Send USDC to many people. <br />
                    Fast. Easy. Secure. <br />
                    100% Free.
                </div>
            </div>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <h1>1</h1>
                    <span className={styles.title}>
                        Create a free <br />
                        Coinbase Smart Wallet <br />
                        (or Login with yours)
                    </span>
                    <span className={styles.subtitle}>
                        Only takes a few seconds
                    </span>
                </div>
                <div>
                    <button
                        key={connectors[0].uid}
                        className={`${styles.connectBttn} ${isPending ? styles.shimmer : ""}`}
                        onClick={() => connect({ connector: connectors[0] })}
                        type="button"
                    >
                        Create or Connect Wallet
                    </button>
                    {error && <span className={styles.errorMsg}>{error.message}</span>}
                </div>
            </div>
        </div>
    );
};