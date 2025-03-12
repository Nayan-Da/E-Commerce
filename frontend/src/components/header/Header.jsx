import React from 'react';
import { AppBar, Toolbar,Box,Typography, } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from Material-UI's system
//components
import Search from './Search';
import CustomButtons from './CustomButtons';

// Define the styled component
const StyledHeader = styled(AppBar)`
    background-color:#2874f0;
    color: white;
    height:62px;
    text-align:center;
    font-size:10px;
    font-style:italic;
`;

const Component = styled(Box)`
margin-left:2%;
`
const Header = () => {
    return (
        <StyledHeader>
            <Toolbar>
              <Component>
                <Box>
                <h1>MORDERN FURNITURE</h1>
                </Box>
              </Component>
              <Search />  
              <B0x>
                <CustomsButtons/>
              </B0x>
            </Toolbar>
        </StyledHeader>
    );
};

export default Header;
