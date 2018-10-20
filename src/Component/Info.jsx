import React, { Component } from 'react';
import '../css/estilos.css';
import '../css/fonts.css';
import { Panel, Button, } from 'react-bootstrap';
import axios from 'axios';




class Info extends Component {
  constructor(props){
    super();
    this.state={
      cuenta:"",
      saldo:"",
      nombre:"",
      apellido:"",
      direccion:"",
      telefono:"",

      open:true,
      datos:[],
    }
    this.dataUsuario = this.dataUsuario.bind(this)
    this.llenarUsuario = this.llenarUsuario.bind(this)
  }

  dataUsuario(e){
  //  e.preventDefault()
  //  var data = sessionStorage.getItem('numeroCuenta');

    let value='74119091'
    axios.get('http://localhost:3000/api2/cuenta/'+value
    ).then(res=>{
      this.setState({datos:res.data})
      console.log(res.data);
      console.log(this.state.datos);
      this.setState({
        nombre:this.state.datos[0].client_name,
        apellido:this.state.datos[0].client_apellido,
        direccion:this.state.datos[0].client_direccion,
        telefono:this.state.datos[0].client_telefono,
        cuenta:this.state.datos[0].client_cuentas[0].num_cuenta,
      })
    }).catch(error =>{
      console.log(error);
    })
  }

  llenarUsuario(){
    this.setState({
      nombre:this.state.datos[0].client_name,
      apellido:this.state.datos[0].client_apellido,
      direccion:this.state.datos[0].client_direccion,
      telefono:this.state.datos[0].client_telefono,
      cuenta:this.state.datos[0].client_cuentas[0].num_cuenta,

    })
    console.log(this.state.direccion);
  }
  componentWillMount(){
    this.dataUsuario()

  }


  render() {


    console.log(this.state.direccion);
    const cuenta=this.state.cuenta
    let saldo = this.state.saldo
    return (

    <section className="user">
          <div className="contenedor-up">
              <h2 className="titulo-micuenta"><span className="icon-stack"> </span> Mi cuenta</h2>
              <div className="informacion">
                  <div className="cuentas">
                          <h2 className="titulo-cuenta">Numero de cuenta <span className="icon-pencil"> </span> </h2>

                          <h2 className="valor-cuenta">{this.state.cuenta}</h2>
                  </div>
                  <div className="montoActual">

                          <h2 className="valor-Monto">{this.state.saldo}</h2>
                          <h2 className="titulo-Monto">Saldo disponible</h2>
                      </div>
            </div>

                </div>
                <div className="contenedor-up">
                <h2 className="titulo-micuenta"><span className="icon-stack"> </span> Informacion Personal</h2>

                <div className="informacion">

                <div className="nombre">
                        <h2 className="titulo-cuenta">Nombre  <span className="icon-pencil"> </span> </h2>
                        <h2 className="valor-cuenta">{this.state.nombre}</h2>
                        <h2 className="titulo-cuenta">apellido <span className="icon-pencil"> </span> </h2>
                        <h2 className="valor-cuenta">{this.state.apellido}</h2>
                </div>
                <div className="direccion">
                        <h2 className="titulo-Monto">Direccion</h2>
                        <h2 className="valor-Monto">{this.state.direccion}</h2>
                        <h2 className="titulo-cuenta">telefono <span className="icon-pencil"> </span> </h2>
                        <h2 className="valor-cuenta">{this.state.telefono}</h2>

                    </div>
              </div>


  </div>

        </section>

    );
  }
}

export default Info;
