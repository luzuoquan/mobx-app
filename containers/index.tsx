import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DevTools from 'mobx-react-devtools'
import { observer, inject } from 'mobx-react'

export interface HomeProp {
  homeStore: any
}

@inject('homeStore')
@observer
export default class Home extends React.Component<HomeProp> {
  componentWillReact() {
    console.warn(`开始更新`)
  }
  componentDidMount() {
    const { homeStore } = this.props
    homeStore.fetchUsers()
  }
  render() {
    const { homeStore } = this.props
    return (
      <div>
        <h1>{homeStore.userList.length}Hello React TypeScript</h1>
        <DevTools />
      </div>
    )
  }
}