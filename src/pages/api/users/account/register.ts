import type { NextApiRequest, NextApiResponse } from "next";
import { checkExistsUser } from "../../../../services/userService";
import { createUser } from "../../querys/faunadb";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //verificar se o usuario ja esta cadastrado
  // se o usuario nao estiver cadastrado cadastrar
  // linkar ao banco de dados

  try {
    const data = req.body;

    if (await checkExistsUser(data)) {
      return res.status(404).json("email e/ou usuário ja existente");
    }

    console.log(data);
    await createUser(data);

    return res.status(200);
  } catch (e) {
    return res.status(501).json("falha ao criar o usuário");
  }
}
