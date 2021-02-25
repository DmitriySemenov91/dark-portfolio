import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="img"/>
                            <ul className="hover-items">
                                <li>
                                    <a target="_blank rel='noopener noreferrer'" href={item.link1}>{item.icon1}</a>
                                    <a target="_blank rel='noopener noreferrer'" href={item.link2}>{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.desc}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
