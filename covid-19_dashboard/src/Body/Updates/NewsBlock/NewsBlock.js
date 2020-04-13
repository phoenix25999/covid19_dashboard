import React from 'react';

import styles from './NewsBlock.module.css';

const newsBlock = (props) => {
    
    return(
        <div className={styles.NewsBlock}>
            <div>
                
                <img src={props.articles.image_src} alt="icon" />
                <h5>Source:</h5>
                <p>{props.articles.source}</p>
            </div>
            <div>
                <h6>{props.articles.title}</h6>
                <p>{props.articles.desc}</p> 
            </div>
        </div>
    );
}

export default newsBlock;
