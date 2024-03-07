import { useEffect, useState, useMemo } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import mockData from "../../__mocks__/mockedDatas";
import DebouncedInput from "./DebouncedInput";
import styles from "./Table.module.css";

const columnHelper = createColumnHelper();

/**
* Generates columns dynamically based on data keys.
* @param {Array} data - Data array
* @returns {Array} - Array of column definitions
*/
function generateColumns(data) {
    if (!data || data.length === 0) return [];
    const columns = Object.keys(data[0]).map(key => {
        return columnHelper.accessor(key, {
            header: () => key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, ' '),
            cell: info => info.row.original[key],
        });
    });

    return columns;
}

/**
* Filter function for fuzzy search.
* @param {Object} row - Row object.
* @param {string} columnId - Column ID.
* @param {string} filterValue - Filter value.
* @returns {boolean} Whether the row matches the filter criteria.
*/
function fuzzyFilter(row, columnId, filterValue) {
    return row.getValue(columnId)
        .toString()
        .toLowerCase()
        .includes(filterValue.toString().toLowerCase());
}


/**
 * Function component Table - Represent the Table Component
 * @returns {JSX.Element} The rendered Table component.
 */
export default function TableComponent() {
    const [data, setData] = useState([]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('')

    console.log("data : ", data);
    console.log("sorting : ", sorting)

    useEffect(() => {
        const storedData = localStorage.getItem('employeeData');
        const initialData = storedData ? JSON.parse(storedData).employeeInfos.employees : mockData;
        setData(initialData);
    }, []);

    // Initialize table using useReactTable hook
    const table = useReactTable({
        data,
        columns: useMemo(() => generateColumns(data), [data]),
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel({
            filterFn: fuzzyFilter,
        }),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    });

    return (
        <div >
            <div className={styles.containerInputs}>
                <DebouncedInput
                    value={globalFilter ?? ''}
                    id="globalFilter"
                    htmlFor="globalFilter"
                    label="Search : "
                    onChange={value => setGlobalFilter(value)}
                />
            </div>

            <table className={styles.table}>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className={styles.tr}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} className={styles.th}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className: header.column.getCanSort()
                                                        ? 'cursor-pointer select-none'
                                                        : '',
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {header.column.getCanSort() && (
                                                    <span className={styles.arrow}>
                                                        {header.column.getIsSorted() === 'desc' && ' 🔽'}
                                                        {header.column.getIsSorted() === 'asc' && ' 🔼'}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table
                        .getRowModel()
                        .rows
                        .map(row => {
                            return (
                                <tr key={row.id} className={styles.tr}>
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id} className={styles.td}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            <div>
                <select
                    id="paginationSelect"
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(e.target.value)
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};