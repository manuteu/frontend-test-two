import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import api from '../../../service/api'

export default function Bikes() {

  const getBikes = async () => {
    try {
      const data = api.get('motos/marcas')
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getBikes()

  }, [])
  return (
    <div>
      <Card />
      <h1>Motos</h1>
    </div>
  )
}
