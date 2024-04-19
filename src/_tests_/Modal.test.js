import { render, screen, cleanup } from '@testing-library/react';
import ModalComponent from '../components/Modal';

afterEach(() => {
  cleanup();
});

describe('Given I use the Modal Component in my App', () => {
  describe('When isOpen is true', () => {
    test('Then, it should render Modal', () => {
      render(<ModalComponent isOpen={true} closeModal={() => {}} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Employee Created')).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
  describe('When isOpen is false', () => {
    test('Then, it should not render Modal', () => {
      render(<ModalComponent isOpen={false} closeModal={() => {}} />);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
