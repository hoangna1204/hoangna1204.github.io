import Header from './header';
import Footer from './footer';
import Banner from './banner';
import styles from './Layout.module.scss';
import Navigator from "../navigator/navigator";

export default function Layout({children}) {
  return (
    <div style={{height: "100%", width: "100%"}}>
      <Header/>
      <Banner />
      <Navigator/>
      <main className={styles.main} id={"main"}>
        {children}
      </main>
      <Footer/>
    </div>
  );
}
