import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Card from "./components/Card";

export async function getStaticProps(){
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {

    item.id = index + 1
  });
  return{
    props:{
      pokemons: data.results,
    },
  }
}

export default function Home({pokemons}) {
  return (
    <div>
      <div className={styles.pkNext}>
        <h1>Poke<span>Next</span></h1>
        <Image 
        src="/images/pokeball.png"
        height="50"
        width="50"
        alt="pokeball"
        />
      </div>

      <div className={styles.pokemonConteiner}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon}/>
            // <p key={pokemon.id}>{pokemon.name}</p>
          ))}
      </div>
    </div>
  );
}
