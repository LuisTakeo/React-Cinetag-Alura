import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrado from "pages/NaoEncontrado";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      const resposta = await fetch(
        `https://my-json-server.typicode.com/LuisTakeo/cinetag-api/videos?id=${parametros.id}`
      );
      const dados = await resposta.json();
      console.log(dados);
      setVideo(...dados);
    };
    fetchVideo();
  }, []);
  if (!video) {
    return <NaoEncontrado />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </section>
    </>
  );
}

export default Player;
