import PropTypes from 'prop-types';

const PaginationEntries = ({ currentPage, totalNumber }) => {
  return (
    <div>
      {currentPage} out of {totalNumber}
    </div>
  );
};

PaginationEntries.propTypes = {
  currentPage: PropTypes.number,
  totalNumber: PropTypes.number,
};
export default PaginationEntries;
