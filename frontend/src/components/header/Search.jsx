import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Styled components for the search bar
const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  width: '50%',
  borderRadius: '4px',
  marginLeft: '20px',
  display: 'flex',
  alignItems: 'center',
  padding: '5px 10px',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  paddingLeft: '10px',
  flex: 1,
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon style={{ color: '#888', marginRight: '10px' }} />
      <StyledInputBase
        placeholder="Search for products, items, or categories..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchContainer>
  );
};

export default Search;
