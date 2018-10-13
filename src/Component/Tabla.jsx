import React, { Component } from 'react';

class Tabla extends Component{
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
                                                    <tr>
                                                        <td>998565452211</td><td>15/12/2017</td><td>rec</td><td>+180.60</td>
                                                    </tr>
                                                    <tr>
                                                        <td>998565452211</td><td>15/12/2017</td><td>depo</td><td>+180.60</td>
                                                    </tr>

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
