const githubJson =
  "https://raw.githubusercontent.com/ndrean/gruland/main/result.json";

async function getJson(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.filter((l) => l !== null);
  } catch (err) {
    console.log(err);
  }
}

export { getJson, githubJson };
