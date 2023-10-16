'use client'
import React,  { useState } from 'react'

const Ejercicio02 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado,setResultado] = useState('');

    const matriz = [
        [1, 2, 3],
        [1, 1, 3],
        [2, 2, 3]
    ];

    //Estado aceotación: 1
    //Estado negación: 2

    const cambio = (e) => {
        setPalabra(e.target.value)
    }

    const analizar = () => {
        let i = 0;
        let estado = 0;
        let caracter = 0;
        const c = palabra.split('');
        const isCero = /0/i
        const isUno = /1/i

        while (i < palabra.length) {
            if(isCero.test(c[i])){
                caracter = 0;
            }
            else if(isUno.test(c[i])){
                caracter = 1;
            }
            else{
                caracter = 2;
            }
            estado = matriz[estado][caracter];
            if(estado == 2) {
                setResultado("Estado no aceptado");
                return
            } 

            if(estado == 3) {
              setResultado("Carácter no aceptado");
              return
          } 
    
            if(estado == 1) {
                setResultado("Estado aceptado");
            };
            i++
        };
    };  

    const borrar = ()=> {
        setPalabra('');
        setResultado('');
    }

  return (
    <div>
        <h1 type="text" className=" w-full p-6 leading-8 content-center text-center bg-transparent font-medium bg-violet-300 border-2 m-2 rounded-lg"
                >DFA que acepte todas las cadenas que comiencen en 0 con el alfabeto 0 y 1.</h1>
        <div className="p-1 border-8 text-center">
            <input value={palabra} type="text" placeholder="Coloca tu entrada" className="w-full p-1 leading-8 content-center text-center bg-transparent font-medium"
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

export default Ejercicio02