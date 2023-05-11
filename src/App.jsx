
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsListing from "./components/PatientsListing"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form/>
        <PatientsListing/>
      </div>
    </div>
  )
}

export default App
