
// styles is the class name map, classNames is the original class names,
// This function will map the classNames to the destination class names by styles
export default function mapClassNames(styles, classNames) {
  let mapObj = {};
  for(let key in classNames)
    mapObj[styles[key]] = classNames[key];
  return mapObj;
}
