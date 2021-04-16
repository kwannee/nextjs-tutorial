import React from 'react'

function Error({statusCode}) {
    return (
        <div>
            {statusCode
              ? `An error ${statusCode} occured on server`
              : "An error occured on client"
            }
        </div>
    )
}

Error.getInitialProps = ({res,err})=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode}
}

export default Error
