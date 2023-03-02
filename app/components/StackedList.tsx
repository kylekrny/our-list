import type { ListItem } from "@prisma/client";
import StackedListItem from "./StackedListItem";

export default function StackedList({listItems}: {listItems: Array<ListItem> }) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md mt-10">
      <ul className="divide-y divide-gray-200">
        {listItems.length > 0 ? (
          listItems.map((listItem, idx) => (
            <StackedListItem listItem={listItem} idx={idx} key={listItem.id} />
          ))
        ) : (
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                No List Items
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                 To start collaborating use the Create Idea Button.
                </p>
              </div>
            </div>
          </div>
        )}
        {}
      </ul>
    </div>
  );
}
