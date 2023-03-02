import type { ActionArgs } from "@remix-run/node";
import { updateVotes } from "~/models/list-item.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const upVote = formData.get("up-vote");
  const downVote = formData.get("down-vote");


  if (upVote) {
    let value = await updateVotes(upVote, true)
    return value;
  } else if (downVote) {
    let value = await updateVotes(downVote, false);
    return value;
  } else {
    throw new Error("vote not counted")
  }
};
