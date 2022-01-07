import { verify } from "hcaptcha";

export const verifier = (() => {
  const secret = process.env.HCAPTCHA_SECRET || "";
  if (!secret) throw new Error("HCAPTCHA_SECRET must be set");
  return (token: string) => verify(secret, token);
})();
