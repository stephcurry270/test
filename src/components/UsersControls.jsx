const UsersControls = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="users__controls">
      <input
        type="text"
        name="fullName"
        className="users__search-input"
        placeholder="Фильтр по ФИО"
        value={filters.fullName}
        onChange={handleChange}
      />
      <input 
        className="users__search-input"
        type="number" 
        name="age"
        placeholder="Возраст"
        value={filters.age}
        onChange={handleChange}
      />
      <select
        className="users__search-input"
        name="gender"
        value={filters.gender}
        onChange={handleChange}
      >
        <option value="">Все</option>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
    </div>
  );
};

export default UsersControls;