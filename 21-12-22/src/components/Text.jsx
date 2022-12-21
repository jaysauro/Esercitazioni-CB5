import './Text.css';

const textVariants = {
    title: "asH1"
}

export const Text = (props) => {
    const {
        as = "div",
        children,
        variant = "title",
        ...otherAttributes
    } = props;

    const Element = as;

    return <Element className={`${textVariants[variant] ?? ''}`}
                    {...otherAttributes}
    >{children}</Element>
}