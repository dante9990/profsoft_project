import React, { useEffect, useState } from "react";
import classes from "./tree.module.scss";
import axios from "axios";
import { Organization, TreeData, UserTree } from "../../types/tree";

const GenerateUser = ({ id, name, surname }: UserTree) => {
  return (
    <ul className={classes.todo}>
      <li>
        <span>{name}</span>
        <span>{surname}</span>
      </li>
    </ul>
  );
};

// const dfs = (node: Organization[]) => {
//   for (const key of node) {
//     if (key.organizations !== undefined) {
//       key.name;
//       dfs(key.organizations);
//     }
//
//     if (key.users !== undefined) {
//       for (const user of key.users) {
//         user.org_name;
//         user.surname, user.patronymic;
//       }
//     }
//   }
// };

const GenerateTree = ({ id, name, organizations }: TreeData) => {
  return (
    <ul className={classes.todo}>
      <li>
        {name}
        <ul className={classes.todo}>
          <li>
            {organizations.map((organization) => (
              <ul className={classes.todo}>
                <li className={classes.li}>
                  {organization.name}
                  <ul className={classes.todo}>
                    {organization.organizations.map((org) => (
                      <li className={classes.li}>
                        {org.name}
                        <ul>
                          {org.users?.map((user) => {
                            <li>{user.name}</li>;
                          })}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
          </li>
        </ul>
      </li>
    </ul>
  );
};

export const Tree = () => {
  const [trees, setTrees] = useState<[] | TreeData[]>([]);

  const treeUl = document.querySelector("todo") as HTMLBodyElement;

  const getTree = async () => {
    await axios.get(`http://localhost:5050/tree`).then((response) => {
      setTrees(response.data);
    });
  };
  const dfs = (node: Organization[]): any => {
    for (const key of node) {
      if (key.organizations !== undefined) {
        treeUl.innerHTML = `<li>${key.name}</li>`;
        console.log(key.name);
        dfs(key.organizations);
      }

      if (key.users !== undefined) {
        for (const user of key.users) {
          console.log(user.org_name);
          console.log(user.surname, user.patronymic);
        }
      }
    }
  };
  useEffect(() => {
    getTree();
  }, []);

  return (
    <>
      <div className={classes.section}>
        {dfs(trees)}
        {/*{trees.map((tree) => (*/}
        {/*  <ul className={classes.todo}>*/}
        {/*    <li>*/}
        {/*      {tree.name}*/}
        {/*      <ul className={classes.todo}>*/}
        {/*        <li>*/}
        {/*          {tree.organizations.map((organization) => (*/}
        {/*            <ul className={classes.todo}>*/}
        {/*              <li className={classes.li}>*/}
        {/*                {organization.name}*/}
        {/*                <ul className={classes.todo}>*/}
        {/*                  {organization.organizations.map((org) => (*/}
        {/*                    <li className={classes.li}>{org.name}</li>*/}
        {/*                  ))}*/}
        {/*                </ul>*/}
        {/*              </li>*/}
        {/*            </ul>*/}
        {/*          ))}*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*))}*/}
      </div>
    </>
  );
};
