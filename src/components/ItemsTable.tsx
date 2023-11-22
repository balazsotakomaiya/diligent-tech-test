import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

type Item = {
    name: string;
    description: string;
    quantity: number;
    status: string;
};

type ItemsTableProps = {
    items: Item[];
};

const ItemsTable: React.FC<ItemsTableProps> = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ItemsTable;
