import { Web3Storage } from "web3.storage";

function getAccessToken() {
  return import.meta.env.VITE_WEB3STORAGE_API_KEY;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export async function uploadWeb3(file) {
  if (file) {
    const client = makeStorageClient();
    const cid = await client.put(file);
    console.log("web3 Storage cid: " + cid);
    return cid;
  }
}
export async function retrieveData(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }
  // const client = makeStorageClient();
  // const res = await client.get(cid);
  // const files = await res.files();
  // console.log(files);
  // return files;
}
