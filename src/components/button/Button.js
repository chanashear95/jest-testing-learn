function Button({label}){
    return(
        <button className="btn-style" data-testid="button">
           Hi {label}
        </button>
    )
}

export default Button;