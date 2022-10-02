import * as userRepository from "../repositories/userRepository.js";
import { usersPrismaSchema } from "../types/userTypes.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function searchUser(id: number) {
  const verifyUser: usersPrismaSchema = await userRepository.verifyUser(id);
  if (!verifyUser) {
    notFoundError("User not found");
  }

  const infos = {
    name: verifyUser.name,
    pictureUrl: verifyUser.pictureUrl,
  };

  return infos;
}
