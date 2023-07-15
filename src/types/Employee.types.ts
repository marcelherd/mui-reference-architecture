import { Employee, Prisma } from "@prisma/client";

const employeeWithTeam = Prisma.validator<Prisma.EmployeeArgs>()({
  include: {
    team: true,
  },
});

export type EmployeeWithTeam = Prisma.EmployeeGetPayload<
  typeof employeeWithTeam
>;

// Response types
export type GetEmployeesResponse = Employee[];
export type GetEmployeeResponse = EmployeeWithTeam;
export type CreateEmployeeResponse = Employee;
export type DeleteEmployeeResponse = Employee;
