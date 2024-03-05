import React from "react";
import { useEffect, useState, useMemo } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import mockData from "../../__mocks__/mockedDatas";
import styles from "./Table.module.css";


const columnHelper = createColumnHelper();

/**
 * Function component Table - Represent the Table Component
 * @returns {JSX.Element} The rendered Table component.
 */
export default function TableComponent() {
    const [data, setData] = useState([]);
    const [hasDataChanged, setHasDataChanged] = useState(false);
    const [sorting, setSorting] = useState([]);

    console.log("data : ", data);
    console.log("hasDataChanged : ", hasDataChanged)
    console.log("sorting : ", sorting)

    // useEffect(() => {
    //     const storedData = localStorage.getItem('employeeData');
    //     const initialData = storedData ? JSON.parse(storedData).employeeInfos.employees : mockData;
    //     setData(initialData);
    // }, []);

    // Set initial data on first render
    useEffect(() => {
        const storedData = localStorage.getItem('employeeData');
        const initialDataFromStorage = storedData ? JSON.parse(storedData).employeeInfos.employees : mockData;
        setData(initialDataFromStorage);
    }, []);

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

    // Initialize table using useReactTable hook
    const table = useReactTable({
        data,
        columns: useMemo(() => generateColumns(data), [data]),
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        // debugTable: true,
    });


    useEffect(() => {
        const storedData = localStorage.getItem('employeeData');
        const initialDataFromStorage = storedData ? JSON.parse(storedData).employeeInfos.employees : mockData;
        setHasDataChanged(JSON.stringify(initialDataFromStorage) !== JSON.stringify(data));
    }, [data]);


    return (
        <div className="p-2">
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
                        .rows.slice(0, 10)
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
            <div className="h-4" />
        </div>
    );
};