

const formatNumber = value => {
    if (value < 1000) {
      return value;
    }
    const thousandSeparatorValue = 1000;
    const lastDigitsToAppear = 3;
    if (!value) return 0;
    if (typeof value !== 'number') return 0;
    return parseFloat(value / thousandSeparatorValue).toFixed(lastDigitsToAppear);
  };

  export default formatNumber