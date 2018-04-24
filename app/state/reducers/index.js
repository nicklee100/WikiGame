import {
  GET_ARTICLE,
  GET_ARTICLE_FAIL,
  GET_ARTICLE_SUCCESS,
  ARTICLE_LOADING
} from '../actions/index.js'

const initialState = {
  articleLoading: false,
  getArticleFail: false,
  getArticleSuccess: ''
}
export function articleLoading(state = false, action) {
  switch(action.type) {
    case ARTICLE_LOADING:
      return action.isLoading
    default:
      return state;
  }
}

export function updateArticle(state = initialState, action) {
  switch(action.type) {
    case ARTICLE_LOADING:
      return Object.assign({}, state, {
        articleLoading: action.isLoading
      })
    case GET_ARTICLE_FAIL:
      return Object.assign({}, state, {
        getArticleFail: action.hasErrored
      })
    case GET_ARTICLE_SUCCESS: {
      return Object.assign({}, state, {
        getArticleSuccess: action.articleData
      })
    }
    default:
      return state;
  }
}

