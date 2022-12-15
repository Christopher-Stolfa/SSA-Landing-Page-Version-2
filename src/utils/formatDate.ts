import moment from 'moment';

/**
 * Compares a Start Date vs End Date and renders them as a range if they're different
 * @function
 */
const formatDate = (startDate: Date, endDate: Date) => {
  const isSameDay = startDate === endDate;
  const startDateStr = moment(startDate).format('MMM D, YYYY').toString();
  const endDateStr = moment(endDate).format('MMM D, YYYY').toString();

  if (isSameDay) {
    return startDateStr;
  } else {
    return `${startDateStr} to ${endDateStr}`;
  }
};

export default formatDate;
