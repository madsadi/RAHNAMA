import React from "react";
import {Filter} from "../../types";
import styled from "styled-components";
import {Label} from "react-query/types/devtools/Explorer";

const FilterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

const Div = styled.div`
    display: flex;
    font-size: 12px;
    
`

const Value = styled.div`
    margin-left:10px;
    font-size: 12px;
`
const Text=styled.div`
    font-size: 12px;
    opacity: 32%;
`
const FilterRow=(props: {label:string, value:any, unit:string} )=>{
    return (
        <div>
            <FilterBox className="meta">
                <Text>{props.label}:</Text>
                <Div>
                    <Value>{props.value}</Value>
                    <Text>{props.unit}</Text>
                </Div>
            </FilterBox>
        </div>
    )
}
FilterRow.defaultProps={
    unit:'عدد'
}
export default FilterRow