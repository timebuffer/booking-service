let requests = [];

export const submitRequest = (products, address) => {
  requests.push({ products, address });
};

export const getRequests = () => {
  return requests;
};
