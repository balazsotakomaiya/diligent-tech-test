import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";
import ArrowUp from "../assets/arrow-up.svg";
import { Item } from "../reducer.ts";

interface Props {
    newItem: Item
    setNewItem: (item: Item) => void;
    onClickAddItem: () => void;
}

const AddItemForm: React.FC<Props> = ({ newItem, setNewItem, onClickAddItem }) => {
    const handleInputChange = (field: keyof Item, value: string | number) => {
        setNewItem({ ...newItem, [field]: value });
    };

    const isFormValid = () => {
        // Check for name and description
        if (!newItem.name.trim() || !newItem.description.trim()) {
            return false
        }

        // Check if quantity exists
        if (typeof newItem.quantity !== 'number') {
            return false
        }

        // Check for status
        const validStatuses = ['Online', 'Pending', 'Offline'];
        if (!validStatuses.includes(newItem.status)) {
            return false
        }

        return true
    }

    const handleAddItem = () => {
        if (isFormValid()) {
            onClickAddItem()
        } else {
            alert('Please fill in all the fields')
        }
    }

    return (
        <Accordion>
            <AccordionSummary expandIcon={<img height={16} src={ArrowUp} alt="Collapse"/>}>
                <Typography>Add New Item</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12} md={3}>
                        <TextField
                            value={newItem.name}
                            label="Name"
                            fullWidth
                            onChange={e => handleInputChange('name', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            value={newItem.description}
                            label="Description"
                            fullWidth
                            onChange={e => handleInputChange('description', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField
                            value={newItem.quantity}
                            label="Quantity"
                            type="number"
                            fullWidth
                            onChange={e => handleInputChange('quantity', parseInt(e.target.value, 10))}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField
                            label="Status"
                            value={newItem.status}
                            select
                            fullWidth
                            onChange={e => handleInputChange('status', e.target.value)}
                        >
                            <MenuItem value="Online">Online</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Offline">Offline</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button
                            onClick={handleAddItem}
                            size='large'
                            fullWidth={true}
                            variant="contained"
                            color="primary"
                        >
                            Add Item
                        </Button>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default AddItemForm
