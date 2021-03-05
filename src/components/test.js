import React from "react";
import SubTest from "./subTest";

const Test = ({name}) => {
    console.log('test render', name);
    return (
        <>
            <p>{name}</p>
            <SubTest name={name}/>
        </>
    );
}

export default Test;
