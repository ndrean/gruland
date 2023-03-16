self.onmessage = async ({ data }) => {
  const local = "http://localhost:4000/api/packages?";

  try {
    const response = await fetch(local + new URLSearchParams({ p: data }), {
      mode: "cors",
    });
    if (response) {
      const packages = await response.json();
      self.postMessage(packages);
    }
  } catch (error) {
    self.postMessage(null);
  }
  self.close();
};
