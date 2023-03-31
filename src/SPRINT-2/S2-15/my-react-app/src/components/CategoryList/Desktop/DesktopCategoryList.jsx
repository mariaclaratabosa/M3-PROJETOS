import { StyledDesktopCategoryList, StyledDesktopCategoryListitem } from "./style"
import { StyledContainer } from "../../../styles/grid"

export const DesktopCategoryList = ({ categoriesList, filter, setFilter }) => {
    return (
        <StyledContainer>
            <StyledDesktopCategoryList>
                <StyledDesktopCategoryListitem active={filter === ""}>
                    <button onClick={() => setFilter('')}>Recentes</button>
                </StyledDesktopCategoryListitem>
                {categoriesList.map(category => {
                    return (
                        <StyledDesktopCategoryListitem key={category.id} active={filter === category.slug}>
                            <button onClick={() => setFilter(category.slug)}>
                                {category.label}
                            </button>
                        </StyledDesktopCategoryListitem>
                    )
                })}
            </StyledDesktopCategoryList>
        </StyledContainer>
    )
}