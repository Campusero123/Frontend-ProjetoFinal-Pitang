import React from 'react'
import { Table, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Vacina from '../images/Vacina.png';
import './Sobre.css';

const Sobre = () => (
    <Table style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}
      >
        <Card className="m-4 card-color text-black">
          <Card.Header className='header-2 text-center'><h1>Sobre</h1></Card.Header>
          <Card.Body className="p-2">
    
            {' '}
            <div className="text-center texto-card">
              <Image className="ImagemVacina" src={Vacina} roundedCircle />
              <div className="Container1">
                <br />
                <h3>Site desenvolvido por Augusto Falcão para auxiliar pessoas que precisam agendar vacinação de COVID-19</h3>
                <h3>Desenvolvido para o processo de seleção de estagiários da Pitang para 2021</h3>
              </div>
              <br />
              <br />
              {' '}
            </div>
            {' '}

      </Card.Body>
    </Card>
  </Table>
)

export default Sobre;
