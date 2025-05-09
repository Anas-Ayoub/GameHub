import { Select } from '@chakra-ui/react'
import React from 'react'

interface Props {
  onSelectOrder: (order: string) => void;
}

const OrderSelector = ({onSelectOrder}: Props) => {

  const options = [
    {value: '', label: 'Relevance'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release Date'},
    {value: '-created', label: 'Created Date'},
    {value: '-updated', label: 'Updated Date'},
    {value: 'added', label: 'Added'},
    {value: '-metacritic', label: 'Metacritic'},
  ]

  return (
    <Select width="200px" onChange={(e) => onSelectOrder(e.target.value)}>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </Select>
  )
}

export default OrderSelector