const env = import.meta.env.MODE || 'production';

const config = {
  development: {
    baseURL: 'https://m1.apifoxmock.com/m1/6074917-5765278-default',
    mock:true
  },
  production: {
    baseURL: 'https://api.example.com',
    mock:false
  },
};

export default {
  env:config[env],
  mock:config[env].mock,
  namespace:'my_demo'
};