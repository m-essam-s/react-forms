import { useState } from "react"

const Form = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true
        }
    );

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;
        const checked = (event.target as HTMLInputElement).checked;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

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

            <input
                type="checkbox"
                id="isFriendly"
                name="isFriendly"
                onChange={handleFormChange}
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />


        </form>
    )
}
export default Form
