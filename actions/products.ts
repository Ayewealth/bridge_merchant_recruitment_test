import api from '~/utils/axios';

export const getProducts = async () => {
  const respone = await api.get('/products');
  return respone.data;
};
