import React from 'react';
import './Style.css';
interface DataGridProps {
    data: {
        name?: string
        level?: string
        vocation?: string
        sex?: string
        world?: string
        residence?: string
    }
}

const Card = ({ data }: DataGridProps) => {
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
                    Sexo: {sex === 'male' ? 'Masculino' : 'Feminino'}
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

export default Card;