import Footer from "@/components/Footer"
import Header from "@/components/Header"

function layout({children}: {children:React.ReactNode}) {
  return (
    <>
    <Header/>
      <main className="min-h-screen overflow-hidden">
        {children}
      </main>
    <Footer/>
    </>
  )
}

export default layout