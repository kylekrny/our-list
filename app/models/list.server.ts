type List = {
    slug: string;
    title: string;
}


const nameToSlugConverter = (name: string) => {
    const trimmedString = name.trim();
    const lowerCase = trimmedString.toLowerCase()
    const kebabCase = lowerCase.replace(" ", "-"); 

    return kebabCase
}

export default function createList(data: any) {

    const { listName } = data;

    const slug = nameToSlugConverter(listName);

    return slug;

}



