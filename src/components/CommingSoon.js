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
                            <p className='text-dark' style={{ fontSize: '18px', fontWeight: 800}}>Uniswap: </p>
                            <p className='text-dark'><strong>0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15</strong></p>
                            <p className='text-dark' style={{ fontSize: '18px', fontWeight: 800}}>Pancake Swap: </p>
                            <p className='text-dark'><strong>0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205</strong></p>

                            <div className="slider-btn-wrap mt-5 justify-content-center">
                                <a target="_blank" rel="noreferrer" href="https://www.dextools.io/app/bsc/pair-explorer/0x693ff254f2e07f4852193f8bf347b3776c630ce4
" className="btn btn-style-two">DexTools</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default CommingSoon
