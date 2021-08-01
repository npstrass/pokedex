async function getPokemon() {
    let res = await fetch('pokemon.json')
    let data = await res.json()
    return data
}

function getPokemonHtml(aPokemon) {
    return `
        <div class="a-pokemon">
            <div class="a-pokemon-id">${aPokemon.id}</div>
            <div class="a-pokemon-name">${aPokemon.name.english}</div>
            <div class="a-pokemon-type">${aPokemon.type.join(' / ')}</div>
            <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
            <div class="a-pokemon-stat">Attack: ${aPokemon.base.Attack}</div>
            <div class="a-pokemon-stat">Defense: ${aPokemon.base.Defense}</div>
            <div class="a-pokemon-stat">Speed: ${aPokemon.base.Speed}</div>
            <div class="a-pokemon-language">${aPokemon.name.japanese}</div>
            <div class="a-pokemon-language">${aPokemon.name.chinese}</div>
            <div class="a-pokemon-language">${aPokemon.name.french}</div>
        </div>
    `
}

function displayPokedex(allPokemon) {
    document.body.innerHTML = `<div class="my-pokedex">
        ${allPokemon.map(getPokemonHtml).join('')}
    </div>`
    
}

getPokemon().then(displayPokedex) 