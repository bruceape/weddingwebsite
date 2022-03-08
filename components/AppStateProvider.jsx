import React from 'react'

export const Context = React.createContext()

function reducer(state, action) {
	console.log(action)
	console.log(state)
	switch (action.type) {
		case 'openMenu':
			return {...state, menuOpen: true}
		case 'closeMenu':
			return {...state, menuOpen: false}
		default:
			return state;
	}
}

const initialState = {menuOpen: false}

export function Provider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	const value = {
		state: state,
		updateName: name => {
			dispatch({type: 'updateName', name})
		},
		openMenu: () => {
			dispatch({type: 'openMenu'})
		},
		closeMenu: () => {
			dispatch({type: 'closeMenu'})
		}
	}

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}
