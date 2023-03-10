import history from "./history";

const navLinks = [{ path: "/", title: "ServerlessLand examples" }];

const Link = ({ path, title, handler }) => {
  return (
    <div className="flex justify-between items-center bg-blue-300 p-4">
      <div className="flex text-4xl m-2">
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
        {navLinks.map(({ path, title }) => (
          <Link key={title} path={path} title={title} handler={handleNav} />
        ))}
        {children}
      </div>
    </main>
  );
}
