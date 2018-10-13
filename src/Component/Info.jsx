import React, { Component } from 'react';
import '../css/estilos.css';
import '../css/fonts.css';
import { Panel, Button, } from 'react-bootstrap';




class Info extends Component {
  constructor(){
    super();
    this.state={
      cuenta:"",
      saldo:"",
      open:true,
    }


  }
  render() {
    const cuenta=this.state.cuenta
    let saldo = this.state.saldo
    return (

    <section className="user">
          <div className="contenedor-up">
              <h2 className="titulo-micuenta"><span class="icon-stack"> </span> Mi cuenta</h2>
              <div className="informacion">
                  <div className="cuentas">
                          <h2 className="titulo-cuenta">Numero de cuenta <span class="icon-pencil"> </span> </h2>

                          <h2 className="valor-cuenta">{cuenta}</h2>
                  </div>
                  <div class="montoActual">

                          <h2 className="valor-Monto">{saldo}</h2>
                          <h2 className="titulo-Monto">Saldo disponible</h2>
                      </div>
                </div>
                <div className="informacion">
                <Panel id="collapsible-panel-example-2" defaultExpanded>

                    <Panel.Heading>
                        <Panel.Title toggle>
                          Title that functions as a collapse toggle
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                        Info del usuario
                        </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                  </div>



            </div>

        </section>

    );
  }
}

export default Info;
