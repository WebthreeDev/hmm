import React from 'react';
import './PostCard.css';

class PostCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latesPost: [
                { name: "Yahoo", id: 1, title: 'Katana Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Tallinn, Estonia--(Newsfile Corp. - February 9, 2022) - Katana Inu is excited to announce their NFT sales even and introduce the NFT Marketplace.', img: 'assets/img/images/Katanainu.jpg', date:'Wed, February 9, 2022', url: 'https://finance.yahoo.com/news/katana-inu-initiate-nft-sales-102700691.html?.tsrc=fin-srch'},
    
                { name: "Nasdaq", id: 2, title: 'Katana Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Katana Inu is planning to hold a sales event for its NFTs (non fungible tokens). These NFTs have in-game functionality and shall provide benefits to those wishing to gain a headstart on the Katana Inu metaverse\'s debut. The NFT sale event will hence be held on the Katana Inu website and will offer a chance for first-mover advantages for collectors and gamers alike.', img: 'assets/img/images/news00.png', date:'February 9, 2022', url:'https://www.nasdaq.com/press-release/katana-inu-to-initiate-nft-sales-event-and-introduce-nft-marketplace-2022-02-09'},
    
                { name: "Marketwatch", id: 3, title: 'Katana Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Furthermore, the Katana Inu game completely integrates NFTs into its design, giving both players and producers a wealth of possibilities which also involves an in-house NFT marketplace. This marketplace enables customers to trade and exchange in-game assets (minted as NFTs) for ETH. In addition to in-game commodities, the Katana Inu NFT marketplace is available to digital artists who may promote, sell, or exchange their work. Profits from the games are then re-invested into the Katana Inu platform.', img: 'assets/img/images/news01.png', date:'February 9, 2022', url: 'https://www.marketwatch.com/press-release/katana-inu-to-initiate-nft-sales-event-and-introduce-nft-marketplace-2022-02-09?mod=mw_quote_news_seemore'}
            ]
        }
    }

    render() {
        return (
            <div className="f-rc-post">
                <ul>
                    {
                        this.state.latesPost.map( post => {
                            return (
                                <li key={post.id}>
                                    <div className="f-rc-thumb">
                                        <a href={post.url} target="_blank" rel="noreferrer"><img src={post.img} alt="img"/></a>
                                    </div>
                                    <div className="f-rc-content">
                                        <span>{post.date}</span>
                                        <h5>
                                            <a href={post.url} target="_blank" rel="noreferrer">{post.title.substring(0, 20)}...</a>
                                        </h5>
                                    </div>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

export default PostCard
