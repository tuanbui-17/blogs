export type BLOCK = RICHTEXT | QUOTE;

export interface RICHTEXT {
    __component: "shared.rich-text";
    id: number;
    body: string;
}

export interface QUOTE {
    __component: "shared.quote";
    id: number;
    title: string;
    body: string;
}

