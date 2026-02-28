const UsersPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="users__pagination">
      <button
        type="button"
        className="users__pagination-button users__pagination-button--prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </button>

      <span className="users__pagination-info">
        Страница {currentPage} из {totalPages}
      </span>

      <button
        type="button"
        className="users__pagination-button users__pagination-button--next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперед
      </button>
    </div>
  );
};

export default UsersPagination;