import React, {useEffect, useState}from 'react'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

    
       

        const [datos, setDatos] = useState([])

        const {tortasId} = useParams()
        
        useEffect(() => {
          const querydb = getFirestore()
          const queryCollection = collection(querydb, 'productos')
          
          if (tortasId) {
            const queryFilter = query(queryCollection, where('categoria', '==', tortasId))
            getDocs(queryFilter)
            .then (res => setDatos(res.docs.map(productos => ({id: productos.id, ...productos.data()})))) 

          } else {
            getDocs(queryCollection)
            .then (res => setDatos(res.docs.map(productos => ({id: productos.id, ...productos.data()})))) 

          }
          

        }, [tortasId])
        
      return (
        <>
                  <ItemList datos={datos} />
        </>
      )
    }

export default ItemListContainer