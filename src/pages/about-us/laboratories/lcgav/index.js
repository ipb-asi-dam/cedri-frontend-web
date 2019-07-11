import React from 'react'

import Laboratory from 'pages/about-us/laboratories/components/laboratory'

import LcgavPDF from 'assets/pdfs/lcgav.pdf'

function Lcgav () {
  return (
    <Laboratory
      title='Computer Graphics and Virtual Environments Laboratory (LCGAV)'
      subtitle='Laboratório de Computação Gráfica e Ambientes Virtuais'
      timeTableFile={LcgavPDF}
      timeTableFileName='lcgav.pdf'
    >
      <p>
        O LCGAV reúne condições para a lecionação, pesquisa e experimentação em temas como a computação gráfica,
        processamento de imagens, simulação e visão computacional. Em associação com este tipo de pesquisa,
        o LCGAV permite aliar experiências em ambientes virtuais, usando a realidade virtual (RV) e a realidade aumentada (RA),
        de forma a oferecer estímulos relacionados com a interação, a imaginação e a imersão.
      </p>
      <p>
        Outras áreas da abrangência de pesquisa e desenvolvimento associadas ao LCGAV, prendem-se com os sistemas Multimédia,
        desenvolvimento de Interfaces Homem-Máquina e simulação de processos aplicados a sistemas de informação inovadores.
      </p>
      <p>
        Valências: Multimédia e Interfaces, Realidade Virtual, Aumentada e Mista, Sistemas de Informação, Computação Gráfica, e Simulação
      </p>
    </Laboratory>
  )
}

export default Lcgav
