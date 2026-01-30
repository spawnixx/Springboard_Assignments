function Pokecard({ id, name, type, base_experience }) {
  let imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <h2>{name}</h2>
      <img src={imageSource} alt={name} />
      <p>
        <b>Type:</b> {type}
      </p>
      <p>
        <b>Base Experience:</b> {base_experience}
      </p>
    </div>
  );
}
