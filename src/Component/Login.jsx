import React, { Component } from 'react';
import '../css/estilos.css';
import '../css/fonts.css';
import '../css/login.css';

class Login extends Component{
  render() {
    return (
      <div className="contenedor">
         <header>

             <h1>SING IN</h1>
         </header>
         <form action="" class="main">
             <div className="user">
                 <label for="username">Numero de cuenta: </label>
                 <input type="text" id="username" placeholder="Cuenta"/>
             </div>

             <div className="password">
                 <label for="password">Clave: </label>
                 <input type="password" id="password" placeholder="Password"/>
             </div>
             <button className="btn btn-primary btn-p" >Ingresar</button>
         </form>
         <a href="banco.html">IR A BANCO</a>
    </div>
    )


  }
    }
export default Login;
