const variantMap = {
    body: `text-md`,
    title: `text-xl mb-sm`
}

export const Text = (props) => {
    const {
        as = 'h1', 
        children,
        variant = 'body',
        ...attrs
    } = props;

    const Element = as;

    return <Element className={`Text ${variantMap[variant] ?? ''}`}
                    {...attrs}
    >{children}</Element>
}