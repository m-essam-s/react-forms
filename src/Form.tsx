import { SetStateAction, useState } from "react"

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setFirstName(event.target.value);
        console.log(firstName);
    }

    const handleLastNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLastName(event.target.value);
        console.log(lastName);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"

                onChange={handleFirstNameChange}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />

        </form>
    )
}
export default Form
