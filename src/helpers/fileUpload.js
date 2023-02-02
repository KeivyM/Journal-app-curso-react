export const fileUpload = async (file) => {
  if (!file) throw new Error("No hay archivos para subir");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dxumzl6bw/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("no se pudo subir imagen");

    const cloudResp = await resp.json();
    // console.log(cloudResp);
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
