const questionsData = [
  {
    id: 37,
    question: 'Mention the organ in mammals in which urea is produced.',
    answer: 'Liver',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 38,
    question:
      'Mention the process by which glucose is taken back from the glomerular filtrate by the proximal convoluted tubule',
    answer: 'Active transport',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 4,
    question:
      'What name is given to masking the character of one gene by other gene?',
    answer: 'Epistasis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 13,
    question:
      'What name is given to the complex formed by a pair of synapsed homologous chromosome?',
    answer: 'Bivalent',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 16,
    question:
      'What name is given to two organs which are similar in structure and origin, but not necessarily similar in function?',
    answer: 'Homologous',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 20,
    question:
      'Arrange the following to indicate the proper sequence of prophase I Leptotene… Zygotene….Pachytene….  Diplotene …..  Diakinesis',
    answer: 'Leptotene… Zygotene….Pachytene….  Diplotene …..  Diakinesis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 25,
    question:
      'What name is given the exchange of genetic material between chromatids of paired homologous chromosomes during first meiotic division?',
    answer: 'Crossing over',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 28,
    question:
      'DNA replication is an important process that occurs during cell division. It is also known as semi-conservative replication, during which DNA makes a copy of itself. Mention one of the three stages of DNA replication',
    answer: 'Initiation / Elongation / Termination',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 30,
    question:
      'Mention the stage in meiosis in which homologous chromosomes separate while sister chromatids remain associated at the centromere',
    answer: 'Anaphase I',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 33,
    question:
      'Name any two of the three models for DNA replication that were proposed after Watson and Crick proposed the double helix model',
    answer: 'Conservative, semiconservative, and dispersive.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 40,
    question: 'Give the name of the sensory neuron involved in smell',
    answer: 'Olfactory neuron.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nervous',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 6,
    question:
      'What name is given to closely related species living in the same area/habitat?',
    answer: 'Sympatric',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 7,
    question: 'In which way are exoskeletons similar to endoskeletons?',
    answer: 'They are both responsible for structural support of the body',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 15,
    question: 'Which feature in birds, indicates their reptilian ancestry?',
    answer: 'Scales on their limbs',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 43,
    question: 'Lysosomes are formed by budding from which cellular organelle?',
    answer: 'Golgi apparatus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 46,
    question:
      'What is the simplest level of packing of the eukaryotic chromosome?',
    answer: 'The nucleosome',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 1,
    question: 'Which hormone protects growth of lateral buds?',
    answer: 'Cytokinin',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 3,
    question:
      'Some seeds germinate, while the fruit is attached to the parent plant. What name is given to this?',
    answer: 'Viviparity',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 8,
    question:
      'What substance is used to harden the exoskeleton through biomineralization?',
    answer: 'Calcium Carbonate',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 9,
    question:
      'Upon fertilization while ovule develops into seed, which structure develops from a nucleus?',
    answer: 'Perisperm',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 11,
    question: 'Which group of algae are closely related to plants?',
    answer: 'Green algae',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 14,
    question: 'What is the function of lenticels in woody stems?',
    answer:
      'In woody stems, lenticels allow internal cells to exchange gases with the outside atmosphere.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 18,
    question:
      'Tracheids, vessel elements, sieve-tube cells, and companion cells are components of which tissue in plants?',
    answer: 'Vascular tissue',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 21,
    question:
      'What name is given to a leaf without a petiole that is attached directly to the plant stem?',
    answer: 'Sessile',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 22,
    question:
      'The coiling of tendrils around a support is a good example of which type of tropism.',
    answer: 'Thigmotropism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 23,
    question:
      'Name the primary acceptor of CO2, during CO2 fixation in C3 plants.',
    answer: 'Ribulose 1, 5-diphosphate (RuDP) / ribulose biphosphate (RuBP)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 26,
    question:
      'Which plant hormone is principally connected with cell division?',
    answer:
      'Cytokinin (It has a very specific effect on cell division (cytokinesis), hence the name cytokinin.)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 29,
    question:
      'What name is given to the amount of xylem tissues developed over one growth period and separated in time from adjacent tissues by a non-growing or dormant period?',
    answer: 'Growth ring / tree ring / annual ring',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 31,
    question: 'Viviparity normally occurs in which group of plants',
    answer: 'Mangroves',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 32,
    question:
      'Mention the specific type of tropism to which the statement below refers. Plant stems growing upwards',
    answer: 'Negative geotropism.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 34,
    question: 'Companion cells are unique to which tissue in angiosperms?',
    answer: 'Phloem',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 36,
    question:
      'Some people eat the petiole of some herbaceous plants. Which tissue provides support for the petiole?',
    answer: 'Collenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 39,
    question:
      'Xylem and phloem tissues are derived from which primary meristem?',
    answer: 'Procambium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 42,
    question: 'The epidermis of plants is derived from which primary meristem?',
    answer: 'Protoderm',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 45,
    question:
      'Which ground tissue is a major component of the lamina of lettuce leaves?',
    answer: 'Parenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 27,
    question:
      'What name is given to the actual ratio of the volume of carbon dioxide eliminated to the volume of oxygen consumed during cellular respiration?',
    answer: 'Respiratory quotient',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 41,
    question:
      'Which stage of aerobic respiration produces ATP and NADH and releases CO2?',
    answer: 'Krebs cycle',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 44,
    question: 'Which of the three stages of aerobic respiration requires CO2?',
    answer: 'None',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 35,
    question:
      'Name the type of sensory receptor which responds to mechanical forces, such as pressure or distortion.',
    answer: 'Mechanoreceptor',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 2,
    question:
      'Which category of vertebrae provides the range of movement within the neck?',
    answer: 'Cervical',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 10,
    question: 'How many cervical vertebrae are found in humans?',
    answer: 'Seven',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 19,
    question: 'What is the main function of the processes of the vertebrae?',
    answer: 'Provide attachments for ligaments and muscles',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 12,
    question: 'Who is credited with binomial nomenclature?',
    answer: '(Carolus) Linnaeus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 17,
    question:
      'What name is given to the thin transparent membrane that covers the cornea of the mammalian eye externally?',
    answer: 'Conjunctiva',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 24,
    question:
      'What name is given the physiological capacity of organisms to produce their offspring under natural conditions?',
    answer: 'Biotic potential',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 47,
    question:
      'Some proteins are found in the plasma membrane. Which part of the protein is within the membrane itself?',
    answer: 'Hydrophobic region',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 48,
    question:
      'Which of the ground tissues in plants makes the shell of a nut hard?',
    answer: 'Sclerenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 49,
    question:
      'Mention the predominant driving force that moves blood back to the heart in the veins',
    answer: 'Contraction of skeletal muscles',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 50,
    question:
      'Which component of the plasma membrane can be either found on the surface of the membrane or embedded in the membrane structure?',
    answer: 'Protein',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 51,
    question:
      'The individual chromosomes become visible with a light microscope during which stage of mitosis?',
    answer: 'Prophase',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 52,
    question:
      'Potatoes contain food in the form of starch. Which ground tissue will one be eating when one eats mashed potatoes?',
    answer: 'Parenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 53,
    question:
      'Which of the following tissues will most likely provide flexible support in plants? Epidermis, Sclerenchyma, Parenchyma, Collenchyma, Cambium',
    answer: 'Collenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 54,
    question:
      'What name is given to the physical site or location of a specific gene on a chromosome?',
    answer: 'Locus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 55,
    question:
      'Where does an animal cell get energy for active transport processes?',
    answer:
      'The cell harvests energy from ATP produced by its own metabolism to power active transport processes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 56,
    question:
      'In the presence of oxygen, all cells synthesize ATP. Mention the process by which many cells also can metabolize pyruvate if oxygen is not present.',
    answer: 'Fermentation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 57,
    question: 'Name the two main products that result from photosynthesis?',
    answer: 'Sugars/carbohydrates and oxygen',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 58,
    question:
      'What name is given to the two identical strands joined by a common kinetochore as a result of a chromosome that duplicated during the S phase of the cell cycle?',
    answer: 'Sister Chromatids',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 59,
    question:
      'Glucose that enters the glycolytic pathway is split into two molecules of what molecule?',
    answer: 'Pyruvate',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 60,
    question:
      'What name is given to the class of carbohydrate which cannot be hydrolyzed further?',
    answer: 'Monosaccharides',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 61,
    question:
      'What name is given to a group of organisms that are able to interbreed and produce fertile offspring?',
    answer: 'Species',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 62,
    question:
      'Name one of the three common components of eukaryotic cell division and binary fission.',
    answer:
      'DNA duplication, Segregation of duplicated chromosomes, and the division of the cytoplasmic contents.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 63,
    question:
      'Phototropic and geotropic movements in plants are linked to which plant hormone.',
    answer: 'Auxin / IAA',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 64,
    question:
      'The net result of the breakdown of glucose in glycolysis and fermentation is the production of 2 molecules which molecule?',
    answer: 'ATP',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 65,
    question:
      'Which of the following is a seedless vascular plant? a) Gymnosperm b) Bryophyte c) Pteridophytes d) Angiosperm',
    answer: 'Pteridophytes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 66,
    question:
      'What process is responsible for the movement of carbon dioxide into a leaf?',
    answer: 'Diffusion',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 67,
    question:
      'What function does the mammalian ear provide other than hearing?',
    answer: 'Balance',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 68,
    question:
      'Which one of these is an essential mineral, which is not a constituent of any enzyme but stimulates the activity of many enzymes in plants?',
    answer: 'Potassium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 69,
    question:
      'Which group of animals is Charles Darwin best known for studying?',
    answer: 'Birds',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 70,
    question: 'Which class of carbohydrates is considered as non-sugar?',
    answer: 'Polysaccharides',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 71,
    question: 'Which vitamin functions as a hormone as well as visual pigment?',
    answer: 'Retinol/ Vitamin A',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 72,
    question:
      'The absence of the second X chromosome in a female leads to which type of syndrome?',
    answer: 'Turner syndrome',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 73,
    question:
      'Name the plant organelle which acts as a major site for oxidative reactions?',
    answer: 'Peroxisomes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 74,
    question:
      'Mention the tissue in flowering plants in which bidirectional translocation of solutes takes place.',
    answer: 'Phloem',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 75,
    question: 'Hemolysis is associated with which type of cells?',
    answer: 'Red blood cells',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 76,
    question:
      'One round of meiotic division gives rise to how many haploid cells.',
    answer: 'Four (4)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 77,
    question:
      'The coiling of climbing stems around a support is a good example of which type of tropism?',
    answer: 'Thigmotropism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 78,
    question:
      'Internally, the kidney has three regions—an outer cortex, a medulla in the middle, and the renal pelvis. Which of the three is the expanded end of the ureter?',
    answer: 'Renal pelvis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 79,
    question:
      'Leptotene and zygotene are the stages of cell division that occur during which phase of meiosis?',
    answer: 'Prophase',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 80,
    question:
      'What name is given to the pressure that develops in a cell due to osmotic diffusion of water inside it?',
    answer: 'Turgor Pressure',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 81,
    question:
      'What will happen when an endothermic animal is faced with a sudden drop in environmental temperature?',
    answer: 'Increase muscle activity to generate heat',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 82,
    question: 'What is the reason for doing a test cross?',
    answer: 'To identify heterozygous individuals with the dominant phenotype',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 83,
    question:
      'What is the likely evolutionary advantage of sexual reproduction over asexual reproduction?',
    answer: 'Sexual reproduction results in greater variation in the offspring',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 84,
    question: 'What is the biological polymer in paper?',
    answer: 'Cellulose',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 85,
    question:
      'Which element plays an important role in biological nitrogen fixation?',
    answer: 'Molybdenum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 86,
    question:
      'What name is given to the response of different organisms to the environmental rhythms of light and darkness?',
    answer: 'Photoperiodism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 87,
    question:
      'When a population has a gene with four alleles circulating, how many possible genotypes are there?',
    answer: 'Ten (10)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 88,
    question:
      'The RNA components of ribosomes are synthesized in which part of the cell?',
    answer: 'Nucleolus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 89,
    question:
      'Name the process that restores the diploid condition in organisms.',
    answer: 'Fertilization',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 90,
    question:
      'What name is given to the capacity of an earthworm to reform segments that break off?',
    answer: 'Regeneration',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 91,
    question:
      'What name is given to the influence of the apical bud in suppressing the growth of lateral buds in plants?',
    answer: 'Apical Dominance',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 92,
    question:
      'Which chemical is believed to be involved in flowering in plants?',
    answer: 'Florigen',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 93,
    question: 'How are waste products transported to the kidneys for removal?',
    answer: 'In blood',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 94,
    question:
      'In which part of the chloroplasts do Photosynthetic pigments occur?',
    answer: 'Thylakoid Membranes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 95,
    question:
      'Select the one, which comes under a lotic ecosystem. a) Ocean    b) Lake   c) Pond   d) River',
    answer: 'River (In fresh water lotic means running water)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 96,
    question:
      'Name the tissues that detect changes inside and outside the body and responds by action potential',
    answer: 'Nervous tissue',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 97,
    question:
      'What name is given to the branch of ecology that deals with the structure, development, and distribution of ecological communities?',
    answer: 'Synecology',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 98,
    question:
      'Name the organisms that manufacture organic compounds from simple inorganic compounds without using sunlight?',
    answer: 'Chemotrophs',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 99,
    question:
      'In aerobic respiration, carbohydrates are ultimately broken down into what molecule',
    answer: 'Carbon dioxide',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 100,
    question: 'Which organ in mammals is known as the “window of the brain”?',
    answer: 'Sensory organs',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 101,
    question:
      'Which of the following parameters of light is NOT required by plants to grow? a) Wavelength of light  b) Intensity of light c) Duration of light d) Color of light',
    answer: 'd) Color of light',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 102,
    question: 'Which microtubule pulls the chromosomes towards the pole?',
    answer: 'Kinetochore',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 103,
    question:
      'What name is given to the white part of the eye which covers the entire eye except for the cornea, and is made up of collagen fibers and fibroblast?',
    answer: 'Sclera',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 104,
    question: 'The interfascicular cambium is formed from which cells?',
    answer: 'Medullary rays',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 105,
    question:
      'Name the part of the eye which produces aqueous fluid that fills the front part of the eye.',
    answer: 'Ciliary body',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 106,
    question:
      'What name is given to the end point of the ecological succession?',
    answer: 'Climax community',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 107,
    question: 'What are lenticels in plants?',
    answer:
      'Lenticels are the small openings in the bark of the plants, mainly in stem and root, and allow the exchange of gases between the atmosphere and the inner cells.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 108,
    question:
      'Name the enzyme which is found in tears, sweat, and an egg white',
    answer: 'Lysozyme',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 109,
    question:
      'Which tissue in plants is responsible for the movement of mineral salts to the leaves?',
    answer: 'Xylem',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Prelims',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 110,
    question:
      'Which of the following is the largest single membrane-bound intracellular compartment?\na) Ribosome b) Golgi apparatus c) Nucleus d) Endoplasmic reticulum',
    answer: 'd) Endoplasmic reticulum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Round 16',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 111,
    question: 'Which organ in mammals produces urea?',
    answer: 'Liver',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 112,
    question: 'What name is given to the digestion of a cell’s own component?',
    answer: 'Autophagy',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 113,
    question:
      'Name the multipolar neuron which is located entirely within the central nervous system',
    answer: 'Interneuron',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 114,
    question: 'Give the location and function of thylakoids',
    answer: 'Inside the chloroplast, it traps solar energy',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 115,
    question:
      'Name the phase of the cardiac cycle in which the ventricles relax.',
    answer: 'Diastolic phase',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 116,
    question: 'Mention the principle on which pedigree analysis works?',
    answer: 'Probability',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 117,
    question:
      'Name the filamentous fungi which was used in Engelmann’s experiment to show photosynthetic activity?',
    answer: 'Spirogyra',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 118,
    question:
      'Identify the one that is not transported by blood\na) Hormone b) Oxygen c) Heat d) Lymph',
    answer: 'd) Lymph',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 119,
    question: 'What are microsomes?',
    answer:
      'Microsomes are small vesicles formed by the breakdown of ER membrane into fragments',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 120,
    question:
      'In which compartment of plant cells do the light-independent reactions of photosynthesis take place?',
    answer: 'Stroma',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 121,
    question:
      'Which of the following organelles takes part in the secretion of mucus?\na) Cytoplasm b) Ribosomes c) ER compartments d) Golgi apparatus',
    answer: 'd) Golgi apparatus',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 122,
    question: 'Name the purine bases which are commonly found in DNA and RNA?',
    answer: 'Adenine and guanine',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 123,
    question:
      'Which hormone maintains blood glucose level by activation of gluconeogenesis?',
    answer: 'Glucagon',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 124,
    question:
      'Which of the following organelles works as a lysosome in the plants?\na) Contractile vacuole b) Peroxisome c) Plastid d) Vacuole',
    answer: 'b) Peroxisome',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 125,
    question:
      'Which of Mendel’s laws is also known as the law of purity of gametes.',
    answer:
      'Law of segregation (gametes are always remained pure by separating the genes or factors at the time of gamete formation',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 126,
    question:
      'Name the term which defines the study of the characteristics and parameters of the population.',
    answer: 'Demography',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 127,
    question:
      'Which of the following is not the function of the Golgi apparatus?\na) Processing and shorting of glycoprotein b) Lipid metabolism c) Carbohydrate metabolism d) Amino acid metabolism',
    answer: 'd) Amino acid metabolism',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 128,
    question: 'What is the function of a nonsense codon?',
    answer:
      'The function of nonsense codons is to terminate the message of a gene controlled protein synthesis.',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 129,
    question: 'Casparian strip is present in which part of the root of plants?',
    answer: 'Endodermis',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 130,
    question:
      'Which of the following is not one of the functions of the mammalian kidney?\na) Regulates blood volume and composition b) Synthesizes glucose c) Regulates blood pressure d) Defends the body against disease',
    answer: 'd) Defends the body against disease',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 131,
    question:
      'Which carbohydrate molecule is a principal component of the cell wall of angiosperms?',
    answer: 'Cellulose',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 132,
    question: 'What is meant by power of accommodation of the eye?',
    answer:
      'It refers to the ability of an eye to change the focal length of the eye lens',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 133,
    question:
      'Which of the following is the first step in urine production?\na) Tubular secretion b) Glomerular reabsorption c) Tubular reabsorption d) Glomerular filtration',
    answer: 'd) Glomerular reabsorption',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 134,
    question:
      'Name the muscles of the eye responsible for accommodation of the eye',
    answer: 'Ciliary muscles',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 135,
    question:
      'Name the cross by which the law of independent assortment inferred.',
    answer: 'Dihybrid cross',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 136,
    question:
      'Which of the following is NOT an endocrine gland?\na) Hypothalamus b) Pituitary c) Parathyroid d) Pancreas',
    answer: 'None',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 137,
    question:
      'The arrangement of xylem tissue in a vascular bundle such that the protoxylem is at the centre and the metaxylem is towards the periphery is called',
    answer: 'Endarch',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 138,
    question: 'The region of distinct vision in the mammalian eye.',
    answer: 'Yellow spot',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 139,
    question: 'The process by which cells engulf pathogens',
    answer: 'Phagocytosis',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 140,
    question:
      'Which one of the following in a food chain has the largest population?\n(a) Producers (b) Primary consumers (c) Secondary consumers (d) Decomposers',
    answer: '(d) Decomposers',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 141,
    question:
      'Which organelle in plants functions similarly as lysosomes in animal cells?',
    answer: 'Vacuoles',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 142,
    question:
      'Name the substance whose accumulation results in muscle fatigue.',
    answer: 'Lactic acid',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 143,
    question:
      'Which of the following organisms occupy the second trophic level in a lake?\n(a) Phytoplankton (b) Fishes (c) Zooplankton (d) Benthos',
    answer: '(c) Zooplankton',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 144,
    question:
      'Which ions are necessary in the chemical events of the muscle contraction?',
    answer: 'Calcium and Magnesium',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 145,
    question:
      'Where can one locate the respiratory centres which control inspiration and expiration in mammals?',
    answer: 'Medulla oblongata',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 146,
    question:
      'Which of the following processes increases in the absence of light?\n(a) uptake of minerals (b) uptake of water (c) elongation of internodes (d) ascent of sap.',
    answer:
      '(c) elongation of internodes Stem elongation takes place in the absence of light due to etiolation.',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 147,
    question:
      'Which component of the mammalian blood does not enter into the nephron?',
    answer: 'Plasma protein',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 148,
    question: 'What is algal bloom?',
    answer:
      'Algal bloom is a massive (very large) growth in the number of algae in an area, usually due to an unnatural increase in nutrients in the water.',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 149,
    question: 'What are helophytes?',
    answer: 'Plants that grow in marshy areas',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 150,
    question:
      'Where does fertilization occur in the female reproductive system?',
    answer: 'Fallopian tube',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 151,
    question: 'Name the most abundant solute in the phloem sap of plants.',
    answer: 'Sucrose',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 152,
    question:
      'What name is given to a foreign body that induces the formation of antibodies in the human body?',
    answer: 'Antigen',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 153,
    question:
      'What name is given to the transfer of sugar from the leaf mesophyll cells to the sieve tube elements of phloem?',
    answer: 'Phloem loading',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 154,
    question:
      'Use the following organisms to construct a possible food chain\nBirds - Butterfly larvae – ants - grass seeds',
    answer: 'Grass seeds → ants → butterfly larvae → birds',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 155,
    question:
      'Which of the following groups of organisms can be used as indicators of SO2 pollution of air?\n(a) Epiphytic lichens (b) Ferns (c) Liverworts d) Hornworts',
    answer: 'a. Epiphytic lichens',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 156,
    question:
      'Name the process that pushes water and other dissolved substances from blood in the glomerulus',
    answer: 'Ultrafiltration',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 157,
    question: 'State one of the two main functions of stomata.',
    answer:
      'They are to allow for exchange of gases /  They limit the loss of water due to evaporation',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 158,
    question:
      'Which of the following is normally affected by Fluoride pollution?\n(a) Kidney (b) Brain (c) Heart (d) Teeth',
    answer: '(d) Teeth',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 159,
    question:
      'According to the pressure flow hypothesis, what is the major force responsible for mass solute transfer from source to sink in plants',
    answer: 'Hydrostatic pressure gradient',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 160,
    question: 'Why should surgical removal of both kidneys result in death?',
    answer: 'Urea will not be excreted',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 161,
    question:
      'Which of the following movements is not related to auxin level?\n(a) bending of shoot towards light (b) movement of root towards soil (c) movement of sunflower head tracking the sun . d). movement of leaves from nearly horizontal position during the day and nearly vertical at night',
    answer:
      'd). movement of leaves from nearly horizontal position during the day and nearly vertical at night',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 162,
    question:
      'What name is given to the cross between two parents having one pair of contrasting characters?',
    answer: 'Monohybrid cross',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 163,
    question:
      'Name the contractile protein of skeletal muscle whose activity involves the enzyme ATPase',
    answer: 'Myosin',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 164,
    question:
      'Name the protein that holds sister chromatids together at the centromere',
    answer: 'Cohesin',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 165,
    question:
      'What name is given to the water available for root absorption in soil?',
    answer: 'Capillary water',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 166,
    question: 'Which part of the nephron is least permeable to water?',
    answer: 'The ascending loop of Henle',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 167,
    question:
      'Which of the following on inhalation dissolves in the blood hemoglobin more rapidly than oxygen?\n(a) Sulphur dioxide (b) Carbon monoxide (c) Ozone (d) Nitrous oxide',
    answer: 'b) Carbon monoxide',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 168,
    question: 'What is the name of the cell membrane of muscle cells?',
    answer: 'Sarcolemma',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 169,
    question:
      'What name is given to a single highly coiled tube where sperms are stored, gets concentrated and mature?',
    answer: 'Epididymis',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 170,
    question:
      'Which of the following are the greatest producers of organic matter?\n(a) Crop plants (b) Forests (c) Plants of the land area (d) Phytoplankton of oceans.',
    answer: '(d) Phytoplankton of oceans',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 171,
    question: 'What name is given to the vein that carries oxygenated blood?',
    answer: 'Pulmonary vein',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 172,
    question:
      'Name the accessory photosynthetic pigment responsible for the orange colour of carrots and the colours of many other fruits and vegetables.',
    answer: 'Carotene',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 173,
    question:
      'Which one of the following will not directly affect transpiration?\n(a) Wind speed (b) Light (c) Temperature (d) Chlorophyll content of leaves',
    answer: 'Chlorophyll content of leaves',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 174,
    question:
      'Which type of soil has the following characteristics: large particles, large air spaces, holds little water, feels gritty.',
    answer: 'Sandy',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 175,
    question:
      'Name the structure that is formed by the villi of the embryo and the uterus of the mother.',
    answer: 'Uterus',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 176,
    question:
      'Which of the following is an example of imbibition?\n(a) The exchange of gases in the stomata of leaves (b) The uptake of water by root hairs (c) The opening and closing of stomata (d) Swelling of seed when put in soil',
    answer: 'Swelling of seed when put in soil',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 177,
    question:
      'Which part of a neuron is responsible for firing an action potential and sending a message to other neurons?',
    answer: 'Axon',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 178,
    question:
      'What name is given to the treatment of seeds at low temperature under moist conditions to break its dormancy?',
    answer: 'Vernalization',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 179,
    question:
      'Why is the dark reaction in photosynthesis called the dark reaction?\nIt does not directly depend on light energy (don’t accept because it occurs in the dark)',
    answer: 'It does not directly depend on light energy',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 180,
    question:
      'Name one of the two actively transported substances in the glomerular filtrate.',
    answer: 'Glucose / Amino acids',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 181,
    question:
      'Name the nutritive layer of the eye which also prevents reflection of light.',
    answer: 'Choroid',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 182,
    question:
      'Which of the following glands is not associated with the alimentary canal?\n(a) Pancreas (b) Adrenal gland (c) Liver (d) Salivary gland',
    answer: '(d) Salivary gland',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 183,
    question: 'What are monocarpic plants?',
    answer: 'They are plants that flower only once in their lifetime and die',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 184,
    question: 'Which group of organisms produce Aflatoxins in cereals?',
    answer: 'Fungi',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 185,
    question:
      'The following substances are excretory products in animals. Choose the one that requires a large amount of water for its elimination (most toxic)\n(a) Urea (b) Uric acid (c) Ammonia (d) Carbon dioxide',
    answer: '(c) Ammonia',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 186,
    question:
      'Mention the enzyme whose activity in the nitrogen cycle is affected by molybdenum deficiency.',
    answer: 'Nitrate reductase',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 187,
    question: 'Which part of the internal ear is responsible for hearing?',
    answer: 'Cochlea',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Speed'
  },
  {
    id: 188,
    question:
      'Arrange the following to indicate their correct sequential order in the vertebral column of humans.\nCervical — lumbar — thoracic — sacral — coccygeal',
    answer: 'Cervical — thoracic — lumbar — sacral — coccygeal',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 189,
    question:
      'Light plays an important role in the life of all organisms. Name any two physiological processes in plants which are affected by light.',
    answer: 'Photoperiodism, phototropism and photosynthesis.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 190,
    question: "Salk's vaccine is used to build immunity against what disease",
    answer: 'Poliomyelitis',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 191,
    question: 'Why is the pyramid of energy always upright?',
    answer:
      'This is due to the fact that during the flow of energy from one trophic level to the other, some energy is always lost as heat in each step.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 192,
    question:
      'In which part of the alimentary canal does absorption of water, simple sugars, and medicines take place?',
    answer: 'Stomach',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 193,
    question: 'Why are apples generally wrapped in waxed paper?',
    answer:
      'Apples are generally wrapped in waxed paper to prevent aerobic respiration by checking the entry of O2',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 194,
    question:
      'Why are there fewer numbers of organisms at the top of the ecological pyramid?',
    answer:
      'Because there is very little food left for secondary consumers compared to the primary consumers. Similarly, there are fewer consumers than producers.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 195,
    question:
      'How are photosynthetic organisms at different depths in the ocean where light intensity is limited adapted to carry out photosynthesis under these conditions?',
    answer:
      'Plants at great depth contain some accessory pigments that work in conjunction with chlorophyll to capture sunlight easily',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 196,
    question:
      'Mention the two very important functions of the allantois in an egg',
    answer: 'Site for gas diffusion, and removal of wastes.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 197,
    question:
      'Why does the rate of photosynthesis decrease at higher temperatures?',
    answer:
      'Photosynthesis is an enzyme-controlled reaction. The rate of photosynthesis decreases at higher temperatures because at high temperatures the enzymes become denatured (destroy).',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 198,
    question: 'Why is insulin not given orally but is injected into the body?',
    answer:
      'Insulin is a protein by composition so if it is given orally it will get digested in the stomach and will not be able to perform its function.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 199,
    question:
      'Bats find their prey by emitting high-pitched clicks, but moths have evolved simple ears to hear these clicks so they can avoid the bats. What type of evolution is this?',
    answer: 'Co-evolution',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 200,
    question:
      'Explain the significance of the micropyle before and after fertilisation',
    answer:
      'The micropyle is the end of the ovule through which the pollen tube enters and deposits the sperm nuclei. During germination, the root emerges from what was the micropylar end',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 201,
    question: 'Why is sexual reproduction so common among organisms?',
    answer:
      'The variation that sexual reproduction creates among offspring is very important to the survival and reproduction of those offspring.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 202,
    question:
      'Most plants close their stomata to conserve water on a hot, dry day. What impact will this have on photosynthesis?',
    answer:
      'The level of carbon dioxide (a reactant) will fall, and the level of oxygen (a product) will rise. As a result, the rate of photosynthesis will slow down.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 203,
    question:
      'What is the basis for designating C3 and C4 pathways of photosynthesis?',
    answer:
      'The number of carbon atoms in the first stable product of carbon dioxide fixation is the basis for designating C3 and C4 pathways of photosynthesis.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 204,
    question:
      'Humans inhale oxygen when they breathe and exhale carbon dioxide. What is the role of oxygen?',
    answer:
      'The oxygen inhaled is the final electron acceptor in the electron transport chain and allows aerobic respiration to proceed, which is the most efficient pathway for harvesting energy in the form of ATP from food molecules.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 205,
    question:
      'Mycorrhiza is a mutualistic association between two organisms. How do the organisms gain from the association?',
    answer:
      'The plant obtains phosphate and other minerals, such as zinc and copper, from the association while the fungus obtains nutrients, such as sugars, from the plant root.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 206,
    question:
      'A Senior High School Biology Student stained a plant tissue, and observed the presence of hemicellulose and pectin in the cell wall of the cells. Which of these represents the tissue?\nCollenchyma (b) Sclerenchyma (c) Xylem (d) Meristem',
    answer: 'Collenchyma',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 207,
    question:
      'Why does one feel blinded for a short while on coming out of a dark room?',
    answer:
      'It is due to the constriction of the pupil to prevent the entry of light into the eye, and also the pigment rhodopsin is bleached to reduce the sensitivity of the rods',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 208,
    question: 'Which of the greenhouse gases are produced in rice fields?',
    answer: 'CH4 (methane)',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 209,
    question:
      'Xerophytes have their leaves modified into spines or reduced in size. How does this help the plants?',
    answer:
      'Xerophytes grow in areas where water is scarce. Their leaves are modified into spines or reduced in size to decrease the rate of transpiration',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 210,
    question:
      'Explain why the sclera of the human eye is distinctly visible but not visible in other mammals.',
    answer:
      'In humans, the color of the sclera contrasts with the smaller size and dark color of the iris which makes it distinctly visible, but in other mammals, the sclera gets camouflaged with the color and larger size of the iris and is therefore not visible.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 211,
    question:
      'Which macronutrient is a component of all organic compounds but is not obtained from the soil?',
    answer: 'Carbon',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 212,
    question:
      'Why is vivipary an undesirable character for annual crop plants?',
    answer:
      'The seeds cannot be stored under normal conditions for the next crop season',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 213,
    question:
      'Chlorophyll a is the primary pigment for light reaction. What is the role of accessory pigments in photosynthesis?',
    answer:
      'They absorb wavelengths of light not absorbed by chlorophyll a and transfer the energy to chlorophyll. They also protect chlorophyll a from photo-oxidation.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 214,
    question:
      'Birds find shelter and build nests on trees without harming the trees. What is the term for the symbiotic relationship between the birds and the trees?',
    answer: 'Commensalism',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 215,
    question:
      'The cells at the root tip of a certain plant were found to contain 24 chromosomes. What will be the number of chromosomes in the aleurone cells of the plant?',
    answer:
      '36 (Thirty-six). The outermost layer of the endosperm (3n) of a seed is called the aleurone layer. Since the aleurone layer is triploid, the number of chromosomes will be 36, as root tip cells are diploid (2n) with 24 chromosomes.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 216,
    question:
      'A large proportion of oxygen remains unused in the human blood even after oxygen uptake by the body tissues. What happens to the remaining oxygen?',
    answer: 'This remaining oxygen acts as a reserve during muscular exercise.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Quarter'
  },
  {
    id: 217,
    question:
      'People normally look for lawn mowers to mow their lawns so as to prevent the overgrowth of their lawn grass. Name the tissue which is responsible for this overgrowth.',
    answer: 'Intercalary meristem',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 218,
    question: 'Why is RuBisCo enzyme the most abundant enzyme in the world?',
    answer:
      'Because this enzyme is responsible for photosynthesis and is present in all green parts of plants.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 219,
    question:
      'A mature mammalian erythrocyte lacks a nucleus. What functional advantage does that provide?',
    answer:
      'The presence of the nucleus would occupy space and reduce the oxygen carrying capacity. (The nucleus is also not required as a mature RBC does not divide.)',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 220,
    question: 'Why do plants have more dead tissues compared to animals?',
    answer:
      'Plants don’t have skeletons, and each cell must support itself or receive direct support from tissues around it, in order for the plant to remain upright. Hence, plants need the hard, dead cells to remain upright.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 221,
    question:
      'Explain why it would not be possible to date the fossil of an organism that existed 100 million years ago using the decay of carbon-14.',
    answer:
      'A fossil that is 100 million years old has almost no carbon-14 left in it, the amount will be too small to be detected. Therefore carbon-14 dating would not give a reliable date or age.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 222,
    question: 'What does biochemical oxygen demand measure?',
    answer:
      'It measures the amount of dissolved oxygen required by aerobic biological organisms to break down organic material in a water sample (at a certain temperature over a specific time period).',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 223,
    question:
      'Why is it important to cut a plant stem at an angle under water during an experiment to determine the effect of environmental conditions on the transpiration rate using a simple photometer?',
    answer:
      'The stem is cut under water to prevent air bubbles from entering the xylem vessel and blocking the movement of water. Cutting at an angle increases the surface area for water uptake by the xylem.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 224,
    question:
      'What evidence do scientists use to show that dinosaurs once existed on Earth?',
    answer:
      'Fossils that were formed when the dinosaurs died / animals like sharks, birds, and crocodiles that show certain related characteristics to dinosaurs. (any one of them)',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 225,
    question:
      'Why should the turgor pressure of the guard cells affect the opening and closing of the stomatal pore?',
    answer:
      'When the guard cells are turgid, they swell and bend outward. As a result, the stomatal aperture opens. When they are flaccid, the tension from the wall is released, and the stomatal aperture closes.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 226,
    question:
      'A mature mammalian erythrocyte lacks mitochondria. What advantage does that provide?',
    answer:
      'Mitochondria are absent so that oxygen is not utilized by the RBC and all the oxygen is transported to target areas. / Lack of mitochondria helps in the way that RBC would not consume any oxygen that it is transporting.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Semi-Final'
  },
  {
    id: 227,
    question:
      'Why is it essential that blood pressure in the capillary vessels be much lower than that in the artery?',
    answer:
      'Low blood pressure in the capillaries slows down the flow of blood, giving enough time for diffusion of substances between the blood and cells. The walls of capillaries are also much thinner than those of arteries (squamous epithelium only), so they could rupture/break if the blood pressure is too high in them.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Final'
  },
  {
    id: 228,
    question:
      'Why should a person who is feeling dizzy be fed with glucose or a fruit juice instead of bread and margarine that might give more energy?',
    answer:
      'Glucose gives instant energy as it is absorbed and reaches the blood. Bread and margarine, however, require time to digest and be absorbed. As sick people need an immediate energy supply, they are fed with glucose or given fruit juice.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Final'
  },
  {
    id: 229,
    question: 'Why should mowing lawn grass facilitate better maintenance?',
    answer:
      'Apical dominance of the terminal bud is due to the secretion of auxin (IAA) by the apical bud. Hence the removal of the apical bud causes sprouting of lateral buds with stimulation of the intercalary meristem, thereby facilitating better maintenance of grass.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Speed',
    question_year: '2020',
    type: 'Final'
  }
];

export default questionsData;
