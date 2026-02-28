const columns = [
  { key: 'fullName', label: 'ФИО', sortable: true },
  { key: 'age', label: 'Возраст', sortable: true },
  { key: 'gender', label: 'Пол', sortable: true },
  { key: 'phone', label: 'Телефон', sortable: true },
  { key: 'email', label: 'Email', sortable: false },
  { key: 'country', label: 'Страна', sortable: false },
  { key: 'city', label: 'Город', sortable: false }
];

const UsersTableHead = ({ onSort, sortConfig, onResize }) => {
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.order === 'asc' ? '' : '';
  };

  const handleResize = (key, e) => {
    const startX = e.pageX;
    const startWidth = e.target.parentElement.offsetWidth;
    
    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.pageX - startX);
      if (newWidth >= 50) {
        onResize(key, newWidth);
      }
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <thead className="users__thead">
      <tr className="users__row users__row--head">
        {columns.map(column => (
          <th 
            key={column.key}
            className={`users__cell users__cell--head ${column.sortable ? 'sortable' : ''}`}
            data-key={column.key}
            onClick={() => column.sortable && onSort(column.key)}
            style={{ width: column.width }}
          >
            <div className="users__header-content">
              {column.label}
              {column.sortable && (
                <span className="users__sort-icon">{getSortIcon(column.key)}</span>
              )}
            </div>
            <div 
              className="users__resizer"
              onMouseDown={(e) => handleResize(column.key, e)}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default UsersTableHead;