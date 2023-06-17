import React, { useState, createContext } from 'react'

export const Description = createContext({
    hideDesc: false,
    descHandler: () => { }
})

const DescContext = (props) => {

    const [hideDesc, setHideDesc] = useState(false)

    function descHandler(boolData) {
        setHideDesc(boolData)
    }
    return (
        <Description.Provider value={{
            hideDesc: hideDesc, descHandler: descHandler
        }}>
            {props.children}
        </Description.Provider>
    )
}

export default DescContext
