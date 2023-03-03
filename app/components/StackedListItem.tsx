import { useEffect, useState} from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import { useFetcher } from "@remix-run/react";
import { createCookie } from "@remix-run/node";
interface Tag {
    id: string;
    name: string;
    color: string;
}
interface ListItem {
    id: string;
    title: string;
    description: string;
    votes: number;
    tags?: Array<Tag>;
}



const numberFormatter = (number: number) => {

  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
    number
  );
};

export default function StackedListItem({listItem, idx}: {listItem: ListItem, idx: number}) {
    const [listItemState, setListItemState] = useState(listItem)
    const fetcher = useFetcher();


    



    useEffect(() => {
      if (fetcher.type === "done" && fetcher.data)
        setListItemState({
            ...listItemState,
            ...fetcher.data,
        })
    }, [fetcher])
    
    return (
      <li key={listItem.id}>
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="truncate text-sm font-medium text-cyan-800">
              <span className="text-gray-500">#{idx + 1}</span> {listItem.title}
            </p>
            {/* <div className="ml-2 flex flex-shrink-0">
                  <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    {listItem.type}
                  </p>
                </div> */}
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="text-sm text-gray-500">{listItem.description}</p>
            </div>
            <fetcher.Form
              action="/list-item/update"
              method="put"
              className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
            >
              <button
                type="submit"
                name="up-vote"
                className="mr-1 h-5 w-5 flex-shrink-0 text-gray-400 hover:text-green-500 disabled:text-green-500"
                value={listItem.id}
              >
                <ArrowUpIcon />
              </button>
              <p className="flex items-center text-sm text-gray-500">
                {numberFormatter(listItemState.votes)}
              </p>
              <button
                type="submit"
                name="down-vote"
                value={listItem.id}
                className="disabled:text-rose-600 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 hover:text-rose-600"
              >
                <ArrowDownIcon />
              </button>
            </fetcher.Form>
          </div>
        </div>
      </li>
    );
}
