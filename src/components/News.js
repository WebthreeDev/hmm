import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

class News extends React.Component {

    render() {
        const blogs = [
            { id: 1, title: 'Katana Inu P2E Metaverse Game Announces Exclusive Partnership With Seed Thrift Ventures', description: 'Katana Inu, a play2earn Battle Royale NFT PC Game with an integrated NFT Marketplace announced an exclusive partnership with Seed Thrift Ventures, a platform that incubates early phases of blockchain with capital, support and promotion. Seed Thrift Ventures will act as an investor and backer for the Katana Inu ecosystem. The gaming industry and the crypto industry are two of the fastest-growing sectors on the planet. While the global gaming market is expected to reach a value of USD 314.40 billion by 2026, the global cryptocurrency market is projected to reach $4.94 billion by 2030. Platforms like Katana Inu are pleased to announce their launch in this emerging blockchain-based gaming space, with a goal to transform the face of both sectors.', img: 'assets/img/images/Katanainu.jpg', date:'Dec 20, 2021'},

            { id: 2, title: 'Katana Inu P2E Metaverse Game Announces Exclusive Partnership With Seed Thrift Ventures', description: 'Katana Inu, a play2earn Battle Royale NFT PC Game with an integrated NFT Marketplace announced an exclusive partnership with Seed Thrift Ventures, a platform that incubates early phases of blockchain with capital, support and promotion. Seed Thrift Ventures will act as an investor and backer for the Katana Inu ecosystem.The gaming industry and the crypto industry are two of the fastest-growing sectors on the planet. While the global gaming market is expected to reach a value of USD 314.40 billion by 2026, the global cryptocurrency market is projected to reach $4.94 billion by 2030. Platforms like Katana Inu are pleased to announce their launch in this emerging blockchain-based gaming space, with a goal to transform the face of both sectors. Katana Inu: The Ecosystem Katana Inu is a platform that effectively combines DeFi, NFTs, and high quality graphical gameplay to offer an entertaining and rewarding e', img: 'assets/img/images/crypto.jpg', date:'Dec 20, 2021'}
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

                    <div className='row'>
                        {
                            blogs.map( post => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={post.id}>
                                        <div className="single-blog-post mb-30 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="b-post-thumb">
                                                <a href="blog-details.html"><img src={post.img} alt="img"/></a>
                                            </div>
                                            <div className="blog-content">
                                                <span className='text-dark'>{post.date}</span>
                                                <h3>
                                                    <Link to={"/blog/" + post.id }>{post.title.substring(0, 50)}</Link>
                                                </h3>
                                                <p className='text-dark'>{post.description.substring(0, 100)}</p>
                                                <Link to={"/blog/" + post.id }>Read More <i className="fas fa-plus"></i></Link>
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
