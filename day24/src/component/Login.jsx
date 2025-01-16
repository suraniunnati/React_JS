import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { error, loding, success } from '../redux/loginReducer/actionType'

function Login() {
    let [state, setState] = useState({
        email: "",
        password: ""
    })
    const handle = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const data = useSelector((store) => store.reducer)
    console.log(data)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: loding })
        axios.get(`http://localhost:3000/user?email=${state.email}`)
            .then((res) => {
                console.log(res.data)

                dispatch({ type: success, payload: res.data[0].username })
                navigate(to = "/home")

            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: error })
            })

        setState({
            email: "",
            password: ""
        })
    }
    const handleblur=()=>{}
    const handlefocus=()=>{}

    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input type="text" placeholder='email' name='email' value={state.email} onChange={handle} onBlur={handleblur} onFocus={handlefocus}/>
                <input type="text" placeholder='password' name='password' value={state.password} onChange={handle} onBlur={handleblur} onFocus={handlefocus}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login