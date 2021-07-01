import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { FETCH_HORROR } from '../../../Redux/actions';
import '../PosterMovie.css';
import PosterCard1 from '../../PosterCard/PosterCard1';

function HorrorMovie(props) {
    useEffect(() => {
        props.fetchHorror();
    }, []);

    return (
        <div className="posterMovie-section">
            <p className="posterMovie-title">Horror Movies</p>
            <PosterCard1 list={props.horror}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        horror: state.HomePageReducer.horror,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchHorror: () => {
          dispatch({ type: FETCH_HORROR });
        },
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(HorrorMovie)
