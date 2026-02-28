import { useState, useEffect, useCallback } from 'react';
import UsersHeader from './UsersHeader';
import UsersControls from './UsersControls';
import UsersTableBody from './UsersTableBody';
import UsersPagination from './UsersPagination';
import UsersModal from './UsersModal';
import {fetchUsers} from '../services/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, order: null });
  const [filters, setFilters] = useState({ fullName: '', age: '', gender: '' });
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const params = {
        limit: 10,
        skip: (currentPage - 1) * 10,
        sortBy: sortConfig.order ? sortConfig.key : undefined,
        order: sortConfig.order || undefined,
      };
      
      const data = await fetchUsers(params);
      setUsers(data.users);
      setTotalPages(Math.ceil(data.total / 10));
    } catch (err) {
      setError(err.message || 'Ошибка при загрузке пользователей');
    } finally {
      setLoading(false);
    }
  }, [currentPage, sortConfig]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleSort = (key) => {
    setSortConfig(prev => {
      if (prev.key !== key) {
        return { key, order: 'asc' };
      }
      
      switch (prev.order) {
        case 'asc':
          return { key, order: 'desc' };
        case 'desc':
          return { key: null, order: null };
        default:
          return { key, order: 'asc' };
      }
    });
  };

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="users">
      <UsersHeader error={error} />
      <UsersControls 
        filters={filters}
        onFilterChange={handleFilter}
      />
      <UsersTableBody 
        users={users}
        loading={loading}
        onSort={handleSort}
        sortConfig={sortConfig}
        filters={filters}
        onUserClick={handleUserClick}
      />
      <UsersPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <UsersModal 
        user={selectedUser}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Users;
