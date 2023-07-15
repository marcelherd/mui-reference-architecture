import { Prisma } from "@prisma/client";

import { db } from "../database";

export async function create(data: Prisma.EmployeeCreateInput) {
  return db.employee.create({ data });
}

export async function remove(id: Prisma.EmployeeWhereUniqueInput["id"]) {
  return db.employee.delete({
    where: {
      id,
    },
  });
}

export async function findAll() {
  return db.employee.findMany();
}

export async function findById(id: Prisma.EmployeeWhereUniqueInput["id"]) {
  return db.employee.findUnique({
    where: {
      id,
    },
    include: {
      team: true,
    },
  });
}

export async function find(where: Prisma.EmployeeWhereInput) {
  return db.employee.findMany({ where });
}
