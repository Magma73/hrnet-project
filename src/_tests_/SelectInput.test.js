/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import SelectComponent from '../components/SelectInput';

afterEach(() => {
  cleanup();
});

describe('Given I use the SelectComponent Component in my App', () => {
  describe('When I render InputWithLabel with specific props', () => {
    test('Then, it should render the InputWithLabel component with customized information', () => {
      const options = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
      ];

      render(
        <SelectComponent
          htmlFor="department"
          label="Department"
          inputId="department"
          name="department"
          type="text"
          defaultValue={options[0]}
          onChange={() => {}}
          options={options}
          placeholder="Sales"
        />
      );

      const inputLabel = screen.getByLabelText('Department');
      expect(inputLabel).toBeInTheDocument();

      const inputLabelText = screen.getByText('Department');
      expect(inputLabelText).toBeInTheDocument();

      const inputRole = screen.getByRole('combobox');
      expect(inputRole).toHaveAttribute('id', 'department');
      expect(inputRole).toHaveAttribute('type', 'text');

      const inputPlaceholder = screen.getByDisplayValue('Sales');
      expect(inputPlaceholder).toBeInTheDocument();
    });
  });
});
