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
export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback({ data: "datos importantes" });
    }, 2000);
  });
}
obtenerDatosPromise()
  .then((info) => {
    console.log(info);
  })
  .catch((error) => {
    console.error(error);
  });

// EJERCICIO 3
export function procesarArchivo(callback) {
  fs.readFile("input.txt", "utf8", (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      callback(error);
    }

    const textoProcesado = contenido.toUpperCase();

    fs.writeFile("output.txt", textoProcesado, (error) => {
      if (error) {
        console.error("Error guardando archivo:", error.message);
        callback(error);
      }

      console.log("Archivo procesado y guardado con éxito");
      callback(null);
    });
  });
}
