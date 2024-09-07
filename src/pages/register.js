import React,{useState} from 'react'
import InputComp from '../components'
import String from '../utils'


const Register =()=>{
    const {registerheading} =String
    const [form,setForm]=useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        
    }
    return(
        <>
        <h1>{registerheading}</h1>
        <InputComp/>
        </>
    )

}

export default Register