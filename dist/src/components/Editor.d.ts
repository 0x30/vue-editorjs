import { PropType } from 'vue';
import { OutputData } from '@editorjs/editorjs';
export interface UploadResponse {
    success: 1 | 0;
    file: {
        url: string;
        name?: string;
        size?: number;
        title?: string;
        extension?: string;
        [key: string]: any;
    };
}
export type UploadFunction = (file: File) => Promise<UploadResponse>;
export type OnChangeCallback = (data: OutputData) => void;
export type OnReadyCallback = () => void;
export type { OutputData };
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<OutputData>;
        required: false;
    };
    onUploadImage: {
        type: PropType<UploadFunction>;
        required: false;
    };
    onUploadFile: {
        type: PropType<UploadFunction>;
        required: false;
    };
    onChange: {
        type: PropType<OnChangeCallback>;
        required: false;
    };
    onReady: {
        type: PropType<OnReadyCallback>;
        required: false;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<OutputData>;
        required: false;
    };
    onUploadImage: {
        type: PropType<UploadFunction>;
        required: false;
    };
    onUploadFile: {
        type: PropType<UploadFunction>;
        required: false;
    };
    onChange: {
        type: PropType<OnChangeCallback>;
        required: false;
    };
    onReady: {
        type: PropType<OnReadyCallback>;
        required: false;
    };
}>> & Readonly<{}>, {
    placeholder: string;
    readOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
