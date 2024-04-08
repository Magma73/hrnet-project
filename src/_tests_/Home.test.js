import * as React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import Home from '../pages/Home';

afterEach(() => {
  cleanup();
});

describe('Given a MemoryRouter with initial entry pointing to the home page', () => {
  test('Then it should render the Home page correctly', () => {
    let renderer = create(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
