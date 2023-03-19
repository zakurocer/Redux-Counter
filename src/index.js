import ReactDOM from 'react-dom/client';
import App from './store/App'

import store from './store/redux';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
            <Provider store={store}> {/* is a way to listent to any updates in store*/}
                <App/>
            </Provider>
        </>
);

