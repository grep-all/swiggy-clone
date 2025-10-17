const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(amount);
};

const parseCurrency = (formattedString) => {
    return parseFloat(formattedString.replace(/[^0-9.-]+/g, ""));
};

export { formatCurrency, parseCurrency };