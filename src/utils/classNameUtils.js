import warning from 'warning';
// styles is the class name map, classNames is the original class names,
// This function will map the classNames to the destination class names by styles
export function mapClassNames(styles, classNames) {
  let mapObj = {};
  if(typeof classNames !== 'object') return classNames;
  Object.keys(classNames).forEach(key => {
    if(key in styles) {
      mapObj[styles[key]] = classNames[key];
    }
    warning(key in styles, `the key ${key} is not in classNames`);
  });
  return mapObj;
}
