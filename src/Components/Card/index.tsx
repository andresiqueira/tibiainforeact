import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react'
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
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { name, level, vocation, sex, residence, world } = data;

    useEffect(() => {
        if(data) {
            setIsOpen(true)
        }
    }, [data])
    
    if (!isOpen) {
        return null
    }

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
            <button className='close-button' onClick={() => setIsOpen(false)}><Icon width={50} height={50} style={{color: "#cda00e", background: "#e1e1e1", borderRadius: "100%"}} icon="carbon:close-filled" /></button>

        </div>
    )
}

export default Card;