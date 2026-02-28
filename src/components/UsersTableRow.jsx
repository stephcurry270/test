const UsersTableRow = ({ user, onClick, columnWidths }) => {
  const fullName = `${user.firstName} ${user.lastName}${user.maidenName ? ' ' + user.maidenName : ''}`;
  
  return (
    <tr 
      className="users__row" 
      onClick={() => onClick(user)}
      style={{ cursor: 'pointer' }}
    >
      <td className="users__cell" style={{ width: columnWidths.fullName }}>{fullName}</td>
      <td className="users__cell" style={{ width: columnWidths.age }}>{user.age}</td>
      <td className="users__cell" style={{ width: columnWidths.gender }}>
        {user.gender === 'male' ? 'Мужской' : 'Женский'}
      </td>
      <td className="users__cell" style={{ width: columnWidths.phone }}>{user.phone}</td>
      <td className="users__cell" style={{ width: columnWidths.email }}>{user.email}</td>
      <td className="users__cell" style={{ width: columnWidths.country }}>{user.address?.country}</td>
      <td className="users__cell" style={{ width: columnWidths.city }}>{user.address?.city}</td>
    </tr>
  );
};

export default UsersTableRow;