import { IdCard } from "./components/Iteration 1"
import FotoPerfilHomem from "./assets/Imagens/homem-iteration-one.jpg"
import FotoPerfilMulher from "./assets/Imagens/mulher-iteration-one.jpg"
import style from "./style.module.css"
import { Greetings } from "./components/Iteration 2"
import { Random } from "./components/Iteration 3"
import { Boxcolor } from "./components/Iteration 4"




function App() {
 

  return (
    <div className="App">
      
      <h1>IdCard</h1>
      <div className = {style.globalCss}>
      <IdCard
      img= {FotoPerfilHomem}
      firstName = "John"
      lastName = "Doe"
      gender = "Male"
      height = "1.78m"
      birth = "Mon Jul 13 1992" />

      <IdCard
      img= {FotoPerfilMulher}
      firstName = "Obrien"
      lastName = "Delores"
      gender = "Female"
      height = "1.72m"
      birth = "Mon May 10 1993" />
      </div>


      <h1>Greetings</h1>
      <div className= {style.globalCss} >
      <Greetings lang = "de">Ludwig</Greetings>
      <Greetings lang = "fr">François</Greetings>
      </div>

      <h1>Random</h1>
      <div className= {style.globalCss}>
        <Random max = {6} min = {1}/>
        <Random max = {100} min = {1}/>
      </div>


      <h1>BoxColor</h1>
      <div className= {style.globalCss}>
      <Boxcolor red = {255} green={0} blue= {0}/>
      <Boxcolor red = {128} green={255} blue= {0}/>
      </div>

    </div>
  )
}

export default App
