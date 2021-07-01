import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { FETCH_KIDS } from '../../../Redux/actions';
import '../PosterMovie.css';
import PosterCard1 from '../../PosterCard/PosterCard1';

function KidsMovie(props) {
    useEffect(() => {
        props.fetchKids();
    }, []);

    return (
        <div className="posterMovie-section">
            <p className="posterMovie-title">Kids Movies</p>
            <PosterCard1 list={props.kids}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        kids: state.HomePageReducer.kids,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchKids: () => {
          dispatch({ type: FETCH_KIDS });
        },
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(KidsMovie)
