import React, {Component} from 'react'

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component{
    state = {
        
    }

    render(){
        return(
            <Provider value={{}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}