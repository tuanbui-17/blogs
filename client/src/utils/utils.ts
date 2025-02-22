export const extractTableOfContents = (markdown: string) => {
    const regexReplaceCode = /(```.+?```)/gms;
    const regexRemoveLinks = /\[(.*?)\]\(.*?\)/g;
    
    const markdownWithoutLinks = markdown.replace(regexRemoveLinks, "");
    const markdownWithoutCodeBlocks = markdownWithoutLinks.replace(
        regexReplaceCode,
        ""
    );
    const regXHeader = /#{1,6}.+/g;
    const titles = markdownWithoutCodeBlocks.match(regXHeader) || [];
    const tableOfContents = titles.map((item) => {
        const level = item.match(/#/g)?.length;
        const title = item.replace(/#/g, "").trim();
        const anchor = `#${title.replace(/\s/g, "-").toLowerCase()}`;
        const id = `${level}-${title.replace(/\s/g, "-").toLowerCase()}`;
        return { level, title, anchor, id };
    });
    
    return tableOfContents;
};