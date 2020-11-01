const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = '';
  if (Array.isArray(members)) {
    let membersStr = members.filter(e => typeof e === 'string');
    if (membersStr.length === 0) {
      return false;
    } else {
      for (let i = 0; i < membersStr.length; i++) {
        res += membersStr[i].trim()[0];
      }
      return res.toLocaleUpperCase().split('').sort().join('');
    }
  } else {
    return false;
  }
    
};
