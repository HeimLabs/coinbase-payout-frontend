import { useAccount } from 'wagmi'
import Connect from './components/Connect'
import Payout from './components/Payout'
import GetStarted from './components/GetStarted';
import { useState } from 'react';
import styles from "./styles/Layout.module.scss";

function App() {
    const account = useAccount()
    const [step, setStep] = useState(0);

    const setupPage = () => {
        if (!account.isConnected) {
            if (step == 0)
                return (<GetStarted setStep={setStep} />)
            if (step == 1)
                return (<Connect />)
        }
        else
            return (<Payout />)
    }

    return (
        <div className={styles.main}>
            {setupPage()}
        </div>
    )


}

export default App
