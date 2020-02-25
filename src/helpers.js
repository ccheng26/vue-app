export function titleCase(string) {
  //src:https://stackoverflow.com/questions/27440917/change-any-type-of-string-to-title-case-in-javascript
  return string
    .replace(/([^A-Z])([A-Z])/g, '$1 $2')
    .replace(/[_\-]+/g, ' ')
    .toLowerCase()
    .replace(/(^\w|\b\w)/g, (m) => m.toUpperCase())
    .replace(/\s+/g, ' ')
    .replace(/^\s+|\s+$/, '');
}

export function sortByObjKey(arr, keyName, formatter, useLocaleCompare = false) {
  const formatVar = (val) => formatter ? formatter(val[keyName]) : val[keyName] + ''
  return arr.sort((a, b) => useLocaleCompare ? ((formatVar(a)).localeCompare(formatVar(b))) : (formatVar(a) - formatVar(b)))
}
export function findArrObjByKeyVal(arr, key, value) {
  return arr.find(obj => obj[key] === value)
}

export function formatUrlArr(arr, searchArr, findKey = 'name') {
  return arr.length ?
    arr.map(url => {
      let foundObj = findArrObjByKeyVal(searchArr, "url", url);
      return foundObj ? foundObj[findKey] : "";
    }).join(" , ")
    : "None";
}
