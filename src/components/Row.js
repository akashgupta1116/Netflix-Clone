import React, { Component } from 'react';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseUrl = 'https://api.themoviedb.org/3';
const imageBase_url = 'https://image.tmdb.org/t/p/original';
class Row extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            movies :[],
            trailerPath:''
        }
    }

    componentDidMount(){
        fetch(`${baseUrl}${this.props.request}`)
        .then(resp=>resp.json())
        .then(response=>{
            console.log(response.results)
            this.setState({
                movies:response.results
            },()=>{
                console.log("m",this.state.movies)
            })
        })   
    }

    handleMovieTrailer=(movieName)=>{

        console.log('titleName',movieName)
        
        
            movieTrailer( movieName || '' )
            .then((resp)=> {
                console.log('response traile',resp)
                const urlParams = new URLSearchParams(new URL(resp).search);
                console.log('urlParams',urlParams)
                // debugger;
                this.setState({
                    trailerPath:urlParams.get('v')
                },()=>{
                    console.log('trailerPath',this.state.trailerPath)
                })
            }).catch( console.error )
            
        
    }

    render() {
        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        return (
            <div>
                <h2 className='netflix-headings'>{this.props.title}</h2>
                <div className="image-row">
                    {this.state.movies?this.state.movies.map(item=>{
                        if(item.backdrop_path){
                            return <div className="img-card" onClick={()=>this.handleMovieTrailer(item.name || item.title)}>
                                    <img className={this.props.largeImages?"large-image":"image"} src={`${imageBase_url}${this.props.largeImages?item.poster_path:item.backdrop_path}`} alt ={item.original_name} />
                                    <p className="overlay">{item.name || item.title }</p>
                                </div>
                        }
                        else{
                            return null;
                        }
                    }):null}

                </div>
                <div>
                {this.state.trailerPath?<YouTube videoId={this.state.trailerPath} opts={opts}/>:null}
                </div>
            </div>
        );
    }
}

export default Row;