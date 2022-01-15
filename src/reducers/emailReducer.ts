import { reducerActionType } from '../types/reducerActionType'

export interface IEmail {
    email: string
}

export const emailInitialState: IEmail = {
    email: ""
}

export const emailReducer = (state: IEmail, action: reducerActionType) => {
    switch (action.type) {
        case "CHANGE": 
            return {...state, email: action.payload.email};
        break;
    }

    return state;
}