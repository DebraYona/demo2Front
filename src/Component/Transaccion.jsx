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
          this.tramite()=this.tramite.bind(this);
        }
    tramite(){

        axios.get('/depo/',{
          params:{
            remitente:this.state.remitente,
            receptor:this.state.receptor,
            monto:this.state.monto,
            nombreT:this.state.nombreT,
            tipo:this.state.tipo,
          }
        })
        .then(response=>{

        //  this.setState({datos: response.data})

        })
        .catch(error =>{
          console.log(error);
        })

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
                                    <form action="" method="POST" name="form-gasto" class="formulario">
                                        <div class="datos">

                                            <div className="contenedor-nota">
                                                <h2 className="titulo-input-cuenta">Cuenta</h2>
                                                <input type="text" className="input-nota" name="nota" id="nota" placeholder="Numero de cuenta:"/>
                                            </div>

                                            <div className="contenedor-costo">
                                                <h2 className="titulo-costo">Monto</h2>
                                                <input type="text" className="input-costo"  name="costo" id="costo" placeholder="Costo:"/>
                                            </div>

                                        </div>
                                        <button className="btn btn-primary btn-p">Realizar pago</button>
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
