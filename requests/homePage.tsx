import {query, RequestOptions} from "../utils/request";
export const loadAdvertises=async function (data?:any,options?:RequestOptions){
    return await query('search', data,{
        page:true,
        count:true,
        perPage:true,
        data:{
            name:true,
            category:{
                categoryString:true,
                categoryId:true
            },
            releasedAt:true
        }

    }, options)
}