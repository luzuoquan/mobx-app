import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './containers'
import store from './store'


const render = (Component: any) => {
	ReactDOM.render(
		<Provider store={store}>
			<Component />
		</Provider>,
		document.querySelector('#app')
	)
}
render(App)

if (module.hot) {
  module.hot.accept()
}