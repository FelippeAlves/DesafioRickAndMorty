import React from "react";
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import Header from '../components/Header/index';

describe('Testando renderização de componentes', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <Header />
            </Router>
        );
    });

    it('Testando a renderização do Logo', () => {
        const logo = screen.getByTestId('logo');

        expect(logo).toBeInTheDocument();
    });

    it('Testando a renderização do botão Personagens', () => {
        const btnPerson = screen.getByTestId('btn-person');

        expect(btnPerson).toBeInTheDocument();
    });

    it('Testando a renderização do botão Lugares Famosos', () => {
        const btnPlaces = screen.getByTestId('btn-places');

        expect(btnPlaces).toBeInTheDocument();
    });
    it('Testando a renderização do botão Episodios', () => {
        const btnEp = screen.getByTestId('btn-ep');

        expect(btnEp).toBeInTheDocument();
    });
});

describe('Testando gatilhos dos botões', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <Header />
            </Router>
        );
    });

    it('Testando ação do botão Personagens', () => {
        const click = { button : 0 }
        const btnPerson = screen.getByTestId('btn-person');

        expect(userEvent.click(btnPerson, click));
    })

    it('Testando ação do botão Lugares Famosos', () => {
        const click = { button : 0 }
        const btnPlaces = screen.getByTestId('btn-places');

        expect(userEvent.click(btnPlaces, click));
    })

    it('Testando ação do botão Episódios', () => {
        const click = { button : 0 }
        const btnEp = screen.getByTestId('btn-ep');

        expect(userEvent.click(btnEp, click));
    })
});