import React from 'react';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import DebouncedInput from '../components/Table/DebouncedInput';
jest.useFakeTimers(); // Mock timers to control setTimeout/setInterval

afterEach(() => {
  cleanup();
});

describe('Given I use the DebouncedInput Component in my App', () => {
  describe('When I render DebouncedInput with specific props', () => {
    test('Then, it should render the DebouncedInput component with customized informations', () => {
      render(
        <DebouncedInput
          value="initial"
          id="globalFilter"
          htmlFor="globalFilter"
          label="Search :"
          onChange={() => {}}
        />
      );
      const inputLabel = screen.getByLabelText('Search :');
      expect(inputLabel).toBeInTheDocument();
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toBeInTheDocument();
      const inputValue = screen.getByDisplayValue('initial');
      expect(inputValue).toBeInTheDocument();
    });
    describe('When I filter the table with DebouncedInput component before debounce time', () => {
      test('Then, it should not call onChange with new value', () => {
        const onChangeMock = jest.fn();
        render(
          <DebouncedInput
            value=""
            id="inputId"
            htmlFor="labelId"
            label="Test Label"
            onChange={onChangeMock}
          />
        );
        const input = screen.getByDisplayValue('');
        fireEvent.change(input, { target: { value: 'a' } });
        act(() => {
          jest.advanceTimersByTime(300); // Advance timer by debounce time
        });
        expect(onChangeMock).not.toBeCalledWith('a');
      });
      describe('When I filter the table with DebouncedInput component after debounce time', () => {
        test('Then, it should call onChange with new value', () => {
          const onChangeMock = jest.fn();
          render(
            <DebouncedInput
              value=""
              id="inputId"
              htmlFor="labelId"
              label="Test Label"
              onChange={onChangeMock}
            />
          );
          const input = screen.getByDisplayValue('');
          fireEvent.change(input, { target: { value: 'a' } });

          act(() => {
            jest.advanceTimersByTime(500);
          });
          expect(onChangeMock).toBeCalledWith('a'); // onChange should be called after debounce time
        });
      });
    });
  });
});
