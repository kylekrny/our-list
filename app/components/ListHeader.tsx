import { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Modal from "./Modal";
import CreateItemForm from "./forms/CreateItemForm";
interface List {
  title: string,
  description: string,
}

export default function ListHeader({list}: List) {
  const [createItemModalOpen, setCreateItemModalOpen] = useState(false);

  const toggleModal = () => {
    setCreateItemModalOpen(!createItemModalOpen);
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-between mt-10">
      <div className="min-w-0 flex-1">
        <h1 className="text-5xl font-bold leading-7 text-gray-900 sm:truncate sm:text-5xl sm:tracking-tight">
          {list.title}
        </h1>
        {/* <div className="flex flex-col sm:mt-3 sm:flex-row sm:flex-wrap sm:space-x-6">
          <p className="text-sm text-gray-500 w-10/12 sm:w-100">
            {list.description ? list.description : "Enter Description"}
          </p>
        </div> */}
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:block">
          <button
            type="button"
            onClick={toggleModal}
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon
              className="mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Create Idea
          </button>
          <Modal open={createItemModalOpen} setOpen={toggleModal}>
            <CreateItemForm setOpen={toggleModal} slug={list.slug}/>
          </Modal>
        </span>
      </div>
    </div>
  );
}
