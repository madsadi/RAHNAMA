

export type Post={
    name:string,
    category:object,
    releasedAt:string
}

export type SearchItemType={
    item:{
        name:string,
        category: { categoryString:string, categoryId:number },
        filterName ?:string,
        filterItems?:[object],
        }
    onDelete ?: Function,
    onSelect ?: Function,
    onPin : Function,

}
export type PinnedSearch={
    id:number,
    categoryId:number,
    label:string
}
