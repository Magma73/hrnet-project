import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import DatePickerComponent from '../components/DatePicker';

afterEach(() => {
  cleanup();
});

describe('Given I use the DatePicker Component in my App', () => {
  describe('When I render DatePicker with specific props', () => {
    test('Then, it should render the DatePicker component with customized information', () => {
      render(
        <DatePickerComponent
          htmlFor="datePickerInput"
          label="Start Date"
          id="datePickerInput"
          name="date"
          type="date"
          minDate={new Date(2024, 3, 1)}
          maxDate={new Date(2024, 3, 30)}
          selectedDate={new Date(2024, 3, 15)}
        />
      );

      const datePickerInput = screen.getByLabelText('Start Date');
      expect(datePickerInput).toBeInTheDocument();
      expect(datePickerInput.value).toBe('04/15/2024');
    });
  });
});
