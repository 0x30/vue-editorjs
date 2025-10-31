import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { JSX } from 'vue/jsx-runtime';
import { OutputData } from '@editorjs/editorjs';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

export declare const Editor: DefineComponent<ExtractPropTypes<    {
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
}>, () => JSX.Element, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
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
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

/**
 * Editor.js English language pack
 */
export declare const enUS: {
    messages: {};
};

export declare type OnChangeCallback = (data: OutputData) => void;

export declare type OnReadyCallback = () => void;

export { OutputData }

export declare type UploadFunction = (file: File) => Promise<UploadResponse>;

export declare interface UploadResponse {
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

/**
 * Editor.js 中文语言包
 */
export declare const zhCN: {
    messages: {
        ui: {
            blockTunes: {
                toggler: {
                    'Click to tune': string;
                    'or drag to move': string;
                };
            };
            inlineToolbar: {
                converter: {
                    'Convert to': string;
                };
            };
            toolbar: {
                toolbox: {
                    Add: string;
                    Filter: string;
                    'Nothing found': string;
                };
            };
            popover: {
                Filter: string;
                'Nothing found': string;
            };
        };
        toolNames: {
            Text: string;
            Heading: string;
            List: string;
            Warning: string;
            Checklist: string;
            Quote: string;
            Code: string;
            Delimiter: string;
            'Raw HTML': string;
            Table: string;
            Link: string;
            Marker: string;
            Bold: string;
            Italic: string;
            InlineCode: string;
            Image: string;
            Embed: string;
            Underline: string;
            Attaches: string;
            Attachment: string;
        };
        tools: {
            warning: {
                Title: string;
                Message: string;
            };
            link: {
                'Add a link': string;
            };
            stub: {
                'The block can not be displayed correctly.': string;
            };
            image: {
                Caption: string;
                'Select an Image': string;
                'With border': string;
                'Stretch image': string;
                'With background': string;
            };
            code: {
                'Enter a code': string;
            };
            linkTool: {
                Link: string;
                "Couldn't fetch the link data": string;
                "Couldn't get this link data, try the other one": string;
                'Wrong response format from the server': string;
            };
            header: {
                Header: string;
                'Heading 1': string;
                'Heading 2': string;
                'Heading 3': string;
                'Heading 4': string;
                'Heading 5': string;
                'Heading 6': string;
            };
            paragraph: {
                'Enter something': string;
            };
            list: {
                Ordered: string;
                Unordered: string;
            };
            table: {
                'Add column to left': string;
                'Add column to right': string;
                'Delete column': string;
                'Add row above': string;
                'Add row below': string;
                'Delete row': string;
                Heading: string;
                'With headings': string;
                'Without headings': string;
            };
            quote: {
                'Enter a quote': string;
                'Enter caption': string;
            };
            checklist: {
                Checklist: string;
            };
            embed: {
                'Enter a caption': string;
            };
            attaches: {
                'Select file to upload': string;
                'File title': string;
                'File name': string;
                'File size': string;
                Download: string;
                'Attach file': string;
            };
            attachment: {
                'Select file to upload': string;
                'File title': string;
                'File name': string;
            };
            raw: {
                'Enter HTML code': string;
            };
        };
        blockTunes: {
            delete: {
                Delete: string;
                'Click to delete': string;
            };
            moveUp: {
                'Move up': string;
            };
            moveDown: {
                'Move down': string;
            };
        };
    };
};

export { }
