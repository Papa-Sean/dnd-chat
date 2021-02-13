import React from 'react';
import io from 'socket.io-client'

export const CTX = React.createContext();


const initState = {
    general: [
        {
            from: 'Papa',
            msg: 'Hello D&D World!'
        },
        {
            from: 'Shane',
            msg: 'Hello D&D Nerd!'
        },
        {
            from: 'John',
            msg: 'Im not sleeping you are sleeping!'
        }
    ],
    GENERAL2: [
        {
            from: 'Papa',
            msg: 'Hello D&D World!'
        },
        {
            from: 'Shane',
            msg: 'Hello D&D Nerd!'
        },
        {
            from: 'John',
            msg: 'Im not sleeping you are sleeping!'
        }
    ]
}
function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
        case 'RECIEVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from,msg}
                ]
            }
        default:
            return state
    }
};

let socket;

export default function Store(props) {

    if (!socket) {
        socket = io(':3001')
    }

    const reducerHook = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value={reducerHook}>
            { props.children }
        </CTX.Provider>
    )
};

