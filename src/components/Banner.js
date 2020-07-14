import React, { Component } from 'react';
import './banner.css'

const base_Url = 'https://api.themoviedb.org/3';
const imageBase_url = 'https://image.tmdb.org/t/p/original';
class Banner extends Component {
    state={
        bannerImage:''
    }
    componentDidMount(){
        fetch(`${base_Url}${this.props.request}`)
        .then(resp=>resp.json())
        .then(response=>{
            this.setState({
                
                bannerImage:response.results[Math.floor(Math.random()*response.results.length)]
            },()=>{
                console.log('b',this.state.bannerImage)
            })
        })
    }
    render() {
        return (
            <div>
                <header className="banner" style={{backgroundImage:`url(${imageBase_url}${this.state.bannerImage.backdrop_path})`,backgroundSize:'cover',backgroundPosition:'center center'}}>
                    <div className="info-div">
                        <h1 className="title">{this.state.bannerImage.original_name || this.state.bannerImage.name}</h1>
                        <div className='buttons-div'>
                            <button className="buttons">Play</button>
                            <button className="buttons">My list</button>
                        </div>
                        <div className='movie-overview'>
                            <p>{this.state.bannerImage.overview?this.state.bannerImage.overview.length>150?this.state.bannerImage.overview.slice(0,150)+'...':this.state.bannerImage.overview:''}</p>
                        </div>

                    </div>
                    <div className="fade-bottom"></div>
                </header>
            </div>
        );
    }
}

export default Banner;