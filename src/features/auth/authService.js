import axios from 'axios'

const URL_API = 'https://dark-gray-agouti-hat.cyclic.app/api/users'

//creamos peticion al backend para crear un usuario
//en axios siempre nos devolvera un objeto data con los datos
const register = async (userData) => {
    const response = await axios.post(URL_API, userData)

    return response.data
}

const  authService = {
    register
}

export default authService