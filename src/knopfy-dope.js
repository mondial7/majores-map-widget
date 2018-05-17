class KnopfyDope {

  constructor() {
    this._hello = 'Do I know you?'
  }

  /**
   * @return String
   */
  get hello () {
    return this._hello
  }

}

export default new KnopfyDope()
