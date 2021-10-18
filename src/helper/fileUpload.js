export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/victor-mex/upload";

  const formdata = new FormData();
  formdata.append("upload_preset", "react-jornal");
  formdata.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formdata,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      // throw await resp.json();
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
