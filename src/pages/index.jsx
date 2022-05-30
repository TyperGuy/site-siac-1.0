import Grid from '../views/grid-on-header/Grid.jsx';
import Fam from '../views/family/Fam.jsx';
import Partners from '../views/partners/Partners.jsx'; 
import Floating from '../components/floating-button/Floating.jsx'
import Benefic from '../views/benefic/Benefic.jsx';
import Stats from '../views/stats/Stats.jsx';

export default function Home() {
  return (
    <div style={{display: 'flex', alignItems: 'center' ,flexDirection:'column', position:'relative'}}>
      <Grid/>
      <Benefic/>
      <Fam/>
      <Stats/>
      <Partners/>
      <Floating/>
    </div>
  )
}




