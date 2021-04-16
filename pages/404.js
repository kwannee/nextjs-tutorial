import React from 'react'
import { Icon } from 'semantic-ui-react'
//404.js가 없어도 _error.js에서 처리를 할 수 있지만 404는 static으로 있는게 좋다.
function Error404() {
    return (
        <div style={{padding:'200px 0',textAlign:'center',fontSize:30}}>
            <Icon name="warning circle" color="red"/>
            404 : 페이지를 찾을 수 없습니다.
        </div>
    )
}

export default Error404
