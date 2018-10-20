import React, { Component } from 'react';

class Header extends Component {


    logout(){
        sessionStorage.clear();
        window.location.reload();
    }


    render() {


        return (
            <header>
                <div className="contenedor">
                    <h2 className="titulo-banco">BANCO</h2>
                    <button className="btn btn-primary btn-s" onClick={this.logout}>Salir <span class="icon-exit"> </span></button>

                </div>
            </header>
        )

    }
}
export default Header
