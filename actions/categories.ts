import api from '~/utils/axios';

export const getCategories = async () => {
  const respone = await api.get('/products/categories');
  return respone.data;
};
