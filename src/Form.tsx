import { useState } from "react"

const Form = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
        }
    );

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

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
                value={formData.firstName}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleFormChange}
                name="lastName"
                value={formData.lastName}
            />

            <input
                type="email"
                placeholder="Email"
                onChange={handleFormChange}
                name="email"
                value={formData.email}
            />

            <textarea
                placeholder="Comments"
                onChange={handleFormChange}
                name="comments"
                value={formData.comments}
            />
        </form>
    )
}
export default Form
