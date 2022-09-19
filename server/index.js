const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// default options
app.use(fileUpload());
app.use(cors());
app.use(express.static("images"));

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  console.log(req.file);

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  sampleFile = req.files.sampleFile;
  encryptedFileName = `${makeid(10)}-${sampleFile.name}`;
  console.log(sampleFile.mimetype === "image/png");
  if (!["image/jpeg", "image/png"].includes(sampleFile.mimetype)) {
    res.send({
      status: false,
      errorType: "extension",
      message: "File type is not supported",
      data: {
        name: "",
        mimetype: "",
        size: "",
      },
    });
  } else {
    uploadPath = __dirname + "/images/" + encryptedFileName;

    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);

      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: encryptedFileName,
          mimetype: sampleFile.mimetype,
          size: sampleFile.size,
        },
      });
    });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is listening on port ${port}.`));
