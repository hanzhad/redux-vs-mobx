import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Test from "../test";

const State = () => {
    const history = useHistory();
    const [time, setTime] = useState(0);
    const [t, setT] = useState(0);


    useEffect(() => {
        const tt = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000)

        setT(tt);
    }, []);

    useEffect(() => () => {
        clearInterval(t);
    }, []);


    return (
        <>
            <p>State</p>
            <button onClick={() => history.push('/')}>home</button>
            <Test name="state 1"/>
            <p>Seconds passed: {time}</p>
        </>
    )
}

export default State;
