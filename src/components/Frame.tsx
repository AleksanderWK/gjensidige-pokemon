import React from "react";

interface Props{
    children: JSX.Element
    width: number;
    height: number;
    color: any;
    radius?: number;
    borderSize: number;
}

export default function Frame(props: Props): JSX.Element{
    return(
        <div className="frameBody" style={{width: props.width, height: props.height, backgroundColor: props.color, borderRadius: props.radius, padding: props.borderSize}}>
            {props.children}
        </div>
    );
}