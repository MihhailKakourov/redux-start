import React from "react"
import ReactDOM from "react-dom"
import {bindActionCreators, createStore} from "redux"
import reducer from "./reducer"
import * as actions from "./actions"

const store = createStore(reducer)

const {dispatch, subscribe, getState} = store

const update = () => {
    document.getElementById("counter").textContent = store.getState().value
}

subscribe(update)

const {inc, dec, inc5, dec5, rnd} = bindActionCreators( actions, dispatch)


document.getElementById("inc").addEventListener("click", inc)

document.getElementById("dec").addEventListener("click", dec)

document.getElementById("inc5").addEventListener("click", inc5)

document.getElementById("dec5").addEventListener("click", dec5)

document.getElementById("rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10)
    rnd(value)
})

ReactDOM.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>,
    document.getElementById("root")
)
