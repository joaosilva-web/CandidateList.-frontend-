import { createContext, useReducer, useState } from "react";
import { IEmail, emailInitialState, emailReducer  } from '../reducers/emailReducer'
import { reducerActionType } from "../types/reducerActionType";

interface ICntext {
    state: IInitialState;
    dispatch: React.Dispatch<any>
}

interface IInitialState {
    email:  IEmail;
}

const initialState = {
    email: emailInitialState
}

export const Context = createContext<ICntext>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: IInitialState, action: reducerActionType) => ({
    email: emailReducer(state.email, action)
})

export const ContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    const [candidate, setCandidate] = useState();

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}