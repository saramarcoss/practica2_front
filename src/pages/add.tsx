import { useState } from "react";
import styled from "styled-components"

const Add = () => {
    const [table, setTable] = useState<string[][]>([]);
    const [name, setName] = useState<string>("");
    const [dni, setDni] = useState<string>("");
    const [borrar, setBorrar] = useState<string>("");

    return (    
        <div className="grid-container">
            <title>Base de datos</title>
            <div className="grid-field">NOMBRE</div>
            <div className="grid-field">DNI</div>
            <div className="grid-field">-</div>

            {table.map((row, index) => {
                return (
                    <>
                        <div className="grid-item">{row[0]}</div>
                        <div className="grid-item">{row[1]}</div>
                        <div className="grid-item">{row[2]}
                        <button className="b" onClick={() => {
                            let newTable = table;
                            newTable.splice(index, 1);
                            setTable([...newTable]);
                            setBorrar("");
                        }}> <img src="/papelera.png" alt="Img papelera" width="25" height="25" /> </button>
                        </div>
                    </>
                )
            })}
                        
            <br /> 
            <br />
             <div className ="fill-data">    
             <br />
            <Input {...{error: name === ""}} type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input {...{error: dni === ""}}type="text" placeholder="Dni" value={dni} onChange={(e) => setDni(e.target.value)} />
            <Button id="añadir" onClick={() => {
                if (name === "" || dni === "") {
                    alert("Se deben introducir los dos campos");
                    return;
                }
                setTable([...table, [name, dni]]);
                setName("");
                setDni("");
            }}>Añadir</Button>
         </div>
    </div>
    )
}

const Button = styled.button`
    background-color: #ED6E4E;
    border: none;
    color: white;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    margin: 1px 3px;
    `

type InputProps = {
    error: boolean
}

const Input = styled.input<InputProps>`
    background-color: ${props => props.error ? "aqua" : "white"};
    `

export default Add;


