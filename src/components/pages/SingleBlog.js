import React from 'react';
import './SingleBlog.css';
import { withRouter } from 'react-router-dom';


class SingleBlog extends React.Component {

    render() {
        const  posts = [
            { id: 1, title: 'Katana Inu P2E Metaverse Game Announces Exclusive Partnership With Seed Thrift Ventures', description: 'Katana Inu, a play2earn Battle Royale NFT PC Game with an integrated NFT Marketplace announced an exclusive partnership with Seed Thrift Ventures, a platform that incubates early phases of blockchain with capital, support and promotion. Seed Thrift Ventures will act as an investor and backer for the Katana Inu ecosystem. The gaming industry and the crypto industry are two of the fastest-growing sectors on the planet. While the global gaming market is expected to reach a value of USD 314.40 billion by 2026, the global cryptocurrency market is projected to reach $4.94 billion by 2030. Platforms like Katana Inu are pleased to announce their launch in this emerging blockchain-based gaming space, with a goal to transform the face of both sectors.', img: 'http://localhost:3000/assets/img/images/Katanainu.jpg', date:'Dec 20, 2021'},

            { id: 2, title: 'Katana Inu P2E Metaverse Game Announces Exclusive Partnership With Seed Thrift Ventures', description: 'Katana Inu, a play2earn Battle Royale NFT PC Game with an integrated NFT Marketplace announced an exclusive partnership with Seed Thrift Ventures, a platform that incubates early phases of blockchain with capital, support and promotion. Seed Thrift Ventures will act as an investor and backer for the Katana Inu ecosystem.The gaming industry and the crypto industry are two of the fastest-growing sectors on the planet. While the global gaming market is expected to reach a value of USD 314.40 billion by 2026, the global cryptocurrency market is projected to reach $4.94 billion by 2030. Platforms like Katana Inu are pleased to announce their launch in this emerging blockchain-based gaming space, with a goal to transform the face of both sectors. Katana Inu: The Ecosystem Katana Inu is a platform that effectively combines DeFi, NFTs, and high quality graphical gameplay to offer an entertaining and rewarding e', img: 'http://localhost:3000/assets/img/images/crypto.jpg', date:'Dec 20, 2021'}
        ];

        let singlePost = posts.filter(post => post.id === parseInt(this.props.match.params.id) ? post: '')[0]
       
        
        return (
            <div className='blog-area'>
                <div className='container'>
                    <div className='row py-5 my-5'>
                        <div className='col-lg-8 m-auto'>
                            <div>
                                <div className="blog-list-thumb mb-35">
                                    <img src={singlePost.img} alt="img"/>
                                </div>
                                <div className="blog-list-content blog-details-content">
                                    <div className="blog-details-date mb-10">
                                        <ul>
                                            <li><a href="/#"><i className="far fa-user"></i>Admin</a></li>
                                            <li><i className="far fa-clock"></i> { singlePost.date } </li>
                                        </ul>
                                    </div>
                                    <h2>{ singlePost.title }</h2>
                                    <p>
                                        { singlePost.description }
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SingleBlog)
