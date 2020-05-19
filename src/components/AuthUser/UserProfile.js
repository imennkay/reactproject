import React, {Component} from "react";
import firebase from "../FirebaseConfig";


class UserProfile extends Component{

    logOut(){
       
        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
     }

    deleteAccount(){
        var user = firebase.auth().currentUser;
        console.log(user);

        user
          .delete()
          .then(function () {
            // User deleted.
          })
          .catch(function (error) {
            // An error happened.
          });

    }
    render(){
        return(
            <div>
                <b>Welcome</b> {this.props.userData}

                <button onClick= {this.logOut.bind(this)}>Sign out</button> 
                <button onClick={this.deleteAccount.bind(this)}>Delete user</button>

            </div>
        )
    }
}

export default UserProfile;

