import { React, useEffect, useState } from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import Tabla from './Tabla'


const axios = require('axios').default
export default function Clientes() {
  const [clientes, setClientes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {




    async function getClientes() {
      const data = await axios.get('http://localhost:58595/api/Cliente')
      setClientes(data.data.clientes)
      console.log("Estos son los clientes")
      console.log(clientes)
      setLoading(true)
    }
    getClientes();


  }, [loading]);

  if (loading) {
    return(
      <>
        <Tabla clientes={clientes}></Tabla>
      </>
    );

  } else {
    return(
      <div>


      <Segment>
        <Dimmer active>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>

        <Image src='/images/wireframe/short-paragraph.png' />
        <Image src='/images/wireframe/short-paragraph.png' />
        <Image src='/images/wireframe/short-paragraph.png' />
      </Segment>
    </div>
    );
    
  }

  
}
