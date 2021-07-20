import React, { useEffect, useState } from "react";
import classes from "./tree.module.scss";
import { TreeData } from "../../types/tree";
// import { Organization } from "../../types/organization";
import { UserTree } from "../../types/tree";
import axios from "axios";
import { api } from "../../service/api.service";

export const Tree = () => {
  const [tree, setTree] = useState<[] | TreeData[]>([]);

  const getTree = async () => {
    const response = await api["tree"].getList();
    setTree(response);
  };

  useEffect(() => {
    getTree();
  }, []);

  const GenerateUser = ({
    id,
    name,
    surname,
    patronymic,
    org_name,
  }: UserTree) => {
    return (
      <ul>
        <li className={classes.userNames}>
          <span className={classes.userSurnames}>{surname}</span> {name}{" "}
          {patronymic} <br />
          <span className={classes.userOrgNames}>{org_name}</span>
        </li>
      </ul>
    );
  };

  const userChecker = (item: any) => {
    const arrOfUsers = item.users;
    if (arrOfUsers !== undefined && arrOfUsers.length !== 0) {
      return (
        <div>
          {arrOfUsers.map((item: UserTree) => (
            <GenerateUser
              id={item.id}
              name={item.name}
              surname={item.surname}
              patronymic={item.patronymic}
              org_name={item.org_name}
              key={item.id}
            />
          ))}
        </div>
      );
    }
  };

  const TreeNode = ({ node }: any) => {
    const [childVisible, setChildVisibility] = useState(false);

    const hasChild = !!node.organizations;

    return (
      <li key={node.id} onClick={(event) => setChildVisibility((v) => !v)}>
        <span className={classes.expandingText}>{node.name}</span>
        {hasChild && childVisible && (
          <div key={node.id} onClick={(event) => setChildVisibility((v) => !v)}>
            {userChecker(node)}
            {<SubTree data={node.organizations} />}
          </div>
        )}
      </li>
    );
  };

  const SubTree = ({ data }: any) => (
    <ul>
      {data && data.map((item: any) => <TreeNode key={item.id} node={item} />)}
    </ul>
  );

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <SubTree data={tree} />
      </div>
    </div>
  );
};
