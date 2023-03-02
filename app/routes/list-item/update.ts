import type { ActionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const upVote = formData.get("up-vote");
  const downVote = formData.get("down-vote");

  if (upVote) {
    return {upVote: true};
  } else if (downVote) {
    return {downVote: true};
  } else {
    throw new Error("vote not counted")
  }
};
