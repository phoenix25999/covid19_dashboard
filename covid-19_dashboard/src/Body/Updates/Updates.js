import React, {Component} from 'react';
import{CarouselProvider, Slider, Slide, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import NewsBlock from './NewsBlock/NewsBlock';

import styles from './Updates.module.css';

class Updates extends Component{

    state = {
        articles: []
    }

    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?q=COVID&from=2020-04-10&sortBy=publishedAt&apiKey=59d820ab09d94ab295dd95bdfee6f56b&pageSize=10')
            .then(response => response.json())
            .then(res=> {
                const articleList = [];
                for(let i in res.articles){
                    articleList.push({
                        source: res.articles[i].source.name,
                        title: res.articles[i].title,
                        desc: res.articles[i].description,
                        image_src: res.articles[i].urlToImage
                    });
                }
                this.setState({articles: articleList});
                console.log(this.state.articles);
            });
    }

    render(){
        let show = null;
        if(this.state.articles){
            show = this.state.articles.slice(0,3).map((item, index)=> {
                return <Slide index={index} key={index}><NewsBlock articles={item}/></Slide>
            });
        }
        console.log(this.state.articles);
        return(
            <div className={styles.Updates}> 
                <div>
                    <p>Spread Trends</p>
                </div>

                <div>
                    <h4>NEWS</h4>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3} >
                    <Slider >
                        {show}
                    </Slider>
                    <div>
                        <Dot slide={0}  className={styles.Dot}/>
                        <Dot slide={1} className={styles.Dot}/>
                        <Dot slide={2} className={styles.Dot}/>
                    </div>
                </CarouselProvider>
                </div>
            </div>
        );
    }
}

export default Updates;