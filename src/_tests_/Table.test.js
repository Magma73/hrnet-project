import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TableComponent from '../components/Table';

afterEach(() => {
  cleanup();
});

describe('Given I use the Table Component in my App', () => {
  describe('When I render Table Component with specific props', () => {
    test('Then, it should render the table with customized informations', () => {
      render(<TableComponent />);
      expect(screen.getByText('Search :')).toBeInTheDocument();
      expect(screen.getByTestId('paginationSelect')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByText('First name')).toBeInTheDocument();
      expect(screen.getByText('Last name')).toBeInTheDocument();
      expect(screen.getByText('Date of birth')).toBeInTheDocument();
      expect(screen.getByText('Start date')).toBeInTheDocument();
      expect(screen.getByText('Street')).toBeInTheDocument();
      expect(screen.getByText('City')).toBeInTheDocument();
      expect(screen.getByText('State')).toBeInTheDocument();
      expect(screen.getByText('Zip code')).toBeInTheDocument();
      expect(screen.getByText('Department')).toBeInTheDocument();
      expect(screen.getByText('Showing 1 to 10 of 20')).toBeInTheDocument();
      expect(screen.getByText('Previous')).toBeInTheDocument();
      expect(screen.getByText('Next')).toBeInTheDocument();
    });

    test('Then, it should render the table with the correct number of rows and columns', () => {
      render(<TableComponent />);
      const rows = screen.getAllByTestId('table-row');

      // //   // Le nombre de lignes devrait correspondre au nombre d'éléments dans les données mockées
      //   expect(rows.length - 1).toEqual(mockData.length);
      expect(rows.length).toEqual(10);
    });

    test('Then, it should filter the table when the global filter is changed', () => {
      render(<TableComponent />);
      const input = screen.getByTestId('globalFilter');
      fireEvent.change(input, { target: { value: 'Yoyo' } });
      expect(screen.getByText('Yoyo')).toBeInTheDocument();
    });

    test('Then, it should sort the table when a column header is clicked', () => {
      render(<TableComponent />);
      const header = screen.getByText('First name');
      fireEvent.click(header);
      const arrowIcon = screen.getAllByTestId('arrow-icon');
      expect(arrowIcon[0]).toHaveTextContent('🔼');
    });

    test('Then, it should paginate the table when the page size is changed', () => {
      render(<TableComponent />);
      const selectElement = screen.getByTestId('paginationSelect');
      fireEvent.change(selectElement, { target: { value: '20' } });
      expect(screen.getByText('Showing 1 to 20 of 20')).toBeInTheDocument();
      const rows = screen.getAllByTestId('table-row');
      expect(rows.length).toEqual(20);
    });

    test('Then, it should navigate to the next page when the next button is clicked', () => {
      render(<TableComponent />);
      const button = screen.getByRole('button', { name: 'Next' });
      fireEvent.click(button);
      expect(screen.getByText('Showing 11 to 20 of 20')).toBeInTheDocument();
    });

    test('Then, it should navigate to the previous page when the previous button is clicked', () => {
      render(<TableComponent />);
      const buttonNext = screen.getByRole('button', { name: 'Next' });
      fireEvent.click(buttonNext);
      expect(screen.getByText('Showing 11 to 20 of 20')).toBeInTheDocument();
      const buttonPrevious = screen.getByRole('button', { name: 'Previous' });
      fireEvent.click(buttonPrevious);
      expect(screen.getByText('Showing 1 to 10 of 20')).toBeInTheDocument();
    });
  });
});
