import React from 'react'
import './SignInForm.css'
import { useForm } from "react-hook-form";

export default function Index(){
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data){
        console.log(data)
    }

    console.log('Errors', errors)

    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Username</label>
        <input name="userName" type="text" ref={register({required: true})}/>
        {errors.userName && <span>This field is required</span>}
        <label htmlFor="password">Password</label>
        <input name="password" type="password" ref={register({required: true})}/>
        {errors.password && <span>This field is required</span>}
        <input type="submit"/>
    </form>


}