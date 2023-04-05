import { StyledContent } from "./style"

export const HomeContent = ({ name, course_module }) => {
    return (
        <StyledContent>
            <div className="userContent">
                <p>Olá, {name}</p>
                <span>{course_module} </span>
            </div>
            <div className="mainContent">
                <p>Que pena! Estamos em desenvolvimento :( </p>
                <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
            </div>
        </StyledContent>
    )
}