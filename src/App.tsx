import React, { useReducer } from 'react'
import { initialState, reducer } from "./reducer.ts";
import {
    Box,
} from "@mui/material";
import _ from 'lodash';
import AddItemForm from "./components/AddItemForm.tsx";
import SearchInput from "./components/SearchInput.tsx";
import ItemsTable from "./components/ItemsTable.tsx";
import Navbar from "./components/Navbar.tsx";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredItems = _.filter(state.items, item => {
        return _.some(item, value =>
            _.includes(value.toString().toLowerCase(), state.searchTerm.toLowerCase())
        );
    });

    return (
        <>
            <Navbar />

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
