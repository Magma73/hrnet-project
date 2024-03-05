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
// import "./Table.module.css";


const columnHelper = createColumnHelper();

/**
 * Function component Table - Represent the Table Component
 * @returns {JSX.Element} The rendered Table component.
 */
export default function TableComponent() {
    const [data, setData] = useState([]);
    const [sorting, setSorting] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('employeeData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setData(parsedData.employeeInfos.employees);
        } else {
            setData(mockData);
        }
    }, []);


    /**
 * Generates columns dynamically based on data keys.
 * @param {Array} data - Data array
 * @returns {Array} - Array of column definitions
 */
    function generateColumns(data) {
        if (!data || data.length === 0) return [];
        console.log(data);
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
        debugTable: true,
    });

    return (
        <div className="p-2">
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan}>
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
                                                    <>
                                                        {header.column.getIsSorted() === 'desc' && ' 🔽'}
                                                        {header.column.getIsSorted() === 'asc' && ' 🔼'}
                                                    </>
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
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id}>
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