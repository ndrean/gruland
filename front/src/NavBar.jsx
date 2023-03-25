import history from "./history";

const navLinks = [
  { path: "/", title: "ServerlessLand examples" },
  { path: "/resources", title: "Resources" },
  { path: "/npm-aws", title: "npm packages" },
];

const Link = ({ path, title, handler }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-blue-300 p-4">
      <div className=" text-2xl m-2">
        <a href={path} onClick={handler}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default function NavBar({ children }) {
  function handleNav(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  return (
    <main className="flex h-screen bg-amber-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex flex-wrap  bg-blue-300">
          {navLinks.map(({ path, title }) => (
            <Link key={title} path={path} title={title} handler={handleNav} />
          ))}
        </div>
        {children}
      </div>
    </main>
  );
}
