import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Caixa.css';


const Caixa = ({ title, className, children }) => (
  <Card className={`mb-4 ${className}` }>
      <Card.Header>
          <Card.Title>
              {title}
          </Card.Title>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
  </Card>
  
);

export default Caixa;