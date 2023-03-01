import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";

const positions = [
  {
    id: 1,
    idx: 1,
    title: "Cheap Gaming PC Build",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    type: "Full-time",
    location: "Remote",
    votes: 10025,
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "iPhone 45 review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    type: "Full-time",
    location: "Remote",
    closeDate: "2020-01-07",
    votes: 9025,
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "RC Plane Wars",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    type: "Full-time",
    location: "Remote",
    votes: 8065,
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];

const numberFormatter = (number) => {
    return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(number);
}

export default function StackedList() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md mt-10">
      <ul className="divide-y divide-gray-200">
        {positions.map((position, idx) => (
          <li key={position.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium text-indigo-600">
                  <span className="text-gray-500">#{idx + 1}</span>{" "}
                  {position.title}
                </p>
                <div className="ml-2 flex flex-shrink-0">
                  <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    {position.type}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="text-sm text-gray-500">
                    {position.description}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <button>
                    <ArrowUpIcon className="mr-1 h-5 w-5 flex-shrink-0 text-gray-400 hover:text-green-500" />
                  </button>
                  <p className="flex items-center text-sm text-gray-500">
                    {numberFormatter(position.votes)} votes
                  </p>
                  <button>
                    <ArrowDownIcon className=" ml-1 h-5 w-5 flex-shrink-0 text-gray-400 hover:text-rose-600" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
