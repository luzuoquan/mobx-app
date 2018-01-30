import { observable, action } from "mobx"

export default class Home {
  @observable userList

  constructor() {
    this.userList = []
  }
}