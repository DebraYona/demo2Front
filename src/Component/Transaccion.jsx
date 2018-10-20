import React, { Component } from 'react';
import '../css/estilos.css';
import '../css/fonts.css';
import axios from 'axios';
import Tabla from './Tabla'

class Transaccion extends Component {
    constructor(props){
          super(props);

          this.state = {
            remitente:props.remitente,
            receptor:"",
            monto:0,
            nombreT:"",
            tipo:"",
            datos:[],
          }
      //    this.tramite()=this.tramite.bind(this);
      //    this.tramite()=this.tramite.bind(this);
        }

    handleSubmit(event) {

      console.log({remitente:this.state.remitente,
            receptor:this.state.receptor,
            monto:this.state.monto,
            nombreT:this.state.nombreT,
            tipo:this.state.tipo})
       event.preventDefault();

      if(this.state.receptor == undefined || this.state.receptor == ""){
          alert("numero de cuenta vacia")
      } else  if(this.state.monto == "" || this.state.monto <= 0 || !(!isNaN(parseFloat(this.state.monto)) && isFinite(this.state.monto))){
          alert("monto correcto")
      }else{
          axios.get('https://pyrestdemo2.herokuapp.com/api/v1/accountbynumber/',{
              params:{
                  numero:this.state.receptor,
              }
          })
              .then(response=>{
                    console.log(response.data)
                  if(response.data.length <= 0) {
                        alert("cuenta no existe")
                  }else{
                      console.log(response.data[0].idcuenta)

                      axios.post('https://pyrestdemo2.herokuapp.com/api/v1/transnew/',{
                              cuenta_receptor: this.state.receptor,
                              cuenta_remitente: 1,
                              monto: this.state.monto,
                              tipo: 1,

                      })
                          .then(response=>{
                              alert("transferencia ok")
                              window.location.reload();
                          })
                          .catch(error =>{
                              console.log(error);
                              alert("error en el servidor");
                          })

                  }
                  //  this.setState({datos: response.data})

              })
              .catch(error =>{
                  console.log(error);
              })
      }


    }
    handleChangeReceptor(event) {

      console.log(event.target.value)
      this.setState({receptor: event.target.value});
    }

    handleChangeMonto(event) {
        console.log(event.target.value)
        this.setState({monto: event.target.value});
    }

  render() {
    return (
      <section className="main">
      <section className="transaccion-tabla">
      <section class="transaccion">

                        <section className="transaccion-pago">
                            <div className="contenedor-center">
                                <div className="contenedor-center-up">
                                    <h2 className="titulo-transaccion-pago"><span class="icon-coin-dollar"> </span>Transaccion</h2>
                                    <form action="" method="POST" name="form-gasto" class="formulario" onSubmit={this.handleSubmit.bind(this)}>
                                        <div class="datos">

                                            <div className="contenedor-nota">
                                                <h2 className="titulo-input-cuenta">Cuenta</h2>
                                                <input type="text"
                                                       className="input-nota"
                                                       name="nota" id="nota"
                                                       placeholder="Numero de cuenta:"
                                                       value={this.state.receptor} onChange={this.handleChangeReceptor.bind(this)}
                                                />
                                            </div>

                                            <div className="contenedor-costo">
                                                <h2 className="titulo-costo">Monto</h2>
                                                <input type="text"
                                                       className="input-costo"
                                                       name="costo" id="costo"
                                                       placeholder="Costo:"
                                                       value={this.state.monto} onChange={this.handleChangeMonto.bind(this)}
                                                />
                                            </div>

                                        </div>
                                        <button className="btn btn-primary btn-p" >Realizar pago</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                        </section>
                    </section>
                    </section>
    );
  }
}

export default Transaccion
