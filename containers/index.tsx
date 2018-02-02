import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DevTools from 'mobx-react-devtools'
import { observer, inject } from 'mobx-react'

export interface HomeProp {
  store: any
}

@inject('store')
@observer
export default class Home extends React.Component<HomeProp> {
  componentDidMount() {
    const { store } = this.props
    store.homeStore.fetchUsers()
    console.info(this)
  }
  render() {
    const { store } = this.props
    return (
      <h1>{store.homeStore.userList.length}Hello React TypeScript</h1>
    )
  }
}