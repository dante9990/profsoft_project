import { ApiUsers, ApiTreeData } from "./api/Api";
import { http as httpInstance } from "./api/config";
import { AxiosInstance } from "axios";

interface ApiServiceInterface {
  [key: string]: any;
}

class ApiService implements ApiServiceInterface {
  private users: ApiUsers;
  private tree: ApiTreeData;

  constructor(http: AxiosInstance) {
    this.users = new ApiUsers(http, "users");
    this.tree = new ApiTreeData(http, "tree");
  }
}

export const api = new ApiService(httpInstance);
