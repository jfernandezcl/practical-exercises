import net from "node:net";

// EJERCICIO 1
export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    //return { time: process.hrtime(startTime), ip }; // No funciona
    callback({ time: process.hrtime(startTime), ip });
  });

  client.on("error", (err) => {
    // throw err; // No funciona
    client.end();
    callback(err);
  });
};

ping("midu.dev", (err, info) => {
  if (err) console.error(err);
  else console.log(info);
});

// EJERCICIO 2
export function obtenerDatosPromise(callback) {
  setTimeout(() => {
    callback(null, { data: "datos importantes" });
  }, 2000);
}
