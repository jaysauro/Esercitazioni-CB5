const buttonVariants = {
    primary: 'redButton',
    secondary: 'greenButton',
    tertiary: 'blueButton'
}


export function Button() {
    const {
        className = '',
        children = 'Nessun {children}',
        variant = 'none',
        ...otherAttributes
    } = props;

    return (
        <button
            className={`btn ${variant} ${className}`}
            {...otherAttributes}
        >
            {children}
        </button>    
    );
}