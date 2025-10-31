import { OutputData } from '@editorjs/editorjs';
export type { OutputData };
export interface EditorBlock {
    id?: string;
    type: string;
    data: any;
}
export interface EditorData {
    time?: number;
    blocks: EditorBlock[];
    version?: string;
}
