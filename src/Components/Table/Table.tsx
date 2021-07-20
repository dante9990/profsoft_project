import React, { useEffect, useState } from "react";
import classes from "./table.module.scss";
import axios from "axios";
import { User } from "../../types/user";

import { api } from "../../service/api.service";

type Props = {
  blockUser(id: number): void;
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
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const emailChange = (e: any) => {
    if (e.target) {
      setEmail(e.target.value);
    }
  };

  const nameChange = (e: any) => {
    if (e.target) {
      setName(e.target.value);
    }
  };

  const roleChange = (e: any) => {
    if (e.target) {
      setRole(e.target.value);
    }
  };

  const getUsers = async () => {
    const response = await api["users"].getList();
    setUsers(response);
    // await axios.get(`http://localhost:5050/users`).then((response) => {
    //   setUsers(response.data);
    // });
  };

  const postUser = async (email: string, name: string, role: string) => {
    const response = await api["users"].post({
      email: email,
      name: name,
      role: role,
    });
    if (response) {
      await getUsers();
    }
    // await axios
    //   .post(`http://localhost:5050/users`, {
    //     email: email,
    //     name: name,
    //     role: role,
    //   })
    //   .then((response) => {
    //     getUsers();
    //     return response.data;
    //   });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const blockUser = async (id: number) => {
    const response = await api["users"].delete(id);
    if (response) {
      await getUsers();
    }
    // return axios
    //   .delete(`http://localhost:5050/users/${id}`)
    //   .then((response) => {
    //     getUsers();
    //     return response.data;
    //   });
  };
  return (
    <>
      <div className={classes.inputs}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChange}
          value={email}
          className={classes.input}
        />
        <label htmlFor="">Фамилия и имя</label>
        <input
          type="text"
          id="name"
          onChange={nameChange}
          value={name}
          className={classes.input}
        />
        <label htmlFor="">Роль</label>
        <input
          type="text"
          id="role"
          onChange={roleChange}
          value={role}
          className={classes.input}
        />
        <div
          className={classes.blockButton}
          onClick={() => {
            postUser(email, name, role);
            setEmail("");
            setName("");
            setRole("");
          }}
        >
          <p>Добавить</p>
        </div>
      </div>
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
    </>
  );
};
