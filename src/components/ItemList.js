import { Grid } from 'semantic-ui-react'
import Link from 'next/link'

export default function ItemList({list}) {
    return (
        <div>
           <Grid style={{width:'1000px',margin:0}} columns={3}>
                <Grid.Row >
                {
                    list.map((item)=>(    
                    <Grid.Column key={item.id} style={{display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center',padding:'1rem 0'}}>
                        <Link href={`/view/${item.id}`}>
                          <a>
                            <img style={{margin:'0 auto'}} src={item.image_link} alt={item.name} />
                            <div>
                              <strong>{item.name}</strong>
                              <br/>
                              <div>
                                {item.product_type}
                              </div>
                              <strong style={{color:'#00bcd4'}}>${item.price}</strong>
                            </div>
                          </a>
                        </Link>
                        

                    </Grid.Column>
                ))
                }
                </Grid.Row>
            </Grid>
        </div>
    )
}
