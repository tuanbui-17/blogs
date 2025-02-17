import { BLOG } from "@/interface/blog.interface";

export const BlogPostsData: BLOG[] = [
  {
    id: 1,
    documentId: "1",
    title: "Showing comments using Bluesky",
    description: "React",
    slug: "react",
    createdAt: "2021-10-01T04:00:00.000Z",
    updatedAt: "2021-10-01T04:00:00.000Z",
    publishedAt: "2021-10-01T04:00:00.000Z",
    type: "React",
    readTime: "1 min",
    cover: {
      url: "https://source.unsplash.com/random",
    },
    author: {
      name: "John Doe",
    },
    category: {
      name: "React",
      slug: "react",
    },
    blocks: [
      {
        __component: "shared.rich-text",
        id: 14,
        body: "## Probant \n\nse Lorem markdownum negat. Argo *saxa* videnda cornuaque hunc qui tanta spes teneas! Obliquis est dicenti est salutat ille tamen iuvenum nostrae dolore. - Colores nocituraque comitata eripiunt - Addit quodcunque solum cui et dextram illis - Nulli meus nec extemplo ille ferebat pressit Se blandita fulvae vox gravem Pittheus cesserunt sanguine herbis tu comitum tenuit. Sui in ruunt; Doridaque maculosae fuissem! Et loqui. \n\n## Abit sua\n\nse Lorem markdownum negat. Argo *saxa* videnda cornuaque hunc qui tanta spes teneas! Obliquis est dicenti est salutat ille tamen iuvenum nostrae dolore. - Colores nocituraque comitata eripiunt - Addit quodcunque solum cui et dextram illis - Nulli meus nec extemplo ille ferebat pressit Se blandita fulvae vox gravem Pittheus cesserunt sanguine herbis tu comitum tenuit. Sui in ruunt; Doridaque maculosae fuissem! Et loqui. ",
      },
      {
        __component: "shared.quote",
        id: 8,
        title: "Thelonius Monk",
        body: "You've got to dig it to dig it, you dig?",
      },
      {
        __component: "shared.rich-text",
        id: 15,
        body: "## Spatiantia astra \n\nFoeda, medio silva *errandum*: onus formam munere. Mutata bibulis est auxiliare arces etiamnunc verbis virgineo Priamidas illa Thescelus, nam fit locis lucis auras. Exitus hospes gratulor ut pondere [speslimite](http://www.curas.io/figuram); quid habent, Avernales faciente de. Pervenit Ino sonabile supplex cognoscenti vires, Bacchumque errat miserarum venandi dignabere dedisti. Discrimina iuncosaque virgaque tot sine superest [fissus](http://quos.org/sitet.aspx). Non color esset potest non sumit, sed vix arserat. Nisi immo silva tantum pectusque quos pennis quisquam artus!",
      },
    ],
  },
];
