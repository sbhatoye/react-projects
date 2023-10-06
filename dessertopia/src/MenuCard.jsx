import React from "react";

const MenuCard = ({menu}) => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {menu.map((info) =>(
                        <div key={info.id} className="col-md-4 col-sm-6 col-xs-12 card my-5 text-center bg-transparent border-danger rounded-0 text-white">
                            <div className="card-header text-start border-danger">{info.category}</div>
                            <img src={info.img} className="card-img-top w-75 mx-auto rounded-0 mt-3" alt={info.description}></img>
                            <div className="card-body">
                                <h5 className="card-title text-danger">{info.title}</h5>
                                <p className="card-text">{info.description}</p>
                                <div className="card-footer border-danger">
                                    <p className="text-danger my-3">
                                        <span className="fw-bold">Price: </span>{info.price}
                                    </p>
                                    <a href="#" className="btn btn-danger">Add to Cart</a>
                                </div>
                            </div>
                                
                        </div>
                    ))}
                </div>

            </div>

        </React.Fragment>
    );

};

export default MenuCard;