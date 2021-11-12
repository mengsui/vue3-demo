/******************
 * 基础 - 登录 - mock
 *****************/

// 登录
let Login = {
  "code": 0,
  "msg": "success",
  "data": {}
}

export default {

  /**
   * 基础 - 登录
   * @param： {}    
   * @returns：Promise {<pending>}
   **/
  'get|/login': () => {
    return Login
  }
}