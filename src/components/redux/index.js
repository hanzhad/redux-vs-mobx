import {useHistory} from "react-router-dom";
import {createStore} from "redux"
import {Provider, useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Test from "../test";

const INCREASE_TIMER_ACTION = 'INCREASE_TIMER_ACTION';

const initialState = {
    time: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_TIMER_ACTION:
            return {
                ...state,
                time: state.time + 1,
            }
        default:
            return state
    }
}

const changeTime = () => ({ type: INCREASE_TIMER_ACTION })

function _Redux() {
    const [t, setT] = useState(0);

    const history = useHistory();

    const time = useSelector(state => state.time)

    const dispatch = useDispatch()

    useEffect(() => {
        const tt = setInterval(() => {
            dispatch(changeTime());
        }, 1000)

        setT(tt);
    }, []);

    useEffect(() => () => {
        clearInterval(t);
    }, [t])

    return (
        <>
            <div>Redux</div>
            <p>
                <button onClick={() => history.push('/')}>home</button>
            </p>
            <Test name="mobx 1"/>
            <p>Seconds passed: {time}</p>
        </>

    )
}

const store = createStore(reducer);

const Redux = () => (
    <Provider store={store}>
        <_Redux/>
    </Provider>
);

export default Redux;
