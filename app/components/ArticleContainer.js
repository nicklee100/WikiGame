import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Parser from 'html-react-parser'
import {getArticle} from '../state/actions/index.js'
import { connect } from 'react-redux'


var createReactClass = require('create-react-class');

class ArticleContainer extends React.Component {
  constructor(props ){
    super(props)
    this.state = {
    }
    this.myRef = React.createRef();
  }

  componentDidMount() {
    document.querySelectorAll("a[href^='/']").forEach(node => {
      node.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target.href);
        this.props.getTheArticle()
         console.log('getArticle:', this.props.getTheArticle)

        //this.props.history.push(e.target.href);
      });
    })
  }

  anchorLinkListener (e) {
    if(e.target.tagName === 'a') {
       console.log('Anchor link clicked')
       console.log('getArticle:', getArticle)
       e.preventDefault();
    }
  }

  createMarkUp(rawHtml){
    return {__html: rawHtml};
  }

  MyComponent(rawHtml) {
    return (
      <div>
      <button> <Link to="/wiki/Steven_Lisberger"> click this </Link></button>
       <div dangerouslySetInnerHTML={this.createMarkUp(rawHtml)} />

      </div>
    )
  }

  render(){
    console.log(this.props)

    let html = this.props.article;
    if(this.props.article) {
      console.log(true);
      return (
        <div ref={(ref) => {this.myRef = ref}} style={{'backgroundColor': 'pink', 'width':'75%'}}>
          {this.MyComponent(this.props.article)}
        </div>
      )
    } else {
      console.log(false)
      return (

          // <TableComponent ref={this.myRef}/>
        <div className="Article-Container">
          <p>The <b>Porsche 91</b> (pronounced <i>Nine Eleven</i> or in <a href="/wiki/German_language" title="German language">German</a>: <i><span lang="de" xmlLang="de">Neunelfer</span></i>) is a two-door, <a href="/wiki/2%2B2_(car_body_style)" title="2+2 (car body style)">2+2</a> high performance <a href="/wiki/Rear-engine_design" title="Rear-engine design">rear-engined</a> classic German <a href="/wiki/Sports_car" title="Sports car">sports car</a> made since 1963<sup id="cite_ref-NYT_1-0" className="reference"><a href="#cite_note-NYT-1">[1]</a></sup> by <a href="/wiki/Porsche" title="Porsche">Porsche</a> <a href="/wiki/Aktiengesellschaft" title="Aktiengesellschaft">AG</a> of <a href="/wiki/Stuttgart" title="Stuttgart">Stuttgart</a>, Germany. It has a <a href="/wiki/Rear-engine_design" title="Rear-engine design">rear-mounted</a> <a href="/wiki/Flat-six_engine" title="Flat-six engine">six cylinder boxer engine</a> and all round <a href="/wiki/Independent_suspension" title="Independent suspension">independent suspension</a>. It has undergone continuous development, though the basic concept has remained little changed.<sup id="cite_ref-Twelve_2-0" className="reference"><a href="#cite_note-Twelve-2">[2]</a></sup> The engines were <a href="/wiki/Air-cooled_engine" title="Air-cooled engine">air-cooled</a> until the introduction of the <a href="/wiki/Porsche_996" title="Porsche 996">Type 996</a> in 1998, with Porsche's "993" series, produced in model years 1994–1998, being the last of the air-cooled Porsches.<sup id="cite_ref-3" className="reference"><a href="#cite_note-3">[3]</a></sup><sup id="cite_ref-4" className="reference"><a href="#cite_note-4">[4]</a></sup></p><p>The 911 has been modified by private teams and by the factory itself for <a href="/wiki/Auto_racing" title="Auto racing">racing</a>, <a href="/wiki/Rally_racing" className="mw-redirect" title="Rally racing">rallying</a>, and other forms of automotive competition. It is among the most successful competition cars. In the mid-1970s, <a href="/wiki/Naturally_aspirated_engine" title="Naturally aspirated engine">naturally aspirated</a> 911 Carrera RSRs won major world championship sports car races, such as <a href="/wiki/Targa_Florio" title="Targa Florio">Targa Florio</a> and <a href="/wiki/24_Hours_of_Daytona" title="24 Hours of Daytona">24 Hours of Daytona</a>, even against prototypes. The 911-derived <a href="/wiki/Porsche_935" title="Porsche 935">935 turbo</a> also won the <a href="/wiki/24_Hours_of_Le_Mans" title="24 Hours of Le Mans">24 Hours of Le Mans</a> in 1979 and Porsche won <a href="/wiki/World_Sportscar_Championship" title="World Sportscar Championship">World Championship for Makes</a> titles in 1976, 1977, 1978 and 1979 with 911-derived models.</p><p>In the 1999 international poll to determine the <a href="/wiki/Car_of_the_Century" title="Car of the Century">Car of the Century</a>, the 911 came fifth.<sup id="cite_ref-5" className="reference"><a href="#cite_note-5">[5]</a></sup> It is one of two in the top five that had remained continuously in production (the original Beetle remained in production until 2003),<sup id="cite_ref-6" className="reference"><a href="#cite_note-6">[6]</a></sup> and was until 1998 a successful surviving application of the air- (now <a href="/wiki/Water_cooling#Automotive_usage" title="Water cooling">water-</a>) cooled opposed rear-engine layout pioneered by its ancestor, the Porsche 356. It is one of the oldest sports coupé nameplates still in production with one million manufactured as of May 2017.<sup id="cite_ref-7" className="reference"><a href="#cite_note-7">[7]</a></sup></p><p>
          </p>
        </div>
      )
     }
  }
};
const mapStateToProps = function(state){   //not sure this is normal
  console.log("STATE:",state)
  return {
    article: state.updateArticle.getArticleSuccess,
    articleLoading: state.updateArticle.articleLoading,
    getArticleFail: state.updateArticle.getArticleFail,

  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getTheArticle: () => dispatch(getArticle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer)
//export default ArticleContainer;
