import {useEffect,useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import ItemList from '../src/components/ItemList'
import { Divider, Header } from 'semantic-ui-react'

export default function Home() {
  const [dataList, setDataList] = useState([])

  const API_URL = 
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  
  const getData = () =>{
    axios.get(API_URL)
    .then(res =>{
      setDataList(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Head>
        <title>HOME | 넥스트js</title>
      </Head>
      <Header style={{paddingTop:20,textAlign:'center'}} as="h3">베스트 상품</Header>
      <Divider/>
      <ItemList list={dataList.slice(0,9)}/>
      <Header style={{paddingTop:20,textAlign:'center'}} as="h3">새로 나온 상품</Header>
      <Divider/>
      <ItemList list={dataList.slice(9)}/>
    </div>
  )
}
