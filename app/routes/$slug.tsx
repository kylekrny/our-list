import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ListHeader from "~/components/ListHeader";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ slug: params.slug });
};

export default function ListSlug() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <ListHeader title={slug} />
    </div>
  );
}
