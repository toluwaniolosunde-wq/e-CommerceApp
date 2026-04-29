import React, {useState} from "react";
import styles from './Login.module.css'
import {useLoginMutation} from "../../apis/productApi.jsx";
import {useNavigate} from "react-router";


const Login = () => {
    const userDetails = {
        username: "",
        password: ""
    }

    const [login, {data, isLoading, isError}] = useLoginMutation();
    const [userProfile, setUserProfile] = useState(userDetails)
    const {error, setError} = useState("")

    const navigate = useNavigate();

    const changeHandler = (event) => {
        console.log(event)
        const {name, value} = event.target;

        setUserProfile((prev)=>({...prev, [name]: value}))
    }

    console.log(userProfile)


    const handleSubmit = async (event) => {
        event.preventDefault()

        // console.log(userProfile)
        try{
             console.log(userProfile)
            const response = await login(userProfile).unwrap()
            console.log(isError)
            console.log(response)
            if(!token){
                setError("Check your network")
                return;
            }
            navigate("/products")
        } catch (error) {
            // setError("Check your network") 
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Login</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {error && <p>{error}</p>}
                    <input onChange={changeHandler}
                        type="username"
                        name="username"
                        placeholder="Username"
                        className={styles.input}
                    />

                    <input onChange={changeHandler}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={styles.input}
                    />

                    <button className={styles.button} disabled={isLoading}>{isLoading?"Loading...":"Login"}</button>
                </form>
            </div>
        </div>

    )
}

export default Login;