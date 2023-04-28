import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "error connecting to db";
  statusCode = 500;

  constructor() {
    super("error connecting to db");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
