const formatCurrency = (money) => new Intl.NumberFormat('id').format(money);

const mapStatus = (status) => (status ? 'Active' : 'Inactive');

export { formatCurrency, mapStatus };
