import React from 'react';
import { useTranslation } from 'react-i18next';
import '../PercussaoCorporal/Pc.css';
import Baiao from '../PercussaoCorporal/imagem/baiao.png';
import Bossa from '../PercussaoCorporal/imagem/bossanova.png';
import Ritmografia from '../PercussaoCorporal/imagem/ritmoEmbranco.jpg';

export function ConteudoPc() {
  const { t } = useTranslation();

  return (
    <div className="main-pc">
      <div className="box-pc">
        <h1 className="titulo-pag-pc">{t('Percussão Corporal')}</h1>
        <p className="texto-pag-pc">
          {t(
            'A percussão corporal é uma forma de expressão musical que utiliza o corpo como instrumento. Ela envolve a produção de sons e ritmos através de batidas, palmas, estalos de dedos, batidas de pés e outros movimentos corporais. É uma prática divertida e educativa que ajuda a desenvolver a coordenação motora, o ritmo, a concentração e a criatividade.'
          )}
        </p>

        <div className="box-cinza">
          <p className="texto-pag-pc">
            {t(
              'Você tem a liberdade de criar ritmos utilizando sua criatividade e até mesmo acompanhando músicas conhecidas. Abaixo oferecemos um exemplo com ritmo baião. Essa é uma das milhares de maneiras de tocar esse ritmo brasileiro.'
            )}
          </p>

          <img className="ritmografia-img" src={Baiao} alt={t('Imagem do ritmo Baião')} />

          <p className="texto-pag-pc">
            {t('Neste ritmograma temos indicações para tocar o baião da seguinte maneira:')}
          </p>

          <ul className="texto-pag-pc">
            <li>{t('1° Tapa no peito')}</li>
            <li>{t('2° Estale os dedos duas vezes alternadamente (direita e esquerda)')}</li>
            <li>{t('3° Outro tapa no peito')}</li>
            <li>{t('4° Estale os dedos duas vezes novamente')}</li>
            <li>{t('5° E por último finalize com uma palma simples.')}</li>
            <li>{t('Repita essa sequência para ver a música se desenvolver.')}</li>
          </ul>

          <p className="texto-pag-pc">
            {t(
              'Tente agora desenvolver acompanhando uma música. Abaixo representamos a bossa nova, para que você possa acompanhar a música "Garota de Ipanema", se preferir, acompanhe outra canção se assim preferir.'
            )}
          </p>

          <img className="ritmografia-img" src={Bossa} alt={t('Imagem do ritmo Bossa Nova')} />

          <ul className="texto-pag-pc">
            <li>{t('1° Comece com um tapa no peito utilizando a mão direita')}</li>
            <li>{t('2° Estale os dedos duas vezes alternadamente (direita e esquerda)')}</li>
            <li>{t('3° Por último um tapa no peito com a mão esquerda')}</li>
            <li>{t('4° Volte ao início com a mão direita, repetindo assim. Veja a música acontecer.')}</li>
          </ul>

          <p className="texto-pag-pc">
            {t('Agora é com você: crie suas próprias batidas e compartilhe com a comunidade.')}
            <a href={Ritmografia} download="ritmoEmbranco.jpg">
              {' '}
              {t('Baixe aqui ritmografia em branco')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function BarraFerramentas() {
  const { t } = useTranslation();

  return (
    <div className="container-ferramentas-pc">
      <div className="titulo-ferramentas">
        <h2 className="Tferramentas">{t('Ferramentas')}</h2>
      </div>

      <div className="lista-ferramentas">
        <ul>
          <li className="t-lista">{t('Instrumentos')}</li>
          <li>{t('Piano')}</li>
          <li>{t('Guitarra')}</li>
          <li>{t('Bateria')}</li>
          <li>{t('Baixo')}</li>
        </ul>
      </div>

      <div className="lista-ferramentas">
        <ul>
          <li className="t-lista">{t('Equipamento')}</li>
          <li>{t('Gerador de acordes')}</li>
          <li>{t('Caixa de ritmos')}</li>
          <li>{t('Metrônomo')}</li>
          <li>{t('Afinador')}</li>
        </ul>
      </div>

      <div className="lista-ferramentas">
        <ul>
          <li className="t-lista">{t('Identificador')}</li>
          <li>{t('Notas')}</li>
          <li>{t('Intervalos')}</li>
          <li>{t('Acordes')}</li>
          <li>{t('Escalas')}</li>
        </ul>
      </div>

      <div className="lista-ferramentas">
        <ul>
          <li className="t-lista">{t('Mais')}</li>
          <li>{t('Círculo de quintas')}</li>
          <li>{t('Termos musicais')}</li>
          <li>{t('Intervalos em canções')}</li>
          <li>{t('Folhas de pauta')}</li>
        </ul>
      </div>
    </div>
  );
}

export function PercussaoCorporal() {
  return (
    <div className="conteudo-pc">
      <ConteudoPc />
      <BarraFerramentas />
    </div>
  );
}

export default PercussaoCorporal;
