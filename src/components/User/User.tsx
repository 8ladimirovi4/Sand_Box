import { UserInfoProps } from "./types";
import './styles.css'

const User = ({ userInfo }: UserInfoProps) => {
  return (
    <>
      {userInfo && (
        <div className="user-list-wrapper_user">
          <h3>Детали пользователя</h3>
          <p>
            <strong>Имя:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Телефон:</strong> {userInfo.phone}
          </p>
          <p>
            <strong>Адрес:</strong>{" "}
            {`${userInfo.address.street}, ${userInfo.address.city}, ${userInfo.address.zipcode}`}
          </p>
        </div>
      )}
    </>
  );
};

export default User;
