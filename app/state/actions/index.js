import axios from 'axios'

//action types

export const GET_ARTICLE = 'GET_ARTICLE';
export const GET_ARTICLE_FAIL = 'GET_ARTICLE_FAIL';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const ARTICLE_LOADING = 'ARTICLE_LOADING';


export function getArticleSuccess(articleData){
  return {
    type: GET_ARTICLE_SUCCESS,
    articleData: articleData
  }
}

export function getArticleFail(bool){
  return {
    type: GET_ARTICLE_FAIL,
    hasErrored: bool
  }
}

export function articleLoading(bool){
  return {
    type: ARTICLE_LOADING,
    isLoading: bool
  }
}

export function getArticle(title='Tron'){
  return (dispatch) => {
    console.log('stuff happening')
    dispatch(articleLoading(true));
    axios.get(`/article/${title}`)
      .then(response => {
        console.log('response: ', JSON.stringify(response))
        dispatch(getArticleSuccess(response.data.data))
      })
      .catch(err => {
        console.log('ERROR: ',error)
        dispatch(getArticleFail(true))
      })
  }
}


