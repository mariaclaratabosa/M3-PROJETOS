const Input = ({ label, id, placeholder, type, register }) => {
    return(
        <fieldset>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input type={type} name={id} id={id} placeholder={placeholder} {...register} />
        </fieldset>
    )
}

export default Input