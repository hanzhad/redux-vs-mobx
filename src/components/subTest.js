import React from "react";

const SubTest = ({name}) => {
    console.log('test in test render', name);
    return (
        <>
            <p>test in test {name}</p>
        </>
    );
}

export default SubTest;
