import {Header} from 'semantic-ui-react'
import Gnb from './Gnb'
export default function Top() {
    return (
    <div>
        {
            /**src에서 처럼 정확한 루트 없이 public 밑에 있는 거시기로 할 수있음
             * public 폴더 이름을 바꾸면 안된다.
             */
        }
        <div style={{display:'flex',paddingTop:20}}>
            <div style={{flex:'100px 0 0'}}>
                <img 
                    style={{display:'block',width:80,height:70,objectFit:'cover'}}
                    src="/images/wonseok.png"
                    alt="logo"
                    />
                </div>
                <Header as="h1">최광희</Header>
            </div>
            <Gnb />
        </div>
    )
}

