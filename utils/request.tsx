import axios from 'axios';
import {jsonToGraphQLQuery} from 'json-to-graphql-query';
import parser, {IResult} from "ua-parser-js";

export const baseUrl = 'https://rahnama.com/';
export const imageUrl = 'https://rahnama.com/uploads/';
export const apiUrl = 'http://192.168.90.56:8089/rahnamagql';



const userAgent = {} as IResult;

type PageDataResponse = {
    [key in string | number]: {
        condition: object;
        data: DataStructure
    };
} & {
    agent: string;
};
type DataStructure={
    [key in string | number]: object|boolean;
} &{
    data?:     object,
    '__args'?: object

}

type QueryGraph = {
    [key in string | number]: DataStructure;
} ;

export type RequestOptions={agent?: any, token?:string}



// }
/**
 * @param {object} pageDataResponse resource to query
 */

export const multipleQuery=async (pageDataResponse:PageDataResponse)=>{
    if (typeof pageDataResponse!=='object'){
        return
    }
    let result='',headers:any;
    Object.keys(pageDataResponse).map(page=>{
        let ua={} as IResult;
        if (page==='agent'){
            ua = parser(pageDataResponse.agent);
            headers = {
                ...headers,
                '__os': typeof ua.os.name!=='undefined'? ua.os.name:'set',
                '__os_v':typeof ua.os.version!=='undefined'? ua.os.version:'set',
                '__agent': typeof ua.browser.name!=='undefined' ? ua.browser.name:'set',
                '__agent_v': typeof ua.browser.version!=='undefined' ? ua.browser.version:'set',
                'map_code': '999-99901-2601'


            };
        }else if (page==='token') {
            headers['authorization_key'] = pageDataResponse.token;
        }else{
            let query={} as QueryGraph;
            query[page]={} as DataStructure;
            // console.log(pageDataResponse[page])
            query[page]={};
            for (let i in pageDataResponse[page]['data']) {
                query[page][i] = pageDataResponse[page]['data'][i];
            }
            // console.log(Object.keys(pageDataResponse[page]['condition']))
            if (Object.keys(pageDataResponse[page]['condition']).length>0 ){
                query[page]['__args'] = pageDataResponse[page]['condition']
            }
            const graphql = jsonToGraphQLQuery(query, { pretty: true });

            result=result+ `\n${graphql}`



        }

    })
    // console.log(result,headers)
    let res=axiosBase.post('', { query: `{${result}}` }, { headers })
    const { data } = await res;
    return data
}

const axiosBase = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    validateStatus: function () {
        return true;
    }
});


export const get = async (path:string) => {
    try {
        const res = await axiosBase.get(path);
        const { data } = await res;
        return data;
    } catch (error) {
        // console.log("error", error);
    }
}

/**
 * [queryBuilder description]
 * @param  {string} page resource or entity that u query to it
 * @param  {object} data an object that describe condition and filters
 * @param  {object} res an object that describe output and filed you want
 * @param  {object} option use for headers
 * @return {string}      [graphql query]
 */
const queryBuilder = (page:string, data:object|null, res:object|null, option?: RequestOptions) => {
    let ua = {} as IResult;
    if (option && 'agent' in option) {
        ua = parser(option.agent);
    }
    else {
        if (Object.keys(userAgent).length === 0) {
            ua = parser();
        }
        else {
            ua = userAgent;
        }
    }

    const headers:any = {
        '__os': ua.os.name,
        '__os_v':typeof ua.os.version!=='undefined'? ua.os.version:'set',
        '__agent': ua.browser.name,
        '__agent_v': ua.browser.version,
        'map_code': '999-99901-2601'


    };
    if (option && 'token' in option) {
        headers['authorization_key'] = option.token;
    }

    const query = {} as QueryGraph;;
    query[page]={} as DataStructure;
    if (data != null) {
        query[page].__args = data;
    }
    if (res!== null){
        if (Array.isArray(res)) {
            for (let i of res) {
                query[page][i] = true;
            }
        }
        else {
            for (let i in res) {
                // @ts-ignore
                query[page][i] = res[i];
            }
        }
    }

    const graphql = jsonToGraphQLQuery(query, { pretty: true });
    // console.log(graphql,headers);
    return { graphql, headers }
}

/**
 * @param {string} page resource to query
 * @param {object} data condition data body to send
 * @param {object}  res  response fields
 * @param {object} option? use for headers
 * @returns {Promise<*>}
 */
export const query = async (page: string, data: object | null, res: object | null = null, option?: RequestOptions): Promise<any> => {
    const { graphql, headers } = queryBuilder(page, data, res, option);
    try {
        console.log('mahi',graphql,headers)
        const res = axiosBase.post('', { query: `{${graphql}}` }, { headers });
        const { data } = await res;

        return data.data[page];
    } catch (error) {
        console.log(' error',error)
        throw error
    }
}
/**
 * @param {string} page resource to query
 * @param {object} data request data body to send
 * @param {array}  res  response fields
 * @param {object} option use for headers
 * @returns {Promise<*>}
 */
export const mutation = async (page:string, data:object, res: object | null = null, option?:RequestOptions) => {
    const { graphql, headers } = queryBuilder(page, data, res, option);
    try {
        const res = axiosBase.post('', { query: `mutation{${graphql}}` }, { headers });
        const { data } = await res;
        // console.log('response data',data,graphql,headers)
        return data.data[page];
    } catch (error) {
        console.log("error", error);
        throw error
    }
}
