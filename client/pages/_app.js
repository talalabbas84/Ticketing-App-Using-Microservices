import 'bootstrap/dist/css/bootstrap.min.css'
import buildClient from '../api/build-client'
import Header from '../components/Header'


const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Header currentUser={pageProps.currentUser} />
      <Component {...pageProps} />
    </div>
  )
}
AppComponent.getInitialProps = async ({ Component, ctx }) => {
  const client = buildClient(ctx)
  const { data } = await client.get('/api/users/currentuser')
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps, ...data }

}


export default AppComponent
