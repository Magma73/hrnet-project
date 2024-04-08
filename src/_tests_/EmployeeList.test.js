
import * as React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import EmployeeList from '../pages/EmployeeList';

afterEach(() => {
  cleanup();
});

describe('Given a MemoryRouter with initial entry pointing to the Employee List page', () => {
  test('Then it should render the Employee List page correctly', () => {
    let renderer = create(
      <MemoryRouter initialEntries={['/employeelist']}>
        <Routes>
          <Route path="/employeelist" element={<EmployeeList />} />
        </Routes>
      </MemoryRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
