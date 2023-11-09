import { useState } from "react"
const InputBox = ({ setter }) => {
    const [rawinp, setRawinp] = useState('')
    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (rawinp.length) {
            setter(rawinp)
        }
        setRawinp('')
        ev.target.reset()
    }
    const inputChange = (ev) => {
        setRawinp(ev.target.value)
    }

    return (
        <div className="inputbox">
            <form onSubmit={handleSubmit}>
                <input type="text" id="inp" onChange={inputChange} autoFocus />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default InputBox;
