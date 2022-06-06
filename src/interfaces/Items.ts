export interface ItemsProps {
    items: {
        id: number;
        task: string;
        checked: boolean;
    }[]
}

export interface ItemProp {
    id: number;
    task: string;
}