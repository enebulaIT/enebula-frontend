import React, { useState } from 'react'; 
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import portfolioData from '../../../portfolioData';

const Portfolio = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(props.fetchDataFor['0']);
    const [hovereditem, setHoveredItem] = useState(null);

    const openLightbox = (id) => {
		setIsOpen(true);
		setActiveIndex(id);
	}
		
	const closeLightbox = () => {
		setIsOpen(false);
    } 

    const handleMouseEnter = (id) => {
        setHoveredItem(id);
    }
    
    let lightbox = null;
	if(isOpen) {
		lightbox = (
			<ReactImageVideoLightbox 
				data = {portfolioData[props.componentFor][activeTab].data}
				startIndex={activeIndex}
				showResourceCount={true}
                onCloseCallback={closeLightbox}
                className = "tester"
			/>
		);
	} 

	let thumbSource = [];
    thumbSource = portfolioData[props.componentFor][activeTab].data.map(item => {
        return {
            id: item.id,
            image: item.thumb,
            title: item.title,
            type: item.type,
            mimetype: item.mimeType ? item.mimeType : 'unknown' 
        }
    }); 

    let portfolioTabs = null;
    portfolioTabs = props.fetchDataFor.map(item => {
        return (
            <li className = {activeTab === item ? 'active' : '' }>
                <button 
                    onClick = {() => setActiveTab(item)}
                    className="gallery__filter--list-link">{portfolioData[props.componentFor][item].title}</button>
            </li>
        );
    }); 

    if(isOpen) {
        document.body.classList.add("no-sroll")
    } else {
        document.body.classList.remove("no-sroll")
    }
 
    return (
        <section className="section pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="section__heading section__heading-center">Our Work</h2>
                    </div>
                </div>

                <div className="gallery__filter">
                    <ul className="gallery__filter--list">
                        {
                            portfolioTabs
                        }
                    </ul>
                </div>
                
                <div className = {`gallery__content ${thumbSource[0].mimetype}-type`}>
                    <div className="row">
                        {
                            thumbSource.map((item, key) => {
                                return ( 
                                    <div 
                                        className="col-lg-4" 
                                        onMouseLeave = {() => handleMouseEnter(null)} 
                                        onMouseEnter = {() => handleMouseEnter(item.id)}>
                                        <div className="gallery__item">
                                            <div
                                                onClick = {() => {openLightbox(key)}} 
                                                className="gallery__item--image js-item-image js-zoom-image">

                                                <div className="gallery__item--image--background js-image-background" 
                                                    style={{backgroundImage: `url(${item.image})`}}>
                                                </div>

                                                <div className={`gallery__item--image--overlay ${hovereditem === item.id ? 'show' : ''}`}>
                                                    <i className={`fa ${item.type === 'video' ? 'fa-play' : 'fa-search'}`}></i>
                                                </div>
                                            </div>  

                                            <div className={`gallery__item--desc`}>
                                                <h4 className="gallery__item--desc--title">{item.title}</h4> 
                                            </div> 

                                        </div>
                                    </div> 
                                );
                            })
                        }  	 

                    </div>
                </div>

            </div>
            <div className = {`custom-lightbox ${thumbSource[0].mimetype}-type`}> 
                {lightbox}
            </div>
        </section>
    );
}

export default Portfolio;