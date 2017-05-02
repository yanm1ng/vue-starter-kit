export function timeFormat(fmt) {
  var time = new Date();
  var o = {
    "M+": time.getMonth() + 1,
    "d+": time.getDate(),
    "h+": time.getHours(),
    "m+": time.getMinutes(),
    "s+": time.getSeconds(),
    "q+": Math.floor((time.getMonth() + 3) / 3),
    "S": time.getMilliseconds()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

export function compact(array) {
  function f(element) {
    if (element !== false || element !== null || element !== 0 || element !== "" || element !== undefined || element !== NaN) {
      return element;
    }
  }
  var filtered = array.filter(f);
  return filtered;
}