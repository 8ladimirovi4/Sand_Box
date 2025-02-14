import "./styles.css";
import { useState, useEffect, useCallback, useMemo } from "react";
import { UserType } from "./types";
import CommonButton from "../CommonButton/CommonButton";
import User from "../User/User";

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Фетчинг пользователей с кэшированием
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: UserType[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Ошибка загрузки пользователей");
      } finally {
        setLoading(false);
      }
    };

    //предотвращает повторную загрузку данных при каждом рендере компонента.
    if (users.length === 0) {
      fetchUsers();
    }
  }, [users.length]);

  // Запоминаем данные, чтобы избежать лишних ререндеров
  const cachedUsers = useMemo(() => users, [users]);

  // Функция выбора пользователя
  // Функци не будет пересоздаваться при последующих рендерах.
  const handleSelectUser = useCallback((user: UserType) => {
    setSelectedUser(user);
  }, []);

  return (
    <div className="user-list-wrapper">
      <div className="user-list-wrapper_users-wrapper">
        {loading && <p>Загрузка...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {cachedUsers && cachedUsers.length ? (
          <>
            <h2>Пользователи</h2>
            <ul>
              {cachedUsers.map((user) => (
                <li className="user-list-wrapper_users" key={user.id}>
                  <div>{user.name}</div>
                  <div>
                    <CommonButton onClick={() => handleSelectUser(user)}>
                      Подробнее
                    </CommonButton>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="user-list-wrapper_users"></div>
        )}
      </div>
      <User userInfo={selectedUser} />
    </div>
  );
};

export default UserList;
