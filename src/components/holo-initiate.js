/** @format */
//@ts-check

import holoCreateElement from './holo-create-element'

//holo Locate all holo carousel structures ByClassName
/**
 * @param{string} carouselName get all carousels by this class name
 */
const holoInitiate = carouselName => {
  const carousels = document.getElementsByClassName(carouselName)
  if (carousels.length) {
    for (let slide of carousels) {
      //for each carousel found
      holoCreateElement(slide, {})
    }
  } else {
    return console.log('@Holo : carousel structure not found')
  }
}
export default holoInitiate
