import React from 'react'

import Laboratory from 'pages/about-us/components/laboratories/components/laboratory'

import LePDF from 'assets/pdfs/le.pdf'

function Le () {
  return (
    <Laboratory
      title='Electrical Engineering Laboratory (LE)'
      timeTableFile={LePDF}
      timeTableFileName='le.pdf'
    >
      <p>
        The Electrotechnical Laboratory is equipped to support practical classes in subjects like Electronics,
        Electricity, ITED/ITUR, Instrumentation, Digital systems, Mechatronics and Micro-controllers.
        It is equipped with a board, a video projector and there are six workplaces equipped with a DC Power Source,
        a Signal generator, an Oscilloscope and a Computer. The laboratory is also equipped with specific hardware for ITED/ITUR experiments.
      </p>
      <p>
        Areas: Electrical Engineering, ITED / ITUR, Instrumentation, Electronics, Digital Systems, Mechatronics, Microcontrollers
      </p>
    </Laboratory>
  )
}

export default Le
