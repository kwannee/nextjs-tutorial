import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/components/Footer'
import Top from '../src/components/Top'

function MyApp({ Component, pageProps }) {
  return <div style={{width:1000,margin:'0 auto'}}>
    <Top/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp

/**
 * 여기서 Component는 현재 페이지를 의미,page 전환시 변경된다.
 * pageProps는 datafetching메서드를 통해 미리 가져온 초기 객체
 * 
 * 
  app.js를 통하면 페이지 전환시 레이아웃을 유지할 수 있다.
  페이지 전환시 상태값을 유지할 수 있다.
  componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있ㄷ.
  추가적인 데이터를 페이지로 주입시킬수 있다.
  글로벌 css는 이곳에 선언한다.
 */