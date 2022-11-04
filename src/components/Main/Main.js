import React from 'react';
import book from '../../images/book.jpg';
import './Main.css';
import FormContainer from '../Form/Form.js'

function Main(params) {
    return (
        <main className="main" style={{backgroundImage: `url(${book})`}}>
        <FormContainer></FormContainer>
        </main>
    )
}

export default Main;