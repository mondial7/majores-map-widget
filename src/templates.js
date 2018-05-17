const helpers = {

  /**
   * Icons set
   * @param {String}  name
   */
  icons: name => {
    let icon
    switch (name) {
      case facebook:
        icon = ''
        break
      case instagram:
        icon = ''
        break
      case linkedin:
        icon = ''
        break
      default:
        icon = ''
    }
    return icon
  },

}


export default {

  /**
   * NOTE All attributes return {String}
   */

  /**
   * Wrapper div
   * @param {String}  content
   */
  wrapper: (content='') => `<div class="majores-map__wrapper">${content}</div>`,

  /**
   * Map - GoogleMap webcomponent
   * @param {Array}   unis
   * @param {String}  key
   */
  map: (unis=[], key='') => `
    <section class="map__wrapper">
      <!-- TODO google maps integration -->
      <!-- webcomponent -> test cross browser compatibility on integration -->
      <google-map fit-to-markers api-key="${key}">
        ${unis.map(uni => `
          <google-map-marker
            latitude="${uni.latitude}"
            longitude="${uni.longitude}">
            ${uni.popup}
          </google-map-marker>
        `)}
      </google-map>
    </section>
  `,

  /**
   * University popup revealed by clicking on a marker
   * @param {Object}  uni
   * @param {Int}     index
   */
  popup: (uni={}, index=-1) => `
    <div>
      <img src="${uni.logo}" alt="${uni.university}" />
      <span>${uni.description}</span>
      <p onclick="MajoresMapWidget.exploreUni(${index})">Studenti</p>
    </div>
  `,

  /**
   * Student view
   * @param {Object}  student
   */
  studentBox: (student={}) => `
    <img src="${student.image}" alt="${student.name}" />
    <p>${student.name} - ${student.diploma}</p>
    <p>${student.university}</p>
    <p>${student.degree}</p>
    <p>${student.enrollment} - ${student.graduation}</p>
    <p>
    ${student.socials ? student.socials.map(x => `
      <a href="${x.link}" target="_blank">${helpers.icons(x.name)}</a>
    `).join('') : ''}
    </p>
  `,

}
