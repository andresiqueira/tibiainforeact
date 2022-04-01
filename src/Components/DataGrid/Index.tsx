import React, { FC } from 'react';
import PropTypes from 'prop-types'
import './Style.css';

interface DataGridProps {
    data: any
}

const DataGrid: FC<DataGridProps> = ({data}: DataGridProps) => {
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

DataGrid.propTypes = {
    data: PropTypes.object
}

export default DataGrid;