import axios from 'axios'

const run_axios = async ( ruta ) => {
    try {
        let data = await axios.get(ruta)
        return data
    } catch (error) {
        console.log(error)
    }
}

const get_calificacion = (data) => {
    console.log(data)
    if( data && data.length > 0 ) {
        let _data = data.map( async calif => {
            let user = await run_axios(rutaMicroUser+'/user/'+calif.usuario+'/')
            calif.usuario = user.data[0]
            return calif
        })
        return data
    }
    return data    
} 

module.exports = {
    run_axios,
    get_calificacion
}