import type { ActionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const summary = formData.get("summary");

    console.log(name, summary)

    return {name};
};
