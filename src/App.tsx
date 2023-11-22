import React, { useReducer } from 'react'
import { initialState, reducer } from "./reducer.ts";
import {
    AppBar,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Toolbar,
    Typography
} from "@mui/material";
import _ from 'lodash';
import logo from './assets/logo.svg';
import AddItemForm from "./components/AddItemForm.tsx";
import SearchInput from "./components/SearchInput.tsx";
import ItemsTable from "./components/ItemsTable.tsx";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredItems = _.filter(state.items, item => {
        return _.some(item, value =>
            _.includes(value.toString().toLowerCase(), state.searchTerm.toLowerCase())
        );
    });

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Logo" style={{ marginRight: 10 }}/>
                        <Typography variant="h6" component="div">
                            Assets
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box marginTop={8} marginLeft={8} marginRight={8}>
                <Box marginBottom={2}>
                    <AddItemForm
                        newItem={state.newItem}
                        setNewItem={(item) => dispatch({ type: 'UPDATE_NEW_ITEM', payload: item })}
                        onClickAddItem={() => dispatch({ type: 'ADD_ITEM' })}
                    />
                </Box>

                <Box marginBottom={2}>
                    <SearchInput
                        searchTerm={state.searchTerm}
                        onUpdateSearchTerm={(newTerm) => dispatch({ type: 'UPDATE_SEARCH_TERM', payload: newTerm })}
                    />
                </Box>

                <Box marginBottom={2}>
                    <ItemsTable
                        items={filteredItems}
                    />
                </Box>
            </Box>
        </>
    );
};

export default App
