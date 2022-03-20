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
                    Nome: {name}
                </li>
                <li>
                    Level: {level}
                </li>
                <li>
                   Vocação: {vocation}
                </li>
                <li>
                   Sexo: {sex}
                </li>
                <li>
                   Residência: {residence}
                </li>
                <li>
                   Mundo: {world}
                </li>
            </ul>
        </div>
    )
}

DataGrid.propTypes = {
    data: PropTypes.object
}

export default DataGrid;