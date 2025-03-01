import { BLOCK } from "./block.interface";
import { PERSONAL } from "./personal.interface";

export interface ABOUT {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    personal: PERSONAL;
    blocks: BLOCK[];
}