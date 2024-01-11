import { useState } from "react";
import Context from "./usecontext";



// Component for  managing states.
const ContextState = (props) => {
// initial state.
    const state_1= {
        name: 'anjeela',
        class: '2nd Year'
    }
// State that is going to be update.
    const [state, setState] = useState(state_1);


    // Function for updating the state.
    const update =()=>{
        setTimeout(()=>{
            setState({
                name: 'ali',
            class: '1st Year'
            })
        }, 1000)
       
    }

    return (

        // we wrap the childern within the Context so that we could used state or update our state in our project any where.
        <Context.Provider value={{state, update}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;