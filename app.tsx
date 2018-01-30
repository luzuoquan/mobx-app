import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers'

const render = (Component: any) => {
	ReactDOM.render(
		<Component />,
		document.querySelector('#app')
	)
}
render(App)

if (module.hot) {
  module.hot.accept()
}