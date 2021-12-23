import React from 'react';

class CommingSoon extends React.Component {


    render() {
        return (
            <section className="coming-soon-area bg-white pb-5">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-5">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center">
                            <span className="sub-title">Our SALE</span>
                            <h2 className="title text-dark">You can purchase now on  <span>Pancake Swap</span> and <span>Uniswap</span></h2>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <p className='text-dark'>Uniswap: </p>
                            <p className='text-dark'><strong>0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15</strong></p>
                            <p className='text-dark'>Pancake Swap: </p>
                            <p className='text-dark'><strong>0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205</strong></p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default CommingSoon
