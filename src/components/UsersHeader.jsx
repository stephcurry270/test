const UsersHeader = ({ error }) => {
  return (
    <>
      <h2 className="users__title">Список пользователей</h2>
      {error && <div className="users__error">{error}</div>}
    </>
  );
};

export default UsersHeader;