import {TablePage} from "../../Pages/Table";
import {Login} from "../../Pages/Login";
import {TreePage} from "../../Pages/Tree";
import {CounterPage} from "../../Pages/Counter";
import {CardPage} from "../../Pages/Card";

export  const routes =[
    {
        id:1,
    path: 'table',
    Component: TablePage,
        title: 'Таблица'
    },
    {
        id:2,
        path: 'tree',
        Component: TreePage,
        title: 'Дерево'
    },
    {
        id:3,
        path: 'counter',
        Component: CounterPage,
        title: 'Счетчик'
    },
    {
        id:4,
        path: 'card',
        Component: CardPage,
        title: 'Карточки'
    },
    {
        id:5,
        path: 'login',
        Component: Login,
        title: 'Авторизация'
    }
]