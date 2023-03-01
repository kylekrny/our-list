import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import StackedListItem from "./StackedListItem";

const positions = [
  {
    id: 1,
    idx: 1,
    title: "Cheap Gaming PC Build",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    votes: 10025,
  },
  {
    id: 2,
    title: "iPhone 45 review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    votes: 9025,
  },
  {
    id: 3,
    title: "RC Plane Wars",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    votes: 8065,
  },
];

export default function StackedList() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md mt-10">
      <ul className="divide-y divide-gray-200">
        {positions.map((listItem, idx) => (
            <StackedListItem listItem={listItem} idx={idx}  key={listItem.id}/>
        ))}
      </ul>
    </div>
  );
}
