import { prisma } from "~/db.server";

type List = {
  title: string;
};

const titleToSlugConverter = (title: string) => {
  const trimmedString = title.trim();
  const slug = trimmedString.replace(/\s+/g, "-").toLowerCase();
  return slug;
};

export async function createList(data: List) {
  const { title } = data;

  const slug = titleToSlugConverter(title);

  const list = {
    slug,
    title,
  }

  return prisma.list.create({ data: list });
}


export async function getList(slug: string) {
  return prisma.list.findUnique({where: { slug }})
}

