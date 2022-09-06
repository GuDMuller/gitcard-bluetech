import React from "react";
import axios from "axios";

class Form extends React.Component {
    state = { userName: "" };

    handleSubmit = async (event) => {
        event.preventDefault(); // Stops page refresh on submit
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.setState({ userName: "" }, () => {
            this.props.onSubmit(response.data)
        });
    }

    render() {
        return (
            <form className="c-form" onSubmit={this.handleSubmit}>
                <input className="c-form__field"
                    type="text"
                    placeholder="GitHub username"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    required
                >
                </input>
                <button className="c-form__button">Add card</button>
            </form>
        )
    }
}

export default Form;