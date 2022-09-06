import React from "react";
import CardList from "./CardList";
import Form from "./Form";

class App extends React.Component {
    // GitHub Profiles: gaearon, sophiebits, sebmarkbage
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    }

    render() {
        return (
            <>
                <header className="c-header">
                    <h1 className="c-header__title">{this.props.title}</h1>
                </header>

                <main className="c-main">
                    <Form onSubmit={this.addNewProfile} />
                    <CardList profiles={this.state.profiles} />
                </main>
            </>
        )
    }
}

export default App;
