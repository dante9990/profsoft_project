import React, {ReactComponentElement} from "react";
import {Bar} from "../Bar";
import {Table} from "../Table/Table";


interface Props {
    Child: any;
    title: string
}
export const Wrapper = ({Child, title}:Props) => {
    return  <>
        <Bar />
        <Child />
    </>
}