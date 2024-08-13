import {
  PutObjectAclCommand,
  DeleteObjectCommand,
  S3Client,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";

const { myAccessKeyId, mySecretAccessKey } = require("./secretInfo");

const credentials = {
  accessKeyId: myAccessKeyId,
  secretAccessKey: mySecretAccessKey,
};
const s3Client = new S3Client({
  endpoint: "https://eu-central-1.linodeobjects.com",
  region: "eu-central-1",
  credentials: credentials,
});

const listObject = async (params) => {
  const results = await s3Client.send(new ListObjectsCommand(params));
  //   return results;
  let r = [];
  for (let item of results.Contents) {
    r.push("https:/odyserve.eu-central-1.linodeobjects.com/" + item.Key);
  }
  return r;
};

export default async function handler(req, res) {
  const config = {
    bucketName: "odyserve",
    region: "eu-central-1",
    accessKeyId: myAccessKeyId,
    secretAccessKey: mySecretAccessKey,
    s3Url: "https:/odyserve.eu-central-1.linodeobjects.com/",
  };

  const params = {
    Bucket: "odyserve",
    ACL: "public-read",
  };

  let results = await listObject(params);

  res.status(200).json({ results });
}
