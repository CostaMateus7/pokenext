import Image from 'next/image';
import Link from 'next/link';
import Styles from '../../styles/Pokemon.module.css';

export const getStaticPaths = async () => {
  const maxPokemons = 250;
  const API = 'https://pokeapi.co/api/v2/pokemon/';
  const response = await fetch(`${API}/?limit=${maxPokemons}`);
  const data = await response.json();

  const paths = data.results.map((pokemon, index) => ({
    params: {
      pokemonId: (index + 1).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await result.json();
  return {
    props: {
      poke: data,
    },
  };
};

export default function Pokemon({ poke }) {
  return (
    <section className={Styles.PokeContainer}>
      <h1>{poke.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
        width="120"
        height="120"
        alt={poke.name}
      />
      <div className={Styles.NumberStyle}>
        <h3>Número:</h3>
        <span>{poke.id}</span>
      </div>
      <div className={Styles.TypesStyle}>
        {poke.types.map((item) => (
          <span key={item.type.name}>{item.type.name}</span>
        ))}
      </div>
      <div>
        <h4>Altura</h4>
        <p>
          {poke.height * 10}
          {' '}
          cm
        </p>
      </div>

      <div>
        <h4>Peso</h4>
        <p>
          {poke.weight / 10}
          {' '}
          Kg
        </p>
      </div>
      <Link href="/">Voltar</Link>
    </section>

  );
}
