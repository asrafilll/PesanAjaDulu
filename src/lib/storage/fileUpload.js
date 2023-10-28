import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "QZ027JE71E78106ONYNW",
  secretAccessKey: "8wIK4O2VXypXMleWI3VcY4ehyegKjGj9SVQwHfhO",
  region: "ap-southeast-1",
});

const S3 = new AWS.S3({
  endpoint: "https://s3.ap-southeast-1.wasabisys.com",
});

export const FileUpload = (file, folder) => {
  const S3Params = {
    Bucket: "pesanaja",
    Key: `${folder}/${file.name}`,
    Body: file,
  };
  return new Promise((resolve, reject) => {
    S3.upload(S3Params, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
