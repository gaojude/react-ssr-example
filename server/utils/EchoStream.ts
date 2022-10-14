import * as stream from "stream";

export class EchoStream extends stream.Writable {
  _write(chunk: any, encoding: BufferEncoding, callback: (error?: (Error | null)) => void) {
    console.log(chunk.toString());
    console.log("----------------")
    callback();
  }
}
