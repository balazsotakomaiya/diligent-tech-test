import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import Magnify from '../assets/magnify.svg';

type SearchInputProps = {
    searchTerm: string;
    onUpdateSearchTerm: (newTerm: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onUpdateSearchTerm }) => {
    return (
        <TextField
            label="Search Items"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => onUpdateSearchTerm(e.target.value)}
            style={{ marginBottom: '20px' }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <img height={16} src={Magnify} alt="Search"/>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchInput;
