import Background from "../assets/car-background.jpg"

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}} 
    className="flex flex-row sm:justify-start justify-center mx-auto bg-cover bg-fixed"
    >
        <div className="col place-items-start h-screen">
            <h3 className="mt-5 ml-8 p-5 bg-white bg-opacity-90 text-black rounded">Welcome to Auto-Matic</h3>
            <h5 className="p-5 ml-8 text-zinc-200">For people, <span className="italic">by</span> people.</h5>
        </div>
    </div>
  )
}

export default Home