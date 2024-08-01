export interface TableView {
    view: string;
    scroll: string;
    width: number;
    autoheight: boolean;
    select: boolean;
    columns: TableElement[]
    on: TableElement
}

export interface TableElement{
    id: string;
    fillspace?: number;
    width?: number;
    onAfterSelect?: (id: string) => void
}