import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import api from '../../../service/api'
import { GetServerSideProps } from 'next'

export default function Cars() {
  const [carsData, setCarsData] = useState([])

  const getCars = async () => {
    try {
      const data = await api.get('carros/marcas')
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getCars()

  }, [])
  return (
    <div>
      <Card />
      <h1>Carros</h1>
    </div>
  )
}