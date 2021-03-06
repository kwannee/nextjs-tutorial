import { Menu } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Gnb(){
    const [activeItem, setActiveItem] = useState("home")
    const router = useRouter();

    const goLink = (e,data) => {
        setActiveItem(data.name)
        if(data.name === "home") {
            router.push('/')
        }else{
            router.push(`/${data.name}`)
        }
    } 
    return (
    <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={goLink}
        />

      </Menu>
    )
}