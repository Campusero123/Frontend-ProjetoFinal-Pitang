import React, { useState } from 'react'
import { Table, Card, Form, Container, Row, Col, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const Agendamentos = () => {

    const [startDate, setStartDate] = useState(new Date());

    let handleColor = time => {
        return time.getHours() > 8 ? "text-success" : "text-error";
      };

    return(

    <Table style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}
      >
    <Card className="m-4 card-color">
          <Card.Header className='header-1 text-center'><h1>Formulário de Agendamento de Vacinação de COVID-19</h1></Card.Header>
          <Card.Body className="p-4">
              <Container>
            <Row>
                <Col xl={12} mg={9}>
                    <Form>
                        <h6 className='h1-1 text-center text-danger'>*Todos os campos são obrigatórios</h6>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Nome' />
                        </Form.Group>
                        <Form.Group>
                            <h6>Data de Nascimento</h6>
                            <DatePicker 
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            placeholderText="Data de Nascimento"/>
                        </Form.Group>
                        <Form.Group>
                            <h6>Selecione o dia e horário desejados para o agendamento da vacinação</h6>
                            <DatePicker 
                            showTimeSelect
                            selected={startDate} 
                            onChange={date => setStartDate(date)}
                            timeClassName={handleColor} 
                            showDisabledMonthNavigation
                            placeholderText="Selecione o dia e horário desejados para o agendamento da vacinação"/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Button type='button'>Agendar</Button>
                </Col>
            </Row>
                </Container>
      </Card.Body>
    </Card>
    </Table>
    );
}

export default Agendamentos;