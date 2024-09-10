import {
    useId,
    useState
} from "react"

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

    const id = useId();

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
            <label htmlFor={id + "-firstName"}>First Name</label>
            <input
                type="text"
                onChange={handleFormChange}
                name="firstName"
                value={formData.firstName}
                id={id + "-firstName"}
            />
            <label htmlFor={id + "-lastName"}>Last Name</label>
            <input
                type="text"
                onChange={handleFormChange}
                name="lastName"
                value={formData.lastName}
                id={id + "-lastName"}
            />
            <label htmlFor={id + "-email"}>Email</label>
            <input
                type="email"
                onChange={handleFormChange}
                name="email"
                value={formData.email}
                id={id + "-email"}
            />
            <label htmlFor={id + "-comments"}>Comments</label>
            <textarea
                value={formData.comments}
                onChange={handleFormChange}
                name="comments"
                id={id + "-comments"}
            />
            <input
                type="checkbox"
                id={id + "-isFriendly"}
                checked={formData.isFriendly}
                onChange={handleFormChange}
                name="isFriendly"
            />
            <label htmlFor={id + "-isFriendly"}>Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id={id + "-unemployed"}
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleFormChange}
                />
                <label htmlFor={id + "-unemployed"}>Unemployed</label>
                <br />

                <input
                    type="radio"
                    id={id + "-part-time"}
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleFormChange}
                />
                <label htmlFor={id + "-part-time"}>Part-time</label>
                <br />

                <input
                    type="radio"
                    id={id + "-full-time"}
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleFormChange}
                />
                <label htmlFor={id + "-full-time"}>Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor={id + "-favColor"}>What is your favorite color?</label>
            <br />
            <select
                id={id + "-favColor"}
                value={formData.favColor}
                onChange={handleFormChange}
                name="favColor"
            >
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
