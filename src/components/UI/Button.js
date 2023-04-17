import "./Button.css"
export const Button = (props) => {
    const { marginRight, onClick, children} = props
    return (
        <button onClick={onClick} style={{ marginRight: marginRight}}>{children}</button>
    )
}
