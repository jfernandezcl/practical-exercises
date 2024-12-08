import net from "node:net";
import fs from "node:fs/";
import fsp from "node:fs/promises";
import { measureMemory } from "node:vm";

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
export async function procesarArchivoPromise() {
  let contenido = "";
  try {
    contenido = await fsp.readFile("input.txt", "utf8");
  } catch (error) {
    console.error("Error leyendo archivo:", error.message);
    throw error;
  }

  const textoProcesado = contenido.toUpperCase();

  try {
    await fsp.writeFile("output.txt", textoProcesado);
  } catch (error) {
    console.error("Error guardando archivo:", error.message);
    throw error;
  }
}
await procesarArchivoPromise();

// EJERCICIO 4
export async function leerArchivos() {
  console.time("leeArchivos");

  const [archivo1, archivo2, archivo3] = await Promise.allSettled([
    fs.readFile("archivo1.txt", "utf8"),
    fs.readFile("archivo2.txt", "utf8"),
    fs.readFile("archivo3.txt", "utf8"),
  ]);

  const message = [archivo1.value, archivo2.value, archivo3.value]
    .filter((value) => typeof value !== "undefined")
    .join(" ");

  console.log(message);

  //const archivo1 = fs.readSync("archivo1.txt", "utf8");
  //const archivo2 = fs.readSync("archivo2.txt", "utf8");
  //const archivo3 = fs.readSync("archivo3.txt", "utf8");

  return message;
}
leerArchivos();

// EJERCICIO 5

export async function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
