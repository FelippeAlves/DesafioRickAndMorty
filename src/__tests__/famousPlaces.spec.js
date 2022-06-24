import React from "react";
import { render, screen, act } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import FamousPlaces from '../pages/FamousPlaces/index';

describe('Testando renderização de componentes', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <FamousPlaces />
            </Router>
        );
    });

    it('Testando a renderização do Título', () => {
        const title = screen.getByTestId('title');

        expect(title).toBeInTheDocument();
    });

})
