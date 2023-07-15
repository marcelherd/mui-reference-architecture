// Based on https://dev.to/sneakysensei/nextjs-api-routes-global-error-handling-and-clean-code-practices-3g9p

import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import type { Method } from "axios";
import createHttpError from "http-errors";

// Shape of the response when an error is thrown
interface ErrorResponse {
  error: {
    message: string;
    err?: any; // Sent for unhandled errors reulting in 500
  };
}

type ApiMethodHandlers = {
  [key in Uppercase<Method>]?: NextApiHandler;
};

export function apiHandler(handler: ApiMethodHandlers) {
  return async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
    try {
      const method = req.method
        ? (req.method.toUpperCase() as keyof ApiMethodHandlers)
        : undefined;

      if (!method) {
        throw new createHttpError.MethodNotAllowed(
          `No method specified on path ${req.url}!`
        );
      }

      const methodHandler = handler[method];
      if (!methodHandler) {
        throw new createHttpError.MethodNotAllowed(
          `Method ${req.method} not allowed on path ${req.url}!`
        );
      }

      await methodHandler(req, res);
    } catch (err) {
      errorHandler(err, res);
    }
  };
}

function errorHandler(err: unknown, res: NextApiResponse<ErrorResponse>) {
  if (createHttpError.isHttpError(err)) {
    return res.status(err.statusCode).json({ error: { message: err.message } });
  }

  console.error(err);

  return res.status(500).json({
    error: { message: "Internal Server Error", err },
  });
}
