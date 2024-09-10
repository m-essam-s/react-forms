import { useState } from "react"

const Form = () => {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: "",
        }
    );

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = event.target;
        const checked = (event.target as HTMLInputElement).checked;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        console.log(formData)
    };
    
    return (
        <form onSubmit={handleSubmit}>
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

            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleFormChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleFormChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleFormChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>

            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleFormChange}
                name="favColor"
            >
                <option value="">-- Please choose a color --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>

        </form>
    )
}
export default Form
