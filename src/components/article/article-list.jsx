import React, { Component } from 'react'; 
import Article from './article';

const Articles = [
    {
      id: 1,
      author: "Me",
      title: "Title"
    },
    {
      id: 2,
      author: "You",
      title: "News"
    },
    {
      id: 3,
      author: "We",
      title: "Forecast"
    }
  ];


class ArticleList extends Component {
    constructor(props) {
      super(props);
      this.state = {date: Articles};
    }
  
    handleSearch(event) {
      let searchQuery = event.target.value.toLowerCase();
      let filteredArticles = Articles.filter(a => {
        return a.title.toLowerCase().indexOf(searchQuery) !== -1;
      })
  
      this.setState({
        date: filteredArticles
      })
    }
  
    render() {
      return (
        <div className="article-list">
          <input type="text" className="serachInput" onChange={(e) => this.handleSearch(e)} />
          <ul>
            {
              this.state.date.map((a) =>
                <Article key={a.id} author={a.author} title={a.title} />
              )
            }
          </ul>
        </div>
      );
    }  
}

export default ArticleList