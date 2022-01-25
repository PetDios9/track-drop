import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearch, StyledSearchIconWrapper, StyledInputBase } from './styles';

function HeaderSearchBar() {
  return (
    <StyledSearch>
      <StyledSearchIconWrapper>
        <SearchIcon />
      </StyledSearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </StyledSearch>
  );
}

export default HeaderSearchBar;
