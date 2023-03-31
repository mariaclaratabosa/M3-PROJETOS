import { StyledNewModalBox } from "./style"
import { useOutClick } from "../../hooks/useOutClick"
import { MdClose } from "react-icons/md"
import { StyledLabel, StyledParagraph, StyledTitleOne } from "../../styles/typography"

export const NewModal = ({ currentSelectedNew, setCurrentSelectedNew }) => {
    const modalRef = useOutClick(() => {
        setCurrentSelectedNew(null)
    })
    return(
        <StyledNewModalBox>
            <div role="dialog" className="modal" ref={modalRef}>
                <button className="closeButton" onClick={() => setCurrentSelectedNew(null)}><MdClose size={28} /></button>
                <StyledLabel>{currentSelectedNew.category}</StyledLabel>
                <StyledTitleOne>{currentSelectedNew.title}</StyledTitleOne>
                <StyledParagraph>{currentSelectedNew.content}</StyledParagraph>
            </div>
        </StyledNewModalBox>
    )
}