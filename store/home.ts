import { observable, action, useStrict } from "mobx"
import fetch from 'whatwg-fetch'

useStrict(true)

export default class Home {
  @observable userList: Array<any>

  constructor() {
    this.userList = []
  }

  async fetchUsers() {
    fetch(`http://show.niocn.com/lofter/api/user`, {
      credentials: 'include'
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        }
      })
      .then(json => {
        this.setUser(json)
      })
  }

  @action
  setUser(userArray) {
    this.userList = userArray
  }
}