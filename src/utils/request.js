import axios from "axios";
import config from "../config/index.js";
import {ElMessage} from "element-plus";
import router from "../router/index.js";

const TOKEN_INVALID = "Token校验失败，请重新登录";
const NETWORK_ERROR = "网络请求异常，请稍后重试";

const apiInstance = axios.create({
  baseURL: config.env.baseURL,
  timeout: 5000,
});

// 请求拦截器
apiInstance.interceptors.request.use(
  (req) => {
      const headers = req.headers;
      if(!headers.Authoritation){
          headers.Authoritation = 'Bearer ' + localStorage.getItem('token');
      }
      return req;
  }
);

// 响应拦截器
apiInstance.interceptors.response.use(
  (res) => {
      const { code,data, msg } = res.data;
      if (code === 200) {
          return data;
      } else if(code === 401){
          localStorage.removeItem('token');
          ElMessage.error(TOKEN_INVALID);
          setTimeout(
              () => {
                  router.push('/login');
              },
              1500
          )
          return Promise.reject(TOKEN_INVALID);
      }else{
          ElMessage.error(msg || NETWORK_ERROR);
          return Promise.reject(msg || NETWORK_ERROR);
      }
  }
)

export default apiInstance;