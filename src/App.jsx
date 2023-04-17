import { IdCard } from "./components/Iteration 1"
import FotoPerfilHomem from "./assets/Imagens/homem-iteration-one.jpg"
import FotoPerfilMulher from "./assets/Imagens/mulher-iteration-one.jpg"
import style from "./style.module.css"
import { Greetings } from "./components/Iteration 2"
import { Random } from "./components/Iteration 3"
import { Boxcolor } from "./components/Iteration 4"
import { CreditCard } from "./components/Iteration 5"



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
      birth = {new Date("1992-07-14")} />

      <IdCard
      img= {FotoPerfilMulher}
      firstName = "Obrien"
      lastName = "Delores"
      gender = "Female"
      height = "1.72m"
      birth = {new Date("1988-05-11")} />
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

      <h1>CreditCard</h1>
      <div className= {style.globalCss}>
      <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
      />
      <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
      <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />    


      </div>

    </div>
  )
}

export default App

// Credit card - <p>************{props.number.slice(-4)}</p>