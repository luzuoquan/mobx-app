import * as React from 'react'
import * as ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <h1>Hello React</h1>
    )
  }
}

const render = Component: any => {
	ReactDOM.render(
		<Component />,
		document.querySelector('#app')
	)	
}
render(App)

if (module.hot) {
  module.hot.accept()
}