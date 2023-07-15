import type { NextApiHandler } from "next";
import { z } from "zod";
import { HttpStatusCode } from "axios";
import createHttpError from "http-errors";
import { Prisma } from "@prisma/client";

import { apiHandler } from "@/lib/api";
import { findById, remove } from "@/lib/services/Employee.service";
import type {
  DeleteEmployeeResponse,
  GetEmployeeResponse,
} from "@/types/Employee.types";

const deleteEmployeeSchema = z.object({
  id: z.string(),
}) satisfies z.ZodType<Prisma.EmployeeWhereUniqueInput>;

const deleteHandler: NextApiHandler<DeleteEmployeeResponse> = async (
  req,
  res
) => {
  const { id } = deleteEmployeeSchema.parse(req.query);

  const employee = await remove(id);

  res.status(HttpStatusCode.Ok).json(employee);
};

const getEmployeeSchema = z.object({
  id: z.string(),
}) satisfies z.ZodType<Prisma.EmployeeWhereUniqueInput>;

const getHandler: NextApiHandler<GetEmployeeResponse> = async (req, res) => {
  const { id } = getEmployeeSchema.parse(req.query);

  const employee = await findById(id);

  if (!employee) {
    throw new createHttpError.NotFound(`Employee with id: '${id}' not found!`);
  }

  res.status(HttpStatusCode.Ok).json(employee);
};

export default apiHandler({
  GET: getHandler,
  DELETE: deleteHandler,
});
