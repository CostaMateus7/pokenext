import Image from 'next/image';
import Card from '../components/Card';
import Styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
  const maxPokemons = 250;
  const API = 'https://pokeapi.co/api/v2/pokemon/';
  const response = await fetch(`${API}/?limit=${maxPokemons}`);
  const data = await response.json();
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });
  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default function Home({ pokemons }) {
  return (
    <>
      <div className={Styles.ContainerTitle}>
        <h1>PokeNext</h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="Pokeball"
        />
      </div>

      <div className={Styles.ContainerCard}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
