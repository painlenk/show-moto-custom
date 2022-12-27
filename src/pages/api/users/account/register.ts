import type { NextApiRequest, NextApiResponse } from "next";
import { userAreadyExists } from "../../../../helpers/userAreadyExists";

export default function register(req: NextApiRequest, res: NextApiResponse) {
  //verificar se o usuario ja esta cadastrado
  // se o usuario nao estiver cadastrado cadastrar
  // linkar ao banco de dados

  const data = req.body;
  userAreadyExists(data);

  res.status(200).json(req.body);
}
