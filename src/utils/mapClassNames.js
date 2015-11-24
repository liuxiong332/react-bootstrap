
// styles is the class name map, classNames is the original class names,
// This function will map the classNames to the destination class names by styles
export default function mapClassNames(styles, classNames) {
  let mapObj = {};
  classNames.keys(classNames).forEach(key => {
    mapObj[styles[key]] = classNames[key];
  });
  return mapObj;
}
