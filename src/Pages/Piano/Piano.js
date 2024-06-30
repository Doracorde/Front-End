import React, { useEffect } from 'react';
import { Howl } from 'howler';
import './Piano.css';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';

const keys = [
    { note: 'C', key: 'a', audio: 'c.mp3' },
    { note: 'C#', key: 'w', audio: 'a.mp3' },
    { note: 'D', key: 's', audio: 'd.mp3' },
    { note: 'D#', key: 'e', audio: 'df.mp3' },
    { note: 'E', key: 'd', audio: 'e.mp3' },
    { note: 'F', key: 'f', audio: 'f.mp3' },
    { note: 'F#', key: 't', audio: 'bf.mp3' },
    { note: 'G', key: 'g', audio: 'g.mp3' },
    { note: 'G#', key: 'y', audio: 'gf.mp3' },
    { note: 'A', key: 'h', audio: 'a.mp3' },
    { note: 'A#', key: 'u', audio: 'af.mp3' },
    { note: 'B', key: 'j', audio: 'b.mp3' },
    { note: 'C', key: 'k', audio: 'c.mp3' },
    { note: 'C#', key: 'o', audio: 'bf.mp3' },
    { note: 'D', key: 'l', audio: 'd.mp3' },
    { note: 'D#', key: 'p', audio: 'df.mp3' },
    { note: 'E', key: ';', audio: 'e.mp3' },
    { note: 'F', key: "'", audio: 'f.mp3' },
    { note: 'F#', key: ']', audio: 'f.mp3' },
    { note: 'G', key: '\\', audio: 'g.mp3' },
    { note: 'G#', key: '=', audio: 'gf.mp3' },
];

export default function Piano() {
    const playSound = (audio) => {
        const sound = new Howl({
            src: [require(`../../assets/audio/${audio}`)],
        });
        sound.play();
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = keys.find(k => k.key === event.key);
            if (key) {
                playSound(key.audio);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className="header-dashdora">
                <Link to='/instrumentos'>
                    <img src={Logo} alt="Doracorde Logo" className="logo" />
                </Link>
            </div>

            <div>
                <h6 className='titulo-piano'>Piano Virtual</h6>
            </div>
            <div className="piano">
                {keys.map((key, index) => (
                    <div
                        key={index}
                        className={`key ${key.note.length > 1 ? 'black' : 'white'}`}
                        onClick={() => playSound(key.audio)}
                    >
                        {key.note}
                    </div>
                ))}
            </div>
            <div class="text-container">
                <h2>Tocar piano on-line</h2>
                <p>Use o teclado do computador ou clique nas teclas do piano para tocar piano. A linha superior de letras do teclado corresponde às teclas brancas e a linha de números corresponde às teclas pretas. Você pode tocar várias notas simultaneamente. Para usuários com deficiência visual, as teclas são acessíveis através de leitores de tela.</p>

                <p>Salve suas marcações no piano copiando o endereço da web em seu navegador. Isso também permite que você compartilhe suas marcações com outras pessoas. Por exemplo, aqui está um <a href="#" aria-label="acorde Fá menor">acorde Fá menor</a> com sétima e uma <a href="#" aria-label="escala E maior">escala E maior</a>.</p>

                <h2>Exercícios de piano online gratuitos</h2>
                <p>Experimente nossos <a href="#" aria-label="exercícios de piano ">exercícios de piano gratuitos</a> e aprenda a tocar notas, intervalos, acordes e escalas no piano. Você também encontrará uma variedade de outros exercícios que irão expandir sua compreensão musical e ajudá-lo a tocar piano melhor.</p>
            </div>
            <Footer />

        </>
    );
}
