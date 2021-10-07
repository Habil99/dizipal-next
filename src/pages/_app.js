import "bootstrap/dist/css/bootstrap.min.css"
import "@/core-ui/main.scss"
import {wrapper} from "@/redux/store";

import {Layout} from "@/components";

function MyApp({Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    getLayout(
      <Component {...pageProps} />
    )
  )
}

export default wrapper.withRedux(MyApp)
