import { helper } from '@ember/component/helper';

export function bookmarkHelper([title, about]) {
  let returnStr = title;
  if (about != null) {
    returnStr += ' - ' + about;
  }
  return returnStr;
}

export default helper(bookmarkHelper);
