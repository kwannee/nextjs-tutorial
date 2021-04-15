import React, { useEffect } from 'react'
import { Button, Divider } from 'semantic-ui-react'

function Item({item}) {
    const {image_link,name,price,description,product_type} = item
    return (
        <div>
            <div style={{display:'flex',alignItems:'center'}}>
                <div>
                    <img src={image_link} alt={name} />
                </div>
                <div style={{
                    display:'flex',
                    height:'188px',
                    flexDirection:'column',
                    paddingLeft:'2rem',
                    justifyContent:'space-between'
                    }}>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',height:'100%'}}>
                            <strong style={{paddingBottom:'1rem'}}>{name}</strong>
                            <strong style={{fontSize:'2rem',color:'#00bcd4'}}>${price}</strong>
                            <strong style={{paddingTop:'1rem'}}>{product_type}</strong>
                        </div>

                    <Button style={{width:'80px',marginTop:'1.5rem',fontSize:'0.8rem',padding:'0.8rem 0'}} color="orange">구매하기</Button>
                </div>
            </div>
            <Divider/>
            <div style={{paddingTop:'3rem'}}>
                <h3>Description</h3>
                <p style={{fontSize:'16px',whiteSpace:'break-spaces'}}>{description}</p>
            </div>
        </div>
    )
}

export default Item
