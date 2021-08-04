export type Post={
    name:string,
    category:object,
    releasedAt:string
}

export type SearchItem={
    label:string,
    category:string,
    filterName ?:string,
    filterItems?:[object],
    pinned:boolean,
    onDelete ?: Function,
    onSelect ?: Function,

}
export type PinnedSearch={
    id:number,
    categoryId:number,
    label:string
}