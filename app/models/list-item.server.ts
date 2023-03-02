import { prisma } from "~/db.server";

type ListItem = {
    title: string,
    description: string,
    listId: string,
}

export async function createListItem(listItem: ListItem) {
  return prisma.listItem.create({ data: listItem });
}


export async function updateVotes(id: number, increase: boolean) {
    const numId = Number(id)
    const votesValue = increase ? {increment: 1} : {decrement: 1}

    return prisma.listItem.update({where: { id: numId }, data: {votes: votesValue}})
}
