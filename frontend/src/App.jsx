import React from 'react';
import  Caixa  from './components/Caixa';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    
    <div>
        <div>
            <Caixa title='Bem-vindo ao sistema de vacinação contra COVID-19 Vacina Fácil!' className='Caixa-1 text-white text-center'>
                <h6>*Acesse a aba de Agendamentos para agendar sua vacina</h6>
                <h6>*Acesse a aba de Consultas para verificar cadastros já efetuados e o status de atendimento</h6>
            </Caixa>
        </div>
    </div>
);

export default App;
