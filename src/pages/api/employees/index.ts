import type { NextApiHandler } from "next";
import { z } from "zod";
import { HttpStatusCode } from "axios";
import { Prisma } from "@prisma/client";

import { apiHandler } from "@/lib/api";
import { create, findAll } from "@/lib/services/Employee.service";
import type {
  CreateEmployeeResponse,
  GetEmployeesResponse,
} from "@/types/Employee.types";

// See: https://www.prisma.io/blog/satisfies-operator-ur8ys8ccq7zb
const createEmployeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
}) satisfies z.ZodType<Prisma.EmployeeCreateInput>;

const postHandler: NextApiHandler<CreateEmployeeResponse> = async (
  req,
  res
) => {
  const data = createEmployeeSchema.parse(req.body);

  const employee = await create(data);

  res.status(HttpStatusCode.Created).json(employee);
};

const getHandler: NextApiHandler<GetEmployeesResponse> = async (req, res) => {
  const employees = await findAll();

  res.status(HttpStatusCode.Ok).json(employees);
};

export default apiHandler({
  POST: postHandler,
  GET: getHandler,
});
