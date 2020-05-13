import React, {Component} from "react";
import firebase from "../FirebaseConfig";


class UserLogin extends Component{

    state={
        condition:true,
        user:""
    }

    onClickRegister(){
        this.setState({condition:false})
       
    }

    onClickLogin(){
        this.setState({condition:true})
     }

     onSubmitLogin(e){
        e.preventDefault();


        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;


        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=> this.props.userCredential(res.user.email))
      
    }

    onSubmitRegister(e){
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res=> this.props.userCredential(res.user.email))
          
      
    }


    render(){
        return(
            <div>
                Login Form:

                {this.state.condition && <form onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email" name="email" placeholder={"Enter your Email"}/>
                    <input type="password"  name="password" placeholder={"Enter your Password"}/><br/>
                    <button>Login</button>
                </form>}

                
                {!this.state.condition &&   <form onSubmit={this.onSubmitRegister.bind(this)}>
                    <input type="email" name="email" placeholder={"Type your Email"}/>
                    <input type="password" name="password" placeholder={"Type your Password"}/><br/>
                    <button>Register</button>
                </form> }

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button onClick={this.onClickLogin.bind(this)}>Login</button>
<button onClick={this.onClickRegister.bind(this)}>Register</button>              
            </div>
        )
    }
}

export default UserLogin;

