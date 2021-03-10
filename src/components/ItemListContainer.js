import React from 'react'

export const ItemListContainer = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-8">                
                    <div className="card flex-row flex-wrap p-3">
                        <div className="card-header border-0 bg-transparent">
                            <img src="https://shop.trezor.io/static/img/product/T2.jpg" alt="" style={{maxWidth: 300}}/>
                        </div>
                        <div className="card-block px-2">
                            <h4 className="card-title">Titulo producto</h4>
                            <p className="card-text">Descripcion</p>
                            <a href="#" className="btn btn-primary">Boton</a>
                        </div>

                    </div>

                </div>
                <div className="col-4">                    
                    <div className="card border-secondary mb-3">
                    <div className="card-header">Carrito</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title">Nombre item</h5>
                        <p className="card-text">Cantidad:1</p>
                    </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
