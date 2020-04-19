import React, { Component } from 'react';

import Tweeter from '../../assets/Tweeter.png'
import like from '../../assets/like.png';
import share from '../../assets/share.png';

import twitterJson from '../../twitter.json';

import styles from './Feeds.module.css';

class Feeds extends Component{

    state = {
        tweets:[]
    }

    componentDidMount(){

        // const init = {
        //     headers: {
        //         'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAIFnDgEAAAAAB1MMFdRvfGYgxazISPMavzUxFxs%3Du2qVlil6PsL9wbVFj8JSbgfNJoMGBbWguIarM8JaPqLRgvcWAW'
        //     }
        // };

        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        //const url = 'https://api.twitter.com/1.1/tweets/search/30day/prod.json?query=covid-19 from:WHO&maxResults=10';
        //fetch(proxyurl + url, init)
            //.then(response=> response.json())
            //.then(res => {
                const tweetData = [];
                for(let i in twitterJson){
                    tweetData.push({
                        name: twitterJson[i].user.name,
                        handle: twitterJson[i].user.screen_name,
                        text: twitterJson[i].text,
                        profilePic: twitterJson[i].user.profile_image_url,
                        likes: twitterJson[i].favorite_count,
                        retweets: twitterJson[i].retweet_count,
                        date: twitterJson[i].created_at.slice(4,10)
                    });
                }
                this.setState({tweets: tweetData});
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
                    
                    <div className={styles.TweetData}>
                        <p>
                            <img src={like} alt="likes" /><span style={{color:'#F52D5C'}}>{tweet.likes} </span>
                            <img src={share} alt="re-tweets" /><span style={{color:'#54B5F5'}}>{tweet.retweets} </span>
                        </p>
                    
                        <p>{tweet.date} </p>
                    </div>
                    
                </div>
            );
        })

        return(
            <div className={styles.Feeds}>
                <h4>Latest Tweets</h4>
                <img src={Tweeter} alt="tweeter-icon" />
                {tweet}
            </div>
        );
    }
    
}

export default Feeds;