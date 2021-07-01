import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { FETCH_FICTION } from '../../../Redux/actions';
import '../PosterMovie.css';
import PosterCard1 from '../../PosterCard/PosterCard1';

function FictionMovie(props) {
    useEffect(() => {
        props.fetchFiction();
    }, []);

    return (
        <div className="posterMovie-section">
            <p className="posterMovie-title">Fiction Movies</p>
            <PosterCard1 list={props.fiction}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        fiction: state.HomePageReducer.fiction,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchFiction: () => {
          dispatch({ type: FETCH_FICTION });
        },
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(FictionMovie)
