/**
 * Format GICS sector name
 * @param {string} sector  The sector name
 * @returns  The formatted sector name
 */
export const formatGICSSector = (sector) => {
  const sectorNames = {
    'energy': 'Energy',
    'materials': 'Materials',
    'industrials': 'Industrials',
    'consumer-discretionary': 'Consumer Discretionary',
    'consumer-staples': 'Consumer Staples',
    'health-care': 'Health Care',
    'financials': 'Financials',
    'information-technology': 'Information Technology',
    'communication-services': 'Communication Services',
    'utilities': 'Utilities',
    'real-estate': 'Real Estate',
  };

  return sectorNames[sector] || 'Unknown Sector';
};

/**
 * map of sector colors
 */
export const sectorColors = {
  'information-technology': '#FE7E4F', // Bright Orange
  'industrials': '#A2CC96', // Soft Green
  'communication-services': '#79D3C2', // Light Sea Green
  'energy': '#f2c94c', // Yellow
  'materials': '#9b51e0', // Purple
  'consumer-discretionary': '#eb5757', // Red
  'consumer-staples': '#219653', // Dark Green
  'health-care': '#56CCF2', // Sky Blue
  'financials': '#333333', // Dark Gray
  'utilities': '#F2994A', // Orange
  'real-estate': '#6D9886', // Muted Teal
};
