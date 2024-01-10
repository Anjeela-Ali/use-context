import { useState } from "react";
import Context from "./usecontext";


const ContextState = (props) => {

    const state = {
        name: 'anjeela',
        class: '2nd Year'
    }

    return (
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;