import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import api from '../../../service/api'

export default function Trucks() {

  const getTrucks = async () => {
    try {
      const data = api.get('caminhoes/marcas')
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getTrucks()

  }, [])
  return (
    <div>
      <Card />
      <h1>Caminhões</h1>
    </div>
  )
}
