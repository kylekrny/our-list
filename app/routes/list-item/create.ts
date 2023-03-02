import type { ActionArgs } from "@remix-run/node";
import { createListItem } from "~/models/list-item.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const title = formData.get("name");
  const description = formData.get("summary");
  const slug = formData.get("slug")

  const listItem = {
    title,
    description,
    listId: slug,
  }

  createListItem(listItem).then((res) => {
    return res
  }).catch(err => {
    throw new Error("failed to create List Item")
  })

};
