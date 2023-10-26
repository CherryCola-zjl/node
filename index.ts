import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";

const server = http.createServer();

server.on("request", (request: IncomingMessage, response: ServerResponse) => {
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);
  const array:any[] = [];
  request.on("data", (chunk) => {
    array.push(chunk);
  });
  request.on("end", () => {
    const body = Buffer.concat(array).toString();
    console.log("body");
    console.log(body);

    response.statusCode = 404;
    // response.setHeader("X-frank", `I'm Frank`);
    // response.setHeader("Content-Type", "image/png");

    response.write("1\n");
    response.end();
  });
});

server.listen(8888);
