import {useHistory} from "react-router-dom";
import React, {useEffect, useState, createContext, useContext} from "react";
import Test from "../test";

const TimeContext = createContext({time: 0})

const _Context = () => {
    const history = useHistory();
    const [{time}, setContext] = useContext(TimeContext)

    const [t, setT] = useState(0);


    useEffect(() => {
        const tt = setInterval(() => {
            setContext((state) => ({...state, time: state.time + 1}))
        }, 1000)

        setT(tt);
    }, []);

    useEffect(() => () => {
        clearInterval(t);
    }, [t])

    return (
        <>
            <p>Context</p>
            <button onClick={() => history.push('/')}>home</button>
            <Test name="context 1"/>
            <p>Seconds passed: {time}</p>
        </>
    )
}

const Context = () => {
    const [context, setContext] = useState({time: 0});

    return (
        <TimeContext.Provider value={[context, setContext]}>
            <_Context/>
        </TimeContext.Provider>
    )
}

export default Context;
