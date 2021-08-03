import {
    QueryClient,
    QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import React from "react";
const queryClient = new QueryClient()
interface Props{}

const  QueryProviderNiazmandiha:React.FC<Props>=(props)=> {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {props.children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
export default QueryProviderNiazmandiha