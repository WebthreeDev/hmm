import React from 'react';

class SocialLinks extends React.Component {
    render() {
        return (
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://instagram.com/katanainu"><i className="fab fa-instagram" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/Katanainu-104918325117822"><i className="fab fa-facebook" /></a></li>
                {/* <li><a target="_blank" rel="noreferrer" href="/#"><i className="fab fa-telegram" /></a></li> */}
                <li><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@katanainu"><i className="fab fa-tiktok" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://medium.com/@katanainu/katana-inu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79"><i className="fab fa-medium" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://twitter.com/katanainu"><i className="fab fa-twitter" /></a></li>
                {/* <li><a target="_blank" rel="noreferrer" href="/#"><i className="fab fa-youtube" /></a></li> */}
                <li><a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/katanainu"><i className="fab fa-reddit" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.discord.gg/katanainu"><i className="fab fa-discord"/></a></li>
            </ul>
        )
    }
}

export default SocialLinks
