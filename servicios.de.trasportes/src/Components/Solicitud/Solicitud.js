import {React, useState, useEffect} from 'react'


import Drowdown from './Drowdown'
import { Input } from 'semantic-ui-react'
export default function Solicitud() {
  const [clientes, setClientes] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <>
      <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
            <h1>RECOGER PAGUETE(S) EN:</h1>
            <h3>Departamento:</h3>
            <Drowdown></Drowdown>
            <h3>Municipio:</h3>
            <Drowdown></Drowdown>
            <br></br>
            <Input label='Direccion:' placeholder='2da. Calle 3-06, Zona 2' />
          </div>
          <div class="column">
            <h1>ENTREGAR PAGUETE(S) EN:</h1>
            <h3>Departamento:</h3>
            <Drowdown></Drowdown>
            <h3>Municipio:</h3>
            <Drowdown></Drowdown>
            <br></br>
            <Input label='Direccion:' placeholder='2da. Calle 3-06, Zona 2' />
          </div>
          <div class="ui vertical divider">

          </div>
        </div>
        <div class="ui center aligned basic segment">
          <div class="ui left icon action input">
            <h3>Tipo de carga: <Drowdown></Drowdown></h3>

            
          </div>
          <div class="ui horizontal divider inverted">

          </div>
          <div class="ui teal labeled icon button">
            Hacer Solicitud
            <i class="add icon"></i>
          </div>
        </div>



      </div>



    </>

  )
}
