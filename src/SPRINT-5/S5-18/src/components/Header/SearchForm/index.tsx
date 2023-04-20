import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { useContext } from 'react';
import { ProductsContext } from '../../../providers/ProducstContext';

const SearchForm = () => {
  const {searchValue, handleSubmit, handleInput} = useContext(ProductsContext)
  
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <input type='text' placeholder='Digitar pesquisa' value={searchValue} onChange={handleInput}/>
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  )
}

export default SearchForm;
