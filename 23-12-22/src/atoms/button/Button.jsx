export function Button(props) {
    console.log('props di Button:', props);
  
    const { 
      className = '',
      children = 'Non ho {children}',
      variant = 'none',
      ...otherAttributes
    } = props;
  
    return (
        <button
            className={`btn btn--${variant} ${className}`}
            {...otherAttributes}
        >
          {children}
        </button>
    );
  }