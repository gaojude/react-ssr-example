import { SERVER_PORT } from "./consts";
import { expressApp } from "./expressApp";

export const runServer = () => {
  expressApp.listen(SERVER_PORT, () => {
    console.log(`Server is running at port ${SERVER_PORT}.`);
  });
};
