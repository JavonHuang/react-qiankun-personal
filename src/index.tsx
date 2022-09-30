import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import 'antd/dist/antd.min.css';
import './index.css';
import {Router} from './routes/index'
ReactDOM.render(
  <HashRouter>
    <Router/>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
