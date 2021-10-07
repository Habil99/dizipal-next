import css from './404.module.css'

const Custom404 = () => {
  return (
    <div className={css.notFound_wrapper}>
      <div className={css.notFound_content}>
        <h1 className={css.notFound_title}>404</h1>
        <h2 className={css.notFound_text}>This page could not be found</h2>
      </div>
    </div>
  )
}

Custom404.getLayout = page => {
  return (
    <div>
      {page}
    </div>
  )
}

export default Custom404;
