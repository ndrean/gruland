export default function DrawCards({ example, index, handleClick }) {
  return (
    <div className="flex justify-center mb-5" key={index}>
      <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          <a href={`/${example.id}`} onClick={handleClick}>
            {example.title}
          </a>
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 truncate max-h-8">
          {example.description}
        </p>
      </div>
    </div>
  );
}
