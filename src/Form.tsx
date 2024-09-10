import { useState } from "react"

const Form = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
        }
    );

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });


    }
    console.log(formData);
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFormChange}
                name="firstName"
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleFormChange}
                name="lastName"
            />

            <input
                type="email"
                placeholder="Email"
                onChange={handleFormChange}
                name="email"
            />

        </form>
    )
}
export default Form
