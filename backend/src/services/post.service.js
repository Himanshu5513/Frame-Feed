const imgKit = require("@imagekit/nodejs");

const imgkit = new imgKit({
  privateKey: process.env.PRIVATEKEY,
});

const upload = async (buffer) => {
  const res = await imgkit.files.upload({
    file: buffer.toString("base64"),
    fileName: "img.jpg",
  });
  return res;
};

module.exports = upload;
