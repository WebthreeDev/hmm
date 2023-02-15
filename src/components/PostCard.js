import React from 'react';
import './PostCard.css';

class PostCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latesPost: [
                { name: "Yahoo", id: 1, title: 'Samurai Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Tallinn, Estonia--(Newsfile Corp. - February 9, 2022) - Samurai Inu is excited to announce their NFT sales even and introduce the NFT Marketplace.', img: 'assets/img/images/SamuraiInuERC.jpg', date:'Wed, February 9, 2022', url: 'https://finance.yahoo.com/news/Samuraiinu-initiate-nft-sales-102700691.html?.tsrc=fin-srch'},
    
                { name: "Nasdaq", id: 2, title: 'Samurai Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Samurai Inu is planning to hold a sales event for its NFTs (non fungible tokens). These NFTs have in-game functionality and shall provide benefits to those wishing to gain a headstart on the Samurai Inu metaverse\'s debut. The NFT sale event will hence be held on the Samurai Inu website and will offer a chance for first-mover advantages for collectors and gamers alike.', img: 'assets/img/images/news00.png', date:'February 9, 2022', url:'https://www.nasdaq.com/press-release/Samuraiinu-to-initiate-nft-sales-event-and-introduce-nft-marketplace-2022-02-09'},
    
                { name: "Marketwatch", id: 3, title: 'Samurai Inu To Initiate NFT Sales Event And Introduce NFT Marketplace', description: 'Furthermore, the Samurai Inu game completely integrates NFTs into its design, giving both players and producers a wealth of possibilities which also involves an in-house NFT marketplace. This marketplace enables customers to trade and exchange in-game assets (minted as NFTs) for ETH. In addition to in-game commodities, the Samurai Inu NFT marketplace is available to digital artists who may promote, sell, or exchange their work. Profits from the games are then re-invested into the Samurai Inu platform.', img: 'assets/img/images/news01.png', date:'February 9, 2022', url: 'https://www.marketwatch.com/press-release/Samuraiinu-to-initiate-nft-sales-event-and-introduce-nft-marketplace-2022-02-09?mod=mw_quote_news_seemore'}
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
