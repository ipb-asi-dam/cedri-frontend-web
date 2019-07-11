import React from 'react'

import Laboratory from 'pages/about-us/laboratories/components/laboratory'

import LcaPDF from 'assets/pdfs/lca.pdf'

function Lca () {
  return (
    <Laboratory
      title='Advanced Computing Laboratory (LCA)'
      subtitle='Laboratório de Computação Avançada'
      timeTableFile={LcaPDF}
      timeTableFileName='lca.pdf'
    >
      <p>
        A vocação principal do Laboratório de Computação Avançada é apoio ao ensino,
        investigação e desenvolvimento em torno das áreas de Computação Paralela e Distribuída,
        Computação de Elevado Desempenho, Virtualização de Sistemas e Computação em Nuvem,
        Gestão de Sistemas e Redes, Deep Learning e  Inteligência Artificial, Big Data e Data Analytics,
        e Processamento de Sinal e Visão Artificial. Neste contexto, o LCA está associado à gestão e exploração do novo cluster HPC adquirido pelo CeDRI, no âmbito do projeto “i4.0@tmad”.
      </p>
      <p>
        O laboratório dispõe de 12 postos de trabalho de última geração, distribuídos por 4 filas de 3 mesas cada,
        tendo cada mesa 4 tomadas elétricas e 4 tomadas de rede para máxima flexibilidade. Possui também uma fila adicional,
        de 4 mesas livres, adequada à utilização de computadores portáteis, entre outros fins.
        Existe ainda um gabinete destinado à realização de projetos de fim de curso ou de I&amp;D,
        com capacidade para 3 utilizadores.
      </p>
    </Laboratory>
  )
}

export default Lca
