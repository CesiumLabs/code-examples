export interface error {
    status: number;
    description: string;
}
export interface post {
    author: {
        name: string;
        uri: string;
    };
    category: {
        term: string;
        label: string;
    };
    content: {
        type: string;
        $t: string;
    };
    id: string;
    link: {
        href: string;
    };
    updated: string;
    published: string;
    title: string;
}
