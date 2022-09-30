import React from 'react';
import './Style.css';
interface DataGridProps {
    data: {
        name?:string 
        level?:string 
        vocation?:string 
        sex?:string 
        world?:string 
        residence?:string 
    }
}

const DataGrid = ({data}: DataGridProps) => {
    const { name, level, vocation, sex, residence, world } = data;

    return (
        <div className='datagrid'>
            <ul>
                <li>
                    Name: {name}
                </li>
                <li>
                    Level: {level}
                </li>
                <li>
                   Vocation: {vocation}
                </li>
                <li>
                   Sex: {sex}
                </li>
                <li>
                   Residence: {residence}
                </li>
                <li>
                   World: {world}
                </li>
            </ul>
        </div>
    )
}

export default DataGrid;