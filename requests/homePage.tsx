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
            location:{
                cityString:true
            },
            badges:true,
            filters:{
                label:true,
                options:{
                    value:true
                }
            },
            releasedAt:true,
            pictures:{
                thumbnail:{
                    thumbnail:true
                }
            }
        }

    }, options)
}