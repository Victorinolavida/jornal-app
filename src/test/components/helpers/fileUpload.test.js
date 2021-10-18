import cloudinary from "cloudinary";

import { fileUpload } from "../../../helper/fileUpload";

cloudinary.config({
  cloud_name: "victor-mex",
  api_key: "118489135622875",
  api_secret: "S5JXHEsLigPnr_vc40q7A2XXkXM",
  secure: true,
});

describe("Pruebas en fileUpload.js", () => {
  test("Debe de subir el archivo y retornar el url", async () => {
    const img = await fetch(
      "https://media.sproutsocial.com/uploads/2018/01/sprout-instagram-publishing-780x440.png"
    );
    const blob = await img.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);

    expect(typeof url).toBe("string");
    const segments = url.split("/");
    // console.log(segments);
    const id = segments[segments.length - 1].replace(".png", "");
    // console.log(id);

    await cloudinary.v2.api.delete_resources(id, {}, () => {
      // done();
    });
  });
});

test("Debe de retornar un error", async () => {
  const file = new File([], "foto.jpg");

  const url = await fileUpload(file);
  expect(url).toBe(null);
  // console.log(url);
});
