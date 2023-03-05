import React from "react";
import vstore from "./github";
import { useSnapshot } from "valtio";
import "./index.css";

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

async function Home() {
  const handleClick = (e) => {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  };

  let list = await vstore.list;
  list = list.filter((l) => l !== null);

  return (
    <div className="grid grid-cols-6  gap-2">
      <div className="grid-template-columns: 40px">1</div>
      <div className="grid grid-cols-1 md:grid-cols-2 col-span-4 gap-2">
        {list.map((example, index) => (
          <div className="flex justify-center mb-5" key={index}>
            <p>{console.log(JSON.stringify(example.id))}</p>
            <a href={`/${example.id}`} onClick={handleClick}>
              <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {example.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {example.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
