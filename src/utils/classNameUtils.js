import warning from 'warning';
// styles is the class name map, classNames is the original class names,
// This function will map the classNames to the destination class names by styles
export function mapClassNames(styles={}, defaultStyles, classNames) {
  let mapObj = {};
  Object.keys(classNames).forEach(key => {
    if(key in styles) {
      mapObj[styles[key]] = classNames[key];
    } else if(key in defaultStyles) {
      mapObj[defaultStyles[key]] = classNames[key];
    }
    warning(key in styles || key in defaultStyles, `the key ${key} is not in classNames`);
  });
  return mapObj;
}
