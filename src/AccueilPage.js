import React from "react";

const body={
  marginTop:'5em',
  backgroundImage: 'url("https://i.pinimg.com/564x/e9/d9/6f/e9d96fe75300aa522e6edf47438f76fe.jpg")',
  width:' 90%' ,
  height: '90%' ,
  textAlign: 'center'

}

class AccueilPage extends React.Component {

  handleUpload(e) {
    e.preventDefault();
    const data = new FormData();
    
    data.append('file', e.target.files[0]);
 data.append('filename', "test");
    
    fetch('http://localhost:8080/upload', { // Your POST endpoint
      method: 'POST',
      body: data
    })
    .then(
      response => {
        console.log(response);
        return response.json()
      } // if the response is a JSON object
    ).then(
      success => console.log(success) // Handle the success response object
    ).catch(
      error => null // Handle the error response object
    );}

  onClick(file){
    const data = new FormData();
    
    data.append('file', document.getElementById('pdf').files[0]);
 data.append('filename', 'test');
 console.log(file);
 fetch('http://localhost:8080/convert', { // Your POST endpoint
      method: 'POST',
      body : data
    })
    .then(
      response => {
        console.log(response);
        return response.json()
      } // if the response is a JSON object
    ).then(
      success => console.log(success) // Handle the success response object
    ).catch(
      error => null // Handle the error response object
    ); }

  render() {
    return ( <div style={body} >
    <br/>
    <br/>
    <label><p style={{width:'15em',textAlign: 'center'
    ,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginTop:'7em',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
    color:'white'}} >Choose your PDF file </p></label>
      <br/>
      <br/>
      <br/>
          <form encType="multipart/form-data" >
          <input  id="pdf" type="file" onChange={this.handleUpload}   />
          <br/>
          <br/>
            </form>
            <br/>
            <br/>
            <br/>
            <button style={{display: 'inline-block',
  padding: '15px 25px' ,
  fontSize: '13px ',
  cursor: 'pointer',
  textAlign: 'center' ,
  textDecoration: 'none' ,
  outline: 'none',
  color: '#800000',
  backgroundColor: '#D2B48C',
  border: 'none',
  borderRadius: '15px',
  boxShadow: '0 9px #999',
  transform: 'translateY(4px)'}} onClick={this.onClick}> Convert</button>



            <br/>
            <br/>
            <br/>
            </div>
    );
  }
}
export default AccueilPage ;
           