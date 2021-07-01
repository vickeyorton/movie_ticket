import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { FETCH_POPULAR } from '../../../Redux/actions';
import '../PosterMovie.css';
import PosterCard1 from '../../PosterCard/PosterCard1';

function RecommendedMovie(props) {
    useEffect(() => {
        props.fetchRecommend();
    }, []);

    return (
        <div className="posterMovie-section">
            <p className="posterMovie-title">Recommended Movies</p>
            <PosterCard1 list={props.recommend}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        recommend: state.HomePageReducer.recommend,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchRecommend: () => {
          dispatch({ type: FETCH_POPULAR });
        },
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(RecommendedMovie)
