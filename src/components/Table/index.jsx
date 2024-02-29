import "./Table.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';


const columnHelper = createColumnHelper();


const columns = [
    columnHelper.accessor('first-name', {
        header: () => 'First Name',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('last-name', {
        header: () => 'Last Name',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('start-date', {
        header: () => 'Start Date',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('department', {
        header: () => 'Department',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('date-of-birth', {
        header: () => 'Date of Birth',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('street', {
        header: () => 'Street',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('city', {
        header: () => 'City',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('state', {
        header: () => 'State',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('zip-code', {
        header: () => 'Zip Code',
        cell: info => info.getValue(),
    }),
];

export default function TableComponent() {
    const employees = useSelector(state => state.employees);

    // useEffect(() => {
    //     // Vous pouvez ajouter des effets secondaires ici si nécessaire
    // }, [employees]);


    const data = employees;


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="p-2">
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="h-4" />
        </div>
    );
};