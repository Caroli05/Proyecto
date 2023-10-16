'use client'
import React,  { useState} from 'react'

const Ejercicio01 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado,setResultado] = useState('');

    const matriz = [
        [1, 200, 200],
        [1, 0, 200]
    ];

    const cambio = (e) => {
        setPalabra(e.target.value)
    }

    const analizar = () => {

        let i = 0;
        let estado = 0;
        let caracter = 0;
        const c = palabra.split('');
        const ispatronLet = new RegExp('[a-zA-z]')
        const ispatronNum = new RegExp('[0-9]')

        while (i < palabra.length) {
            if(ispatronLet.test(c[i])){
                caracter = 0;
            }
            else if(ispatronNum.test(c[i])){
                caracter = 1;
            }
            else{
                caracter = 2;
            }
            estado = matriz[estado][caracter];
            if(estado == 200) {
                setResultado("Estado no aceptado");
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


    <div className=''>
         <h1 type="text" className=" w-full p-6 leading-8 content-center text-center bg-transparent font-medium bg-violet-300 border-2 m-2 rounded-lg"
                >DFA que acepte identificadores.</h1>
        <div className="p-1 border-8">
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

export default Ejercicio01
