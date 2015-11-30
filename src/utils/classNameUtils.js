import warning from 'warning';
import styleManager from './styleManager';

// styles is the class name map, classNames is the original class names,
// This function will map the classNames to the destination class names by styles
function _mapClassNames(styles, classNames) {
  let mapObj = {};
  Object.keys(classNames).forEach(key => {
    if(key in styles) {
      mapObj[styles[key]] = classNames[key];
    }
    warning(key in styles, `the key ${key} is not in classNames`);
  });
  return mapObj;
}

export function mapClassNames(classNames) {
  return _mapClassNames(styleManager.getStyles(), classNames);
}
