import React, { useState } from 'react'

const networksImages = [{
    image: "/img/wathsapp.svg",
    imageWhite: "/img/wathsapp-white.svg",
    name: "wathsapp",
    alt: "wathsapp",
    isButton: true
},{
    image: "/img/instagram.svg",
    imageWhite: "/img/instagram-white.svg",
    name: "instagram",
    alt: "instagram",
},{
    image: "/img/youtube.svg",
    imageWhite: "/img/youtube-white.svg",
    name: "youtube",
    alt: "youtube web",
},{
    image: "/img/facebook.svg",
    imageWhite: "/img/facebook-white.svg",
    name: "facebook",
    alt: "facebook",
}];

const SocialNetworks = ({
    networks,
    isSimple
}) => {
    const [ws, setWs] = useState(null);

    const _networks = networksImages.map(n => ({
        ...n,
        image: isSimple ? n.image : n.imageWhite,
        url: networks[n.name]
    }))

    return (
        <div 
            id="social-networks"
            className="d-flex align-items-center">
            {
                _networks && _networks.map((item, index) => (
                    <>
                        {
                            item.isButton ? (
                                <>
                                    {/* <img
                                        className="img-fluid"
                                        src={item.image} 
                                        alt={item.alt}
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        onClick={() => setWs(item.url)} />
                                    </> */}
                                    <a 
                                    key={`network${index}`}
                                    target="_blank" 
                                    href={item.url}
                                    className="mx-auto ml-md-0 mr-md-4">
                                    <img
                                        className="img-fluid"
                                        src={item.image} 
                                        alt={item.alt} />
                                </a>
                                </>
                            ) : (
                                <a 
                                    key={`network${index}`}
                                    target="_blank" 
                                    href={item.url}
                                    className="mx-auto ml-md-0 mr-md-4">
                                    <img
                                        className="img-fluid"
                                        src={item.image} 
                                        alt={item.alt} />
                                </a>
                            )
                        }
                    </>
                    
                ))
            }
            {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Wathsapp</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {ws}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

SocialNetworks.defaultProps = {
    isSimple: true
}

export default SocialNetworks;