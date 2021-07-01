import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { FETCH_ACTION } from '../../../Redux/actions';
import '../PosterMovie.css';
import PosterCard1 from '../../PosterCard/PosterCard1';

function ActionMovie(props) {
    useEffect(() => {
        props.fetchAction();
    }, []);

    return (
        <div className="posterMovie-section">
            <p className="posterMovie-title">Action Movies</p>
            <PosterCard1 list={props.action}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        action: state.HomePageReducer.action,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchAction: () => {
          dispatch({ type: FETCH_ACTION });
        },
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(ActionMovie)
