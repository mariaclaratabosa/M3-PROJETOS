const Component = ({children}) => {
    return (
        <ul>
        <li>
            <span>{children}</span>
        </li>
        </ul>
    )
}

const CenteredCard = () => {
    return (
        <div>
    <Component>
        Children 1
    </Component>
    <Component>
        Children 2
    </Component>
    <Component>
        Children 3
    </Component>
        </div>
    )
}

export default CenteredCard