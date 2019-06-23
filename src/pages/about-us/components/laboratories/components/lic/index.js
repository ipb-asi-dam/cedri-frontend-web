import React from 'react'

import Laboratory from 'pages/about-us/components/laboratories/components/laboratory'

import LicPDF from 'assets/pdfs/lic.pdf'

function Lic () {
  return (
    <Laboratory
      title='Infrastructures and Communications Laboratory (LIC)'
      subtitle='Laboratório de Infraestruturas e Comunicações'
      timeTableFile={LicPDF}
      timeTableFileName='lic.pdf'
    >
      <p>
        O Laboratório de Infraestruturas Comunicações tem como principal objetivo dar apoio a valências da área científica de Engenharia de Computadores, tais como, Sistemas Informáticos, Redes e Comunicações informáticas, Gestão de Sistemas de Redes, Cibersegurança, Internet das coisas, Comunicações Industriais e um Laboratório da Academia CISCO (Netacad).
      </p>
      <p>
        O laboratório possui 15 postos de trabalho suportados por dois bastidores principais, um com equipamento de apoio para a conetividade principal com acesso à Internet e, outro bastidor com equipamento de rede ativo para trabalhos académicos. Além disso, dispõe ainda de 5 bastidores mais pequenos com 3 kits de equipamento de rede ativo para apoio letivo a várias disciplinas da área.
      </p>
      <p>
        Existe ainda uma área de trabalho adequada ao desenvolvimento de trabalhos no âmbito de disciplina de projeto e trabalho de investigação, e um gabinete isolado para a realização permanente de trabalho de pesquisa e investigação nas áreas referidas.
      </p>
    </Laboratory>
  )
}

export default Lic
