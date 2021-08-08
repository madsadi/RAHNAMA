

export type Post={
    name:string,
    category:object,
    releasedAt:string
}

export type SearchItemType={
    name:string,
    category: { categoryString:string, categoryId:number },
    filterName ?:string,
    filterItems?:[object],
    pinned:boolean,
    onDelete ?: Function,
    onSelect ?: Function,
    onPin ?: Function,

}
export type PinnedSearch={
    id:number,
    categoryId:number,
    label:string
}