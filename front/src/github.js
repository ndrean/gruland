const githubJson =
  "https://raw.githubusercontent.com/ndrean/gruland/main/serverlessland-examples.json";

async function getJson(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export { getJson, githubJson };
