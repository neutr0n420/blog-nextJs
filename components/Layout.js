import Styles from './Layout.module.css'
const Layout = ({children})=>{
    return <div className={Styles.container}>{children}</div>
}


export default Layout