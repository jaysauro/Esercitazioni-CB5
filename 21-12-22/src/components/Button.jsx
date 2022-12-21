import './Button.css';

const buttonVariants = {
    primary: 'redButton',
    secondary: 'greenButton',
    tertiary: 'blueButton'
}


export function Button(props) {
    const {
        className = '',
        children = '',
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