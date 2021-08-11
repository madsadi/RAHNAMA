export type Filter={
    label:string,
    options:{value:string}[],
    is_visibleoncard:boolean,
}

export type Post={
    name:string,
    badges:string[] | null,
    category:object,
    releasedAt:string,
    filters:Filter[],
    location:{
        cityString:string
    },
    pictures:{
        thumbnail :{
            thumbnail:string
        }
    }

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
