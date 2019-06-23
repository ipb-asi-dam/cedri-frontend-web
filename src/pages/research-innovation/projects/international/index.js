import React from 'react'

import Project from 'pages/research-innovation/components/project'

import logoArum from 'assets/images/logo_ARUM.jpg'
import logoDareHorizontal from 'assets/images/logo-DARE-Horizontal.png'
import logoGoodman from 'assets/images/logo_GO0DMAN.png'
import logoGrace from 'assets/images/logo_GRACE.png'
import logoPerform from 'assets/images/logo-PERFoRM.png'
import logoSafe from 'assets/images/safe.png'
import logoSpeet from 'assets/images/speet.png'
import logoELearning from 'assets/images/elearning_logo.jpg'

const internationalProjects = [
  {
    image: logoSafe,
    name: 'SAFe: Forest Alert Monitoring System',
    description: `The "SAFe: Forest Alert Monitoring System" project aims to create and implement a set of innovative operations that will minimize the occurrence of forest fires, monitoring the fauna, and contribute to the development of the Trás-os-Montes region, with specific focus in the district of Bragança. The set of activities that constitute the environment are easily replicable to other regions with similar characteristics.`,
    fundedBy: 'Fundação “La Caixa”',
    consortium: `CeDRI. CIMO, INESTEC`,
    duration: 'March 2019 - February 2022'
  },
  {
    name: 'FIT4FoF (Making our Workforce Fit for the Factory of the Future)',
    description: `Increased introduction of digital technologies into manufacturing is leading to increased automation, making a range of manual tasks redundant. The increased globalisation in manufacturing also introduces requirements in terms of team work, intercultural and language capabilities. Europe faces considerable challenges in addressing future skills needs. From the perspective of the workforce the issues are increasingly complex where current training and educational solutions are discrete and largely dissociated from work activities. FIT4FoF aims at addressing a range of these issues by analysing current skills initiatives to better understand how best address workers' needs, analysing technology trends across 6 industrial areas of robotics, additive manufacturing, mechatronics/machine automation, data analytics, cybersecurity and human machine interaction, to define new job profiles, which will inform education and training requirements.`,
    fundedBy: 'H2020',
    consortium: `Cork Institute of Technology (IE), Fundacion Cluster de Empresas de Automacion de Galicia (ES), Instituto Politécnico de Bragança (PT), Arctic SA (RO), Boston Scientific Limited (IE), STEINBEIS 2I GMBH (DE), Chambre de  Commerce et D'Industrie de Region Paris Ile-de-France (FR), Professionshojskolen University College Nordjylland (DK), Centro Servizi Industrie SRL (IT)`,
    duration: 'October 2018 - September 2021'
  },
  {
    name: 'On-Surf (Mobilize technological skills in Surface Engineering)',
    description: `The On-Surf is a mobilisation project involving national companies from different sectors and entities from the SI&I system, comprising a broad consortium around a priority axis of its Internationalization and Innovation agenda - Surface Engineering (SE). The project aims to be the seed for a much broader initiative, one that can bring a number of scientific and technological competences on SE to the forefront of the industrial scope, counteracting the lacks of visibility of the SI&I interaction with industry and recognize the proficient skills that exists in Portugal under this field, making it possible to be an important "player" in the international market.`,
    fundedBy: 'Portugal 2020',
    consortium: `TEANDM - Tecnologia, Engenharia E Materiais S.A., P.M.M.-Projectos, Moldes, Manufactura LDA, PRIREV – Equipamentos e Revestimentos Técnicos LDA, PALBIT, S.A., MOLDIT – Indústria de Moldes S.A., DURIT - Metalurgia Portuguesa do Tungstenio LDA, Metalurgica Lurga LDA, INOVATOOLS Portugal, LDA, DISTRIM 2 – Indústria, Investigação e Desenvolvimento LDA, TJ Moldes S.A., LEICA-Aparelhos Opticos de Precisão S.A., MUROPLÁS – Indústria de Plásticos, S.A., VOLKSWAGEN Autoeuropa LDA, BELO INOX S.A., Instituto Pedro Nunes –Associação para a Inovação e Desenvolvimento em Ciência e Tecnologia, Universidade de Coimbra, Universidade do Minho, Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa, Universidade de Aveiro, Instituto Politécnico de Bragança, Instituto Superior de Engenharia do Porto, CENTIMFE – Centro Tecnológico da Indústria de Moldes, Ferramentas Especiais e Plásticos, BOSCH TERMOTECNOLÓGIA, S.A., Bluepharma - Indústria Farmacêutica, S.A.`,
    duration: 'October 2018 - September 2021'
  },
  {
    image: logoGoodman,
    name: 'GO0D MAN (aGent Oriented Zero Defect Multi-stage mANufacturing)',
    description: `The project aims the development of Zero-Defect Manufacturing (ZDM) strategies in multi-stage production systems, through the integration of quality control and process control using cyber-physical systems, intelligent inspection systems and advanced data analysis tools. As result, it will be possible the earlier and real-time deviations and patterns, and consequently to avoid the occurrence of defects in the stations and their propagation to posterior processes.`,
    fundedBy: 'EU H2020',
    consortium: `AEA s.r.l. (IT), Instituto Politécnico d e Bragança (PT), UNINOVA (PT), Universita Politecnica delle Marche (IT), BOC Asset Management GMBH (AUT), NISSATECH Innovation Centre (SRB), AutoEuropa (PT), Zannini Poland Spzoo (POL), e ELECTROLUX Professional SPA (IT)`,
    duration: 'October 2016 – September 2019',
    webpage: 'http://go0dman-project.eu/'
  },
  {
    image: logoDareHorizontal,
    name: 'DA.RE (Data Science Pathways to re-imagine education)',
    description: `The need for qualified Data Scientist has grown rapidly in the last years with the introduction of  Industry 4.0 technologies. The DA.RE project is focused on a pioneer development of a new blend  mixed education program in the area of Data Science, actuating as a catalyzer for the design and  deployment of new educational programs, at national, European and international levels.`,
    fundedBy: 'ERASMUS+',
    consortium: `AEA s.r.l. (IT), Instituto Politécnico de Bragança (PT), Università degli Studi di Camerino (IT), NISSATECH Innovation Centre (SRB), Maisis - Information Systems Lda (PT), The Open University (UK), Abelium doo Raziskave in Razvoj (ESL), Univerza na Primorskem Università del Litorale (ESL), Vision Scientific Ltd. (UK), e-consulenza (IT), Associazione Industriali (IT)`,
    duration: 'September 2016 – August 2019',
    webpage: 'http://dare-project.eu'
  },
  {
    image: logoSpeet,
    name: 'Student Profile for Enhanching Engineering Tutoring (SPEET)',
    description: `SPEET is an ERASMUS+ project aimed to determine and categorize the different profiles for engineering students across Europe. The main rationale behind this proposal is the observation that students performance can be classified according to their behavior while conducting their studies. After years of teaching and sharing thoughts among colleagues from different EU institutions it seems students could obey to some classification according to the way they face their studies. Therefore, if it would be possible to know what kind of student one student is, this may be of valuable help for tutors.`,
    fundedBy: 'Erasmus+',
    consortium: `Instituto Politécnico de Bragança (Portugal), Universidad Autónoma de Barcelona (Spain), Universidad de Leon (Spain), Opole University of Technology (Poland), Politecnico de Milano (Italy), Dunarea de Jos - University of Galati (Romenia).`,
    duration: 'September 2016 – September 2018',
    webpage: 'https://www.speet-project.com'
  },
  {
    image: logoPerform,
    name: 'PERFoRM (Production harmonizEd Reconfiguration of Flexible Robots and Machinery)',
    description: `The project focuses the conceptual transformation of existing Production Systems towards plug&produce production systems to achieve flexible manufacturing environments based on rapid and seamless reconfiguration of machinery and robots as response to operational or business events.`,
    fundedBy: 'EU H2020',
    consortium: `Siemens (DE), COMAU (IT), IFEVS (IT), POLI MODEL (IT), Fraunhofer IPA (DE), Hochschule Emden/Leer (DE), GNK Aerospace Sweden AB (SE), Instituto Politécnico de Bragança (PT), Loccioni (IT), The Manufacturing Technology Centre Limited LBG (UK), Politecnico di Milano (IT), PARO AG (CH), Technologie Initiative SMARTFACTORY KL E.V. (DE), Technische Universitat Braunschweigt (DE), Loughborough University (UK), UNINOVA (PT), Whirlpool Europe srl (IT), XETICS GMBH (DE).`,
    duration: 'October 2015 – September 2018',
    webpage: 'http://www.horizon2020-perform.eu'
  },
  {
    image: logoELearning,
    name: 'E-Learning from Nature',
    description: `The E-Learning from Nature project was funded by the European Commission and the Italian National Agency for the Erasmus+ Programme with the aims of promoting a proactive students’ approach to scientific subjects learning and propose innovative teaching methodologies to scientific teachers.`,
    fundedBy: 'European Commission and the Italian National Agency for the Erasmus+ Programme',
    consortium: `Inforef, Epimorfotiki Kilkis, Limerick Institute of Technology, I.I.S. “F. Enriques”, Pixel, Trakai Educational Assistance Authority, Instituto Politécnico de Bragança,Fundația EuroEd`,
    duration: 'October 2015 – October 2017',
    webpage: 'http://enature.pixel-online.org'
  },
  {
    image: logoArum,
    name: 'ARUM (Adaptive Production Management)',
    description: `The project aims the development of mechanisms focusing the achievement of faster and more adaptive ramp-up processes using multi-agent systems.`,
    fundedBy: 'EU FP7',
    consortium: `EADS Deutschland GmbH (Germany ), Airbus S.A.S. (France), CertiCon, a.s. (Czeck Republic), Modular Galley Systems AG (Italy), Tie Nederland B.V. (Netherlands), Smart Solutions (Russia), Almende B.V. (Netherlands), Cologne University of Applied Sciences (Germany), P3 ingénieurs S.A.S. (France), University of Manchester (UK), Institute of Communication and Computer Systems (Greece), Czech Technical University of Prague (Czeck Republic), University of Hagen (Germany) and Instituto Politécnico de Bragança (Portugal)`,
    duration: 'October 2012 – September 2015',
    webpage: 'http://arum-project.eu'
  },
  {
    image: logoGrace,
    name: 'GRACE (Integration of Process and Quality Control Using Multi-agent Technology)',
    description: `The project aims the development of distributed production control systems integrating process and quality control levels using multi-agent systems principles and self-adaptation procedures to support variation and fluctuation in processes and products.`,
    fundedBy: 'FP7',
    consortium: `Universita Politecnica delle Marche (Italy), SINTEF (Norway), AEA s.r.l. (Italy), Instituto Politécnico de Bragança (Portugal), Whirlpool Europe srl (Italy) and Siemens AG (Germany)`,
    duration: 'July 2010 – June 2013',
    webpage: 'http://grace-project.org'
  }
]

export default () => (
  internationalProjects.map(proj => (
    <Project key={proj.name} {...proj} />
  ))
)
