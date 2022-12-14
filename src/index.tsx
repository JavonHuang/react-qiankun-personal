import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './index.css';
import App from "./app";

function render(props:any) {
  const { mainRouterPath='',errorRouter='' } = props;
  ReactDOM.render(
    <App mainRouterPath={mainRouterPath} errorRouter={ errorRouter}>
    </App>,
    document.getElementById('root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react17] react app bootstraped');
}

export async function mount(props:any) {
  console.log('[react17] props from main framework', props);
  render(props);
}

export async function unmount(props:any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
