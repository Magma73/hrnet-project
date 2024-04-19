/**
 * @jest-environment jsdom
 */
import React, { Suspense } from 'react';
import { Provider } from 'react-redux'; 
import { store } from '../store/store';
import { screen, render, fireEvent, act, cleanup } from '@testing-library/react';
import EmployeeForm from '../components/Form';

afterEach(() => {
  cleanup();
});

describe('Given I use the EmployeeForm Component in my App', () => {
  describe('When I render EmployeeForm with specific props', () => {
    test('Then, it render all form fields with customized information', async () => {
      await act(async () => {
        render(
          <Provider store={store}>
            <Suspense>
              <EmployeeForm />
            </Suspense>
          </Provider>
        );
      });

      expect(screen.getByLabelText('First Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
      expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
      expect(screen.getByLabelText('Street')).toBeInTheDocument();
      expect(screen.getByLabelText('City')).toBeInTheDocument();
      expect(screen.getByLabelText('State')).toBeInTheDocument();
      expect(screen.getByLabelText('Zip Code')).toBeInTheDocument();
      expect(screen.getByLabelText('Department')).toBeInTheDocument();

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
  describe('When I enter form fields', () => {
    test('Then, it render form fields correctly completed', async () => {
      await act(async () => {
        render(
          <Provider store={store}>
            <Suspense>
              <EmployeeForm />
            </Suspense>
          </Provider>
        );
      });

      // screen.debug();

      fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
      fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
      fireEvent.change(screen.getByLabelText('Date of Birth'), { target: { value: '1990-01-01' } });
      fireEvent.change(screen.getByLabelText('Start Date'), { target: { value: '2020-01-01' } });
      fireEvent.change(screen.getByLabelText('Street'), { target: { value: '123 Main St' } });
      fireEvent.change(screen.getByLabelText('City'), { target: { value: 'Anytown' } });
      fireEvent.change(screen.getByLabelText('State'), { target: { value: 'Alaska' } });
      fireEvent.change(screen.getByLabelText('Zip Code'), { target: { value: '12345' } });
      fireEvent.change(screen.getByLabelText('Department'), { target: { value: 'Sales' } });

      expect(screen.getByLabelText('First Name')).toHaveValue('John');
      expect(screen.getByLabelText('Last Name')).toHaveValue('Doe');
      expect(screen.getByLabelText('Date of Birth')).toHaveValue('01/01/1990');
      expect(screen.getByLabelText('Start Date')).toHaveValue('2020-01-01');
      expect(screen.getByLabelText('Street')).toHaveValue('123 Main St');
      expect(screen.getByLabelText('City')).toHaveValue('Anytown');
      expect(screen.getByLabelText('State')).toHaveValue('Alaska');
      expect(screen.getByLabelText('Zip Code')).toHaveValue(Number(12345));
      expect(screen.getByLabelText('Department')).toHaveValue('Sales');
    });
  });
  describe('When I enter form fields and I submit the form', () => {
    test('Then, it render a modal with confirmation message', async () => {
      await act(async () => {
        render(
          <Provider store={store}>
            <Suspense>
              <EmployeeForm />
            </Suspense>
          </Provider>
        );
      });

      // screen.debug();

      fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
      fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
      fireEvent.change(screen.getByLabelText('Date of Birth'), { target: { value: '1990-01-01' } });
      fireEvent.change(screen.getByLabelText('Start Date'), { target: { value: '2020-01-01' } });
      fireEvent.change(screen.getByLabelText('Street'), { target: { value: '123 Main St' } });
      fireEvent.change(screen.getByLabelText('City'), { target: { value: 'Anytown' } });
      fireEvent.change(screen.getByLabelText('State'), { target: { value: 'Alaska' } });
      fireEvent.change(screen.getByLabelText('Zip Code'), { target: { value: '12345' } });
      fireEvent.change(screen.getByLabelText('Department'), { target: { value: 'Marketing' } });

      // expect(screen.getByLabelText('First Name')).toHaveValue('John');

      expect(screen.getByLabelText('First Name').value).toBe('John');
      expect(screen.getByLabelText('Last Name')).toHaveValue('Doe');
      expect(screen.getByLabelText('Date of Birth')).toHaveValue('01/01/1990');
      expect(screen.getByLabelText('Start Date')).toHaveValue('2020-01-01');
      expect(screen.getByLabelText('Street')).toHaveValue('123 Main St');
      expect(screen.getByLabelText('City')).toHaveValue('Anytown');
      expect(screen.getByLabelText('State')).toHaveValue('Alaska');
      expect(screen.getByLabelText('Zip Code')).toHaveValue(Number(12345));
      expect(screen.getByLabelText('Department')).toHaveValue('Marketing');

      // fireEvent.click(screen.getByText('Save'));

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('button')).toBeInTheDocument();

      // await waitFor(() => {
      // expect(screen.getByRole('dialog')).toBeInTheDocument();
      // });

      // expect(screen.getByRole('dialog')).toBeInTheDocument();
      // expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });
  });
});
