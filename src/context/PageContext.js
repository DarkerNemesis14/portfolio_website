import { createContext, useReducer, useEffect } from "react"

const PageContext = createContext()

const pageReducer = (state, action) => {
    switch (action.type){
        case "MASTER":
            return {
                master: true,
                about: false,
                works: false
            }
        case "ABOUT":
            return {
                master: false,
                about: true,
                works: false
            }
        case "WORKS":
            return {
                master: false,
                about: false,
                works: true
            }
        default:
            return state
    }
}

const PageContextProv = ({ children }) => {
    const [state, dispatch] = useReducer(pageReducer, {
        master: false,
        about: false,
        works: false
    })

    return (
        <PageContext.Provider value={{ ...state, dispatch }}>
            { children }
        </PageContext.Provider>
    )
}

export { PageContext, PageContextProv, pageReducer }