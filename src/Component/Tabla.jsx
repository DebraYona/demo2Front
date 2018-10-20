import React, { Component } from 'react';
import axios from "axios/index";

class Tabla extends Component{
    constructor(props){
        super(props);

        this.state = {
            ope:[],
        }
        //    this.tramite()=this.tramite.bind(this);
    }

    componentDidMount() {
        axios.get('https://pyrestdemo2.herokuapp.com/api/v1/transbycliente/',{
            params:{
                cuenta : 1,
                /*remitente:this.state.remitente,
                receptor:this.state.receptor,
                monto:this.state.monto,
                nombreT:this.state.nombreT,
                tipo:this.state.tipo,*/
            }
        })
            .then( response => {
                console.log(response)
                this.setState({ ope: response.data})
            })
            .catch(error =>{
                console.log(error);
            })
    }

    render() {
        return (
            <section className="main">
                <section className="transaccion-tabla">

                    <section className="tabla">
                        <div className="contenedor-center">
                            <div className="contenedor-center-down">
                                <div className="fomulario-tabla" >
                                    <h2 className="titulo-tabla">TABLA DE TRANSACCIONES</h2>
                                    <div className="tabla-container">
                                        <table  className="tablaGastos">
                                            <thead>
                                            <tr>
                                                <th>Cuenta</th><th>Fecha</th>
                                                <th>Operacion</th>
                                                <th>Monto</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.ope.map((op, i) => {

                                                return ((op.tipo == 1)?
                                                    (<tr key={i}>
                                                        <td>{op.cuenta_remitente}</td><td>{ op.fecha }</td><td>{ op.nombre }</td><td style={{color : 'red'}}>-{ op.monto }</td>
                                                    </tr>)
                                                    :(<tr key={i}>
                                                        <td>{op.cuenta_receptor}</td><td>{ op.fecha }</td><td>{ op.nombre }</td><td>{ op.monto }</td>
                                                    </tr>))
                                                // Return the element. Also pass key

                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}

export default Tabla;
