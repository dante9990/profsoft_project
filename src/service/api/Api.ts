import { ApiAbstract } from "./adstract";
import { User, UserCreate } from "../../types/user";
import { TreeData } from "../../types/tree";

export class ApiUsers extends ApiAbstract<User, UserCreate> {}
export class ApiTreeData extends ApiAbstract<TreeData, any> {}
