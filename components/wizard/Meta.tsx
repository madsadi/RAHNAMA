import React from "react";
import {Filter} from "../../types";
import styled from "styled-components";

const FilterBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const FilterRow=(props: {label:string, value:any, unit:string} )=>{
    return (
        <div>
            <FilterBox className="meta">
                <div>{props.label}</div>
                <div>{props.value}</div>
                <div>{props.unit}</div>
            </FilterBox>
        </div>
    )
}
FilterRow.defaultProps={
    unit:'عدد'
}
export default FilterRow