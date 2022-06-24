import React from "react";
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import Home from '../pages/Home/index';

describe('Testando renderização de componentes', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <Home />
            </Router>
        );
    });

    it('Testando a renderização do título', () => {
        const title = screen.getByTestId('title');

        expect(title).toBeInTheDocument();
    });

    it('Testando a renderização do botão de início', () => {
        const btnStart = screen.getByTestId('btn-start');

        expect(btnStart).toBeInTheDocument();
    });

    it('Testando a renderização do rodapé', () => {
        const reference = screen.getByTestId('reference');

        expect(reference).toBeInTheDocument();
    });

    it('Testando a renderização da imagem', () => {
        const image = screen.getByTestId('image');

        expect(image).toBeInTheDocument();
    });
})

describe('Testando gatilhos dos botões', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <Home />
            </Router>
        );
    });

    it('Testando ação do botão de Iniciar', () => {
        const click = { button : 0 }
        const btnStart = screen.getByTestId('btn-start');

        expect(userEvent.click(btnStart, click));
    })
});