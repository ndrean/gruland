export default function DrawCards({ example, index, handleClick }) {
  return (
    <div
      key={index}
      className="m-3 flex-wrap max-w-sm rounded-lg bg-white p-2 shadow-lg dark:bg-neutral-700 mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-5"
    >
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-600 dark:text-neutral-50">
        <a href={`/${example.id}`} onClick={handleClick}>
          {example.title}
        </a>
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 truncate max-h-8">
        {example.description}
      </p>
    </div>
  );
}
