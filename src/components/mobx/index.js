import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite"
import {makeAutoObservable} from "mobx"
import React, {useEffect, useState} from "react";
import Test from "../test";

class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const myTimer = new Timer()

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({timer}) => <p>Seconds passed: {timer.secondsPassed}</p>)

function Mobx() {
    const history = useHistory();
    const [t, setT] = useState(0);

    useEffect(() => {
        const tt = setInterval(() => {
            myTimer.increaseTimer()
        }, 1000)

        setT(tt);
    }, []);

    useEffect(() => () => {
        clearInterval(t);
    }, [t])

    return (
        <>
            <div>Mobx</div>
            <p>
                <button onClick={() => history.push('/')}>home</button>
            </p>
            <Test name="mobx 1"/>
            <TimerView timer={myTimer}/>
        </>
    )
}

export default Mobx;

