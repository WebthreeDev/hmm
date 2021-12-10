import React from 'react';
import './Brand.css';

class Brand extends React.Component {
    render() {
        return (
            <div className="brand-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <div className="row brand-active">
                                <div className="col-6">
                                    <div className="brand-item">
                                    <a href="https://coinmarketcap.com/currencies/katana-inu/"><img src="https://katanainu.com/wp-content/uploads/2021/12/cmc.png" alt="img" /></a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="brand-item">
                                    <a href="https://www.certik.org/projects/katanainu"><img src="https://katanainu.com/wp-content/uploads/2021/11/certikwhite-1.png" alt="img" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brand;
