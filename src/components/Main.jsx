import Image from "next/image";

const Main = () => {

    return(



     




<main>
    <section class="weather-container">
        <div class="city" id="villejuif">
            <h2>Villejuif</h2>
            <img src="https://em-content.zobj.net/source/apple/118/black-sun-with-rays_2600.png" alt="Soleil"/>
            <p>Température : 20°C</p>
            <p>Conditions : Ensoleillé</p>
        </div>

        <div class="city" id="paris">
            <h2>Paris</h2>
            <i class="fas fa-cloud"></i>
            <p>Température : 22°C</p>
            <p>Conditions : Nuageux</p>
        </div>

        <div class="city" id="lyon">
            <h2>Lyon</h2>
            <i class="fas fa-cloud-rain"></i>
            <p>Température : 24°C</p>
            <p>Conditions : Pluie légère</p>
        </div>

        <div class="city" id="marseille">
            <h2>Marseille</h2>
            <i class="fas fa-sun"></i>
            <p>Température : 28°C</p>
            <p>Conditions : Ensoleillé</p>
        </div>

        <div class="city" id="montpellier">
            <h2>Montpellier</h2>
            <i class="fas fa-cloud-sun"></i>
            <p>Température : 27°C</p>
            <p>Conditions : Partiellement nuageux</p>
        </div>
    </section>
    </main>
   
    )
}


export default Main;