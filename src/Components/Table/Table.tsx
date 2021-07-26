import React, { useEffect, useState } from "react";
import styles from "./table.module.scss";
import { User } from "../../types/user";

import { api } from "../../service/api.service";
import { CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

type Props = {
  blockUser(id: number): void;
} & User;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(5),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "justify",
      color: theme.palette.text.secondary,
    },
  })
);

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
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            blockUser(id);
          }}
        >
          <p>{buttonName}</p>
        </Button>
      </td>
    </tr>
  );
};
export const Table = () => {
  const [users, setUsers] = useState<[] | User[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const classes = useStyles();

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
      <CssBaseline />
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Главная страница
          </Link>
          <Typography color="textPrimary">Таблица</Typography>
        </Breadcrumbs>
        <div className={styles.inputs}>
          <div className={classes.root}>
            <Grid item xs={12}>
              <input
                type="text"
                id="email"
                onChange={emailChange}
                value={email}
                className={classes.paper}
                placeholder="Еmail"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="text"
                id="name"
                onChange={nameChange}
                value={name}
                className={classes.paper}
                placeholder="Фамилия и имя"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="text"
                id="role"
                onChange={roleChange}
                value={role}
                className={classes.paper}
                placeholder="Роль"
              />
            </Grid>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              postUser(email, name, role);
              setEmail("");
              setName("");
              setRole("");
            }}
          >
            <p>Добавить</p>
          </Button>
        </div>
        <div className={styles.section}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Email</th>
                <th className={styles.th}>Фамилия и имя</th>
                <th className={styles.th}>Роль</th>
                <th className={styles.th}>Статус</th>
                <th className={styles.th}>Действия</th>
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
      </Container>
    </>
  );
};
