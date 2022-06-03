import React from 'react'
import { Table } from 'semantic-ui-react'
import Fila from './Fila'

export default function Tabla( props) {
  return (
    <Table color={'blue'} key={'blue'} ui centered grid inverted >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No.</Table.HeaderCell>
        <Table.HeaderCell>Nombre</Table.HeaderCell>
        <Table.HeaderCell>Apellido</Table.HeaderCell>
        <Table.HeaderCell>DPI</Table.HeaderCell>
        <Table.HeaderCell>NIT</Table.HeaderCell>
        <Table.HeaderCell>Telefono Personal</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            props.clientes.map((c,index)=>
                ( 
                    <Fila   Nu={c.idCliente}
                            nombre={c.nombre}
                            apellido={c.apellido}
                            dpi={c.dpi}
                            nit={c.nit}
                            telpersonal={c.telefonoPersonal}
                    />

                )
                
            )
        }
      
      
    </Table.Body>
  </Table>
  )
}
