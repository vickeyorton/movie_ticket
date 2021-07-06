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

function *fetchLatest(){
    let result = yield axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_LATEST",
        payload: result
    })
}

function *fetchUpcoming(){
    let result = yield axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_TOPRATED",
        payload: result
    })
}

function *fetchRecommend(){
    let result = yield axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_POPULAR",
        payload: result
    })
}

function *fetchAction(){
    let result = yield axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&lwith_gernres=28`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_ACTION",
        payload: result
    })
}

function *fetchKids(){
    let result = yield axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&lwith_gernres=35`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_KIDS",
        payload: result
    })
}

function *fetchHorror(){
    let result = yield axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&lwith_gernres=27`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_HORROR",
        payload: result
    })
}

function *fetchFiction(){
    let result = yield axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&lwith_gernres=878`)
                .then(res=>res.data.results)
    yield put({
        type:"GET_FICTION",
        payload: result
    })
}

// function *fetchSearch(){
//     let result = yield axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d25c184a3ec367335bb5e676d0280fcf&language=en-US&query=war&page=1&include_adult=false`)
// }

function *renderWatcher(){
    yield takeLatest('FETCH_TRENDING',fetchCarousel);
    yield takeLatest('FETCH_LATEST',fetchLatest);
    yield takeLatest('FETCH_TOPRATED',fetchUpcoming);
    yield takeLatest('FETCH_POPULAR',fetchRecommend);
    yield takeLatest('FETCH_ACTION',fetchAction);
    yield takeLatest('FETCH_KIDS',fetchKids);
    yield takeLatest('FETCH_HORROR',fetchHorror);
    yield takeLatest('FETCH_FICTION',fetchFiction);
}

export default function *rootSaga(){
    yield all([
        renderWatcher(),
    ])
}