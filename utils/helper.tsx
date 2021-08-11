import SearchItem from "../components/search/SearchItem";
import {SearchItemType} from "../types";

export function analyzeSearchData(searchItems:SearchItemType[]){
    return []
}
export const uniqueArrayByProperty = (array:Array<any>, callback:Function) => {
    return array.reduce((prev, item) => {
        const v = callback(item);
        if (v && !prev[v]) prev[v]=item
        return prev
    }, {})
}