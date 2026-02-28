const UsersModal = ({ user, onClose }) => {
  if (!user) return null;

  const fullName = `${user.firstName} ${user.lastName}${user.maidenName ? ' ' + user.maidenName : ''}`;

  return (
    <div className="users-modal users-modal--open" onClick={onClose}>
      <div className="users-modal__content" onClick={e => e.stopPropagation()}>
        <button className="users-modal__close" onClick={onClose}>×</button>
        
        <div className="users-modal__avatar">
          <img src={user.image} alt={fullName} />
        </div>
        
        <h3>{fullName}</h3>
        
        <div className="users-modal__info">
          <p><strong>Возраст:</strong> {user.age}</p>
          <p><strong>Рост:</strong> {user.height} см</p>
          <p><strong>Вес:</strong> {user.weight} кг</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Адрес:</strong> {user.address?.address}, {user.address?.city}, {user.address?.country}</p>
          <p><strong>Почтовый индекс:</strong> {user.address?.postalCode}</p>
        </div>
      </div>
    </div>
  )
}

export default UsersModal