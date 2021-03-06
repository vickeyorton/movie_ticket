import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { FETCH_LATEST } from '../../../Redux/actions';
import '../PosterMovie.css';
import PosterCard1 from '../../PosterCard/PosterCard1';

function LatestMovie(props) {
    useEffect(() => {
        props.fetchLatest();
    }, []);

    return (
        <div className="posterMovie-section">
            <p className="posterMovie-title">Latest Movies</p>
            <PosterCard1 list={props.latest}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(LatestMovie)
