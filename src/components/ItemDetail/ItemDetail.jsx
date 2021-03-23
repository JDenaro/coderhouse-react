import { useHistory } from "react-router-dom";

export const ItemDetail = ({ items: { id, title, manufacturer, price, pictureUrl, description, stock, size, weight, connector } }) => {

    const history = useHistory();

    return (
        <>

            <div>
                <div className="item d-flex border rounded mb-4 bg-white">
                    <div className="col-5 py-4 d-flex justify-content-center">
                        <img src={pictureUrl} alt="{title}" className="img-fluid" />
                    </div>
                    <div className="col-7">
                        <div className="card-block py-3 px-3">
                            <h4 className="card-title mb-3">{title}</h4>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <p className="m-0">Price: {price} USD</p>
                            </div>
                            <p className="card-text">{description}</p>

                            <p className="card-text">Manufacturer: {manufacturer}</p>
                            <p className="card-text">Size: {size}</p>
                            <p className="card-text">Weight: {weight}</p>
                            <p className="card-text">Connector: {connector}</p>

                            <button className="btn btn-success px-4 py-2" onClick={() => { history.goBack(); }}>Go back</button>
                        </div>
                    </div>
                </div>
            </div >
        </>


    )
}
