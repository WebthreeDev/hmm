import React from 'react';
import './Brand.css';

class Brand extends React.Component {
    render() {
        return (
            <div className="brand-area brand-bg home-four-brand">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <div className="row brand-active align-items-center justify-content-center">
                                <div className="col-xl-3">
                                    <div className="brand-item">
                                        <img src="assets/img/brand/certikwhite-1.png" alt="BRAND" />
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="brand-item">
                                    <img src="assets/img/brand/cmc.png" alt="BRAND" />
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
