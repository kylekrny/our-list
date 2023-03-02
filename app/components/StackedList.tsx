import { ListItem } from "@prisma/client";
import StackedListItem from "./StackedListItem";

export default function StackedList({listItems}: {listItems: Array<ListItem> }) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md mt-10">
      <ul className="divide-y divide-gray-200">
        {listItems.map((listItem, idx) => (
            <StackedListItem listItem={listItem} idx={idx}  key={listItem.id}/>
        ))}
      </ul>
    </div>
  );
}
