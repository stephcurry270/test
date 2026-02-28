import React from 'react';
import UsersTableHead from './UsersTableHead';
import UsersTableRow from './UsersTableRow';

const UsersTableBody = ({ 
  users, 
  loading, 
  onSort, 
  sortConfig, 
  filters,
  onUserClick 
}) => {
  const [columnWidths, setColumnWidths] = React.useState({});

  const handleResize = (key, width) => {
    setColumnWidths(prev => ({ ...prev, [key]: width }));
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName} ${user.maidenName || ''}`.toLowerCase();
    const matchesFullName = !filters.fullName || fullName.includes(filters.fullName.toLowerCase());
    const matchesAge = !filters.age || user.age === parseInt(filters.age);
    const matchesGender = !filters.gender || user.gender === filters.gender;
    
    return matchesFullName && matchesAge && matchesGender;
  });

  if (loading) {
    return <div className="users__loading">Загрузка...</div>;
  }

  return (
    <table className="users__table">
      <UsersTableHead 
        onSort={onSort} 
        sortConfig={sortConfig}
        onResize={handleResize}
      />
      <tbody className="users__tbody">
        {filteredUsers.map(user => (
          <UsersTableRow 
            key={user.id} 
            user={user} 
            onClick={onUserClick}
            columnWidths={columnWidths}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UsersTableBody;