const Main = () => {

    return(
        
        <main>
    <section class="weather-container">
        <div class="city">
            <h2>Villejuif</h2>
            <i class="fas fa-sun"></i>
            <p>Température : 20°C</p>
            <p>Conditions : Ensoleillé</p>
        </div>

        <div class="city">
            <h2>Paris</h2>
            <i class="fas fa-cloud"></i>
            <p>Température : 22°C</p>
            <p>Conditions : Nuageux</p>
        </div>

        <div class="city">
            <h2>Lyon</h2>
            <i class="fas fa-cloud-rain"></i>
            <p>Température : 24°C</p>
            <p>Conditions : Pluie légère</p>
        </div>

        <div class="city">
            <h2>Marseille</h2>
            <i class="fas fa-sun"></i>
            <p>Température : 28°C</p>
            <p>Conditions : Ensoleillé</p>
        </div>

        <div class="city">
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