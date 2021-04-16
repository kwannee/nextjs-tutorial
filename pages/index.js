import {useEffect,useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import ItemList from '../src/components/ItemList'
import { Divider, Header, Loader } from 'semantic-ui-react'

export default function Home() {
  const [dataList, setDataList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  
  const getData = () =>{
    axios.get(API_URL)
    .then(res =>{
      setDataList(res.data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Head>
        <title>HOME | 넥스트js</title>
        <meta name="description" content="최광희 nextjs 연습 홈입니다."></meta>
      </Head>
      {isLoading
        ?
        <div style={{padding:'300px 0'}}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div> 
        : 
        <div>
          <Header style={{paddingTop:20,textAlign:'center'}} as="h3">베스트 상품</Header>
          <Divider/>
          <ItemList list={dataList.slice(0,9)}/>
          <Header style={{paddingTop:20,textAlign:'center'}} as="h3">새로 나온 상품</Header>
          <Divider/>
          <ItemList list={dataList.slice(9)}/>
        </div>
      }
    </div>
  )
}
