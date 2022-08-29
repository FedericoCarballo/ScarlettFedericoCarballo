import React from 'react'

const ItemDetail = ({datos}) => {
    return (
        <>
          <div className="container">
            <div className="caja-producto">
              <div className="imagen-torta">
                <a href=""><img src={datos.img} alt="" /></a>
              </div>
              <div className="detalles-torta">
                <h5>{datos.tortatitulo}</h5>
                <p>Precio: ${datos.precio}</p>
              </div>
              {datos.boton}
            </div>
          </div>
        </>
      );
    };

export default ItemDetail