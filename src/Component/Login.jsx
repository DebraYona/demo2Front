import React, { Component } from 'react';
import '../css/estilos.css';
import '../css/fonts.css';
import '../css/login.css';
import axios from 'axios';

class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            number: "",
            pass: "",
        }
    }

    handleSubmit(event) {

        console.log({
            number:this.state.number,
            pass:this.state.pass
        })
        event.preventDefault();

        axios.get('https://pyrestdemo2.herokuapp.com//api/v1/login/',{
            params:{
                number:this.state.number,
                passw:this.state.pass,
            }
        })
            .then(response=>{
                console.log(response.data)

                if(response.data.length <=0 ){
                    alert("Usuario y contraseña incorrecta")
                }else{
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    axios.get('https://pyrestdemo2.herokuapp.com/api/v1/accountbyuserid/', {
                        params: { idusuario: response.data[0].idusuario }
                    }).then(response2=>{
                        console.log(response2.data)
                        sessionStorage.setItem('cuentas', JSON.stringify(response2.data));
                        window.location.reload();
                    })

                }
            })



    }

    componentDidMount(){
        var data = sessionStorage.getItem('user');
        console.log(data);
    }

    handleChangePass(event) {

        var data = JSON.parse(sessionStorage.getItem('user'))
        console.log(data);
        var d = JSON.parse(sessionStorage.getItem('cuentas'))
        console.log(d);

        console.log(event.target.value)
        this.setState({ pass: event.target.value});
    }

    handleChangeNumber(event) {
        console.log(event.target.value)
        this.setState({ number: event.target.value});
    }
  render() {
    return (
      <div className="contenedor">
         <header>

             <h1>SING IN</h1>
         </header>
         <form action="" class="main" onSubmit={this.handleSubmit.bind(this)}>
             <div className="user">
                 <label for="username">Numero de cuenta: </label>
                 <input type="text" id="username" placeholder="Cuenta"
                        value={this.state.numero} onChange={this.handleChangeNumber.bind(this)}
                 />
             </div>

             <div className="password">
                 <label for="password">Clave: </label>
                 <input type="password" id="password" placeholder="Password"
                        value={this.state.pass} onChange={this.handleChangePass.bind(this)}
                 />
             </div>
             <button className="btn btn-primary btn-p" >Ingresar</button>
         </form>
         <a href="banco.html">IR A BANCO</a>
    </div>
    )


  }
    }
export default Login;
