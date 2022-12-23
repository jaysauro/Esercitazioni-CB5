export function Container(props) {
    const { children, withRow } = props;

    console.log({ withRow })

    return (
        <div className="container">
            {
                withRow
                    ? (<div className="row">{children}</div>)
                    : children
            }
        </div>
    )
}