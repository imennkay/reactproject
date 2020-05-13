import React, { Component } from "react";

import axios from "axios";



class FileUpload extends Component{

    state={
         image:undefined
    }

eventChange(e){
    console.log(e.target.files[0])
    this.setState({image:e.target.files[0]})
}

    async onSubmitToApi(e) {
        e.preventDefault();

      const data=  new FormData();

      data.append("files", this.state.image)

//console.log(data)
        const res = await axios.post('http://localhost:1337/upload/', data)

        console.log(res)

    }

    render(){
        return(
            <div>
                 <form onSubmit={this.onSubmitToApi.bind(this)}>
                     
                     <input type="file" onChange={this.eventChange.bind(this)} name="file"/>
                     
                     <button>Upload</button>
                     
                 </form>

            </div>
        )
    }
}

export default FileUpload;