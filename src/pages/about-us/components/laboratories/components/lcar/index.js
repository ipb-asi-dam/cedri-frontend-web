import React from 'react'

import Laboratory from 'pages/about-us/components/laboratories/components/laboratory'

import LcarPDF from 'assets/pdfs/lcar.pdf'

function Lcar () {
  return (
    <Laboratory
      title='Control, Automation and Robotics Laboratory (LCAR)'
      subtitle='Laboratório de Controlo, Automação e Robótica'
      timeTableFile={LcarPDF}
      timeTableFileName='lcar.pdf'
    >
      <p>
        O Laboratório de Controlo, Automação e Robótica (LCAR) é um espaço dedicado a apoiar as atividades letivas e execução de projetos nas áreas do controlo, automação e robótica. Possui equipamento para o desenvolvimento de atividades nas áreas específicas de controlo de processos, robótica móvel autónoma, robótica manipulador, automatização de processos fabris e sistemas de domótica e que são habitualmente usados, quer nas atividades letivas de TeSPs, Licenciaturas e Mestrados, quer nas atividades de investigação e desenvolvimento no âmbito de projetos I&amp;D e projetos/dissertações curriculares.
      </p>
      <p>Valências: Robótica, Automação, Controlo Sistemas e Processos, Controlo Industrial</p>
    </Laboratory>
  )
}

export default Lcar
