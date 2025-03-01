import { TECH } from "./tech.interface";

export type BLOCK = RICHTEXT | QUOTE | TECHS;

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

export interface TECHS {
    __component: "shared.techs";
    id: number;
    techs: TECH[];
}