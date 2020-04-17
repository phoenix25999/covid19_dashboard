import React, { Component } from 'react';
import fever from '../../assets/fever.png';
import styles from './Feeds.module.css';

class Feeds extends Component{

    state = {
        tweets:[]
    }

    componentDidMount(){

        

        const myInit = {
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAIFnDgEAAAAAB1MMFdRvfGYgxazISPMavzUxFxs%3Du2qVlil6PsL9wbVFj8JSbgfNJoMGBbWguIarM8JaPqLRgvcWAW'
            },
            mode: 'cors'
        };

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://api.twitter.com/1.1/tweets/search/30day/prod.json?query=from:WHO+OR+PMOIndia';
        fetch(proxyurl + url, myInit)
            .then(response=> response.json())
            .then(res => {
                const tweetData = [];
                //console.log(res.results);
                for(let i in res.results){
                    tweetData.push({
                        name: res.results[i].user.name,
                        handle: res.results[i].user.screen_name,
                        text: res.results[i].text,
                        profilePic: res.results[i].user.profile_image_url
                    });
                }
                this.setState({tweets: tweetData});
                console.log(this.state)
            });
    }

    render(){
        
        let tweet = this.state.tweets.map(tweet=> {
            return(
                <div>
                    <div className={styles.Head}>
                        <img src={tweet.profilePic} alt="pic" />
                        <div>
                            <h5>{tweet.name} </h5>
                            <span>{'@' + tweet.handle} </span>
                        </div>
                    </div>
                    <p>{tweet.text} </p>
                </div>
            );
        })

        return(
            <div className={styles.Feeds}>
                <h4>Latest Tweets</h4>
                {tweet}
            </div>
        );
    }
    
}

export default Feeds;