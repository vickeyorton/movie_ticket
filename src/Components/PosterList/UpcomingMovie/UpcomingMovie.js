import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { FETCH_TOPRATED } from '../../../Redux/actions';
import '../PosterMovie.css';
import PosterCard1 from '../../PosterCard/PosterCard1';

function UpcomingMovie(props) {
    useEffect(() => {
        props.fetchUpcoming();
    }, []);

    return (
        <div className="posterMovie-section">
            <p className="posterMovie-title">Upcoming Movies</p>
            <PosterCard1 list={props.upcoming}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        upcoming: state.HomePageReducer.upcoming,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchUpcoming: () => {
          dispatch({ type: FETCH_TOPRATED });
        },
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(UpcomingMovie)
