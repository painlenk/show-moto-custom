import { fauna } from "../../../services/fauna";
import { query } from "faunadb";
import { v4 as uuidV4 } from "uuid";
import { IUserData } from "../../../interfaces/IUserData";

export const getUserByUsername = async (username: string) => {
  try {
    const user = await fauna.query(
      query.Get(
        query.Match(query.Index("users_by_username"), query.Casefold(username))
      )
    );
    return user;
  } catch (e) {
    return false;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await fauna.query(
      query.Get(
        query.Match(query.Index("users_by_email"), query.Casefold(email))
      )
    );

    return user;
  } catch (e) {
    return false;
  }
};

export const getAllUser = async () => {
  try {
    const user = await fauna.query(query.Get(query.Index("users_by_username")));

    return user;
  } catch (e) {
    return false;
  }
};

export const createUser = async (dataUser: IUserData) => {
  try {
    await fauna.query(
      query.Create(query.Collection("users"), {
        data: {
          id: uuidV4(),
          ...dataUser,
        },
      })
    );

    return;
  } catch (e) {
    console.log("erro ao criar usuario");
  }
};
