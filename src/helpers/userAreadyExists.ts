import { IUserData } from "../interfaces/IUserData";
import { getUserByEmail, getUserByUsername } from "../pages/api/querys/faunadb";

export const userAreadyExists = async (data: IUserData) => {
  const hasEmail = Boolean(await getUserByEmail(data.email));
  const hasUsername = Boolean(await getUserByUsername(data.username));
  const userAreadyExists = hasEmail || hasUsername;
  return userAreadyExists;
};
