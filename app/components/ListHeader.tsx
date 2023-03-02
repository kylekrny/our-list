import { PlusIcon } from "@heroicons/react/20/solid";
interface List {
  title: any
}

export default function ListHeader({title}: List) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between mt-10">
      <div className="min-w-0 flex-1">
        <h1 className="text-5xl font-bold leading-7 text-gray-900 sm:truncate sm:text-5xl sm:tracking-tight">
          {title}
        </h1>
        {/* <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Closing on January 9, 2020
          </div>
        </div> */}
        <div className="flex flex-col sm:mt-3 sm:flex-row sm:flex-wrap sm:space-x-6">
          <p className="text-sm text-gray-500 w-10/12 sm:w-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            minima repellendus quibusdam recusandae alias sit! Placeat qui et
            quibusdam, eligendi provident aliquam.
          </p>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon
              className="mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Create Idea
          </button>
        </span>
      </div>
    </div>
  );
}
