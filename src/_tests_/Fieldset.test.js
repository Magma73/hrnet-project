/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Fieldset from '../components/Fieldset';
import InputWithLabel from '../components/InputWithLabel';
import { screen, cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

describe('Given I use the Fieldset Component in my App', () => {
  describe('When I render Fieldset with specific props', () => {
    test('Then, it should render the Fieldset component with customized information', () => {
      render(
        <Fieldset legend="Address">
          <InputWithLabel htmlFor="street" label="Street" id="street" name="street" type="text" />
          <InputWithLabel htmlFor="city" label="City" id="city" name="city" type="text" />
        </Fieldset>
      );
      const fieldsetElement = screen.getByRole('group');
      expect(fieldsetElement).toBeInTheDocument();
      expect(fieldsetElement).toHaveTextContent('Address');

      const children = screen.getAllByRole('textbox');
      expect(children.length).toBe(2);

      const inputStreet = screen.getByLabelText('Street');
      expect(inputStreet).toBeInTheDocument();

      const inputCity = screen.getByLabelText('City');
      expect(inputCity).toBeInTheDocument();
    });
  });
});
