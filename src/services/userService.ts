import { IUserData } from "../interfaces/IUserData";
import { getUserByEmail, getUserByUsername } from "../pages/api/querys/faunadb";

export const checkExistsUser = async (data: IUserData) => {
  return (
    Boolean(await getUserByEmail(data.email)) ||
    Boolean(await getUserByUsername(data.username))
  );
};
