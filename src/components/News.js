import React from 'react';
import './News.css';

class News extends React.Component {

    render() {
        const blogs = [
            { name: "Yahoo", id: 1, title: 'Katana Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Tallinn, Estonia--(Newsfile Corp. - February 9, 2022) - Katana Inu is excited to announce their NFT sales even and introduce the NFT Marketplace.', img: 'assets/img/images/Katanainu.jpg', date:'Wed, February 9, 2022', url: 'https://finance.yahoo.com/news/katana-inu-initiate-nft-sales-102700691.html?.tsrc=fin-srch'},

            { name: "Nasdaq", id: 2, title: 'Katana Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Katana Inu is planning to hold a sales event for its NFTs (non fungible tokens). These NFTs have in-game functionality and shall provide benefits to those wishing to gain a headstart on the Katana Inu metaverse\'s debut. The NFT sale event will hence be held on the Katana Inu website and will offer a chance for first-mover advantages for collectors and gamers alike.', img: 'assets/img/images/news00.png', date:'February 9, 2022', url:'https://www.nasdaq.com/press-release/katana-inu-to-initiate-nft-sales-event-and-introduce-nft-marketplace-2022-02-09'},

            { name: "Marketwatch", id: 3, title: 'Katana Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Furthermore, the Katana Inu game completely integrates NFTs into its design, giving both players and producers a wealth of possibilities which also involves an in-house NFT marketplace. This marketplace enables customers to trade and exchange in-game assets (minted as NFTs) for ETH. In addition to in-game commodities, the Katana Inu NFT marketplace is available to digital artists who may promote, sell, or exchange their work. Profits from the games are then re-invested into the Katana Inu platform.', img: 'assets/img/images/news01.png', date:'February 9, 2022', url: 'https://www.marketwatch.com/press-release/katana-inu-to-initiate-nft-sales-event-and-introduce-nft-marketplace-2022-02-09?mod=mw_quote_news_seemore'}
        ];


        return (
            <section className='news-area py-5'>
                <div className='container'>
                    <div className="row justify-content-center mt-5">
                        <div className="col-xl-8 col-lg-9">
                            <div className="section-title text-center mb-70">
                            <h2 className="title">Latest News <span> About Katanainu</span></h2>
                            <p className="timeline-desc text-dark">Keep yourself up to date with all the news concerning Project Katanainu.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        {
                            blogs.map( post => {
                                return (
                                    <div className="col-xl-4 col-md-6" key={post.id}>
                                        <h4 className='text-dark text-center my-3'>{post.name}</h4>
                                        <div className="single-blog-post mb-30 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="b-post-thumb" style={{ backgroundImage: `url(${post.img})`, backgroundSize:'cover', backgroundPosition: 'center', height:'250px', overflow:'hidden'}}></div>
                                            <div className="blog-content">
                                                <span className='text-dark'>{post.date}</span>
                                                <h3 style={{fontSize:'17px'}}>
                                                    <a href={post.url} target="_blank" rel="noreferrer">{post.title}</a>
                                                </h3>
                                                <p className='text-dark'>{post.description.substring(0, 100)}</p>
                                                <div className='buttons d-flex justify-content-between align-items-center'>
                                                    <a href={post.url} target="_blank" rel="noreferrer" className='btn rounded py-3'>Read More</a>
                                                    <a href='/#' className='d-flex align-items-center text-dark'><i className="fas fa-share-alt"></i> <span style={{ marginLeft:'15px', marginBottom:'0'}}>SHARE</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default News
