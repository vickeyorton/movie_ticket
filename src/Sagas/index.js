import { all, put, takeLatest} from "@redux-saga/core/effects";
import axios from 'axios';

const api_key='d25c184a3ec367335bb5e676d0280fcf';

function *fetchCarousel(){
    let result = yield axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_TRENDING",
        payload: result
    })
}

function *renderWatcher(){
    yield takeLatest('FETCH_TRENDING',fetchCarousel);
}

export default function *rootSaga(){
    yield all([
        renderWatcher(),
    ])
}