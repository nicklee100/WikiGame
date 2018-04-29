import axios from 'axios';
const fs = require('fs');


const url = 'https://en.wikipedia.org/w/api.php?action=parse&&page=tron&format=json';


// function loadEntirePage(url) {
//   return axios.get(url)
//     .then((data) => {
//       return data.data.parse.text['*']
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }


const  loadEntirePage = async function(url) {

  const result = axios.get(url);
  return result
    .then(data=>data.data.parse.text['*'])
    .catch(data=>{console.log(data)})

}



function removeNewLineChar(html){
  return  html.replace(/(\r\n\t|\n|\r\t)/gm,"");
}

// function that take entire raw html page and returns table html as string
// then needs to go though a html to jsx converter
// assumesing page has table,

function parseTable(str){
  let result = '';
  const table = '<table class="infobox';  //21
  const endTable = '</table>'
  let num;
  let endNum;
  for(let i = 0; i<str.length;i++){
    const subStr = str.slice(i,i+21)
    const endSub = str.slice(i,i+8)
    // console.log(subStr)
    if(subStr === table){ num = i; }
    if(endTable === endSub){
      endNum = i+7
    }
    result = str.slice(num,endNum+1)
    // fs.writeFile('tableParse.js',result)

  }
  return(result)
  return(num+':'+endNum)

}

// function that returns summary html as text
// only works if it has a table of contents and side table, some pages dont...
// needs to then be converted to jsx

function parseSummary(str) {
  const startChar ='</table><p>'
  const endChar='</p><div id="toc"'
  let startPosition;
  let endPosition;
  for(let i = 0; i<str.length;i++) {
    const startStr = str.slice(i,i+11);
    const endStr = str.slice(i,i+17);
    if(startStr === startChar){
      i=i+8;
      startPosition = i;}
    if(endStr === endChar){ endPosition = i}
  }
  const result = str.slice(startPosition,endPosition)
  fs.writeFile('summaryParsed', result)
  return result
}


export {
  loadEntirePage,
  parseTable,
  parseSummary,
}

