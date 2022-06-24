import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import CharactersPage from '../pages/CharactersPage/index';

describe('Testando renderização de componentes', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <CharactersPage />
            </Router>
        );
    });

    it('Testando a renderização do Título', () => {
        const title = screen.getByTestId('title');

        expect(title).toBeInTheDocument();
    });

    it('Testando a renderização do campo de busca', () => {
        const inputText = screen.getByTestId('input-text');

        expect(inputText).toBeInTheDocument();
    });

    it('Testando a renderização do campo de seleção(Status)', () => {
        const selectStatus = screen.getByTestId('select-status');

        expect(selectStatus).toBeInTheDocument();
    });

    it('Testando a renderização do campo de seleção(Gender)', () => {
        const selectGender = screen.getByTestId('select-gender');

        expect(selectGender).toBeInTheDocument();
    });

    it('Testando a renderização da imagem', () => {
        const image = screen.getByTestId('image');

        expect(image).toBeInTheDocument();
    });

    it('Testando a renderização do footer', () => {
        const footer = screen.getByTestId('footer');

        expect(footer).toBeInTheDocument();
    });
})

describe('Testando gatilhos', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <CharactersPage />
            </Router>
        );
    });

    it('Testando ação do botão de Iniciar', () => {
        const msg = 'rick';
        const field = screen.getByTestId('input-text');
        fireEvent.change(field, { target: {value: msg}});

        expect(field.value).toBe(msg);
    })
});