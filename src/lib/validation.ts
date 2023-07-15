import { z } from "zod";

export const requestBodyErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    return { message: "Missing or invalid POST body" };
  }

  return { message: ctx.defaultError };
};
