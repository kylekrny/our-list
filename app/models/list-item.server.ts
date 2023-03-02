import { prisma } from "~/db.server";

type ListItem = {
    title: string,
    description: string,
    listId: string,
}

export async function createListItem(listItem: ListItem) {
  return prisma.listItem.create({ data: listItem });
}


export async function updateVotes() {
    return prisma.listItem.update
}
