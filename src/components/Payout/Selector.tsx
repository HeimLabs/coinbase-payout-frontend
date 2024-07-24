import React from "react";
import styles from "../../styles/Payout/Selector.module.scss";
import { moneyTransferIcon, sendMoneyIcon } from "../../assets";
import { useAccount } from "wagmi";
import QRCode from 'qrcode.react';

type SelectorProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Selector({ setStep }: SelectorProps): React.JSX.Element {
    const { address } = useAccount();

    return (
        <div className={styles.main}>
            <div className={styles.optionContainer}>
                <div className={styles.option}>
                    <img src={moneyTransferIcon} alt="On Ramp" />
                    <span className={styles.title}>Buy USDC</span>
                    <span className={styles.subtitle}>$1USD=$1USDC</span>
                </div>
                <div className={`${styles.option} ${styles.disabled}`}>
                    <QRCode size={80} value={`ethereum:${address}@8453?token=USDC`} />
                    <span className={styles.title}>Receive USDC</span>
                    <span className={styles.subtitle}>100% Free</span>
                </div>
            </div>
            <div className={styles.optionContainer}>
                <div className={styles.option} onClick={() => setStep(1)}>
                    <img src={sendMoneyIcon} alt="Send Payments" />
                    <span className={styles.title}>Make Payments</span>
                    <span className={styles.subtitle}>Upload CSV</span>
                </div>
            </div>
        </div>
    );
};