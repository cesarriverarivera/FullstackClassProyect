import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData  //desestructuro para acceder a cada atributo de formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }

  const onsubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h4> <FaSignInAlt /> Entrar a la App </h4>
        <p>Por favor escribe tus credenciales</p>
      </section>

      <section className="form">
        <form onSubmit={onsubmit}>

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
            <button type="submit" className="btn btn-block">
              Ingresar
            </button>
          </div>
        </form>
      </section>
    </>
  )

};

export default Login;
