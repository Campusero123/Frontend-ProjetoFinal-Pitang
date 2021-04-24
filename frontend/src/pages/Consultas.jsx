import React from 'react'
import { Table, Card } from 'react-bootstrap';

const Consultas = () => (
    <Table style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}
      >
    <Card className="m-4 card-color text-black text-center">
          <Card.Header><h1>Consultas</h1></Card.Header>
          <Card.Body className="p-3">

      </Card.Body>
    </Card>
    </Table>
)

export default Consultas;
