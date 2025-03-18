const env = import.meta.env.MODE || 'production';

const config = {
  development: {
    apiUrl: 'http://localhost:3000/api',
  },
  production: {
    apiUrl: 'https://api.example.com',
  },
};

export default config[env];