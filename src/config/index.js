const env = import.meta.env.MODE || 'production';

const config = {
  development: {
    baseURL: '/api',
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