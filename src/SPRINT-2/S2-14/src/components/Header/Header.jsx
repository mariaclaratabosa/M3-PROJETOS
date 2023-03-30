import { StyledHeader } from './HeaderStyle'
import InputSearch from './InputSearch/InputSearch'
import Logo from './Logo/Logo'

const Header = ({ handleSearch, searchValue, setSearchValue }) => {
    return (
        <StyledHeader>
            <div className='headerStyle'>
                <Logo />
                <InputSearch type='text' searchValue={searchValue} handleSearch={handleSearch} setSearchValue={setSearchValue}/>
            </div>
        </StyledHeader>
    )
}

export default Header