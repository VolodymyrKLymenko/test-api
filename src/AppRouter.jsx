import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import App from './App';
import FormExample from './components/user-form/form-example';
import ArticleList from './components/article/article-list';

const AppRouter = (props) => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/form/">Form example</Link>
                    </li>
                    <li>
                        <Link to="/articles/">Articles</Link>
                    </li>
                </ul>
            </nav>
            {props.children}
            
            <Route path="/" exact component={App} />
            <Route path="/form/" exact component={FormExample} />
            <Route path="/articles/" exact component={ArticleList} />
        </div>
    </Router>
)

export default AppRouter
