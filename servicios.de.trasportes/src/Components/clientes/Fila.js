import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'semantic-ui-react'
export default function Fila(props) {
    const [identificador,setIdentificador] = useState(props.Nu)
    const [dpi, setDpi]=useState(props.dpi)
    const [nit,setNit] = useState(props.nit)
    
   
    
    function solicitarServicio(){
        var solicitante = {
            idCliente:identificador,
            dpi:dpi,
            nit:nit
        }
        
        var cliente = localStorage.getItem('cliente')

        if ((cliente ===null || cliente ===undefined)){

            localStorage.setItem('cliente',JSON.stringify(solicitante))
        }

        console.log(identificador)
    }

  return (
      <>
    <Table.Row>
        <Table.Cell>{props.Nu}</Table.Cell>
        <Table.Cell>{props.nombre}</Table.Cell>
        <Table.Cell>{props.apellido}</Table.Cell>
        <Table.Cell>{props.dpi}</Table.Cell>
        <Table.Cell>{props.nit}</Table.Cell>
        <Table.Cell>{props.telpersonal}</Table.Cell>
        <Table.Cell><Button color='purple' onClick={solicitarServicio} as={Link} to={'/Solicitudes'} >Solicitar Servicio</Button></Table.Cell>
        
      </Table.Row>
      </>
  )
}
