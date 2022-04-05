import Header from '../../views/header/Header';
import Footer from '../../views/footer/Footer';
import Style from './layout.module.css';


export default function Layout({children}){
   return(
     <div className={Style.mainContainer}>
      <Header/>
      <div className={Style.layoutChildContainer}>
        {children}
      </div>
      
      <Footer/>
     </div>
     
   )
}