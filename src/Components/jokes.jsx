import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    componentDidMount() {
        this.makeGetRequest();
    }
    async makeGetRequest() {
        try{
            let res = await axios.get('https://official-joke-api.appspot.com/jokes/ten')
                this.setState({ 
                    jokes: res.data 
                });
        }
        catch (ex) {
            console.log('Error in API call');
        }  
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.jokes.map((joke) => {
                        return (
                            <div>
                                <h1>{ joke.setup }</h1>
                                <h2>{ joke.punchline }</h2>
                                <hr />
                            </div>
                        );
                    })}
                </ul>
            </React.Fragment>   
        )
    }
}


export default Jokes;