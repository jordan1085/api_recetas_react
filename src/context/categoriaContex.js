import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// Crear el context
export const CategoriasContext = createContext();

// Provaider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    // State de categorias
    const [categorias, guardarCategoria] = useState([]);


    // LLamado a la api con useEffect
    useEffect(() => {
        const obtenerCategoria = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categoriasApi = await axios.get(url)

            guardarCategoria(categoriasApi.data.drinks);
        }
        obtenerCategoria();

    }, []); // La primera vez que carga la pagina se ejecutara 1 vez 


    // Datos disponibles en los diferentes componentes
    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>

    )
}

export default CategoriasProvider;