import React from 'react';
import './PostCard.css';

class PostCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latesPost: [
                { id: 1, title: 'Katana Inu P2E Metaverse Game Announces Exclusive Partnership With Seed Thrift Ventures', description: 'Katana Inu, a play2earn Battle Royale NFT PC Game with an integrated NFT Marketplace announced an exclusive partnership with Seed Thrift Ventures, a platform that incubates early phases of blockchain with capital, support and promotion. Seed Thrift Ventures will act as an investor and backer for the Katana Inu ecosystem. The gaming industry and the crypto industry are two of the fastest-growing sectors on the planet. While the global gaming market is expected to reach a value of USD 314.40 billion by 2026, the global cryptocurrency market is projected to reach $4.94 billion by 2030. Platforms like Katana Inu are pleased to announce their launch in this emerging blockchain-based gaming space, with a goal to transform the face of both sectors.', img: 'assets/img/images/Katanainu.jpg', date:'Dec 20, 2021', url: 'https://coinquora.com/katana-inu-p2e-metaverse-game-announces-exclusive-partnership-with-seed-thrift-ventures/'},

                { id: 2, title: 'Katana Inu P2E Metaverse Game Announces Exclusive Partnership With Seed Thrift Ventures', description: 'Katana Inu, a play2earn Battle Royale NFT PC Game with an integrated NFT Marketplace announced an exclusive partnership with Seed Thrift Ventures, a platform that incubates early phases of blockchain with capital, support and promotion. Seed Thrift Ventures will act as an investor and backer for the Katana Inu ecosystem.The gaming industry and the crypto industry are two of the fastest-growing sectors on the planet. While the global gaming market is expected to reach a value of USD 314.40 billion by 2026, the global cryptocurrency market is projected to reach $4.94 billion by 2030. Platforms like Katana Inu are pleased to announce their launch in this emerging blockchain-based gaming space, with a goal to transform the face of both sectors. Katana Inu: The Ecosystem Katana Inu is a platform that effectively combines DeFi, NFTs, and high quality graphical gameplay to offer an entertaining and rewarding e', img: 'assets/img/images/crypto.jpg', date:'Dec 20, 2021', url:'https://www.investing.com/news/cryptocurrency-news/katana-inu-p2e-metaverse-game-announces-exclusive-partnership-with-seed-thrift-ventures-2717162'},

                { id: 3, title: 'Metaverse Game Announces Exclusive Partnership With Seed Thrift Ventures', description: 'Katana Inu is a platform that effectively combines DeFi, NFTs, and high quality graphical gameplay to offer an entertaining and rewarding experience for gamers. The game has a Play-to-Earn model that will allow players to retain full control and ownership over their in-game assets, which means developers can no longer profit off these items.In fact, Katana Inu’s main objective is to integrate the benefits of DeFi, NFT, and other blockchain derivatives with a robust gaming platform. In other words, the team envisions a platform that is not only entertaining, but also provides participants with a source of passive income. The platform is all about producing high-end PC-GAMES with various in-game NFT items. These items can be purchased with the platform’s $KATA token through their NFT system.  Currently under development, the profits from these games will be re-invested in the Katana Inu platform to increase its market capitalization.', img: 'assets/img/images/Bitcoin.png', date:'Dec 20, 2021', url: 'https://www.investing.com/news/cryptocurrency-news/katana-inu-p2e-metaverse-game-announces-exclusive-partnership-with-seed-thrift-ventures-2717162'}
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
