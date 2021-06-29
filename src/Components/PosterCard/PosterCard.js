import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { FETCH_LATEST } from '../../Redux/actions';
import './PosterCard.css';

export const PosterCard = (props) => {

    useEffect(() => {
        props.fetchLatest();
    }, []);

    const baseURL= "https://www.themoviedb.org/t/p/w220_and_h330_face";



    return (
        <div style={{display:"flex",
            margin: "0px",
            padding: "30px 60px"}}>
            {props.latest &&
            props.latest.map((data,index) =>(
                <Paper className="movie-card" key={index} elevation={3}>
                    <img src={baseURL + data.poster_path}
                        alt={baseURL.title}
                    />
                </Paper>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        latest: state.HomePageReducer.trend,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchLatest: () => {
          dispatch({ type: FETCH_LATEST });
        },
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(PosterCard)
