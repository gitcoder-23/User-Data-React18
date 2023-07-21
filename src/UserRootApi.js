import axios from 'axios';
import { userBaseUrl } from './constants';
import axiosRetry from 'axios-retry';

const UserRootApi = axios.create({
  baseURL: userBaseUrl,
});

axiosRetry(UserRootApi, { retries: 3 });

const resetInterceptor = (token) => {
  console.log('USERToken-interceptors ', token);

  // Add reaquest interceptor
  UserRootApi.interceptors.request.use((config) => {
    console.log('USERToken-token ', token);

    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  });
};

export { UserRootApi as default };

export { resetInterceptor };
