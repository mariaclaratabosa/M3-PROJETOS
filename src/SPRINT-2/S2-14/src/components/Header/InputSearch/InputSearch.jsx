import { StyledForm } from "./InputStyle"

const InputSearch = ({ handleSearch, searchValue, setSearchValue }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch()
    }

    return (
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digitar pesquisa" className='formInput' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <button className='formButton' type="submit">Pesquisar</button>
            </form>
        </StyledForm>
    )
}

export default InputSearch