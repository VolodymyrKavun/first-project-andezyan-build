export const getProductById = (id, data) => {
  return data.find(product => product.id === id);
};

export const getProductByType = (type, data) => {
  return data.filter(product => product.group === type);
};
