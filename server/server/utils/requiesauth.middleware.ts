import { compareSync } from "bcrypt";
import { Next, RequestInterface, ResponseInterface } from ".";

export async function requiresAuth(
  req: RequestInterface,
  res: ResponseInterface,
  next: Next
) {
  return await (async function () {
    try {
      const xApiKey: string | undefined = req.headers["x-api-key"] as string;
      if (!xApiKey)
        throw new Error(`x-api-key cannot be found, re-authenticate yourself!`);

      await make_sure_apikey_isValid(xApiKey);

      next();
    } catch (error) {
      next(error);
    }
  })();
}

async function make_sure_apikey_isValid(xApiKey: string) {
  const isSimilar = compareSync(new Date().toLocaleDateString(), xApiKey);
  if (isSimilar === false)
    throw new Error("Invaild x-api-key, Please re validate yourself!");
}
