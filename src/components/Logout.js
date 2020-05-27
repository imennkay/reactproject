import React, {Component} from "react";


class Logout extends Component{

    logOut(){

        localStorage.clear();
        window.location.reload(false);
    }
    render(){
        
        return(
            <div>
                <li><a href="/adminlogin" onClick={this.logOut.bind(this)}>Sign out</a></li>
            </div>
        )
    }
}

export default Logout;