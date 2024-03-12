import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import { reset, register } from "../features/auth/authSlice"
import Spiner from "../components/Spiner"

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        esAdmin: false
    })

    const {name, email, password, password2, esAdmin} = formData  //desestructuro para acceder a cada atributo de formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    const onChange = (e) => {
        if(e.target.name !== 'esAdmin') {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name] : e.target.value
            }))
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name] : e.target.checked
            }))
        }   
        }
        

    const onsubmit = (e) =>{
        e.preventDefault()

        if(password !== password2) {
            toast.error('los passwords no son iguales')
        } else {
            const userData = {
                name, email, password, esAdmin
            }
            dispatch(register(userData))
        }
    }

    useEffect(()=> {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            navigate('/login')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    if(isLoading) {
        return <Spiner/>
    }

  return (
    <>
        <section className="heading">
            <h4> <FaUser/> Registrar Usuario </h4>
            <p>Por favor crea un usuario</p>
        </section>

        <section className="form">
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <input className="form-control" 
                        type="text" 
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Por favor escribe tu nombre"
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <input className="form-control" 
                        type="email" 
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Por favor escribe tu email"
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <input className="form-control" 
                        type="password" 
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Por favor escribe tu contraseña"
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <input className="form-control" 
                        type="password" 
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Por favor confirma tu contraseña"
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Es administrador</label>
                    <input 
                        type="checkbox" 
                        id="esAdmin"
                        name="esAdmin"
                        onChange={onChange}
                    />
                    
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-block">
                        Crear
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register