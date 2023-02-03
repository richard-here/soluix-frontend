const formatCurrency = (money) => {
  return new Intl.NumberFormat('id').format(money);
};

const mapStatus = (status) => {
  return status ? 'Active' : 'Inactive';
};

export { formatCurrency, mapStatus };
