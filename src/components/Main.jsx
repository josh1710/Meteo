import Image from "next/image";

const Main = () => {

    return(



     




<main>
    <section class="weather-container">
        <div class="city" id="villejuif">
            <h2>Villejuif</h2>
            {/* <img src="https://em-content.zobj.net/source/apple/118/black-sun-with-rays_2600.png" alt="Soleil"/> */}
            <p>🌡️ : 20°C</p>
            <p>☀️  Ensoleillé</p>
        </div>

        <div class="city" id="paris">
            <h2>Paris</h2>
            <i class="fas fa-cloud"></i>
            <p>🌡️ : 22°C</p>
            <p>☁️  Nuageux</p>
        </div>

        <div class="city" id="lyon">
            <h2>Lyon</h2>
            <i class="fas fa-cloud-rain"></i>
            <p>🌡️ : 24°C</p>
            <p>🌧️  Pluie légère</p>
        </div>

        <div class="city" id="marseille">
            <h2>Marseille</h2>
            <i class="fas fa-sun"></i>
            <p>🌡️ : 28°C</p>
            <p>☀️  Ensoleillé</p>
        </div>

        <div class="city" id="montpellier">
            <h2>Montpellier</h2>
            <i class="fas fa-cloud-sun"></i>
            <p>🌡️ : 27°C</p>
            <p>☁️  Nuageux</p>
        </div>
    </section>
    </main>
   
    )
}


export default Main;