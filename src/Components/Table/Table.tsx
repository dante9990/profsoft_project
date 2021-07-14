import React, { useEffect, useState } from "react";
import classes from "./table.module.scss";
import axios from "axios";
import { User } from "../../types/user";

type Props = {
  blockUser(id: number): Promise<User>;
} & User;
const GenerateRow = ({ role, id, blockUser, name, status, email }: Props) => {
  const statusName = status === 1 ? "Активен" : "Заблокирован";
  const buttonName = status === 1 ? "Блокировать" : "Разблокировать";
  return (
    <tr>
      <td>{email}</td>
      <td>{name}</td>
      <td>{role}</td>
      <td>{statusName}</td>
      <td>
        <div
          className={classes.blockButton}
          onClick={() => {
            blockUser(id);
          }}
        >
          <p>{buttonName}</p>
        </div>
      </td>
    </tr>
  );
};
export const Table = () => {
  const [users, setUsers] = useState<[] | User[]>([]);
  const [email, setEmail] = useState("");

  const handleChange = (e: any) => {
    if (e.target) {
      setEmail(e.target.value);
    }
  };

  const getUsers = async () => {
    await axios.get(`http://localhost:5050/users`).then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const blockUser = async (id: number) => {
    return axios
      .delete(`http://localhost:5050/users/${id}`)
      .then((response) => {
        getUsers();
        return response.data;
      });
  };
  console.log(email);
  return (
    <>
      <div className={classes.section}>
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr>
              <th className={classes.th}>Email</th>
              <th className={classes.th}>Фамилия и имя</th>
              <th className={classes.th}>Роль</th>
              <th className={classes.th}>Статус</th>
              <th className={classes.th}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <GenerateRow
                name={user.name}
                email={user.email}
                role={user.role}
                id={user.id}
                status={user.status}
                key={user.id}
                blockUser={blockUser}
              />
            ))}
          </tbody>
        </table>
      </div>
      <input type="text" onChange={handleChange} value={email} />
    </>
  );
};
