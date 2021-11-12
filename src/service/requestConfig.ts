import axios from "axios";
import { Toast } from 'vant';

axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;



// Response
axios.interceptors.response.use(
  res => {
    const { error_code, data, message } = res.data;

    if (error_code) {
      return Promise.reject(message);
    };

    return data || {};
  },
  async error => {

    if (error.response) {
      const { status, config } = error.response;

      switch (status) {
        case 401:
          // await store.dispatch("userRemove");
          // href("/login");
          break;

        case 500:
          Toast.fail('服务异常！');
          break;

        case 502:
          Toast.fail('服务异常！');
          break;

        default:
          console.error(status, config.url);
      };
    };

    return Promise.reject(error.message);
  }
);

export default axios;