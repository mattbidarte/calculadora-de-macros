// ========== Variables HTML ==========
const $main = document.querySelector('#main')
const $peso = document.querySelector('#peso')
const $factor = document.querySelector('#factor')
const $objetivo = document.querySelector('#objetivo')
const $btnCalcular = document.querySelector('#btnCalculo')

$btnCalcular.addEventListener('click', (e) => {
    e.preventDefault()
    let kcalBase = Math.trunc(($peso.value * 22) * $factor.value)
    console.log(kcalBase);

    if ($objetivo. value == 'ganar') {
        $main.innerHTML = `
        <h2>Las kcal para el mantenimiento de tu peso son: <strong>${kcalBase}kcal</strong></h2>
        <form class="form">
        <label for="porcentaje">Porcentaje de ganancia:</label>
        <select name="" id="porcentaje">
            <option value="10">10% más</option>
            <option value="15">15% más</option>
            <option value="20">20% más</option>
        </select>
        <button id="btnPorcentaje">Hacer calculo</button>
        </form>
        `
        const $porcentaje = document.querySelector('#porcentaje')
        const $btnPorcentaje = document.querySelector('#btnPorcentaje')

        $btnPorcentaje.addEventListener('click', (e) => {
            e.preventDefault()
            kcalBase += Math.trunc(kcalBase * ($porcentaje.value/100))
            $main.innerHTML = `
            <h2>Las kcal para la ganancia de masa son: <strong>${kcalBase}</strong></h2>
            <p>Ahora calcularemos tus macronutrentes.</p>
            <p>Puedes modificar los valores o dejarlos asi (recomendado).</p>
            <form class="form">
                <label for="">Proteina:</label>
                <input type="range" min="1.8" max="2.5" step="0.1" name="" id="proteina" oninput="this.nextElementSibling.value = this.value" value="2">
                <output>2</output>
                <label for="">Grasas:</label>
                <input type="range" min="0.5" max="1.5" step="0.1" name="" id="grasas" oninput="this.nextElementSibling.value = this.value" value="1">
                <output>1</output>
                <p>Los carbohidratos son las kcal restantes</p>
                <button id="btnMostrarMacros">Mostrar mis macros</button>
            </form>
            `

            const $btnMacros = document.querySelector('#btnMostrarMacros')
            const $prote = document.querySelector('#proteina')
            const $grasas = document.querySelector('#grasas')

            $btnMacros.addEventListener('click', (e) => {
                e.preventDefault()

                let proteina = Math.trunc($prote.value * $peso.value)
                let grasas = Math.trunc($grasas.value * $peso.value)
                let kcalSobrantes = Math.trunc(kcalBase - ((proteina * 4) + (grasas * 9)))
                let carbos = Math.trunc(kcalSobrantes / 4)

                $main.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th colspan="3">Mis macronutrientes diarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Calorias diarias:</td>
                            <td>${kcalBase}kcal</td>
                        </tr>
                        <tr>
                            <td>Proteinas:</td>
                            <td>${proteina}g</td>
                        </tr>
                        <tr>
                            <td>Carbohidratos:</td>
                            <td>${carbos}g</td>
                        </tr>
                        <tr>
                            <td>Grasas:</td>
                            <td>${grasas}g</td>
                        </tr>
                    </tbody>
                </table>
                <p>Podes sacarle captura o anotarlo, ¡Suerte con tu objetivo!</p>
                <p>Te recomiendo el uso de la app MyFitnessPal y que peses tus alimentos</p>
                <button onclick="location.reload()">Volver a calcular</button>
                `
                // <div>
                // <p>Podes sacarle captura o descargar un PDF</p>
                // <button id="pdfout">Descargar PDF</button>
                // </div>
            })
        })

    }else {
        $main.innerHTML = `
        <h2>Las kcal para el mantenimiento de tu peso son: <strong>${kcalBase}</strong></h2>
        <form class="form">
            <label for="porcentaje">Porcentaje de perdida:</label>
            <select name="" id="porcentaje">
                <option value="10">10% menos</option>
                <option value="20">20% menos</option>
                <option value="30">30% menos</option>
            </select>
            <button id="btnPorcentaje">Hacer calculo</button>
        </form>
        `
        const $porcentaje = document.querySelector('#porcentaje')
        const $btnPorcentaje = document.querySelector('#btnPorcentaje')

        $btnPorcentaje.addEventListener('click', (e) => {
            e.preventDefault()
            kcalBase -= Math.trunc(kcalBase * ($porcentaje.value/100))
            $main.innerHTML = `
            <h2>Las kcal para la perdida de grasa son: <strong>${kcalBase}</strong></h2>
            <p>Ahora calcularemos tus macronutrentes.</p>
            <p>Puedes modificar los valores o dejarlos asi (recomendado).</p>
            <form class="form">
                <label for="">Proteina:</label>
                <input type="range" min="1.8" max="2.5" step="0.1" name="" id="proteina" oninput="this.nextElementSibling.value = this.value" value="2">
                <output>2</output>
                <label for="">Grasas:</label>
                <input type="range" min="0.5" max="1.5" step="0.1" name="" id="grasas" oninput="this.nextElementSibling.value = this.value" value="1">
                <output>1</output>
                <p>Los carbohidratos son las kcal restantes</p>
                <button id="btnMostrarMacros">Mostrar mis macros</button>
            </form>
            `

            const $btnMacros = document.querySelector('#btnMostrarMacros')
            const $prote = document.querySelector('#proteina')
            const $grasas = document.querySelector('#grasas')

            $btnMacros.addEventListener('click', (e) => {
                e.preventDefault()

                let proteina = Math.trunc($prote.value * $peso.value)
                let grasas = Math.trunc($grasas.value * $peso.value)
                let kcalSobrantes = Math.trunc(kcalBase - ((proteina * 4) + (grasas * 9)))
                let carbos = Math.trunc(kcalSobrantes / 4)
                
                $main.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th colspan="3">Mis macronutrientes diarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Calorias diarias:</td>
                            <td>${kcalBase}kcal</td>
                        </tr>
                        <tr>
                            <td>Proteinas:</td>
                            <td>${proteina}g</td>
                        </tr>
                        <tr>
                            <td>Carbohidratos:</td>
                            <td>${carbos}g</td>
                        </tr>
                        <tr>
                            <td>Grasas:</td>
                            <td>${grasas}g</td>
                        </tr>
                    </tbody>
                </table>
                <p>Podes sacarle captura o anotarlo, ¡Suerte con tu objetivo!</p>
                <p>Te recomiendo el uso de la app MyFitnessPal y que peses tus alimentos</p>
                <button onclick="location.reload()">Volver a calcular</button>
                `

            })

        })
    }
})