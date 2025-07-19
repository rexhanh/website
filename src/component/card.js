export default function Card(props) {
  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div class="p-4">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        {props.link && (
          <a
            href={props.link}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#428EC5] rounded-lg hover:bg-[#49494B] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
}
