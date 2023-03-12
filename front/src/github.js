const githubJson =
  "https://raw.githubusercontent.com/ndrean/gruland/main/serverlessland-examples.json";

async function getJson(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.filter((l) => Object.keys(l).includes("title"));
  } catch (err) {
    console.log(err);
  }
}

export { getJson, githubJson };
