'use client'
import React,  { useState} from 'react'

const Ejercicio04 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado,setResultado] = useState('');
    const [encontrado,setEncontrado] = useState(false);

    const matriz = [
        [1, 0, 5],
        [2, 0, 5],
        [2, 3, 5],
        [1, 4, 5],
        [4, 4, 5]
    ];

    //Estado aceptación: 4
    //Estado negación: 0

    const cambio = (e) => {
        setPalabra(e.target.value)
    }

    const analizar = () => {
        let i = 0;
        let estado = 0;
        const c = palabra.toLowerCase();  // Convertir la palabra a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
        let encontrado = false;
    
        while (i < c.length) {
            let caracter;
    
            if (c[i] === 'a') {
                caracter = 0;
            } else if (c[i] === 'b') {
                caracter = 1;
            } else {
                // Si no es 'a' ni 'b', es un carácter no válido
                setResultado("Carácter no aceptado");
                return;
            }
    
            estado = matriz[estado][caracter];
    
            if (estado === 4) {
                encontrado = true;
            }
    
            i++;
        }
    
        if (encontrado) {
            setResultado("Estado aceptado");
        } else {
            setResultado("La cadena no contiene 'aabb'");
        }
    };

    const borrar = ()=> {
        setPalabra('');
        setResultado('');
    }

  return (
    <div className=''>
        <h1 type="text" className="w-full p-6 leading-8 content-center text-center bg-transparent font-medium bg-violet-300 border-1 m-2 rounded-lg"
                >DFA que acepte todas las cadenas que contengan la palabra aabb con el alfabeto a y b.</h1>
        <div className="p-1 border-8 w-full text-center">
            <input value={palabra} type="text" placeholder="Coloca tu entrada" className="w-full p-1 leading-8  text-center bg-transparent font-medium"
            onChange={cambio}
            ></input>
        </div>
         <div className='flex'>
            <button className="w-full p-2 center-block hover:bg-slate-100 border-2 m-2 rounded-lg inline-block" onClick={analizar}>Analiza la entrada</button>
            <button className="w-full p-2 center-block hover:bg-slate-100 border-2 m-2 rounded-lg inline-block" onClick={borrar}>Borrar</button>
        </div>
        <div className='center-block flex justify-center mt-8'>{resultado}</div>
    </div>

  );
}

export default Ejercicio04
