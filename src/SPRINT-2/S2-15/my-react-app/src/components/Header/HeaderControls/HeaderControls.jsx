import { useState } from "react"
import { StyledHeaderControls } from "./style"
import { MdSearch, MdFavoriteBorder } from "react-icons/md"

export const HeaderControls = ({ setIsFavoriteModalVisible, favoritesList, setSearch}) => {
    const [searchInput, setSearchInput] = useState('')

    const submit = (e) => {
        e.preventDefault()
        setSearch(searchInput)
        setSearchInput('')
    }

    return(
        <StyledHeaderControls>
            <div>
                <form onSubmit={submit}>
                    <input type="text" value={searchInput} placeholder="Buscar" onChange={(e) => setSearchInput(e.target.value)}/>
                    <button type="submit"><MdSearch size={26}/></button>
                </form>
            </div>
            <div>
                <button className="favoriteButton" onClick={() => setIsFavoriteModalVisible(true)}> <MdFavoriteBorder size={28} />({favoritesList.length})</button>
            </div>
        </StyledHeaderControls>
    )
}