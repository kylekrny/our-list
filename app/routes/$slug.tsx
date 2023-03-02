import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ListHeader from "~/components/ListHeader";
import Navigation from "~/components/Navigation";
import StackedList from "~/components/StackedList";
import { getList } from "~/models/list.server";
import invariant from "tiny-invariant";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const list = await getList(params.slug)
  invariant(list, `List not found: ${params.slug}`);
  return json({ list });
};

export default function ListSlug() {
  const { list } = useLoaderData<typeof loader>();
  return (
    <>
    <Navigation/>
    <div className="container mx-auto sm:px-6 lg:px-8">
      <ListHeader list={list} />
      <StackedList />
    </div>
    </>
  );
}
