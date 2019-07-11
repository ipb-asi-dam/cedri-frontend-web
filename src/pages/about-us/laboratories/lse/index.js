import React from 'react'

import Laboratory from 'pages/about-us/laboratories/components/laboratory'

import LsePDF from 'assets/pdfs/lse.pdf'

function Lse () {
  return (
    <Laboratory
      title='Electro Mechatronics Systems Laboratory (LSE)'
      subtitle='Laboratório de Sistemas Eletromecatrónicos'
      timeTableFile={LsePDF}
      timeTableFileName='lse.pdf'
    >
      <p>
        O Laboratório de Sistemas Eletromecatrónicos (LSE) permite pôr em prática conceitos de conversão de energia no controlo de máquinas elétricas e na injeção de energia na rede proveniente de painéis solares fotovoltaicos, geradores eólicos e hídricos. As instalações do LSE acolhem alunos das Engenharias Eletrotécnica e de Computadores, e Energias Renováveis para apoio às aulas,
        realização de trabalhos de fim de curso e para investigação nas áreas indicadas.
      </p>
      <p>Valências: Eletrónica de Potência, Máquinas Elétricas, Conversão de Energia, Injeção de Energia na rede</p>
    </Laboratory>
  )
}

export default Lse
