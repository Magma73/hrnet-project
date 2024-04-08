import React from 'react';
import { render } from '@testing-library/react';
import InputWithLabel from '../components/InputWithLabel';
import { screen, cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

describe('Given I use the InputWithLabel Component in my App', () => {
  describe('When I render InputWithLabel with specific props', () => {
    test('Then, it should render the InputWithLabel component with customized information', () => {
      render(
        <InputWithLabel
          htmlFor="first-name"
          label="First Name"
          id="first-name"
          data-testid="first-name"
          name="first-name"
          type="text"
          autoComplete="username"
        />
      );
      const inputLabel = screen.getByLabelText('First Name');
      expect(inputLabel).toBeInTheDocument();

      const inputLabelText = screen.getByText('First Name');
      expect(inputLabelText).toBeInTheDocument();

      const inputId = screen.getByTestId('first-name');
      expect(inputId).toHaveAttribute('id', 'first-name');
      expect(inputId).toHaveAttribute('name', 'first-name');
      expect(inputId).toHaveAttribute('type', 'text');
      expect(inputId).toHaveAttribute('autocomplete', 'username');
    });
  });
});
