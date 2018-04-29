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

export function getArticle(title='porsche_911'){
  return (dispatch) => {
    console.log('stuff happening')
    dispatch(articleLoading(true));
    axios.get(`/article/${title}`)
      .then(response => {
        console.log(response)
        dispatch(getArticleSuccess(response.data))
      })
      .catch(err => {
        console.log('ERROR: ',error)
        dispatch(getArticleFail(true))
      })
  }
}



// const url = 'https://en.wikipedia.org/w/api.php?action=parse&&page=tron&format=json';
// axios.get(url)
//   .then(data => {
//       // console.log(data.data.parse.text['*'])
//       console.log(data.data.parse.images)
//       const image = data.data.parse;
//       const html = data.data.parse.text['*']
//       const someText = html.replace(/(\r\n\t|\n|\r\t)/gm,"");
//       // fs.writeFile('hmltdata.json',someText)
//       // fs.writeFile('data.html', '<html><body>'+someText+'</body</html')
//       // fs.writeFile('otherdata.json',image)
//       // const newHTML = this.insertTag(someText)
//        this.setState({htmlData:someText})
//       // console.log(this.hello())
//   })
