import template from './templates.js'
import styles from './styles.js'
import data from './data.js'

export default class App {

  /**
   * @param {Object}  dom reference to document
   */
  constructor(dom, anchor) {
    // generate template
    let html = ''
    // TODO ...
    if (dom && anchor && dom.querySelector(anchor)) {
      // define pointers to DOM elements
      const STUDENT_CARD = dom.querySelector('info__container--student');
      const LIST_CARD = dom.querySelector('info__container--list');
      // register event lister
      // TODO
      // append widget
      dom.querySelector(anchor).insertAdjacentHTML('beforeend', html)
    } else {
      console.warn('Missing parameters or anchor not found')
    }
  }

  /**
   * Show the details of selected university
   * either student view or list of students
   *
   * @param {Number}  index
   * @return {void}
   */
  exploreUni(index) {
    if (index >= 0 && index < data.length) {
      let view, template;
      // switch according to students number
      if (data[index].students.length === 1) {
        // pick the first and only student
        let student = data[index].students[0];
        // set the view
        view = STUDENT_CARD;
        // prepare the template
        template = template.studentBox(student)
      } else {
        // set the view
        view = LIST_CARD;
        // prepare the template
        template = `
          <!-- TODO -->
        `
      }
      // empty view
      view.innerHTML = ''
      // append template to view
      view.insertAdjacentHTML('beforeend', template);
    }
  }

  // /**
  //  * Render makers on the map
  //  *
  //  * @param {Array}   data
  //  * @return {void}
  //  */
  // renderUnis(data) {
  //   let i, uni;
  //   for (i = 0; i < data.length; i++) {
  //     uni = data[i];
  //     // NOTE this logic should be moved where the all template is rendered
  //   }
  // }

  /**
   * @return {String}
   */
  get styles () {
    return styles
  }

}
