import { proxy } from "valtio";

const githubJson =
  "https://raw.githubusercontent.com/ndrean/gruland/main/result.json";

async function getJson(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

const vstore = proxy({
  list: getJson(githubJson),
});

export default vstore;
