import React, { useEffect, useState } from "react";
import { api } from "../../service/api.service";
import { User } from "../../types/user";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// const GenerateCard = ({ role, id, name, status, email }: User) => {
//   const statusName = status === 1 ? "Активен" : "Заблокирован";
//   return (
//     <tr>
//       <td>{email}</td>
//       <td>{name}</td>
//       <td>{role}</td>
//       <td>{statusName}</td>
//     </tr>
//   );
// };

export const CardComponent = () => {
  const [users, setUsers] = useState<[] | User[]>([]);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const getUsers = async () => {
    const response = await api["users"].getList();
    setUsers(response);
    // await axios.get(`http://localhost:5050/users`).then((response) => {
    //   setUsers(response.data);
    // });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Главная страница
          </Link>
          <Typography color="textPrimary">Карточки</Typography>
        </Breadcrumbs>
        {users.map((user) => (
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {user.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {user.email}
              </Typography>
              <Typography variant="body2" component="p">
                {user.role}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="secondary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
};
