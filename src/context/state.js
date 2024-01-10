import { useState } from "react";
import Context from "./usecontext";


const ContextState = (props) => {

    const state_1= {
        name: 'anjeela',
        class: '2nd Year'
    }

    const [state, setState] = useState(state_1);

    const update =()=>{
        setTimeout(()=>{
            setState({
                name: 'ali',
            class: '1st Year'
            })
        }, 1000)
       
    }

    return (
        <Context.Provider value={{state, update}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;