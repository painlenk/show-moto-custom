import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";
import { v4 as uuidV4 } from "uuid";
import { IUserData } from "../../../interfaces/IUserData";

export const getUserByUsername = async (username: string) => {
  try {
    const user = await fauna.query(
      q.Get(q.Match(q.Index("users_by_username"), q.Casefold(username)))
    );
    return user;
  } catch (e) {
    return false;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await fauna.query(
      q.Get(q.Match(q.Index("users_by_email"), q.Casefold(email)))
    );

    return user;
  } catch (e) {
    return false;
  }
};

export const getAllUser = async () => {
  try {
    const user = await fauna.query(q.Get(q.Index("users_by_username")));

    return user;
  } catch (e) {
    return false;
  }
};

export const createUser = (dataUser: IUserData) => {
  try {
    fauna.query(
      q.Create(q.Collection("users"), {
        data: {
          id: uuidV4(),
          username: dataUser.username,
          email: dataUser.username,
          password: dataUser.password,
          avatar: dataUser.avatar,
        },
      })
    );
    return;
  } catch (e) {
    console.log("erro ao criar usuario");
  }
};
