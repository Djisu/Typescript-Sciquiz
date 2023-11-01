const questionsData = [
  {
    question: 'Mention the organ in mammals in which urea is produced.',
    answer: 'Liver',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory',
    question_year: 2020
  },
  {
    question:
      'Mention the process by which glucose is taken back from the glomerular filtrate by the proximal convoluted tubule',
    answer: 'Active transport',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory',
    question_year: 2020
  },
  {
    question:
      'What name is given to masking the character of one gene by other gene?',
    answer: 'Epistasis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What name is given to the complex formed by a pair of synapsed homologous chromosome?',
    answer: 'Bivalent',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What name is given to two organs which are similar in structure and origin, but not necessarily similar in function?',
    answer: 'Homologous',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Arrange the following to indicate the proper sequence of prophase I Leptotene… Zygotene….Pachytene….  Diplotene …..  Diakinesis',
    answer: 'Leptotene… Zygotene….Pachytene….  Diplotene …..  Diakinesis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What name is given the exchange of genetic material between chromatids of paired homologous chromosomes during the first meiotic division?',
    answer: 'Crossing over',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'DNA replication is an important process that occurs during cell division. It is also known as semi-conservative replication, during which DNA makes a copy of itself. Mention one of the three stages of DNA replication',
    answer: 'Initiation / Elongation / Termination',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Mention the stage in meiosis in which homologous chromosomes separate while sister chromatids remain associated at the centromere',
    answer: 'Anaphase I',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Name any two of the three models for DNA replication that were proposed after Watson and Crick proposed the double helix model',
    answer: 'Conservative, semiconservative, and dispersive.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question: 'Give the name of the sensory neuron involved in smell',
    answer: 'Olfactory neuron.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nervous',
    question_year: 2020
  },
  {
    question:
      'What name is given to closely related species living in the same area/habitat?',
    answer: 'Sympatric',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: 2020
  },
  {
    question: 'In which way are exoskeletons similar to endoskeletons?',
    answer: 'They are both responsible for structural support of the body',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: 2020
  },
  {
    question: 'Which feature in birds indicates their reptilian ancestry?',
    answer: 'Scales on their limbs',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: 2020
  },
  {
    question: 'Lysosomes are formed by budding from which cellular organelle?',
    answer: 'Golgi apparatus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: 2020
  },
  {
    question:
      'What is the simplest level of packing of the eukaryotic chromosome?',
    answer: 'The nucleosome',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Origin',
    question_year: 2020
  },
  {
    question: 'Which hormone protects growth of lateral buds?',
    answer: 'Cytokinin',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Some seeds germinate while the fruit is attached to the parent plant. What name is given to this?',
    answer: 'Viviparity',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'What substance is used to harden the exoskeleton through biomineralization?',
    answer: 'Calcium Carbonate',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Upon fertilization while ovule develops into seed, which structure develops from a nucleus?',
    answer: 'Perisperm',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question: 'Which group of algae are closely related to plants?',
    answer: 'Green algae',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question: 'What is the function of lenticels in woody stems?',
    answer:
      'In woody stems, lenticels allow internal cells to exchange gases with the outside atmosphere.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Tracheids, vessel elements, sieve-tube cells, and companion cells are components of which tissue in plants?',
    answer: 'Vascular tissue',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'What name is given to a leaf without a petiole that is attached directly to the plant stem?',
    answer: 'Sessile',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'The coiling of tendrils around a support is a good example of which type of tropism.',
    answer: 'Thigmotropism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Name the primary acceptor of CO2 during CO2 fixation in C3 plants.',
    answer: 'Ribulose 1, 5-diphosphate (RuDP) / ribulose biphosphate (RuBP)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Which plant hormone is principally connected with cell division?',
    answer:
      'Cytokinin (It has a very specific effect on cell division, hence the name cytokinin.)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'What name is given to the amount of xylem tissues developed over one growth period and separated in time from adjacent tissues by a non-growing or dormant period.',
    answer: 'Growth ring / tree ring / annual ring',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question: 'Viviparity normally occurs in which group of plants',
    answer: 'Mangroves',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Mention the specific type of tropism to which the statement below refers. Plant stems growing upwards',
    answer: 'Negative geotropism.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question: 'Companion cells are unique to which tissue in angiosperms?',
    answer: 'Phloem',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Some people eat the petiole of some herbaceous plants. Which tissue provides support for the petiole?',
    answer: 'Collenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Xylem and phloem tissues are derived from which primary meristem?',
    answer: 'Procambium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question: 'The epidermis of plants is derived from which primary meristem?',
    answer: 'Protoderm',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Which ground tissue is a major component of the lamina of lettuce leaves?',
    answer: 'Parenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'What name is given to the actual ratio of the volume of carbon dioxide eliminated to the volume of oxygen consumed during cellular respiration?',
    answer: 'Respiratory quotient',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory',
    question_year: 2020
  },
  {
    question:
      'Which stage of aerobic respiration produces ATP and NADH and releases CO2?',
    answer: 'Krebs cycle',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory',
    question_year: 2020
  },
  {
    question: 'Which of the three stages of aerobic respiration requires CO2?',
    answer: 'None',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory',
    question_year: 2020
  },
  {
    question:
      'Name the type of sensory receptor which responds to mechanical forces, such as pressure or distortion.',
    answer: 'Mechanoreceptor',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory',
    question_year: 2020
  },
  {
    question:
      'Which category of vertebrae provides the range of movement within the neck?',
    answer: 'Cervical',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal',
    question_year: 2020
  },
  {
    question: 'How many cervical vertebrae are found in humans?',
    answer: 'Seven',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal',
    question_year: 2020
  },
  {
    question: 'What is the main function of the processes of the vertebrae?',
    answer: 'Provide attachments for ligaments and muscles',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal',
    question_year: 2020
  },
  {
    question: 'Who is credited with binomial nomenclature?',
    answer: '(Carolus) Linnaeus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2020
  },
  {
    question:
      'What name is given to the thin transparent membrane that covers the cornea of the mammalian eye externally?',
    answer: 'Conjunctiva',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'What name is given the physiological capacity of organisms to produce their offspring under natural conditions?',
    answer: 'Biotic potential',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Some proteins are found in the plasma membrane. Which part of the protein is within the membrane itself?',
    answer: 'Hydrophobic region',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Which of the ground tissues in plants makes the shell of a nut hard?',
    answer: 'Sclerenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Mention the predominant driving force that moves blood back to the heart in the veins',
    answer: 'Contraction of skeletal muscles',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal',
    question_year: 2020
  },
  {
    question:
      'Which component of the plasma membrane can be either found on the surface of the membrane or embedded in the membrane structure?',
    answer: 'Protein',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'The individual chromosomes become visible with a light microscope during which stage of mitosis?',
    answer: 'Prophase',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Potatoes contain food in the form of starch. Which ground tissue will one be eating when one eats mashed potatoes?',
    answer: 'Parenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'Which of the following tissues will most likely provide flexible support in plants?\nEpidermis, Sclerenchyma, Parenchyma, Collenchyma, Cambium',
    answer: 'Collenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plants',
    question_year: 2020
  },
  {
    question:
      'What name is given to the physical site or location of a specific gene on a chromosome?',
    answer: 'Locus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Where does an animal cell get energy for active transport processes?',
    answer:
      'The cell harvests energy from ATP produced by its own metabolism to power active transport processes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'In the presence of oxygen, all cells synthesize ATP. Mention the process by which many cells also can metabolize pyruvate if oxygen is not present.',
    answer: 'Fermentation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question: 'Name the two main products that result from photosynthesis?',
    answer: 'Sugars/carbohydrates and oxygen',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'What name is given to the two identical strands joined by a common kinetochore as a result of a chromosome that duplicated during the S phase of the cell cycle?',
    answer: 'Sister Chromatids',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Glucose that enters the glycolytic pathway is split into two molecules of what molecule?',
    answer: 'Pyruvate',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'What name is given to the class of carbohydrate which cannot be hydrolyzed further?',
    answer: 'Monosaccharides',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question:
      'What name is given to a group of organisms that are able to interbreed and produce fertile offspring?',
    answer: 'Species',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2020
  },
  {
    question:
      'Name one of the three common components of eukaryotic cell division and binary fission.',
    answer:
      'DNA duplication, Segregation of duplicated chromosomes, and the division of the cytoplasmic contents.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2020
  },
  {
    question:
      'Phototropic and geotropic movements in plants are linked to which plant hormone.',
    answer: 'Auxin / IAA',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'The net result of the breakdown of glucose in glycolysis and fermentation is the production of 2 molecules which molecule?',
    answer: 'ATP',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'Which of the following is a seedless vascular plant?\na) Gymnosperm    b) Bryophyte    c) Pteridophytes  d) Angiosperm',
    answer: 'Pteridophytes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'What process is responsible for the movement of carbon dioxide into a leaf?',
    answer: 'Diffusion',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'What function does the mammalian ear provide other than hearing?',
    answer: 'Balance',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'Which one of these is an essential mineral, which is not constituent of any enzyme but stimulates the activity of many enzymes in plants?',
    answer: 'Potassium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question:
      'Which group of animals is Charles Darwin best known for studying?',
    answer: 'Birds',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question: 'Which class of carbohydrates is considered as non-sugar?',
    answer: 'Polysaccharides',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question: 'Which vitamin functions as a hormone as well as visual pigment?',
    answer: 'Retinol/ Vitamin A',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question:
      'The absence of the second X chromosome in a female leads to which type of syndrome?',
    answer: 'Turner syndrome',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Name the plant organelle which acts as a major site for an oxidative reaction?',
    answer: 'Peroxisomes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Mention the tissue in flowering plants in which bidirectional translocation of solutes takes place.',
    answer: 'Phloem',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'Hemolysis is associated with which type of cells?',
    answer: 'Red blood cells',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question:
      'One round of meiotic division gives rise to how many haploid cells.',
    answer: 'Four (4)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'The coiling of climbing stems around a support is a good example of which type of tropism',
    answer: 'Thigmotropism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Internally, the kidney has three regions—an outer cortex, a medulla in the middle, and the renal pelvis. Which of the three is the expanded end of the ureter?',
    answer: 'Renal pelvis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question:
      'Leptotene and zygotene are the stages of cell division that occur during which phase of meiosis.',
    answer: 'Prophase',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What name is given to the pressure that develops in a cell due to osmotic diffusion of water inside it?',
    answer: 'Turgor Pressure',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'What will happen when an endothermic animal is faced with a sudden drop in environmental temperature?',
    answer: 'Increase muscle activity to generate heat',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question: 'What is the reason for doing a test cross?',
    answer: 'To identify heterozygous individuals with the dominant phenotype',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What is the likely evolutionary advantage of sexual reproduction over asexual reproduction?',
    answer: 'Sexual reproduction results in greater variation in the offspring',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question: 'What is the biological polymer in paper?',
    answer: 'Cellulose',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which element plays an important role in biological nitrogen fixation?',
    answer: 'Molybdenum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'What name is given to the response of different organisms to the environmental rhythms of light and darkness?',
    answer: 'Photoperiodism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'When a population has a gene with four alleles circulating, how many possible genotypes are there?',
    answer: 'Ten (10)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'The RNA components of ribosomes are synthesized in which part of the cell?',
    answer: 'Nucleolus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Name the process that restores the diploid condition in organisms.',
    answer: 'Fertilization',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What name is given to the capacity of an earthworm to reform segments that break off?',
    answer: 'Regeneration',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2020
  },
  {
    question:
      'What name is given to the influence of apical bud in suppressing the growth of lateral buds in plants?',
    answer: 'Apical Dominance',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which chemical is believed to be involved in flowering in plants?',
    answer: 'Florigen',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'How are waste products transported to the kidneys for removal?',
    answer: 'In blood',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question:
      'In which part of the chloroplasts do Photosynthetic pigments occur?',
    answer: 'Thylakoid Membranes',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Select the one, which comes under a lotic ecosystem. a) Ocean    b) Lake   c) Pond   d) River',
    answer: 'River (In fresh water, lotic means running water)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Name the tissues which detect changes inside and outside the body and responds by action potential',
    answer: 'Nervous tissue',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2020
  },
  {
    question:
      'What name is given to the branch of ecology that deals with the structure, development, and distribution of ecological communities?',
    answer: 'Synecology',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Name the organisms that manufacture organic compounds from simple inorganic compounds without using sunlight?',
    answer: 'Chemotrophs',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'In aerobic respiration carbohydrates are ultimately broken down into what molecule',
    answer: 'Carbon dioxide',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question: "Which organ in mammals are known as the 'window of the brain'?",
    answer: 'Sensory organs',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'Which of the following parameter of light is NOT required by plants to grow? a) Wavelength of light  b) Intensity of light c) Duration of light d) Color of light',
    answer: 'd) Color of light',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'Which microtubule pulls the chromosomes towards the pole?',
    answer: 'Kinetochore',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What name is given to the white part of the eye which covers the entire eye except for cornea, and is made up of collagen fibers and fibroblast?',
    answer: 'Sclera',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question: 'The interfascicular cambium is formed from which cells?',
    answer: 'Medullary rays',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Name the part of the eye which produces aqueous fluid that fills the front part of the eye.',
    answer: 'Ciliary body',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'What name is given to the end point of the ecological succession?',
    answer: 'Climax community',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question: 'What are lenticels in plants?',
    answer:
      'Lenticels are the small opening in the bark of the plants, mainly in stem and root and allow the exchange of gases between the atmosphere and the inner cells.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Name the enzyme which is found in tears, sweat, and an egg white',
    answer: 'Lysozyme',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Which tissue in plants is responsible for movement of mineral salts to the leaves?',
    answer: 'Xylem',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which of the following is the largest single membrane-bound intracellular compartment? a) Ribosome b) Golgi apparatus c) Nucleus d) Endoplasmic reticulum',
    answer: 'd) Endoplasmic reticulum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question: 'Which organ in mammals produces urea?',
    answer: 'Liver',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question: 'What name is given to the digestion of a cell’s own component?',
    answer: 'Autophagy',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Name the multipolar neuron which is located entirely within the central nervous system',
    answer: 'Interneuron',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2020
  },
  {
    question: 'Give the location and function of thylakoids',
    answer: 'Inside the chloroplast, it traps solar energy',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Name the phase of the cardiac cycle in which the ventricles relax.',
    answer: 'Diastolic phase',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question: 'Mention the principle on which pedigree analysis works?',
    answer: 'Probability',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Name the filamentous fungi which was used in Engelmann’s experiment to show photosynthetic activity?',
    answer: 'Spirogyra',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2020
  },
  {
    question:
      'Identify the one that is not transported by blood\na) Hormone b) Oxygen c) Heat d) Lymph',
    answer: 'd) Lymph',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question: 'What are microsomes?',
    answer:
      'Microsomes are small vesicles formed by the breakdown of ER membrane into fragments',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'In which compartment of plant cells do the light-independent reactions of photosynthesis take place?',
    answer: 'Stroma',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which of the following organelles takes part in the secretion of mucus?\na) Cytoplasm b) Ribosomes c) ER compartments d) Golgi apparatus',
    answer: 'd) Golgi apparatus',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question: 'Name the purine bases which are commonly found in DNA and RNA?',
    answer: 'Adenine and guanine',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Which hormone maintains blood glucose level by activation of gluconeogenesis?',
    answer: 'Glucagon',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2020
  },
  {
    question:
      'Which of the following organelles works as a lysosome in the plants?\na) Contractile vacuole b) Peroxisome c) Plastid d) Vacuole',
    answer: 'b) Peroxisome',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Which of Mendel’s laws is also known as the law of purity of gametes.',
    answer:
      'Law of segregation (gametes are always remained pure by separating the genes or factors at the time of gamete formation)',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Name the term which defines the study of the characteristics and parameters of the population.',
    answer: 'Demography',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Which of the following is not the function of the Golgi apparatus?\na) Processing and shorting of glycoprotein b) Lipid metabolism c) Carbohydrate metabolism d) Amino acid metabolism',
    answer: 'd) Amino acid metabolism',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question: 'What is the function of a nonsense codon?',
    answer:
      'The function of nonsense codons is to terminate the message of a gene-controlled protein synthesis.',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question: 'Casparian strip is present in which part of the root of plants?',
    answer: 'Endodermis',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which of the following is not one of the functions of the mammalian kidney?\na) Regulates blood volume and composition b) Synthesizes glucose c) Regulates blood pressure d) Defends the body against disease',
    answer: 'd) Defends the body against disease',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question:
      'Which carbohydrate molecule is a principal component of the cell wall of angiosperms?',
    answer: 'Cellulose',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question: 'What is meant by power of accommodation of the eye?',
    answer:
      'It refers to the ability of an eye to change the focal length of the eye lens',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'Which of the following is the first step in urine production?\na) Tubular secretion b) Glomerular reabsorption c) Tubular reabsorption d) Glomerular filtration',
    answer: 'd) Glomerular reabsorption',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question:
      'Name the muscles of the eye responsible for accommodation of the eye',
    answer: 'Ciliary muscles',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'Name the cross by which the law of independent assortment is inferred.',
    answer: 'Dihybrid cross',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Which of the following is NOT an endocrine gland?\na) Hypothalamus b) Pituitary	c) Parathyroid	d) Pancreas',
    answer: 'None',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2020
  },
  {
    question:
      'The arrangement of xylem tissue in a vascular bundle such that the protoxylem is at the center and the metaxylem is towards the periphery is called',
    answer: 'Endarch',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'The region of distinct vision in the mammalian eye.',
    answer: 'Yellow spot',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question: 'The process by which cells engulf pathogens',
    answer: 'Phagocytosis',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Which one of the following in a food chain has the largest population?\n(a) Producers (b) Primary consumers (c) Secondary consumers (d) Decomposers',
    answer: '(d) Decomposers',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Which organelle in plants functions similarly as lysosomes in animal cells?',
    answer: 'Vacuoles',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question:
      'Name the substance whose accumulation results in muscle fatigue.',
    answer: 'Lactic acid',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'Which of the following organisms occupy the second trophic level in a lake?\n(a) Phytoplankton (b) Fishes (c) Zooplankton (d) Benthos',
    answer: '(c) Zooplankton',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Which ions are necessary in the chemical events of muscle contraction?',
    answer: 'Calcium and Magnesium',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'Where can one locate the respiratory centers which control inspiration and expiration in mammals?',
    answer: 'Medulla oblongata',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2020
  },
  {
    question:
      'Which of the following processes increases in the absence of light?\n(a) uptake of minerals (b) uptake of water (c) elongation of internodes (d) ascent of sap.',
    answer:
      '(c) elongation of internodes Stem elongation takes place in the absence of light due to etiolation.',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which component of mammalian blood does not enter into the nephron?',
    answer: 'Plasma protein',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question: 'What is algal bloom?',
    answer:
      'Algal bloom is a massive (very large) growth in the number of algae in an area, usually due to an unnatural increase in nutrients in the water.',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question: 'What are helophytes?',
    answer: 'Plants that grow in marshy areas',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Where does fertilization occur in the female reproductive system?',
    answer: 'Fallopian tube',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Reproductive System',
    question_year: 2020
  },
  {
    question: 'Name the most abundant solute in the phloem sap of plants.',
    answer: 'Sucrose',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question:
      'What name is given to a foreign body that induces the formation of antibodies in the human body?',
    answer: 'Antigen',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question:
      'What name is given to the transfer of sugar from the leaf mesophyll cells to the sieve tube elements of phloem?',
    answer: 'Phloem loading',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Use the following organisms to construct a possible food chain\nBirds - Butterfly larvae – ants - grass seeds',
    answer: 'Grass seeds → ants → butterfly larvae → birds',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Which of the following groups of organisms can be used as indicators of SO2 pollution of air?\n(a) Epiphytic lichens (b) Ferns (c) Liverworts d) Hornworts',
    answer: 'a. Epiphytic lichens',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Name the process that pushes water and other dissolved substances from blood in the glomerulus',
    answer: 'Ultrafiltration',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question: 'State one of the two main functions of stomata.',
    answer:
      'They are to allow for exchange of gases / They limit the loss of water due to evaporation',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which of the following is normally affected by Fluoride pollution?\n(a) Kidney (b) Brain (c) Heart (d) Teeth',
    answer: '(d) Teeth',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Dentition',
    question_year: 2020
  },
  {
    question:
      'According to the pressure flow hypothesis, what is the major force responsible for mass solute transfer from source to sink in plants',
    answer: 'Hydrostatic pressure gradient',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell biology',
    question_year: 2020
  },
  {
    question: 'Why should surgical removal of both kidneys result in death?',
    answer: 'Urea will not be excreted',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question:
      'Which of the following movements is not related to auxin level?\n(a) bending of shoot towards light (b) movement of root towards soil (c) movement of sunflower head tracking the sun (d). movement of leaves from nearly horizontal position during the day and nearly vertical at night',
    answer:
      'd). movement of leaves from nearly horizontal position during the day and nearly vertical at night',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'What name is given to the cross between two parents having one pair of contrasting characters?',
    answer: 'Monohybrid cross',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Name the contractile protein of skeletal muscle whose activity involves the enzyme ATPase',
    answer: 'Myosin',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2020
  },
  {
    question:
      'Name the protein that holds sister chromatids together at the centromere',
    answer: 'Cohesin',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'What name is given to the water available for root absorption in soil?',
    answer: 'Capillary water',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Cell Kinetics',
    question_year: 2020
  },
  {
    question: 'Which part of the nephron is least permeable to water?',
    answer: 'The ascending loop of Henle',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question:
      'Which of the following on inhalation dissolves in the blood hemoglobin more rapidly than oxygen?\n(a) Sulphur dioxide (b) Carbon mono-oxide (c) Ozone (d) Nitrous oxide',
    answer: 'b) Carbon mono-oxide',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question: 'What is the name of the cell membrane of muscle cells?',
    answer: 'Sarcolemma',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question:
      'What name is given to a single highly coiled tube where sperms are stored, get concentrated and mature?',
    answer: 'Epididymis',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Reproductive System',
    question_year: 2020
  },
  {
    question:
      'Which of the following are the greatest producers of organic matter?\n(a) Crop plants (b) Forests (c) plants of the land area (d) phytoplankton of oceans.',
    answer: '(d) Phytoplankton of oceans',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question: 'What name is given to the vein that carries oxygenated blood?',
    answer: 'Pulmonary vein',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question:
      'Name the accessory photosynthetic pigment responsible for the orange color of carrots and the colors of many other fruits and vegetables.',
    answer: 'Carotene',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which one of the following will not directly affect transpiration?\n(a) Wind speed (b) Light (c) Temperature (d) Chlorophyll content of leaves',
    answer: 'Chlorophyll content of leaves',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which type of soil has the following characteristics: large particles, large air spaces, holds little water, feels gritty.',
    answer: 'Sandy',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Name the structure that is formed by the villi of the embryo and the uterus of the mother.',
    answer: 'Uterus',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2020
  },
  {
    question:
      'Which of the following is an example of imbibition?\n(a) The exchange of gases in the stomata of leaves (b) The uptake of water by root hairs (c) The opening and closing of stomata (d) Swelling of seed when put in soil',
    answer: 'Swelling of seed when put in soil',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Which part of a neuron is responsible for firing an action potential and sending a message to other neurons?',
    answer: 'Axon',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2020
  },
  {
    question:
      'What name is given to the treatment of seeds at low temperature under moist conditions to break its dormancy?',
    answer: 'Vernalization',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Why is the dark reaction in photosynthesis called dark reaction?',
    answer:
      'It does not directly depend on light energy (don’t accept because it occurs in the dark)',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Name one of the two actively transported substances in the glomerular filtrate.',
    answer: 'Glucose / Amino acids',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },

  {
    question:
      'Name the nutritive layer of the eye which also prevents reflection of light.',
    answer: 'Choroid',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'Which of the following glands is not associated with the alimentary canal?\n(a) Pancreas (b) Adrenal gland (c) Liver (d) Salivary gland',
    answer: 'Salivary gland',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2020
  },
  {
    question: 'What are monocarpic plants?',
    answer: 'They are plants that flower only once in their lifetime and die',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'Which group of organisms produce Aflatoxins in cereals?',
    answer: 'Fungi',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2020
  },
  {
    question:
      'The following substances are excretory products in animals. Choose the one that requires a large amount of water for its elimination (most toxic)\n(a) Urea (b) Uric acid (c) Ammonia (d) Carbon dioxide',
    answer: 'Ammonia',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2020
  },
  {
    question:
      'Mention the enzyme whose activity in the nitrogen cycle is affected by molybdenum deficiency',
    answer: 'Nitrate reductase',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question: 'Which part of the internal ear is responsible for hearing?',
    answer: 'Cochlea',
    difficulty_level: 'Round 16',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question:
      'Arrange the following to indicate their correct sequential order in the vertebral column of humans. Cervical — lumbar — thoracic — sacral — coccygeal',
    answer: 'Cervical — thoracic — lumbar — sacral — coccygeal',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2020
  },
  {
    question:
      'Light plays an important role in the life of all organisms. Name any two physiological processes in plants which are affected by light.',
    answer: 'Photoperiodism, phototropism and photosynthesis.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question: "Salk's vaccine is used to build immunity against what disease",
    answer: 'Poliomyelitis',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Immunology',
    question_year: 2020
  },

  {
    question: 'Why is the pyramid of energy always upright?',
    answer:
      'This is due to the fact that during the flow of energy from one trophic level to the other, some energy is always lost as heat in each step.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'In which part of alimentary canal does absorption of water, simple sugars and medicines takes place?',
    answer: 'Stomach',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2020
  },
  {
    question: 'Why are apples generally wrapped in waxed paper?',
    answer:
      'Apples are generally wrapped in waxed paper to prevent aerobic respiration by checking the entry of O2',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'Why are there fewer organisms at the top of the ecological pyramid?',
    answer:
      'Because there is very little food left for secondary consumers compared to the primary consumers. Similarly, there are fewer consumers than producers.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'How are photosynthetic organisms at different depths in the ocean where light intensity is limited adapted to carry out photosynthesis under these conditions?',
    answer:
      'Plants at great depth contain some accessory pigments that work in conjunction with chlorophyll to capture sunlight easily.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Mention the two very important functions of the allantois in an egg.',
    answer: 'Site for gas diffusion, and removal of wastes.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Reproductive System',
    question_year: 2020
  },
  {
    question:
      'Why does the rate of photosynthesis decrease at higher temperatures?',
    answer:
      'Photosynthesis is an enzyme-controlled reaction. The rate of photosynthesis decreases at higher temperatures because at high temperatures the enzymes become denatured (destroy).',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'Why is insulin not given orally but is injected into the body?',
    answer:
      'Insulin is a protein by composition so if it is given orally it will get digested in the stomach and will not be able to perform its function.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2020
  },
  {
    question:
      'Bats find their prey by emitting high-pitched clicks, but moths have evolved simple ears to hear these clicks so they can avoid the bats. What type of evolution is this?',
    answer: 'Co-evolution',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Explain the significance of the micropyle before and after fertilization',
    answer:
      'The micropyle is the end of the ovule through which the pollen tube enters and deposits the sperm nuclei. During germination, the root emerges from what was the micropylar end.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'Why is sexual reproduction so common among organisms?',
    answer:
      'The variation that sexual reproduction creates among offspring is very important to the survival and reproduction of those offspring.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Reproductive System',
    question_year: 2020
  },
  {
    question:
      'Most plants close their stomata to conserve water on a hot, dry day. What impact will this have on photosynthesis?',
    answer:
      'The level of carbon dioxide (a reactant) will fall, and the level of oxygen (a product) will rise. As a result, the rate of photosynthesis will slow down.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'What is the basis for designating C3 and C4 pathways of photosynthesis?',
    answer:
      'The number of carbon atoms in the first stable product of carbon dioxide fixation is the basis for designating C3 and C4 pathways of photosynthesis.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'Humans inhale oxygen when they breathe and exhale carbon dioxide. What is the role of oxygen?',
    answer:
      'The oxygen inhaled is the final electron acceptor in the electron transport chain and allows aerobic respiration to proceed, which is the most efficient pathway for harvesting energy in the form of ATP from food molecules.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'Mycorrhiza is a mutualistic association between two organisms. How do the organisms gain from the association?',
    answer:
      'The plant obtains phosphate and other minerals, such as zinc and copper, from the association while the fungus obtains nutrients, such as sugars, from the plant root.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'A Senior High School Biology Student stained a plant tissue and observed the presence of hemicellulose and pectin in the cell wall of the cells. Which of these represents the tissue?',
    answer: 'Collenchyma',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Why does one feel blinded for a short while on coming out of a dark room?',
    answer:
      'It is due to the constriction of the pupil to prevent the entry of light into the eye, and also the pigment rhodopsin is bleached to reduce the sensitivity of the rods.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Sensory system',
    question_year: 2020
  },
  {
    question: 'Which of the greenhouse gases are produced in rice fields?',
    answer: 'CH4 (methane)',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Xerophytes have their leaves modified into spines or reduced in size. How does this help the plants?',
    answer:
      'Xerophytes grow in areas where water is scarce. Their leaves are modified into spines or reduced in size in order to decrease the rate of transpiration.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'Explain why the sclera of the human eye is distinctly visible but not visible in other mammals.',
    answer:
      'In humans, the color of the sclera contrasts with the smaller size and dark color of the iris, which makes it distinctly visible. In other mammals, the sclera gets camouflaged with the color and larger size of the iris and is therefore not visible.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2020
  },
  {
    question:
      'Which macronutrient is a component of all organic compounds but is not obtained from soil.',
    answer: 'Carbon',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question:
      'Why is vivipary an undesirable character for annual crop plants?',
    answer:
      'The seeds cannot be stored under normal conditions for the next crop season.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Chlorophyll a is the primary pigment for light reaction. What is the role of accessory pigments in photosynthesis?',
    answer:
      'They absorb wavelengths of light not absorbed by chlorophyll a and transfer the energy to chlorophyll. They also protect chlorophyll a from photo-oxidation.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'Birds find shelter and build nests on trees without harming the trees. What is the term for the symbiotic relationship between the birds and the trees?',
    answer: 'Commensalism',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2020
  },
  {
    question:
      'The cells at the root tip of a certain plant were found to contain 24 chromosomes. What will be the number of chromosomes in the aleurone cells of the plant?',
    answer:
      '36 (Thirty-six). The outermost layer of the endosperm (3n) of a seed is called the aleurone layer. Since the aleurone layer is triploid, the number of chromosomes will be 36, as root tip cells are diploid (2n) 24 cells.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'A large proportion of oxygen remains unused in human blood even after oxygen uptake by the body tissues. What happens to the remaining oxygen?',
    answer: 'This remaining oxygen acts as a reserve during muscular exercise.',
    difficulty_level: 'Quarter',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },

  {
    question:
      'People normally look for lawn mowers to mow their lawns so as to prevent the overgrowth of their lawn grass. Name the tissue which is responsible for this overgrowth.',
    answer: 'Intercalary meristem',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'Why is RuBisCo enzyme the most abundant enzyme in the world?',
    answer:
      'Because this enzyme is responsible for photosynthesis and is present in all green parts of plants.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'A mature mammalian erythrocyte lacks a nucleus. What functional advantage does that provide?',
    answer:
      'The presence of the nucleus would occupy space and reduce the oxygen-carrying capacity. (The nucleus is also not required as a mature RBC does not divide).',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question: 'Why do plants have more dead tissues compared to animals?',
    answer:
      'Plants don’t have skeletons, and each cell must support itself or receive direct support from tissues around it, in order for the plant to remain upright. Hence plants need the hard, dead cells to remain upright.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2020
  },
  {
    question:
      'Explain why it would not be possible to date the fossil of an organism that existed 100 million years ago using the decay of carbon-14.',
    answer:
      'A fossil that is 100 million years old has almost no carbon-14 left in it, the amount will be too small to be detected. Therefore carbon-14 dating would not give a reliable date or age.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question: 'What does biochemical oxygen demand measure?',
    answer:
      'It measures the amount of dissolved oxygen required by aerobic biological organisms to break down organic material in a water sample (at a certain temperature over a specific time period).',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2020
  },
  {
    question:
      'Why is it important to cut a plant stem at an angle under water during an experiment to determine the effect of environmental conditions on transpiration rate using a simple photometer?',
    answer:
      'The reason why the stem is cut under water is to prevent air bubbles entering the xylem vessel and blocking the movement of water. It is cut at an angle to increase the surface area for water uptake by the xylem.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question:
      'What evidence do scientists use to show that dinosaurs once existed on Earth?',
    answer:
      'Fossils that were formed when the dinosaurs died / animals like sharks, birds, and crocodiles that show certain related characteristics to dinosaurs. (any one of them)',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2020
  },
  {
    question:
      'Why should the turgor pressure of the guard cells affect the opening and closing of the stomatal pore?',
    answer:
      'When the guard cells are turgid, they swell and bend outward. As a result, the stomatal aperture opens. When they are flaccid, the tension from the wall is released, and the stomatal aperture closes.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Cell Kinetics',
    question_year: 2020
  },
  {
    question:
      'A mature mammalian erythrocyte lacks mitochondria. What advantage does that provide?',
    answer:
      'Mitochondria are absent so that oxygen is not utilized by the RBC and all the oxygen is transported to target areas. / Lack of mitochondria helps in the way that RBC would not consume any oxygen that it is transporting.',
    difficulty_level: 'Semi-Final',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2020
  },
  {
    question:
      'Why is it essential that blood pressure in the capillary vessels be much lower than that in the artery?',
    answer:
      'Low blood pressure in the capillaries slows down the flow of blood, giving enough time for diffusion of substances between the blood and cells. The walls of capillaries are also much thinner than those of arteries (squamous epithelium only), so they could rupture or break if the blood pressure is too high in them.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2020
  },
  {
    question:
      'Why should a person who is feeling dizzy be fed with glucose or fruit juice instead of bread and margarine that might give more energy?',
    answer:
      'Glucose gives instant energy as it is absorbed and reaches the blood. Bread and margarine, however, require time to digest and be absorbed. As sick people need immediate energy supply, they are fed with glucose or given fruit juice.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2020
  },
  {
    question: 'Why should mowing lawn grass facilitate better maintenance?',
    answer:
      'Apical dominance of terminal bud is due to the secretion of auxin (IAA) by the apical bud. Hence the removal of the apical bud causes sprouting of lateral buds with stimulation of the intercalary meristem, thereby facilitating better maintenance of grass.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2020
  },
  {
    question: 'Name the three stages of the Dark reaction of photosynthesis',
    answer: 'Carbon fixation, Reduction reactions, and RuBP regeneration.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'In a certain breed of ducks, the dominant trait for long beak is controlled by the B allele. Short beaks are determined by the recessive allele b. If the mother duck is homozygous for long beak length (BB) and the father is heterozygous (Bb), what percentage of their offspring will have long beaks?',
    answer: '100%',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question: 'What is the function of the axial skeleton?',
    answer:
      'The axial skeleton supports the upright position and protects the brain, spinal cord, and many of the internal organs. It also provides sites for the attachment of other bones and muscles in the body and protects the nerves and blood vessels from the brain and spinal cord.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2019
  },
  {
    question:
      'Which of the following is a product of ammonification?\nA. Amino acids B. Nitrites C. Ammonia D. Nitrogen',
    answer: 'C. Ammonia',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'What is divergent evolution?',
    answer:
      'Divergent evolution is a process of developing two or more species from a common ancestor over time.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Why is it important for plants to have both chlorophyll a and chlorophyll b?',
    answer:
      'The amount of light present on the surface of the Earth varies, hence it requires that plants have pigments that can work with different qualities of light. If plants had only one or the other version of chlorophyll, they would not be able to function on certain days and would die.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question: 'What is Chemotaxis?',
    answer:
      'Chemotaxis is the movement of a cell in response to a chemical signal.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Kinetics',
    question_year: 2019
  },

  {
    question:
      'Pancreatic juice is composed of two secretory products critical to proper digestion. Name both.',
    answer: 'Digestive enzymes and bicarbonate.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2019
  },
  {
    question:
      'Give one of the main disadvantages of the cultivation of a single crop on an area of land (monoculture)',
    answer:
      'Diseases and pests can spread more effectively as it is easy for them to find a host plant. A single threat can destroy an entire crop. Monocultures are less efficient in exploiting all the nutrients available in soil, water, light, and fertilizer.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Pest & Parasites',
    question_year: 2019
  },
  {
    question:
      'State the exact place in the pancreas where bicarbonate is secreted',
    answer: 'Epithelial cells lining small pancreatic ducts.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2019
  },
  {
    question:
      'How is the apical meristem similar to stem cells in a human foetus?',
    answer: 'Both have the ability to differentiate.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'What name is given to a scientific test that is directly manipulated by a scientist, in order to test a single variable at a time?',
    answer: 'Controlled experiment',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Name the type of cell divisions that somatic cells and gametic cells undergo',
    answer: 'Somatic= mitosis; Gametic= meiosis and mitosis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'While walking through your school compound, you discover a small mouse. Which kingdom does the mouse belong to?',
    answer: 'Animalia',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question:
      'Meiosis I is reductional division. Why is meiosis II considered an equational division',
    answer: 'Because of the separation of chromatids',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'What name is given to each of the hierarchical levels within an ecosystem, in which organisms have the same function and nutritional relationship within a food chain?',
    answer: 'Trophic Level',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'In genetics, what does a genotype of Hh signify?',
    answer: 'Heterozygous: one dominant allele, one recessive allele',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'What is the benefit that a plant gets from mycorrhizal association?',
    answer: 'Increased access to soil nutrients and water.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },

  {
    question: 'What name is given to the study of algae?',
    answer: 'Phycology',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question:
      'Give one of the diverse modes of locomotion exhibited across the various groups of Protozoans',
    answer: 'Flagellar, ciliary, and amoeboid movement.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question: 'What are grana in chloroplasts made of?',
    answer:
      'Grana are made of stacks of thylakoids that are formed by invaginations of the inner membrane in chloroplasts.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2019
  },
  {
    question: 'How do saprophytic fungi acquire nutrients?',
    answer: 'By extracellular digestion, performed by hyphae',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question: 'On which mitochondrial structures are cristae found?',
    answer: 'Inner membrane',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2019
  },
  {
    question:
      'An adult organism has 40 chromosomes, or 20 homologous chromosomes. 20 are maternally derived, 20 are paternally derived. How many chromosomes are in each cell after mitosis?',
    answer: '40 chromosomes, 20 homologs',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'What name is given to a tube-shaped organ used by insects and most fishes to deposit eggs?',
    answer: 'An ovipositor',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question:
      'In what phase in the process of cell division can nondisjunction occur?',
    answer:
      'Anaphase (During anaphase, the sister chromatids separate from each other in order to prepare for cell division. When they do not separate correctly, nondisjunction occurs)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Which hormone is responsible for phototropic curvature in plants?',
    answer: 'Auxin (IAA)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question: 'What do pollen grains contain?',
    answer: 'Male gametophyte',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },

  {
    question: 'When does crossing over occur?',
    answer: 'Prophase I',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question: 'What makes a trait vestigial?',
    answer: 'If it is rudimentary and no longer functions.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question: 'What do seeds contain?',
    answer: 'Embryo and nutritive tissue',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'The growth habit of hyphae of fungi leads to a body with a high surface area to volume ratio. Why is this important?',
    answer:
      'It enables the hyphae to absorb many nutrients from their environment',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'What is the hereditary material in viruses?',
    answer: 'DNA or RNA',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Pests & Parasites',
    question_year: 2019
  },
  {
    question:
      'What name is given to a plot showing the relative frequency of photosynthesis produced by light of different wavelengths?',
    answer: 'Action spectrum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question: 'Why are homologous traits similar?',
    answer: 'They are derived from a common ancestor',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Which structure in a flower generally consists of 2 pollen sacs?',
    answer: 'Anther',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question: "In evolution, 'what does descent with modifications' mean?",
    answer:
      'Changes in populations through time / passing traits from parent to offspring',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'What is distinctive about the chlorophylls found in different photosynthetic bacteria?',
    answer: 'Their absorption spectra',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },

  {
    question:
      'State one significant change that occurs in an organism during hibernation.',
    answer: 'Metabolism decreases',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'The heart and respiratory system slow down,',
    answer: 'Body temperature is maintained at a lower level than normal.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2019
  },
  {
    question: 'In which structures in algae can one locate pyrenoids?',
    answer: 'Chloroplasts',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2019
  },
  {
    question:
      'A biology student placed 2 cells in a Petri plate containing a healthy nutrient solution. Each cell divides every 12 hours. The student went back to count the cells after 2 days. How many daughter cells will be in the Petri plate?',
    answer: '32 daughter cells',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'What is the function of the visible outer part of the human ear?',
    answer:
      'The cup-like outer part of the ear gathers sound and focuses it toward the ear canal.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2019
  },
  {
    question: 'Chlamydomonas is a genus of which group of algae?',
    answer: 'Green algae',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question: 'What is the main determinant of how a gland is classified?',
    answer: 'The shape',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2019
  },
  {
    question: 'What is the function of the bones of the middle ear?',
    answer:
      'They amplify vibrations from the ear canal and transmit them to the inner ear.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2019
  },
  {
    question:
      'An animal possesses a sharp, shearing incisors in the front of the mouth and flat, grinding molars in the back. What is likely the diet of the animal?',
    answer: 'A herbivorous diet',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'Why is the Calvin cycle also known as C3 cycle?',
    answer:
      'The first stable compound produced in the cycle is a 3 carbon compound (known as phosphoglyceric acid)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question: 'Give one of the main functions of myelin sheath.',
    answer: 'It protects the nerves from other electrical impulses',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2019
  },
  {
    question: 'During germination, what causes seeds to rupture?',
    answer: 'Imbibition/absorption of water',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },

  {
    question: 'Name the contractile protein in muscle tissue',
    answer: 'Myosin',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2019
  },
  {
    question: 'What is Hydroponic farming?',
    answer:
      'It is a method of growing plants using mineral nutrient solutions, in water, without soil / Soilless cultivation of plants',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'Name the pigment that gives brown colour to brown algae',
    answer: 'Fucoxanthin',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question:
      'Name the elements whose ions are necessary in the chemical events of muscle contraction',
    answer: 'Calcium and Magnesium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question:
      'Name the specific part of the alimentary canal where protein digestion is accomplished',
    answer: 'Ileum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2019
  },
  {
    question:
      'What name is given to a fruit that develops from a condensed inflorescence',
    answer: 'Composite fruit',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'The continuous bleeding from a cut on one’s body can be due to the deficiency of which vitamin',
    answer: 'Vitamin K',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2019
  },
  {
    question:
      'Name the process which occurs in a cardiovascular system that results in the exchange of bicarbonate (HCO3−) and chloride (Cl−) across the membrane of red blood cells',
    answer: 'Chloride shift/ Hamburger phenomenon/ lineas phenomenon',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2019
  },
  {
    question: 'Which part of the endosperm of maize is proteinaceous',
    answer: 'Aleurone layer',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question: 'Name the structure in humans where one can locate osteocytes',
    answer: 'Bone',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2019
  },
  {
    question: 'Presence of Casparian strip is characteristic of which tissue',
    answer: 'Endodermis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'What name is given to pollination that occurs in a closed flower',
    answer: 'Cleistogamy',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question: 'Where are thrombocytes formed',
    answer: 'Bone marrow',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2019
  },

  {
    question:
      'State the circumstance under which the prevalence of a vestigial structure may increase in the population',
    answer: 'If it is advantageous to the population',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'Holdfast, stipe and frond constitute the plant body of which group of algae?',
    answer: 'Brown algae. Phaeophyta / Phaeophyceae',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'Toxic agents present in food that interfere with the synthesis of thyroxine will result in the development what disease?',
    answer: 'Simple goiter',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2019
  },
  {
    question:
      'Why is the speed at which signals are conducted in neurons important?',
    answer:
      'Some organisms must coordinate body parts far apart from each other, so the speed enables organisms to react to the many stimuli it receives.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2019
  },
  {
    question:
      'Describe divergent evolution with respect to the following.\n1. Type of evolution',
    answer: 'Divergent evolution is a type of macroevolution.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Describe divergent evolution with respect to the following.\n2. Emerging characters',
    answer:
      'Divergent evolution generates a new species that is unable to interbreed with the original species.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Describe divergent evolution with respect to the following.\n3. Speed of the process',
    answer: 'Divergent evolution is a slow process of evolution.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question: 'What is artificial classification in taxonomy?',
    answer:
      'The ordering of organisms into groups on the basis of non-evolutionary features (e.g. the grouping together of plants according to the number and situation of their stamens, styles, and stigmas rather than their evolutionary relationships',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question:
      'What name is given to the practice of keeping bees as well as the manufacturing of honey and beeswax?',
    answer: 'Apiculture',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'How do fresh water bony fishes maintain water balance?',
    answer: 'By excreting a hypotonic urine',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2019
  },
  {
    question: 'What is biostatistics?',
    answer: 'The application of statistical methods in biology.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'Which environmental factor is the most influential in determining the rate of transpiration?',
    answer: 'Relative humidity of atmosphere',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'If an experiment shows that Potassium concentration inside a root cell is about thousand times higher than that of the surrounding soil, what does this show?',
    answer: 'Active uptake of Potassium is occurring',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2019
  },

  {
    question:
      'What is the overall goal of glycolysis, Krebs cycle and electron transport system?',
    answer: 'Formation of ATP in stepwise units',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question:
      'Why is the presence of clay particles important to soil structure?',
    answer:
      'The negative charges on clay bind to the positively charged ions and prevent them from leaching',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'Give one of the two main reasons why dioecious plants are rare in spite of the advantages of cross pollination.',
    answer:
      'I. About half of their individuals are male plants that do not produce seeds to be dispersed to increase their numbers\nII. Dioecious plants are likely to suffer from pollination limitation because they are unable to self‐pollinate and require another individual to pollinate their flowers for seed production',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'What is the most widely accepted theory to explain translocation of carbohydrates in higher plants?',
    answer: 'Mass flow theory',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Name the molecule that is the final acceptor of electrons in the electron transport chain during aerobic respiration.',
    answer: 'Oxygen',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'What will happen to Red blood cells if they are placed in distilled water for about 12 hours?',
    answer: 'They will increase in volume and burst',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2019
  },
  {
    question:
      'What name is given to the intermediate developmental stages in an ecological succession?',
    answer: 'Sere',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'Twenty amino acids are found in the proteins of cells. What distinguishes these molecules?',
    answer: 'The composition of the side chains / R group',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'What name is given to the process by which decomposers break down proteins and amino acids, releasing the excess nitrogen in the form of ammonia (NH3) or ammonium ion (NH4+).',
    answer: 'Ammonification',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'What name is given to the longitudinal rod in chordates that is made of cartilage and runs between the nerve cord and the digestive tract?',
    answer: 'Notochord',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2019
  },
  {
    question:
      'What name is given to an action, such as the generation of an action potential by a neuron, which occurs either completely or not at all?',
    answer: 'All or none event',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2019
  },
  {
    question:
      'In a particular type of organism eggs and sperms have 5 chromosomes, but other cells have 10 chromosomes. Observations like this inspired a particular type of hypothesis. What is it?',
    answer:
      'Before gamete formation, a special type of cell division leads to halving of chromosomes number.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question: 'What happens when double fertilization occurs in angiosperms?',
    answer:
      'One sperm fertilizes the egg, while another sperm fuses with the two polar nuclei',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Reproductory System',
    question_year: 2019
  },

  {
    question: 'Explain why mangroves go through viviparous germination',
    answer:
      'In mangrove plants the seeds cannot germinate on the ground because of the excessive salt content and lack of oxygen in marshy habitat',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'Which organ, located on the floor of the cochlear canal in the inner ear and contains the receptor cells is regarded as the organ for hearing',
    answer: 'Organ of corti/ spiral organ',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2019
  },
  {
    question:
      'Altitude sickness, the mildest form being acute mountain sickness (AMS), is the negative health effect of high altitude. Symptoms may include headaches, vomiting, tiredness, trouble sleeping, and dizziness. What causes this?',
    answer: 'Low amounts of oxygen at high elevation.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question:
      'In which structure can one locate the respiratory centers which control inspiration and expiration?',
    answer: 'Medulla oblongata',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2019
  },
  {
    question: 'What is floriculture in biology?',
    answer: 'The cultivation of flowers.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'If the anther of a flower is missing, what type of reproductive structure will the flower be unable to produce?',
    answer: 'Pollen',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'The respiratory system contains several protective mechanisms to avoid problems or tissue damage. What traps small particles, viruses, bacteria, dust, and dirt to prevent their entry In the nasal cavity',
    answer: 'Hairs and mucus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question:
      'Two fishes swim next to each other in the ocean. They look very similar, though they don’t reproduce. They are unlike any of the other fishes in the ocean. Which taxon could these fishes represent?',
    answer:
      'Genus. Because these fishes are so similar but do not reproduce, they likely constitute a genus. If they could reproduce together, they could be considered a species.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question:
      'What term is used to describe an incomplete flower lacking the androecium?',
    answer: 'Pistillate / Carpellate',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'Why does population density of animals typically decrease with increasing body size?',
    answer:
      'Smaller animals require less food and other resources, so the environment can support more of them.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'How do root cells remain alive if they are underground and cannot photosynthesize?',
    answer:
      'Food is transported to root cells (through phloem by pressure flow and cells absorb food from it actively)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'In which part of a eukaryotic cell do transcription and translation occur?',
    answer:
      'Transcription occurs in the nucleus, and translation occurs in the cytoplasm.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2019
  },
  {
    question: 'What might happen to a plant root if the pericycle disappears?',
    answer: 'The root would not be able to produce lateral roots.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },

  {
    question:
      'Mention one of the three main methods by which carbon dioxide can be transported through the blood.',
    answer:
      'It is dissolved directly in the blood, bound to hemoglobin, or carried as bicarbonate.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2019
  },
  {
    question:
      "What term can one use to describe the condition of a desert mouse that lowers its metabolic rate and 'sleeps' during the hot day?",
    answer: 'Aestivation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'How does the structure of alveoli maximize gaseous exchange?',
    answer:
      'The sac-like structure of the alveoli increases their surface area. In addition, the alveoli are made of thin-walled cells. These features allow gases to easily diffuse across the cells.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question: 'What is Mycorestoration',
    answer:
      'The process of using mushrooms to decrease pollution levels in a given area',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2019
  },
  {
    question:
      'Bumblebee species in a particular habitat all compete for nectar from flowers. A careful observation of bumblebee visits to different flowers reveals that they can coexist because different species preferred different length corollas in accordance with their proboscis length. Which biological observation explains this observation?',
    answer: 'Resource partitioning',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'The kidneys are responsible for removing excess H+ ions from the blood. If the kidneys fail to perform these functions, what would happen to blood pH and to hemoglobin affinity for oxygen?',
    answer:
      'The blood pH will drop and hemoglobin affinity for oxygen will decrease.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2019
  },
  {
    question: 'What is Photobiology?',
    answer:
      'The study of the effects of Light (ultraviolet, visible and infrared radiation) on living organisms. (It includes topics such as photosynthesis, vision, bioluminescence, circadian rhythms, and photodynamic therapy).',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'Why should the value for gross productivity of the primary producers be the same as the value for total heat and respiration?',
    answer:
      'According to the first law of thermodynamics, energy can neither be created nor destroyed. Eventually, all energy consumed by living systems is lost as heat or used for respiration, and the total energy output of the system must be equal to the energy that went into it',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question:
      'Which features of red blood cells allow for rapid diffusion of oxygen and carbon dioxide across the plasma membrane?',
    answer: 'The small size and large surface area',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2019
  },
  {
    question:
      'A geneticist found genetic marker and a disease gene to be closely linked. What does this mean?',
    answer:
      'The genetic marker and the disease gene are in close physical proximity and tend to be inherited together',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'Most productive viral infections follow similar steps in the virus replication cycle. Arrange the following to indicate the correct sequence in the viral replication cycle.',
    answer: 'Attachment …..Penetration…Replication…..Assembly…..Release.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Pest & Parasites',
    question_year: 2019
  },
  {
    question:
      'Why does non disjunction occur only in anaphase of cell division?',
    answer:
      'It is during anaphase that sister chromatids (in mitosis and/or meiosis II) or paired chromosomes (in meiosis I) separate from each other in order to prepare for cell division. When they do not separate correctly then nondisjunction occurs.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2019
  },
  {
    question:
      'An embryo sac has lost the synergids (One of two small, short-lived nuclei lying near the egg in the mature embryo sac of a flowering plant). What specific impact will that have on fertilization?',
    answer: 'The pollen tube will form but will not be guided toward the egg.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },

  {
    question:
      'Arrange the following to show plant succession that begins on a newly exposed rock surface: Forest stage ……Foliose lichen stage …Moss stage …Shrub stage…Crustose lichen stage',
    answer:
      'Crustose lichen stage…….Foliose lichen stage……Moss stage …Shrub stage….Forest stage',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question:
      'Why do smaller endothermic animals require more energy to maintain a constant internal temperature than larger animals do?',
    answer:
      'Smaller endothermic animals have a greater surface area for their mass than larger ones and therefore lose heat at a faster rate than larger animals',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2019
  },
  {
    question: 'What is the primary function of the human respiratory system?',
    answer:
      'To deliver oxygen to the cells of the body’s tissues and remove carbon dioxide',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2019
  },
  {
    question:
      'Arrange the following to show the correct sequence of systemic circulation pathway: Left auricle → left ventricle → aorta → arteries → tissues → veins → right atrium',
    answer:
      'Left auricle → left ventricle → aorta → arteries → tissues → veins → right atrium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2019
  },
  {
    question:
      'Farmers often rotate corn (a cereal crop) and cowpeas, planting a field with each crop in alternate seasons. What advantage might this crop rotation confer?',
    answer:
      'Cowpeas are able to fix nitrogen in their roots, which are not harvested at the end of the growing season. The belowground nitrogen can be used in the next season by the corn.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2019
  },
  {
    question:
      'What might be the effect on an animal of not being able to perceive taste?',
    answer:
      'The animal might not be able to recognize the differences in food sources and thus might not be able to discriminate between spoiled food and safe food or between foods that contain necessary nutrients, such as proteins, and foods that do not.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2019
  },
  {
    question:
      'A cell detects that there is too much of a substance in its cytoplasm, so it makes a chemical messenger to inhibit the enzyme that is producing the substance. Explain why this is not a feedback inhibition.',
    answer:
      'In feedback inhibition, a biochemical pathway is inhibited by its own end product. In this process the enzymes are not being inhibited by their own end product, but by a separate signaling mechanism.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2019
  },
  {
    question:
      'A cell biologist examined a number of slides of onion root tip in various stages of mitosis. Of 1000 cells counted, 692 cells were in prophase, 105 in metaphase, 45 in anaphase, and 168 in telophase. What conclusion can be drawn from these observations?',
    answer:
      'These observations give an idea of the relative duration of each stage of mitosis - Prophase is longest, then telophase, followed by metaphase, and anaphase is the shortest.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2019
  },
  {
    question:
      'While traveling at a higher altitude, a person complains of dizziness and vomiting sensation. Which part of the inner ear is disturbed during the journey?',
    answer:
      'The labyrinth, which is an important part of our vestibular (balance) system is disturbed during the journey to higher altitude.',
    difficulty_level: 'Final',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2019
  },
  {
    question:
      'Haemophilia is a sex-linked mutation that is found on the X-chromosome. If a healthy male marries a female carrier, what percentage of their sons will have haemophilia?',
    answer: '50%',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'What are the effects of activities of denitrifying bacteria on soil fertility and agricultural productivity?',
    answer:
      'They convert nitrates in soil to free atmospheric nitrogen, thus depleting soil fertility and reducing agricultural productivity.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'Determine the percentage of Adenine molecule present in a normal DNA molecule of a eukaryotic cell that contains 30% Guanine.',
    answer: '20%',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics 2',
    question_year: 2017
  },
  {
    question: 'Which part of a neuron receives messages from other neurons?',
    answer: 'Dendrites',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },

  {
    question: 'What is a hydrosere?',
    answer: 'Plant succession in aquatic environments',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question: 'What role do hydrogen bonds play in the structure of DNA?',
    answer: 'It holds each of the base pairs together',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics 1',
    question_year: 2017
  },
  {
    question:
      'Use the following excretory structures to provide the correct order of urine flow from the kidney. (Urethra, Ureter, bladder)',
    answer: 'Ureter, Bladder, Urethra',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2017
  },
  {
    question:
      'The first step in the Calvin-Benson cycle is the attachment of carbon dioxide to which molecule?',
    answer: 'Ribulose biphosphate (RuBP)',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2017
  },
  {
    question: 'What is the primary function of bone marrow?',
    answer: 'Production of blood cells',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2017
  },
  {
    question:
      'Which division of the nervous system is responsible for fight or flight response?',
    answer: 'Sympathetic nervous system',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question: 'Name the phase of meiosis during which DNA begins to condense',
    answer: 'Prophase I (Don’t accept prophase alone)',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'A patient who is severely dehydrated accidentally receives a large transfusion of distilled water directly into a major blood vessel. What will happen to the blood cells?',
    answer: 'The red blood cells could swell and burst.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2017
  },
  {
    question:
      'Which structure of the neuron is myelinated to promote propagation of action potential?',
    answer: 'Axon',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question:
      'Give the phase in photosynthesis where ATP and NADPH are produced',
    answer: 'The light-dependent phase',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'Name any 2 of the three main events that accurately describe what occurs in meiosis I',
    answer:
      'Pairing of homologous chromosomes (formation of tetrads), Crossing over, Separation of tetrads',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question: 'By what process is solar radiation converted to organic matter?',
    answer: 'Photosynthesis',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question: 'How does your sense of smell affect taste?',
    answer:
      'We use both our sense of taste and our sense of smell when we eat food. Both the tongue and the nose detect the chemicals in food, which then tells our brain the flavor of what we are eating.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Digestion',
    question_year: 2017
  },

  {
    question:
      'Name the stage in protein synthesis that anticodons pair with mRNA codons.',
    answer: 'Translation',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question: 'What type of reproduction occurs in roundworms?',
    answer: 'Sexual',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question: 'Name one of the main human diseases caused by roundworms.',
    answer:
      'Ascariasis, ancylostomiasis (hookworm infection) and filariasis (commonly known by its sign, elephantiasis).',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Pest & Parasites',
    question_year: 2017
  },
  {
    question: 'Which macromolecule is polymerized using peptide bonds?',
    answer: 'Proteins',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question: 'Which product of glycolysis will enter the citric acid cycle?',
    answer: 'Pyruvate / pyruvic acid',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2017
  },
  {
    question:
      'What name is given to the visible difference between males and females of the same species?',
    answer: 'Sexual dimorphism',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Reproductory System',
    question_year: 2017
  },
  {
    question: 'What is the first step of the citric acid cycle?',
    answer: 'Conversion of pyruvate to acetyl Co-A',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2017
  },
  {
    question:
      'Which cells in the ground tissues of plants have thick lignified secondary walls and often die when mature?',
    answer: 'Sclerenchyma',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'Name the structure that is formed from the fusion of foetal and uterine tissue.',
    answer: 'Placenta',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Reproductory System',
    question_year: 2017
  },
  {
    question: 'What name is given to plants that grow in saline waters?',
    answer: 'Halophytes',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'What is the main reason for using Neurospora as genetic material?',
    answer: 'It has a short life cycle (of 10 days)',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'The immature forms, or larvae, of certain insects are adapted to environments and modes of life that differ from those of the adult forms. What is the significance of this?',
    answer:
      'It ensures that the larvae and adults of the same species do not engage in direct competition for food or living space.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question:
      'What name is given to the release of the secondary oocyte from the ovaries?',
    answer: 'Ovulation',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Reproductory System',
    question_year: 2017
  },

  {
    question: 'How does soil erosion affect agricultural productivity?',
    answer:
      'Soil erosion leads to a decrease in agricultural productivity because of the loss of nutrient-rich topsoil, eventually leading to desertification.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'Which type of cell division will become highly active during wound healing?',
    answer: 'Mitosis',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'If a molecule cannot fit through a membrane and is moving up a concentration gradient, what type of transport is happening?',
    answer: 'Active transport',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question:
      'Name the part of the large intestine that extends from the cecum to the rectum.',
    answer: 'Colon',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2017
  },
  {
    question:
      'What is the difference between nektons and planktons in terms of movement in water?',
    answer:
      'Nektons can swim against the water current, whereas plankton drift with the water current.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'In which part of the mammalian eye does most refraction of light take place?',
    answer: 'Cornea',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2017
  },
  {
    question:
      'What is normally the first line of defense of most prey against predators?',
    answer: 'To avoid being detected by the predator.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'What name is given to the arrangement of organisms into orderly groups based on their similarities?',
    answer: 'Classification / Taxonomy',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question:
      'Why is it that many plants with taproots are difficult to transplant or even to grow in containers?',
    answer:
      'Because the root tends to grow deep rapidly, and in many species, comparatively slight obstacles or damage to the taproot will stunt or kill the plant.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'The organs of the respiratory tract of mammals can be divided into upper and lower respiratory tracts. Name the ones that form the lower respiratory tract.',
    answer: 'Bronchioles and alveoli',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2017
  },
  {
    question: 'By what means do humans become aware of a stimulus?',
    answer:
      'Nerve impulses traveling from a receptor to the brain make humans aware of a stimulus.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question:
      'A cell in the basal layer of the skin contains 46 chromosomes and divides by mitosis to produce new skin cells. After five successive divisions, how many chromosomes will the basal cell have?',
    answer: '46',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'Name the parts of a plant that may be produced by the lateral bud.',
    answer: 'Branches, new leaves, and flowers.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },

  {
    question:
      'Name the two systems which help to coordinate the actions of the human body.',
    answer: 'The nervous system and endocrine system.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question:
      'Which process makes the greatest contribution to the movement of water up the trunk of a tree?',
    answer: 'Transpiration',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question: 'Which organ is located in the duodenal loop of mammals?',
    answer: 'Pancreas',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2017
  },
  {
    question:
      'If XH is the dominant allele for normal vision and Xh the recessive allele for color blindness, what will be the phenotype of a girl with the genotype XHXh?',
    answer: 'Carrier',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'What name is given to the umbrella-shaped fruiting body of a fully developed mushroom?',
    answer: 'Pileus',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question:
      'The similarity among organisms belonging to the same group will be least within which taxon?',
    answer: 'Kingdom',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question:
      'Stunted growth of a plant was reversed when the soil in which the plant was growing was inoculated with Rhizobium. Which mineral element was deficient?',
    answer: 'Nitrogen',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2017
  },
  {
    question:
      'What proportion of the offspring of a cross between two heterozygous parents will exhibit the recessive condition phenotypically?',
    answer: '25% or 1/4',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'Which muscle in humans contracts to promote inhalation and relaxes to promote exhalation?',
    answer: 'Diaphragm',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2017
  },
  {
    question:
      'What are the presence of sunken stomata and the folding of leaves adapted to?',
    answer: 'Reduction of water loss',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question: 'What is the importance of denitrification in aquatic bodies?',
    answer:
      'Decontaminates aquatic systems by lowering nitrate levels thereby preventing eutrophication',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'In terms of the movement of sound from the outer ear to the inner ear, give two of the three main functions of the ossicles.',
    answer: 'They receive, amplify, and transmit the sound.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2017
  },
  {
    question: 'What is the best method of propagating cocoyam?',
    answer: 'By using the corms.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },

  {
    question:
      'The eight muscles of the human tongue are classified into two main groups. Which of them act together to change the shape of the tongue?',
    answer: 'The (four) intrinsic muscles',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2017
  },
  {
    question:
      'In humans, when the body needs to conserve water, antidiuretic hormone is secreted and the kidneys produce concentrated urine. This is an example of what?',
    answer: 'Negative feedback',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Hormones',
    question_year: 2017
  },
  {
    question:
      'Lichens are made up of a fungus in a mutualistic relationship with an alga. What benefit does the alga obtain from the relationship?',
    answer: 'Minerals and protection',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question: 'Why is the nucleus called the brain of the cell?',
    answer: 'It contains the DNA which directs all activities of the cell',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question: 'State one of the 2 main significance of mitosis',
    answer:
      'It ensures that each daughter cell has the same number and kinds of chromosomes as mother cells (responsible for growth)',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'Holes created in big trees by woodpeckers serve as shelter by squirrels. What type of ecological association exists between the squirrel and the tree?',
    answer: 'Commensalism',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'Leaching or runoff from farms treated with nitrogen-containing fertilizers sometimes end up in water bodies. How does it affect the water bodies?',
    answer:
      'Nitrogenous compounds stimulate algal growth, reducing oxygen levels in water and resulting in eutrophication',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2017
  },
  {
    question: 'What is seed dormancy?',
    answer:
      'A state where a viable seed is incapable of germinating when all conditions are favorable',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'Looking at nervous tissues, there are regions that predominantly contain cell bodies and dendrites, and regions that are largely composed of just axons. Name these two regions.',
    answer: 'Gray matter and white matter',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question:
      'Which type of asexual reproduction is common to both Hydra and yeast?',
    answer: 'Budding',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question:
      'Gray matter is not necessarily gray. It can be pinkish because of blood content, or even slightly tan, depending on how long the tissue has been preserved, but white matter is always white. Why is the white matter always white?',
    answer:
      "Because the white matter contains axons that are insulated by a lipid-rich substance called myelin. Lipids can appear as white ('fatty') material, much like the fat on a raw piece of chicken or beef",
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question: 'How does deforestation make global warming worse?',
    answer: 'The trees would have taken up carbon dioxide from the atmosphere',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question: 'In the heart of mammals, what is the function of valves?',
    answer: 'To prevent backflow of blood',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2017
  },

  {
    question:
      'What role does cohesion play in the process of water movement from roots to leaves?',
    answer:
      'It causes the water molecules to adhere to the cell walls of the xylem cells',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'Which term describes a bundle of axons in the peripheral nervous system?',
    answer: 'Ganglion',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question:
      'The mature embryo found in most seeds has cells that have sorted themselves into groups that will give rise to which three tissues.',
    answer: 'Epidermis, ground tissue, and vascular tissue',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'Which of the cranial nerves is associated with the sense of smell?',
    answer: 'Olfactory',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question:
      'Arrange the following to show the pathway of light through the vertebrate eye (Cornea, iris, pupil, lens retina)',
    answer: 'Cornea, iris, pupil, lens retina',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Sensory System',
    question_year: 2017
  },
  {
    question: 'Name the 2 structures that make up the central nervous system',
    answer: 'Brain and spinal cord',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Nervous System',
    question_year: 2017
  },
  {
    question:
      'The respiratory center which regulates respiration is located in which part of the brain.',
    answer: 'Medulla oblongata',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2017
  },
  {
    question:
      'Territoriality occurs in animals as a result of which ecological relationship?',
    answer: 'Competition',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question: 'Why is it possible for the Calvin cycle to occur in the dark?',
    answer:
      'It uses the energy stored previously during the light-dependent reactions of photosynthesis',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2017
  },
  {
    question:
      'What name is given to the part of the blood that contains both the serum and clotting factors?',
    answer: 'Plasma',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2017
  },
  {
    question:
      'What is the most important physical factor that affects an organism living in the intertidal zone?',
    answer: 'Wave action',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question: 'Name 2 of the three main functions of the mammalian kidneys',
    answer:
      'To filter and clean the blood, To maintain and regulate a suitable fluid and chemical balance within the body (Homeostasis), To create urine as the by-product of its processes',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Excetory System',
    question_year: 2017
  },
  {
    question:
      'What is the difference between ecological succession and zonation?',
    answer:
      'Succession refers to the change in a community of organisms in a habitat over time, whereas zonation refers to the appearance of distinct zones or regions in a habitat at one time, where different communities of organisms live - due to the different conditions in those zones.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },

  {
    question: 'Name the rule that governs base pairing in DNA molecule',
    answer: "Chargaff's Rule of Base Pairing",
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'What feature in prokaryotes substitutes for the spindle action in eukaryotes?',
    answer: 'Elongation of the plasma membrane',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question:
      'How does a prokaryotic chromosome differ from a eukaryotic chromosome?',
    answer: 'It is a single loop of DNA',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology 2',
    question_year: 2017
  },
  {
    question:
      'Account for the loss in dry weight of cotyledons in a germinating cowpea seed.',
    answer: 'Food stored is mobilized / used up for respiration and growth',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'In which part of the mitochondrion is the electron transport system located?',
    answer: 'The Cristae',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question:
      'Variation among offspring is greater with sexual reproduction than with asexual reproduction. How does asexual reproduction introduce variation among offspring?',
    answer:
      'Variation during a asexual reproduction is limited to the occurrence of mutation',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'Which special proteins are released by white blood cells when a pathogen is invading the human body?',
    answer: 'Antibody',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2017
  },
  {
    question:
      'In horses the allele B represents black hair, and b represents brown hair. How could one determine if a black horse is homozygous dominant or heterozygous?',
    answer: 'Through testcross',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'Using blood type A and blood type B, explain how a child does not have to have the blood type of either parent',
    answer:
      'By crossing Heterozygous for A and heterozygous B (AO x BO) (the child could be AB or O which are different from either parent)',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'Which part of the nucleus is responsible for assembling ribosomes?',
    answer: 'Nucleolus',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question: 'What is the major component of cell membrane?',
    answer:
      'Phospholipids have polar heads and non-polar tails. They make up the plasma membrane which is selectively permeable',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question:
      'Which type of tissue in mammals, functions to bind, fill spaces, protect, support and store fat?',
    answer: 'Connective tissue',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question: 'What is the evolutionary purpose of crossing over?',
    answer: 'To increase genetic diversity',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },

  {
    question:
      'Explain why clayey soils are rich in nutrients, but not good for most agricultural crop production.',
    answer: 'They are too compact and poorly aerated',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question: 'Name the two systems that control the Gastro Intestinal tract?',
    answer:
      '(1) Vascular system: (network of veins & arteries--transport nutrients to tissues.)\n(2) Lymphatic system: (network of vessels that carry lymph (fluid that builds up around cells))',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2017
  },
  {
    question:
      'Certain species of savanna grasshopper appear green during the rainy season and brown during the dry season. What is the reason for these color changes?',
    answer: 'They are avoiding predation',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'What form of nutrition is the capture and digestion of insects by a pitcher plant?',
    answer: 'Heterotrophic',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2017
  },
  {
    question:
      'Arrange the following in the correct order of the vertebrae along the spinal column?',
    answer: 'Atlas → axis → cervical → thoracic → lumbar → sacral',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2017
  },
  {
    question:
      'The similarity among organisms belonging to the same group will be highest within which taxon?',
    answer: 'Species',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question: 'In a dicot root, the Pericycle gives rise to which structures?',
    answer: 'Lateral root, cork cambium and part of vascular cambium',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question:
      'What is the main function of the cornified layer of the skin of humans?',
    answer:
      'The cornified layer reduces evaporation from the skin and resists entry of pathogens.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2017
  },
  {
    question: 'How does vasoconstriction affect blood flow?',
    answer:
      'Vasoconstriction results in the narrowing of blood vessels (the arterioles) which increases resistance and decreases blood flow.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2017
  },
  {
    question: 'Name the three main bones meet to form the knee joint',
    answer: 'Thighbone (femur), shinbone (tibia), and kneecap (patella)',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2017
  },
  {
    question:
      'By what means is the foetal blood circulated through the placenta?',
    answer:
      'The heart of the foetus pumps blood through the fetal vessels in the placenta.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2017
  },
  {
    question:
      'A certain species of birds have long tongues and feed on nectar from long tube-like flowers. The tongue of the bird and the shape of the flower is an example of what type of evolution',
    answer: 'Coevolution',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question: 'How are fraternal twins formed?',
    answer: 'Fraternal twins result from the fertilization of two ova',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Reproductive System',
    question_year: 2017
  },

  {
    question:
      'Using the Golgi apparatus as an example, explain specifically why a cell needs energy to maintain its organization',
    answer:
      'The Golgi apparatus produces molecules that are used for structural purposes and energy is needed to produce these molecules',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question:
      'A wilted flower placed in a flask of water for several hours became stiff and stood erect. When it was placed in a salt solution, it wilted. From this information, what is the tonicity of the cells of the flower in reference to water and the salt solution?',
    answer: 'Hypertonic to fresh water but hypotonic to the salt solution',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question:
      'All cells have a plasma membrane that separates their contents from the extracellular environment and serves to maintain their integrity. In a functional sense, how does the plasma membrane maintain the integrity of the cell?',
    answer: 'It regulates what enters and leaves the cell',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question:
      'The properties of a molecule determine the role of the molecule in the cells of the body of an organism. Use phospholipid to demonstrate this biological concept.',
    answer:
      'Phospholipids have polar heads and non-polar tails. They make up the plasma membrane which is selectively permeable',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2017
  },
  {
    question:
      "During DNA replication the enzyme helicase 'unzips' the molecule of double-stranded DNA, What is the most likely mechanism of DNA helicase?",
    answer:
      'It breaks down the hydrogen bonds between the purines and pyrimidines / breaks down the bonds between the base pairs',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'Why is the intensity of natural selection on prey species higher than that of predators throughout evolution?',
    answer:
      'The selection pressure on the prey is probably higher than that on the predator because if a predator fails in its attempt to catch a prey it just misses one meal, however, if a prey fails in its attempt to escape from a predator, it loses its life.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'There are several essential theories in biology. In a scientific sense, what is the meaning of the word theory?',
    answer:
      'A theory means a hypothesis that has been supported by many experiments and observations',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2017
  },
  {
    question:
      'If a lion was hunting, it would want to find food that would give it more energy from eating the food than it would spend hunting for the food. What name is given to this process?',
    answer: 'Efficient foraging/economical foraging',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'In a natural population of green insects, several individuals acquired a mutation that made them purple and toxic to their main predatory bird species. What will happen to this population over time?',
    answer:
      'Natural selection will lead to more purple and toxic individuals and fewer green insects',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'A Senior High secondary school boy hammered a nail in the bark of a mango tree at a height of one metre above the ground. After three years, he observed that the nail was at the same height although the mango tree had grown 3 meters taller. Explain the above observation.',
    answer:
      'The nail was hammered at a point where vertical growth had stopped/further growth was confined to increase in width/diameter. Vertical growth is confined to tips/apex/vertical apical meristem',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2017
  },
  {
    question:
      'Organisms are known to be closely related to their environment. How might global climate change result in the extinction of mammals?',
    answer:
      'The internal temperatures of mammals must always stay within the normal range. If the external temperature rises too high, it will be difficult for homeostatic mechanisms to control, which will cause the internal temperature of mammals to rise above normal and will result in death.',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2017
  },
  {
    question:
      'Why does the skin of some light-skinned people look redder when they feel too hot?',
    answer:
      'When we are too hot, blood vessels supplying blood to the skin can dilate (vasodilation). This allows more warm blood to flow near the surface of the skin, where the heat can be lost to the air, resulting in redder skin',
    difficulty_level: 'One-eight',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2017
  },
  {
    question: 'Name the basic functional unit of the human kidney',
    answer: 'Nephron',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },

  {
    question:
      'Proximal and distal convoluted tubules are parts of which structure in the kidney',
    answer: 'Nephron',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },
  {
    question:
      'In humans, in which part of the kidney does the reabsorption of useful substances from the glomerular filtrate occur.',
    answer: 'Proximal Convoluted Tubule',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },
  {
    question:
      'State the number of each of the following molecules that is produced during glycolysis. (ATP)',
    answer: 'Net 2, Gross 4',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question:
      'State the number of each of the following molecules that is produced during glycolysis. (NADH)',
    answer: '2',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question:
      'State the number of each of the following molecules that is produced during glycolysis. (Pyruvate)',
    answer: '2',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question:
      'Classify the following as Behavioral, Structural, or Physiological adaptation. (Spiders creating webs that trap their prey)',
    answer: 'Physiological adaptation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      "Classify the following as Behavioral, Structural, or Physiological adaptation. (Some mammals may develop scent glands that irritate a predator's senses)",
    answer: 'Physiological adaptation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'Classify the following as Behavioral, Structural, or Physiological adaptation. (Frogs adapted to shoot poison at their enemies to avoid being eaten)',
    answer: 'Physiological adaptation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'Where exactly can one locate the photosynthetic pigments of Chlamydomonas?',
    answer: 'Thylakoids',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'Which structure in Spirogyra gives it the slippery nature?',
    answer: 'Mucilage',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'In which structure of Spirogyra can one locate Pyrenoids?',
    answer: 'Chloroplast',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'What is the purpose of vasodilation and vasoconstriction?',
    answer: 'To regulate body temperature',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'In which part of the kidney are proteins and fats retained during ultrafiltration?',
    answer: 'Glomerulus',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2018
  },

  {
    question: 'In which part of the kidney does selective reabsorption occur?',
    answer: 'Loop of Henle',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },
  {
    question:
      'Landing platform is provided to pollinating insects through which part of the flower',
    answer: 'Corolla / Petal',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'Pendulous stamens and slender filaments are characteristics of plants pollinated by which agent',
    answer: 'Wind',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Which agent is responsible for the pollination of the following important crop plants: wheat, rice, maize, and oats?',
    answer: 'Wind',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Which of the 4 chambers of the mammalian heart has the thickest muscular wall?',
    answer: 'Left Ventricle',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2018
  },
  {
    question:
      'Which artery supplies the forelimbs of mammals with oxygenated blood',
    answer: 'Subclavian artery',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2018
  },
  {
    question:
      'Between the liver and gut wall, capillaries join to form which vein',
    answer: 'Hepatic portal vein',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'What name is given to the loosely arranged cells in a periderm?',
    answer: 'Lenticels',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Growth rings in stem are formed due to the activities of which tissues?',
    answer: 'Fascicular cambium and interfascicular cambium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'How are stomata arranged in dicotyledonous leaves?',
    answer: 'Scattered',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'State the process by which inorganic ions can be loaded from the soil into root hairs of plants',
    answer: 'Active transport',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },
  {
    question:
      'Reabsorption of useful molecules or ions in kidneys occur through which process',
    answer: 'Active transport',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'From photosynthesizing leaves, sugar is transported to phloem cells to be carried around plant through which process',
    answer: 'Active transport',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },

  {
    question:
      'State the names that are given to the following arrangements of vascular bundles (Vascular bundles in which xylem and phloem are present on different radii)',
    answer: 'Radial',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'State the names that are given to the following arrangements of vascular bundles (Vascular bundles in which the xylem and phloem are present on the same radii.)',
    answer: 'Conjoint',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'State the names that are given to the following arrangements of vascular bundles (Conjoint vascular bundle in which phloem is present on both sides of xylem)',
    answer: 'Bicollateral',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'State whether the dominant stages of the following land plants are Haploid, Diploid or Triploid (Angiosperms)',
    answer: 'Diploid',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'State whether the dominant stages of the following land plants are Haploid, Diploid or Triploid (Pteridophytes)',
    answer: 'Diploid',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'State whether the dominant stages of the following land plants are Haploid, Diploid or Triploid (Bryophytes)',
    answer: 'Haploid',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2018
  },
  {
    question:
      'Which food substance will remain undigested if the pancreas of an individual is removed?',
    answer: 'Fats',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2018
  },
  {
    question:
      'In which part of the alimentary canal does the majority of fat digestion occur?',
    answer: 'Small Intestine',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2018
  },
  {
    question:
      'Name the distal portion of the small intestine that is characterized by narrower diameter',
    answer: 'Ileum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question:
      'What name is given to the air breathed in and out during effortless respiration?',
    answer: 'Tidal Volume',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question: 'During hibernation, frogs respire through which organ?',
    answer: 'Skin',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question:
      'What name is given to the air breathed in and out during normal breathing?',
    answer: 'Tidal Volume',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2018
  },
  {
    question:
      'According to the fluid mosaic model of membrane structure, where can one locate integral membrane proteins?',
    answer: 'It spans the entire membrane / Embedded within a lipid bilayer',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2018
  },

  {
    question:
      'Which organelle is expected to be in large number in the liver cells?',
    answer: 'Smooth ER',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2018
  },
  {
    question:
      'Why is the mitochondrion not considered to be a part of the endomembrane system?',
    answer:
      'Because it is not part of systems that help transport proteins to the cell membrane',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2018
  },
  {
    question:
      'Blood from various parts of the body of mammals is returned to which chamber of the heart?',
    answer: 'Right atrium (auricle)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'Which artery supplies the liver with oxygenated blood?',
    answer: 'Hepatic Artery',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'From right auricle, blood flows into which chamber of the heart?',
    answer: 'Right ventricle',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'What causes a green plant to bend towards light as it grows?',
    answer:
      'Auxins accumulate at the shaded side, stimulating greater cell elongation.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'What is the function of trichomes on leaves of plants?',
    answer: 'They reduce transpiration',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'What name is given to flowering that is dependent on cold treatment?',
    answer: 'Vernalisation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'State the mineral elements that are required or are important components of the following. (Photolysis of water during photosynthesis)',
    answer: 'Manganese',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'State the mineral elements that are required or are important components of the following. (Middle lamella)',
    answer: 'Calcium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'State the mineral elements that are required or are important components of the following. (Chlorophyll)',
    answer: 'Magnesium',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'Distinguish between mitosis and meiosis with respect to the following. (When synapsis occurs)',
    answer:
      'There is no synapsis in mitosis, but in meiosis synapsis of homologous chromosome occurs during prophase',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'Distinguish between mitosis and meiosis with respect to the following. (The cells in which they take place)',
    answer:
      'Mitosis takes place in somatic cells whereas meiosis occurs in germ cells',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },

  {
    question:
      'Distinguish between mitosis and meiosis with respect to the following. (Duration of prophase)',
    answer:
      'The duration of prophase in mitosis is short, usually a few hours, whereas in meiosis it is comparatively longer and may take days.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'What name is given to the first body segment of earthworm?',
    answer: 'Peristome',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'What is the mode of respiration of earthworm?',
    answer: 'Cutaneous / through the skin',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'What name is given to the excretory cells of annelids?',
    answer: 'Nephridia',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'In cockroaches, where are the organs of taste located.',
    answer: 'Palps and epipharynx',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'What is the most distinguishing feature between the male and female cockroach',
    answer: 'Presence of anal style',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'What type of mouth parts are possessed by a housefly?',
    answer: 'Sucking and sponging',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'In the phylum Platyhelminthes, flame cells are a component of which system',
    answer: 'Excretory system',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'Free living Platyhelminthes forms belong to which class',
    answer: 'Turbellaria',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'Which class of the phylum Platyhelminthes possess well developed nervous system and sense organs?',
    answer: 'Turbellaria',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question: 'In what form do fungi usually store food reserve?',
    answer: 'Glycogen',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'What is the meaning of perfect stage of a fungus?',
    answer: 'Formation of Sexual Spores',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'Mycotoxins are produced by which group of organisms.',
    answer: 'Fungi',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },

  {
    question: 'State the parts of the following fruits that are edible (Mango)',
    answer: 'Mesocarp',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Circulatory System',
    question_year: 2018
  },
  {
    question:
      'State the parts of the following fruits that are edible (Coconut)',
    answer: 'Endosperm',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Digestive System',
    question_year: 2018
  },
  {
    question:
      'State the parts of the following fruits that are edible (Banana)',
    answer: 'Mesocarp and Endocarp',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2018
  },
  {
    question: 'What name is given to the matrix of blood?',
    answer: 'Plasma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'Which organ in mammals contains tiny clusters of cells called islets of Langerhans',
    answer: 'Pancreas',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question: 'Which system regulates metabolism?',
    answer: 'Endocrine system (Don’t accept pituitary or thyroid)',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2018
  },
  {
    question:
      'State what the following descriptions refer to (A recessive allele showing itself in the phenotype when only one copy of the allele is present, as in hemizygous alleles or in deletion heterozygotes)',
    answer: 'Pseudo dominance',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'State what the following descriptions refer to (Crossing the F1 hybrid with a double recessive genotype)',
    answer: 'Test Cross',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'Give one of the main functions of supporting tissues in plants (Reciprocal cross)',
    answer: 'Reciprocal cross',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Give one of the main functions of supporting tissues in plants (Strengthening)',
    answer: 'Strengthening',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Give one of the main functions of supporting tissues in plants (Rigidity)',
    answer: 'Rigidity',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Give one of the main functions of supporting tissues in plants (Protection)',
    answer: 'Protection',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Give one of the main functions of supporting tissues in plants (Resilience and flexibility)',
    answer: 'Resilience and flexibility',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },

  {
    question:
      'State the type of diet that mammals with the following dental formulae are adapted to (i=2/1, c=0/0, p=3/2, m=3/3.)',
    answer: 'Herbivorous',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'State the type of diet that mammals with the following dental formulae are adapted to (i=3/3, c=1/1, p=4/4, m=2/3)',
    answer: 'Carnivorous',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'State the type of diet that mammals with the following dental formulae are adapted to (i=2/2, c=1/1, p=2/2, m=3/3.)',
    answer: 'Omnivorous',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'State the types of adaptation the following refer to (A bird in high altitude adapts to use less oxygen, while a camel adapts to the desert to store nutrients.)',
    answer: 'Physiological adaptations',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'State the types of adaptation the following refer to (Protective coloration or mimicry)',
    answer: 'Structural Adaptations',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'State the types of adaptation the following refer to (Hibernation and migration)',
    answer: 'Behavioral adaptations',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question: 'The pigment, Fucoxanthin is found in which group of algae.',
    answer: 'The brown algae / Phaeophyta',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'Which element is obtained from sea weeds?',
    answer: 'Iodine',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'Mention one of the main storage products of most algae?',
    answer: 'Starch/oil',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'Give one importance each of transportation of substances in either plants or animals:',
    answer:
      'To get rid of metabolic waste products, e.g urine, carbon dioxide etc',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },
  {
    question:
      'Give one importance each of transportation of substances in either plants or animals:',
    answer: 'To obtain all the essentials for metabolism e.g oxygen, water.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },
  {
    question:
      'Give one importance each of transportation of substances in either plants or animals:',
    answer:
      'To move mineral salts and water from the roots of plants to the stem and roots.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Excretory System',
    question_year: 2018
  },
  {
    question:
      'State the feeding mechanism of the following organisms(Grasshopper)',
    answer: 'Biting and chewing mechanism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2018
  },

  {
    question:
      'State the feeding mechanism of the following organisms(Tapeworm)',
    answer: 'Absorbing mechanism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2018
  },
  {
    question:
      'State the feeding mechanism of the following organisms(Butterfly)',
    answer: 'Sucking mechanism',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2018
  },
  {
    question:
      'Explain how the following factors affect transpiration in plants(High relative humidity)',
    answer:
      'When relative humidity of the atmosphere is high, the rate of transpiration is low due to reduced water potential gradient between the leaf and air.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'Explain how the following factors affect transpiration in plants(Decreased atmospheric pressure)',
    answer:
      'The lowering of atmospheric pressure enhances diffusion of water vapors, hence transpiration rate increases with the decrease in atmospheric pressure.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'Explain how the following factors affect transpiration in plants(Strong Wind)',
    answer:
      'Strong winds remove moist saturated air from the vicinity of plants and replacing it with drier unsaturated air. This promotes transpiration rate.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'State how the following features adapt an earthworm to its habitat.(Bristly hairs, called setae (sometimes written as chaetae) on each segment of the body.)',
    answer:
      'These hairs provide some grip to help the earthworm move through the soil',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'State how the following features adapt an earthworm to its habitat.(A streamlined body with no antennae or fins or arms or legs,)',
    answer:
      'This streamlined shape is an adaptation to living in narrow burrows underground and allow it to move easily through the soil.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'State how the following features adapt an earthworm to its habitat.(Circular muscles that surround each body segment, and longitudinal muscles that run the length of its body.)',
    answer:
      'These two groups of muscles work together to help the earthworm move',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'Describe monocotyledonous plants with respect to the following.(Growth form)',
    answer: 'Mostly herbaceous',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Describe monocotyledonous plants with respect to the following.(Pollen structure)',
    answer:
      'Pollen with single furrow or pore (monoaperturate pollen, that is, pollen with one large, groove-like aperture).',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question:
      'Describe monocotyledonous plants with respect to the following.(Root development)',
    answer: 'Roots develop adventitiously',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'Mention one of the four main supporting tissues in plants',
    answer: 'Parenchyma, Collenchyma, Sclerenchyma',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Plant Morphology',
    question_year: 2018
  },
  {
    question: 'Give one difference each between bones and cartilages',
    answer:
      'Bones are made up of hard substances, whereas cartilages are made up of soft substances',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2018
  },

  {
    question: 'Give one difference each between bones and cartilages',
    answer:
      'Bones are stronger and more rigid whereas cartilages are less rigid and less strong',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2018
  },
  {
    question: 'Give one difference each between bones and cartilages',
    answer:
      'Bones consist of living and non-living cells whereas cartilages consist of living cells',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2018
  },
  {
    question:
      'State whether the following are examples of convergent or divergent evolution(The evolution of echolocation in whales and bats.)',
    answer: 'Convergent',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'State whether the following are examples of convergent or divergent evolution(The silk producing ability of spiders, silk worms, silk moths, and weaver ants.)',
    answer: 'Convergent',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question:
      'State whether the following are examples of convergent or divergent evolution(The evolution of eyespots on the wings of butterflies and the tails of fish.)',
    answer: 'Convergent',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Genetics',
    question_year: 2018
  },
  {
    question: 'Name the locomotory organs in the following organisms (Fish)',
    answer: 'Fins',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'Name the locomotory organs in the following organisms (Echinoderms)',
    answer: 'Tube Feet',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question:
      'Name the locomotory organs in the following organisms (Earthworms)',
    answer: 'Setae',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Taxonomy',
    question_year: 2018
  },
  {
    question: 'State one function each of compact bones.',
    answer: 'Support',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2018
  },
  {
    question: 'State one function each of compact bones.',
    answer: 'Protection',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2018
  },
  {
    question: 'State one function each of compact bones.',
    answer: 'Movement',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Skeletal System',
    question_year: 2018
  },
  {
    question: 'Which part of a cell is known as the physical basis of life?',
    answer: 'Protoplasm',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2018
  },
  {
    question:
      'Which organelle is the site of drug detoxification and lipid biosynthesis?',
    answer: 'Smooth ER',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2018
  },

  {
    question:
      'Which organelle is the site of the synthesis of secretory proteins?',
    answer: 'Rough ER',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Cell Biology',
    question_year: 2018
  },
  {
    question:
      'Which part of the human brain is involved in loss of control when a person drinks alcohol?',
    answer: 'Cerebellum',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2018
  },
  {
    question:
      'In which part of the brain can one locate the respiratory centres that control inspiration and expiration?',
    answer: 'Medulla Oblongata',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Hormonal System',
    question_year: 2018
  },
  {
    question:
      'In what form are the majority of carbon dioxide produced by the cells of humans transported to the lungs?',
    answer: 'Bicarbonates',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question:
      'What name is given to the oxidation of glucose to two molecules each of pyruvate, ATP, and NADH?',
    answer: 'Glycolysis',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question: 'In which part of the cell does glycolysis occur?',
    answer: 'Cytoplasm',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question:
      'Which compound is the final electron acceptor in lactic acid fermentation?',
    answer: 'Pyruvate',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Respiratory System',
    question_year: 2018
  },
  {
    question: 'Explain the following ecological terms (Climax Community)',
    answer:
      'The state of relative stability or equilibrium of species composition, occurring when a community does not experience any disturbance for long periods of time.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question: 'Explain the following ecological terms (Pioneer Species)',
    answer:
      'The hardy species that are first to colonize a newly disturbed or formed habitat, beginning the process of ecological succession.',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question: 'Explain the following ecological terms (Ecological Disturbance)',
    answer:
      'A temporary change within a habitat that causes notable differences to an ecosystem’s biotic or abiotic elements',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Ecology',
    question_year: 2018
  },
  {
    question:
      'State how the following factors affect enzyme activity(Temperature)',
    answer:
      'It may affect enzyme activity because it may alter the shape and effectiveness of the enzyme through denaturation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2018
  },
  {
    question:
      'State how the following factors affect enzyme activity (Reactant and Substrate concentration)',
    answer:
      'If they are available in low concentrations they may inhibit enzyme activity',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2018
  },
  {
    question: 'State how the following factors affect enzyme activity (pH)',
    answer:
      'It may affect enzyme activity because it may alter the shape and effectiveness of the enzyme through denaturation',
    difficulty_level: 'Prelims',
    subject_name: 'Biology',
    topic: 'Nutrition',
    question_year: 2018
  },

  {
    question:
      'The specific latent heat of fusion of an alloy is 400 kJ kg^(-1). Find the mass of the alloy at its melting point that is just melted by 32,000 J of heat.',
    answer: '0.08 kg',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Thermal Physics',
    question_year: 2017
  },
  {
    question:
      'The escape velocity from a point 1800 km from the center of an isolated spherical body is 2.7 km s^(-1). Find the magnitude of the gravitational field at that point.',
    answer: '2.0 m s^(-2)',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Kinematics',
    question_year: 2017
  },
  {
    question:
      'A battery comprises a 12 V battery with an internal resistance of 2.0 Ω in series with a 6 V battery with an internal resistance of 3.0 Ω. Find the current that flows in a 5.0 Ω resistor connected across the battery terminals.',
    answer: '1.8 A',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Electric Cells',
    question_year: 2017
  },
  {
    question:
      'In a photoelectric effect experiment, 6.00 eV photons eject electrons from a clean metal surface. Find the work function of the metal if the greatest electron kinetic energy is 1.92 eV. Leave your answer in electron volts.',
    answer: '4.08 eV',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },
  {
    question:
      'Find the impedance of a series R-L circuit with R=40 Ω and L=2 H at an angular frequency of 15 rad s^(-1).',
    answer: '50 Ω',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },
  {
    question:
      'How much water at 25 ℃ must be added to 50 g of water at 95 ℃ in a container of negligible thermal properties to bring the temperature of the mixture to 50 ℃?',
    answer: '90 g',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Thermal Physics',
    question_year: 2017
  },
  {
    question:
      'A variable resistor is connected across the terminals of a 12 V battery with internal resistance of 5.0 Ω. Find the resistance setting at which maximum power is dissipated by the resistor.',
    answer: '5.0 Ω',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Electric and Magnetic Fields',
    question_year: 2017
  },
  {
    question:
      'A fixed quantity of an ideal gas at a temperature of 160 K undergoes a constant volume process in which its pressure changes from 100 kPa to 400 kPa. Find the final temperature of the gas.',
    answer: '40 K',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Work Energy & Power',
    question_year: 2017
  },
  {
    question:
      'The frequency of the fundamental transverse mode of a vibrating string stretched between two posts 0.80 m apart is 75 Hz. What is the speed of transverse waves on the string?',
    answer: '120 m s^(-1)',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'Find the torque about the origin of the force F=(3i ̂+4j ̂ )  N when it acts at the point whose position vector is r=5j ̂  m.',
    answer: '-15 k ̂  N m',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Work Energy & Power',
    question_year: 2017
  },
  {
    question:
      'A fixed quantity of an ideal gas undergoes an isothermal process in which it expands from an initial volume of 2.0 m^3 and pressure of 2.0 kPa to a final volume of 2.5 m^3. What is the final pressure of the gas?',
    answer: '1.6 kPa',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Thermal Physics',
    question_year: 2017
  },
  {
    question:
      'Find the power of a convex spherical mirror whose center of curvature is at a distance of 80 cm from the pole of the mirror.',
    answer: '-2.5 diopter',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Light',
    question_year: 2017
  },

  {
    question:
      'A projectile is launched at 60° to the horizontal with a speed of 20 m/s on level ground. Find the horizontal range of the projectile.',
    answer: '35 m',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'A -2.5 mC charge moves at 8.0 m/s perpendicular to a uniform 4.0 T uniform magnetic field. Find the magnitude of the magnetic force on the charge.',
    answer: '80 mN',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Electrostatics',
    question_year: 2017
  },
  {
    question:
      'Find the wavelength of a progressive wave of frequency 20 kHz and speed 400 m/s.',
    answer: '50 m',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },
  {
    question:
      'A cubic block of wood of side 0.2 m and mass 4 kg lies at rest on a horizontal surface. Determine the pressure exerted by the block on the surface.',
    answer: '1000 Pa',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Pressure',
    question_year: 2017
  },
  {
    question:
      'Find the initial speed of an object projected vertically upward that attains a height of 5 m.',
    answer: '10 m/s',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'What is the impedance of a circuit made up of a 50 Ω resistor in series with a 20 H inductor when the circuit operates at an angular frequency of 6 rad/s?',
    answer: '130 Ω',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },
  {
    question:
      'A 14 μF capacitor, a 15 μF capacitor, and a 16 μF capacitor are connected in parallel. Find the capacitance of the parallel combination of capacitors.',
    answer: '45 μF',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },
  {
    question:
      'Find the final temperature of the mixture obtained by adding 20 g of water at 20 ℃ to 40 g of water at 41 ℃ in a vessel of negligible heat capacity.',
    answer: '34 ℃',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Thermal Physics',
    question_year: 2017
  },
  {
    question:
      'What is the magnitude of the electric field that accelerates a -5.0 μC charge with a 48 N force?',
    answer: '9.6×10^6 N/C',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Magnetism',
    question_year: 2017
  },
  {
    question:
      'The average power dissipated by an RLC circuit is 800 W when the rms voltage is 200 V and the rms current is 5 A. Find the power factor of the circuit.',
    answer: '0.8',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },
  {
    question:
      'What is the elastic energy in a spring whose spring constant is 850 N/m when it is stretched by 2.0 mm?',
    answer: '1.7 × 10^(-3) J',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'Find the torque about the origin of the force (3i ̂+4j ̂ ) N when it acts at the point with position vector 2k ̂ m.',
    answer: '(-8i ̂+6j ̂ ) N m',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'The de Broglie wavelength of a slowly moving particle is 800 pm. Find the de Broglie wavelength of the particle when its speed changes to 0.2 times its initial value.',
    answer: '4 nm',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },

  {
    question:
      'A string stretched between two posts 2.5 m apart is plucked so that its vibration has two anti-nodes and a frequency of 8.0 Hz. Find the speed of transverse waves on the string.',
    answer: '20 m/s',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'Find the magnitude of the force a 25 T magnetic field exerts on a 4.0 C charge moving perpendicular to the field at 850 m/s.',
    answer: '85 kN',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Magnetism',
    question_year: 2017
  },
  {
    question:
      'The gravitational potential energy for a pair of particles is -1.9×10^(-50) J when they are 1.0×10^(-14) m apart. Find the gravitational potential energy of the particles when they are 5.0×10^(-14) m apart.',
    answer: '-3.8 × 10^(-51) J',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'Find the energy in eV of the photon that induces a transition from the ground state to the third excited state of a hydrogen atom.',
    answer: '12.8 eV',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2017
  },
  {
    question:
      'Name two thermometric substances commonly used in liquid-in-glass thermometers.',
    answer: 'Mercury, alcohol',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Thermal Physics',
    question_year: 2017
  },
  {
    question:
      'Nafisa loosens a nut using a 0.500 m spanner inclined at 30.0° to the horizontal. Find the torque she applies when she exerts a 50.0 N vertical force at the free end of the spanner.',
    answer: '21.6 N m',
    difficulty_level: 'One-eight',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2017
  },
  {
    question:
      'Adrian needs to tighten a nut with a torque of 10 N m using a torque wrench of length 10 cm. Find the force he needs to exert perpendicular to the torque wrench.',
    answer: '100 N',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'A tangential 25 N force is applied to a circular wheel of diameter 48 cm. Find the torque exerted about the center of the wheel.',
    answer: '6.0 N m',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'Find the angle of deviation of light incident on a plane mirror at a 22° angle of incidence.',
    answer: '136°',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'Find the angle of deviation of light incident on a plane mirror at a grazing angle of 56°.',
    answer: '112°',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'Find the angle of incidence of light on a plane mirror at which the angle of deviation is 36°.',
    answer: '72°',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'The length of a 20.00 cm rod at 25 ℃ increases by 0.025 cm when its temperature is increased to 75 ℃. Find the Celsius temperature at which the length of the rod is 19.99 cm.',
    answer: '5.0 ℃',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'THermal Physics',
    question_year: 2018
  },
  {
    question:
      'When a PVC ring of diameter 2.500 m at 25.0 ℃ is heated to 50.0 ℃, its diameter increases by 4.0 mm. Find the absolute temperature of the ring at which it just slips over a cylinder of diameter 2.503 m.',
    answer: '317 K',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Thermal Physics',
    question_year: 2018
  },

  {
    question:
      'A shaft which has a length of 5.000 m at 20 ℃ has a length of 5.004 m at 25 ℃. Find the length of the shaft at 40 ℃.',
    answer: '5.016 m',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Thermal Physics',
    question_year: 2018
  },
  {
    question:
      'What is the quantum number for the stationary state of the Bohr hydrogen atom in which the Bohr orbit radius is 476.1 pm?',
    answer: '3',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2018
  },
  {
    question:
      'What is the radius of the Bohr orbit for the stationary state of the Bohr hydrogen atom with quantum number 5?',
    answer: '1.32 nm',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2018
  },
  {
    question:
      'Find the radius of a Bohr hydrogen atom in its second excited state.',
    answer: 'You may need to add the answer for this question.', //
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2018
  },
  {
    question:
      'Find the magnitude of the linear momentum of a 48 kg object moving at 2.5 m/s.',
    answer: '120 N s',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'Find the speed at which the linear momentum of a 26 kg object has a magnitude of 62 N s.',
    answer: '2.4 m/s',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'Determine the magnitude of the linear momentum of a 22.0 kg object moving at 0.550 m/s.',
    answer: '12.1 N s',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'Determine the magnitude of the acceleration produced by a 2.5 kV/m electric field on a 5.2 mC charge of mass 0.20 kg.',
    answer: '65 m/s²',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Electrostatics',
    question_year: 2018
  },
  {
    question:
      'Find the charge on a particle of mass 2.7×10⁻³ kg which accelerates at 45 m/s² when acted on by an 81 V/m electric field.',
    answer: '1.5 mC',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Electrostatics',
    question_year: 2018
  },
  {
    question:
      'Find the mass of a 2 mC charge which accelerates at 50 m/s² when a 100 V/m electric field acts on it.',
    answer: '0.004 kg',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Electrostatics',
    question_year: 2018
  },
  {
    question:
      'A capacitor network is made up of a 20.0 μF capacitor in parallel with a series combination of a 5.00 μF capacitor and a 3.00 μF capacitor. What is the net capacitance of the network?',
    answer: '21.9 μF',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Electrostatics',
    question_year: 2018
  },
  {
    question:
      'A capacitor network is made up of two 5.00 μF capacitors in parallel. What is the capacitance of a capacitor in series with the network which results in a net capacitance of 5.00 μF?',
    answer: '10.0 μF',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Electrostatics',
    question_year: 2018
  },

  {
    question:
      'Find the net capacitance of a capacitor network comprising a 15 μF capacitor in series with a parallel combination of a 4.0 μF capacitor and a 6.0 μF capacitor',
    answer: '6.0 μF',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Electrostatics',
    question_year: 2018
  },
  {
    question:
      'The speed of light in air is 3/2 times the speed of light in a certain medium. What is the sine of the angle of refraction when light is incident at 30° from air into the medium',
    answer: '1/3',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'The speed of light in air is 4/3 times the speed of light in a certain liquid. What is the sine of the angle of refraction when light is incident at 45° from air into the liquid',
    answer: '0.53033',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'The speed of light in air is 7/5 times the speed of light in a certain medium. What is the sine of the angle of incidence when light from air is refracted at 30° in the medium',
    answer: ' Please provide the answer.', //
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'Find the dimensions of the physical quantity with the given SI unit (J s )',
    answer: 'L²MT⁻¹',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Introduction to Physics',
    question_year: 2018
  },
  {
    question:
      'Find the dimensions of the physical quantity with the given SI unit (W m)',
    answer: 'L³MT⁻³',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Introduction to Physics',
    question_year: 2018
  },
  {
    question:
      'Find the dimensions of the physical quantity with the given SI unit (N s)',
    answer: 'LMT⁻¹',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Introduction to Physics',
    question_year: 2018
  },
  {
    question:
      'In the Bohr hydrogen atom, what is the ratio of the electron speed in a Bohr orbit of radius 1.3225 nm to the electron speed in the ground state?',
    answer: '1/5',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2018
  },
  {
    question:
      'Find the ratio of the radii of the Bohr hydrogen atom for which the electron speeds are in the ratio 4/5',
    answer: '25/16',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Atomic Physics',
    question_year: 2018
  },
  {
    question:
      'Find the image distance for a real object 50 cm from a convex spherical mirror of focal length -20 cm',
    answer: '14 cm',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'The image distance for a real object in front of a convex spherical mirror of focal length -20 cm is one quarter the object distance. Find the object distance',
    answer: '60 cm',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'A real object is placed 32.0 cm in front of a convex spherical mirror of focal length -48.0 cm. Find the image distance',
    answer: '19.2 cm',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Light Energy',
    question_year: 2018
  },
  {
    question:
      'The middle of a uniform 80 cm long bar is placed on a knife edge and a 4.0 kg mass is suspended from one free end of the bar. How far from the other free end must a 6.4 kg mass be suspended to maintain the bar in a horizontal position',
    answer: '15 cm',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'The middle of a uniform 120 cm long bar is placed on a knife edge and a 4.2 kg mass is suspended from one free end of the bar. What mass must be suspended 20 cm from the other free end to maintain the bar in a horizontal position',
    answer: '6.3 kg',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'A uniform 100 cm bar is suspended at its middle on a knife edge and a 2.0 kg mass is suspended 18 cm from the knife edge. How far from the knife edge on its other side must a 3.0 kg mass be suspended to maintain the bar in a horizontal position',
    answer: '12 cm',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Motion Force And Energy',
    question_year: 2018
  },
  {
    question:
      'A constant-volume gas thermometer gives a pressure reading of 80.0 kPa at the triple point of water. What absolute temperature is indicated by a pressure reading of 98.4 kPa',
    answer: '336 K',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Pressure',
    question_year: 2018
  },
  {
    question:
      'The pressure reading of another constant-volume gas thermometer is 50.0 kPa at 400 K. What is the pressure reading of the thermometer at the triple point of water',
    answer: '34.1 Kpa',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Pressure',
    question_year: 2018
  },
  {
    question:
      'For a constant-volume gas thermometer whose pressure is 80.0 kPa at 500 K, what pressure is indicated at the upper fixed point?',
    answer: '59.7 Kpa',
    difficulty_level: 'Prelims',
    subject_name: 'Physics',
    topic: 'Pressure',
    question_year: 2018
  },
  {
    question: 'Factor into a product of two binomials 8x^2 – 2xy - y^2',
    answer: '(4x + y)(2x – y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'quadratic expression',
    question_year: 2017
  },
  {
    question: 'Factor into a product of two binomials 5x^2 – 4xy – 12y^2',
    answer: '(5x + 6y)(x – 2y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'quadratic expression',
    question_year: 2017
  },
  {
    question: 'Find the solution set of the linear inequality | x + 4| < 8',
    answer: '{x : -12 < x < 4 }',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'absolute value inequality',
    question_year: 2017
  },
  {
    question: 'Find the solution set of the linear inequality | x – 5| > 7',
    answer: '{x : x > 12, or x < -2}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'absolute value inequality',
    question_year: 2017
  },
  {
    question: 'Find the solution set of the linear inequality | x + 7| < - 5',
    answer: 'the empty set or no solution',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'absolute value inequality',
    question_year: 2017
  },
  {
    question: 'Find the number of axes of symmetry of a trapezium',
    answer: 'zero or none',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'axes of symmetry',
    question_year: 2017
  },
  {
    question: 'Find the next prime number after 131',
    answer: '137',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'prime number',
    question_year: 2017
  },
  {
    question: 'Evaluate the expression sin 54°cos 24° – cos 54°sin 24°',
    answer: '1/2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question: 'Express the given number in scientific notation 59300000',
    answer: '5.93 x 10^7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'scientific notation',
    question_year: 2017
  },
  {
    question: 'Express the given number in scientific notation 0.00003567',
    answer: '3.567 x 10^-5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'scientific notation',
    question_year: 2017
  },
  {
    question: 'Express the given number in scientific notation 139700000',
    answer: '1.397 x 10^8',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'scientific notation',
    question_year: 2017
  },
  {
    question:
      'If α and β are the roots of the equation x^2 + 2x – 7 = 0, evaluate α^2 + β^2',
    answer: '18',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'quadratic equation',
    question_year: 2017
  },
  {
    question:
      'If α and β are the roots of the equation x^2 + 2x – 7 = 0, evaluate 1/α + 1/β',
    answer: '2/7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'quadratic equation',
    question_year: 2017
  },
  {
    question:
      'If α and β are the roots of the equation x^2 + 2x – 7 = 0, evaluate (α +1)(β + 1)',
    answer: '-8',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'quadratic equation',
    question_year: 2017
  },
  {
    question: 'Find the derivative of the function y = 2x^4 – 3x^2 + 5',
    answer: 'dy/dx = 8x^3 – 6x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2017
  },
  {
    question:
      'Find the radius R of the circle with equation x^2 + y^2 – 4x + 6y – 12 = 0',
    answer:
      'R = 5 (Completing the square gives (x – 2)^2 + (y + 3)^2 = 12 + 4 + 9 = 25, hence radius R = 5)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Circle',
    question_year: 2017
  },
  {
    question: 'Find the next term in the sequence 2, 3, 5, 8, 13, . . .',
    answer:
      'The next term is 21 (each term is obtained by adding the next natural number).',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequence',
    question_year: 2017
  },
  {
    question:
      'If f(x) = 2x^2 – 2x + 3, express the following in powers of x f(x + 1)',
    answer: 'f(x + 1) = 2x^2 + 2x + 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: 2017
  },
  {
    question:
      'If f(x) = 2x^2 – 2x + 3, express the following in powers of x 2x^2 - 6x + 7',
    answer: '2x^2 - 6x + 7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: 2017
  },
  {
    question:
      'If f(x) = 2x^2 – 2x + 3, express the following in powers of x f(2x)',
    answer: 'f(2x) = 8x^2 – 4x + 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: 2017
  },
  {
    question:
      'Find the sum of the measures of the interior angles of the given polygon. Give answer in degrees Decagon',
    answer: 'The sum of interior angles of a decagon is 1440°.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygons',
    question_year: 2017
  },
  {
    question:
      'Find the sum of the measures of the interior angles of the given polygon. Give answer in degrees Duo-decagon',
    answer: 'The sum of interior angles of a duo-decagon is 1800°.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygons',
    question_year: 2017
  },
  {
    question:
      'Find the sum of the measures of the interior angles of the given polygon. Give answer in degrees Septagon',
    answer: 'The sum of interior angles of a septagon is 900°.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygons',
    question_year: 2017
  },
  {
    question:
      'Find the area of a triangle with two sides of lengths 8 cm and 5 cm and an included angle of 45°.',
    answer: 'The area is 10√2 cm².',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2017
  },
  {
    question: 'Solve the equation bx^2 - 2x + 1/b = 0, given b ≠ 0.',
    answer: 'The solution is x = 1/b.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Equation',
    question_year: 2017
  },
  {
    question:
      'Two cyclists 90 km apart start riding towards each other at constant speeds at 12 pm. One cycles twice as fast as the other. If they meet after two hours, find the average speed of each cyclist.',
    answer: 'The speeds are 15 km/hr and 30 km/hr.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2017
  },
  {
    question: 'Find the next term in the sequence 2, 6, 12, 20, 30',
    answer:
      'The next term is 30 (the differences between consecutive terms form an arithmetic progression: 4, 6, 8, 10, ...).',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequence',
    question_year: 2017
  },

  {
    question: 'Find the next term in the sequence 5, 10, 17, 26, . . .',
    answer:
      'The next term is 37 (the differences of the terms form an arithmetic progression: 5, 7, 9, 11, ...).',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequence',
    question_year: 2017
  },
  {
    question: 'Find the next term in the sequence -7, 0, 9, 20, . . .',
    answer:
      'The next term is 33 (the differences of the terms form an arithmetic progression: 7, 9, 11, 13, ...).',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequence',
    question_year: 2017
  },
  {
    question: 'Solve the equation for x 42x - 3 = 16 - 2x + 1',
    answer: 'x = 5/6 (2x - 3 = 2(-2x + 1), 6x = 3 + 2, x = 5/6)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equation',
    question_year: 2017
  },
  {
    question: 'Solve the equation for x 33x + 2 = 9x + 2',
    answer: 'x = 2 (3x + 2 = 2(x + 2), x = 4 - 2 = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equation',
    question_year: 2017
  },
  {
    question: 'Solve the equation for x 74x = 49x - 2',
    answer: 'x = -2 (4x = 2(x - 2), 2x = -4, x = -2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equation',
    question_year: 2017
  },
  {
    question: 'Express tan(190°) as the tan of a positive acute angle',
    answer: 'tan(10°) (tan(190) = tan(180 + 10) = tan(10))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question: 'Factorise completely 2x^2 - 9x + 10',
    answer:
      '(2x - 5)(x - 2) (2x^2 - 4x - 5x + 10 = 2x(x - 2) - 5(x - 2) = (2x - 5)(x - 2))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Expression',
    question_year: 2017
  },
  {
    question:
      'If f(x) = 2x + 3, and g(x) = x^2 + 2, find an expression for f(g(x))',
    answer: '2x^2 + 7 (f(g(x)) = 2g(x) + 3 = 2(x^2 + 2) + 3 = 2x^2 + 7)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Composite Function',
    question_year: 2017
  },
  {
    question: 'Solve the simultaneous equations 2x + y = 18, and x - 2y = -1',
    answer:
      'x = 7, y = 4 (4x + 2y + x - 2y = 36 - 1, 5x = 35, x = 7 and y = 18 - 14 = 4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equations',
    question_year: 2017
  },
  {
    question: 'Solve the simultaneous equations x - 2y = 5, and 3x + y = 8',
    answer:
      'x = 3, y = -1 (x - 2y + 6x + 2y = 5 + 16, 7x = 21, x = 3 and y = 8 - 9 = -1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equations',
    question_year: 2017
  },
  {
    question: 'Solve the simultaneous equations 7x + 3y = 5, and 5x - y = 2',
    answer:
      'x = 1/2, y = 1/2 (7x + 3y + 15x - 3y = 5 + 6, 22x = 11, x = 1/2, y = 5/2 - 2 = 1/2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equations',
    question_year: 2017
  },
  {
    question: 'List the set of integers x for which x^2 - 4x - 5 < 0',
    answer: '{0, 1, 2, 3, 4} (-1 < x < 5, x = 0, 1, 2, 3, 4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Integers',
    question_year: 2017
  },
  {
    question: 'List the set of integers x for which x^2 + 4x - 5 < 0',
    answer: '{-4, -3, -2, -1, 0} (-5 < x < 1, x = -4, -3, -2, -1, 0)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Integers',
    question_year: 2017
  },

  {
    question: 'List the set of integers x for which x^2 + x - 6 < 0',
    answer: '{-2, -1, 0, 1} (-3 < x < 2, x = -2, -1, 0, 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Integers',
    question_year: 2017
  },
  {
    question: 'Factorise completely 2x^2 - 5y + 5x - 2xy',
    answer:
      '(2x + 5)(x - y) (2x^2 - 2xy + 5x - 5y = 2x(x - y) + 5(x - y) = (2x + 5)(x - y))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Expression',
    question_year: 2017
  },
  {
    question: 'Evaluate 178^2 - 78^2',
    answer: '25,600 ((178 - 78)(178 + 78) = 100(256) = 25,600)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Numerical Expression',
    question_year: 2017
  },
  {
    question:
      'Find the equation of the straight line with gradient -5 and y-intercept 3',
    answer: 'y = -5x + 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation of a Line',
    question_year: 2017
  },
  {
    question: 'If f(x) = 3x – 5, find f-1(4)',
    answer: 'f-1(4) = 3 (3x – 5 = 4, 3x = 9, x = 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2017
  },
  {
    question: 'If f(x) = 3x – 5, find f-1(-2)',
    answer: 'f-1(-2) = 1 (3x – 5 = -2, 3x = 3, x = 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2017
  },
  {
    question: 'If f(x) = 3x – 5, find f-1(-8)',
    answer: 'f-1(-8) = -1 (3x – 5 = -8, 3x = -3, x = -1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2017
  },
  {
    question:
      'A basketball team of 6 players can be selected from a group of 10 players. In how many ways can this be done if any player can be selected (leave answer in factorial notation)',
    answer: '10!/(6!4!)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation of a Line',
    question_year: 2017
  },
  {
    question:
      'A basketball team of 6 players can be selected from a group of 10 players. In how many ways can this be done if a particular player must be included',
    answer: '9!/(5!4!)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation of a Line',
    question_year: 2017
  },
  {
    question:
      'A basketball team of 6 players can be selected from a group of 10 players. In how many ways can this be done if a particular player must be excluded?',
    answer: '9!/(6!3!)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation of a Line',
    question_year: 2017
  },
  {
    question:
      'Use parentheses such that the equation is correct: 17 – 10 - 2 ÷ 4 = 15',
    answer: '17 – (10 – 2) ÷ 4 = 15 (17 – 8 ÷ 4 = 17 – 2 = 15)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Expression',
    question_year: 2017
  },
  {
    question:
      'A binary operation is defined on the set of integers by . Evaluate 11*12',
    answer: '133',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Binary Operation',
    question_year: 2017
  },
  {
    question: 'What do we call a polygon with 20 sides?',
    answer: 'Icosagon',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: 2017
  },

  {
    question: 'Identify the polygon the sum of whose interior angles is 1800°.',
    answer: 'DUO-DECAGON',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: 2017
  },
  {
    question: 'Factorise 8x² – 98.',
    answer: '2(2x – 7)(2x + 7)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Expression',
    question_year: 2017
  },
  {
    question:
      'Solve the exponential equation for x. [Leave answer in terms of logarithms where necessary] 5^x = 7',
    answer: 'x = log7/log5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponential Equation',
    question_year: 2017
  },
  {
    question:
      'Solve the exponential equation for x. [Leave answer in terms of logarithms where necessary] 10^x = 8',
    answer: 'x = log8',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponential Equation',
    question_year: 2017
  },
  {
    question:
      'Solve the exponential equation for x. [Leave answer in terms of logarithms where necessary] 5^x = 1/125',
    answer: 'x = -3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponential Equation',
    question_year: 2017
  },
  {
    question:
      'Find y in terms of x given that dy/dx = 3x² – 4x and y = 3 for x = 1',
    answer: 'y = x³ – 2x² + 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2017
  },
  {
    question:
      'Find y in terms of x given that dy/dx = 1/x² + 1 and y = 0 for x = 1',
    answer: 'y = x - 1/x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2017
  },
  {
    question:
      'Find y in terms of x given that dy/dx = 3x² – 1/x² and y = 4 for x = 1',
    answer: 'y = x³ + 1/x + 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2017
  },
  {
    question:
      "State the converse of the implication: 'If n is divisible by 10, then it is divisible by 5.' State whether the converse is true or false.",
    answer:
      'Converse: If n is divisible by 5, then it is divisible by 10. (Converse is FALSE)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logic',
    question_year: 2017
  },
  {
    question:
      'Convert the number in base 12 to a decimal number (in base 10): 1te',
    answer: '275',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Number Bases',
    question_year: 2017
  },
  {
    question:
      'A triangle has sides of lengths 6 cm, 8 cm, and 10 cm. Find the radius of the circumscribing circle.',
    answer: '5 cm (This is half the length of the hypotenuse)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Circle',
    question_year: 2017
  },
  {
    question:
      'Find the equation of the straight line through the pair of points A(1, 2) and B(3, 8)',
    answer: 'y = 3x - 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation of a Line',
    question_year: 2017
  },
  {
    question:
      'Find the equation of the straight line through the pair of points C(3, 5) and D(1, 1)',
    answer: 'y = 2x - 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation of a Line',
    question_year: 2017
  },

  {
    question:
      'Find the equation of the straight line through the pair of points E(-2, 3) and F(3, -2)',
    answer: 'y = -x + 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation of a Line',
    question_year: 2017
  },
  {
    question:
      'Find the sum of the interior angles of an octagon in radian measure.',
    answer: '6π radians ([(n – 2)π = (8 – 2)π = 6π])',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygons',
    question_year: 2017
  },
  {
    question: 'Convert the decimal number 529 to a number in base 8.',
    answer: '10158 (529 = 516 + 8 + 5 = 83 + 81 + 5 = 10158)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Number Bases',
    question_year: 2017
  },
  {
    question:
      'Express the numerical expression 1.764 × 10^7 as a decimal number.',
    answer: '17,640,000',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Expressing a Number in Decimal Notation',
    question_year: 2017
  },
  {
    question:
      'The average speed of a car is 36 km/hr. Find the time taken (in seconds) to travel a distance of 300 meters.',
    answer: '30 seconds (300 x 60 x 60 / 36,000 = 300 / 10 = 30)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2017
  },
  {
    question:
      'Find the solution set of the linear inequality (x + 1)/2 - (x – 2)/3 > 0.',
    answer: '{x : x > -7} (3(x + 1) - 2(x - 2) > 0, x + 3 + 4 > 0, x > -7)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Inequality',
    question_year: 2017
  },
  {
    question:
      'z varies directly as x and inversely as y. Given that the constant of variation k = 5, find z when x = 10 and y = 25.',
    answer: 'z = 2 (z = kx/y, z = 5 (10)/25 = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: 2017
  },
  {
    question: 'If sinx = 3/5 and x is an acute angle, evaluate cosx + tanx.',
    answer:
      'cosx + tanx = 31/20 (cosx = 4/5, tanx = 3/4, cosx + tanx = 4/5 + 3/4 = (16 + 15)/20 = 31/20)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question: 'If sinx = 3/5 and x is an acute angle, evaluate cosecx + cotx.',
    answer:
      'cosecx + cotx = 3 (cosecx = 5/3, cotx = 4/3, cosecx + cotx = (5 + 4)/3 = 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question:
      'Find the period T and the amplitude A of the given trigonometric function y = 5sin3x – 12.',
    answer: 'T = 120°, or 2π/3 radians, A = 5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question:
      'Find the period T and the amplitude A of the given trigonometric function y = 10 – 7cos(x/2).',
    answer: 'T = 720°, or 4π radians, A = 7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question:
      'Find the period T and the amplitude A of the given trigonometric function y = 3tan2x + 15.',
    answer: 'T = 90°, or π/2 radians, amplitude A is undefined',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },

  {
    question: 'Solve the equation for x: 5^3x – 2 = 625',
    answer: 'x = 2 (53x – 2 = 54, 3x – 2 = 4, 3x = 6, x = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponential Equation',
    question_year: 2017
  },
  {
    question: 'Solve the equation for x: 6^3x - 3 = 216',
    answer: 'x = 2 (63x - 3 = 63, 3x – 3 = 3, 3x = 6, x = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponential Equation',
    question_year: 2017
  },
  {
    question: 'Solve the equation for x: 3^2x + 2 = 81',
    answer: 'x = 1 (32x + 2 = 34, 2x + 2 = 4, 2x = 2, x = 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponential Equation',
    question_year: 2017
  },
  {
    question:
      'How many permutations of all the letters of the word JUNIOR begin with J?',
    answer:
      '5! = 120 (J is fixed so arrange the remaining 5 letters in 5! ways)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Permutations',
    question_year: 2017
  },
  {
    question:
      'How many permutations of all the letters of the word JUNIOR begin with J and end with R?',
    answer:
      '4! = 24 (J and R fixed so arrange the remaining 4 letters in 4! ways)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Permutations',
    question_year: 2017
  },
  {
    question:
      'How many permutations of all the letters of the word JUNIOR are there? (without any restriction)',
    answer:
      '6! = 720 (arrange six objects in six positions to give 6! permutations)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Permutations',
    question_year: 2017
  },
  {
    question: 'Solve the linear equation for y: 2x + 3y = 1',
    answer: 'y = (1 – 2x)/3 or y = 1/3 - 2x/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equation',
    question_year: 2017
  },
  {
    question: 'If f(x) = 3x^2 + ax – 5 is divisible by (x – 1), evaluate a.',
    answer: 'a = 2 (3 + a – 5 = 0, a = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomial Expression',
    question_year: 2017
  },
  {
    question: 'Given y = 2x^2 – 3/x, evaluate dy/dx at x = 1',
    answer: 'dy/dx = 7 (dy/dx = 4x + 3/x^2, at x = 1, dy/dx = 4 + 3 = 7)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Derivative of a Function',
    question_year: 2017
  },
  {
    question:
      'Find the odd one out and give a reason for your answer: A) Function, B) Mapping, C) Bisection, D) Relation',
    answer: 'C) Bisection (The others are relations but a Bisection is not)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Odd One Out',
    question_year: 2017
  },
  {
    question:
      'Find the odd one out and give a reason for your answer: A) Angle, B) Quadrilateral, C) Pyramid, D) Circle',
    answer:
      'C) Pyramid (The others are all plane figures but a Pyramid is a solid (3-D) figure)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Odd One Out',
    question_year: 2017
  },
  {
    question:
      'Find the odd one out and give a reason for your answer: A) 125, B) 64, C) 216, D) 625',
    answer: 'D) 625 (The others are cubes but 625 is a fourth power of 5)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Odd One Out',
    question_year: 2017
  },
  {
    question: 'Given a = log5 and b = log3, express log75 in terms of a and b.',
    answer: '2a + b (75 = 5^2(3), log75 = 2log5 + log3 = 2a + b)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithms',
    question_year: 2017
  },

  {
    question: 'If A is acute and tanA = 1/q, find sinA.',
    answer: '1/√(q^2 + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question:
      'The point A(4, 4) is rotated 90° clockwise about the origin. Find the coordinates of the image point.',
    answer: '(4, -4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Coordinate Geometry',
    question_year: 2017
  },
  {
    question:
      'Find the measure of the smaller angle between the hands of a clock at the given time 3.15 am.',
    answer: '7.5° (30/4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: "Measure of a Clock's Hands",
    question_year: 2017
  },
  {
    question:
      'Find the measure of the smaller angle between the hands of a clock at the given time 12.15 pm.',
    answer: '82.5° (90 - 30/4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: "Measure of a Clock's Hands",
    question_year: 2017
  },
  {
    question:
      'Find the measure of the smaller angle between the hands of a clock at the given time 5.15 am.',
    answer: '67.5° (30 + 30 + 30/4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: "Measure of a Clock's Hands",
    question_year: 2017
  },
  {
    question: 'Simplify the trigonometric expression 2tanA/(1 – tan^2A).',
    answer: 'tan^2A',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2017
  },
  {
    question: 'Find a polynomial equation with roots x = 1, -2, 3.',
    answer: '(x – 1)(x + 2)(x – 3) = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomial',
    question_year: 2017
  },
  {
    question:
      'Find the probability of getting a sum of 5 when a pair of fair dice is rolled?',
    answer: '1/9 (A = {(1, 4), (4, 1), (2, 3), (3, 2)}, P(A) = 4/36 = 1/9)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2017
  },
  {
    question:
      'The base of a triangle is 8 units shorter than 4 times its height h. Find an expression for the area A of the triangle.',
    answer: 'A = ½(4h – 8)h = (2h – 4)h',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2017
  },
  {
    question:
      'The length of a rectangle is 5 units more than its width W. Find an expression for the perimeter P.',
    answer: 'P = 4W + 10',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2017
  },
  {
    question:
      'The perimeter of a rectangle is 3 times the length L. Express the width W in terms of the length L.',
    answer: 'W = ½L',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2017
  },
  {
    question:
      'Find the number of axes of symmetry of the given geometric figure A rhombus.',
    answer: '2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Symmetry',
    question_year: 2017
  },
  {
    question:
      'Find the number of axes of symmetry of the given geometric figure A trapezium.',
    answer: '0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Symmetry',
    question_year: 2017
  },

  {
    question:
      'Find the number of axes of symmetry of the given geometric figure A square.',
    answer: '4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Symmetry',
    question_year: 2017
  },
  {
    question:
      'A and B are events such that P(A) = 0.8, P(B) = 0.6, P(A and B) = 0.5. Find P(A or B).',
    answer:
      '0.9 (P(A or B) = P(A) + P(B) – P(A and B) = 0.8 + 0.6 – 0.5 = 0.9)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2017
  },
  {
    question: 'Find the highest common factor of 175 and 245.',
    answer: '35 (hcf(175, 245) = 5 x 7 = 35)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Highest Common Factor',
    question_year: 2017
  },
  {
    question: 'Differentiate the function y = (2 – x)/(x + 2).',
    answer: 'dy/dx = -4/(x + 2)^2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2017
  },
  {
    question:
      'Find the first term a and the common difference d of an AP whose 9th term is 26 and 20th term is 59.',
    answer:
      'a = 2, d = 3 (a + 8d = 26, a + 19d = 59, 11d = 33, d = 3, a + 24 = 26, a = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Progression',
    question_year: 2017
  },
  {
    question:
      'Find the first term a and the common difference d of an AP whose 16th term is 110 and 11th term is 75.',
    answer:
      'a = 5, d = 7 (a + 15d = 110, a + 10d = 75, 5d = 35, d = 7, a + 70 = 75, a = 5)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Progression',
    question_year: 2017
  },
  {
    question:
      'Find the first term a and the common difference d of an AP whose 10th term is 37 and twenty-first term is 70.',
    answer:
      'a = 10, d = 3 (a + 9d = 37, a + 20d = 70, 11d = 33, d = 3, a + 27 = 37, a = 10)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Progression',
    question_year: 2017
  },
  {
    question: 'Solve the equation: x - 0.05x = 19',
    answer: 'x = 20 (0.95x = 19, x = 20)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equation',
    question_year: 2017
  },
  {
    question:
      'A sequence is defined by the recurrence relation Un = Un – 1 + 3, U1 = 3. Find the first three terms of the sequence.',
    answer:
      'U1 = 3, U2 = 6, U3 = 9 (U2 = U1 + 3 = 3 + 3 = 6, U3 = U2 + 3 = 6 + 3 = 9)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Recurrence Relation',
    question_year: 2017
  },
  {
    question: 'Solve for x given that x + y = 4 and x^2 - y = 8',
    answer:
      'x = 3, -4 (x^2 + x = 12, x^2 + x - 12 = 0, (x + 4)(x - 3) = 0, x = 3, -4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equations',
    question_year: 2017
  },
  {
    question: 'Solve for x given that 2x - y = 7 and x^2 + y = 8',
    answer: 'x = -5, 3 (x^2 + 2x - 15 = 0, (x + 5)(x - 3) = 0, x = -5, 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equations',
    question_year: 2017
  },

  {
    question: 'Solve for x given that 3x + y = 14, x^2 - y = 14',
    answer: 'x = -7, 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear Equations',
    question_year: '2017'
  },
  {
    question: 'Find the solution set of the inequality |x + 4| < 6',
    answer: '{x : -10 < x < 2}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Absolute Value Inequality',
    question_year: '2017'
  },
  {
    question: 'Find the solution set of the inequality |4y + 3| < 9',
    answer: '{y : -3 < y < 3/2}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Absolute Value Inequality',
    question_year: '2017'
  },
  {
    question: 'Find the solution set of the inequality |2x – 4 | > 6',
    answer: '{x : x > 5  or x < -1}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Absolute Value Inequality',
    question_year: '2017'
  },
  {
    question: 'Convert 7π/9 radians into degree measure',
    answer: '140°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Converting Radians to Degrees',
    question_year: '2017'
  },
  {
    question: 'Solve for x: log(x + 5) – log(x – 3) = log2',
    answer: 'x = 11',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithms',
    question_year: '2017'
  },
  {
    question:
      'Find a number such that 55 plus the square of the number is 16 times the number',
    answer: '11, 5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'One natural number is four times another. The product of the two numbers is 100. Find the two numbers',
    answer: '5, 20',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'The difference of two numbers is 15 and the difference of their squares is 150. Find the sum of the numbers.',
    answer: '10',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'If A(x + 2) + B(x – 3) = x + 7, find A and B',
    answer: 'A = 2, B = -1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Constants in a Linear Equation',
    question_year: '2017'
  },
  {
    question: 'Find the zeros of the function f(x) = 3x^2 – x – 4',
    answer: 'x = -1, 4/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Zeros of a Polynomial Function',
    question_year: '2017'
  },
  {
    question:
      'Find the measure of the interior angle of a regular nonagon in radians',
    answer: '7π/9 radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: '2017'
  },
  {
    question:
      'The length of a rectangular field is 30m longer than the width and the perimeter is 220m. Find the area',
    answer: '2800 m2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },

  {
    question:
      'The area of a rectangular field is 8,000 m2. If the length is 20 m longer than the width, find the length',
    answer:
      'LW = 8000, L = W + 20, (W + 20)W = 8000, W^2 + 20W – 8000 = 0, (W - 80)(W + 100) = 0, W = 80, L = 100m',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },
  {
    question:
      'A rectangular swimming pool has a diagonal of 17m and a width of 8m. Find surface area of the pool',
    answer: '120 m2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },
  {
    question:
      'Express the numerical expression in the normal decimal notation: 7.586 × 10^8',
    answer: '758,600,000 (758 million, 600 thousand)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Expressing a number in decimal notation',
    question_year: '2017'
  },
  {
    question:
      'Given that α and β are the roots of the equation x^2 + 7x – 5 = 0, find the value of (α^2 + β^2).',
    answer: '59 ((α + β)^2 - 2αβ = (-7)^2 - 2(-5) = 49 + 10 = 59)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Equation',
    question_year: '2017'
  },
  {
    question: 'Given the vectors a = 2i + 3j and b = 3i – 5j, find 2a + 3b',
    answer: '13i – 9j (2(2i + 3j) + 3(3i – 5j) = 13i – 9j)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2017'
  },
  {
    question: 'Given the vectors a = 2i + 3j and b = 3i – 5j, find 3a – 2b',
    answer: '19j (3(2i + 3j) - 2(3i - 5j) = 19j)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2017'
  },
  {
    question: 'Given the vectors a = 2i + 3j and b = 3i – 5j, find 5a + 2b',
    answer: '16i + 5j (5(2i + 3j) + 2(3i – 5j) = 16i + 5j)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2017'
  },
  {
    question: 'Given the function y = 2x^2 – 3x - 3, find dy/dx at x = 1',
    answer: 'dy/dx = 1 (dy/dx = 4x – 3; at x = 1, dy/dx = 4 – 3 = 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question: 'Given that y = x^2 – 1/x^2, find dy/dx at x = 1.',
    answer: 'dy/dx = 4 (dy/dx = 2x + 2/x^3; at x = 1, dy/dx = 2 + 2 = 4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question: 'Given that y = 4x^3 – 5/x^2, find dy/dx at x = -1',
    answer:
      'dy/dx = 2 (dy/dx = 12x^2 + 10/x^3; at x = -1, dy/dx = 12 – 10 = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question: 'Find all real solutions for x, given x^(2/3) = 2',
    answer: 'x = ±2√2 (x^2 = (2)^(3) = 8, x = ±√8 = ±2√2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Radical Equation',
    question_year: '2017'
  },
  {
    question:
      'Find the coordinates of the y-intercept of the function f(x) = x^3 – 5x^2 + 7x + 6',
    answer: '(0, 6) (f(0) = 6, hence (0, 6))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: '2017'
  },
  {
    question: 'Evaluate log19(27)/log19(3)',
    answer: '3 (log19(27)/log19(3) = 3log19(3)/log19(3) = 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Finding a Ratio of Logarithms',
    question_year: '2017'
  },

  {
    question:
      'y varies directly as x and y = 36 when x = 9. Find y when x = 6.',
    answer: 'y = 24 (y = kx, 36 = 9k, k = 4. For x = 6, y = 4(6) = 24)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Direct and Inverse Variation',
    question_year: '2017'
  },
  {
    question:
      'y varies directly as the square of x and y = 100 when x = 5. Find y when x = 6.',
    answer: 'y = 144 (y = kx^2, 100 = 25k, k = 4. For x = 6, y = 4(36) = 144)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Direct and Inverse Variation',
    question_year: '2017'
  },
  {
    question:
      'y varies inversely as x and y = 25 when x = 2. Find y when x = 10.',
    answer: 'y = 5 (y = k/x, k = xy = 25(2) = 50. For x = 10, y = 50/10 = 5)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Direct and Inverse Variation',
    question_year: '2017'
  },
  {
    question: 'Evaluate sin67°cos23° + cos67°sin23°',
    answer: '1 (sin(67° + 23°) = sin90° = 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question: 'Evaluate cos53°cos23° + sin53°sin23°',
    answer: '√3/2 (cos(53° - 23°) = cos30° = √3/2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question: 'Evaluate sin78°cos33° – cos78°sin33°',
    answer: '1/√2 (sin(78° - 33°) = sin45° = 1/√2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'A number is given to three significant figures as 457. Find the smallest possible value for the number.',
    answer: '456.5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Significant Figures and Numerical Values',
    question_year: '2017'
  },
  {
    question:
      'The curve y = A + 5sinx passes through the point (0, 7). Find the value of A',
    answer: 'A = 7 (7 = A + 5sin0 = A, hence A = 7)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry (Using Trigonometric Functions in Equations)',
    question_year: '2017'
  },
  {
    question:
      'Find the sum of the first twenty terms of the series 5 + 10 + 15 + 20 + . . .',
    answer:
      '1050 (AP; a = 5, d = 5, n = 20, S20 = 10[(2(5) + 5(19)] = 10(10 + 95) = 1050)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Series',
    question_year: '2017'
  },
  {
    question:
      'Find the area of a sector of a circle of radius R, and sectoral angle θ given that R = 9cm and θ = 2π/3 radians',
    answer: 'A = 27π cm2 (A = ½ R^2θ = ½ 9^2 (2π/3) = 27π cm2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry (Area of a Sector)',
    question_year: '2017'
  },
  {
    question:
      'Find the area of a sector of a circle of radius R, and sectoral angle θ given that R = 15 cm, θ = 2π/5 radians',
    answer: 'A = 45π cm2 (A = ½ R^2θ = ½ 15^2 (2π/5) = 45π cm2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry (Area of a Sector)',
    question_year: '2017'
  },
  {
    question:
      'Find the area of a sector of a circle of radius R, and sectoral angle θ given that R = 12 cm, θ = π/6 radians',
    answer: '12π cm2 (A = ½ R^2θ = ½ 12^2 (π/6) = 12π cm2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry (Area of a Sector)',
    question_year: '2017'
  },
  {
    question:
      'Find y in terms of x given that (x^2 – 4y^2) /(x^2 + 4xy + 4y^2)',
    answer: '(x – 2y)/(x + 2y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },

  {
    question: 'Find y in terms of x given that (9x^2 – y^2)/(9x^2 – 6xy + y^2)',
    answer: '(3x + y)/(3x - y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'Find y in terms of x given that (9x^2 + 12xy + 4y^2)/(9x^2 – 4y^2)',
    answer: '(3x + 2y)/(3x – 2y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'Convert 120° to radians.',
    answer: '2π/3 (120π/180 = 2π/3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry (Converting degrees to radians)',
    question_year: '2017'
  },
  {
    question: 'Evaluate the definite integral',
    answer: 'Not provided',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus (Definite Integral)',
    question_year: '2017'
  },
  {
    question:
      'The points A(3, a) and B(b, b – 2) both lie on the line y = 3x – 2. Evaluate a and b.',
    answer: 'a = 7, b = 0 (a = 9 – 2 = 7, b – 2 = 3b – 2, 2b = 0, b = 0)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra (Solving for Variables in Linear Equations)',
    question_year: '2017'
  },
  {
    question:
      'Find y in terms of x given that dy/dx = 3x^2 + 2x, and y = 3 for x = 1.',
    answer:
      'y = x^3 + x^2 + 1 (y = x^3 + x^2 + C, 3 = 1 + 1 + C, C = 1, y = x^3 + x^2 + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question:
      'Find y in terms of x given that dy/dx = 1/x^2 + 1, and y = 0 for x = 1.',
    answer:
      'y = -1/x + x (y = -1/x + x + C, 0 = -1 + 1 + C, C = 0, y = -1/x + x)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question:
      'Find y in terms of x given that dy/dx = 4x^3 – 3x^2, and y = 2 for x = 1.',
    answer:
      'y = x^4 – x^3 + 2 (y = x^4 – x^3 + C, 2 = 1 – 1 + C, C = 2, y = x^4 – x^3 + 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question: '175^2 – 125^2  Evaluate the difference of the two squares',
    answer: '15,000 ([(175 - 125)(175 + 125) = 50(300) = 15,000])',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'Evaluate the difference of the two squares 89^2 - 11^2',
    answer: '7,800 ([(89 – 11)(89 + 11) = 78(100) = 7,800])',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'Evaluate the difference of the two squares 137^2 - 37^2',
    answer: '17,400 ([(137 – 37)(137 + 37) = 100(174) = 17,400])',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'Find the set of values of x for which x^2 – x – 12 < 0',
    answer: '{ x :  -3 < x < 4 } (-3 < x < 4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions and Inverses',
    question_year: '2017'
  },
  {
    question:
      'The function f is defined by f(x) = (2x – 1)/(x + 2). Find f-1(x)',
    answer:
      'f-1(x) = (2x + 1)/(2 – x) (x = (2y – 1)/(y + 2), x(y + 2) = (2y – 1), y(x – 2) = -(2x + 1), y = (2x + 1)/(2 – x))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions and Inverses',
    question_year: '2017'
  },

  {
    question:
      'Find the equation of the line through the points A(3, -5) and B(3, 5).',
    answer: 'x = 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2017'
  },
  {
    question:
      'Find the first three terms of the sequence with the general term given by Un = n^2 + 2n.',
    answer:
      'U1 = 3, U2 = 8, U3 = 15 (U1 = 1 + 2 = 3, U2 = 4 + 4 = 8, U3 = 9 + 6 = 15)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2017'
  },
  {
    question:
      'Find the first three terms of the sequence with the general term given by Un = 3 – 2n.',
    answer:
      'U1 = 1, U2 = -1, U3 = -3 (U1 = 3 – 2 = 1, U2 = 3 – 4 = -1, U3 = 3 – 6 = -3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2017'
  },
  {
    question:
      'Find the first three terms of the sequence with the general term given by Un = 3(2n – 1).',
    answer:
      'U1 = 3, U2 = 6, U3 = 12 (U1 = 3(1) = 3, U2 = 3(2) = 6, U3 = 3(4) = 12)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions and Inverses',
    question_year: '2017'
  },
  {
    question: 'Find the inverse of the given function y = 3x – 4.',
    answer: 'y = (x + 4)/3 (x = 3y – 4, y = (x + 4)/3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions and Inverses',
    question_year: '2017'
  },
  {
    question: 'Find the inverse of the given function 2y = ½x + 1.',
    answer: 'y = 2x – 2 (x = ½y + 1, y = 2x – 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Functions and Inverses',
    question_year: '2017'
  },
  {
    question: 'Find the inverse of the given function y = √x for x ≥ 0.',
    answer: 'y = x^2 for x ≥ 0 (x = √y, y = x^2 for x ≥ 0)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra (Factoring Polynomials)',
    question_year: '2017'
  },
  {
    question:
      'Factor the polynomial expression completely: x^3y – 3x^2y – 18xy.',
    answer: 'xy(x – 6)(x + 3) (xy(x^2 – 3x – 18) = xy(x – 6)(x + 3))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry (Converting degrees to radians)',
    question_year: '2017'
  },
  {
    question: 'If √(3x + 2) = √(x + 4) find x.',
    answer: 'x = 1 (3x + 2 = x + 4, 2x = 2, x = 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus (Definite Integral)',
    question_year: '2017'
  },
  {
    question:
      'Find the equation of the tangent to the curve y = x^2 - 2x + 3 at the point where the tangent is horizontal.',
    answer: 'y = 2 (dy/dx = 2x - 2 = 0, x = 1 and y = 1 - 2 + 3 = 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra (Solving for Variables in Linear Equations)',
    question_year: '2017'
  },
  {
    question:
      'Express each numerical expression in ordinary decimal notation 3.751 x 10^-3.',
    answer: '0.003751',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },
  {
    question:
      'Express each numerical expression in ordinary decimal notation 6.257 x 10^5.',
    answer: '625,700',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },
  {
    question:
      'Express each numerical expression in ordinary decimal notation 7.586 x 10^8.',
    answer: '758,600,000',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },

  {
    question:
      'Find the sum of the interior angles of a polygon with n sides given (Give answer in radians in terms of π) n = 7.',
    answer: '5π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra (Solving Equations with Two Variables)',
    question_year: '2017'
  },
  {
    question:
      'Find the sum of the interior angles of a polygon with n sides given (Give answer in radians in terms of π) n = 11.',
    answer: '9π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra (Polynomial Division)',
    question_year: '2017'
  },
  {
    question:
      'Find the sum of the interior angles of a polygon with n sides given (Give answer in radians in terms of π) n = 17.',
    answer: '15π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'Determine the nature of the roots of the quadratic equation x^2 – 6x + 10 = 0.',
    answer:
      'NO REAL ROOTS (D = b^2 – 4ac = 36 – 40 = -4 < 0, hence no real roots)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'Find y in terms of x given dy/dx = 3x^2 – 2x, and y = 4 for x = 2.',
    answer: 'y = x^3 – x^2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'Identify the regular polygon if an exterior angle has measure 40°.',
    answer: 'NONAGON (n = 360/40 = 9, polygon of 9 sides hence a nonagon)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'Find the length of the segment AB for the given coordinates of A and B A(5, 7), B(-5, 7).',
    answer: '10 (5 – (-5) = 10)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'Find the length of the segment AB for the given coordinates of A and B A(-6, 12), B(-6, 24).',
    answer: '12 (24 – 12 = 12)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'Find the length of the segment AB for the given coordinates of A and B A(-12, 10),  B(- 7, 10).',
    answer: '5 ( -7 – (-12) = 5 )',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'Find two supplementary angles such that the larger angle is 30° less than twice the smaller angle.',
    answer:
      '110°, 70° (a + b = 180, a = 2b – 30, 3b – 30 = 180, 3b = 210, b = 70, a = 110)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'Find the remainder R when the polynomial f(x) = x^3 + 3x^2 – 5x - 10 is divided by (x + 2).',
    answer: 'R = 4 (f(-2) = -8 + 12 + 10 – 10 = 4 )',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'Find the product (3√x + √y)(2√x - 3√y).',
    answer:
      '6x – 3y - 7√(xy) ( (3√x + √y)(2√x – 3√y) = 6x- 3y + 2√xy – 9√xy = 6x – 3y - 7√xy )',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'A number is chosen from the set of numbers S = {11, 12, 13, 14, 15, 16, 17, 18, 19}. Find the probability the number is even.',
    answer: '4/9 ( A = {12, 14, 16, 18}, P(A) = n(A)/n(S) = 4/9 )',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },

  {
    question:
      'A number is chosen from the set of numbers S = {11, 12, 13, 14, 15, 16, 17, 18, 19}. Find the probability the number is a prime number.',
    answer: '4/9 (B = {11, 13, 17, 19}, P(B) = n(B)/n(S) = 4/9)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },
  {
    question:
      'A number is chosen from the set of numbers S = {11, 12, 13, 14, 15, 16, 17, 18, 19}. Find the probability the number is odd and less than 17.',
    answer: '3/9 or 1/3 (C = {11, 13, 15}, P(C) = n(C)/n(S) = 3/9 = 1/3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2017'
  },
  {
    question: 'Find the general term of the sequence -12, -5, 2, 9, 16, . . .',
    answer: 'Un = 7n – 19 (Un = a + (n – 1)d = -12 + 7(n – 1) = 7n – 19)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question: 'Given x^2 + xy – y^2 = 10, find dy/dx.',
    answer: 'dy/dx = (2x + y)/(2y – x)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'Find the equation of the straight line through the points A(3, -3) and B(0, -3).',
    answer: 'y = -3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'The measures of the angles of a triangle are in the ratio 1 : 2 : 6. Find the difference between the largest and smallest angles.',
    answer:
      '100 (smallest angle = (1/9)(180) = 20, largest angle = (6/9)(180) = 120, 120 – 20 = 100)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2017'
  },
  {
    question:
      'The measures of the angles of a triangle are in the ratio 2 : 3 : 5. Find the sum of the smallest and largest angles.',
    answer: '126 ((2 + 5)/10 x (180) = 7(18) = 126)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2017'
  },
  {
    question:
      'The measures of the angles of a triangle are in the ratio 6 : 3 : 1. Find the measures of the angles.',
    answer:
      '108, 54, 18 ((6/10)(180) = 108, (3/10)(180) = 54, (1/10)(180) = 18)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question: 'Find the next two terms in the sequence 1, 3, 6, 10, 15, . . .',
    answer:
      '21, 28 (Difference of the terms forms a linear sequence, 2, 3, 4, 5, . . . , hence 15 + 6 = 21, 21 + 7 = 28)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2017'
  },
  {
    question: 'Find the next two terms in the sequence 2, 2, 4, 6, 10, . . .',
    answer:
      '16, 26 (Apart from the first two terms, each term is the sum of the two preceding terms)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'Find the next two terms in the sequence 1, 9, 25, 49, 81, . . .',
    answer:
      '121, 169 (Sequence of odd squares, i.e., Un = (2n - 1)^2, hence 11^2 = 121, 13^2 = 169)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra (Multiplying Polynomials)',
    question_year: '2017'
  },
  {
    question:
      'Write the expression as a single logarithm: logx + log(x^2 – 1) – log(x – 1) + log 5.',
    answer: 'log(5x(x + 1)) (log[5x(x^2 – 1)/(x – 1)] = log(5x(x + 1)))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra (Multiplying Polynomials)',
    question_year: '2017'
  },
  {
    question:
      'Find the coordinates of the vertex of the graph of the quadratic function y = x^2 + 8x + 18.',
    answer: '(-4, 2) (x^2 + 8x + 16 + 2 = (x + 4)^2 + 2, hence (-4, 2))',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic (Work and Rate)',
    question_year: '2017'
  },
  {
    question:
      'A particle moves in a straight line with constant retardation 4m/s^2. When t = 4 seconds, its speed is 10 m/s. Find the initial speed.',
    answer: '26 m/s (v = u – at, u = v + at = 10 + 4(4) = 10 + 16 = 26 m/s.)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: '2017'
  },

  {
    question: 'Solve for L from the formula T = 2π√(L/g).',
    answer: 'L = T^2g/4π^2 (T^2 = 4π^2(L/g), L = T^2g/4π^2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: '2017'
  },
  {
    question: 'Solve the equation for x: a/b = x/c + d.',
    answer: 'x = c(a – bd)/b (x/c = a/b - d = (a – bd)/b, x = (ac – bcd)/b)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2017'
  },
  {
    question: 'Solve the equation for x: 2/x = 3/a + 4/b.',
    answer: 'x = 2ab/(3b + 4a) (2/x = (3b + 4a)/ab, x = 2ab/(3b + 4a))',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2017'
  },
  {
    question: 'Solve the equation for x: 8/a = 6/x – 4/b.',
    answer:
      'x = 3ab/(4b + 2a) (6/x = 8/a + 4/b = (8b + 4a)/ab, x = 6ab/(8b + 4a) = 3ab/(4b + 2a))',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2017'
  },
  {
    question:
      'Express y as a function of x given that dy/dx = 2x + 2, and y = 4 when x = 2.',
    answer: 'y = x^2 + 2x - 4 (y = x^2 + 2x + C, 4 = 4 + 4 + C, C = -4)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Rationalization)',
    question_year: '2017'
  },
  {
    question:
      'Express y as a function of x given that dy/dx = 3x^2 – 4x^3, and y = -8 when x = 2.',
    answer:
      'y = x^3 – x^4 (y = x^3 – x^4 + C, -8 = 8 – 16 + C, C = 0, y = x^3 – x^4)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Triangle Classification)',
    question_year: '2017'
  },
  {
    question:
      'Express y as a function of x given that dy/dx = 2 – 2/x^2, and y = 0 for x = 1.',
    answer:
      'y = 2x + 2/x - 4 (y = 2x + 2/x + C, 0 = 2 + 2 + C, C = -4, y = 2x + 2/x – 4)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question: 'Solve the equation for x: √(x – 3)/(x – 3) = (x – 5)/√(x – 3).',
    answer: 'x = 6 ((x – 3)/(x – 3) = x – 5, x – 5 = 1, x = 6)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'Find an equation of a circle with center C(2, 4) and passing through the point P(7, -8).',
    answer:
      '(x – 2)^2 + (y – 4)^2 = 13^2 ((x – 2)^2 + (y – 4)^2 = (7 – 2)^2 + (4 + 8)^2 = 5^2 + 12^2 = 13^2)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2017'
  },
  {
    question:
      'How many three-digit numbers can be formed from the digits 2, 4, 6, 7, 9 if no digit can be repeated?',
    answer: '60 (5 x 4 x 3 = 60)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Calculus (Speed and Acceleration)',
    question_year: '2017'
  },
  {
    question:
      'Express the repeating decimal as a rational number 2.34444 . . .',
    answer:
      '211/90 (Let x = 2.34444 . . ., 10x = 23.4444. . ., 100x = 234.4444 . . ., 90x = 211, x = 211/90)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2017'
  },
  {
    question:
      'Express the repeating decimal as a rational number 0.23333 . . .',
    answer:
      '7/30 (Let x = 0.2333. . ., 10x = 2.333 . . , 100x = 23.333 . . ., 90x = 21, x = 21/90 = 7/30)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2017'
  },
  {
    question: 'Express the repeating decimal as a rational number 5.01111. . .',
    answer:
      '451/90 (Let x = 5.01111. . . , 10x = 50 .1111, 100x = 501.111. . . , 90x = 451, x = 451/90)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2017'
  },

  {
    question: 'Express the number in decimal notation: 4.057 x 10^6',
    answer: '4,057,000 (4 million, 57 thousand)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Rationalizing Denominators)',
    question_year: '2017'
  },
  {
    question: 'Express the number in decimal notation: 3.256 x 10^-5',
    answer: '0.00003256',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Triangle Classification)',
    question_year: '2017'
  },
  {
    question: 'Express the number in decimal notation: 7.896 x 10^8',
    answer: '789,600,000 (789 million, 6 hundred thousand)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Consecutive Integers)',
    question_year: '2017'
  },
  {
    question:
      'Find the next two terms in the given sequence: 5, 5, 10, 15, 25, . . .',
    answer: '40, 65',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Algebraic Expressions)',
    question_year: '2017'
  },
  {
    question:
      'Find the next two terms in the given sequence: 6, 7, 13, 20, 33,',
    answer: '53, 86',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Circle Equations)',
    question_year: '2017'
  },
  {
    question:
      'Find the next two terms in the given sequence: 2, 2, 4, 6, 10, . . .',
    answer: '16, 26',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Reflection in a Line)',
    question_year: '2017'
  },
  {
    question:
      'If the point A(0, 5) lies on the graph of the function y = 2sin^2x + A, find A.',
    answer: 'A = 5 (5 = 2sin(0)^2 + A, hence A = 5)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Range of Trigonometric Functions)',
    question_year: '2017'
  },
  {
    question:
      'If the period of the function y = 4cos(nx) is π radians, find n.',
    answer: 'n = 2 (nπ = 2π, hence n = 2)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Combinatorics (Subsets of a Set)',
    question_year: '2017'
  },
  {
    question: 'Find the range of the function y = 5cosx + 5',
    answer: '{y : 0 ≤ y ≤ 10}',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Combinatorics (Subsets of a Set)',
    question_year: '2017'
  },
  {
    question: 'Evaluate antilog(35)',
    answer: '243 (35 = 3^4(3) = 81 × 3 = 243)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Combinatorics (Subsets of a Set)',
    question_year: '2017'
  },
  {
    question:
      'Find the number of 4-digit numbers that can be formed from the digits 1, 3, 5, 7, 9 if no digit can be repeated.',
    answer: '120 (5 x 4 x 3 x 2 = 20 x 6 = 120)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Kinematics (Displacement, Speed, and Acceleration)',
    question_year: '2017'
  },
  {
    question:
      'Find an expression for dy/dx for the given implicit curve: x^2 + 2xy + 3y^2 = 10.',
    answer:
      'dy/dx = -(x + y)/(x + 3y) (2x + 2(x(dy/dx) + y) + 6y(dy/dx) = 0, dy/dx(2x + 6y) = -(2x + 2y), dy/dx = -(x + y)/(x + 3y)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Probability (Probability of Events)',
    question_year: '2017'
  },

  {
    question: '2x^2 + xy + y^2 = 15',
    answer:
      'dy/dx = -(4x + y)/(x + 2y) [4x + y + xdy/dx + 2ydy/dx = 0, dy/dx(x + 2y) = -(4x + y), dy/dx = -(4x + y)/(x + 2y)]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Probability (Probability of Events)',
    question_year: '2017'
  },
  {
    question: 'x^2 - xy - y^2 = 20',
    answer:
      'dy/dx = (2x - y)/(x + 2y) [2x - x(dy/dx) - y - 2y(dy/dx) = 0, 2x - y = (dy/dx)(x + 2y), dy/dx = (2x - y)/(x + 2y)]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences (Finding Specific Terms)',
    question_year: '2017'
  },
  {
    question:
      'Find the values of A, B, C for which 4x^2 - 16x + 21 = A(x + B)^2 + C',
    answer:
      'A = 4, B = -2, C = 5 [4(x^2 - 4x) + 21 = 4(x - 2)^2 + 21 - 16 = 4(x - 2)^2 + 5, hence A = 4, B = -2, C = 5]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences (Finding Specific Terms)',
    question_year: '2017'
  },
  {
    question:
      'Find the values of A, B, C for which 3x^2 + 18x + 10 = A(x + B)^2 + C',
    answer:
      'A = 3, B = 3, C = -17 [3(x^2 + 6x) + 10 = 3(x + 3)^2 + 10 - 27 = 3(x + 3)^2 - 17 hence A = 3, B = 3, C = -17]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences (Finding Specific Terms)',
    question_year: '2017'
  },
  {
    question:
      'Find the values of A, B, C for which 2x^2 - 20x + 37 = A(x + B)^2 + C',
    answer:
      'A = 2, B = -5, C = -13 [2(x^2 - 10x) + 37 = 2(x - 5)^2 + 37 - 2(25) = 2(x - 5)^2 - 13, hence A = 2, B = -5, C = -13]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Rationalizing Denominators)',
    question_year: '2017'
  },
  {
    question:
      'Find the measure of the interior angle of the given regular polygon in radians. regular nonagon',
    answer: '7π/9 radians [(9 - 2)π/9 = 7π/9 radians]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Trigonometric Ratios)',
    question_year: '2017'
  },
  {
    question:
      'Find the measure of the interior angle of the given regular polygon in radians. regular septagon',
    answer: '5π/7 radians [(7 - 2)π/7 = 5π/7 radians]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Area of a Region)',
    question_year: '2017'
  },
  {
    question:
      'Find the measure of the interior angle of the given regular polygon in radians. regular decagon',
    answer: '4π/5 radians [(10 - 2)π/10 = 8π/10 = 4π/5 radians]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Factoring Trinomials)',
    question_year: '2017'
  },
  {
    question:
      'When divided by (x + 1), the polynomial f(x) = x^3 + ax^2 - 4x + 5 leaves a remainder of -5. Find a.',
    answer: 'a = - 13 [f(-1) = -1 + a + 4 + 5 = - 5, a = -5 - 8 = - 13]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2017'
  },
  {
    question: 'Express logx - 3logy + 2logz - logt as the log of a single term',
    answer: 'log(xz^2/y^3t)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Functions (Domain of Functions)',
    question_year: '2017'
  },
  {
    question:
      'In an isosceles right-angled triangle, one leg measures 15 cm. Find the length of the hypotenuse',
    answer: '15√2 cm [d^2 = 15^2 + 15^2, d = 15√2]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Functions (Domain of Functions)',
    question_year: '2017'
  },
  {
    question: 'If f(x) = 10x and g(x) = logx, evaluate f(g(5))',
    answer: '5 [10log5 = 5]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Functions (Domain of Functions)',
    question_year: '2017'
  },
  {
    question:
      'Find the odd one out: A) KITE, B) RHOMBUS, C) RECTANGLE, D) SQUARE',
    answer: 'KITE [The others are all parallelograms, but a kite is not]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Intercepts of Conic Sections)',
    question_year: '2017'
  },

  {
    question:
      'Seven less than twice a number is 20 more than five times the number. Find the number',
    answer: '-9 [2x - 7 = 5x + 20, 3x = -27, x = -9]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Probability (Probability of Events)',
    question_year: '2017'
  },
  {
    question:
      'Find two numbers whose sum is 100 and whose product is a maximum',
    answer:
      '50 and 50 [x + y = 100, P = xy = x(100 - x) = 100x - x^2, dP/dx = 100 - 2x = 0 and x = 50 and y = 50]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Linear Equations',
    question_year: '2017'
  },
  {
    question:
      'Find two positive numbers whose product is 100 and whose sum is a minimum',
    answer:
      '10 and 10 [xy = 100, S = x + y = x + 100/x, dS/dx = 1 - 100/x^2, x = 10 and y = 100/10 = 10]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Triangle Classification)',
    question_year: '2017'
  },
  {
    question:
      'Find two numbers whose difference is 100 and whose product is a minimum',
    answer:
      '50 and -50 [x - y = 100, P = xy = x(x - 100), dP/dx = 2x - 100, x = 50 and y = -100 + 50 = -50]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Sum of Consecutive Integers)',
    question_year: '2017'
  },
  {
    question:
      'Determine whether the points A, B and C are on the same line A(2, 3), B(-2, 0) and C(4, 4)',
    answer:
      'Points are not on the same line [mAB = 3/4, mBC = 4/6 = 2/3, mAB ≠ mBC, hence points are not on the same line]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Dissecting a Triangle)',
    question_year: '2017'
  },
  {
    question:
      'Determine whether the points A, B and C are on the same line A(4, 2), B(1, 0) and C(-2, -2)',
    answer:
      'Points are on the same line. [mAB = 2/3, mBC = -2/-3 = 2/3, mAB = mBC, hence points are on the same line]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Rationalizing Denominators)',
    question_year: '2017'
  },
  {
    question:
      'Determine whether the points A, B and C are on the same line A(-2, 0), B(2, 2) and C(1, 0)',
    answer:
      'Points not on the same line. [mAB = 2/4 = 1/2, mBC = 2/1 = 2, mAB ≠ mBC, hence not on the same line]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Triangle Classification)',
    question_year: '2017'
  },
  {
    question: 'Simplify the expression √8 + √12 + √18 + √27',
    answer: '5√2 + 5√3',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Simplifying Radical Expressions)',
    question_year: '2017'
  },
  {
    question: 'Simplify the expression 2√(c^2d) + √(36c^2d) - 3c√d',
    answer: '5c√d',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Simplifying Radical Expressions)',
    question_year: '2017'
  },
  {
    question: 'Simplify the expression 5√18 + 4√50 - 4√98',
    answer: '7√2',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Simplifying Radical Expressions)',
    question_year: '2017'
  },
  {
    question:
      'Solve the equation cosx = 1/2, for the interval 0 < x < π. Give answers in radians',
    answer: 'x = π/3, [cosx = ½ , x = π/3]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Solving Trigonometric Equations)',
    question_year: '2017'
  },
  {
    question: 'Solve the logarithmic equation log(x + 5) + log(x + 2) = log14x',
    answer:
      'x = 5, 2 [(x + 5)(x + 2) = 14x, x^2 + 7x + 10 = 14x, x^2 - 7x + 10 = 0, (x - 5)(x - 2) = 0, x = 5, 2]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Solving Logarithmic Equations)',
    question_year: '2017'
  },
  {
    question:
      'Find the coordinates of the vertex of the curve y = (x - 2)^2 + 3',
    answer: '(2, 3)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Calculus (Finding the Vertex of a Quadratic Function)',
    question_year: '2017'
  },

  {
    question:
      'Find the area of a triangle with sides 10 cm, 6 cm and an included angle of 30°.',
    answer:
      '15 cm2  [Area = ½ absinC = ½ (10 x 6)sin30° = ½ (10 x 6) x (1/2) = 15 cm2]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Area of a Triangle)',
    question_year: '2017'
  },
  {
    question: 'Find the area of a kite with diagonals of lengths 12cm and 7cm.',
    answer: '42 cm2 [Area = ½ d1 d2 = ½ (12 x 7) = 6 x 7 = 42 cm2]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Area of a Kite)',
    question_year: '2017'
  },
  {
    question:
      'Find the area of a trapezium with parallel sides of lengths 7 cm and 5 cm separated by a distance of 10 cm.',
    answer: '60 cm2  [Area = ½( a + b)h = ½ (7 + 5)10 = 6 x 10 = 60 cm2]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Area of a Trapezium)',
    question_year: '2017'
  },
  {
    question: 'Evaluate sin47°cos13° + cos47°sin13°',
    answer: '√3/2 [sin47cos13 + cos47sin13 = sin(47 + 13) = sin60 = √3/2]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Evaluating Trigonometric Expressions)',
    question_year: '2017'
  },
  {
    question: 'Evaluate cos83°cos38° + sin83°sin38°',
    answer: '1/√2 [cos83cos38 + sin83sin38 = cos(83 – 38) = cos45 = 1/√2]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Evaluating Trigonometric Expressions)',
    question_year: '2017'
  },
  {
    question: 'Evaluate (tan15° + tan30°)/(1 – tan15°tan30°)',
    answer: '1 [(tan15 + tan30)/(1 – tan15tan30) = tan(15 + 30) = tan45 = 1]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Evaluating Trigonometric Expressions)',
    question_year: '2017'
  },
  {
    question:
      'Find the scalar product of the given vectors a and b and determine if the angle between the vectors is acute or obtuse. a = 3i + 5j, b = 5i – 3j',
    answer:
      'a.b = 0, the angle between a and b is a right angle, neither acute nor obtuse. [a.b = 3(5) – 5(3) = 15 – 15 = 0]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Vector Operations (Scalar Product and Angle Between Vectors)',
    question_year: '2017'
  },
  {
    question:
      'Find the scalar product of the given vectors a and b and determine if the angle between the vectors is acute or obtuse. a = 4i – 5j, and b = 2i + 6j',
    answer:
      'a.b = -22 < 0, angle between the vectors is obtuse. [a.b = 8 – 30 = -22 < 0, so angle is obtuse]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Vector Operations (Scalar Product and Angle Between Vectors)',
    question_year: '2017'
  },
  {
    question:
      'Find the scalar product of the given vectors a and b and determine if the angle between the vectors is acute or obtuse. a = 3i + 2j, b = 7i – 5j',
    answer: 'a.b = 11 [a.b = 21 – 10 = 11, so angle is acute]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Vector Operations (Scalar Product and Angle Between Vectors)',
    question_year: '2017'
  },
  {
    question:
      'Find the remainder R when the polynomial f(x) = 3x3 + 5x2 – 5x + 2 is divided by (x + 2).',
    answer:
      'R = 8 [R = f(-2) = 3(-8) + 5(4) - 5(-2) + 2 = -24 + 20 + 10 + 2 = 32 – 24 = 8]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Polynomial Division and Finding Remainders)',
    question_year: '2017'
  },
  {
    question:
      'Comment on the nature of the roots of the quadratic equation 3x2 – 10x + 11 = 0',
    answer:
      'No real roots  [b2 – 4ac = 100 – 3(44) = 100 – 132 = -32 < 0, so no real roots]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Nature of Roots of a Quadratic Equation)',
    question_year: '2017'
  },
  {
    question: 'Simplify logab × logba',
    answer: '1 [(logab)(1/logab) = 1]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Properties of Logarithms)',
    question_year: '2017'
  },
  {
    question: 'Reduce the given relation to linear form. y = ax^n',
    answer:
      'Y = nX + loga  where Y = logy, X = logx [logy = nlogx + loga, Let Y = logy, X = logx, then Y = nX + loga]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Manipulating equations)',
    question_year: '2017'
  },

  {
    question: 'Reduce the given relation to linear form. y = ab^x',
    answer:
      'Y = Xlogb + loga  where Y = logy, X = x [logy = xlogb + loga, let Y = logy, X = x, then Y = Xlogb + loga]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Manipulating equations)',
    question_year: '2017'
  },
  {
    question: 'Reduce the given relation to linear form. y = ax^2 + bx',
    answer:
      'Y = aX + b  where Y = y/x, X = x [y/x = ax + b, let Y = y/x, X = x, then Y = aX + b]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Quadratic equations)',
    question_year: '2017'
  },
  {
    question:
      'Find the cosine of the angle between the vectors a and b given: a = 2i – 2j, b = 3i + 2j',
    answer:
      '1/√(26) [ cosθ = (a.b)/|a||b| = (6 – 4)/√(8)√(13) = 1/(√2)√(13) = 1/√26 ]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Vectors and Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'Find the cosine of the angle between the vectors a and b given: a = i – 2j, b = 2i + 2j',
    answer: '-1/√(10) [cosθ = (a.b)/|a||b| = (2 – 4)/√5√8 = -1/√10]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Vectors and Trigonometry',
    question_year: '2017'
  },
  {
    question:
      'Find the cosine of the angle between the vectors a and b given: a = 3i + 4j, b = 5i + 12j',
    answer: '63/65 [cosθ = (a.b)/|a||b| = (15 + 48)/(5)(13) = 63/65]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Vectors and Trigonometry',
    question_year: '2017'
  },
  {
    question: 'Differentiate the expression with respect to x: y = (2x2 + x)10',
    answer: 'dy/dx = 10(4x + 1)(2x2 + x)9',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Calculus (Differentiation)',
    question_year: '2017'
  },
  {
    question: 'Differentiate the expression with respect to x: y = (x3 – 3x)15',
    answer: 'dy/dx = 15(3x2 – 3)(x3 – 3x)14',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Calculus (Differentiation)',
    question_year: '2017'
  },
  {
    question: 'Differentiate the expression with respect to x: y = (x4 – x3)21',
    answer: 'dy/dx = 21(4x3 – 3x2)(x4 – x3)20',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Calculus (Differentiation)',
    question_year: '2017'
  },
  {
    question: 'Multiply and simplify (3x + 2)(5x2 – x – 4)',
    answer: '15x3 + 7x2 – 14x – 8',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Multiplication)',
    question_year: '2017'
  },
  {
    question: 'Multiply and simplify (5x + 4)(x2 – 3x + 2)',
    answer: '5x3 – 11x2 - 2x + 8',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Multiplication)',
    question_year: '2017'
  },
  {
    question: 'Multiply and simplify (3x – 2)(3x2 – x + 4)',
    answer: '9x3 – 9x2 + 14x – 8',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Multiplication)',
    question_year: '2017'
  },
  {
    question:
      '6 people take 14 days to assemble 18 computers. How many days will it take 10 people to assemble 30 computers?',
    answer: '14 days [T = 14(30/18)(6/10) = 14(180/180) = 14]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Word Problem)',
    question_year: '2017'
  },
  {
    question:
      'y varies directly as x2 and inversely as z. If y = 12 when x = 2 and z = 7, find y when x = 3 and z = 9.',
    answer: 'y = 21 [y = kx2/z, 12 = k4/7, k = 21, y = 21(9)/9 = 21]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Variation)',
    question_year: '2017'
  },

  {
    question:
      'y varies directly as the cubic root of x and inversely as z^2. If y = 2 when x = 27 and z = 6, find y when x = 8 and z = 4.',
    answer: 'y = 3 [y = k/z^2, 2 = k(3)/36, k = 24, y = 24(2)/16 = 48/16 = 3]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Variation)',
    question_year: '2017'
  },
  {
    question:
      'Given the first three terms of a linear sequence, find the next three terms: 5x + 2, 7x, 9x – 2, . . .',
    answer:
      '11x – 4, 13x – 6, 15x – 8 [common difference d = 7x – (5x + 2) = 2x – 2, hence 11x – 4, 13x – 6, 15x – 8]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences and Patterns',
    question_year: '2017'
  },
  {
    question:
      'Given the first three terms of a linear sequence, find the next three terms: 2x + 5y, 5x + 2y, 8x – y',
    answer:
      '11x – 4y, 14x – 7y, 17x – 10y [common difference d = (8x – y) – (5x + 2y) = 3x – 3y, hence 11x – 4y, 14x – 7y, 17x – 10y]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences and Patterns',
    question_year: '2017'
  },
  {
    question:
      'Given the first three terms of a linear sequence, find the next three terms: √2, √8, √18, . . .',
    answer:
      '4√2, 5√2, 6√2, or √32, √50, √72, . . . [sequence: 2, 2√2, 3√2, . . . common difference d = √2, hence 4√2, 5√2, 6√2 or √32, √50, √72]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Sequences and Patterns',
    question_year: '2017'
  },
  {
    question: 'Simplify (x^4 – 1)/(x^2 – 1).',
    answer:
      'x^2 + 1 [(x^4 – 1)/(x^2 – 1) = (x^2 + 1)(x^2 – 1)/(x^2 – 1) = (x^2 + 1]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Rational Expressions)',
    question_year: '2017'
  },
  {
    question: 'If sinA = 3/5 and A is obtuse, find cosA.',
    answer: '- 4/5 [For A obtuse, cosA = -cos(180 – A) = - 4/5]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Trigonometry (Trigonometric identities)',
    question_year: '2017'
  },
  {
    question:
      'Find the area of the finite region enclosed by the lines x = 0, y = 0 and x + y = 4.',
    answer: '8 sq. units',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry (Area calculation)',
    question_year: '2017'
  },
  {
    question: 'Given that x = 2p and y = 4q, express 4xy as a power of 2.',
    answer: '2^(2 + p + 2q) [4xy = 2^2 * 2^p * 2^2q = 2^(2 + p + 2q)]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Expressions with variables)',
    question_year: '2017'
  },
  {
    question:
      'Given that x = 2p and y = 4q, find log2(x^2y^3) in terms of p and q.',
    answer:
      '2p + 6q [x^2y^3 = 2^2p * 2^2p * 4^3q = 2^(2p + 6q), hence log2(x^2y^3) = 2p + 6q]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Algebra (Expressions with variables)',
    question_year: '2017'
  },
  {
    question:
      'Given that x = 2p and y = 4q, find log4(x^2y^3) in terms of p and q.',
    answer:
      'p + 3q [x^2 = 2^p * 2^p * 4^3q = 4^(p + 3q), hence log4(x^2y^3) = p + 3q]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Logarithms and Simplification',
    question_year: '2017'
  },
  {
    question:
      'Find the number of axes of symmetry of the given figure: Equilateral triangle',
    answer: '3',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry: Equilateral Triangle',
    question_year: '2017'
  },
  {
    question:
      'Find the number of axes of symmetry of the given figure: Parallelogram',
    answer: '0',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry: Parallelogram',
    question_year: '2017'
  },
  {
    question: 'Find the number of axes of symmetry of the given figure: Square',
    answer: '4',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Geometry: Square',
    question_year: '2017'
  },

  {
    question:
      'Determine the coordinates of the center C and radius R of the circle with equation x^2 + y^2 + 6x + 8y = 0.',
    answer: 'C(-3, -4), R = 5 [(x + 3)^2 + (y + 4)^2 = 9 + 16 = 25]',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Circle Equation',
    question_year: '2017'
  },
  {
    question:
      'Find the coordinates of the point A(2, 5) after reflection in the line y = 7.',
    answer: '(2, 9)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Reflection in a Line',
    question_year: '2017'
  },
  {
    question: 'Find the range of the function y = 5 – 7sinx.',
    answer: '{y : -2 ≤ y ≤ 12 }',
    difficulty_level: 'Quarter finals',
    subject_name: 'Maths',
    topic: 'Function Range',
    question_year: '2017'
  },
  {
    question: 'A set S has 6 elements. Find the number of all subsets of S.',
    answer: '64 [2^6 = 64]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Set Theory',
    question_year: '2017'
  },
  {
    question:
      'A set S has 6 elements. Find the number of all proper subsets of S.',
    answer: '63 [2^6 – 1 = 64 – 1 = 63]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Set Theory',
    question_year: '2017'
  },
  {
    question:
      'A set S has 6 elements. Find the number of all proper non-empty subsets of S.',
    answer: '62 [2^6 – 1 - 1 = 64 – 2 = 62]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Set Theory',
    question_year: '2017'
  },
  {
    question:
      'A particle moves on a straight line such that its displacement from an initial point O at time t seconds is given by s(t) = (20t + 5t^2) meters. Find the speed at time t seconds.',
    answer: '20 + 10t m/s [v = ds/dt = 20 + 10t m/s]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Kinematics: Speed',
    question_year: '2017'
  },
  {
    question:
      'A particle moves on a straight line such that its displacement from an initial point O at time t seconds is given by s(t) = (20t + 5t^2) meters. Find the acceleration at time t seconds.',
    answer: '10 m/s^2 [a = dv/dt = 10 m/s^2]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Kinematics: Acceleration',
    question_year: '2017'
  },
  {
    question:
      'A particle moves on a straight line such that its displacement from an initial point O at time t seconds is given by s(t) = (20t + 5t^2) meters. Find the displacement from O after 5 seconds.',
    answer: '225 m [s(5) - s(0) = 20(5) + 5(25) - 0 = 100 + 125 = 225 m]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Kinematics: Displacement',
    question_year: '2017'
  },
  {
    question: 'A and B are events in a sample space S.',
    answer: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Probability: Union of Independent Events',
    question_year: '2017'
  },
  {
    question:
      'Find P(AUB) given that P(A) = 0.6, P(B) = 0.8, and A and B are independent.',
    answer: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Probability: Disjoint Events',
    question_year: '2017'
  },
  {
    question:
      'Find P(A∩B) given P(A) = 0.4 and P(B) = 0.5, and A and B are disjoint.',
    answer: '0 [since A and B are disjoint]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Probability: Given Probabilities',
    question_year: '2017'
  },
  {
    question: 'Find P(A) given P(B) = 0.5, P(AUB) = 0.8, and P(A∩B) = 0.4.',
    answer: '0.7 [P(A) = P(AUB) + P(A∩B) – P(B) = 0.8 + 0.4 – 0.5 = 0.7]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Rationalizing Denominators',
    question_year: '2017'
  },

  {
    question: 'Rationalize the denominator of √3/(√5 + √2).',
    answer: '(√15 - √6)/3',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Triangle Type',
    question_year: '2017'
  },
  {
    question:
      'A triangle has sides of lengths 6 cm, 7 cm, and 9 cm. Determine if it is acute or obtuse.',
    answer:
      'The triangle is an acute triangle. [9^2 = 81, 6^2 + 7^2 = 36 + 49 = 85, hence 9^2 < 6^2 + 7^2, hence the triangle is an acute triangle]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra: Consecutive Integers',
    question_year: '2017'
  },
  {
    question:
      'Find three consecutive integers whose sum is 12 less than 4 times the first integer.',
    answer:
      '15, 16, 17 [n – 1, n, n + 1, 3n = 4(n – 1) – 12, 0 = n – 12 – 4, n = 16, numbers are 15, 16, 17]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Function Domain',
    question_year: '2017'
  },
  {
    question: 'Find the domain of the given function f(x) = 3/√(x – 5).',
    answer: '{x : x > 5} [x – 5 > 0, x > 5]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Function Domain',
    question_year: '2017'
  },
  {
    question: 'Find the domain of the given function f(x) = √(x^2 – 6x).',
    answer:
      '{ x : x ≥ 6, or x ≤ 0 } [x^2 – 6x ≥ 0, (x – 6)x ≥ 0, x ≥ 6, or x ≤ 0]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Function Domain',
    question_year: '2017'
  },
  {
    question: 'Find the domain of the given function f(x) = √(x – 2)/x.',
    answer: '{x : x ≥ 2} [x ≥ 2 and x ≠ 0 implies x ≥ 2]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Intercept of Conic Sections',
    question_year: '2017'
  },
  {
    question:
      'Find the x- and y-intercepts of the curve with equation x^2/16 + y^2/9 = 1.',
    answer:
      'x = ±4, y = ±3 [for x-intercept y = 0, x^2/16 = 1, hence x = ±4, for y-intercept x = 0, y^2/9 = 1, y = ±3]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Intercept of Conic Sections',
    question_year: '2017'
  },
  {
    question:
      'Find the x- and y-intercepts of the curve with equation 4x^2 + y^2 = 100.',
    answer:
      'x = ±5, y = ±10 [For x-intercept, y = 0 and 4x^2 = 100, x = ±5, for y-intercept, x = 0 and y^2 = 100, y = ±10]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Intercept of Conic Sections',
    question_year: '2017'
  },
  {
    question:
      'Find the x- and y-intercepts of the curve with equation x^2 – y^2 = 9.',
    answer:
      'x = ±3, no y-intercept [For x-intercept, y = 0, x^2 = 9, x = ±3, for y-intercept, x = 0, and y^2 = -9, hence no solution]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Area of a Triangle',
    question_year: '2017'
  },
  {
    question:
      'Find the area of the triangle with sides 10 cm and 7 cm and the included angle 45°.',
    answer: '35/√2 cm² or (35√2)/2 cm²',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra: Trinomial Factoring',
    question_year: '2017'
  },
  {
    question: 'Factorize the trinomial 5x^2 - 4xy – 12y^2.',
    answer:
      '(5x + 6y)(x – 2y) [5x^2 – 10xy + 6xy – 12y^2 = 5x(x – y) + 6y(x – 2y) = (5x + 6y)(x – 2y)]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2017'
  },
  {
    question: 'Find the solution set of the inequality |5x – 15| < 30.',
    answer: '{x : -3 < x < 9} [-30 < 5x – 15 < 30, -15 < 5x < 45, -3 < x < 9]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Polynomial Division',
    question_year: '2017'
  },
  {
    question:
      "Use division to write the rational function as a 'quotient + remainder/divisor'. (2x + 1)/(x – 2).",
    answer:
      '2 + 5/(x – 2) [(2x + 1)/(x – 2) = [2(x – 2) + 5]/(x – 2) = 2 + 5/(x – 2)]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Polynomial Division',
    question_year: '2017'
  },

  {
    question:
      "Use division to write the rational function as a 'quotient + remainder/divisor'. (x + 1)/(x – 1).",
    answer:
      '1 + 2/(x – 1) [(x + 1)/(x – 1) = [(x – 1) + 2]/(x – 1) = 1 + 2/(x – 1)]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Polynomial Division',
    question_year: '2017'
  },
  {
    question:
      "Use division to write the rational function as a 'quotient + remainder/divisor'. (6x + 5)/(2x + 1).",
    answer:
      '3 + 2/(2x + 1) [(6x + 5)/(2x + 1) = [3(2x + 1) + 2]/(2x + 1) = 3 + 2/(2x + 1)]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Interior Angle of a Polygon',
    question_year: '2017'
  },
  {
    question:
      'Find the measure of the interior angle of a regular polygon with 24 sides.',
    answer:
      'Interior angle = 165° [(24 – 2)180 = 24i, 24i = 22(180), i = 11(15) = 165]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Number of Sides in a Polygon',
    question_year: '2017'
  },
  {
    question:
      'Find the number n of sides of a regular polygon with an interior angle of measure 170°.',
    answer: 'n = 36 [exterior angle = 10 = 360/n, 10n = 360, n = 36]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Sum of Interior Angles in a Polygon',
    question_year: '2017'
  },
  {
    question:
      'Find the sum of the degree measures of the interior angles of a polygon with 52 sides.',
    answer: '9000° [(52 – 2)180 = 50(180) = 9000]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Equations with Logarithms',
    question_year: '2017'
  },
  {
    question:
      'Solve the equation for x, log3(x + 2) + log3(x + 10) = 2log3(x + 4).',
    answer:
      '-1 [(x + 2)(x + 10) = (x + 4)2, x^2 + 12x + 20 = x^2 + 8x + 16, 4x = -4, x = -1]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Equations with Logarithms',
    question_year: '2017'
  },
  {
    question: 'Solve the equation for x, 2log3(x – 2) – log3(x – 4) = 2.',
    answer:
      'x = 5, 8 [(x – 2)2 = 9(x – 4), x^2 – 4x + 4 = 9x – 36, x^2 – 13x + 40 = 0, (x - 5)(x – 8) = 0, x = 5, 8]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Equations with Logarithms',
    question_year: '2017'
  },
  {
    question: 'Solve the equation for x, log5(x^2 + 2x + 5) – log5(x – 5) = 2.',
    answer:
      'x = 10, 13 [(x^2 + 2x + 5) = 25(x – 5), x^2 – 23x + 130 = 0, (x – 10)(x – 13) = 0, x = 10, 13]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra: Two-Digit Numbers',
    question_year: '2017'
  },
  {
    question:
      'The sum of the digits of a 2-digit decimal number is 8. If the digits are reversed, the number is 18 more than the original number. Find the 2-digit number.',
    answer:
      '35 [ab, a + b = 8, ba = ab + 18, 10b + a = 10a + b + 18, 9(b – a) = 18, b – a = 2, 2b = 10, b = 5, a = 3]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra: Simplification',
    question_year: '2017'
  },
  {
    question: 'Simplify √189.',
    answer: '3√21 [189 = 9(21), √189 = √9(√21) = 3√21]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry: Trigonometric Expressions',
    question_year: '2017'
  },
  {
    question: 'Evaluate and simplify (tan30° + cos60°)/sin30°.',
    answer:
      '(3 + 2√3)/3 [(1/√3 + ½)/(1/2) = 2(1/√3 + ½) = 2/√3 + 1 = (2√3)/3 + 1 = (2√3 + 3)/3]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry: Trigonometric Expressions',
    question_year: '2017'
  },
  {
    question: 'Given f(x) = 3x + 1 and g(x) = x^2 – 2x – 3, evaluate f(g(2)).',
    answer: '-8 [g(2) = 4 – 4 – 3 = -3, f(g(2)) = f(-3) = -9 + 1 = -8]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry: Trigonometric Expressions',
    question_year: '2017'
  },
  {
    question: 'Given f(x) = 3x + 1 and g(x) = x^2 – 2x – 3, evaluate g(f(2)).',
    answer:
      '32 [f (2) = (6 + 1) = 7, g(f(2)) = g(7) = 49 - 14 – 3 = 49 – 17 = 32]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Types of Lines in Coordinate Geometry',
    question_year: '2017'
  },

  {
    question: 'Given f(x) = 3x + 1 and g(x) = x^2 – 2x – 3, evaluate f(g(-2)).',
    answer:
      '16 [g(-2) = 4 + 4 – 3 = 5, f(g(-2)) = f(5) = 3(5) + 1 = 15 + 1 = 16]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Function Characteristics',
    question_year: '2017'
  },
  {
    question:
      'Evaluate the trigonometric expression and simplify: (sin56°cos11° – cos56°sin11°)/(cos23°cos83° + sin23°sin83°).',
    answer:
      '√2 [sin(56 – 11)/cos(83 – 23) = sin45/cos60 = (1/√2)/(1/2) = 2/√2 = √2]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry: Trigonometric Expressions',
    question_year: '2017'
  },
  {
    question:
      'Evaluate the trigonometric expression and simplify: (sin17°cos13° + cos17°sin13°)/(cos25°cos35° – sin25°sin35°).',
    answer: '1 [sin(17 + 13)/cos(25 + 35) = sin30/cos60 = (1/2)/(1/2) = 1]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry: Trigonometric Expressions',
    question_year: '2017'
  },
  {
    question:
      'Evaluate the trigonometric expression and simplify: (1 – tan11°tan19°)/(tan11° + tan19°).',
    answer: 'tan60° = √3 [1/tan(11 + 19) = 1/tan30 = 1/(1/√3) = √3]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry: Trigonometric Expressions',
    question_year: '2017'
  },
  {
    question:
      'Fill in the blank with A) Parallel, B) Perpendicular, C) Rational, D) One to one. Two lines with slopes m1 and m2 such that the product m1m2 = -1 are ____________________.',
    answer: 'PERPENDICULAR',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Lines and Slopes',
    question_year: '2017'
  },
  {
    question:
      'Fill in the blank with A) Parallel, B) Perpendicular, C) Rational, D) One to one. A function such that different inputs give different outputs is ____________________.',
    answer: 'ONE TO ONE',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Types of Functions',
    question_year: '2017'
  },
  {
    question:
      'Fill in the blank with A) Parallel, B) Perpendicular, C) Rational, D) One to one. A function that is a quotient of two polynomial functions is a ______________ function.',
    answer: 'RATIONAL',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Types of Functions',
    question_year: '2017'
  },
  {
    question:
      'Fill in the blank with A) Parallel, B) Perpendicular, C) Rational, D) One to one. If the lengths of all three sides of a triangle are given, what rule will you use to solve the triangle?',
    answer: 'COSINE RULE',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Types of Functions',
    question_year: '2017'
  },
  {
    question:
      'For what values of k will the equation 2x^2 + (k – 2)x + 8 = 0 have exactly one solution?',
    answer:
      'k = 10 or k = -6 [(k – 2)^2 – 4(2)8 = 0, (k – 2)^2 = 64, k – 2 = ± 8, k = 10, -6]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Geometry: Triangle Solving Rules',
    question_year: '2017'
  },
  {
    question:
      'Find the values of x if 1/3, x – 1, 4x are consecutive terms of an exponential sequence.',
    answer:
      'x = 3 or x = 1/3 [(x – 1)^2 = 4x/3, 3(x^2 – 2x + 1) = 4x, 3x^2 – 10x + 3 = 0, 3x^2 – 9x – x + 3 = (3x – 1)(x – 3) = 0]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Quadratic Equations',
    question_year: '2017'
  },
  {
    question:
      'If denotes the least positive integer greater than (m/n + n/m), find 2*7',
    answer: '4',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Exponential Sequences',
    question_year: '2017'
  },
  {
    question:
      'If denotes the least positive integer greater than (m/n + n/m), find 3*6',
    answer: '3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Number Rounding',
    question_year: '2018'
  },
  {
    question:
      'If denotes the least positive integer greater than (m/n + n/m), find 5*3',
    answer: '3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Number Rounding',
    question_year: '2018'
  },

  {
    question: 'Given that i^2 = -1, evaluate i^5.',
    answer: 'i',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Number Rounding',
    question_year: '2018'
  },
  {
    question: 'Given that i^2 = -1, evaluate i^10.',
    answer: '-1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Series Summation',
    question_year: '2018'
  },
  {
    question: 'Given that i^2 = -1, evaluate i^7.',
    answer: '-i',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Series Summation',
    question_year: '2018'
  },
  {
    question:
      'Find the sum of the first n terms of the given series for the given value of n: 1 + 3 + 5 + 7 + . . . for n = 20',
    answer: '400',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Series Summation',
    question_year: '2018'
  },
  {
    question:
      'Find the sum of the first n terms of the given series for the given value of n: 15 + 10 + 5 + 0 – 5 – 10 - . . . for n = 20',
    answer: '-650',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Locus of a Point',
    question_year: '2018'
  },
  {
    question:
      'Find the sum of the first n terms of the given series for the given value of n: 6 + 6.5 + 7 + 7.5 + 8 + . . . for n = 21',
    answer: '231',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Locus of a Point',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the locus of the point P(x, y) which is equidistant from the points A and B given A(1, 2) and B(2, 1).',
    answer: 'y = x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Locus of a Point',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the locus of the point P(x, y) which is equidistant from the points A and B given A(0, -2) and B(2, 0).',
    answer: 'y = -x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inverse Functions',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the locus of the point P(x, y) which is equidistant from the points A and B given A(1, 1) and B(2, 2).',
    answer: 'y = -x + 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inverse Functions',
    question_year: '2018'
  },
  {
    question: 'If f(x) = 3x + 7, evaluate f-1(-2) [f inverse of -2].',
    answer: '-3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inverse Functions',
    question_year: '2018'
  },
  {
    question: 'If f(x) = 3x + 7, evaluate f-1(10).',
    answer: '1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics: Word Formation',
    question_year: '2018'
  },
  {
    question: 'If f(x) = 3x + 7, evaluate f-1(4).',
    answer: '-1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics: Word Formation',
    question_year: '2018'
  },
  {
    question:
      'How many 5 letter words (not necessarily meaningful) can be formed from the six letters A, B, C, D, E, F if no letter is to be repeated.',
    answer: '720',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics: Word Formation',
    question_year: '2018'
  },

  {
    question:
      'How many 5 letter words (not necessarily meaningful) can be formed from the six letters A, B, C, D, E, F if any letter may be repeated (you may leave the answer as an exponential)?',
    answer: '6^5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Simultaneous Equations',
    question_year: '2018'
  },
  {
    question:
      'How many 5 letter words (not necessarily meaningful) can be formed from the six letters A, B, C, D, E, F if no repetition but beginning with A and ending with E.',
    answer: '1 x 4 x 3 x 2 x 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Simultaneous Equations',
    question_year: '2018'
  },
  {
    question: 'Solve the simultaneous equations 2x + y = 8, x – 2y = -1.',
    answer: 'x = 3, y = 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Simultaneous Equations',
    question_year: '2018'
  },
  {
    question: 'Solve the simultaneous equations 3x – y = 6, 2x + y = 4.',
    answer: 'x = 2, y = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Conic Sections: Circle',
    question_year: '2018'
  },
  {
    question: 'Solve the simultaneous equations 5x – 2y = 7, 2x + y = 1.',
    answer: 'x = 1, y = -1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Conic Sections: Circle',
    question_year: '2018'
  },
  {
    question:
      'Determine if the equation represents a circle: x^2 + y^2 - 4x + 6y + 20 = 0',
    answer: 'Not a circle',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Conic Sections: Circle',
    question_year: '2018'
  },
  {
    question:
      'Determine if the equation represents a circle: x^2 + y^2 – 6x + 2y + 10 = 0',
    answer: 'Not a circle',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Equations',
    question_year: '2018'
  },
  {
    question:
      'Determine if the equation represents a circle: x^2 + y^2 + 8x + 6y + 26 = 0',
    answer: 'Not a circle',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Equations',
    question_year: '2018'
  },
  {
    question:
      'Find the values of k such that the sum of the roots of the equation x^2 – (k^2 – 3k)x + 12 = 0 is 28.',
    answer: 'k = 7, -4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Equations',
    question_year: '2018'
  },
  {
    question:
      'Find the values of k such that the product of the roots of the equation x^2 + 2x + k^2 – 4k = 0 is 12.',
    answer: 'k = 6, -2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2018'
  },
  {
    question:
      'Find the values of k such that the sum of the roots of the equation x^2 + (k^2 – 5k)x + 7 = 0 is 6.',
    answer: 'k = 2, 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2018'
  },
  {
    question:
      'Find x given that the vectors a = 3i + xj and b = xi + 6j are perpendicular.',
    answer: 'x = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2018'
  },
  {
    question:
      'Find x given that the vectors a = 5i – 3xj and b = 5i + 3xj are perpendicular.',
    answer: 'x = ±5/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors: Perpendicular Vectors',
    question_year: '2018'
  },

  {
    question:
      'Find x given that the vectors a = 4i + 3j and b = 5i + xj are parallel.',
    answer: 'x = 15/4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors: Parallel Vectors',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the straight line with the given x- and y-intercepts x = -2, y = 2.',
    answer: 'y = x + 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Line Equations',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the straight line with the given x- and y-intercepts x = 3, y = 3.',
    answer: 'x + y = 3 or y = -x + 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Line Equations',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the straight line with the given x- and y-intercepts x = 3, y = -2.',
    answer: '2x – 3y = 6 or y = 2x/3 - 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Line Equations',
    question_year: '2018'
  },
  {
    question:
      'The line with equation x + 3y = 6 cuts the x-axis at A and the y-axis at B. Find the equation of the median from the origin O to the segment AB.',
    answer: 'y = x/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Median of a Line Segment',
    question_year: '2018'
  },
  {
    question:
      'The line with equation x + 3y = 6 cuts the x-axis at A and the y-axis at B. Find the equation of the median from A to OB.',
    answer: 'y = -(1/6)(x – 6) or y = -(1/6)x + 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Median of a Line Segment',
    question_year: '2018'
  },
  {
    question:
      'The line with equation x + 3y = 6 cuts the x-axis at A and the y-axis at B. Find the equation of the median from B to OA.',
    answer: 'y = -2x/3 + 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Median of a Line Segment',
    question_year: '2018'
  },
  {
    question: 'Find the solution set of the inequality |2x – 3 | < 1.',
    answer: '1 < x < 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2018'
  },
  {
    question: 'Find the solution set of the inequality |3x – 5 | > 4.',
    answer: 'x > 3 or x < 1/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2018'
  },
  {
    question: 'Find the solution set of the inequality | 5x – 9| < 6.',
    answer: '3/5 < x < 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2018'
  },
  {
    question:
      'The sides of a triangle lie on three lines. Find the coordinates of the vertices given that the lines are y = x + 1, y = 1 – x, and y = 0.',
    answer: '(-1, 0), (1, 0), (0, 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Triangle Coordinates',
    question_year: '2018'
  },
  {
    question:
      'The sides of a triangle lie on three lines. Find the coordinates of the vertices given that the lines are y = 2x – 4, x = 0, and y = 0.',
    answer: '(0, 0), (0, -4), (2, 0)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Triangle Coordinates',
    question_year: '2018'
  },
  {
    question:
      'The sides of a triangle lie on three lines. Find the coordinates of the vertices given that the lines are y = 4, x = 4, and x + y = 4.',
    answer: '(4, 4), (4, 0), (0, 4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Triangle Coordinates',
    question_year: '2018'
  },

  {
    question: 'Solve the equation for x: x^4 - 13x^2 + 36 = 0',
    answer: 'x = ±3, ±2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Solving Equations',
    question_year: '2018'
  },
  {
    question: 'Solve the equation for x: x^4 - 11x^2 - 80 = 0',
    answer: 'x = ±4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Solving Equations',
    question_year: '2018'
  },
  {
    question: 'Solve the equation for x: x^4 + 21x^2 - 100 = 0',
    answer: 'x = ±2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Solving Equations',
    question_year: '2018'
  },
  {
    question:
      "Kofi is 10 years older than Amma and in four years' time, he will be twice as old as her. Find their current ages.",
    answer:
      'KOFI is 16 years, AMMA is 6 years. [x = y + 10, (x + 4) = 2(y + 4), y + 14 = 2y + 8, y = 6, x = 16]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Ages',
    question_year: '2018'
  },
  {
    question:
      'Two sides of a triangle are congruent and the third side is 10 cm less than twice the length of the congruent sides. If the perimeter is 46 cm, find the length of each side.',
    answer:
      '14 cm, 14 cm, 18 cm [2a + b = 46, b = 2a – 10, 2a + 2a – 10 = 46, 4a = 56, a = 14, b = 18]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Triangle Sides',
    question_year: '2018'
  },
  {
    question:
      'The sum of three consecutive even integers is 36 less than five times the second number. Find the three numbers.',
    answer:
      '16, 18, 20 [n – 2 + n + n + 2 = 5n – 36, 2n = 36, n = 18. Numbers are 16, 18, 20]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra: Consecutive Integers',
    question_year: '2018'
  },
  {
    question:
      'Use parentheses/brackets such that the sum is correct: 12 – 42 + 15 – 32 = 208',
    answer:
      '(12 – 4)^2 + (15 – 3)^2 = 208 [(12 – 4)^2 + (15 – 3)^2 = 8^2 + 12^2 = 64 + 144 = 208]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Operations',
    question_year: '2018'
  },
  {
    question:
      'Use parentheses/brackets such that the sum is correct: 12 – 42 + 15 – 32 = 2',
    answer:
      '(12 – 42) + (15 – 32) = 2 [(12 – 42) + (15 – 32) = (12 – 16) + (15 – 9) = -4 + 6 = 2]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Operations',
    question_year: '2018'
  },
  {
    question:
      'Use parentheses/brackets such that the sum is correct: 12 – 42 + 15 – 32 = 70',
    answer: '(12 – 4)^2 + (15 – 32) [(12 – 4)^2 + (15 – 32) = 64 + 6 = 70]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Operations',
    question_year: '2018'
  },
  {
    question:
      'Find the amplitude A and the period T (in radians) of the trigonometric function: y = 5sin(2x – π)',
    answer: 'A = 5, T = π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry: Amplitude and Period',
    question_year: '2018'
  },
  {
    question:
      'Find the amplitude A and the period T (in radians) of the trigonometric function: y = -3cos(x/2 + π/2)',
    answer: 'A = 3, T = 4π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry: Amplitude and Period',
    question_year: '2018'
  },
  {
    question:
      'Find the amplitude A and the period T (in radians) of the trigonometric function: y = 8sin(x + π)',
    answer: 'A = 8, T = 2π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry: Amplitude and Period',
    question_year: '2018'
  },
  {
    question: 'Find the next term in the sequence: 5, 10, 16, 23, 31, . . .',
    answer:
      '40 [differences of terms are 5, 6, 7, 8, . . . an AP, hence 31 + 9 = 40]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2018'
  },

  {
    question: 'Find the next term in the sequence: 7, 11, 20, 36, 61, . . .',
    answer:
      '97 [differences of terms are 4, 9, 16, 25, . . . sequence of squares, hence 61 + 36 = 97]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2018'
  },
  {
    question: 'Find the next term in the sequence: 8, 10, 14, 22, 38, . . .',
    answer:
      '70 [difference of terms are 2, 4, 8, 16, . . . a GP, hence 38 + 32 = 70]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences',
    question_year: '2018'
  },
  {
    question:
      'If the line of centers of two circles measures 40 cm, what is the relation between the two circles if their radii are 30cm and 10cm?',
    answer: 'Circles are tangential externally.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Circles',
    question_year: '2018'
  },
  {
    question:
      'If the line of centers of two circles measures 40 cm, what is the relation between the two circles if their radii are 55cm and 15cm?',
    answer: 'Circles are tangential internally.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Circles',
    question_year: '2018'
  },
  {
    question:
      'If the line of centers of two circles measures 40 cm, what is the relation between the two circles if their radii are 20cm and 15cm?',
    answer: 'Circles are 5cm apart.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Circles',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the circle with center C and passing through the point P given C(-2, 3) and P(2, 0)',
    answer:
      '(x + 2)^2 + (y - 3)^2 = 25 [(x + 2)^2 + (y - 3)^2 = (2 + 2)^2 + (0 - 3)^2 = 16 + 9 = 25]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equations of Circles',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the circle with center C and passing through the point P given C(-5, -3) and P(7, 2)',
    answer:
      '(x + 5)^2 + (y + 3)^2 = 169 [(x + 5)^2 + (y + 3)^2 = (12)^2 + (5)^2 = 144 + 25 = 169]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equations of Circles',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the circle with center C and passing through the point P given C(9, -9) and P(-6, -1)',
    answer:
      '(x - 9)^2 + (y + 9)^2 = 289 [(x - 9)^2 + (y + 9)^2 = (15)^2 + (8)^2 = 225 + 64 = 289]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equations of Circles',
    question_year: '2018'
  },
  {
    question:
      'Find the derivative of the function with the given equation: y = (3 - 2x^2 + x^4)/x^2',
    answer: 'dy/dx = -6/x^3 + 2x [y = 3/x^2 - 2 + x^2, dy/dx = -6/x^3 + 2x]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus: Derivatives',
    question_year: '2018'
  },
  {
    question:
      'Find the derivative of the function with the given equation: y = (x^3 - 3x^2 + 4)/x',
    answer:
      'dy/dx = 2x - 3 - 4/x^2 [f(x) = x^2 - 3x + 4/x, dy/dx = 2x - 3 - 4/x^2]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus: Derivatives',
    question_year: '2018'
  },
  {
    question:
      'Find the derivative of the function with the given equation: y = (x^2 + 5x + 6)/x^3',
    answer:
      'dy/dx = -1/x^2 - 10/x^3 - 18/x^4 [y = 1/x + 5/x^2 + 6/x^3, dy/dx = -1/x^2 - 10/x^3 - 18/x^4]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus: Derivatives',
    question_year: '2018'
  },
  {
    question:
      'Find the value of x if the first three terms of a Geometric Progression are x, (x + 1), (x + 4)',
    answer:
      'x = ½ [x(x + 4) = (x + 1)^2, x^2 + 4x = x^2 + 2x + 1, 4x = 2x + 1, 2x = 1, x = ½]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences: Geometric Progression',
    question_year: '2018'
  },
  {
    question:
      'Find the value of x if the first three terms of a Geometric Progression are (x + 1), (x + 3), (x + 4)',
    answer:
      'x = -5 [(x + 3)^2 = (x + 1)(x + 4), x^2 + 6x + 9 = x^2 + 5x + 4, x = 4 - 9 = -5]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences: Geometric Progression',
    question_year: '2018'
  },

  {
    question:
      'Find the value of x if the first three terms of a Geometric Progression are (x - 1), x, (x + 3)',
    answer:
      'x = 3/2 [x^2 = (x - 1)(x + 3) = x^2 + 2x - 3, 2x - 3 = 0, x = 3/2]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences: Geometric Progression',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the straight line inclined at an angle of 45° to the positive direction of the x-axis and passing through the point A(2, 3)',
    answer: 'y = x + 1 [m = tan45° = 1, hence y - 3 = 1(x - 2), y = x + 1]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equation of a Line',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the straight line inclined at an angle of 135° to the positive direction of the x-axis and passing through the point B(-4, 2)',
    answer: 'y = -x - 2 [m = tan135° = -1, y - 2 = -1(x + 4), y = -x - 2]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equation of a Line',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the straight line inclined at an angle of 60° to the positive direction of the x-axis and passing through the point C(√3, -1)',
    answer:
      'y = (√3)x - 4 [m = tan60° = √3, (y + 1) = √3(x - √3) = (√3)x - 3, y = (√3)x - 4]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equation of a Line',
    question_year: '2018'
  },
  {
    question:
      'A fair die is rolled once. Find the probability that the number appearing is 5 given that the number rolled is an even number',
    answer: '0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability: Conditional Probability',
    question_year: '2018'
  },
  {
    question:
      'A fair die is rolled once. Find the probability that the number appearing is 3 given that the number appearing is an odd number',
    answer: '1/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability: Conditional Probability',
    question_year: '2018'
  },
  {
    question:
      'A fair die is rolled once. Find the probability that the number appearing is an odd number given that the number appearing is 1',
    answer: '1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability: Conditional Probability',
    question_year: '2018'
  },
  {
    question:
      'Find the average rate of change of the function f(x) given f(x) = x^2 - 3x + 5 as x changes from 2 to 3',
    answer: '2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus: Average Rate of Change',
    question_year: '2018'
  },
  {
    question:
      'Find the average rate of change of the function f(x) given f(x) = x^3 - 2x + 9 as x changes from 0 to 2',
    answer: '2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus: Average Rate of Change',
    question_year: '2018'
  },
  {
    question:
      'Find the average rate of change of the function f(x) given f(x) = 2x^3 - 3x^2 + 2 as x changes from x = 1 to x = 2',
    answer: '5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus: Average Rate of Change',
    question_year: '2018'
  },
  {
    question:
      'In a right angle triangle find the length of the median to the hypotenuse whose length is 20 cm',
    answer: '10 cm [median is half the hypotenuse]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Right Triangle Properties',
    question_year: '2018'
  },
  {
    question:
      'In a right angle triangle find the length of the hypotenuse if the median to the hypotenuse has length 15 cm',
    answer: '30 cm',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Right Triangle Properties',
    question_year: '2018'
  },
  {
    question:
      'In a right angle triangle find the length of the median to the hypotenuse if the legs measure 6 cm and 8 cm',
    answer:
      '5 cm [length of the hypotenuse is 10 cm hence median is 5 cm long]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Right Triangle Properties',
    question_year: '2018'
  },

  {
    question:
      'Solve the logarithmic equation for x: log(x) + log(x - 4) = log(12)',
    answer:
      'x(x - 4) = 12, x^2 - 4x - 12 = 0, (x - 6)(x + 2) = 0, x = 6 since log(x) is defined for x > 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithmic Equations',
    question_year: '2018'
  },
  {
    question: 'Solve the logarithmic equation for x: log(2x) + log(5x) = 160',
    answer: '10x^2 = 160, x^2 = 16, x = 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithmic Equations',
    question_year: '2018'
  },
  {
    question:
      'Solve the logarithmic equation for x: log(x^2) + log(x^3) = log(81x)',
    answer: 'x^5 = 81x, x^4 = 81, x = 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithmic Equations',
    question_year: '2018'
  },
  {
    question:
      'Find the length L and the width W of a rectangle given that the width W is 3cm less than the length L, and the rectangle has area 70cm^2',
    answer:
      'L = 10cm and W = 7cm [L(L - 3) = 70, L^2 - 3L - 70 = 0, (L - 10)(L + 7) = 0, L = 10cm and W = 10 - 3 = 7cm]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the length L and the width W of a rectangle given that the length L is 4 cm less than twice the width W and the rectangle has area 160cm^2',
    answer:
      'L = 16cm and W = 10cm [W(2W - 4) = 160, 2W^2 - 4W - 160 = 0, W^2 - 2W - 80 = 0, (W + 8)(W - 10) = 0, W = 10cm and L = 16cm]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the length L and the width W of a rectangle given that the length L is 7cm more than the width W and the area is 60cm^2',
    answer:
      'L = 12cm and W = 5cm [L(L - 7) = 60, L^2 - 7L - 60 = 0, (L - 12)(L + 5) = 0, L = 12cm, W = 12 - 7 = 5cm]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'A committee of 6 is to be formed from 7 students and 3 teachers. Find the number of ways of selecting the committee if anybody may be selected',
    answer: '210',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: '2018'
  },
  {
    question:
      'A committee of 6 is to be formed from 7 students and 3 teachers. Find the number of ways of selecting the committee if there are to be 3 students and 3 teachers',
    answer: '35',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: '2018'
  },
  {
    question:
      'A committee of 6 is to be formed from 7 students and 3 teachers. Find the number of ways of selecting the committee if there are to be 4 students and 2 teachers',
    answer: '105',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: '2018'
  },
  {
    question:
      'State the converse of the given statement and state whether the converse is true or false: A pentagon is a polygon',
    answer: 'A polygon is a pentagon, FALSE (2 + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logic',
    question_year: '2018'
  },
  {
    question:
      'State the converse of the given statement and state whether the converse is true or false: An obtuse angle has measure greater than that of a right angle',
    answer:
      'An angle with measure greater than a right angle is an obtuse angle, FALSE (2 + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logic',
    question_year: '2018'
  },
  {
    question:
      'State the converse of the given statement and state whether the converse is true or false: An equilateral quadrilateral is a quadrilateral with all sides congruent',
    answer:
      'A quadrilateral with all sides congruent is an equilateral quadrilateral, TRUE (2 + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logic',
    question_year: '2018'
  },
  {
    question:
      'Find the center C and the radius R of the circle with the given equation: x^2 - 6x + y^2 - 4y - 12 = 0',
    answer:
      'C(3, 2), R = 5 [(x - 3)^2 + (y - 2)^2 = 12 + 9 + 4 = 25, C(3, 2) and R = 5]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equations of Circles',
    question_year: '2018'
  },

  {
    question:
      'Find the center C and the radius R of the circle with the given equation: x^2 + 8x + y^2 + 4y - 29 = 0',
    answer:
      'C(-4, -2), R = 7 [(x + 4)^2 + (y + 2)^2 = 29 + 16 + 4 = 49, C(-4, -2), R = 7]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equations of Circles',
    question_year: '2018'
  },
  {
    question:
      'Find the center C and the radius R of the circle with the given equation: x^2 + 10x + y^2 - 12y - 3 = 0',
    answer:
      'C(-5, 6), R = 8 [(x + 5)^2 + (y - 6)^2 = 25 + 36 + 3 = 64, C(-5, 6), R = 8]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry: Equations of Circles',
    question_year: '2018'
  },
  {
    question: 'Evaluate 375^2 - 125^2',
    answer: '125,000',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Operations',
    question_year: '2018'
  },
  {
    question: 'Evaluate 775^2 - 225^2',
    answer: '550,000',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Operations',
    question_year: '2018'
  },
  {
    question: 'Evaluate 820^2 - 180^2',
    answer: '640,000',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic Operations',
    question_year: '2018'
  },
  {
    question:
      'Find the value of x if consecutive terms of a geometric sequence are (x + 1), (x + 2), (x + 5)',
    answer:
      'x = -1/2 [(x + 1)(x + 5) = (x + 2)^2, x^2 + 6x + 5 = x^2 + 4x + 4, 2x + 1 = 0, x = -1/2]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometric Progression',
    question_year: '2018'
  },
  {
    question:
      'Find the value of x if consecutive terms of a geometric sequence are (x - 2), (x + 3), (x + 6)',
    answer:
      'x = -21/2 [(x - 2)(x + 6) = (x + 3)^2, x^2 + 4x - 12 = x^2 + 6x + 9, 2x = -21, x = -21/2.]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometric Progression',
    question_year: '2018'
  },
  {
    question:
      'Find the value of x if consecutive terms of a geometric sequence are (x + 3), x, (x - 2)',
    answer: 'x = 6 [(x + 3)(x - 2) = x^2, x^2 + x - 6 = x^2, x - 6 = 0, x = 6]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometric Progression',
    question_year: '2018'
  },
  {
    question:
      'Given that an angle A is acute and cosA = 12/13, find the exact value of cos2A',
    answer: 'cos2A = 2cos^2A - 1 = 2(144/169) - 1 = (288 - 169)/169 = 119/169',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Given that an angle A is acute, and tanA = 3/4, find the exact value of tan2A.',
    answer:
      '24/7 [tanA = 3/4, tan(2A) = 2tanA/(1 - tan^2A) = 2(3/4)/(1 - 9/16) = 24/7]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Given that an angle A is acute and sinA = 3/5, find the exact value of sin2A',
    answer: 'sin2A = 2sinAcosA = 2(3/5)(4/5) = 24/25',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'A stone is projected vertically upwards with an initial speed of 98 m/s. Take g = 9.8 m/s^2. Find the time taken to reach the highest point',
    answer: '10 seconds [v = u - gt = 98 - 9.8t = 0, t = 98/9.8 = 10]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Projectile Motion',
    question_year: '2018'
  },
  {
    question:
      'A stone is projected vertically upwards with an initial speed of 98 m/s. Take g = 9.8 m/s^2. Find the first time when the speed is halved',
    answer: '5 seconds [49 = 98 - 9.8t , 9.8t = 49, t = 49/9.8 = 5]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Projectile Motion',
    question_year: '2018'
  },

  {
    question:
      'A stone is projected vertically upwards with an initial speed of 98 m/s. Take g = 9.8 m/s^2. Find the first time when the speed is 24.5 m/s.',
    answer:
      '7.5 seconds [24.5 = 98 - 9.8t, t = (98 - 24.5)/9.8 = 73.5/9.8 = 10.5/1.4 = 7.5]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Projectile Motion',
    question_year: '2018'
  },
  {
    question:
      'Find the coordinates of the maximum or minimum point of the given function y = 3 + 2x - x^2',
    answer:
      '(1, 4) a maximum point [dy/dx = 2 - 2x = 0, x = 1, d^2y/dx^2 = -2 < 0, maximum, y = 3 + 2 - 1 = 4, hence (1, 4)]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the coordinates of the maximum or minimum point of the given function y = 2x^2 - 4x + 5',
    answer:
      '(1, 3) a minimum point [dy/dx = 4x - 4 = 0, x = 1, d^2y/dx^2 = 4 > 0, minimum, for x = 1, y = 2 - 4 + 5 = 3, hence (1, 3)]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the coordinates of the maximum or minimum point of the given function y = x^2 + 4x + 5',
    answer:
      '(-2, 1) a minimum point [dy/dx = 2x + 4 = 0, x = -2, d^2y/dx^2 = 2 > 0, minimum, for x = -2  y = 4 - 8 + 5 = 1, hence (-2, 1)]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Factorise completely 5x^2 + xy - 4y^2',
    answer:
      '(5x - 4y)(x + y) [5x^2 + 5xy - 4xy - 4y^2 = 5x(x + y) - 4y(x + y) = (5x - 4y)(x + y)]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely 3x^2 + 4xy + y^2',
    answer:
      '(3x + y)(x + y) [3x^2 + 3xy + xy + y^2 = 3x(x + y) + y(x + y) = (3x + y)(x + y)]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely 3x^2 - xy - 2y^2',
    answer:
      '(3x + 2y)(x - y) [3x^2 - 3xy + 2xy - 2y^2 = 3x(x - y) + 2y(x - y) = (3x + 2y)(x - y)]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the perpendicular bisector of the line segment AB given A(-1, 2) and B(3, -4)',
    answer:
      'y = 2x/3 - 5/3, or y = (2x - 5)/3 [mAB = -6/4 = -3/2, Midpoint of AB is C(1, -1), (y + 1) = (2/3)(x - 1), y = 2x/3 - 5/3]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the perpendicular bisector of the line segment AB given A(3, 5) and B(5, 3)',
    answer:
      'y = x [mAB = -2/2 = -1, Midpoint of AB is C(4, 4), y - 4 = 1(x - 4), y = x]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the perpendicular bisector of the line segment AB given A(2, -1) and B(4, 1)',
    answer:
      'y = -x + 3 [mAB = 2/2 = 1, Midpoint of AB is C(3, 0), y - 0 = -1(x - 3), y = -x + 3]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Describe how the graph of the given function can be obtained from that of y = x^2\n\ny = (x - 2)^2',
    answer: 'Shift the graph of y = x^2 horizontally 2 units to the right.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Describe how the graph of the given function can be obtained from that of y = x^2\n\ny = x^2 - 4',
    answer: 'Shift the graph of y = x^2 vertically down by 4 units.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Describe how the graph of the given function can be obtained from that of y = x^2\n\ny = -x^2',
    answer: 'Reflect the graph of y = x^2 in the x-axis',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'The area of a circle is 25π cm^2. Find its circumference',
    answer: '10π cm [πr^2 = 25π, r = 5, C = 2πr = 10π cm]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },

  {
    question: 'The circumference of a circle is 18π cm. Find its area.',
    answer: '81π cm² [2πr = 18π, r = 9, Area = πr² = 9²π = 81π cm²]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'A chord of a circle is 16 cm long and its distance from the center is 6 cm. Find the area of the circle.',
    answer: '100π cm². [r² = 6² + 8² = 36 + 64 = 100, Area = πr² = 100π cm²]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question: 'Find an integer n such that 100 < 4n³ < 120',
    answer: 'n = 3 [25 < n³ < 30, n³ = 27, n = 3]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2018'
  },
  {
    question: 'Find an integer n such that 480 < 4n³ < 520',
    answer: 'n = 5 [120 < n³ < 130, n³ = 125, n = 5]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2018'
  },
  {
    question: 'Find an integer n such that 600 < 2n³ < 800',
    answer: 'n = 7 [300 < n³ < 400, n³ = 343, n = 7]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2018'
  },
  {
    question:
      'Find the average rate of change of the function y = f(x) given f(x) = x² + 2x - 1 from x = 1 to x = 3',
    answer: '(f(3) - f(1))/(3 - 1) = ((9 + 6 - 1) - (1 + 2 - 1))/2 = 6',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the average rate of change of the function y = f(x) given f(x) = sinx - cosx from x = 0 to x = π/2',
    answer:
      '4/π [(sin(π/2) - cos(π/2)) - (sin0 - cos0))/(π/2) = (1 + 1)/(π/2) = 4/π]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the average rate of change of the function y = f(x) given f(x) = 1/(x + 2) from x = -1 to x = 1',
    answer: '-1/3 [(f(1) - f(-1))/2 = (1/3 - 1)/2 = (-2/3)/2 = -1/3]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the derivative of the given function f(x). f(x) = 3x³ + 6x² - 7x + 15',
    answer: 'df/dx = 9x² + 12x - 7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the derivative of the given function f(x). f(x) = 5x⁴ - 8x² + 10x - 15',
    answer: 'df/dx = 20x³ - 16x + 10',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the derivative of the given function f(x). f(x) = 7x³ - 8x² + 15x + 21',
    answer: 'df/dx = 21x² - 16x + 15',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Simplify n!/(n - 3)!',
    answer: 'n(n - 1)(n - 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics',
    question_year: '2018'
  },
  {
    question: 'Simplify (n + 2)!/(n - 1)!',
    answer: '(n + 2)(n + 1)n',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics',
    question_year: '2018'
  },

  {
    question: 'Simplify (n + 1)!/(n + 3)!',
    answer: '1/(n + 3)(n + 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics',
    question_year: '2018'
  },
  {
    question:
      'Find two positive integers such that their mean is 38 and their difference is 12',
    answer:
      '32, 44 [ (a + b)/2 = 38, a + b = 76, a – b = 12, 2a = 88, a = 44, b = 32]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find two positive integers such that their mean is 33 and twice the smaller number less the larger number is 9',
    answer:
      '25, 41 [ (a + b)/2 = 33, a + b = 66, 2a – b = 9, 3a = 75, a = 25, b = 66 – 25 = 41]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find two positive integers such that their mean is 22 and one number decreased by twice the other number is 5.',
    answer:
      'b = 13, a = 31 [a + b = 2(22) = 44, a – 2b = 5, 3b = 39, b = 13, a = 44 – 13 = 31]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the indefinite integral of the given expression 3x² + 6x + 5',
    answer: 'x³ + 3x² + 5x + C',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the indefinite integral of the given expression 8x³ – 4x + 7',
    answer: '2x⁴ - 2x² + 7x + C',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the indefinite integral of the given expression 10x⁴ + 6x² + 2x',
    answer: '2x⁵ + 2x³ + x² + C',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the number of sides of a regular polygon if the measure of an interior angle is 150°',
    answer: '12 sides [360/n = (180 – 150) = 30, n = 360/30 = 12]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the number of sides of a regular polygon if the measure of an interior angle is 165°',
    answer: '24 sides [360/n = (180 – 165) = 15, n = 360/15 = 24]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the number of sides of a regular polygon if the measure of an interior angle is 175°',
    answer: '72 sides [360/n = (180 – 175) = 5, n = 360/5 = 72]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question: 'Differentiate the given function y = (2x – 3)/(x + 1)',
    answer:
      'dx = 5/(x + 1)² [dy/dx = (2(x + 1) – 1(2x - 3))/(x + 1)² = 5/(x + 1)²]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Differentiate the given function y = (x + 2)/(2x – 1)',
    answer:
      'dy/dx = -5/(2x – 1)² [dy/dx = (1(2x – 1) – 2(x + 2))/(2x – 1)² = -5/(2x – 1)²]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Differentiate the given function y = x/(x + 3)',
    answer:
      'dy/dx = 3/(x + 3)² [dy/dx = (1(x + 3) – 1x)/(x + 3)² = 3/(x + 3)²]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Determine the possible range of values of k if the given equation has no real roots. 3x² + 2kx + 2k = 0',
    answer: '{ k : 0 < k < 6} [4k² – 24k < 0, k(k – 6) < 0, 0 < k < 6]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Determine the possible range of values of k if the given equation has no real roots. kx² + 2kx - 1 = 0',
    answer: '{ k : -1 < k < 0} [4k² + 4k < 0, k(k + 1) < 0, -1 < k < 0]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },

  {
    question:
      'Determine the possible range of values of k if the given equation has no real roots. kx² + 2kx - 1 = 0',
    answer: '{ k : 0 < k < 5} [4k² – 20k < 0, 4k(k – 5) < 0, 0 < k < 5]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Identify the following in relation to a triangle: The point of intersection of the angle bisectors of a triangle',
    answer: 'IN-CENTER',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Identify the following in relation to a triangle: The point of intersection of the medians of a triangle.',
    answer: 'CENTROID',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Identify the following in relation to a triangle: The point of intersection of the perpendicular bisectors of the sides of a triangle.',
    answer: 'CIRCUM-CENTER',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question: 'Find dy/dx from the implicit equation 3x² + 2xy + y² = 10',
    answer:
      'dy/dx = -(3x + y)/(x + y) [6x + 2y + 2xdy/dx + 2ydy/dx = 0, (dy/dx)(2x + 2y) = -(6x + 2y), dy/dx = -(3x + y)/(x + y)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Find dy/dx from the implicit equation x² – xy – y² = 8',
    answer:
      'dy/dx = (2x – y)/(x + 2y) [2x – y – xdy/dx – 2ydy/dx = 0, (dy/dx)(x + 2y) = (2x - y), dy/dx = (2x – y)/(x + 2y)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Find dy/dx from the implicit equation 2x² + 2xy – 3y² = 7',
    answer:
      'dy/dx = -(2x + y)/(x – 3y) [4x + 2y + 2xdy/dx – 6ydy/dx = 0, (dy/dx)(2x – 6y) = -(4x + 2y), dy/dx = -(2x + y)/(x – 3y)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the absolute error in the given number for the given accuracy 250 to the nearest ten',
    answer: 'Absolute error = 5',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the absolute error in the given number for the given accuracy 147 to 3 significant figures',
    answer: 'Absolute error = 0.5',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the absolute error in the given number for the given accuracy 41500 to the nearest hundred',
    answer: 'Absolute error = 50',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely (2x – y)² – 4z²',
    answer: '(2x – y + 2z)(2x – y – 2z)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely 25x² – 16(y + z)²',
    answer: '(5x – 4y – 4z)(5x + 4y + 4z)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely 16x² – 4 (y – 2z)²',
    answer: '4(2x – y + 2z)(2x + y – 2z)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Given the set A = { (x, y) : y > 5} and the set B = { (x, y) : y < 10}, find A∩B.',
    answer: 'A∩B = { (x, y) : 5 < y < 10}',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Set theory',
    question_year: '2018'
  },
  {
    question:
      'Given the set A = { (x, y) : x² + y² < 7} and the set B = {(x, y) : x² + y² > 5}, find A∩B.',
    answer: 'A∩B = {(x, y) : 5 < x² + y² < 7}',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Set theory',
    question_year: '2018'
  },

  {
    question:
      'Determine the possible range of values of k if the given equation has no real roots. kx² + 2kx - 1 = 0',
    answer: '{ k : 0 < k < 5} [4k² – 20k < 0, 4k(k – 5) < 0, 0 < k < 5]',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Identify the following in relation to a triangle: The point of intersection of the angle bisectors of a triangle',
    answer: 'IN-CENTER',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Identify the following in relation to a triangle: The point of intersection of the medians of a triangle.',
    answer: 'CENTROID',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Identify the following in relation to a triangle: The point of intersection of the perpendicular bisectors of the sides of a triangle.',
    answer: 'CIRCUM-CENTER',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question: 'Find dy/dx from the implicit equation 3x² + 2xy + y² = 10',
    answer:
      'dy/dx = -(3x + y)/(x + y) [6x + 2y + 2xdy/dx + 2ydy/dx = 0, (dy/dx)(2x + 2y) = -(6x + 2y), dy/dx = -(3x + y)/(x + y)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Find dy/dx from the implicit equation x² – xy – y² = 8',
    answer:
      'dy/dx = (2x – y)/(x + 2y) [2x – y – xdy/dx – 2ydy/dx = 0, (dy/dx)(x + 2y) = (2x - y), dy/dx = (2x – y)/(x + 2y)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Find dy/dx from the implicit equation 2x² + 2xy – 3y² = 7',
    answer:
      'dy/dx = -(2x + y)/(x – 3y) [4x + 2y + 2xdy/dx – 6ydy/dx = 0, (dy/dx)(2x – 6y) = -(4x + 2y), dy/dx = -(2x + y)/(x – 3y)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the absolute error in the given number for the given accuracy 250 to the nearest ten',
    answer: 'Absolute error = 5',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the absolute error in the given number for the given accuracy 147 to 3 significant figures',
    answer: 'Absolute error = 0.5',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the absolute error in the given number for the given accuracy 41500 to the nearest hundred',
    answer: 'Absolute error = 50',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely (2x – y)² – 4z²',
    answer: '(2x – y + 2z)(2x – y – 2z)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely 25x² – 16(y + z)²',
    answer: '(5x – 4y – 4z)(5x + 4y + 4z)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Factorise completely 16x² – 4 (y – 2z)²',
    answer: '4(2x – y + 2z)(2x + y – 2z)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Given the set A = { (x, y) : y > 5} and the set B = { (x, y) : y < 10}, find A∩B.',
    answer: 'A∩B = { (x, y) : 5 < y < 10}',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Set theory',
    question_year: '2018'
  },
  {
    question:
      'Given the set A = { (x, y) : x² + y² < 7} and the set B = {(x, y) : x² + y² > 5}, find A∩B.',
    answer: 'A∩B = {(x, y) : 5 < x² + y² < 7}',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Set theory',
    question_year: '2018'
  },

  {
    question:
      'Find the degree measure of the smaller angle between the hands of a clock at 10.40 am',
    answer: '80° [2(30) + 20 = 80]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the second derivative of the given function y = 3x³ + 5x² + 3x',
    answer: 'd²y/dx² = 18x + 10 [dy/dx = 9x² + 10x + 3, d²y/dx² = 18x + 10]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the second derivative of the given function y = 2x⁴ + 6x² – 10x',
    answer: 'd²y/dx² = 24x² + 12 [dy/dx = 8x³ + 12x - 10, d²y/dx² = 24x² + 12]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the second derivative of the given function y = 6x⁵ + 4x³ + 5x',
    answer:
      'd²y/dx² = 120x³ + 24x [dy/dx = 30x⁴ + 12x² + 5, d²y/dx² = 120x³ + 24x]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Determine if triangle ABC is acute, obtuse or right-angled if the lengths of the sides are; a = 10 cm, b = 7 cm, and c = 5 cm',
    answer:
      'OBTUSE [a² = 100, b² + c² = 49 + 25, hence a² > b² + c², triangle is obtuse]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Determine if triangle ABC is acute, obtuse or right-angled if the lengths of the sides are; a = 8 cm, b = 7 cm, and c = 6 cm',
    answer:
      'ACUTE [a² = 64, b² = 49, c² = 36, hence a² < b² + c², triangle is acute]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Determine if triangle ABC is acute, obtuse or right-angled if the lengths of the sides are; a = 7 cm, b = 25 cm, and c = 24 cm',
    answer:
      'RIGHT-ANGLED [a² = 7², b² = 25², c² = 24², b² = a² + c² hence triangle is right-angled at B]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Simplify the logarithmic expression: logₐₐ₅ + (1/3)(logₐ₂₇) + logₐ₂',
    answer: '5 + logₐ₆, or logₐ(6a⁵)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Logarithms',
    question_year: '2018'
  },
  {
    question: 'Simplify the logarithmic expression: logₐ₉ – logₐ₈ + logₐ(4/3)',
    answer:
      'logₐ₃ [2logₐ₆ - 3logₐ₂ + 2logₐ₂ - logₐ₃ = logₐ₆ - logₐ₂ = logₐ(3/2)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Logarithms',
    question_year: '2018'
  },
  {
    question:
      'Simplify the logarithmic expression: ½logₐ₈₁ + logₐ(1/4) – logₐ(3/4)',
    answer:
      'logₐ(3/2) [2logₐ₃ - 3logₐ₂ + 2logₐ₂ - logₐ₃ = logₐ₃ - logₐ₂ = logₐ(3/2)]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Logarithms',
    question_year: '2018'
  },
  {
    question:
      'Find the radius R of a circle given that a sector of area 12 cm² has an arc of length 6 cm',
    answer: 'R = 4 cm [Rθ = 6, ½R²θ = 12, R²θ/Rθ = 24/6 = 4, hence R = 4 cm]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the radius R of a circle given that a sector of area 25 cm² has an arc of length 5 cm',
    answer:
      'R = 10 cm [Rθ = 5, ½R²θ = 25, R²θ/Rθ = 2(25)/5 = 50/5 = 10, hence R = 10 cm]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the radius R of a circle given that a sector of area 162 cm² has an arc of length 36 cm',
    answer:
      'R = 9 cm [Rθ = 36, ½R²θ = 162, R²θ/Rθ = 2(162)/36 = 324/36 = 9, hence R = 9 cm]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the area of the finite region bounded by the given curve and the x-axis. y = 9 - x²',
    answer: '36 square units',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },

  {
    question:
      'Find the area of the finite region bounded by the given curve and the x-axis. y = 6x(x + 2)',
    answer: '8 sq units',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question:
      'Find the area of the finite region bounded by the given curve and the x-axis. y = 12x²(1 – x)',
    answer: '1 sq unit',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Evaluate the trigonometric expression. (You may leave the answer as a surd where appropriate) sin 330°',
    answer: '-1/2 [sin 330 = sin(360 – 30) = sin(-30) = -sin 30 = -1/2]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Evaluate the trigonometric expression. (You may leave the answer as a surd where appropriate) cos 315°',
    answer: '1/√2 or √2/2 [cos 315 = cos(360 – 45) = cos(-45) = cos 45 = 1/√2]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Evaluate the trigonometric expression. (You may leave the answer as a surd where appropriate) tan 390°',
    answer: '1/√3 or √3/3 [tan(360 + 30) = tan 30 = 1/√3]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the given line y = 2x + 5 when reflected in the y-axis',
    answer: 'y = -2x + 5 [(x, y) → (-x, y), hence y = -2x + 5]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the given line y = -2x + 3 when reflected in the x-axis',
    answer: 'y = 2x - 3 [(x, y) → (x, -y), hence -y = -2x + 3, y = 2x - 3]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the given line x – 2y = 5 when reflected in the line y = x',
    answer: 'y = 2x + 5 [(x, y) → (y, x), hence y – 2x = 5, y = 2x + 5]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the real zero(s) of the polynomial f(x) when f(x) = x³ + x² + 4x + 4',
    answer: 'x = -1 [x²(x + 1) + 4(x + 1) = (x² + 4)(x + 1) = 0, hence x = -1]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the real zero(s) of the polynomial f(x) when f(x) = x³ – 2x² + 4x – 8',
    answer: 'x = 2 [x²(x – 2) + 4(x – 2) = (x² + 4)(x – 2) = 0, hence x = 2]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the real zero(s) of the polynomial f(x) when f(x) = x³ + 7x² + 5x + 35',
    answer: 'x = -7 [x²(x + 7) + 5(x + 7) = (x² + 5)(x + 7) = 0, hence x = -7]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Given f(x) = 2x – 3 and g(x) = x² – 3x + 2, evaluate f(g(2))',
    answer: '-3 [g(2) = 4 – 6 + 2 = 0, f(0) = -3]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Given f(x) = 2x – 3 and g(x) = x² – 3x + 2, evaluate g(f(2))',
    answer: '0 [f(2) = 4 – 3 = 1, g(1) = 1 – 3 + 2 = 0]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question: 'Given f(x) = 2x – 3 and g(x) = x² – 3x + 2, evaluate f(g(3))',
    answer: '1 [g(3) = 9 – 9 + 2 = 2, f(2) = 4 – 3 = 1]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'A circle has a radius of length 20 cm. Find the distance from the center to a chord of length 24 cm',
    answer: '16 cm [x² + 12² = 20², x² = 400 – 144 = 256, x = 16]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },

  {
    question:
      'A circle has a radius of length 20 cm. Find the distance from the center to a chord of length 30 cm',
    answer: '5√7 cm [x² + 152 = 202, x² = 400 – 225 = 275 = 7(25), x = 5√7 cm]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'A circle has a radius of length 20 cm. Find the distance from the center to a chord of length 32 cm',
    answer: '12 cm [x² + 162 = 202, x² = 400 – 256 = 144, x = 12]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the value of the constant k if the given curve passes through the given point A.\ny = 5 + ktanx passes through A(π/4, 8)',
    answer: 'k = 3 [8 = 5 + ktan(π/4) = 5 + k, k = 8 - 5 = 3]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the value of the constant k if the given curve passes through the given point A.\ny = 7 + kcosx passes through the point A(0, 5)',
    answer: 'k = -2 [5 = 7 + kcos0 = 7 + k, k = 5 – 7 = -2]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the value of the constant k if the given curve passes through the given point A.\ny = k + 5sinx passes through the point A(π/2, -5)',
    answer: 'k = -10 [k + 5sin(π/2) = -5, k = -5 - 5 = -10]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'The sum of two positive integers is 12. Find their maximum product.',
    answer:
      '36 [x + y = 12, y = 12 - x, P = xy = x(12 - x), dP/dx = 12 - 2x = 0, x = 6, Hence P = 6(12 - 6) = 36]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'The product of two positive integers is 400. Find their least possible sum',
    answer:
      '40 [xy = 400, y = 400/x, S = x + y = x + 400/x, dS/dx = 1 - 400/x^2, x = 20, S = 20 + 400/20 = 40]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the least value of the perimeter of a rectangle with fixed area 64 cm².',
    answer:
      '32 cm [xy = 64, P = 2x + 2y = 2(x + 64/x), dP/dx = 2(1 - 64/x²) = 0, x = 8, P = 2(8 + 64/8) = 32]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Solve for x from the cubic equation x³ + 7x² – x – 7 = 0',
    answer:
      'x = -7, ± 1 [x²(x + 7) – 1(x + 7) = (x² – 1)(x + 7) = 0, x = -7, ± 1]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question: 'Solve for x from the cubic equation x³ – 5x² – 9x + 45 = 0',
    answer:
      'x = 5, ± 3 [x²(x – 5) – 9(x – 5) = (x² – 9)(x – 5) = 0, x = 5, ± 3]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question: 'Solve for x from the cubic equation x³ – x² – 4x + 4 = 0',
    answer:
      'x = 1, ± 2 [x²(x – 1) – 4(x – 1) = (x² – 4)(x – 1) = 0, x = 1, ± 2]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Solve the given trigonometric equation for x in the interval 0° < x < 360° sinx = √2/2',
    answer: 'x = 45°, 135°',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Solve the given trigonometric equation for x in the interval 0° < x < 360° cosx = √3/2',
    answer: 'x = 30°, 330°',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Solve the given trigonometric equation for x in the interval 0° < x < 360° tanx = √3',
    answer: 'x = 60°, 240°',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the circle (x – 3)² + (y + 2)² = 25 after reflection in the line y = x',
    answer:
      '(x + 2)² + (y – 3)² = 25 [Center (3, -2) → (-2, 3), hence (x + 2)² + (y – 3)² = 25]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },

  {
    question:
      'Find the equation of the image of the circle (x – 3)² + (y + 2)² = 26 after reflection in the x-axis',
    answer:
      '(x – 3)² + (y – 2)² = 25 [Center (3, -2) → (3, 2), (x – 3)² + (y – 2)² = 25]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the circle (x – 3)² + (y + 2)² = 27 after reflection in the y-axis',
    answer:
      '(x + 3)² + (y + 2)² = 25 [Center (3, -2) → (-3, -2), hence (x + 3)² + (y + 2)² = 25]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Expand the binomial expression in ascending powers of x up to the term in x². Indicate the range of values of x for which the expansion is valid (1 – 2x)^(-1/2)',
    answer: '1 + x + (3/2)x² (valid for |x| < ½ or -1/2 < x < ½)',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Expand the binomial expression in ascending powers of x up to the term in x². Indicate the range of values of x for which the expansion is valid (1 + 2x)^(-2)',
    answer: '1 – 4x + 12x² (valid for |x| < ½)',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Expand the binomial expression in ascending powers of x up to the term in x². Indicate the range of values of x for which the expansion is valid (1 – 3x)^(1/2)',
    answer: '1 – (3/2)x – (9/8)x² (valid for |x| < 1/3)',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Evaluate the trigonometric expression (tan19° + tan26°)/(1 – tan19°tan26°)',
    answer: '1 [tan(19 + 26) = tan45 = 1]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Evaluate the trigonometric expression (tan75° – tan45°)/(1 + tan75°tan45°)',
    answer: '1/√3 or √3/3 [tan(75 – 45) = tan30 = 1/√3 or √3/3]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Evaluate the trigonometric expression (tan80° + tan40°)/(1 – tan80°tan40°)',
    answer: '-√3 [tan(80 + 40) = tan120 = -tan60 = -√3]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the line y = 3x + 2 after a reflection in the given line x = -1',
    answer:
      'y = -3x - 4 [(x, y) → (-2 – x, y), hence y = 3(-2 – x) + 2 = -3x – 4]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the line y = 3x + 2 after a reflection in the given line y = 2',
    answer:
      'y = -3x + 2 [(x, y) → (x, 4 – y), hence 4 – y = 3x + 2, y = -3x + 2]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the equation of the image of the line y = 3x + 2 after a reflection in the given line x = 2',
    answer:
      'y = -3x + 14 [(x, y) → (4 – x, y), hence y = 3(4 – x) + 2, y = -3x + 14]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the values of a and b if the points P and Q lie on the given line: y = 2x + 5, P(3, a), Q(b, b + 2)',
    answer:
      'a = 11, b = -3 [a = 2(3) + 5 = 11, b + 2 = 2b + 5, b + 3 = 0, b = -3]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Coordinate Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the values of a and b if the points P and Q lie on the given line: y = 2 – x, P(a, a + 5), Q(b, 4)',
    answer:
      'a = -3/2, b = -2 [a + 5 = 2 – a, 2a = -3, a = -3/2, 4 = 2 – b, b = 2 – 4 = -2]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Coordinate Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the values of a and b if the points P and Q lie on the given line: y = x + 2, P(2a, 3a), Q(b, 6)',
    answer: 'a = 2, b = 4 [3a = 2a + 2, a = 2, 6 = b + 2, b = 6 – 2 = 4]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Coordinate Geometry',
    question_year: '2018'
  },
  {
    question:
      'Solve the logarithmic equation for x. log₂(x + 1) + log₂(x – 1) = 3',
    answer: 'x = 3 [(x² – 1) = 2³ = 8, x² = 9, x = 3]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Logarithmic Equations',
    question_year: '2018'
  },

  {
    question:
      'Solve the logarithmic equation for x. log₄ (x + 3) + log₄(x – 3) = 2',
    answer: 'x = 5 [(x + 3)(x – 3) = x² – 9 = 16, x² = 25, x = 5]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Logarithmic Equations',
    question_year: '2018'
  },
  {
    question:
      'Solve the logarithmic equation for x. log₅(x + 4) – log₅(x – 4) = 1',
    answer: 'x = 6 [(x + 4)/(x – 4) = 5, x + 4 = 5(x – 4), 4x = 24, x = 6]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Logarithmic Equations',
    question_year: '2018'
  },
  {
    question:
      'Find an equation of variation given that y varies jointly as x and z and inversely as w², and y = 12/5 when x = 4, z = 1, and w = 5',
    answer:
      'y = 15xz/w² [y = kxz/w², 12/5 = k4(1)/25, k = 12(5)/4 = 3(5) = 15, hence y = 15xz/w²]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: '2018'
  },
  {
    question:
      'Find an equation of variation given that y varies directly as x and inversely as the product of z and w, and y = 10 when x = 20, z = 5, and w = 2.',
    answer:
      'y = 5x/(zw) [y = kx/(zw), 10 = k(20)/(5 x 2) = 2k, k = 10/2 = 5, and hence y = 5x/(zw)]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: '2018'
  },
  {
    question:
      'Find an equation of variation given that y varies jointly as x and z and inversely as the product of p and w, and y = 2 when x = 5, z = 2, w = 7, and p = 5.',
    answer:
      'y = 7xz/(pw) [y = k(xz)/(wp), 2 = k5(2)/(7 x 5) = 2k/7, k = 7, hence y = 7xz/(pw)]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: '2018'
  },
  {
    question:
      'Find functions f(x) and g(x) such that the function h(x) = f(g(x)) given that h(x) = (3x + 4)²',
    answer: 'f(x) = x², g(x) = (3x + 4) [f(g(x)) = f(3x + 4) = (3x + 4)²]',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: '2018'
  },
  {
    question:
      'Find functions f(x) and g(x) such that the function h(x) = f(g(x)) given that h(x) = (x² – 1)/(x² + 1)',
    answer:
      'f(x) = (x – 1)/(x + 1), g(x) = x² [f(g(x)) = f(x²) = (x² – 1)/(x² + 1)]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: '2018'
  },
  {
    question:
      'Find functions f(x) and g(x) such that the function h(x) = f(g(x)) given that h(x) = 5(x + 2)² – 3(x + 2) + 7',
    answer:
      'f(x) = 5x² – 3x + 7, g(x) = x + 2 [f(g(x)) = f(x + 2) = (x + 2)² – 3(x + 2) + 7]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: '2018'
  },
  {
    question:
      'Use parentheses/brackets such that the sum is correct. 5 – 42 + 3 – 22 = -18',
    answer:
      '5 – (42 + 3) – 22 = -18 [5 – (42 + 3) – 22 = 5 – 19 – 4 = 5 – 23 = -18]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Use parentheses/brackets such that the sum is correct. 5 – 42 + 3 – 22 = -10',
    answer:
      '5 – (42 + 3 – 22) = -10, or (5 – 42) + (3 – 2)² = -10 (any one will do) [5 – (42 + 3 – 22) = 5 – (16 + 3 – 4) = 5 -15 = -10, or (5 – 16) + (3 - 4)² = -11 + 1 = -10]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Use parentheses/brackets such that the sum is correct. 5 – 42 + 3 – 22 = 81',
    answer:
      '5 – (42 + 3)(-22) = 81 [5 – (42 + 3)(-22) = 5 – (19)(-4) = 5 + 19(4) = 5 + 76 = 81]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2018'
  },
  {
    question:
      'Find the coordinates of the stationary points of the curve y = 3x² – 2x³ + 2',
    answer:
      '(0, 2), (1, 3) [dy/dx = 6x – 6x² = 0, x(1 – x) = 0, x = 0, 1, for x = 0, y = 2 (0, 2), and for x = 1, y = 3 – 2 + 2 = 3 (1, 3)]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the area of an equilateral triangle if the altitude is 12 cm.',
    answer:
      '48√3 cm² [(2x)² = 12² + x², 3x² = 144, x² = 48, x = 4√3, Area = ½ (2x)12 = (4√3)(12) = 48√3 cm²]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2018'
  },
  {
    question: 'Evaluate tan 225°',
    answer: '1 [tan(225) = tan(180 + 45) = tan 45 = 1]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2018'
  },
  {
    question:
      'Find the least value of the expression x² – x + 1, and also the corresponding value of x.',
    answer:
      'LEAST VALUE = ¾, for x = ½ [x² – x + 1 = (x – ½)² + ¾, hence the least value is ¾ for x = ½.]',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2018'
  },

  {
    question:
      'Find the median and the range of the numbers 18, 20, 25, 13, 17, 21, 25',
    answer: 'MEDIAN = 20, RANGE = 12',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Evaluate (75.7^2 – 24.3^2)/(75.7 – 24.3)',
    answer: '100.0',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Statistics',
    question_year: 2018
  },
  {
    question:
      'Given that dy/dx = 3x^2 – 2x, and y = 6 when x = -1, find an expression for y in terms of x.',
    answer: 'y = x^3 – x^2 + 8',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Simplify (x^2 + 5x + 6)/(x^2 + x – 6)',
    answer: '(x + 2)/(x - 2)',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question:
      'Solve the quadratic equation 2x^2 – 6x + 3 = 0. You may leave the answer as a surd in simplest form.',
    answer: 'x = (3 ± √3)/2',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Evaluate tan(2sin^(-1)(1/2))',
    answer: '√3',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Solve for x from the equation logx + log(x + 4) = log12',
    answer: 'x = 2',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2018
  },
  {
    question:
      'The surface area of a sphere is numerically half of its volume. Find the radius (assume in centimeters).',
    answer: '6 cm',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'If f(x) = x^2 + 2, find ( f(x + h) – f(x))/h',
    answer: '2x + h',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: 2018
  },
  {
    question:
      'Express the repeating decimal 0.434343... as a rational number in simplest form.',
    answer: '43/99',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question: 'Find the next term in the sequence 1, 2, 6, 24, 120, ...',
    answer: '720',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find an expression for dy/dx given the implicit equation 3x^2 + 2xy – 3y^2 = 18',
    answer: 'dy/dx = -(3x + y)/(x – 3y)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Sequences and Patterns',
    question_year: 2018
  },
  {
    question: 'Solve the quadratic inequality 2x^2 + x – 6 < 0',
    answer: '{x: -2 < x < 3/2}',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question: 'Evaluate sin(2sin^(-1)(1/2))',
    answer: '1',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Expand (1 + 3x)^(1/3) in ascending powers of x up to the term in x^2.',
    answer: '1 + x – x^2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2018
  },

  {
    question:
      'y varies inversely as x^2 and y = 6 when x = 2. Find the value of y when x = 3.',
    answer: 'y = 8/3',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Find the domain of the function y = √(3 – x)',
    answer: '{x: x ≤ 3}',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Differentiate the function y = (x^2 – 1)/(x^2 + 1) with respect to x.',
    answer: 'dy/dx = 4x/(x^2 + 1)^2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question:
      'For a square of perimeter 24 cm, find the area of the circumscribing circle.',
    answer: '18π cm²',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find the remainder R when f(x) = 4x^2 – 2x + 5 is divided by (2x + 1)',
    answer: 'R = 7',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the coordinates of the points on the curve y = x^3 – 3x + 2 at which the tangent is horizontal.',
    answer: '(1, 0) and (-1, 4)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question:
      'Evaluate the trigonometric expression: (sin27°cos33° + cos27°sin33°)/(cos83°cos23° + sin83°sin23°)',
    answer: '√3',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2018
  },
  {
    question: 'Evaluate cos(tan^(-1)(1))',
    answer: '1/√2, or √2/2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2018
  },
  {
    question:
      'Express the repeating decimal number 0.696969... as a rational number in simplest form.',
    answer: '23/33',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the odd one out, A) Century, B) Millennium, C) Minute, D) Decade',
    answer: 'MINUTE [Others are multiples of years, but a minute is not]',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Logical Reasoning',
    question_year: 2018
  },
  {
    question: 'Find the distance between the points A(5, 3) and B(0, 15)',
    answer: '13',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question: 'Simplify (x^2 – 9)/(x^2 – 5x + 6)',
    answer: '(x + 3)/(x – 2)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the remainder R when f(x) = 2x^2 + 3x + 2 is divided by (2x + 1).',
    answer: 'R = 1',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the image of the point A(-2, 2) under a reflection in the line x = 1 followed by a reflection in the line y = 3.',
    answer: '(4, 4)',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find an equation for a function with the shape of y = x^2 but turned upside down',
    answer: 'y = – x^2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },

  {
    question: 'Find the mode of the numbers 6, 3, 7, 6, 2, 1, 8, 2.',
    answer: 'Mode = 6, 2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Statistics',
    question_year: 2018
  },
  {
    question:
      'Find x if three consecutive terms of a linear sequence are (x + 1), (2x + 1), (x + 5).',
    answer: 'x = 2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'How many vertices has a cuboid?',
    answer: '8',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find the value(s) of x given that the vector a = xi + 7j has magnitude 25.',
    answer: 'x = ±24',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: 2018
  },
  {
    question:
      'Identify the polygon the sum of whose interior angles is 5π radians.',
    answer: 'SEPTAGON or HEPTAGON',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find the image of the point A(4, 3) under a reflection in the line y = x followed by a reflection in the line y = 6.',
    answer: '(3, 8)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find the scalar product of the vectors a = 3i + 4j and b = 4i – 3j and determine if the angle between the vectors is an acute angle or an obtuse angle.',
    answer:
      'a.b = 0 and hence angle is neither acute nor obtuse since the angle is a right angle.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: 2018
  },
  {
    question:
      'Find the remainder R when the polynomial f(x) = 4x^2 – 2x + 3 is divided by (2x – 1).',
    answer: 'R = 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the measures of two angles which are supplementary and their difference is 48°.',
    answer: '114°, 66°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question: 'Solve for x from the equation a(2x – 3b) = c(dx – 3).',
    answer: 'x = 3(ab – c)/(2a – cd)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the range of values of k if the equation x^2 – kx + 3k = 0 has distinct real roots.',
    answer: '{k : k < 0 or k > 12}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Evaluate 13P2 (13 permutation 2)',
    answer: '156',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics',
    question_year: 2018
  },
  {
    question: 'Evaluate the expression (sin 72° sin 18° - cos 72° cos 18°)',
    answer: '0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2018
  },
  {
    question: 'Factorise 3x^2 + xy – 10y^2',
    answer: '(3x – 5y)(x + 2y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Expressions',
    question_year: 2018
  },
  {
    question: 'Find the derivative of the function f(x) = 3x^(1/3) + 6x^(2/3)',
    answer: 'df/dx = x^(-2/3) + 4x^(-1/3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },

  {
    question: 'Find the mode of the numbers 6, 3, 7, 6, 2, 1, 8, 2.',
    answer: 'Mode = 6, 2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Statistics',
    question_year: 2018
  },
  {
    question:
      'Find x if three consecutive terms of a linear sequence are (x + 1), (2x + 1), (x + 5).',
    answer: 'x = 2',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'How many vertices has a cuboid?',
    answer: '8',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find the value(s) of x given that the vector a = xi + 7j has magnitude 25.',
    answer: 'x = ±24',
    difficulty_level: 'Quarter-Finals',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: 2018
  },
  {
    question:
      'Identify the polygon the sum of whose interior angles is 5π radians.',
    answer: 'SEPTAGON or HEPTAGON',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find the image of the point A(4, 3) under a reflection in the line y = x followed by a reflection in the line y = 6.',
    answer: '(3, 8)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'Find the scalar product of the vectors a = 3i + 4j and b = 4i – 3j and determine if the angle between the vectors is an acute angle or an obtuse angle.',
    answer:
      'a.b = 0 and hence angle is neither acute nor obtuse since the angle is a right angle.',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: 2018
  },
  {
    question:
      'Find the remainder R when the polynomial f(x) = 4x^2 – 2x + 3 is divided by (2x – 1).',
    answer: 'R = 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the measures of two angles which are supplementary and their difference is 48°.',
    answer: '114°, 66°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question: 'Solve for x from the equation a(2x – 3b) = c(dx – 3).',
    answer: 'x = 3(ab – c)/(2a – cd)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the range of values of k if the equation x^2 – kx + 3k = 0 has distinct real roots.',
    answer: '{k : k < 0 or k > 12}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Evaluate 13P2 (13 permutation 2)',
    answer: '156',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics',
    question_year: 2018
  },
  {
    question: 'Evaluate the expression (sin 72° sin 18° - cos 72° cos 18°)',
    answer: '0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2018
  },
  {
    question: 'Factorise 3x^2 + xy – 10y^2',
    answer: '(3x – 5y)(x + 2y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic Expressions',
    question_year: 2018
  },
  {
    question: 'Find the derivative of the function f(x) = 3x^(1/3) + 6x^(2/3)',
    answer: 'df/dx = x^(-2/3) + 4x^(-1/3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },

  {
    question: 'Evaluate the trigonometric expression (1 – tan230°)/2tan30°',
    answer: '1/√3 or √3/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2018
  },
  {
    question:
      'Expand (1 + 4x)1/4 in ascending powers of x up to the term in x^2.',
    answer: '1 + x – (3/2)x^2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'The first term of a linear sequence is 7 and the twelfth term is 40. Find the fifteenth term.',
    answer: '49',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences and Patterns',
    question_year: 2018
  },
  {
    question: 'Find the derivative of the function y = 4x^(-1/4) + 8x^(3/4).',
    answer: 'dy/dx = -x^(-5/4) + 6x^(-1/4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question:
      'Three consecutive terms of a linear sequence are x, (2x + 1), and (x + 4). Find x.',
    answer: 'x = 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences and Patterns',
    question_year: 2018
  },
  {
    question:
      'y varies directly as the cube of x. If y = 54 when x = 3, find y when x = 4.',
    answer: 'y = 128',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: 2018
  },
  {
    question:
      'How many three-digit numbers can be formed from the digits 5, 6, 7, 8, 9, if a digit may be repeated?',
    answer: '125',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinatorics',
    question_year: 2018
  },
  {
    question:
      'Determine the coordinates of B, the other end of the segment AB given A(-2, -3) and its midpoint M(3, -1).',
    answer: 'B(8, 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question:
      'A triangle has sides of lengths a, b, c, in cm. a is thrice b, c is 2 cm shorter than a. The perimeter is 26 cm. Find the lengths of the sides of the triangle.',
    answer: '12 cm, 10 cm, 4 cm',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question: 'Solve the inequality x^2 – 3x – 4 > 0',
    answer: '{x: x > 4 or x < -1}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Evaluate 13C2 (13 combination 2)',
    answer: '78',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2018
  },
  {
    question: 'Factorise completely 2x^2 + xy – 3y^2',
    answer: '(x – y)(2x + 3y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: 2018
  },
  {
    question:
      'Find an expression for nPr (n permutation r) where n and r are natural numbers',
    answer: 'nPr = n!/(n – r)!',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Permutations',
    question_year: 2018
  },
  {
    question:
      'Find the range of values of k if the equation x^2 – kx + 3k = 0 has distinct roots.',
    answer: '{k: k > 12, or k < 0}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic equation roots',
    question_year: 2018
  },
  {
    question:
      'How many arrangements of the letters of the word BASKET are there taken all at a time?',
    answer: '720',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arrangements',
    question_year: 2018
  },

  {
    question:
      'Find the average rate of change of the function f(x) = √(3x – 2) from x = 2 to x = 9.',
    answer: '3/7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Rate of change',
    question_year: 2018
  },
  {
    question:
      'Expand (1 + 2x)4 in a binomial expansion in increasing powers of x.',
    answer: '1 + 8x + 24x^2 + 32x^3 + 16x^4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Binomial expansion',
    question_year: 2018
  },
  {
    question:
      'Find an expression for the sum of the first n terms of the series 7 + 12 + 17 + 22 + ...',
    answer: '(n/2)(5n + 9)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequences and Patterns',
    question_year: 2018
  },
  {
    question: 'Express in partial fractions (3 – x)/(x – 2).',
    answer: '-1 + 1/(x – 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Partial fractions',
    question_year: 2018
  },
  {
    question: 'Find the domain of the function f(x) = 2x/√(x - 3).',
    answer: '{x: x > 3}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question:
      'Find the exact change in area when the length of the side of a square changes from 6.0 cm to 6.3 cm.',
    answer: '3.69 cm^2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question: 'Factorise completely 9x^2 – 4(y + z)^2.',
    answer: '(3x + 2y + 2z)(3x – 2y - 2z)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Solve for x given a(x + 2b) = c(x + d).',
    answer: 'x = (cd – 2ab)/(a – c)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'The sum of the interior angles of a polygon is 13π radians. Find the number of sides.',
    answer: '15 sides',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon interior angles',
    question_year: 2018
  },
  {
    question:
      'The length L of a rectangle is 4 cm more than the width. If the perimeter is at most 40 cm, find the range of values for the length L.',
    answer: '4 cm < L ≤ 12 cm',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Word Problem',
    question_year: 2018
  },
  {
    question:
      'Differentiate with respect to x given y = x^(-4) + x^(-2) + x^(-1).',
    answer: 'dy/dx = -4x^(-5) – 2x^(-3) – x^(-2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question:
      'Use parenthesis or brackets such that the sum is correct. 2 + 5 – 22 + 10 = 35.',
    answer: '(2 + 5 – 2)2 + 10 = 35',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'A man saves GHc10 on the first day, GHc15 on the second day, GHc20 on the third day and so on. How much does he save in twenty days?',
    answer: 'GHc1150',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic sum',
    question_year: 2018
  },
  {
    question: 'Solve for x given √(2 – x) – 4 = 6.',
    answer: 'x = -98',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the values of k such that the product of the roots of the equation x^2 – 2x + (k^2 – 6k) = 0 is 16.',
    answer: 'k = 8, -2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },

  {
    question: 'Find f(x) given that f(x – 2) = x^2 – x + 3',
    answer: 'f(x) = x^2 + 3x + 5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Solve for x given x^4 – 12x^2 – 64 = 0',
    answer: 'x = ±4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Find the derivative of y = 4x^(-1/4) + 8x^(3/4)',
    answer: 'dy/dx = -x^(-5/4) + 6x^(-1/4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2018
  },
  {
    question:
      'Find the quantity of pure water to be added to 4 litres of a 30% acid solution to dilute it to a 10% acid solution.',
    answer: '8 litres',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Evaluate 14C12 (read as 14 combination 12)',
    answer: '91',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2018
  },
  {
    question:
      'Find the equation of the perpendicular bisector of the line bisecting the line segment joining the points A(-1, 3) and B(5, 1)',
    answer: 'y = 3x - 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question: 'Given f(x + 2) = x^2 + 6x + 4, find f(x).',
    answer: 'f(x) = x^2 + 2x - 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2018
  },
  {
    question:
      'Find the next three terms of the sequence Un given that Un = Un – 1 + 3, with U1 = -5.',
    answer: 'U2 = -2, U3 = 1, U4 = 4 (AP)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Arithmetic (Series sum)',
    question_year: 2018
  },
  {
    question: 'Differentiate y = (3 – 2x)/(2x + 1)',
    answer: '8/(2x + 1)^2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2018
  },
  {
    question: 'Solve the inequality |2x + 3| < 11',
    answer: 'x : -7 < x < 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: 2018
  },
  {
    question:
      'The sum of three consecutive even integers is 30 more than twice the middle number. Find the three integers.',
    answer: '28, 30, 32',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Series sum',
    question_year: 2018
  },
  {
    question:
      'Find the equation of the circle with center C(1, 2) passing through the point P(-2, 6)',
    answer: '(x – 1)^2 + (y – 2)^2 = 25',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2018
  },
  {
    question: 'Factorise completely (x^4 – x^2 – 12)',
    answer: '(x + 2)(x – 2)(x^2 + 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomial Factorization',
    question_year: 2018
  },
  {
    question: 'Find n if 46n = 3410',
    answer: 'n = 7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2018
  },
  {
    question:
      'Find the remainder R when f(x) = x^2 – 5x + 7 is divided by (x – 2)',
    answer: 'R = 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomial Remainder Theorem',
    question_year: 2018
  },

  {
    question:
      'Find the slope m of the tangent to the given curve at the given point on the curve. y = 3x^2 – 5x + 2 at x = 1',
    answer: 'm = 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Tangent',
    question_year: 2019
  },
  {
    question:
      'Find the slope m of the tangent to the given curve at the given point on the curve. y = x^3 – x^2 - 3x at x = 2',
    answer: 'm = 5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Tangent',
    question_year: 2019
  },
  {
    question:
      'Find the slope m of the tangent to the given curve at the given point on the curve. y = x^4 – 3x^2 + 2x  at x = 1',
    answer: 'm = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Tangent',
    question_year: 2019
  },
  {
    question:
      'Solve for x in the interval 0 < x < π/2. Give answer in radians sinx = √3/2',
    answer: 'x = π/3 radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'Solve for x in the interval 0 < x < π/2. Give answer in radians cosx = √3/2',
    answer: 'x = π/6 radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'Solve for x in the interval 0 < x < π/2. Give answer in radians tanx = √3',
    answer: 'x = π/3 radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'A binary operation is defined on the set Z of integers by a*b=a^2+b^2+ab. Evaluate 7*-5',
    answer: '39',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Operation',
    question_year: 2019
  },
  {
    question:
      'A binary operation is defined on the set Z of integers by a*b=a^2+b^2+ab. Evaluate 11*9',
    answer: '301',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Operation',
    question_year: 2019
  },
  {
    question:
      'A binary operation is defined on the set Z of integers by a*b=a^2+b^2+ab. Evaluate 12*-12',
    answer: '144',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Operation',
    question_year: 2019
  },
  {
    question:
      'Find each interior angle of a quadrilateral if its interior angles are represented by (x – 5)°, (x + 20)°, (2x – 45)°, and (2x – 30)֯',
    answer: '65°, 90°, 95°, 110°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Interior Angles',
    question_year: 2019
  },
  {
    question:
      'Find each interior angle of a quadrilateral if its interior angles are represented by (2x – 10)֯, (x + 30)֯, (2x + 50)֯, and (x + 20)֯',
    answer: '80°, 75°, 140°, 65°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Interior Angles',
    question_year: 2019
  },
  {
    question:
      'Find each interior angle of a quadrilateral if its interior angles are represented by (2x – 30)֯, (x + 50)֯, (x + 30)֯, and (2x + 10)֯',
    answer: '70°, 100°, 80°, 110°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Interior Angles',
    question_year: 2019
  },
  {
    question: 'Factorise completely x^3 + 3x^2 – x - 3',
    answer: '(x – 1)(x + 1)(x + 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: 2019
  },
  {
    question: 'Factorise completely x^3 – 2x^2 – 4x + 8',
    answer: '(x + 2)(x – 2)^2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: 2019
  },
  {
    question: 'Factorise completely 3x^3 – 4x^2 – 27x + 36',
    answer: '(3x – 4)(x – 3)(x + 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: 2019
  },

  {
    question:
      'Find the slope of the line passing through the given points (a, b) and (3a, -2b)',
    answer: '-3b/2a',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Slope',
    question_year: 2019
  },
  {
    question:
      'Find the slope of the line passing through the given points (a, b + c) and (a + c, b – c)',
    answer: '-2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Slope',
    question_year: 2019
  },
  {
    question:
      'Find the slope of the line passing through the given points (a, a^2) and (b, b^2)',
    answer: '(b+a)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Slope',
    question_year: 2019
  },
  {
    question: 'Find an expression for f(x), if f(x + 1) = x^2 + 5x + 7',
    answer: 'f(x) = x^2 + 3x + 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question: 'Find an expression for f(x), if f(x – 1) = x^2 + x + 2',
    answer: 'f(x) = x^2 + 3x + 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question: 'Find an expression for f(x), if f(x + 2) = x^2 + 5x + 8',
    answer: 'f(x) = x^2 + x + 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question:
      'Find the length of a side of a rhombus if the diagonals are of lengths 12cm and 16cm',
    answer: '10cm',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Diagonals',
    question_year: 2019
  },
  {
    question:
      'Find the length of a side of a rhombus if the diagonals are of lengths 10cm and 24cm',
    answer: '13cm',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Diagonals',
    question_year: 2019
  },
  {
    question:
      'Find the length of a side of a rhombus if the diagonals are of lengths 16cm and 30cm',
    answer: '17cm',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Diagonals',
    question_year: 2019
  },
  {
    question:
      'Find the binomial expansion in ascending powers of x of (1 + 2x)^4',
    answer: '1 + 8x + 24x^2 + 32x^3 + 16x^4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Binomial',
    question_year: 2019
  },
  {
    question:
      'Find the binomial expansion in ascending powers of x of (1 – 3x)^3',
    answer: '1 – 9x + 27x^2 – 27x^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Binomial',
    question_year: 2019
  },
  {
    question:
      'Find the binomial expansion in ascending powers of x of (1 + 2x)^5',
    answer: '1 + 10x + 40x^2 + 80x^3 + 80x^4 + 32x^5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Binomial',
    question_year: 2019
  },
  {
    question: 'Factorise the cubic expression x^3 - 27',
    answer: '(x – 3)(x^2 + 3x + 9)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: 2019
  },
  {
    question: 'Factorise the cubic expression x^3 + 125',
    answer: '(x + 5)(x^2 - 5x + 25)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: 2019
  },
  {
    question: 'Factorise the cubic expression (x^3 - 64)',
    answer: '(x - 4)(x^2 + 4x + 16)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: 2019
  },

  {
    question: 'Solve the logarithmic equation log27x = 1/3',
    answer: 'x = 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },
  {
    question: 'Solve the logarithmic equation log25x = 3/2',
    answer: 'x = 125',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },
  {
    question: 'Solve the logarithmic equation log81x = 3/4',
    answer: 'x = 27',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },
  {
    question:
      'Which of the following fractions is greater than 1/3? A) 3/10, B) 6/17, C) 5/18, D) 10/33',
    answer: '6/17',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: 2019
  },
  {
    question:
      'Which of the following fractions is between 1/3 and 5/14? A) 2/3, B) ¾, C) 29/84, D) 3/7',
    answer: '29/84',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: 2019
  },
  {
    question:
      'Which of the following fractions is less than 25%? A) ¼, B) 2/5, C) 3/11, D) 5/21',
    answer: '5/21',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: 2019
  },
  {
    question:
      'Differentiate the rational function with respect to x. y = x/(x + 1)',
    answer: '1/((x + 1)^2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2019
  },
  {
    question:
      'Differentiate the rational function with respect to x. y = (x – 2)/(x + 2)',
    answer: '-4/((x + 2)^2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2019
  },
  {
    question:
      'Differentiate the rational function with respect to x. y = (2x – 1)/(2x + 1)',
    answer: '3/((2x + 1)^2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2019
  },
  {
    question: 'Given that i^2 = -1, simplify i^6',
    answer: '-1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Imaginary',
    question_year: 2019
  },
  {
    question: 'Given that i^2 = -1, simplify i^15',
    answer: '-i',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Imaginary',
    question_year: 2019
  },
  {
    question: 'Given that i^2 = -1, simplify i^12',
    answer: '1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Imaginary',
    question_year: 2019
  },
  {
    question:
      'Find a polynomial function f(x) of degree 3 with integer coefficients, with the given numbers as its zeros: 1, -2, 3',
    answer: 'f(x) = (x - 1)(x + 2)(x - 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomial',
    question_year: 2019
  },
  {
    question:
      'Find a polynomial function f(x) of degree 3 with integer coefficients, with the given numbers as its zeros: 2, -3, 5',
    answer: 'f(x) = (x - 2)(x + 3)(x - 5)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomial',
    question_year: 2019
  },
  {
    question:
      'Find a polynomial function f(x) of degree 3 with integer coefficients, with the given numbers as its zeros: -5, 3, -1',
    answer: 'f(x) = (x + 5)(x - 3)(x + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomial',
    question_year: 2019
  },
  {
    question: 'Solve the logarithmic equation 2logx = log5 + log(x + 10)',
    answer: 'x = 10',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },

  {
    question: 'Solve the logarithmic equation for x logx + log(x – 3) = log18',
    answer: 'x = 6',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },
  {
    question: 'Solve the logarithmic equation for x logx + log(x + 5) = log36',
    answer: 'x = 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },
  {
    question: 'Evaluate and simplify sin60° + cos60° + tan60°',
    answer: '(1 + 3√3)/2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question: 'Evaluate and simplify cos45° + sin45° + tan45°',
    answer: '1 + √2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question: 'Evaluate and simplify sin30° + cos30° + tan30°',
    answer: '(3 + 5√3)/6',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'A fair coin and a fair die are tossed. Find the probability of obtaining a Head and a number greater than 3',
    answer: '1/4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'A fair coin and a fair die are tossed. Find the probability of obtaining a Head or a Tail and a prime number',
    answer: '1/2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'A fair coin and a fair die are tossed. Find the probability of obtaining a Tail and an odd prime or a number greater than 4.',
    answer: '1/4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'Find the equation of the line y = x – 3 after reflection in the line y = x',
    answer: 'y = x + 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: 2019
  },
  {
    question:
      'Find the equation of the line y = x – 3 after reflection in the x-axis',
    answer: 'y = 3 - x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: 2019
  },
  {
    question:
      'Find the equation of the line y = x – 3 after reflection in the y-axis',
    answer: 'y = -x - 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: 2019
  },
  {
    question:
      'Solve for n given that nCr represents ‘n combination r’. nC2 = 10C8',
    answer: 'n = 10',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2019
  },
  {
    question:
      'Solve for n given that nCr represents ‘n combination r’. 20Cn = 20C12 with n ≠ 12',
    answer: 'n = 8',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2019
  },
  {
    question: 'Solve for n given that nCr represents ‘n combination r’.',
    answer: 'n = 15',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2019
  },
  {
    question:
      'Assume x is the measure of an acute angle. If sinx = 3/5, find secx',
    answer: '5/4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },

  {
    question:
      'Assume x is the measure of an acute angle. If tanx = 5/12 find cosecx',
    answer: '13/5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'Assume x is the measure of an acute angle. If cosx = 12/13, find cotx',
    answer: '12/5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'Given f(x) = 1 – 2x and g(x) = x2 + 1, find an expression for f(g(x))',
    answer: '-2x2 – 1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Composition',
    question_year: 2019
  },
  {
    question:
      'Given f(x) = 1 – 2x and g(x) = x2 + 1, find an expression for g(f(x))',
    answer: '(1 – 2x)2 + 1, or 4x2 – 4x + 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Composition',
    question_year: 2019
  },
  {
    question:
      'Given f(x) = 1 – 2x and g(x) = x2 + 1, find an expression for g(g(x))',
    answer: '(x2 + 1)2 + 1, or (x4 + 2x2 + 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Composition',
    question_year: 2019
  },
  {
    question: 'Evaluate (13.75)2 – (3.75)2',
    answer: '175.00',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question: 'Evaluate (77.77)2 – (22.23)2',
    answer: '5,554.00',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question: 'Evaluate (17.85)2 – (7.85)2',
    answer: '257.00',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Find the number of sides of a regular polygon if an interior angle has measure 171°',
    answer: '40',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'Find the number of sides of a regular polygon if an interior angle has measure 177°',
    answer: '120',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'Find the number of sides of a regular polygon if an interior angle has measure 160°',
    answer: '18',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'If f(x) = 2x – 1, g(x) = x + 2 and h(x) = x2, evaluate f(g(h(2)))',
    answer: '11',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question:
      'If f(x) = 2x – 1, g(x) = x + 2 and h(x) = x2, evaluate g(f(h(-1)))',
    answer: '3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question:
      'If f(x) = 2x – 1, g(x) = x + 2 and h(x) = x2, evaluate h(f(g(-2)))',
    answer: '1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the image of the point A(3, 5) after reflection in the origin',
    answer: '(-3, -5)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: 2019
  },

  {
    question:
      'Find the coordinates of the image of the point A(3, 5) after reflection in the line y = 3',
    answer: '(3, 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the image of the point A(3, 5) after reflection in the line x = 2',
    answer: '(1, 5)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: 2019
  },
  {
    question: 'Find dy/dx if x2 + xy – y2 = 9',
    answer: 'dy/dx = (2x + y)/(2y – x)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Derivative',
    question_year: 2019
  },
  {
    question: 'Find dy/dx if 2x2 – xy + y2 = 6',
    answer: 'dy/dx = (4x – y)/(x – 2y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Derivative',
    question_year: 2019
  },
  {
    question: 'Find dy/dx if x2 + xy – 3y2 = 10',
    answer: 'dy/dx = (2x + y)/(6y – x)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Derivative',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the vertex of the quadratic curve given by y = x2 + 6x + 10',
    answer: '(-3, 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vertex',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the vertex of the quadratic curve given by y = x2 – 8x + 12',
    answer: '(4, -4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vertex',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the vertex of the quadratic curve given by y = x2 + 6x - 1',
    answer: '(-3, -10)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vertex',
    question_year: 2019
  },
  {
    question:
      'Evaluate the trigonometric expression sin17°cos13° + sin13°cos17°',
    answer: '1/2 or 0.5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'Evaluate the trigonometric expression sin25֯sin35֯ – cos25֯cos35֯',
    answer: '-1/2 or -0.5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'Evaluate the trigonometric expression (tan32° + tan28°)/(1 – tan32°tan28°)',
    answer: '√3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: 2019
  },
  {
    question:
      'Determine the nature of the roots of the given equation without solving x2 + 5x + 7 = 0',
    answer: 'NO REAL ROOTS',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question:
      'Determine the nature of the roots of the given equation without solving x2 – 2x – 3 = 0',
    answer: '2 REAL RATIONAL ROOTS',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question:
      'Determine the nature of the roots of the given equation without solving x2 + 5x – 7 = 0',
    answer: '2 REAL IRRATIONAL ROOTS',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question:
      'Find the distance between the pair of points A(2, 4) and B(6, 7)',
    answer: '5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Distance',
    question_year: 2019
  },

  {
    question:
      'Find the distance between the pair of points C(-2, -3) and D(2, 3)',
    answer: '2√13',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Distance',
    question_year: 2019
  },
  {
    question:
      'Find the distance between the pair of points E(3, -1) and F(-2, 6)',
    answer: '√74',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Distance',
    question_year: 2019
  },
  {
    question: 'Find the quadratic equation whose roots are 3 ± √5',
    answer: 'x2 – 6x + 4 = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question: 'Find the quadratic equation whose roots are 5 ± √7',
    answer: 'x2 – 10x + 18 = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question: 'Find the quadratic equation whose roots are -4 ± 3√2',
    answer: 'x2 + 8x – 2 = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question: 'Suppose for some function f(x + 2) = 2x + 3. Evaluate f(-2)',
    answer: '-5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question: 'Suppose for some function f(x + 2) = 2x + 3. Evaluate f(2)',
    answer: '3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question: 'Suppose for some function f(x + 2) = 2x + 3. Evaluate f(5)',
    answer: '9',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question: 'Rationalize the denominator 3/(√5 - √2)',
    answer: '√5 + √2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Rationalize',
    question_year: 2019
  },
  {
    question: 'Rationalize the denominator 5/(√15 + √10)',
    answer: '√15 - √10',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Rationalize',
    question_year: 2019
  },
  {
    question: 'Rationalize the denominator 6/(√13 - √7)',
    answer: '√13 + √7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Rationalize',
    question_year: 2019
  },
  {
    question: 'Find the greatest value of (sec2x – tan2x)',
    answer: '1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Maximum',
    question_year: 2019
  },
  {
    question: 'Find the greatest value of (sinxcos30° + cosxsin30°)',
    answer: '1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Maximum',
    question_year: 2019
  },
  {
    question: 'Find the greatest value of 2sinxcosx + 5',
    answer: '6',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Maximum',
    question_year: 2019
  },
  {
    question:
      'Differentiate the given function with respect to x. y = (2x + 1)^6',
    answer: 'dy/dx = 12(2x + 1)^5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2019
  },

  {
    question:
      'Differentiate the given function with respect to x. y = (3 – 2x)^(-6)',
    answer: 'dy/dx = 12(3 – 2x)^(-7)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2019
  },
  {
    question:
      'Differentiate the given function with respect to x. y = (x^2 – 2x)^8',
    answer: 'dy/dx = 16(x – 1)(x^2 – 2x)^7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: 2019
  },
  {
    question:
      'Express the variation as an equation. y varies partly as x and partly as the inverse of x^2',
    answer: 'y = ax + b/x^2 (a and b are constants)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: 2019
  },
  {
    question:
      'Express the variation as an equation. y is partly a constant and partly varies as x^3',
    answer: 'y = a + bx^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: 2019
  },
  {
    question:
      'Express the variation as an equation. y varies jointly as x and z^2 and inversely as √w',
    answer: 'y = kxz^2/√w',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: 2019
  },
  {
    question: 'Factorise as an exact cube. x^3 – 6x^2 + 12x - 8',
    answer: '(x – 2)^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question: 'Factorise as an exact cube. x^3 + 9x^2 + 27x + 27',
    answer: '(x + 3)^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question: 'Factorise as an exact cube. x^3 + 12x^2 + 48x + 64',
    answer: '(x + 4)^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question:
      'Given the relation R = {(1, 2), (2, -3), (3, 5), (4, 7)}, find the domain of the relation',
    answer: '{1, 2, 3, 4}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Relation',
    question_year: 2019
  },
  {
    question:
      'Given the relation R = {(1, 2), (2, -3), (3, 5), (4, 7)}, find the range of the relation',
    answer: '{2, -3, 5, 7}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Relation',
    question_year: 2019
  },
  {
    question:
      'Given the relation R = {(1, 2), (2, -3), (3, 5), (4, 7)}, determine if R is a function',
    answer: 'R is a function',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Relation',
    question_year: 2019
  },
  {
    question: 'Suppose for some function f, f(x – 1) = 5x. Evaluate f(2)',
    answer: '15',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question: 'Suppose for some function f, f(x – 1) = 5x. Evaluate f(-2)',
    answer: '-5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question: 'Suppose for some function f, f(x – 1) = 5x. Evaluate f(-5)',
    answer: '-20',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: 2019
  },
  {
    question:
      'Simplify the trigonometric expression (tanx + tan3x)/(1 – tanxtan3x)',
    answer: 'tan4x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Simplify',
    question_year: 2019
  },

  {
    question:
      'Simplify the trigonometric expression (tan5x – tan2x)/(1 + tan5xtan2x)',
    answer: 'tan3x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Simplify',
    question_year: 2019
  },
  {
    question: 'Simplify the trigonometric expression (1 – tan2x)/(2tanx)',
    answer: 'cot2x or 1/tan2x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Simplify',
    question_year: 2019
  },
  {
    question:
      'Find the sum of the interior angles of the given polygon in radians duo-decagon',
    answer: '10π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: 2019
  },
  {
    question:
      'Find the sum of the interior angles of the given polygon in radians nonagon',
    answer: '7π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: 2019
  },
  {
    question:
      'Find the sum of the interior angles of the given polygon in radians icosagon',
    answer: '18π radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: 2019
  },
  {
    question:
      'Find the volume of the given figure (Leave answer in π) A cylinder of height 10cm and diameter 10 cm',
    answer: '250π cm^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Volume',
    question_year: 2019
  },
  {
    question:
      'Find the volume of the given figure (Leave answer in π) A right circular cone of base diameter 18 cm and height 20 cm',
    answer: '540π cm^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Volume',
    question_year: 2019
  },
  {
    question:
      'Find the volume of the given figure (Leave answer in π) A sphere of diameter 12 cm',
    answer: '288π cm^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Volume',
    question_year: 2019
  },
  {
    question:
      'Two fair dice are thrown. Find the probability that the positive difference of the scores is 3',
    answer: '1/6',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'Two fair dice are thrown. Find the probability that the positive difference of the scores is 4',
    answer: '1/9',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'Two fair dice are thrown. Find the probability that the positive difference of the scores is 2',
    answer: '2/9',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'Find two integers such that their mean is 15, and 2 less than the larger number is thrice the smaller number',
    answer: '7, 23',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Integers',
    question_year: 2019
  },
  {
    question:
      'Find two integers such that their mean is 25, and one number plus twice the other number is 79',
    answer: '21, 29',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Integers',
    question_year: 2019
  },
  {
    question:
      'Find two integers such that their mean is 18, and their difference is 10',
    answer: '23 and 13',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Integers',
    question_year: 2019
  },
  {
    question: 'Factorise as a difference of two squares x^2 + 6x + 9 – 4y^2',
    answer: '(x + 2y + 3)(x – 2y + 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },

  {
    question: 'Factorise as a difference of two squares 9x^2 + 6x + 1 – 25y^2',
    answer: '(3x + 5y + 1)(3x – 5y + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question:
      'Factorise as a difference of two squares x^2 – (25y^2 + 10y + 1)',
    answer: '(x + 5y + 1)(x – 5y – 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question:
      'Place two numbers between a and L such that the 4 numbers form a linear sequence given a = 12 and L = 33',
    answer: '19, 26',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question:
      'Place two numbers between a and L such that the 4 numbers form a linear sequence given a = 2, and L = 20',
    answer: '8, 14',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question:
      'Place two numbers between a and L such that the 4 numbers form a linear sequence given a = 3.4, and L = 10.3',
    answer: '5.7, 8.0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question:
      'Solve the trigonometric equation in the range 0 < x < π. Give answer in radians. tan2x = 1',
    answer: 'x = π/4, 3π/4 radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Solve the trigonometric equation in the range 0 < x < π. Give answer in radians. sin2x = 1/4',
    answer: 'x = π/6, 5π/6 radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Solve the trigonometric equation in the range 0 < x < π. Give answer in radians. cos2x = 1/2',
    answer: 'π/4, 3π/4 radians',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question: 'Solve the simultaneous equations 3x – 2y = 2 and 9x – 4y = 1',
    answer: 'x = -1, y = -5/2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Simultaneous',
    question_year: 2019
  },
  {
    question: 'Solve the simultaneous equations x – 2y = 5 and 3x + y = 8',
    answer: 'x = 3, y = -1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Simultaneous',
    question_year: 2019
  },
  {
    question: 'Solve the simultaneous equations 2x + 3y = 0 and 3x – 2y = 13',
    answer: 'x = 3 and y = -2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Simultaneous',
    question_year: 2019
  },
  {
    question: 'Factorise 9x^2 – 12x + 4 – 16y^2',
    answer: '(3x + 4y – 2)(3x – 4y - 2)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question: 'Factorise 25x^2 – 9y^2 + 6y - 1',
    answer: '(5x + 3y – 1)(5x – 3y + 1)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question: 'Factorise 4x^2 – 12x + 9 – 36y^2',
    answer: '(2x + 6y – 3)(2x – 6y – 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorise',
    question_year: 2019
  },
  {
    question: 'Express as the logarithm of a single term 5logx + 2logy – 3logz',
    answer: 'log(x^5y^2/z^3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },

  {
    question: 'Express as the logarithm of a single term 2logx + 3logy – 4logz',
    answer: 'log(x^2y^3/z^4)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },
  {
    question: 'Express as the logarithm of a single term 3loga – 2logb - logc',
    answer: 'log(a^3/b^2c)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Logarithm',
    question_year: 2019
  },
  {
    question: 'Express as a single trigonometric ratio 2sin2Acos2A',
    answer: 'sin4A',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question: 'Express as a single trigonometric ratio cos23A – sin23A',
    answer: 'cos6A',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question: 'Express as a single trigonometric ratio 2tan2A/(1 – tan22A)',
    answer: 'tan4A',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the point on the given curve at which its gradient m has the given value y = x^2 – x + 3, and m = 1',
    answer: '(1, 3)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the point on the given curve at which its gradient m has the given value y = x^2 + 2/x, and m = 0',
    answer: '(1, 3)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2019
  },
  {
    question:
      'Find the coordinates of the point on the given curve at which its gradient m has the given value y = x^2 – 2x – 15, and m = 2',
    answer: '(2, -15)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2019
  },
  {
    question:
      'If x = 2 is a root of the equation x^2 – 3x + a = 0, find a and find the other root.',
    answer: 'a = 2, and x = 1',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: 2019
  },
  {
    question:
      'If x – 2 is a factor of ax^2 – 12x + 4, find a and find the other factor.',
    answer: 'a = 5, (5x – 2)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: 2019
  },
  {
    question:
      'If one root of the equation x^2 + ax – 5 = 0 is x = 5, find a and find the other root.',
    answer: 'a = -4, and x = -1',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: 2019
  },
  {
    question:
      'Find the value of x if the following are consecutive terms of an exponential sequence. 3, 3x, 12x',
    answer: 'x = 4',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Exponential',
    question_year: 2019
  },
  {
    question:
      'Find the value of x if the following are consecutive terms of an exponential sequence. 60x, 10x, 5',
    answer: 'x = 5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Exponential',
    question_year: 2019
  },
  {
    question:
      'Find the value of x if the following are consecutive terms of an exponential sequence. 10x, 2x, 2',
    answer: 'x = 5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Exponential',
    question_year: 2019
  },
  {
    question: 'Find the inverse of the given function y = (x + 2)/(x – 1)',
    answer: 'y = (x + 2)/(x - 1)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Inverse',
    question_year: 2019
  },

  {
    question: 'Find the inverse of the given function y = (x – 1)/(x - 2)',
    answer: 'y = (2x – 1)/(x – 1)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Inverse',
    question_year: 2019
  },
  {
    question: 'Find the inverse of the given function y = x/(x + 3)',
    answer: 'y = -3x/(x – 1)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Inverse',
    question_year: 2019
  },
  {
    question:
      'A car traveled from A to B at 100 km/hr for 3 hrs and from B to A at 60 km/hr for 5 hrs. Assume there is no stopping. Find the distance of the round trip from A to B and back to A.',
    answer: '600 km',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Rates',
    question_year: 2019
  },
  {
    question:
      'A car traveled from A to B at 100 km/hr for 3 hrs and from B to A at 60 km/hr for 5 hrs. Assume there is no stopping. Find the average speed for the round trip.',
    answer: '75 km/hr',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Rates',
    question_year: 2019
  },
  {
    question:
      'A car traveled from A to B at 100 km/hr for 3 hrs and from B to A at 60 km/hr for 5 hrs. Assume there is no stopping. Find the times when the car is midway between A and B.',
    answer: 'After 1½ hrs and 5½ hrs',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Rates',
    question_year: 2019
  },
  {
    question:
      'Place 3 numbers between the numbers a and L such that the five numbers form a linear sequence a = 3, and L = 23',
    answer: '8, 13, 18',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question:
      'Place 3 numbers between the numbers a and L such that the five numbers form a linear sequence a = 7 and L = 67',
    answer: '22, 37, 52',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question:
      'Place 3 numbers between the numbers a and L such that the five numbers form a linear sequence a = 28 and L = 4',
    answer: '22, 16, 10',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question: 'Solve for x from the given equation 3/x = 2/a + 5/b',
    answer: 'x = 3ab/(5a + 2b)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question: 'Solve for x from the given equation 5/a = 4/x – 3/b',
    answer: 'x = 4ab/(5b + 3a)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question: 'Solve for x from the given equation a/b = x/c + d',
    answer: 'x = c(a – bd)/b',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: 2019
  },
  {
    question: 'Express in partial fractions (2x + 1)/(x + 1)',
    answer: '2 – 1/(x + 1)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Partial Fractions',
    question_year: 2019
  },
  {
    question: 'Express in partial fractions (3x – 2)/(x - 2)',
    answer: '3 + 4/(x – 2)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Partial Fractions',
    question_year: 2019
  },
  {
    question: 'Express in partial fractions (2x + 5)/(2x – 1)',
    answer: '1 + 6/(2x – 1)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Partial Fractions',
    question_year: 2019
  },
  {
    question:
      'If α and β are the roots of x^2 + 5x + 3 = 0, evaluate α^2 + β^2',
    answer: '19',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: 2019
  },

  {
    question:
      'If α and β are the roots of x^2 + 5x + 3 = 0, evaluate 1/α + 1/β',
    answer: '-5/3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: 2019
  },
  {
    question:
      'If α and β are the roots of x^2 + 5x + 3 = 0, evaluate α^2β + β^2α',
    answer: '-15',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: 2019
  },
  {
    question:
      'Determine if the pair of lines are perpendicular, or parallel or neither. x + 3y = 5, x – 3y = 5',
    answer: 'NEITHER PARALLEL NOR PERPENDICULAR',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Line',
    question_year: 2019
  },
  {
    question:
      'Determine if the pair of lines are perpendicular, or parallel or neither. x - 2y = 2, 2x + y = 3',
    answer: 'PERPENDICULAR',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Line',
    question_year: 2019
  },
  {
    question:
      'Determine if the pair of lines are perpendicular, or parallel or neither. 2x + 3y = 5, 6y = - 4x + 20',
    answer: 'PARALLEL',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Line',
    question_year: 2019
  },
  {
    question:
      'Given that sinA = 5/13 and cosB = 3/5, and A and B are acute angles, evaluate sin2B',
    answer: '24/25',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Given that sinA = 5/13 and cosB = 3/5, and A and B are acute angles, evaluate cos2A',
    answer: '119/169',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Given that sinA = 5/13 and cosB = 3/5, and A and B are acute angles, evaluate sin(A + B)',
    answer: '63/65',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'In a rhombus, find the length of a side if the diagonals have lengths respectively 18 cm and 24 cm',
    answer: '15 cm',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'In a rhombus, find the length of a side if the diagonals have lengths respectively 12 cm and 12√3 cm',
    answer: '12 cm',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'In a rhombus, find the length of a side if the diagonals have lengths respectively 10 cm and 20 cm',
    answer: '5√5 cm',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'Find the value(s) of x if the vectors a = 3i + xj and b = xi + 9j are parallel',
    answer: 'x = ± 3√3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: 2019
  },
  {
    question:
      'Find the value(s) of x if the vectors a = 4xi – 2j and b = 3i + 6j are perpendicular',
    answer: 'x = 1',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: 2019
  },
  {
    question:
      'Find the value(s) of x if the vectors a = 2i + j and b = xi - 3j are parallel',
    answer: 'x = - 6',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: 2019
  },
  {
    question: 'Solve the logarithmic equation 2logx – log4 = log(x + 8)',
    answer: 'x = 8',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Logarithmic',
    question_year: 2019
  },

  {
    question: 'Solve the logarithmic equation 3logx = logx + log(5x – 6)',
    answer: 'x = 2, 3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question: 'Solve the logarithmic equation log4x + logx = log64',
    answer: 'x = 4',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: 2019
  },
  {
    question:
      'Find two numbers between the given pair of numbers such that the four numbers form a linear sequence 3√7 and 15√7',
    answer: '7√7, 11√7',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Find two numbers between the given pair of numbers such that the four numbers form a linear sequence 5 and (20 + 6√3)',
    answer: '10 + 2√3, 15 + 4√3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Find two numbers between the given pair of numbers such that the four numbers form a linear sequence (7 - 3√2) and (13 + 3√2)',
    answer: '9 - √2 and 11+√2',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Find the measure of the interior angle in radians of a regular polygon of 12 sides',
    answer: '5π/6 radians',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Rate',
    question_year: 2019
  },
  {
    question:
      'Find the measure of the interior angle in radians of a regular polygon of 18 sides',
    answer: '8π/9 radians',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Rate',
    question_year: 2019
  },
  {
    question:
      'Find the measure of the interior angle in radians of a regular polygon of 24 sides',
    answer: '11π/12 radians',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Rate',
    question_year: 2019
  },
  {
    question:
      'Express the given expression in terms of a and b where a = logx and b = logy. log(x^2y^3)',
    answer: '2a + 3b',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'Express the given expression in terms of a and b where a = logx and b = logy. log(y^3√x)',
    answer: '3b + ½ a',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'Express the given expression in terms of a and b where a = logx and b = logy. log(x/√y)',
    answer: 'a – ½ b',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question: 'List the set of integers n for which 2n^2 – 13n + 15 < 0',
    answer: '{2, 3, 4}',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: 2019
  },
  {
    question: 'List the set of integers n for which 3n^2 - 4n – 4 < 0',
    answer: '{0, 1}',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: 2019
  },
  {
    question: 'List the set of integers n for which 3n^2 – 4n – 15 < 0',
    answer: '{-1, 0, 1, 2}',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: 2019
  },
  {
    question:
      'Kofi can do a job in 10 hours and Kwame can do the same job in 15 hours. If they work together how long will it take them to complete the job?',
    answer: '6 HOURS',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },

  {
    question:
      'A painter can paint a house in 6 hours. If his assistant helps him, they will take 4 hours to paint the same house. How long will the assistant working alone take to paint the same house?',
    answer: '12 HOURS',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Kwame can weed a farm in 30 hours. If Owusu helps him, they take 12 hours to weed the farm. How long will Owusu working alone take to weed the same farm?',
    answer: '20 HOURS',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'A bag contains 6 black balls and 4 white balls. Two balls are drawn from the bag without replacement. Find the probability that the balls are both black.',
    answer: '1/3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'A bag contains 6 black balls and 4 white balls. Two balls are drawn from the bag without replacement. Find the probability that the balls are both white',
    answer: '2/15',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'A bag contains 6 black balls and 4 white balls. Two balls are drawn from the bag without replacement. Find the probability that the balls are of different colors.',
    answer: '8/15',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Find the value of a given that f(x) = 2x^3 + ax^2 – 5x + 2 is exactly divisible by (x + 1)',
    answer: 'a = -5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Find the value of a given that f(x) = x^3 – ax^2 + 5x + 3 leaves a remainder of 5 on division by (x + 1)',
    answer: 'a = -8',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Find the value of a given that f(x) = 4x^3 + 3x^2 – ax + 4 leaves a remainder of – 2 on division by (x + 1)',
    answer: 'a = -5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'The sum of two integers is S and their product is P. Find the two integers if S = 17 and P = 72',
    answer: '8 and 9',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'The sum of two integers is S and their product is P. Find the two integers if S = 33 and P = 230',
    answer: '10 and 23',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'The sum of two integers is S and their product is P. Find the two integers if S = 22 and P = 105',
    answer: '15 and 7',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'How many liters of a 70% alcohol solution must be added to 30 liters of a 20% alcohol solution to obtain a 40% alcohol solution?',
    answer: '20 LITERS',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'How many liters of water must be added to 50L of a 20% salt solution to obtain a 10% salt solution?',
    answer: '50 LITERS',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'How many liters of water must be evaporated from 40L of a 15% salt solution in order to obtain a 30% salt solution?',
    answer: '20 LITERS',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'The cost of an item is GHc1800. The markup was 40% of the selling price. Find the selling price',
    answer: 'GHc3000',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: 2019
  },

  {
    question:
      'An item is sold for GHc780. The markup was 30% of the cost price. Find the cost price.',
    answer: 'GHc600',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: 2019
  },
  {
    question:
      'An item is sold for GHc1680 with a markup of 40% of the cost price. Find the cost price.',
    answer: 'GHc1200',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: 2019
  },
  {
    question:
      'Find the radius of a sphere (in cm) if its volume is numerically 4 times its surface area.',
    answer: '12 cm',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Arithmetic',
    question_year: 2019
  },
  {
    question:
      'Find the radius of a solid right circular cylinder (in cm) if its volume is numerically twice its curved surface area.',
    answer: '4 cm',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Arithmetic',
    question_year: 2019
  },
  {
    question:
      'The area of a circle is numerically 4 times the circumference of the circle. Find its radius (in cm).',
    answer: '8 cm',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Arithmetic',
    question_year: 2019
  },
  {
    question:
      'Solve the trigonometric equation for the interval 0 < x < π. Give answer in radians sin2x = 3/4',
    answer: 'x = π/3, 2π/3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Solve the trigonometric equation for the interval 0 < x < π. Give answer in radians cos2x = 1/4',
    answer: 'x = π/3, 2π/3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Solve the trigonometric equation for the interval 0 < x < π. Give answer in radians tan2x = 1/3',
    answer: 'x = π/6, 5π/6',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question: 'Find the term without x in the expansion of (x + 1/x^2)^6',
    answer: '15',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question: 'Find the term without x in the expansion of (x^2 + 1/x)^9',
    answer: '84',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question: 'Find the term without x in the expansion of (x + 1/x)^8',
    answer: '70',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'A man is 18 times as old as his son. In 15 years’ time, he will be 3 times as old as his son. Find their present ages.',
    answer: 'man 36 years, son 2 years',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: 2019
  },
  {
    question:
      'The difference in ages of two men is 5. In 2 years’ time, the sum of their ages will be 55. Find their current ages',
    answer: '28 years and 23 years',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'A boy is 4 years older than his sister. Five years ago, the sum of their ages was 20. Find their present ages',
    answer: '17 years and 13 years',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },
  {
    question:
      'Find an equation of the perpendicular bisector of the line segment joining the points A and B given A(1, 3) and B(3, 1)',
    answer: 'y = x',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Trigonometric',
    question_year: 2019
  },

  {
    question:
      'Find an equation of the perpendicular bisector of the line segment joining the points A and B given A(-1, 1) and B(1, 3)',
    answer: 'y = -x + 2',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Find an equation of the perpendicular bisector of the line segment joining the points A and B given A(2, 6) and B(4, 4)',
    answer: 'y = x + 2',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question: 'Find dy/dx from the implicit equation x^3 + 3x^2y - y^3 = 10',
    answer: 'dy/dx = (x^2 + 2xy)/(y^2 - x^2)',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2019
  },
  {
    question: 'Find dy/dx from the implicit equation x^3 - 2xy + 2y^3 = 15',
    answer: 'dy/dx = (3x^2 - 2y)/(2x - 6y^2)',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2019
  },
  {
    question: 'Find dy/dx from the implicit equation 2x^3 + xy - 3y^2 = 18',
    answer: 'dy/dx = (6x^2 + y)/(6y - x)',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: 2019
  },
  {
    question:
      'Solve for x and y from the given proportions (3x - y)/15 = (y - 6)/10 = 3/5',
    answer: 'x = 7, y = 12',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Solve for x and y from the given proportions (x + y)/8 = (x - y + 5)/4 = 1/4',
    answer: 'x = -1, y = 3',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'Solve for x and y from the given proportions (x + y - 3)/6 = (x - y + 3)/3 = 2/3',
    answer: 'x = 3, y = 4',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: 2019
  },
  {
    question:
      'A and B are events in a sample space S. Find P(AUB) given P(A) = 0.9 and P(B) = 0.6 and A and B are independent.',
    answer: '0.96',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'A and B are events in a sample space S. Find P(AUB) given P(A) = 0.9, P(B) = 0.6 and P(A∩B) = 0.5.',
    answer: '1',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question:
      'A and B are events in a sample space S. Find P(A∩B) given P(A) = 0.8, P(B) = 0.6, and P(AUB) = 0.9',
    answer: '0.5',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: 2019
  },
  {
    question: 'Solve the given equation x^4 - 14x^2 + 45 = 0',
    answer: 'x = ±3, ±√5',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Equations',
    question_year: 2019
  },
  {
    question: 'Solve the given equation x^4 - 13x^2 + 36 = 0',
    answer: 'x = ±2, ±3',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Equations',
    question_year: 2019
  },
  {
    question: 'Solve the given equation x^4 - 29x^2 + 100 = 0',
    answer: 'x = ±2, ±5',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Equations',
    question_year: 2019
  },
  {
    question:
      'For the point A(3, -5), find the coordinates of the corresponding point symmetric with respect to the x-axis',
    answer: '(3, 5)',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Coordinates',
    question_year: 2019
  },

  {
    question:
      'For the point A(3, -5), find the coordinates of the corresponding point symmetric with respect to the y-axis',
    answer: '(-3, -5)',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Coordinates',
    question_year: 2019
  },
  {
    question:
      'For the point A(3, -5), find the coordinates of the corresponding point symmetric with respect to the origin',
    answer: '(-3, 5)',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Coordinates',
    question_year: 2019
  },
  {
    question:
      'Express the repeating decimal as an infinite exponential series and hence express it as a rational number. 0.5555...',
    answer: '5/9',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Decimals',
    question_year: 2019
  },
  {
    question:
      'Express the repeating decimal as an infinite exponential series and hence express it as a rational number. 3.3333...',
    answer: '10/3',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Decimals',
    question_year: 2019
  },
  {
    question:
      'Express the repeating decimal as an infinite exponential series and hence express it as a rational number. 77.7777...',
    answer: '700/9',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Decimals',
    question_year: 2019
  },
  {
    question: 'Simplify the rational expression (8a^3 + 27b^3)/(2a + 3b)',
    answer: '4a^2 - 6ab + 9b^2',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: 2019
  },
  {
    question: 'Simplify the rational expression (125x^3 - 8y^3)/(5x - 2y)',
    answer: '25x^2 + 10xy + 4y^2',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: 2019
  },
  {
    question: 'Simplify the rational expression (64a^3 + 27b^3)/(4a + 3b)',
    answer: '16a^2 - 12ab + 9b^2',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: 2019
  },
  {
    question:
      'A bag contains 7 white balls, 5 black balls and 8 red balls. Three balls are randomly drawn from the bag without replacement. Find the probability that two balls are black and one ball white',
    answer: '7/114',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2019
  },
  {
    question:
      'A bag contains 7 white balls, 5 black balls and 8 red balls. Three balls are randomly drawn from the bag without replacement. Find the probability that two balls are white and one ball red',
    answer: '14/95',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2019
  },
  {
    question:
      'A bag contains 7 white balls, 5 black balls and 8 red balls. Three balls are randomly drawn from the bag without replacement. Find the probability that two balls are red and one black',
    answer: '7/57',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: 2019
  },
  {
    question:
      'Find the domain of the given function f(x) = (x + 2)/(x^2 - 2x - 15)',
    answer: '{x : x ≠ 5, -3}',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: 2019
  },
  {
    question:
      'Find the domain of the given function f(x) = (2x^2 + 1)/(3x^2 - 2x - 5)',
    answer: '{x : x ≠ -1, 5/3}',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: 2019
  },
  {
    question:
      'Find the domain of the given function f(x) = (x^3 + 8)/(2x^2 - 3x - 9)',
    answer: '{x : x ≠ 3, -3/2}',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: 2019
  },
  {
    question:
      'When a number is decreased by 30%, the result is 280. Find the number.',
    answer: '400',
    difficulty_level: 'Finals',
    subject_name: 'Maths',
    topic: 'Percentages',
    question_year: 2019
  },

  {
    question:
      'Given the relation R = {(1, 2), (2, 2), (2, 4), (3, 3), (3, 5)}, find the domain A and the range B of R. Determine if R is a function.',
    answer: 'ANSWER: A = {1, 2, 3}, B = {2, 3, 4, 5}, R is not a function.',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Sets',
    question_year: '2019'
  },
  {
    question: 'Factorise (x + 1)^3 + 1',
    answer: 'ANSWER: (x + 2)(x^2 + x + 1)',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: '2019'
  },
  {
    question:
      'Find two natural numbers with a mean of 25 and such that one number increased by 1 is twice the other number.',
    answer: '17 and 33',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question:
      'Solve for x from the linear equation 5(2x + 4) - 3(4x - 6) = 2(20 - x).',
    answer: 'NO SOLUTION',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question:
      'Determine if the pair of lines 6x – 4y = 5 and 8y – 12x = 5 are parallel, perpendicular or neither',
    answer: 'PARALLEL [y = 6x/4 – 5/4, y = 12x/8 + 5/8, same slope 3/2]',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2019'
  },
  {
    question:
      'Find the number of sides of a regular polygon if an exterior angle measures π/15 radians.',
    answer: '30',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2019'
  },
  {
    question:
      'A fair coin is tossed once. Find the probability of obtaining an even number of Heads',
    answer: '½ or 0.5',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2019'
  },
  {
    question: 'Evaluate 10C5 (10 combination 5)',
    answer:
      '252 [10!/5!5! = (10 x 9 x 8 x 7 x 6)/(5 x 4 x 3 x 2 x 1) = 28 x 9 = 252]',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: '2019'
  },
  {
    question: 'If f(x – 3) = 2x + 5, evaluate f(- 4)',
    answer: '3 [x – 3 = - 4, x = -1, f(-4) = 2(-1) + 5 = 3]',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Functions',
    question_year: '2019'
  },
  {
    question:
      'Solve the trigonometric equation sinx = ½ for 0 < x < π. Leave answer in radians.',
    answer:
      'x = π/6, 5π/6 radians [sinx = ± 1/2, sinx = ½ gives x = π/6, 5π/6 and sinx = -1/2 gives no solution]',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Solve the equation x + 3/x = 4',
    answer: 'x = 1, 3 [x^2 – 4x + 3 = 0, (x – 3)(x – 1) = 0, x = 3, 1]',
    difficulty_level: 'Semi Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question:
      'Find x if (x – 1), (x + 1) and (x + 5) are consecutive terms of an exponential sequence.',
    answer:
      'x = 3 [(x + 1)^2 = (x – 1)(x + 5), 2x + 1 = 4x – 5, 2x = 6, x = 3]',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Series and Sequence',
    question_year: '2019'
  },
  {
    question: 'Differentiate y = 5x^2 – 4/x^2',
    answer: 'dy/dx = 10x + 8/x^3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2019'
  },
  {
    question: 'Solve for a from the equation log(3 + a) = log(4b – 1)',
    answer: 'a = 4b – 4 [3 + a = 4b – 1, a = 4b – 4]',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Logarithms',
    question_year: '2019'
  },
  {
    question:
      'Find the area of a triangle with sides of lengths 15 cm and 12 cm and an included angle of measure 30֯.',
    answer: '45 cm2 [½ x 15 x 12 x ½ = 15 x 3 = 45 cm2]',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2019'
  },

  {
    question: 'Solve for x from the equation 2/(x + 3) = 3/(2x + 2)',
    answer: 'x = 5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question:
      'Find the set of values of k for which the equation x^2 + 10x + k^2 = 0 has two distinct real roots.',
    answer: '{k : - 5 < k < 5}',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Inequalities',
    question_year: '2019'
  },
  {
    question:
      'Given that a sequence Un is defined by Un + 1 = 2Un + 3 and Un = U1 for all positive integers n, find U1.',
    answer: 'U1 = -3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Series and Sequence',
    question_year: '2019'
  },
  {
    question: 'Evaluate cos120֯',
    answer: '-1/2 or -0.5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Evaluate antilog(log4.57)',
    answer: '4.57',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Simplify (2x^2 + 17x + 35)/(2x + 7)',
    answer: 'x + 5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question:
      'Find the value of x if the terms 4x, (2x – 3), and x are consecutive terms of an exponential sequence.',
    answer: 'x = 3/4',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question: 'Simplify (4√x + 5√y)(4√x - 5√y)',
    answer: '16x – 25y',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question: 'Find x given √(12x + 3) - 3√(2x) = 0',
    answer: 'x = ½',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Algebra',
    question_year: '2019'
  },
  {
    question:
      'Find the sum of the interior angles of a polygon of 15 sides. Give the answer in radians.',
    answer: '13π radians',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2019'
  },
  {
    question: 'Solve for x given 5sinx + 3 = 0 for 0 < x < π',
    answer: 'NO SOLUTION',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question:
      'Find the range of values of k if the equation x^2 – 3x + k = 0 has no real roots.',
    answer: '{k : k > 9/4}',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: '2019'
  },
  {
    question:
      'Find the equation of the tangent to the curve y = x^2 – 3x + 2 at the point on the curve at which x =',
    answer: 'y = x - 2',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Calculus',
    question_year: '2019'
  },
  {
    question:
      'Given that a sequence is defined by Un + 2 = Un + 1 + Un, U1 = 2, U2 = 3, find U3.',
    answer: '5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Series and Sequence',
    question_year: '2019'
  },
  {
    question:
      'Find the coordinates of the point on the curve y = 1/x^2 at which the gradient is ¼.',
    answer: '(-2, ¼)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Gradient',
    question_year: '2019'
  },

  {
    question: 'Evaluate cos81֯cos21֯ + sin81֯sin21֯',
    answer: '½ or 0.5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Evaluate 10P3 [10 permutation 3]',
    answer: '720',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Permutations',
    question_year: '2019'
  },
  {
    question:
      'Translate the exponential equation 10x = 725 into an equivalent logarithmic equation',
    answer: 'x = log725',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Logarithmic',
    question_year: '2019'
  },
  {
    question: 'If f(x + 2) = x^2, evaluate f(5)',
    answer: '9',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Function',
    question_year: '2019'
  },
  {
    question: 'Simplify (x^2 – 5x – 24)/(x – 8)',
    answer: '(x + 3)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: '2019'
  },
  {
    question: 'Solve for x given 125x + 1 = 1/25',
    answer: 'x = -5/3',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: '2019'
  },
  {
    question:
      'Find the solution set for the quadratic inequality x^2 + 3x – 4 < 0',
    answer: '{x : -4 < x < 1}',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: '2019'
  },
  {
    question:
      'If the vectors a = 2i + 3j and b = 3xi + 10j are perpendicular, find the value of x',
    answer: 'x = -5',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: '2019'
  },
  {
    question:
      'Find the number of sides of a regular polygon if an interior angle has measure 178֯',
    answer: '180 sides',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Factor',
    question_year: '2019'
  },
  {
    question: 'Determine if (x – 3) is a factor of f(x) = x^4 – 2x^3 - 27',
    answer: '(x – 3) is a factor of f(x)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: '2019'
  },
  {
    question: 'Solve for x from the equation (ax – b)/(cx + d) = 3',
    answer: 'x = (b + 3d)/(a – 3c)',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2019'
  },
  {
    question: 'Find the next prime after 151',
    answer: '157',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Geometry',
    question_year: '2019'
  },
  {
    question:
      'A fair die is tossed. Find the probability of obtaining an odd number given that the number rolled is 3.',
    answer: '1',
    difficulty_level: 'Quarter Finals',
    subject_name: 'Maths',
    topic: 'Complex',
    question_year: '2019'
  },
  {
    question: 'Find the diameter of the circle with equation x^2 + y^2 = 16',
    answer: '8',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Inequality',
    question_year: '2019'
  },
  {
    question: 'Given that i^2 = -1, evaluate (3 – 5i)(5 + 3i)',
    answer: '30 – 16i',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2019'
  },

  {
    question:
      'Find the solution set of the linear inequality 8 – 2(2x + 1) < 2x - 3',
    answer: '{x : x > 3/2}',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: '2019'
  },
  {
    question: 'Solve for x given 322x + 1 = 128',
    answer: 'x = 1/5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factor',
    question_year: '2019'
  },
  {
    question:
      'Translate the exponential equation xa = yb into a logarithmic equation',
    answer: 'alogx = blogy',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Rational',
    question_year: '2019'
  },
  {
    question:
      'Find the value of x if x + 3, 2x, and x – 7 are consecutive terms of a linear sequence',
    answer: 'x = -2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: '2019'
  },
  {
    question: 'Solve the quadratic equation 5x^2 + 3x – 2 = 0',
    answer: 'x = -1, 2/5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: '2019'
  },
  {
    question:
      'If the angles of a quadrilateral measure (x + 25)°, (2x – 25)°, (x + 30)°, (2x)° in degrees, find the value of x',
    answer: 'x = 55',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadrilateral',
    question_year: '2019'
  },
  {
    question:
      'Find the value of x if (x – 2), (2x + 2), (x + 12) are consecutive terms of a linear sequence',
    answer: 'x = 3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: '2019'
  },
  {
    question:
      'Find the coordinates of the image of the point P(2, 5) after reflection in the line y = 6',
    answer: '(2, 7)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: '2019'
  },
  {
    question: 'Find the term without x in the expansion of (x^2 + 1/x)^9',
    answer: '84',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Expansion',
    question_year: '2019'
  },
  {
    question:
      'Find the midpoint of the line segment connecting the points A(1/2, 1/3) and B(1/3, 1/2)',
    answer: '(5/12, 5/12)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Midpoint',
    question_year: '2019'
  },
  {
    question: 'Solve the linear equation 2(7x – 4) – 4(2x – 6) = 3x + 31',
    answer: 'x = 5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Linear',
    question_year: '2019'
  },
  {
    question: 'Multiply and simplify (x + 2)(x^2 – 2x + 4)',
    answer: 'x^3 + 8',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: '2019'
  },
  {
    question:
      'Find x if the vectors a = xi – 3j and b = 5i + 10j are perpendicular',
    answer: 'x = 6',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Vectors',
    question_year: '2019'
  },
  {
    question:
      'Find the stationary point of the function y = (x – 2)^2 + 1 and state whether a maximum or a minimum',
    answer: '(2, 1) minimum',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Maximum/Minimum',
    question_year: '2019'
  },
  {
    question: 'Simplify (1 + √3)/(1 – √3)',
    answer: '-(2 + √3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Fractions',
    question_year: '2019'
  },

  {
    question: 'If A is acute and cosA = 12/13, find tanA',
    answer: '5/12',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Solve the exponential equation 62x – 1 = 216',
    answer: 'x = 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponential',
    question_year: '2019'
  },
  {
    question: 'Find the coefficient of x^3 in the expansion of (1 + 2x)^6',
    answer: '160',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Coefficient',
    question_year: '2019'
  },
  {
    question: 'Solve the equation sinx = √3/2 in the interval 90° < x < 180°',
    answer: 'x = 120°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question:
      'Find the coordinates of the image of the point A(2, -3) after reflection in the x-axis',
    answer: '(2, 3)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: '2019'
  },
  {
    question:
      'For what values of k will the equation kx^2 + 4x – k = 0 have real roots?',
    answer: 'All real values of k',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: '2019'
  },
  {
    question:
      'Express a relation between x and y if x and y are degree measures of adjacent angles of a parallelogram',
    answer: 'x + y = 180 (Accept x + y = 180°)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Relation',
    question_year: '2019'
  },
  {
    question:
      'Two fair coins are tossed once. Find the probability of obtaining an even number of heads',
    answer: '½',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2019'
  },
  {
    question: 'Differentiate the function y = (2x^3 – 3x^2)^4',
    answer: 'dy/dx = 24(x^2 – x)(2x^3 – 3x^2)^3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Differentiation',
    question_year: '2019'
  },
  {
    question: 'Multiply and simplify (x - 3)(x^2 + 3x + 9)',
    answer: 'x^3 – 27 (difference of two cubes)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polynomials',
    question_year: '2019'
  },
  {
    question:
      'Find an equation of a line having an x-intercept of 4 and a y-intercept of -4',
    answer: 'x – y = 4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Line',
    question_year: '2019'
  },
  {
    question: 'If i^2 = -1, evaluate (5 – 3i)(5 + 3i',
    answer: '34',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Complex',
    question_year: '2019'
  },
  {
    question: 'Find the prime numbers between 80 and 90',
    answer: '83, 89',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Primes',
    question_year: '2019'
  },
  {
    question:
      'Find the equation of the image of the line y = 2x after reflection in the y-axis',
    answer: 'y = -2x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Reflection',
    question_year: '2019'
  },
  {
    question:
      'A fair die is thrown. Find the probability of getting a multiple of 2 or a multiple of 3',
    answer: '2/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2019'
  },

  {
    question: 'Find n if 123n = 3810',
    answer: 'n = 5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponents',
    question_year: '2019'
  },
  {
    question: 'Find the greatest value of the expression 3sinx + 4cosx',
    answer: '5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Rationalize the denominator 3/(√5 - √2)',
    answer: '√5 + √2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Surds',
    question_year: '2019'
  },
  {
    question: 'Solve the quadratic equation 4x^2 + x – 5 = 0',
    answer: 'x = 1, -5/4',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: '2019'
  },
  {
    question:
      'Find the first term a and the common difference d, of a linear sequence given the third term is 7 and the seventh term is 15.',
    answer: 'a = 3, d = 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Series and sequence',
    question_year: '2019'
  },
  {
    question: 'Solve the equation tanx = √3 in the interval 90° < x < 180°.',
    answer: 'NO SOLUTION',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Evaluate 10C4',
    answer: '210',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: '2019'
  },
  {
    question:
      'Find the number of sides of a regular polygon if an interior angle measures 174°.',
    answer: '60 sides',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: '2019'
  },
  {
    question:
      'Express the repeating decimal 3.02222 . . . as a fraction in simplest form',
    answer: '136/45',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Fraction',
    question_year: '2019'
  },
  {
    question: 'Factorize 6x^2 – xy – 12y^2',
    answer: '(3x + 4y)(2x – 3y)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Factorization',
    question_year: '2019'
  },
  {
    question:
      'If a, b, c are the degree measures of angles in an equilateral triangle, find a relation between a, b, c.',
    answer: 'a = b = c = 60°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equilateral',
    question_year: '2019'
  },
  {
    question:
      'If a, b, c are the degree measures of the interior angles of a triangle, find a relation between a, b, c.',
    answer: 'a + b + c = 180°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Triangle',
    question_year: '2019'
  },
  {
    question:
      'If a, b are the degree measures of the non-congruent angles of an isosceles trapezium, find a relation between a and b.',
    answer: 'a + b = 180°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trapezium',
    question_year: '2019'
  },
  {
    question:
      'Find the coordinates of the intercepts of the curve x^2/9 – y^2/16 = 1 on the axes.',
    answer: '(3, 0), (-3, 0)',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Intercepts',
    question_year: '2019'
  },
  {
    question: 'Find a natural number n such that 123n = 6610',
    answer: 'n = 7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Exponent',
    question_year: '2019'
  },

  {
    question: 'Find the sum of the first 20 even natural numbers',
    answer: '420',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sum',
    question_year: '2019'
  },
  {
    question:
      'Find an equation of variation if y varies jointly as x and z and y = 112 when x = 7 and z = 8.',
    answer: 'y = 2xz',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Variation',
    question_year: '2019'
  },
  {
    question: 'Evaluate 0.095/10^-2',
    answer: '9.5',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Evaluation',
    question_year: '2019'
  },
  {
    question: 'Find the next term in the sequence 1, 27, 125, 343, . . .',
    answer: '729',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequence',
    question_year: '2019'
  },
  {
    question:
      'A bicycle wheel has 18 spokes. Find the measure of the angle between adjacent spokes',
    answer: '20°',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Wheel',
    question_year: '2019'
  },
  {
    question:
      'Find the total surface area of a solid cube if a side has a length of 20 cm.',
    answer: '2400 cm2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Cube',
    question_year: '2019'
  },
  {
    question:
      'Find the number of digits when the decimal number 70 is expressed as a binary number',
    answer: '7',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Binary',
    question_year: '2019'
  },
  {
    question:
      'The general term of a sequence is Un = 3 – 2n. Find the sum of the first 20 terms.',
    answer: '-360',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequence',
    question_year: '2019'
  },
  {
    question: 'Given that sinx = a/b and x is acute, find cos(π/2 – x).',
    answer: 'a/b',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Solve for x from the equation 125x = 625',
    answer: 'x = 4/3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Equation',
    question_year: '2019'
  },
  {
    question: 'Express the decimal number 19510 as a number in base 7.',
    answer: '3667',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Base',
    question_year: '2019'
  },
  {
    question:
      'Find the quadratic equation the sum of whose root is 10 and the product is -7',
    answer: 'x^2 - 10x - 7 = 0',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Quadratic',
    question_year: '2019'
  },
  {
    question: 'Find the term without x in the expansion of (x + 1/x)8',
    answer: '56',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Expansion',
    question_year: '2019'
  },
  {
    question: 'Find the value of (tan87° + tan33°)/(1 – tan87° tan33°)',
    answer: '-√3',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question: 'Find a natural number n such that the number nnn3 = 2610',
    answer: 'n = 2',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Natural',
    question_year: '2019'
  },

  {
    question:
      'A fair coin is tossed three times. Find the probability of obtaining an even number of heads',
    answer: '½',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Probability',
    question_year: '2019'
  },
  {
    question:
      'Evaluate the trigonometric expression cos33°cos27° – sin33°sin27°',
    answer: '½',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question:
      'Identify the polygon if in its regular form an interior angle has measure 5π/6 radians',
    answer: 'duo-decagon',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: '2019'
  },
  {
    question: 'Evaluate the expression (tan87° – tan42°)/(1 + tan87°tan42°)',
    answer: '1',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },
  {
    question:
      'Find the general term Un of the linear sequence, -5, - 2, 1, 4, 7, . . .',
    answer: 'Un = 3n - 8',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Sequence',
    question_year: '2019'
  },
  {
    question:
      'Find the number of sides of a regular polygon if an exterior angle has measure π/12 radians',
    answer: '24',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Polygon',
    question_year: '2019'
  },
  {
    question: 'Evaluate 10C7 (10 combination 7)',
    answer: '120',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Combinations',
    question_year: '2019'
  },
  {
    question: 'Simplify (tan3x + tanx)/(1 – tan3xtanx)',
    answer: 'tan4x',
    difficulty_level: '1/8TH',
    subject_name: 'Maths',
    topic: 'Trigonometry',
    question_year: '2019'
  },

  {
    question:
      'Consider the second Period from lithium to neon. Which letters appear more than once in the symbols of the elements in that Period?',
    answer: 'e, B, N',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question:
      'Consider the Group 1 elements in the Periodic Table. Which of the letters appear more than once in the symbols of the elements in the Group?',
    answer: 'letter i',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question:
      'Which elements in the following list are not transition metals: Indium (Group III or 13); Thallium (Group III or 13)',
    answer: 'Indium, Thallium',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question:
      'From the named pair of half-cells, give the cell reaction of a possible voltaic cell that can be set up and the initial emf of the cell. Mg2+/Mg, -2.38 V; Al3+/Al, -1.66 V',
    answer: 'Cell reaction: 3Mg + 2Al3+ -> 3Mg2+ + 2Al\nEmf = 0.72 V',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2017
  },
  {
    question:
      '200 cm3 of 0.45 mol/dm3 HCl solution are added to 300 cm3 of 0.25 mol/dm3 of NaOH solution. Calculate the concentration of the chloride ions in solution.',
    answer: '0.18 mol/dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'A hexahydrate salt has a molar mass of 185. Calculate the molar mass of the anhydrous salt.',
    answer: 'Mass of the anhydrous salt = 77 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question: 'What is the simplest chemical test for an organic ester?',
    answer:
      'Warm a mixture of the ester and aqueous KOH or NaOH. The sweet smell of the ester disappears',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'If one were drawing a graph of the first ionization potentials against atomic numbers for the elements in the second Period a smooth curve will be obtained with two values lying well above the curve. Name any one of the two elements and give the reason for the larger than expected values.',
    answer:
      'Beryllium (Be). Reason: The 2s orbital is fully filled and hence stable. Taking an electron out will require a lot of energy. Nitrogen (N). Reason: 2p orbitals have an electron each. The p-subshell is half filled and hence stable. Taking an electron out will require a lot of energy',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question:
      'Which factors account for the general trend in increase in the first ionization energy with increase in atomic number in a Period of Periodic Table.',
    answer:
      '(1) Decrease in atomic radius (2) Increase in effective nuclear charge',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question:
      'State how the first ionization energy of the elements in a Group varies down the Group and give the factors that account for this.',
    answer:
      'The first ionization energy decreases down a Group. Factors: i) Atomic radius increases ii) Shielding effect by the inner core of electrons increases hence attraction for the outermost electrons decreases',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },

  {
    question: 'Calculate the partial pressure of CO2 in the flask.',
    answer: '3.7 kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Calculate the partial pressure of oxygen gas in the flask and give the answer to one place of decimal. Give the units of your answer.',
    answer: '49.9 kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Calculate the partial pressure of nitrogen gas in the flask and give your answer to one place of decimal. Give the units of your answer.',
    answer: '74.8 kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question: 'Give a balanced equation for the reaction.',
    answer: 'CaC2 + 2H2O -> C2H2 + Ca(OH)2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'Calculate the mass of calcium carbide required to yield 112 dm3 of ethyne at STP.',
    answer: '320g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'How many d-subshells or d-energy levels are either fully or partially filled with electrons in the Periodic Table? Name them.',
    answer: '4',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question: 'Give the symbol for the element mercury.',
    answer: 'Hg',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question: 'Give the symbol for the element antimony.',
    answer: 'Sb',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question: 'Give the symbol for the element Astatine.',
    answer: 'At',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question:
      'Calculate the mole fraction of oxygen gas and give your answer to two places of decimal.',
    answer: '0.22',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question: 'Calculate the partial pressure of nitrogen gas.',
    answer: 'PN2 = 120 kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question: 'Calculate the combined pressure of nitrogen and helium.',
    answer: 'PHe = 280kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question: 'Calculate the pH of a Ba(OH)2 solution.',
    answer: 'pH = 12',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'Calculate the volume of oxygen at STP liberated at the anode during the electrolysis of molten Al2O3 after 0.1 Faraday of charge has been passed.',
    answer: '0.56 dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'Determine by calculation whether 4 g of oxygen put in the balloon at STP will cause it to burst or not.',
    answer: 'The balloon will not burst',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Give the products of decomposition when ammonium trioxonitrate (V) is heated.',
    answer: 'NH4NO3 -> N2O + 2H2O',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },

  {
    question:
      'Give the products of decomposition when potassium trioxonitrate (V) is heated.',
    answer: '2KNO3 -> 2KNO2 + O2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'Give the products of decomposition when lead trioxonitrate (V) is heated.',
    answer: '2Pb(NO3)2 -> 2PbO + 4NO2 + O2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'Calculate the pH of 0.10 moldm3 solution of HOBr which has a pKa of 8.62',
    answer: '4.81',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'Calculate the pH of 0.10 moldm3 solution of aniline, whose pKb is 9.40',
    answer: '8.8',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'Phenol is an aromatic organic acid with a pKa of 10.0. Calculate the pH of its 0.010 moldm-3 solution',
    answer: '6',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Hybridization',
    question_year: 2017
  },
  {
    question:
      'The enthalpies of formation of ethene, CO2 and H2O are 53.0 kJmol-1, -394.0 kJmol-1 and -285.0 kJmol-1 respectively. Calculate the enthalpy of combustion of a mole of ethene',
    answer: '-1411 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'Calculate the energy required to break all bonds during the combustion of ethane gas',
    answer: '4541',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'List all the bonds including their respective numbers that need to be formed during the combustion of ethane.',
    answer: 'Hence, 4 C=O bonds and 6 O – H bonds.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'In which industry will lithium-aluminium alloy be most useful considering the fact that the density of lithium is about one-fifth that of aluminium?',
    answer: 'Aircraft',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Inorganic Chemistry',
    question_year: 2017
  },
  {
    question:
      'A mercury cell is used for the electrolysis of concentrated sodium chloride also known as brine. In that cell graphite is the anode and mercury is used as the cathode. State what you expect to happen at the cathode.',
    answer:
      'Sodium ions will be reduced to form sodium metal which will then combine with mercury to form sodium amalgam',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2017
  },
  {
    question: 'What is the study of metallurgy about?',
    answer:
      'It is the scientific study of the production of metals from their ores (and the making of alloy)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemistry, Industry & Environment',
    question_year: 2017
  },
  {
    question:
      'When ammonia burns in limited amount of oxygen, NO gas and steam are formed. Calculate the moles of oxygen needed to burn 51.0 g of ammonia.',
    answer: '3.75 moles',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'When ammonia burns in limited amount of oxygen, NO gas and steam are formed. Calculate the moles of ammonia that will burn to produce 90.0 g of steam.',
    answer: '3.33 moles',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'When ammonia burns in limited amount of oxygen, NO gas and steam are formed. Calculate the volume of oxygen in dm3 at STP that will be required to burn 85 g of ammonia. Molar volume of a gas at STP is 22.4 dm3',
    answer: '140 dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'What may account for the fact that solid sodium chloride is very soluble in water but silver chloride is not soluble?',
    answer:
      'Dissolution of an ionic compound in water involves two factors. i) Lattice energy which is positive, ii) Enthalpy of hydration which is negative. In the case of NaCl enthalpy of hydration is larger than the lattice energy. So overall enthalpy change for NaCl is negative. The opposite is the case of silver chloride.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: 2017
  },

  {
    question:
      'The mass spectrometer can only give the relative mass of an atom. What is the standard by which the real atomic mass unit of an element can be determined?',
    answer:
      'Carbon-12 isotope of carbon which has atomic mass unit of exactly 12.0',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: 2017
  },
  {
    question: 'Define a mole of a substance without using Avogadro’s number.',
    answer:
      'A mole of a substance is the mass of that substance that contains the same number of atoms as the number of atoms in exactly 12.000 g of carbon-12 isotope of carbon',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: 2017
  },
  {
    question: 'Distinguish between atomic unit and atomic weight.',
    answer:
      'Atomic unit usually refers to the mass of an isotope of an element whereas',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: 2017
  },
  {
    question:
      'Glucose undergoes fermentation process to yield ethanol and water. Calculate the mass of ethanol in kg that can be obtained from 27 kg of glucose if the yield is 100 %.',
    answer: '138 kg',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      'Glucose undergoes fermentation process to yield ethanol and water. In another preparation, the maximum yield is 80 %. Calculate the mass in kg of ethanol that can be obtained from 45 kg of glucose.',
    answer: '18.4 kg',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      'Glucose undergoes fermentation process to yield ethanol and water. If in another fermentation 54 kg of glucose produces only 24.84 kg of ethanol, what is its percentage yield?',
    answer: '90 %',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      'A radioactive substance has a half-life of 4.5 years. How long will it take the substance to lose 75 % of its activity?',
    answer: '9 years',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Nuclear Chemistry',
    question_year: 2017
  },
  {
    question:
      'Calculate the mass of NaOH that must be added to 400 cm3 of 0.15 moldm-3 HCl solution in order to neutralize half of the acid.',
    answer: '1.2 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'An element X exists as triatomic molecules X3. If X has two natural isotopes, how many peaks will be observed in its Mass Spectrum?',
    answer: '4 peaks X1-X1-X1; X1-X2-X2; X1-X1-X2; X2-X2-X2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: 2017
  },
  {
    question:
      'For a substance to be classified as a catalyst for a reaction, that substance must satisfy some criteria. Each school is to give one such criterion.',
    answer:
      'i) Catalyst increases the rate of the reaction\n(ii) Catalyst is not consumed by the reaction\n(iii) A small quantity of the catalyst should be able to affect the rate of the reaction\n(iv) Catalyst does not change the equilibrium constant for the reaction',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      'When glucose eventually breaks down in the body the process can be summarized by the following chemical equation: C6H12O6 (aq) → 2C2H5OH (aq) + 2CO2 (g). Calculate the mass of oxygen gas required to break down 18.0 g of glucose.',
    answer: '19.2 g of O2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'When glucose eventually breaks down in the body the process can be summarized by the following chemical equation: C6H12O6 (aq) → 2C2H5OH (aq) + 2CO2 (g). What volume of oxygen at STP will be needed to break down 54 g of glucose? Give your answer to two places of decimal. Molar volume of a gas at STP is 22.4 dm3',
    answer: '40.32 dm3 of O2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'When glucose eventually breaks down in the body the process can be summarized by the following chemical equation: C6H12O6 (aq) → 2C2H5OH (aq) + 2CO2 (g). What mass of CO2 will be produced when 36.0 g of glucose is completely broken down?',
    answer: '52.8 g CO2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'The Breath analyzer, an instrument used by the Police to determine the alcohol level in the blood of drunken drivers contains K2Cr2O7 dissolved in tetraoxosulphate (VI) acid. Explain the chemistry of this test.',
    answer:
      '(i) If there is any alcohol/ethanol present in the blood of the driver, it will appear in the person’s breath\n(ii) When the breath is blown into the tube/instrument the alcohol gets oxidized to ethanoic acid and the Cr2O72- gets reduced to Cr3+.\n(iii) The solution which is originally yellow-orange turns green due to the reduction of chromium in oxidation state 6+ to Cr3+ ions\n(iv) The intensity of the green color measures the amount of the alcohol originally present in the breath.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Redox Reactions',
    question_year: 2017
  },
  {
    question:
      'Phosphorus (V) chloride decomposes in a reversible reaction to give phosphorus (III) chloride and chlorine gas. At 100 °C and 100 kPa pressure only 10 % of the phosphorus (V) chloride has decomposed. If the process starts with 1 mole of phosphorus (V) chloride, what is its mole fraction at equilibrium? Give your answer to two places of decimal.',
    answer: '0.82',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },

  {
    question:
      'Calculate the pOH of a 0.10 moldm-3 solution of a weak base with a pKb of 7.6',
    answer: '4.3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'What is the numerical value of Faraday’s constant and what is its relationship with the electron? Give the value of F in the scientific form to two places of decimal.',
    answer:
      'Faraday’s constant (F) = 9.65 * 10^4 coulomb (C)\nIt is the charge in coulomb on a mole of electrons',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2017
  },
  {
    question: 'State Faraday’s First Law of electrolysis',
    answer:
      'The quantity of a substance liberated at an electrode is directly proportional to the quantity of electrical charge passed through the electrolytic cell.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2017
  },
  {
    question: 'State Faraday’s Second Law of electrolysis',
    answer:
      'For the same substance/metal or different substances/metals, the amount deposited for a given quantity of electric charge is proportional to atomic mass/molar mass divided by the charge on the ion (or is proportional to the equivalent weights)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2017
  },
  {
    question:
      'Calculate the amount in mole of nitrogen gas in a balloon that has a volume of 4.2 * 10^4 dm3 when the temperature of the gas is 27°C and the pressure is 96.0 kPa. For the purpose of this calculation assume the gas constant R to be 8.4 JK-1mol-1.',
    answer: '1.60 * 10^3 mol',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      '1.0 g of a gas fills a 540 cm3 flask at a temperature of 27°C and its pressure is 99 kPa. Use the information to calculate the molar mass of the gas. Assume the gas constant to be 8.10 JK-1mol-1 for this calculation and give your answer to one place of decimal.',
    answer: '45.5 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'Calculate the mass of oxygen in kg that can be stored in a gas cylinder of 60 dm3 volume at a pressure of 17000 kPa and temperature of 27°C. Assume the gas constant to be 8.50 JK-1mol-1 for this calculation and give your answer to one place of decimal.',
    answer: '12.8 kg',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'An organic molecule is known to contain a number of ester groups. The number was determined by treating 0.02 mol of the compound with 50.0 cm3 of 1.0 moldm-3 NaOH solution. The excess alkali required 10.0 cm3 of 1.0 moldm-3 of HCl solution for complete neutralization. Calculate the number of ester groups per molecule',
    answer: '2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Lime dissolved in excess water produces a suspension used in whitewashing walls. If the enthalpies of formation of aqueous Ca(OH)2, solid lime, and water are -1010 kJmol-1, -630 kJmol-1, and -290 kJmol-1 respectively, calculate the amount of heat that accompanies the dissolution of a mole of lime.',
    answer: '-90 kJmol-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'The alums are usually (hydrated) double salts containing tetraoxosulphate (VI) of two different metals. What are the oxidation states of the two metals?',
    answer: '+1 and +3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },
  {
    question:
      'Which of these compounds will not show hydrogen bonding in the liquid state; give your reason(s). (BH3)2, MeNH2, HF, H2S, and HCHO',
    answer:
      '(BH3)2, H2S, and HCHO. In all the three compounds, hydrogen is not bonded to a very electronegative atom.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonding',
    question_year: 2017
  },
  {
    question:
      'Ethanoic acid shows a special kind of intermolecular hydrogen bonding. Describe it and give the outcome of this bonding',
    answer:
      'There is hydrogen bonding between pairs of the molecules to give dimers. H of OH on one to C=O of the other molecule and vice versa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'There is extensive hydrogen bonding in liquid water. Give two properties of water due solely to the strong hydrogen bonding',
    answer:
      '(1) Higher boiling point than H2S (2) High surface tension (3) Water expanding when it freezes',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonding',
    question_year: 2017
  },
  {
    question:
      'In a titration of aqueous Na2CO3 against dilute HCl, using methyl orange as an indicator, 25.0 cm3 of the base required 28.0 cm3 of 0.10 moldm-3 HCl. What was the concentration of the Na2CO3 solution? Give your answer to three places of decimal.',
    answer: '0.056 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'In the titration of aqueous NaHCO3 against dilute HCl, using methyl orange as an indicator, 20.0 cm3 of the base required 16.0 cm3 of 0.12 moldm-3 HCl. Calculate the concentration of the base and give your answer to three places of decimal.',
    answer: '0.096 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'To determine the concentration of a solution of Na2CO3, 25.0 cm3 of the solution was titrated against 0.15 moldm-3 HCl solution, using phenolphthalein as an indicator. If the titre was 18.0 cm3, calculate the concentration of the base and give your answer to three places of decimal.',
    answer: '0.108 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'Hydrogen gas can be made to react with nitrogen gas to produce ammonia. Give a balanced equation and calculate the mass of hydrogen in grams required to produce 1.7 kg of ammonia.',
    answer: '1.7 kg of NH3 ≡ [1.7/(2*17)]*6 kg H2 = 300 g of H2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'Hot iron fillings react with sulphur to give iron (II) sulphide. In one typical reaction when 6.22 g of impure iron is made to react with excess sulphur, 8.8 g of iron (II) sulphide is obtained. If the yield of the method is 100%, what is the purity of the iron? Give your answer to one place of decimal.',
    answer: '%Purity = (5.6/6.22)*100 = 90.0%',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question: 'What is the current atmospheric level of CO2 in ppm?',
    answer: '400 ppm',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'The universe is divided into a SYSTEM and its SURROUNDING. Define a SYSTEM in this context.',
    answer:
      'It is that small portion of the universe in which we are (one is) interested. OR Part of the universe under study',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'The enthalpy of formation of CO2 is -394 kJmol-1 while that for CO is -111 kJmol-1. What could account for this large difference?',
    answer:
      'The enthalpy of formation is a measure of thermodynamic stability of the compound. The carbon – oxygen triple bond in CO is not as strong as the two carbon – oxygen double bonds in CO2 OR CO can further be oxidized to CO2 but the latter cannot be oxidized further',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question: 'Distinguish between a closed system and an isolated system.',
    answer:
      'In a closed system, matter cannot be transferred but energy can be transferred from surrounding to the system or vice versa. In an isolated system, both matter and energy cannot be transferred',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'For the preparation of a standard solution of Na+ ions, 25 cm3 of a stock solution of 0.20 moldm-3 Na2SO4 is diluted to 1 dm3 with deionized water. 10 cm3 of the diluted solution is further diluted to 50 cm3 and labelled A. Calculate the concentration of Na+ ions in moldm-3 of A.',
    answer: 'Concentration of Na+ in A = 0.002 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      '300 cm3 of 0.20 moldm-3 of NaOH is partially neutralized with 100 cm3 of 0.10 moldm-3 of HCl. What is the new concentration of the NaOH?',
    answer: 'New concentration = 0.125 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'From a stock solution of 0.50 moldm-3 of Na2SO4, a 500 cm3 solution which should be 0.30 moldm-3 with respect to Na+ ions is to be prepared. Calculate the volume of the stock solution that must be diluted to 500 cm3.',
    answer: '150 cm3 of original solution has to be diluted to 500 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'A hydrocarbon with the simplest carbon hydrogen ratio 4:9 has a molar mass of 114. What is the molecular formula of the hydrocarbon?',
    answer: 'Molecular formula = C8H18',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'An element has two isotopes with mass numbers 42 and 45. The isotopes have natural abundances of 75% and 25% respectively. What is the relative atomic mass of the element?',
    answer: 'Relative atomic mass = 42.75',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: 2017
  },
  {
    question:
      'Give the systematic name of an unsubstituted butanol that will be optically active and give the reason.',
    answer:
      'Systematic name: 2-Butanol; CH3CHOHCH2CH3\nReason: Second carbon is chiral/asymmetric or there is a chiral/asymmetric carbon in the molecule',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Saponification is an organic reaction involving esters especially vegetable oils and fats. Give the origin of the word saponification.',
    answer:
      'Saponification comes from the Latin word SAPO, which means soap in Latin. The product of saponification is soap',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemistry, Industry & Environment',
    question_year: 2017
  },
  {
    question: 'Chemically what is the difference between soap and detergent.',
    answer:
      'Soaps are sodium or potassium salts of fatty acids, whereas detergents are sodium alkyl sulphonates (trioxosulphates) or alkyl sulphates (tetraoxosulphate )',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemistry, Industry & Environment',
    question_year: 2017
  },

  {
    question:
      'Soaps are harmless to the environment but some detergents are not. Why?',
    answer:
      'The straight alkyl chains in all soaps are biodegradable but not the branched chains in detergents',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemistry, Industry & Environment',
    question_year: 2017
  },
  {
    question:
      'Calculate the concentration of an aqueous KCl solution if 20.0 cm3 of this solution gives 0.287 g of AgCl when treated with excess AgNO3 solution.',
    answer:
      'Molar mass of AgCl = 108 + 35.5 = 143.5\nMoles of AgCl 0.287/143.5 = 0.002\nLet concentration of the KCl solution be M; (M *20)/1000 = 0.002\nM = 0.100 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: 2017
  },
  {
    question:
      'Calculate the concentration of sodium hydroxide if 12.0 cm3 of it is needed to neutralize 20.0 cm3 of 0.15 moldm-3 of ethanedioc acid (oxalic acid). Give your answer to two places of decimal.',
    answer:
      'NaOH/H2C2O4 = 2/1;\nM *12/20 *0.15 = 2/1\nM = (2 *20 *0.15)/12 = 0.50 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: 2017
  },
  {
    question:
      'Calculate the volume of 0.049 moldm-3 H2SO4 that would be needed to neutralize 14.0 cm3 of 0.10 aqueous ammonia solution. Give your answer to one place of decimal.',
    answer:
      'NH3/H2SO4 = 2/1;\n(14 *0.1)/(0.049 *V) = 2/1\nV = (14 *0.1)/(0.049 *2) = 14.3 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: 2017
  },
  {
    question:
      'In a kinetic experiment, the concentrations of a reactant A are determined at various time intervals. Two graphs are plotted. log10 [A] vs t; (ii) 1/[A] vs t. If (ii) produced a straight line but (i) did not, what could be the order of the reaction with respect to A?',
    answer: '2nd Order',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      'Calculate the pH of 0.001 moldm-3 carbonic acid solution if the pKa of carbonic acid is 6.4. You may ignore the contribution of the second dissociation of the acid.',
    answer: 'pH = 4.7',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'A quantity of oxygen is introduced into an empty steel globe at 27 0C and 100 kPa. The globe is sealed and heated. At what temperature in degree Celsius will the pressure be twice as high as the original pressure?',
    answer:
      'Use Charles law; At constant V; P2/T2 = P1/T1\nP1 = 100 kPa; P2 = 200 kPa;\nT1 = (27 + 273); T2 = ?\nT2 = (P2/P1) *T1 = (200/100) *300 = 600 K = 327 0C',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Extraction of gold involves two general processes. What are these?',
    answer:
      'i) Concentration and ii) purification. There is no chemical reaction because the metal is present in the ore in the uncombined state',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Inorganic Chemistry',
    question_year: 2017
  },
  {
    question:
      'To concentrate the gold from its ore, the powdered material is treated with sodium cyanide solution. Does the process involve oxidation or reduction of the gold? Explain your answer.',
    answer:
      'Oxidation: The cyanide reacts with the metal in the presence of oxygen\n4Au (s) + 8NaCN (aq) + O2 + H2O 4NaAu(CN)2 + 4NaOH\nThe oxidation state of the metal in the complex is +2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Inorganic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Explain why the extraction of aluminium from bauxite involves three processes',
    answer:
      'The three processes are: Concentration: The raw bauxite is treated with concentrated NaOH solution to remove sand and other impurities. Reduction: Alumina in which aluminium is in oxidation state of +3 is reduced to oxidation state zero. Purification: In the process of electrolysis the aluminium comes out pure.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Inorganic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Calculate the percentage oxygen in a molecule of phenol and give your answer to one place of decimal.',
    answer: 'Phenol = C6H5OH = C6H6O = 94\n%O = 16/94 *100 = 17.0',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Calculate the percentage oxygen in nitrobenzene and give your answer to one place of decimal.',
    answer: 'Nitrobenzene = C6H5NO2 = 123\n%O = 32/123 *100 = 26.0',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Calculate the percentage carbon in toluene and give your answer to one place of decimal.',
    answer: 'Toluene = C6H5.CH3 = C7H8 = 92\n%C = 84/92 *100 = 91.3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Hydrogen peroxide concentration of 6% w/v is a good antiseptic. If you buy a bottle of hydrogen peroxide labeled 20% w/v, how would you prepare a 100 cm3 of 6% w/v H2O2 from that?',
    answer:
      'Dilution: 20% w/v to 6% w/v; Dilution factor 3 in 10. For 100 cm3, measure 30 cm3 and make it up to 100 cm3 with clean water',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'Calculate the mass of KOH that must be dissolved in 200 cm3 to give a 0.25 moldm-3 solution',
    answer:
      'KOH = 56\nMass of KOH required for 1 dm3 = (0.25 *56) g\nMass of KOH required for 200 cm3 = (56 *0.25*200)/1000 = 56 *0.05 = 2.8 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: 2017
  },

  {
    question:
      'A weak acid has a pKa of 4.6. What concentration of the weak acid will have a pH of 3.3?',
    answer:
      'pH = ½ pKa - ½ logCa; 2pH = pKa - logCa\n2 *3.3 = 4.6 - logCa\nlogCa = -2.0\nCa = 0.01 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question: 'Which metal is the most abundant in the earth’s crust?',
    answer: 'Aluminium',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Inorganic Chemistry',
    question_year: 2017
  },
  {
    question: 'Which is the most abundant element in the earth’s crust?',
    answer: 'Oxygen',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Inorganic Chemistry',
    question_year: 2017
  },
  {
    question: 'Which is the most abundant element in the Universe?',
    answer: 'Hydrogen',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Inorganic Chemistry',
    question_year: 2017
  },
  {
    question:
      'A salt MY has solubility product of 4.9 *10-9 at 25 0C. What is its solubility at 25 0C? Give the units of your answer',
    answer: 'Ksp = 4.9 *10-9 = 49*10-10\nSolubility = 7.0*10-5 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: 2017
  },
  {
    question:
      'An inorganic salt with molar mass 73 has solubility of 0.15 moldm-3 at 30 0C. Calculate the mass of the salt that will be needed to prepare 300 cm3 of a saturated solution at 30 0C. Give your answer to three places of decimal',
    answer:
      'Solubility of salt in gdm-3 = 73 *0.15 = 10.95\nMass of salt needed in 300 cm3 = (300/1000) *10.95 = 3.285 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: 2017
  },
  {
    question:
      'A salt MX, molar mass 70 has a solubility product of 8.10 *10-7 at 25 0C. Calculate its solubility in gdm-3 at 25 0C',
    answer:
      'Ksp = 8.10 *10-7\nSolubility at 25 0C = 9.0 *10-4 moldm-3\nSolubility in gdm-3 = 70 * 9.0 *10-4 = 630 *10-4 or 6.30*10-2 or 0.063 gdm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: 2017
  },
  {
    question:
      'Two geometric isomers A and B which are organic acids have enthalpies of formation of – 5524kJmol-1 and -5545kJmol-1 respectively. Which of the isomers is cis and which is trans? Give your reasons',
    answer:
      'A = cis; B = trans\nNormally trans isomer is more stable than cis isomer.\nEnthalpy of formation of -5545kJmol-1 is an indication of greater stability than -5524kJmol-1.\nOR Conversion of A to B involving ∆H of -21 kJ is thermodynamically more favourable than conversion of B to A involving ∆H of +21 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Give the following gases in increasing rate of diffusion: Cl2; (b) CF2Cl2; (c) SO2.',
    answer:
      'Rate of diffusion: CF2Cl2 (121) < Cl2 (71) < SO2 (64). Lightest molecule diffuses fastest, heaviest molecule slowest',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Why do network covalent solids have higher melting point than molecular solids?',
    answer:
      'Molecular solids consist of discrete molecules held together by weak intermolecular forces. Melting only breaks down these weak forces. Network covalent solids are giant molecules whose atoms are held by strong covalent bonds. Melting involves either breaking the strong covalent bonds or providing enough average kinetic energy to the very heavy molecules',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonding',
    question_year: 2017
  },
  {
    question:
      'There are two ways of defining chemical equilibrium. What are these?',
    answer:
      '(1) By Concentration: Chemical equilibrium is reached when there is no apparent change in the concentrations of reactants and product of a reaction\n(2) By Rates: Chemical equilibrium is a system in which the rates of the forward and backward reactions are the same.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      'The Haber process is used in synthesizing ammonia from hydrogen and nitrogen gases in an equilibrium reaction. The forward reaction is exothermic. Each school should give one way the equilibrium reaction can be made to yield more ammonia apart from the use of a catalyst',
    answer:
      '(1) By lowering the temperature at equilibrium the equilibrium shifts in the forward reaction.\n(2) By removing the ammonia formed from the equilibrium mixture.\n(3) By increasing the pressure, the equilibrium shifts in the direction of a lower number of gaseous molecules',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      '150 cm3 of 0.30 moldm-3 iron (III) tetraoxosulphate (VI) are added to 250 cm3 of 0.10 moldm-3 sodium tetraoxosulphate (VI) solution and stirred to obtain a uniform solution',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'Calculate the concentration of sodium ions in the mixed solution and give your answer to three places of decimal',
    answer:
      'For Na+, there is a dilution of 250cm3 to 400 cm3; i.e. 1 in 1.6\nNew concentration of Na2SO4 = 0.1/1.6 = 0.0625\nConcentration of Na+ alone = 2*0.0625 = 0.125',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'Calculate the total amount in mole of SO42- ions in the mixed solution',
    answer:
      'From 150 cm3 of 0.3 moldm-3 Fe2(SO4)3\nmmole of SO42- = 3 *0.3*150 = 135\nFrom 250 cm3 of 0.10 moldm-3 Na2SO4\nmmole of SO42- = 250 *0.1 = 25\nTotal mmole of SO42- = 135 + 25 = 160',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },

  {
    question:
      'Calculate the concentration of Fe3+ in moldm-3 in the mixed solution and give your answer to three places of decimal',
    answer:
      'For Fe3+, there is dilution from 150 cm3 to 400 cm3;\nDilution factor 1 in 8/3\nNew concentration of Fe3+ = 2 *0.3/(8/3) = 0.9/4 = 0.225',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'The pKa of a monobasic acid HA is 6.2. What is the pH of 0.10 moldm-3 solution of it?',
    answer: 'pH = ½ pKa - ½ logCa = 6.2/2 + 0.5 = 3.6',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: 2017
  },
  {
    question:
      'When the molecule N2O5 is heated it decomposes. Every 2 moles of N2O5 give four moles of NO2 and one mole of O2. How many moles of N2O5 would decompose to give 13 moles of NO2',
    answer:
      '4 moles of NO2 come from 2 moles of N2O5\nTherefore, 13 moles of NO2 will come from 6.5 mole of N2O5\nHence, 6.5 mole N2O5',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: 2017
  },
  {
    question:
      'By calculation, estimate which of the nitrogen fertilizers urea and ammonium trioxonitrate (V) supplies more nitrogen to the soil. Support your answer with the appropriate figures. Molar mass of urea (H2NCONH2) = 60; molar mass of NH4NO3 = 80; N = 14.0',
    answer:
      '% N in urea = 28/60 or 46.7%; % N in NH4NO3 = 28/80 or 35.0%\n28/60 (or 46.7 %) is larger than 28/80 (or 35.0 %), hence urea supplies more nitrogen per unit (g or kg) mass',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: 2017
  },
  {
    question:
      'Use the Kinetic Theory of Gas to explain the following experimental observations: For a given gas at constant temperature and volume, the pressure increases when the molar quantity of the gas increases',
    answer:
      'The Theory suggests that the pressure of a gas results from collision between the gas particles and the walls of the container. When the number of particles increases, the number of collisions per unit area increases even at constant temperature.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Use the Kinetic Theory of Gas to explain the following experimental observations: For a given amount of gas at a constant volume, the pressure of the gas increases with temperature',
    answer:
      'A postulate of the Theory states that the average kinetic energy of a gas particle depends only on the temperature of the gas; hence the average kinetic energy increases as the gas gets warmer. The higher average kinetic energy means gaseous particles move faster and collide with the wall of its container with greater force, hence increase in pressure.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Use the Kinetic Theory of Gas to explain the following experimental observations: For a gas, at constant temperature and pressure, the volume is proportional to the molar quantity',
    answer:
      'As the number of gas particles increases, frequency of collisions with the walls of the container increases. As pressure in the container increases, the volume of the container increases until the internal pressure and external pressure become equal.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: 2017
  },
  {
    question:
      'Technetium, a d-transition element is one of the principal radioisotopes used in medical diagnostics based on radioactivity. It is produced in the laboratory in two steps: Natural molybdenum – 98, atomic number 42 is bombarded with neutrons; it absorbs one to form a nuclide. Give a balanced equation for this reaction and identify the nuclide',
    answer:
      '9842Mo + 10n 9942Mo\nThe new nuclide is molybdenum – 99, atomic number 42',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: 2017
  },
  {
    question:
      'The excited technetium isotope is obtained by β – decay of molybdenum – 99, atomic number 42. Give a balanced equation of the reaction and state the mass number and atomic number of technetium',
    answer: '9942Mo + 9943Tc + 0-1e;\nMass number = 99; atomic number = 43',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Nuclear Chemistry',
    question_year: 2017
  },
  {
    question:
      'The excited technetium is isotope, mass number 99, atomic number 43 has a half - life of about 6.02 hours. It decays by emitting gamma ray which by the use of special equipment can give pictures of various organs of the body. Give a balanced equation for this decay and identify the product. What is the difference between the reactant nuclide and the product nuclide?',
    answer:
      '9943Tc + 9943Tc + 00γ\nReactant Tc is in the excited state; Product Tc is in the ground state.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Nuclear Chemistry',
    question_year: 2017
  },
  {
    question:
      'The solubility of a compound X with formula mass 70 is 0.14 moldm-3 at 30 0C. If 500 cm3 of a hot solution containing 22 g of the compound is allowed to cool to 30 0C, how much solid will be deposited',
    answer:
      'Solubility of X at 30 0C in gdm-3 = 70 *0.14 = 9.8 g\nSolubility of X at 30 0C for 500 cm3 = 4.9 g\nMass of solid that will be deposited = 22 – 4.9 = 17.1 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'One gram of glucose yields 16 kJ of heat when burned. How much heat is generated when 1 mole of glucose is burned? Formula for glucose = C6H12O6\nC = 12.0, O = 16.0, H = 1.0',
    answer:
      'Molar Mass of glucose = 6 *12 + 12 + 6 *16 = 180\n∆H per mole = 180 *16 = 2880 kJ or 2.88*103 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: 2017
  },
  {
    question:
      'Consider the half – cells; A2+/A - 0.52 V; B+/B + 0.43\nWhich of the metals A or B will react with dilute HCl. Give your reason',
    answer:
      'A. Emf of the cell: A + 2H+ → H2 + A2+ will be positive (+ 0.52 V). That for B will be negative.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2017
  },
  {
    question:
      'Give the systematic names of the compounds that will be obtained by acid hydrolysis of phenylmethyl benzoate',
    answer: '(1) Benzoic acid (2) Phenylmethanol',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },
  {
    question:
      'Name the ester that will be formed when hexanoic acid and pentanol are reacted together',
    answer: 'Pentyl hexanoate',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: 2017
  },

  {
    question: 'Give an example of a disaccharide apart from sucrose.',
    answer: '(1) Maltose (2 glucose with -acetal linkage)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: '2017'
  },
  {
    question:
      '200 cm3 of 0.30 moldm-3 NaHCO3 solution is partially neutralized with 100 cm3 of 0.15 moldm-3 HCl solution. Calculate the concentration in moldm-3 of the NaHCO3 solution after the partial neutralization. Give your answer to three places of decimal.',
    answer:
      'mmol of NaHCO3 in 200 cm3 solution = 60\nmmol of HCl in 100 cm3 solution = 15\nmmol of NaHCO3 left after partial neutralization = 60 – 15\nConcentration of resultant NaHCO3 = 45/300 = 0.150 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: '2017'
  },
  {
    question:
      '20 cm3 of 0.12 moldm-3 Na2SO4 is diluted to 1 dm3. What is the concentration of Na+ ions in the final solution?',
    answer:
      'Dilution: 20 cm3 to 1000 cm3; Dilution factor is 1 in 50\nNew concentration of Na2SO4 = 0.12/50 = 0.0024\nConcentration of Na+ = 0.0048 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: '2017'
  },
  {
    question:
      '0.94 g of a hydrated salt is dried in an oven at about 120 0C until a constant weight of 0.49 g is obtained. If the molar mass of the salt is 98 g, how many molecules of water of crystallization are present in the hydrated salt?',
    answer:
      'Mass of water of hydration = 0.94 – 0.49 = 0.45\nSalt            H2O\n0.49/98          0.45/18\n0.005            0.025\n1                5\nThe salt has 5 molecules (or moles) of water of hydration per molecule (or mole) of the salt.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'A flask of 1 dm3 volume is filled with 3 moles each of SO2 gas and O2 gas and the flask heated to 600 K until equilibrium is attained. The equation for the reaction is as follows: 2SO2 + O2 → 2SO3 If at equilibrium 1 mole of SO3 is formed, what is the equilibrium constant KC of the reaction',
    answer:
      '2SO2 + O2 → 2SO3\nInitial: 3 3\nAt equil.: 3-1 3 – 0.5 1\n2 2.5 1\nKC = [SO3]2/[SO2]2[O2] = 12/22 *2.5 = 1/4*2.5 = 0.1 or 1.0 *10-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: '2017'
  },
  {
    question:
      'Calculate KP of the reaction. Take R to be 8.31 JK-1mol-1. Kc for the reaction is 0.1. You may leave your answer as a fraction.',
    answer:
      'KP = Kc (RT)n ; n = -1 and T = 600 K\nKP = 0.1/(600 *8.31) = 0.1/4986 = 1/49860',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: '2017'
  },
  {
    question:
      'Which transition element is associated with one of the B vitamins',
    answer: 'Cobalt (Co).',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: '2017'
  },
  {
    question:
      'Explain the difference between an ordinary flat-bottom conical flask and a filtering flask',
    answer:
      'Filtering flask is like the ordinary flat-bottom conical flask but it has a side hose connection',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Introduction To Chemistry',
    question_year: '2017'
  },
  {
    question:
      'If you are given a solution of a compound and you are required to evaporate all the solvent by heating, which of the two pieces of glassware will use: a conical flask or a beaker. Give your reasons',
    answer:
      'Beaker is preferable. Reason: a beaker has a wider opening whereas a conical flask has a narrow neck and will impede the escape of the vapor.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Introduction To Chemistry',
    question_year: '2017'
  },
  {
    question:
      'To expose the maximum surface area of a filter paper for filtration, it is folded in a special way. What is the folded filter paper called?',
    answer: 'Fluted filter paper.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solutions',
    question_year: '2017'
  },
  {
    question:
      'A second-order reaction has a rate constant of 1.250 *10-2 s-1mol-1dm3 at 30 0C. Calculate the initial rate of the reaction when the concentration of the reactant is 0. 500 moldm-3. Give your answer in the scientific form to three places of decimal.',
    answer:
      'Rate = k [reactant] 2 = 1.25 *10-2 * (5 *10-1)2 = 1.25 *25 *10-4 = 3.125 *10-3 moldm-3s-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Rate Of Reactions',
    question_year: '2017'
  },
  {
    question:
      'Calculate the initial concentration of the reactant that will give an initial rate of 1.125 *10-1 moldm-3s-1',
    answer:
      'Rate = k [concentration]2\nLet the concentration be C moldm-3\n1.125 *10-1 = 1.25 *10-2 *C2\nC2 = (11.25 *10-2/1.25 *10-2) = 9\nC = 3 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Rate Of Reactions',
    question_year: '2017'
  },
  {
    question:
      'With the same rate constant, calculate what the rate of the reaction will be if it were a first-order reaction and the reactant concentration were 0.2 moldm-3',
    answer:
      'Rate = k [concentration] = 1.25 *10-2 *0.2 = 2.50 *10-3 moldm-3s-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Rate Of Reactions',
    question_year: '2017'
  },
  {
    question:
      'What volume of 0.10 moldm-3 NaOH will be required to neutralize 25.0 cm3 of 0.04 moldm-3 H2SO4',
    answer:
      'H2SO4 + 2NaOH → Na2SO4 + 2H2O\n25, 0.04 V, 0.1\n(25 *0.04)/(V *0.1) = ½;\nV = (2 *25 *0.04)/0.1 = 20.0 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: '2017'
  },
  {
    question:
      'When iron fillings are heated with excess sulfur, iron (II) sulfide is produced. If in one such preparation 6.6 g of the sulfide is obtained, what mass of iron fillings may have been used? Fe = 56.0; S = 32',
    answer:
      'Fe + S → FeS\n56 32 88\n88 g of FeS is obtained from 56 g Fe\nTherefore, 6.6 g of FeS = (6.6/88) *56 = 4.2 g Fe',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },

  {
    question:
      'What is the major difference, chemically between haemoglobin and chlorophyll?',
    answer:
      'Haemoglobin is an iron II (Fe2+) complex; Chlorophyll is a magnesium II (Mg2+) complex',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Organic Chemistry',
    question_year: '2017'
  },
  {
    question:
      'What type of reaction takes place at the anode in a Voltaic cell?',
    answer: 'Oxidation reaction at the anode/in the half-cell',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question:
      'How does one obtain (not experimentally) the emf of a Voltaic cell?',
    answer:
      'The emf of a Voltaic cell is the sum of the oxidation potential of the anode and the reduction potential of the cathode OR It is the difference in either the oxidation or reduction potentials of the two half-cells',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question:
      'Why is the electrolysis of dilute H2SO4 using inert electrodes equivalent to the electrolysis of water?',
    answer:
      'At the cathode H3O+ ions are discharged. At the anode SO42- or OH- could be oxidized. The oxidation potential of SO42- is too high, higher than that of OH-. Secondly H2O/OH- is present at higher concentration',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question:
      'Copper is replaced from its solution of its salts by iron as given in the following equation: Fe + CuSO4 FeSO4 + Cu. To 84 g of iron is added excess CuSO4 solution until all the iron disappears. If 76.8 g of copper metal is obtained, what is the percentage yield of this method of preparing copper metal? Give your answer to one place of decimal.',
    answer:
      'Fe + CuSO4 56 (64/56) *84 g Cu = 96.0 g Cu. % yield = (76.8/96) *100 = 80.0 %',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'Copper is replaced from its solution of its salts by iron as given in the following equation: Fe + CuSO4 FeSO4 + Cu. In another preparation 13.0 g of impure iron was added to excess CuSO4 solution and 12.8 g of pure copper metal was obtained. What mass of impurity was present in the iron. Assume the yield is 100%?',
    answer:
      'Fe + CuSO4 56 (64/56) *84 g Cu = 96.0 g Cu. Impurity present = 13.0 - 11.2 = 1.8 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'Copper is replaced from its solution of its salts by iron as given in the following equation: Fe + CuSO4 FeSO4 + Cu. If 11.2 g of iron is dissolved completely in excess CuSO4 solution, what mass of FeSO4 will be obtained?',
    answer:
      'Fe + CuSO4 56 152. 56 g of Fe gives 152 g of FeSO4. 11.2 g Fe will give (11.2/56) *152 = 30.4 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'In a titration of Na2CO3 solution of unknown concentration with dilute HCl using phenolphthalein as an indicator, 25.0 cm3 of the base required a titre of 16.0 cm3 of 0.125 moldm-3 HCl. Calculate the concentration of the Na2CO3 solution. Give your answer to three places of decimal.',
    answer:
      'With phenolphthalein HCl + Na2CO3 NaHCO3 + NaCl. (16 *0.125/25 M) = 1/1; M = (16 *0.125)/25 = 0.080 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'In a volumetric exercise to analyze a solution containing both Na2CO3 and NaHCO3, two titrations were performed with dilute HCl of known concentration. In the first titration using methyl orange, the titre was 28.5 cm3. In the second titration using phenolphthalein, for 25 cm3 of the base the titre was 11.2 cm3. What volume of the acid was used in calculating the concentration of the NaHCO3 in the mixture? Explain your answer.',
    answer:
      'Using phenolphthalein, the relevant reaction is: HCl + Na2CO3 NaHCO3 + NaCl. V = 11.2 …….. (1). Using methyl orange, the relevant reactions are: 2HCl + Na2CO3 2NaCl + CO2 + H2O, HCl + NaHCO3 NaCl + CO2 + H2O. V = 28.5. Volume of HCl that reacted with all Na2CO3 = 2 *11.2. Hence volume of HCl that reacted with NaHCO3 alone = 28.5 - 2*11.2 = 28.5 – 22.4 = 6.1 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'To which Group in the Periodic Table does the element with atomic number 37 belong?',
    answer: '1s22s22p63s23p64s23d104p65s1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: '2017'
  },
  {
    question:
      'Give the definition of a base according to the Lewis definition of acids and bases',
    answer: 'A Lewis base is an electron pair donor',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: '2017'
  },
  {
    question:
      'Why is ammonia molecule easier to be defined as a Bronsted-Lowry base but not as an Arrhenius base?',
    answer:
      'NH3 molecule is a proton acceptor since it bears an electron pair but the molecule does not possess an OH- to be donated. (It has to react with H2O first to form NH4OH)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: '2017'
  },
  {
    question:
      'Neutralization of HClO4 and HCl by NaOH gives the same ∆H as –55.90 kJmol-1. What does this mean?',
    answer:
      'Both acids are strong acids and fully ionized in water. The same reaction occurs in each neutralization. (H3O+ + OH- → H2O (l))',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid Bases & Salts',
    question_year: '2017'
  },
  {
    question:
      'Potassium bromide can be made by the action of bromine on warm concentrated aqueous KOH. Other products of the reaction are KBrO3 and water. Give a balanced equation for the reaction',
    answer: '3Br2 + 6KOH → 5KBr + KBrO3 + 3H2O',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'Potassium trioxobromate (V) when heated with charcoal gives potassium bromide and CO2. Give a balanced equation for the reaction',
    answer: '2KBrO3 + 3C → 2KBr + 3CO2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },

  {
    question:
      'KO2 (known as potassium superoxide) reacts with water evolving oxygen gas and forming hydrogen peroxide and KOH. Give a balanced equation',
    answer: '2KO2 + 2H2O → 2KOH + H2O2 + O2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'An alkanone contains 66.7 % carbon and 11.1 % hydrogen. Calculate its empirical formula.',
    answer: 'C4H8O',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'Calculate the percentage loss in mass when chromium (VI) oxide is reduced to the chromium metal.',
    answer: '48%',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question: 'What does the abbreviation STP mean and what are the values?',
    answer:
      'STP means Standard Temperature and Pressure. Standard Temperature = 0°C; Standard Pressure = 100 kPa.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: '2017'
  },
  {
    question:
      'From the named pair of half-cells, give the cell reaction of a possible voltaic cell that can be set up and the initial emf of the cell. Sn4+, Sn2+/Pt, -0.14 V; Fe2+/Fe, -0.41',
    answer: 'Cell reaction: Fe + Sn4+ → Fe2+ + Sn2+; Emf = 0.27 V',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Redox Reactions',
    question_year: '2017'
  },
  {
    question:
      'From the named pair of half-cells, give the cell reaction of a possible voltaic cell that can be set up and the initial emf of the cell. H+/H2/Pt, 0.00 V; I2, I-/Pt 0.54 V',
    answer: 'Cell notation: H2 + I2 → 2H+ + 2I-; Emf = 0.54 V',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question: 'Explain what the Rate Law for a reaction is.',
    answer:
      'It is an equation showing how the rate of a reaction depends on the concentrations of reactants raised to various powers.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'Use the Rate Law to explain why the rate of every reaction gradually decreases with time.',
    answer:
      'Rate = k [Reactant]x; as reaction proceeds, concentration of the reactant decreases.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'A chemical reaction is represented by the equation: 2A + 3B → 2D. Give the Rate law for this reaction.',
    answer:
      'Rate = k[A]x [B]y; where x represents the order with respect to A and y with respect to B and are determined experimentally.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question: 'Distinguish between hydration and hydrolysis.',
    answer:
      'Hydration is the attraction of ions for a water molecule. Hydrolysis is the interaction of an ion with water to produce either hydronium ion or hydroxide ion.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: '2017'
  },
  {
    question: 'Distinguish between hard water and heavy water.',
    answer:
      'Hard water is water that does not lather easily with soap because of the presence of certain ions. Heavy water is another name for D2O.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: '2017'
  },
  {
    question:
      'Limestone, chemically CaCO3 is insoluble in water and yet water that passes through limestone deposits usually dissolves some of it to give soluble calcium hydrogen trioxocarbonate (IV), why? You may give an equation to illustrate your answer.',
    answer:
      'The water may have in it dissolved CO2. In the presence of CO2, CaCO3 dissolves to give Ca(HCO3)2. CaCO3 + H2O + CO2 → Ca(HCO3)2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'Molybdenum is a transition metal used in toughening steel. It occurs as a sulphide in its ore molybdenite. When the ore is roasted in air, the oxide MoO3 is formed as follows: 2MoS2 + 7O2 → 2MoO3 + 4SO2. Calculate the percentage loss in mass for this reaction.',
    answer: 'MoS2 + [O] → MoO3. % loss in mass = (16/160) *100 = 10%',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'If an ore contains only 4 % molybdenum sulphide, calculate the mass of the oxide that can be obtained from 10kg of the ore.',
    answer: 'Mass of oxide from the ore = 360 g of MoO3',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'Metallic molybdenum can be obtained from the oxide by reduction with carbon at high temperatures. Write a balanced equation for this step and calculate how much carbon is needed for 360 g of MoO3.',
    answer:
      '2MoO3 + 3C → 2Mo + 3CO2. Mass of oxide from the ore = 360 g of MoO3. Hence, 360 g MoO3 ≡ (360/144) *18 g C = 45 g of carbon',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },

  {
    question:
      'A 10 dm3 flask contains 5.6 g of nitrogen gas, 3.2 g of oxygen gas and some unknown mass of argon. If the total pressure of the gases in the flask is 100 kPa at 27 oC, what is the partial pressure of the argon? Give your answer to one place of decimal.',
    answer: 'Partial pressure of the argon = 25.2 kPa',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      '150 cm3 of 0.12 mol dm-3 solution of MgSO4 are added to 250 cm3 of 0.088 mol dm-3 Na2SO4 solution. Calculate the concentration of the SO42- ions in the mixed solution.',
    answer: 'Concentration of SO42- ions = 0.10 mol dm-3',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      '150 cm3 of 0.12 mol dm-3 solution of MgSO4 are added to 250 cm3 of 0.088 mol dm-3 Na2SO4 solution. Calculate the concentration of the Mg2+ ions in the mixed solution. Give your answer to 3 places of decimal.',
    answer: 'New concentration of Mg2+ ions = 0.045 mol dm-3',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'Isotopes of an element tend to have the same chemical properties. But for the element hydrogen, the isotopes hydrogen and deuterium, the chemical properties are significantly different. What could be the reason for this observation?',
    answer:
      'The significant differences could be attributed to the large mass ratio. Deuterium is twice as heavy as ordinary hydrogen.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: '2017'
  },
  {
    question:
      'The atomic radius of hydrogen is 0.037 nm whereas the ionic radius of the hydride ion is about 0.145 nm, about 3 ½ times, why this big change in size.',
    answer:
      'The hydrogen atom has only one electron in the 1s orbital. Additional electron to form the hydride ion results in higher mutual repulsion between the 2 electrons.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: '2017'
  },
  {
    question:
      'Why do you think the H+ ion is unable to exist on its own in water or ammonia',
    answer:
      'H+ ion is small and therefore has a high polarising power and attracts the electron pair on the water or ammonia molecule to form a bond.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonds',
    question_year: '2017'
  },
  {
    question:
      'Give the electronic configuration of an element with atomic number 40 and state where in the Periodic Table this will be found.',
    answer:
      'Electronic configuration: 1s22s22p63s23p64s23d104p65s24d2. The element will be a member of 2nd set of d-transition series.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: '2017'
  },
  {
    question:
      'Give the electronic configuration of an element with atomic number 28, and state where in the Periodic Table it can be found.',
    answer:
      'Electronic configuration: 1s22s22p63s23p64s23d8. It is a member of the 1st series of d-transition elements.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: '2017'
  },
  {
    question:
      'Give the general electronic configurations of elements in Group (III) or 13 and Group (V) or 15 and predict the valences of the elements in these groups',
    answer:
      'Group (III) electronic configuration: ns2np1; Valence: +3. Group (V) electronic configuration: ns2np3; Valence: -3, +1, +2, +3, +4, +5.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Periodicity',
    question_year: '2017'
  },
  {
    question:
      'Preamble to all schools: Consider the following bonds and their respective bond energies all in kJmol-1...',
    answer:
      'Enthalpy change for the hydrogenation of propene to propane is -134 kJmol-1. Bond energy calculation for the hydrogenation of propene to propane results in an enthalpy change of -134 kJmol-1.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: '2017'
  },
  {
    question:
      'Preamble to all schools: Consider the following bonds and their respective bond energies all in kJmol-1...',
    answer:
      'Enthalpy change for the hydrogenation of propyne to propane is -303 kJmol-1, which is more than twice the enthalpy change for propene. The reduction of C=C in propyne is more exothermic compared to C=C in propene.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Energy & Energy Changes',
    question_year: '2017'
  },
  {
    question:
      'Hydroiodic acid HI is slowly oxidised by oxygen to give iodine and water. Give a balanced equation for this reaction',
    answer: 'Balanced equation: 4HI + O2 → 2H2O + 2I2',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry',
    question_year: '2017'
  },
  {
    question:
      'In a particular chemical reaction, 2 moles of A are converted into 3 moles of B. If the average rate of disappearance of A is given as 2.50 *10-4 mol dm-3 s-1, then what is the average rate of appearance of B over the same period.',
    answer: 'Average rate of appearance of B = 3.75 *10-4 mol dm-3 s-1',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'The solubility product of CaCO3 is 3.6 *10-9 at 27 °C. A land locked lake in the country sits on limestone. Approximately what mass in mg of CaCO3 may be obtained after evaporating 10 dm3 of the water from the lake?',
    answer:
      'Approximately 60.0 mg of CaCO3 may be obtained from 10 dm3 of water.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Solubility',
    question_year: '2017'
  },

  {
    question:
      'Pick the odd one out and give your reasons ; NCl3, CCl4, CH4, PCl3, BCl3, NH3',
    answer: 'BCl3',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonding',
    question_year: '2017'
  },
  {
    question:
      'In a molecule, a central atom has 6 hybridized orbitals and the molecule has octahedral shape. Which orbitals of the atom would have undergone hybridization to give this shape?',
    answer: 'sp3d2; i.e. one s, three p, two d orbitals',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonding',
    question_year: '2017'
  },
  {
    question:
      'There are three types of carbons in organic compounds; the sp-, sp2- and sp3- hybridized carbons. They are known to have different electronegativities. The sp- hybridized carbon has the highest electronegativity, why?',
    answer:
      'Electronegativity is the ability of an atom of an element to pull electrons to itself. The s-orbital is closest to the nucleus. The sp hybrid orbital has the highest s – character and so has the greatest ability to pull electrons.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonding',
    question_year: '2017'
  },
  {
    question:
      'In a Mass Spectrometer, a sample is injected into an evacuated chamber. Why an evacuated chamber?',
    answer:
      'To vaporize the sample. Also to make sure there are no unwanted (gaseous) molecules',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: '2017'
  },
  {
    question: 'Why is the sample made to collide with high-energy electrons?',
    answer: 'To ionize the molecules or atoms to give positively charged ions',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: '2017'
  },
  {
    question:
      'The ions are made to pass between North and South poles of a magnetic field. Explain the purpose of this',
    answer:
      'The magnetic field bends the path of the charged ions, the lighter ions bent more sharply than the heavier ones. OR the magnetic field causes the ions to move in circular paths, the lighter the ion the smaller the radius.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Introduction To Atomic Structure',
    question_year: '2017'
  },
  {
    question:
      'Each school will be given two half – cells with their corresponding electrode potentials. The intention is to create a voltaic cell with the half – cells. You are required to give the equation for the overall reaction and the initial emf of the cell.',
    answer:
      'Anode: H2 - 2e → 2H+ (0.00)\nCathode: 2AgCl + 2e → 2Ag + 2Cl- (0.22)\nOverall: 2AgCl + H2 → 2Ag + 2Cl- + 2H+\nEmf = 0.22 V',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question:
      'Each school will be given two half – cells with their corresponding electrode potentials. The intention is to create a voltaic cell with the half – cells.',
    answer:
      'Anode: 2Hg - 2e → Hg22+ (-0.80)\nCathode: NO3- + 4H+ + 3e → NO + 2H2O (0.96)\nOverall: 6Hg + 2NO3- + 8H+ → 3Hg22+ + 2NO + 4H2O\nEmf = 0.16 V',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question:
      'Each school will be given two half – cells with their corresponding electrode potentials. The intention is to create a voltaic cell with the half – cells.',
    answer:
      'Anode: Cd - 2e → Cd2+ (0.41)\nCathode: ClO2- + H2O + 2e → ClO- + 2OH- (0.59)\nOverall: Cd + ClO2- + H2O → Cd2+ + ClO- + 2OH-\nEmf = 1.00 V',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question:
      'If it takes 50 cm3 of oxygen gas 20 seconds to diffuse through a pinhole into a vacuum, how long will it take hydrogen and SO2 gases to diffuse under the same conditions. In the case of SO2, you may leave your answer as a surd',
    answer:
      "SO2 = 32 + 32 = 64; H2 = 2\nFrom Graham's law; Rate2/Rate1 = √ (M1/M2) = t1/t2\nFor hydrogen, t = t0√ (2/32) = 20/4 = 5 secs\nFor SO2, t = t0√ (64/32) = 20√2 secs",
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'States Of Matter',
    question_year: '2017'
  },
  {
    question: 'State Avogadro’s Law:',
    answer:
      'Equal volumes of different gases at the same temperature and pressure contain the same number of molecules',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Mole Concept',
    question_year: '2017'
  },
  {
    question:
      'Calculate the mass of aluminum that will be formed after passing 0.4 F charge through an electrolytic cell containing molten alumina.',
    answer:
      'Al2O3 + 6F → 2Al + 3/2O2\nHence, 0.4 F ≡ (0.4/6) * 2Al = (0.4/3) * 27 = 3.6 g',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: '2017'
  },
  {
    question: 'Define ‘chemical equilibrium’',
    answer:
      'It is the state of a reversible reaction in which the rate of the forward reaction is equal to the rate of the backward reaction. OR A state in which there is no change in the composition of the reaction mixture',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'Distinguish between KC and KP of an equilibrium reaction in the gaseous phase and state how the two are related',
    answer:
      'KC is the equilibrium constant in which the concentrations of the reactants and products are used in the equilibrium constant expression. For KP, the partial pressures of the reactants and products are used. KP = KC (RT)^Δn where Δn is the difference between the number of moles of product and moles of reactants.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Kinetics & Equilibrium',
    question_year: '2017'
  },
  {
    question:
      'Explain how addition of a catalyst affects the equilibrium and therefore the equilibrium constant of an equilibrium reaction.',
    answer:
      'Addition of catalyst hastens the reaction to reach equilibrium because it increases the rate of both the forward and backward step to the same extent. The Keq remains constant',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Catalyst and Equilibrium',
    question_year: '2017'
  },

  {
    question:
      'It has been found that contrary to Boyle’s Law the product of volume and pressure (PV) for CO2 is not quite constant at high pressures and low temperatures, why?',
    answer:
      'At high pressures or low temperatures, the density of the gas is high and the size of the molecules compared to intermolecular distances is no longer negligible. Secondly, the intermolecular forces when the molecules are close are no longer negligible.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: "Deviation from Boyle's Law",
    question_year: '2017'
  },
  {
    question:
      'The Kinetic Theory states that when gaseous molecules or atoms collide with one another or with the walls of the container of the gas, the collisions are elastic. What would have been the case if the collisions were not elastic?',
    answer:
      'If the collisions were not elastic, the molecules would lose energy and the pressure will gradually decrease to zero even at constant temperature.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Elastic Collisions',
    question_year: '2017'
  },
  {
    question:
      'What does the Kinetic Theory say about the average kinetic energy of a gaseous molecule?',
    answer:
      'The average Kinetic Energy of a molecule is proportional to the absolute temperature.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Kinetic Theory and Average Kinetic Energy',
    question_year: '2017'
  },
  {
    question:
      'When 200 cm3 of 0.15 mol/dm3 dilute HCl solution are added to 300 cm3 of 0.20 mol/dm3 NH3 solution, which substance will be in excess and what will be its concentration after the addition?',
    answer:
      'NH3 will be in excess (by 30 mmol). Concentration of the NH3 = 0.060 mol/dm3',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Mixing Acid and Base Solutions',
    question_year: '2017'
  },
  {
    question:
      'Explain how you would prepare 500 cm3 of 0.25 mol/dm3 solution of H2SO4 from an H2SO4 solution that is 16.0 mol/dm3.',
    answer:
      'Dilution 16.0 mol/dm3 to 0.25 mol/dm3; 1 in 64. Measure 7.8 cm3 of the 16.0 mol/dm3 acid and dilute it to 500 cm3 OR Take 10 cm3 and dilute to 640 cm3 and measure 500 cm3 of this.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Preparing a Dilute H2SO4 Solution',
    question_year: '2017'
  },
  {
    question:
      'Calculate the concentration of an HCl solution when 20 cm3 of 15.0 mol/dm3 HCl solution are diluted with 45.0 cm3 of water. Give your answer to 2 places of decimal.',
    answer:
      'Total volume = (20 + 45) cm3 = 65 cm3. Hence, 20 cm3 to 65 cm3; 1 in 3.25. Hence, the new concentration of the HCl = 4.62 mol/dm3.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Concentration Calculation',
    question_year: '2017'
  },
  {
    question:
      'Give the equilibrium constant Kc expression for the following reaction: 2SO3 (g) + 2Cl2 (g) → 2SO2Cl2 (g) + O2 (g).',
    answer: 'KC = [SO2Cl2]2[O2]/[SO3]2[Cl2]2',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Equilibrium Constant Expression',
    question_year: '2017'
  },
  {
    question:
      'The pKb of ammonia is 4.80. Calculate the pH of 0.01 mol/dm3 of dilute ammonia.',
    answer: 'pOH = ½ pKb - ½ log Cb = 4.8/2 + 1 = 3.40. pH = 14 – 3.40 = 10.60',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Calculating pH from pKb',
    question_year: '2017'
  },
  {
    question:
      'Consider the following electrodes with their corresponding potentials.',
    answer:
      'O3, O2, H+, H2O/Pt 2.07V; MnO4-, Mn2+, H+, H2O/Pt 1.21V; Na+/Na -2.71V; Sn2+/Sn -0.14V; H2O2, OH-/Pt 0.851V. Give the following oxidizing agents in an increasing order of oxidizing strength: Na+, Sn2+, H2O2, O3, and MnO4-.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Oxidizing Agents Order',
    question_year: '2017'
  },
  {
    question:
      'Silver gets its symbol from its Latin name. What is the Latin name for silver?',
    answer: 'Argentum (Ag)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: "Elements' Latin Names",
    question_year: '2017'
  },
  {
    question:
      'Gold gets its symbol from its Latin name. What is the Latin name for gold?',
    answer: 'Aurum (Au)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Buffer Solutions',
    question_year: '2017'
  },
  {
    question:
      'Mercury gets its symbol from its Latin name. What is the Latin name for mercury?',
    answer: 'Hydragyrum (liquid silver) (Hg)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Buffer Constituents',
    question_year: '2017'
  },
  {
    question: 'What is a buffer solution?',
    answer:
      'It is a solution that has the ability to resist changes in pH when limited amounts of acid or base are added to it.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Buffer Significance',
    question_year: '2017'
  },
  {
    question: 'Normally what are the constituents of a buffer solution?',
    answer:
      'A weak acid and its conjugate base or a weak base and its conjugate acid, and in each case both substances present in significant amounts in solution.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Collecting Argon',
    question_year: '2017'
  },
  {
    question:
      'Why must a buffer contain significant amounts of both the acid and its conjugate base?',
    answer:
      'When a strong acid is added, the buffer has enough base to react with the added acid. When a strong base is added, the buffer has enough acid to react with the added base. The pH is maintained constant.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Mole and Pressure Calculation',
    question_year: '2017'
  },

  {
    question:
      'Some argon is collected by displacing water in a 500 cm3 a gas flask at 27 °C and 834.6 kPa. If the water vapour pressure at 27 °C is 3.6 kPa, calculate the moles of argon collected. Give your answer to three places of decimal. Gas constant, R = 8.31 JK-1mol-1',
    answer:
      'Use Dalton’s Law of Partial Pressures\nPTotal = PAr + PH2O; 834.6 = PAr + 3.6\nPAr = 831\nBut, n = PV/RT; n = (831* 0.5)/(8.31 *300) = 0.5/3 = 0.167',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Partial Pressure of CO2',
    question_year: 2017
  },
  {
    question:
      'A 1.0dm3 flask is filled with helium gas at 27 °C until the pressure is 50 kPa. Calculate the total pressure when 4.4 g of CO2 are added to the flask. Gas constant R is 8.31 JK-1mol-1. C = 12.0; O = 16.0',
    answer:
      'Molar mass of CO2 = 44\nMoles of CO2 in 4.4 g = 4.4/44 = 0.1\nPressure of 0.1 mol of CO2; PCO2 = (nRT)/V\nPCO2 = (0.1 * 8.31 * 300)/1.0 = 83.1 * 3 = 249.3 kPa\nTotal pressure = (50 + 249.3) kPa = 299.3 kPa',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Reaction Rate and Rate Constant',
    question_year: 2017
  },
  {
    question:
      'A 1.0 dm3 flask contains equal numbers of mole of CO2, Argon and Nitrogen at 27 °C. If the total pressure is 450 kPa, calculate the partial pressure of the CO2 gas',
    answer:
      'Use Dalton’s Law of Partial Pressures\nMoles of CO2 = 1/3 of the total number of moles\nHence, PCO2 = 1/3 * 450 kPa = 150 kPa',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'First Order Reaction Half-life',
    question_year: 2017
  },
  {
    question:
      'In the reaction between methyl iodide and the hydroxide ion, all in the aqueous phase, the reaction is first order with respect to each of the reactants. Use the following data to calculate the rate constant of the reaction, give the answer with the units in the scientific form to one place of decimal.\nInitial concentration of MeI is 1.35 moldm-3.\nInitial concentration of OH- is 0.1 moldm-3.\nInitial rate of Reaction is 8.1*10-5 moldm-3s-1',
    answer:
      'In the reaction between methyl iodide and the hydroxide ion, all in the aqueous phase, the reaction is first order with respect to each of the reactants. Use the following data to calculate the rate constant of the reaction, give the answer with the units in the scientific form to one place of decimal.\nInitial concentration of MeI is 1.35 moldm-3.\nInitial concentration of OH- is 0.1 moldm-3.\nInitial rate of Reaction is 8.1*10-5 moldm-3s-1',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Reaction Intermediate',
    question_year: 2017
  },
  {
    question:
      'A first order reaction has a half-life of 50 minutes. Calculate the rate constant of the reaction. And give your answer with the units in the scientific form to two places of decimal.',
    answer:
      'For first order; t1/2 = 0.693/k\nRate constant k = 0.693/t1/2 = 0.693/(50 * 60) = 0.693/3 * 10^3 = 2.31*10^-4s-1',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Standard Enthalpy of Formation',
    question_year: 2017
  },
  {
    question: 'Explain what is meant by a reaction intermediate',
    answer:
      'It is a species which is produced during the reaction but does not appear in the net equation. (because it reacts in subsequent step in the reaction mechanism)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Standard Enthalpy of Combustion',
    question_year: 2017
  },
  {
    question: 'Define the term ‘Standard Enthalpy of Formation’ of a substance',
    answer:
      'Standard Enthalpy of Formation of a substance is the enthalpy/heat change when a mole of the substance is formed from its constituent elements in their standard states at 298 K and 100 kPa',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Standard Enthalpy of Solution',
    question_year: 2017
  },
  {
    question:
      'Define the term ‘Standard Enthalpy of Combustion’ of a substance',
    answer:
      'It is the enthalpy/heat change when one mole of a substance is burnt completely in excess oxygen under standard conditions (or 298 K and 100 kPa)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Electrolysis of Dilute HCl',
    question_year: 2017
  },
  {
    question:
      'Explain why in the electrolysis of dilute HCl using inert electrodes, the acidity of the solution increases',
    answer:
      'Electrolysis of dilute HCl is equivalent to electrolysis of water. As water is removed from the solution the concentration of HCl increases and hence acidity increases',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Electrolysis of CuSO4',
    question_year: 2017
  },

  {
    question:
      'Explain why in the electrolysis of CuSO4 solutions using platinum electrodes the color of the solution fades, but in the electrolysis using copper electrodes the color remains unchanged.',
    answer:
      'In the electrolysis of CuSO4 solution using inert electrodes, (Pt or C) Cu2+ ions are discharged at the cathode whilst O2 is formed by oxidation of water at the anode. The color is due to the Cu2+ ions; hence, as they are removed from the solution, the color fades. When copper electrodes are used, copper is deposited at the cathode as copper goes into solution at the anode, hence the concentration of Cu2+ remains constant, and the color remains the same.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Solubility Product of FeCO3',
    question_year: 2017
  },
  {
    question:
      'Explain why in the electrolysis of dilute H2SO4 using inert electrodes, the concentration of H2SO4 increases.',
    answer:
      'Electrolysis of dilute H2SO4 using inert electrodes is the electrolysis of water. As water is discharged, the concentration of H2SO4 increases.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Mass Calculation from Solubility Product',
    question_year: 2017
  },
  {
    question:
      'The solubility product of FeCO3 at 30°C is 3.6 *10^-11. Calculate the mass of FeCO3 required to prepare 500 cm3 saturated solution of FeCO3 at 30°C. FeCO3 = 116',
    answer:
      'Solubility of FeCO3 at 30°C = √(36 *10^-12) = 6.0 *10^-6 moldm-3. Solubility in gdm-3 = (6 * 116) *10^-6 = 696 *10^-6. For 500 cm3, mass of FeCO3 required = 348 *10^-6 g or 3.48*10^-4 g.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Solubility of FeCO3',
    question_year: 2017
  },
  {
    question:
      'The solubility product of a salt MX of molar mass 108 is 2.5 *10^-9 at 30°C. Calculate the mass of the solid MX that can be obtained by evaporating 250 cm3 of the saturated solution at 30°C.',
    answer:
      'Solubility of solid MX at 30°C = √(25 *10^-10) = 5.0 *10^-5 moldm-3. Solubility in gdm-3 = 108 * 5.0 *10^-5. Solid to be recovered from 250 cm3 = 108 * 250 * 5.0 *10^-5 / 1000 = 27 * 5.0 *10^-5 = 1.35 *10^-3 g.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Electrode Potentials and Reduction',
    question_year: 2017
  },
  {
    question:
      'Calculate the solubility of Fe(OH)2 in moldm-3 in 0.10 moldm-3 NaOH solution at 30°C if at that temperature the solubility product of Fe(OH)2 is 8.0 *10^-16.',
    answer:
      'Ksp = [Fe2+][OH-]2. In 0.10 moldm-3 NaOH; 8.0 *10^-16 = [Fe2+][1.0 *10^-1]2; [Fe2+] = 8.0 *10^-14 moldm-3. Hence, the solubility of Fe(OH)2 in 0.10 moldm-3 = 8.0 *10^-14 moldm-3.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Volume of Chlorine Gas',
    question_year: 2017
  },
  {
    question:
      'Consider the following two half cells Cs+/Cs and Ag+/Ag. Their respective electrode potentials are -2.9 V and 0.80 V. Can Caesium metal reduce silver (I) to silver metal? Explain your answer.',
    answer:
      'Consider the cell with the half-cells\nAnode/oxidation: Cs - e → Cs+ + 2.9 V\nCathode/reduction: Ag+ + e → Ag 0.80 V\nCell reaction: Cs + Ag+ → Cs+ + Ag 3.70 V\nA cell in which Cs reduces Ag+ to Ag will have a positive emf. Hence Cs can reduce Ag+ to Ag.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Molar Mass Calculation',
    question_year: 2017
  },
  {
    question:
      'Calculate the volume of chlorine gas at STP that can be harvested in electrolysis of molten NaCl after passing a current of 0.36 Faraday. Molar volume of a gas at STP is 22.4 dm3. Give your answer to three places decimal.',
    answer:
      'NaCl + 1F → Na+ + ½ Cl2\n1 F ≡ 22.4/2 dm3 Cl2 at STP. Hence, 0.36 F ≡ (22.4/2) * (0.36/1) dm3 = 4.032 dm3 Cl2',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Volumetric Exercise Items',
    question_year: 2017
  },
  {
    question:
      '38g of a certain gas that occupied 16.62 dm3 volume exerted a pressure of 95 kPa at 27°C. Calculate the molar mass of the gas. Assume R = 8.31 JK-1mol-1',
    answer:
      'Use the Ideal gas equation; PV = nRT ; n = PV/RT. n = (95 * 16.62)/ (300 * 8.31) = 19/30 mol. But n = m/M, where M is molar mass. 19/30 = 38/M; M = (30 * 38)/19 = 60.0g',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Distillation Difference',
    question_year: 2017
  },
  {
    question:
      'Identify the items of the following that may not be needed for a volumetric exercise: (i) Vigreux column (ii) beaker (iii) volumetric flask (iv) watch glass (v) Analytical balance (vi) Pipette',
    answer: '(i) Vigreux column and (iv) watch glass',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Smooth Boiling in Round Flask',
    question_year: 2017
  },
  {
    question:
      'What is the main difference between the assembly of equipment for simple distillation and one for fractional distillation?',
    answer:
      'For fractional distillation, a fractionating or fractionation column is needed.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'P-Electrons in Element with Atomic Number 24',
    question_year: 2017
  },

  {
    question:
      'How do you ensure that boiling of liquid in a round bottom flask the liquid boils smoothly and without any bumps?',
    answer: 'Boiling chips are added.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Smooth Boiling in Round Flask',
    question_year: 2017
  },
  {
    question:
      'How many p-electrons does an element with atomic number 24 possess?',
    answer: '24 ≡ 1s22s22p63s23p64s23d4; 12 p electrons',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic:
      'P-Orbitals with Unpaired Electrons in Element with Atomic Number 16',
    question_year: 2017
  },
  {
    question:
      'How many p-orbitals will be occupied with unpaired electrons in an element with atomic number 16?',
    answer: '16 = 1s22s22p63s23p4; two p-orbitals; p4 = px2py1pz1',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Main Group of Element with Atomic Number 32',
    question_year: 2017
  },
  {
    question:
      'Which Main Group in the Periodic Table will the element with atomic number 32 belong?',
    answer: '32 = 1s22s22p63s23p64s23d104p2; Group (IV) (ns2np2)',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Percentage Carbon in Trioxocarbonate(IV) Acid',
    question_year: 2017
  },
  {
    question:
      'Calculate the percentage carbon in trioxocarbonate (IV) acid and give your answer to one place of decimal.',
    answer: 'H2CO3 = 2 + 12 + 48 = 62 %C = (12/62) * 100 = 19.4%',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Percentage Oxygen in Tetraoxochromate(VI) Acid',
    question_year: 2017
  },
  {
    question:
      'Calculate the percentage oxygen in tetraoxochromate(VI) acid and give your answer to one place of decimal.',
    answer: 'H2CrO4 = 2 + 52 + 64 = 118 %O = (64/118) * 100 = 54.2%',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Percentage Oxygen in Tetraoxochromate(VI) Acid',
    question_year: 2017
  },
  {
    question:
      'Calculate the percentage oxygen in trioxosulphate(IV) acid and give your answer to one place of decimal.',
    answer: 'H2SO3 = 2 + 32 + 48 = 82 %O = (48/82) * 100 = 58.5%',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Identifying Unknown Gas',
    question_year: 2017
  },
  {
    question:
      'Equal volumes of nitrogen gas and an unknown gas at the same temperature and pressure weigh 2.80g and 8.00g respectively. Which of the following is the unknown gas; NO2, SO2 and SO3?',
    answer:
      'Equal volumes of gases at the same temperature and pressure contain the same amount in moles. Moles of N2 = 2.80/28 = 0.10. The amount of unknown gas should be 0.10; NO2 = 8/46 = 0.17 > 0.10, SO2 = 8/64 = 0.13 > 0.10, SO3 = 8/80 = 0.10. Unknown gas is SO3.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Calculating pH from pKa',
    question_year: 2017
  },
  {
    question:
      'Give the following compounds in order of increasing oxidation state of the carbon atom: CO2; H2CO; CH4; CH3OH; CO',
    answer: 'CH4 < H2CO < CO < CH3OH < CO2\n- 4 < - 2 < 0 < + 2 < + 4',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Acid-Base Reaction (Bronsted-Lowry)',
    question_year: 2017
  },
  {
    question:
      'The pKa of oxochlorate (I) acid, HClO is 7.4. Calculate the pH of its 0.10 moldm-3 solution.',
    answer: 'pH = ½ pKa - ½ log Ca = 7.4/2 + 0.5 = 4.2',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Acid-Base Reaction (Lewis Concept)',
    question_year: 2017
  },

  {
    question:
      'On the basis of Bronsted and Lowry Theory, what is an acid – base reaction?',
    answer:
      'An acid – base reaction is a reaction in which there is a transfer of a proton (or H+) from an acid to a base.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Conjugate Acid-Base Pair',
    question_year: 2017
  },
  {
    question:
      'How can one describe the acid - base reaction on the basis of Lewis Concept of acids and bases?',
    answer:
      'An acid – base reaction is one in which an electron pair is donated from a base into an empty orbital of an acid to form a dative covalent bond.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Conjugate Acid-Base Pair',
    question_year: 2017
  },
  {
    question:
      'Which concept of acid – base reaction creates the conjugate acid – base pair? Give a general example.',
    answer:
      'Bronsted – Lowry concept gives rise to the acid – base conjugate pair. e.g. HA acid donates a proton to become A-. HA and A- are a conjugate pair, OR B base accepts a proton to form BH+. B and BH+ are base – acid conjugate pair.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Conjugate Acid-Base Pair',
    question_year: 2017
  },
  {
    question:
      '20 cm3 of 0.170 moldm-3 of HCl are diluted to 400 cm3. Calculate the new concentration and give your answer to three places of decimal.',
    answer:
      'Dilution: 20 → 400; 1 in 20. New concentration = 0.170/20 = 0.0085 = 0.009',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume Change upon Dilution',
    question_year: 2017
  },
  {
    question:
      '30 cm3 of an HCl solution with pH = 1 was diluted with water till the pH changed to 2. What volume of water was added?',
    answer:
      'pH = 1 means HCl concentration is 0.10 moldm-3. pH = 2 means HCl concentration is 0.010 moldm-3. Dilution is 1 in 10. Hence, 270 cm3 water were added to give 300 cm3.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume Change upon Dilution',
    question_year: 2017
  },
  {
    question:
      '50 cm3 of 0.240 moldm-3 of NaOH are diluted to 100 cm3. 10 cm3 of the diluted solution are further diluted to 60 cm3. Calculate the concentration of the NaOH of the 60 cm3 solution.',
    answer:
      '1st dilution 50 cm3 → 100 cm3; 1 in 2. 2nd dilution 10 cm3 → 60 cm3; 1 in 6. Total dilution 1 in 12. New concentration = 0.24/12 = 0.020 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume Change upon Dilution',
    question_year: 2017
  },
  {
    question:
      'Nitrogen(II) oxide reacts with chlorine gas to give nitrogen oxochlorate (I) (or nitrosyl chloride) according to the equation:\n2NO (g) + Cl2 (g) → 2NOCl\nIn order to determine the rate law for the reaction, the following rate measurements were carried out:',
    answer:
      'Consider Experiments (1) and (2). By trebling the concentration of NO, while the concentration of Cl2 remains constant, rate increases by a factor of 9 (1.088/0.121). Hence the order is 2nd order with respect to NO.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction Order Determination',
    question_year: 2017
  },
  {
    question:
      'Nitrogen(II) oxide reacts with chlorine gas to give nitrogen oxochlorate (I) (or nitrosyl chloride) according to the equation:\n2NO (g) + Cl2 (g) → 2NOCl\nThe reaction is second order with respect to NO; assuming the order of the reaction is first order with respect to chlorine, use the results of experiment (1) to calculate the rate constant of the reaction. Give the units of the rate constant.',
    answer:
      'Rate = k [NO]2[Cl2]; 1.21 * 10-1 = k [1 * 10-1]2[1 * 10-1]. 1.21 * 10-1 = k [1 * 10-3]. k = 1.21 * 102. Units: (moldm-3)-2s-1 or mol-2dm6s-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Rate Constant Calculation',
    question_year: 2017
  },
  {
    question:
      'Deoxyribofuranose is the sugar on which the nucleic acid DNA is built. Ribofuranose is the sugar on which the nucleic acid RNA is built. What is the difference between Deoxyribofuranose and Ribofuranose?',
    answer:
      'Both of them have the same structure except that the deoxyribofuranose lacks oxygen (or OH) on one of the carbons of ribofuranose.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Differences Between Deoxyribofuranose and Ribofuranose',
    question_year: 2017
  },
  {
    question:
      'The Kinetic Molecular Theory is a simple theoretical model to explain the behavior of gases. The Theory is based on six postulates. Each school is to give two of the postulates but only one at a time.',
    answer:
      '(1) Gases are composed of molecules (or atoms or particles) in a state of constant motion\n(2) The size of the particles is negligible compared to the average distances between them; hence most of the volume of a gas is empty space\n(3) These particles move in straight lines until they collide with another particle or the walls of the container.\n(4) There is no force of attraction (or repulsion) between the gas particles and the walls of the container\n(5) Collisions between the gas particles or collisions with the walls of the container are elastic.\n(6) The average kinetic energy of a collection of gas particles depends on the temperature of the gas and nothing else',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Kinetic Molecular Theory Postulates',
    question_year: 2017
  },

  {
    question:
      'Radium–226, atomic number 88 undergoes alpha emission to give a new nuclide and no other nuclear particle. Write a balanced equation for this decay and suggest what other decay or decay(s) will yield the same nuclide.',
    answer:
      '22688Ra → 22286X + 42α. Other decay: emission of two protons and two neutrons: 22688Ra → 22286X + 211p + 210n',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Alpha Emission in Radioactive Decay',
    question_year: 2017
  },
  {
    question:
      'Plutonium–239, atomic number 94 undergoes a radioactive decay and a type of emission that can be used as a power source for heart pacemaker. If the new nuclide is Uranium–235, atomic number 92, state the type of emission which is the source of energy.',
    answer: 'Beta ray of two electrons are emitted: 411H → 42He + 201e',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Radioactive Decay in Power Sources',
    question_year: 2017
  },
  {
    question: 'Decane is a hydrocarbon. What is the molar mass of decanal?',
    answer:
      'Decane = C10H22. Decanal = C9H19-CHO = 108 + 19 + 29 = 156. OR Decane = C10H22 = 142. For decanal, decane loses 2H and gains one O, hence = 142 – 2 + 16 = 156.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Molar Mass Calculation',
    question_year: 2017
  },
  {
    question:
      'Magnesium metal burns in excess oxygen to give MgO. Calculate the mass of MgO expected from 78.0 g of magnesium metal, assuming the yield is only 90%.',
    answer:
      'Mg + ½ O2 → MgO. 24 g of Mg ≡ 40 g MgO. Hence, 78 g Mg = (78/24) * 40 g MgO = (13/4) * 40 g MgO = 130 g MgO. For 90% yield, mass of MgO = 0.9 * 130 = 117 g.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Magnesium Oxide Formation',
    question_year: 2017
  },
  {
    question:
      'What substance must be added to a solution of NaHCO3 to make a buffer whose pH is above 7?',
    answer: 'Na2CO3 or sodium trioxocarbonate (IV).',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Buffer Solution Components',
    question_year: 2017
  },
  {
    question:
      'Biotechnology may be used to extract gold from its ore. Explain how this is done?',
    answer:
      'Some microbes are introduced into a suspension of the powdered ore in water. The microbes feed on the impurities and free the gold from its solid matrix.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gold Extraction in Biotechnology',
    question_year: 2017
  },
  {
    question:
      'In the extraction of iron using the Blast Furnace, explain why iron is always at the bottom of the furnace with the slag on top of it and not vice versa.',
    answer: 'The slag is less dense than the molten iron.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Blast Furnace in Iron Extraction',
    question_year: 2017
  },
  {
    question:
      'In the extraction of aluminium from bauxite, the ore is treated with a concentrated solution of NaOH, and then the solution is seeded. What substance precipitates out at this stage?',
    answer: 'Aluminium hydroxide Al(OH)3.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Precipitation in Aluminum Extraction',
    question_year: 2017
  },
  {
    question:
      'Two half-cells are provided; state which half-cell will constitute the anode and which one will constitute the cathode and give the maximum initial emf of a voltaic cell that can be constructed from the half-cells.',
    answer: 'Anode: Cd2+/Cd, Cathode: Cu2+/Cu, Emf = 0.4 + 0.34 = 0.74 V.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Voltaic Cell and Initial EMF',
    question_year: 2017
  },
  {
    question:
      'Two half-cells are provided; state which half-cell will constitute the anode and which one will constitute the cathode and give the maximum initial emf of a voltaic cell that can be constructed from the half-cells.',
    answer: 'Anode: Sn4+,Sn2+/Pt, Cathode: Ag+/Ag, Emf = 0.80 - 0.15 = 0.65 V.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Voltaic Cell Initial EMF (Different Half-Cells)',
    question_year: 2017
  },

  {
    question:
      'Two half-cells are provided; state which half-cell will constitute the anode and which one will constitute the cathode and give the maximum initial emf of a voltaic cell that can be constructed from the half-cells.',
    answer: 'Anode: I2/I-/Pt; Cathode: Cr3+/Cr; Emf = 0.20 V',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Voltaic Cell Initial EMF (Different Half-Cells)',
    question_year: 2017
  },
  {
    question:
      'NO2 dimerises in a reversible process to give N2O4 according to the following equation: 2NO2 → N2O4',
    answer: 'xxxxx',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Voltaic Cell Initial EMF (Different Half-Cells)',
    question_year: 2017
  },
  {
    question:
      'In one such reaction a one-litre flask was charged with 1 mole of NO2 and heated to 100°C. At equilibrium, it was found that 0.25 mol of N2O4 was formed. Find the equilibrium constant.',
    answer: 'KC = 1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Equilibrium Reaction: NO2 and N2O4',
    question_year: 2017
  },
  {
    question:
      'In another reaction, the initial amount of NO2 was 2 mol. At equilibrium at 125°C, the amount of NO2 left was found to be 0.4 mol. Calculate the equilibrium constant at 125°C.',
    answer: 'KC = 5',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Equilibrium Constant Calculation',
    question_year: 2017
  },
  {
    question:
      'State the LeChàtelier’s Principle and use it to determine the effect of increased pressure on the equilibrium between NO2 and N2O4.',
    answer:
      'LeChâtelier’s Principle states that when a system in equilibrium is altered by a change, of the same condition, a change occurs to shift the equilibrium composition (or equilibrium point) in a way that tends to reduce that change of condition. In the equilibrium reaction, the number of gaseous molecules decreases from left to right. Increase in pressure will favor the forward reaction or will shift the equilibrium position to the right.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: "Le Chatelier's Principle and Pressure",
    question_year: 2017
  },
  {
    question:
      'If water from a borehole is described as hard water, name two common cations that may be present.',
    answer: 'Any two of Ca2+, Mg2+, Fe2+, and Fe3+',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Identification of Cations in Hard Water',
    question_year: 2017
  },
  {
    question:
      'Explain why the presence of only HCO3- anions as opposed to Cl- ions in the water from the borehole will make a difference in the method of softening the water.',
    answer:
      'The presence of HCO3- makes the water of temporary hardness which can be softened by boiling.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Softening Water Method Differences',
    question_year: 2017
  },
  {
    question:
      'Assuming the water of the borehole contains mainly Ca2+ and Mg2+ and chloride ions, give one method for softening the water.',
    answer:
      'Ions can be removed by ion exchange using ion-exchange chromatography, Reverse osmosis in which water is forced through a semipermeable membrane from a concentrated solution to a dilute one, Addition of Na2CO3.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Softening Water with Ca2+ and Mg2+',
    question_year: 2017
  },
  {
    question:
      'Consider the following bond energies all in kJmol-1: C – Cl 327; C – Br 285; C – I 213; C – O 358. Calculate the appropriate enthalpy change for the nucleophilic attack by the OH- on ethyl chloride to give ethanol.',
    answer: '∆H reaction = 327 - 358 = -31 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Enthalpy Change Calculation',
    question_year: 2017
  },
  {
    question:
      'Consider the following bond energies all in kJmol-1: C – Cl 327; C – Br 285; C – I 213; C – O 358. Calculate the approximate enthalpy change for the attack of OH- on ethyl bromide to give ethanol.',
    answer: '∆H reaction = 285 - 358 = -73 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Enthalpy Change Calculation',
    question_year: 2017
  },

  {
    question:
      'Consider the following bond energies all in kJmol-1: C – Cl 327; C – Br 285; C – I 213; C – O 358. Calculate the approximate enthalpy change for the reaction between OH- on ethyl iodide to give ethanol.',
    answer: '∆H reaction = 213 - 358 = -145 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Enthalpy Change Calculation',
    question_year: 2017
  },
  {
    question:
      'A flask contains 400 cm-3 of 0.125 moldm-3 H2SO4. What volume of 0.09 moldm-3 NaOH solution must be added to this solution to convert all the H2SO4 to NaHSO4? Give your answer to one place of decimal.',
    answer: 'V = 555.6 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Conversion of H2SO4 to NaHSO4',
    question_year: 2017
  },
  {
    question:
      'An element X has three natural isotopes X1, X2, and X3 with natural abundances 60%, 30%, and 10% respectively. If the corresponding mass numbers are 50, 54, and 56, calculate the relative atomic weight of the element.',
    answer: 'Relative Atomic weight = 51.8',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Relative Atomic Weight Calculation',
    question_year: 2017
  },
  {
    question: 'What type of polymer is natural rubber?',
    answer: 'Addition polymer',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Natural Rubber Polymer',
    question_year: 2017
  },
  {
    question: 'Protium is one of the isotopes of hydrogen. What are the rest?',
    answer: 'Deuterium and tritium',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Hydrogen Isotopes',
    question_year: 2017
  },
  {
    question:
      'How many natural isotopes does the element carbon have? Give their mass numbers.',
    answer: '3 Natural isotopes; Carbon – 12, carbon – 13, and carbon - 14',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Carbon Isotopes',
    question_year: 2017
  },
  {
    question: 'What does the atomic number of an element represent?',
    answer:
      'The number of protons (or the number of extra-nuclear electrons) in a neutral atom of the element',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Atomic Number Significance',
    question_year: 2017
  },
  {
    question:
      'Calculate the enthalpy change per mole for incomplete combustion of gaseous methanal to CO and H2O. The balanced equation for the reaction is: 2HCHO (g) + O2 (g) → 2CO (g) + 2H2O (l) The enthalpies of formation all in kJmol-1 of CO (g), H2O (l), and HCHO (g) are -110.5, -285.8, and -108.6 respectively.',
    answer: '∆H reaction = -287.7 or -2.88 * 102 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Enthalpy Change in Methanal Combustion',
    question_year: 2017
  },
  {
    question:
      'Solid barium oxide reacts with an aqueous solution of HCl to give barium ions, chloride ions, and water. Use the following enthalpies of formation all in kJmol-1 to calculate enthalpy of a reaction of a mole of barium oxide.',
    answer: 'H reaction = -269.1 or -2.691*102 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Enthalpy Change in BaO and HCl Reaction',
    question_year: 2017
  },
  {
    question:
      'Solid PbSO4 is precipitated when dilute H2SO4 is added to Pb2+ in solution. Calculate the enthalpy change when 1 mole of PbSO4 is precipitated from the following enthalpies of formation all in kJmol-1.',
    answer: 'H reaction = -8.9 kJmol-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Enthalpy Change in PbSO4 Precipitation',
    question_year: 2017
  },

  {
    question:
      'Hydrogen gas reacts with iodine vapor to form HI according to the following equation: H2 (g) + I2 (g) 2HI 1.00 mol of H2 and 2.00 mol of I2 are mixed in a one-liter vessel and heated to a temperature T 0C. At equilibrium, there is only 0.10 mol H2 left. Determine the equilibrium composition of the mixture in the flask.',
    answer:
      'The equilibrium mixture will consist of; H2 0.10 mol; I2 1.10 mol; HI 1.8 mol',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Equilibrium Composition Calculation',
    question_year: 2017
  },
  {
    question:
      'Calcium tetraoxosulfate (VI) has a solubility product of 2.5 *10-5 at about 30 0C. Calculate the solubility of this salt in water and in 0.10 mol dm-3 H2SO4 solution. Account for the difference if any.',
    answer: 'Solubility in H2SO4 is lower, due to the common ion effect.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility Calculation for CaSO4',
    question_year: 2017
  },
  {
    question: 'Give the anion name and ligand name of chlorine.',
    answer: 'Anion: Chloride; Ligand: Chloro',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Anion and Ligand Name for Chlorine',
    question_year: 2017
  },
  {
    question:
      'State the type of forces that we should expect in solid glucose.',
    answer: 'Hydrogen bonds',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Types of Forces in Solid Glucose',
    question_year: 2017
  },
  {
    question:
      'Strong hydrogen bonds are partly responsible for the structure of a long protein chain. Which groups in the chain could be responsible for the hydrogen bonds.',
    answer: 'NH of the amide group and the C=O of another molecule',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Hydrogen Bonding in Protein Structure',
    question_year: 2017
  },
  {
    question: 'What type of forces are expected in solid sodium chloride.',
    answer: 'Ionic/electrostatic forces between the ions',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Types of Forces in Solid Sodium Chloride',
    question_year: 2017
  },
  {
    question:
      'Carbon (IV) sulfide, also known as carbon disulfide, forms an explosive mixture in air reacting with oxygen gas to give carbon (II) oxide and sulfur (IV) oxide. Write a balanced equation for the reaction.',
    answer: '2CS2 + 5O2 → 2CO + 4SO2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction of Carbon Disulfide with Oxygen',
    question_year: 2017
  },
  {
    question:
      'Phosgene formula COCl2 is a highly poisonous gas. It reacts slowly with water to give carbonic acid and HCl. Write a balanced equation for the reaction.',
    answer: 'COCl2 + 2H2O → H2CO3 + 2HCl',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction of Phosgene with Water',
    question_year: 2017
  },
  {
    question:
      'Iron (III) hydroxide reacts with hydrogen sulfide to give iron (III) sulfide and water. Give a balanced equation for the reaction.',
    answer: '2Fe(OH)3 + 3H2S → Fe2S3 + 6H2O',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction of Iron(III) Hydroxide with Hydrogen Sulfide',
    question_year: 2017
  },
  {
    question:
      'Pick the odd one out and give your reason: Beer, Sea water, wine, urine, orange juice, and ethanol.',
    answer:
      'Odd one is ethanol. Ethanol is a pure substance, the rest are solutions or mixtures.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Odd One Out (Beer, Sea water, wine, urine, orange juice, ethanol)',
    question_year: 2017
  },

  {
    question:
      '200 cm3 of 0.090 mol dm-3 HCl solution are added to 300 cm3 of 0.120 mol dm-3 ammonia solution. Name the species that will be present in the mixed solution, give their respective concentrations in mol dm-3, and state the type of solution it is.',
    answer:
      'Species present are NH3, NH4+, and Cl- (NH4Cl). Concentrations of NH3 or NH4+ or Cl- = 0.036 mol dm-3. Type of solution: buffer (weak base + its conjugate acid)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical reaction',
    question_year: 2017
  },
  {
    question:
      'Consider the following half-cells with their corresponding electrode potentials: MnO4-, MnO2, OH-/Pt 0.59 V; Fe3+, Fe2+/Pt 0.77 V. Determine if the following redox reaction is possible: MnO4- + 3Fe2+ + 2H2O → MnO2 + 3Fe3+ + 4OH-. Give your reason.',
    answer:
      'The reaction is not possible because the calculated EMF of the overall reaction is -0.18 V, which is negative.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Redox Reaction Feasibility',
    question_year: 2017
  },
  {
    question:
      'Together with the d-transition elements, how many elements are there in the 5th Period of the Periodic Table?',
    answer: '18 (8 Main Group + 10 Transition Metals)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Periodic Table Periods and Total Elements',
    question_year: 2017
  },
  {
    question:
      'The sixth Period of the Periodic Table includes both the d-transition series and f-transition series. What is the total number of elements in the Period?',
    answer: '32 (8 Main Group + 10 d-transition + 14 f-transition)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Temperature and Pressure of Gas Mixture',
    question_year: 2017
  },
  {
    question:
      'How many naturally occurring elements may be classified as typical d-transition elements?',
    answer: 'Accept 30 or 31 to include Actinium',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acid-Base Neutralization',
    question_year: 2017
  },
  {
    question:
      'A glass container, containing 10 g of neon and some oxygen has a total pressure of 552 kPa at 27°C. Calculate the partial pressure of the neon gas.',
    answer: 'Partial pressure of neon = 252 kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volumetric Titration',
    question_year: 2017
  },
  {
    question:
      'Calculate the moles of oxygen present in the container. Give your answer to two decimal places. Assume the partial pressure of neon is 252 kPa.',
    answer: 'Moles of oxygen = 0.60 moles',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Balanced Chemical Reactions',
    question_year: 2017
  },
  {
    question:
      'How many moles of nitrogen gas at the same temperature have to be added to the container so that the pressure increases from 552 kPa to 720 kPa? Give your answer to two decimal places.',
    answer: 'Moles of nitrogen = 0.60 moles',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Enthalpy of Reaction',
    question_year: 2017
  },
  {
    question:
      '10 cm3 of a 0.90 mol dm-3 solution of HCl are diluted to 250 cm3. Calculate the new concentration of HCl in the diluted solution and give your answer to three decimal places.',
    answer: 'New concentration = 0.036 mol dm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Reduction of Fe2O3',
    question_year: 2017
  },
  {
    question:
      'Give a balanced equation for the heating of zinc sulfide in oxygen to give zinc oxide and sulfur (IV) oxide gas.',
    answer: '2ZnS + 3O2 → 2ZnO + 2SO2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electron Affinity',
    question_year: 2017
  },

  {
    question:
      'The balanced equation for the reaction between KMnO4 with SO32- solution in acidic medium is as follows: 2MnO4- + 5SO32- + 6H+ → 2Mn2+ + 5SO42- + 3H2O Calculate the volume of 0.10 mol dm-3 solution of KMnO4 that will react completely with 20 cm3 of acidified solution of 0.012 mol dm-3 K2SO3 and give your answer to one place of decimal.',
    answer: 'V = 9.6 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Ionization Energy Patterns',
    question_year: 2017
  },
  {
    question:
      'Why must energy be supplied to an atom of an element for an electron to be removed?',
    answer:
      'This is to overcome the attraction between the nucleus and the electron',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Predicting Bond Types',
    question_year: 2017
  },
  {
    question:
      'Although it takes relatively little energy to remove an electron from an atom, the ionization energy of an element becomes significant, why?',
    answer:
      'For an element, we need to consider a mole of the atoms hence the energy for an atom has to be multiplied by Avogadro’s number.',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Enthalpy of Formation Calculations',
    question_year: 2017
  },
  {
    question:
      'Experimental values of the first ionization energies for the first 20 elements (hydrogen to calcium) show several clear patterns. State any three.',
    answer:
      '1. The first ionization energy (IE) increases drastically as we go across a period.\n2. There is a big drop in the first ionization (IE) as we go from the end of one period to the beginning of the next period.\n3. There is a gradual decrease as we go down a Group.\n4. There are minor exceptions in a Period. e.g. Be, B, or Mg, Al.',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Structure of OH- Ion and Orbital Hybridization',
    question_year: 2017
  },
  {
    question:
      'You will be given the atomic number of two elements. On the basis of their electronic configurations state the type of bond expected to be formed between them. Element X with atomic number 6 and element Y with atomic number 14.',
    answer: 'Type of bond: covalent bond',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Balloon Volume Increase with Temperature',
    question_year: 2017
  },
  {
    question:
      'You will be given the atomic number of two elements. On the basis of their electronic configurations state the type of bond expected to be formed between them. Element X and Y with atomic numbers 11 and 17 respectively.',
    answer: 'Type of bond is ionic',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Elements Named After Countries or Regions',
    question_year: 2017
  },
  {
    question:
      'You will be given the atomic number of two elements. On the basis of their electronic configurations state the type of bond expected to be formed between them. Element X and Y with atomic numbers 8 and 20 respectively.',
    answer: 'Type of bond: Ionic',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Molecular Formula Calculation',
    question_year: 2017
  },
  {
    question:
      'Consider the reaction: 4NH3(g) + 5O2 (g) → 4NO (g) + 6H2O (g) ∆H = -910 kJ mol-1. Calculate the enthalpy of formation of NH3 (g), if the enthalpies of formation of NO (g) and H2O (g) are 90.3 kJ mol-1 and -240 kJ mol-1, respectively.',
    answer: '∆Hf(NH3) = -42.2 kJ mol-1',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Percentage Composition',
    question_year: 2017
  },
  {
    question:
      'Consider the reaction: 3NO2 (g) + H2O (l) → 2HNO3 (aq) + NO(g) ∆H = -140 kJ mol-1. Calculate the enthalpy of formation of HNO3 (aq), if the enthalpies of formation of NO2 (g), NO (g), and H2O (l) are 33.2 kJ mol-1, 90.3 kJ mol-1, and -286 kJ mol-1, respectively. Give your answer to one place of decimal.',
    answer: '∆Hf(HNO3) = -208.4 kJ mol-1',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Combustion Reactions',
    question_year: 2017
  },
  {
    question:
      'Trioxonitrate (V) acid decomposes when exposed to light according to the following equation: 4HNO3(aq) → 4NO2 (g) + 2H2O (l) + O2 (g). Determine whether this decomposition is exothermic or endothermic by calculating the enthalpy of reaction. Use the following enthalpies of formation: HNO3 (g) - 208.3 kJ mol-1; NO2 (g) 33.2 kJ mol-1; H2O (l) - 286 kJ mol-1.',
    answer: 'Reaction is Endothermic since ∆H reaction is positive',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Sweetness in Honey',
    question_year: 2017
  },

  {
    question:
      'Consider the following two equilibrium reactions and their corresponding equilibrium constants at 190 °C:\nN2 (g) + O2 (g) → 2NO (g) ……...........(1) KC = 3.0 *10^-18\n2NO (g) + O2 (g) → 2NO2 (g) ……. (2) KC = 2.5 *10^6\nUse the information given to determine the equilibrium constant Keq of the reaction:\nN2 (g) + 2O2 (g) → 2NO2(g)',
    answer: 'Keq = 7.5 *10^-12',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic:
      "Physical Constants (Avogadro's number, Faraday's constant, Molar Gas Constant)",
    question_year: 2017
  },
  {
    question:
      'A gas cylinder is filled with oxygen gas at 27 °C and 400 kPa. Calculate the pressure in the cylinder when the room temperature goes up by 30 °C and give your answer to one place of decimal.',
    answer: 'P2 = 440.0 kPa',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Electronic Configurations and Bond Types',
    question_year: 2017
  },
  {
    question:
      'One way of solving hardness of water before using it to wash articles of clothing is to soften it before use. What is another way of solving the problem?',
    answer:
      'To use a (synthetic) detergent which does not form insoluble salts with Ca2+ and Mg2',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Enthalpy Change Calculations',
    question_year: 2017
  },
  {
    question:
      'In the extraction of metals from their ores, sometimes the ores are first roasted in air. What is the purpose of this step?',
    answer:
      'The intention or aim is to convert the state of the metal to its oxide',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Gas Pressure Calculation',
    question_year: 2017
  },
  {
    question:
      'In the case of the gold that was mined in Obuasi from the deep mines, roasting could not have converted the gold to its oxide. The ore was nevertheless roasted. What was the purpose of the roasting in this context?',
    answer:
      'The purpose was to get rid of the arsenic sulphide that was present in the gold bearing ores as volatile oxides of sulfur and arsenic',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Water Softening Methods',
    question_year: 2017
  },
  {
    question:
      'Explain how Fe2O3 in an iron ore is reduced to metallic iron in a Blast Furnace.',
    answer:
      '(1) Coke is converted to CO at the base of the furnace.\n(2) The CO reacts with Fe2O3 to give a mixture of Fe and FeO.\n(3) The FeO reacts with more CO to give Fe.',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Roasting in Ore Extraction',
    question_year: 2017
  },
  {
    question: 'What does the Electron Affinity of an element represent?',
    answer:
      'It represents the ability of the gaseous atom of an element to take up an electron into its outermost shell.',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Electron Affinity vs. Electronegativity',
    question_year: 2017
  },
  {
    question:
      'What is the difference between electron affinity and electronegativity of an element?',
    answer:
      'Electron affinity is a measure in kJmol-1 of the ability of a gaseous atom to accept an electron, whereas electronegativity is the ability of an atom in a bond with another atom to pull electrons in the bond to itself.',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Ionization Energy Patterns',
    question_year: 2017
  },
  {
    question:
      'The electron affinity of magnesium is + 67 kJmol-1, whereas that for chlorine is – 348 kJmol-1. How do you explain the difference?',
    answer:
      '(I) Adding an electron to a magnesium atom requires energy, whereas adding an electron to chlorine atom gives out energy.\n(II) Neutral magnesium atom has a fully filled s – subshell which is stable; adding an electron makes the electronic configuration less stable.\n(III) Chlorine is only one electron less than the octet stable configuration. It will readily accept an electron to complete the octet.',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Rate Constant Calculations',
    question_year: 2017
  },
  {
    question:
      'A first order reaction has a half – life of 20 minutes. Calculate the rate constant of that reaction and give your answer in the scientific form to two places of decimal. Give the units of the constant.',
    answer: 'k = 5.78 *10^-4 s^-1',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Decay Constant Calculation',
    question_year: 2017
  },

  {
    question:
      'The conversion of compound A to B follows a second order kinetics. If 20% of the initial concentration of 0.10 moldm-3 of A is consumed in 5 minutes, calculate the rate constant and give your answer with the units in the scientific form to two places of decimal. The integrated form of a second order reaction is; 1/At - 1/A0 = kt Where A0 and At are the concentrations of A at times t = 0 and t = t respectively',
    answer: 'k = 8.33 *10^-3 mol-1dm3s-1',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Concentration Calculation in Titration',
    question_year: 2017
  },
  {
    question:
      '0.50 g of a radioactive element of atomic mass 50 disintegrates at the rate of 1.20 *10^10 disintegrations per second. Calculate the decay constant and give your answer with the units in the scientific form to one place of decimal. For this calculation assume Avogadro’s number is 6.00 *10^23',
    answer: 'k = 2.0 *10^-12 s-1',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Total Pressure Calculation',
    question_year: 2017
  },
  {
    question:
      'In a volumetric exercise, 25.0 cm3 of Na2CO3 solution of unknown concentration required 20.0 cm3 of 0.090 moldm-3 HCl solution for complete neutralization using phenolphthalein as an indicator. Calculate the concentration of the base and give your answer to three places of decimal.',
    answer: 'M = 0.072 moldm-3',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: '2017'
  },
  {
    question:
      'A 10.0 dm3 flask is filled with oxygen until the pressure is 60 kPa at 27 °C. What will be the total pressure when 8.8 g of CO2 at 27 °C are added to the oxygen in the flask? Assume the gas constant R is 8.30 JK-1mol-1 for this calculation. O = 16; C = 12.0',
    answer: 'Total pressure = 109.8 kPa',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Elements Named After Countries',
    question_year: 2017
  },
  {
    question: 'What substance gives honey its sweet taste?',
    answer: 'Fructose',
    difficulty_level: 'Semi-Finals',
    subject_name: 'Chemistry',
    topic: 'Hydrocarbon Molecular Formula Calculation',
    question_year: 2017
  },
  {
    question:
      'You will be given a physical constant and you are required to give its value including units to 4 significant figures in the scientific form. Avogadro’s number 6.022 *10^23 mol-1',
    answer: '6.022 *10^23 mol-1',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: 'Constants',
    question_year: 2017
  },
  {
    question:
      'You will be given a physical constant and you are required to give its value including units to 4 significant figures in the scientific form. Faraday’s constant',
    answer: '9.648 *10^4 coulombmol-1',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: 'Constants',
    question_year: 2017
  },
  {
    question:
      'You will be given a physical constant and you are required to give its value including units to 4 significant figures in the scientific form. Molar Gas Constant in Joules R = 8.314 JK-1mol-1',
    answer: 'R = 8.314 JK-1mol-1',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: 'Constants',
    question_year: 2017
  },
  {
    question:
      'In the Periodic Table, there are several elements named after countries, sub-continents, and continents. Each school is expected to give two elements and their symbols, and the name of the countries or sub-continents or continents that the elements were named after',
    answer:
      'Countries:\nGallium, Ga (atomic number 31) - France\nGermanium, Ge (atomic number 32) - Germany\nRuthenium, Ru (atomic number 44) - Russia (Latin for Russia)\nPolonium, Po (atomic number 84) - Poland\nFrancium, Fr (atomic number 87) - France\nSub-Continents:\nScandium, Sc (atomic number 21) - Scandinavia\nThulium, Tm (atomic number 69) - Earliest name of Scandinavia (Thule)\nContinents:\nEuropium, Eu (atomic number 63) - Europe\nAmericium, Am (atomic number 95) - Americas',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: '2017'
  },
  {
    question:
      'A hydrocarbon contains 85.7 % carbon. If its molar mass is 70, what is the molecular formula of the hydrocarbon? C = 12.0; H = 1.0',
    answer: 'Molecular formula: C5H10',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: 'OH- Ion Shape and Hybridization',
    question_year: 2017
  },

  {
    question:
      'Calculate the percentage hydrogen in nonane and give your answer to one place of decimal.',
    answer: '% H = 15.6',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: 'Enthalpy of Formation Calculation',
    question_year: 2017
  },
  {
    question:
      'Give the balanced equation for the complete combustion of undecane in excess oxygen and calculate the volume of CO2 that can be collected at STP? Molar volume of a gas at STP is 22.4 dm3',
    answer:
      'C11H24 + 17O2 → 11CO2 + 12H2O\nMoles of CO2 = 11\nVolume of CO2 = 246.4 dm3',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: 'Enthalpy of Formation Calculation',
    question_year: 2017
  },
  {
    question:
      'Pure liquid nitroglycerin is very sensitive to shock. When it is shaken, it explodes according to the following equation: 4C3H5(NO3)3 (l) → 6N2 (g) + 10H2O (g) + 12CO2 (g) + O2(g) If the enthalpy of reaction is – 5.720 *103 kJ, calculate the enthalpy of formation of nitroglycerin from the following enthalpies of formation H2O (g) - 242 kJmol-1; CO2 (g) - 394 kJmol-1',
    answer: '∆Hf(nitoglycerine) = - 357 or -3.57*10^2 kJmol-1',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: 'Enthalpy of Formation Calculation',
    question_year: 2017
  },
  {
    question:
      'Give the shape of the OH- ion and the hybridisation of the orbitals of oxygen',
    answer: 'Shape of OH- is linear; hybridisation of the orbitals of O is sp3',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: '2017'
  },
  {
    question:
      'Calculate the percentage increase in the volume of a balloon when the gas inside is heated from 27 °C to 77 °C in a hot water bath. Give your answer to one place of decimal or 3 significant figures',
    answer: '% Change = 16.7%',
    difficulty_level: 'Finals',
    subject_name: 'Chemistry',
    topic: '2017'
  },
  {
    question:
      "Name an element in the Main Group elements of the Periodic Table whose symbol starts with the letter 'g'.",
    answer: 'Germanium (Ge)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Elements Named After Countries',
    question_year: 2018
  },
  {
    question: "Name an element in Group Vor 15 whose symbol has an 's' in it.",
    answer: 'Arsenic (As)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Elements Named After Countries',
    question_year: 2018
  },
  {
    question:
      "Name an element in Period 3 of the Periodic Table whose symbol starts with the letter 'a'.",
    answer: 'Argon (Ar)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Elements Named After Countries',
    question_year: 2018
  },
  {
    question:
      'Calculate the pH of a 100 cm3 of 0.10 moldm-3 solution of a weak acid of pKa 5.80.',
    answer: 'pH = 3.80',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'pH Calculation for Weak Acid',
    question_year: 2018
  },
  {
    question:
      'Calculate the pH of a 50 cm3 solution of 0.10 moldm-3 solution of a weak base of pKb 6.0.',
    answer: 'pH = 10.00',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'pH Calculation for Weak Base',
    question_year: 2018
  },

  {
    question:
      '50 cm3 of 0.50 moldm-3 H2SO4 solution are diluted to 500 cm3. What is the pH of the diluted solution?',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'pH Calculation for Diluted H2SO4',
    question_year: 2018
  },
  {
    question:
      'Explain why although the HCO3- ion has replaceable hydrogen, its aqueous solution is basic.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Basic Properties of HCO3- Ion',
    question_year: 2018
  },
  {
    question:
      'Which substance is principally responsible for the acidic nature of Coca-Cola drink?',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acidity in Coca-Cola',
    question_year: 2018
  },
  {
    question:
      'AlCl3 molecule, although does not contain a hydrogen atom, is considered to be an acid. Why?',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acidic Properties of AlCl3',
    question_year: 2018
  },
  {
    question: 'Define the first Electron Affinity of an element.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'First Electron Affinity of an Element',
    question_year: 2018
  },
  {
    question:
      'Explain the relative values of the electron affinities of Li and Be, which are –57 kJmol-1 and +66 kJmol-1 respectively.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Comparison of Electron Affinities (Li and Be)',
    question_year: 2018
  },
  {
    question:
      'Explain the relative values of the electron affinities of oxygen and sulfur, which are –141 kJmol-1 and –200 kJmol-1 respectively.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Comparison of Electron Affinities (Oxygen and Sulfur)',
    question_year: 2018
  },
  {
    question: 'Name the main operation at an Oil (or Petroleum) Refinery.',
    answer: 'Fractional Distillation of crude oil/ petroleum',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Main Operations at an Oil Refinery',
    question_year: 2018
  },
  {
    question:
      'What other chemical process can be undertaken at the Refinery to increase the yield of petrol?',
    answer: '(Catalytic) cracking',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Processes to Increase Petrol Yield',
    question_year: 2018
  },
  {
    question:
      'Gasoline or petrol is rated by a certain scale. What is the name of this scale?',
    answer: 'Octane Number or Octane Rating',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gasoline Rating Scale',
    question_year: 2018
  },

  {
    question:
      '50 cm3 of 0.0950 moldm-3 HCl solution are diluted to 250 cm3 with deionized water. 10 cm3 of this are further diluted to 100 cm3. What is the final concentration of the HCl solution? Give your answer in 3 significant figures.',
    answer: '0.0380 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Concentration Calculation',
    question_year: 2018
  },
  {
    question:
      '200 cm3 of 0.120 moldm-3 HCl solution are added to 250 cm3 of 0.090 moldm-3 NaOH solution, and the two solutions are thoroughly mixed. Identify the substance that will be in excess and calculate the excess in mmol of that reagent.',
    answer: '1.5 mmol',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Excess Reagent',
    question_year: 2018
  },
  {
    question:
      'When 200 cm3 of 0.120 moldm-3 HCl solution are mixed with 300 cm3 of 0.160 moldm-3 NaOH solution, there will be 24.0 mmol of NaOH in excess. Calculate the concentration of the NaOH after mixing.',
    answer: '0.048 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Concentration Calculation After Mixing',
    question_year: 2018
  },
  {
    question:
      'Calculate the volume in dm3 of O2 at STP that will be needed to burn completely 1.0 mole of nonane. Give your answer to one place of decimal. Molar volume of a gas at STP is 22.4 dm3.',
    answer: '313.6 dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume of O2 at STP Calculation',
    question_year: 2018
  },
  {
    question:
      'Calculate the volume in dm3 of CO2 at STP to be released when heptane is burnt completely in excess air. Give your answer to one place of decimal. Molar volume of gas at STP = 22.4 dm3.',
    answer: '156.8 dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume of CO2 at STP Calculation',
    question_year: 2018
  },
  {
    question:
      'Calculate the mass in grams of steam to be released when 2-methylbutane is burnt in excess air. Give your answer to one place of decimal. O = 16; H = 1.',
    answer: '108.0 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mass of Steam Calculation',
    question_year: 2018
  },
  {
    question: 'Explain the term Aufbau Principle.',
    answer:
      'The Aufbau Principle is a scheme used to reproduce the electron configuration of the ground states of atoms by successively filling subshells with electrons in a specific order.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Aufbau Principle',
    question_year: 2018
  },
  {
    question: 'Define Pauli Exclusion Principle.',
    answer:
      'The Pauli Exclusion Principle states that no two electrons in an atom can have the same four quantum numbers (n, l, ml, and ms) or, more simply, no two electrons in an atom can have the same energy.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Pauli Exclusion Principle',
    question_year: 2018
  },
  {
    question: 'State fully the Hund’s Rule.',
    answer:
      "Hund's Rule states that when electrons fill a subshell, every orbital is occupied singly before any orbital is doubly occupied, and all electrons in singly occupied orbitals have their spins in the same direction.",
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: "Hund's Rule",
    question_year: 2018
  },
  {
    question:
      'Give the systematic name of a hydrocarbon of six carbons in a straight chain with a chlorine substituent on the third carbon from one end and bromine on the third carbon from the other end.',
    answer: '3-Bromo-4-chlorohexane',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Systematic Naming of Hydrocarbons',
    question_year: 2018
  },

  {
    question:
      'Give the systematic name of the salt with the formula Fe2(SO4)3.',
    answer: 'Iron(III) tetraoxosulphate(VI)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Systematic Naming of Salts',
    question_year: 2018
  },
  {
    question:
      'Give the systematic name of a saturated organic compound whose six carbons are in a ring, with NH2 and Cl as substituents two carbons apart.',
    answer: '4-chlorocyclohexylamine or 1-amino-4-chlorocyclohexane',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Systematic Naming of Organic Compounds',
    question_year: 2018
  },
  {
    question:
      'If powdered aluminum is mixed with iron (III) oxide and ignited, the oxide is reduced to the metal while the aluminum forms an oxide. Give a balanced equation for the reaction.',
    answer: '2Al + 3O2 → 2Al2O3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Aluminum Reaction Equations',
    question_year: 2018
  },
  {
    question:
      'Aluminum dissolves in moderately concentrated HCl solution to give the metal chloride and hydrogen gas. Give a balanced equation for the reaction.',
    answer: '2Al + 6HCl → 2AlCl3 + 3H2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Aluminum Dissolves in HCl Equation',
    question_year: 2018
  },
  {
    question:
      'When aluminum is strongly heated in air, it burns to give an oxide with the oxygen and a nitride with the nitrogen in the air. Give separate equations for the oxide and nitride formation.',
    answer: '4Al + 3O2 → 2Al2O3, 2Al + N2 → 2AlN',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Aluminum Combustion Reactions',
    question_year: 2018
  },
  {
    question:
      'Calculate the moles of oxygen that will be discharged in the electrolysis of dilute H2SO4 using platinum electrodes, after passing 1/5 Faraday of charge.',
    answer: '0.05 mol of O2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrolysis of H2SO4',
    question_year: 2018
  },
  {
    question:
      'What mass in grams of water would have been decomposed in an electrolysis of dilute H2SO4 with platinum electrodes after passing 3 Faraday of charge?',
    answer:
      '27.0 g of water2H2O + 4F → 2H2 + O2\nTherefore, 4 Faraday ≡ 2*18 g of H2O decomposed\nHence, 3 Faraday = (3/4)*2*18 g of H2O = 27.0 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mass of Water Decomposed in Electrolysis',
    question_year: 2018
  },
  {
    question:
      'Calculate the volume of hydrogen gas that will be discharged in the electrolysis of dilute H2SO4 using inert electrodes after passing ¼ Faraday of charge. Molar volume of a gas at STP is 22.4 dm3.',
    answer:
      '2.8 dm3 H2 at STP\n2H2O + 4F → 2H2 + O2\n2 Faraday ≡ 1 mole of H2 = 22.4 dm3 of H2 at STP\nHence, ¼ Faraday = ((1/4)/2)*22.4 = 2.8 dm3 H2 at STP',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume of Hydrogen Gas in Electrolysis',
    question_year: 2018
  },
  {
    question: 'Define the term ‘bond energy’ of a covalent bond.',
    answer:
      'It is the energy required or the enthalpy change for breaking homolytically one mole of a covalent bond in the gaseous state',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Bond Energy Definition',
    question_year: 2018
  },
  {
    question:
      'The bond energies of carbon – carbon single bond, double bond, and triple bond are given as 411 kJmol-1, 602 kJmol-1, and 835 kJmol-1, respectively. State one important observation.',
    answer:
      'The bond energies of C = C and C ≡ C are not exact multiples of the bond energies of C - C',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Bond Energy Comparison',
    question_year: 2018
  },
  {
    question:
      'The bond energy of carbon – carbon triple bond is 835 kJmol-1 while that of carbon – carbon single bond is 411 kJmol-1. Explain why the former is not three times the latter.',
    answer:
      'Carbon – carbon single bond is a sigma bond whereas carbon – carbon triple bond is made up of one sigma and two pi-bonds. Sigma and pi-bonds are of different bond strengths',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Bond Energy Relationship',
    question_year: 2018
  },
  {
    question:
      'An organic compound has an empirical formula of C2H4O and molar mass of 88. Determine the formula and the identity of the compound if it gives effervescence with NaHCO3 solution and has no branching in the carbon chain.',
    answer:
      'Formula = C4H8O2\nIdentify as alkanoic acid; Butanoic acid or CH3CH2CH2COOH',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Empirical Formula and Compound Identification',
    question_year: 2018
  },
  {
    question:
      'An organic compound has an empirical formula of C2H5O and molar mass of 90. Determine its molecular formula and its identity if it can be oxidized with acidified Na2Cr2O7 to give a dioic acid.',
    answer:
      'Molecular formula = C4H10O2\nDioic acid means two terminal OH groups hence HOCH2CH2CH2CH2OH or 1,4-butandiol',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Molecular Formula Determination',
    question_year: 2018
  },
  {
    question:
      'An organic compound has an empirical formula of C2H4O2 and molar mass of 180. Determine its molecular formula and its identity if it is a natural product with an alkanone functional group and can be obtained from the hydrolysis of honey.',
    answer: 'Molecular formula = C6H12O6\nIdentity: Fructose (Not glucose)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Molecular Formula Determination from Molar Mass',
    question_year: 2018
  },
  {
    question:
      'How does metallic character vary down a Group in the Main Group Elements of the Periodic Table?',
    answer: 'Metallic character increases down a Group',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Metallic Character Variation',
    question_year: 2018
  },

  {
    question:
      'What principally determines whether an element is likely to be a metal or not?',
    answer: 'Low first ionisation energy',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Factors Influencing Metallic Character',
    question_year: 2018
  },
  {
    question:
      'State two major differences between oxides of metals and non-metals.',
    answer:
      'Oxides of metals are usually ionic whereas those of non-metals are covalent. Oxides of metals are basic whereas those of non-metals are acidic.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Metal and Non-Metal Oxide Differences',
    question_year: 2018
  },
  {
    question:
      'Epsom salt is a hydrated magnesium salt with the formula MgSO4.7H2O. Determine the simplest mass ratio of the salt to water of hydration in the molecule.',
    answer: 'MgSO4 : H2O = 20 : 21',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Determining Mass Ratio in a Hydrated Salt',
    question_year: 2018
  },
  {
    question:
      'If 28.6 g of Na2CO3.10H2O are dissolved in 1 dm3 of deionized water, what is the concentration of the solution with respect to sodium ions?',
    answer: 'Molar concentration of Na+ = 0.20 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Concentration Calculation for Sodium Ions',
    question_year: 2018
  },
  {
    question:
      'Calculate the mass of CuSO4.5H2O to be dissolved in 1.0 dm3 of water to obtain a solution that is 0.30 mol dm-3 with respect to Cu2+ ions.',
    answer: 'Mass of salt to give 0.3 moldm-3 Cu2+ = 75.0 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Mass of CuSO4.5H2O for a Specific Concentration',
    question_year: 2018
  },
  {
    question:
      'Give the systematic name of an alkanoic acid with 7 carbons in a straight chain and with a chlorine atom as a substituent on the third carbon from the end of the chain without the functional group.',
    answer: '5-Chloroheptanoic acid',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Systematic Naming of Alkanoic Acid',
    question_year: 2018
  },
  {
    question:
      'Give the systematic name of a carboxylic acid of benzene with a bromine atom on the 2nd carbon away from the position of the acid functional group.',
    answer: '3-Bromobenzoic acid or meta (m)-Bromobenzoic acid',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Systematic Naming of Carboxylic Acid',
    question_year: 2018
  },
  {
    question:
      'Give the systematic name of the alkanal with a total of five carbons in a chain, with a methyl group as a substituent on the farthest possible carbon from the functional group.',
    answer: '4-Methylpentanal',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Systematic Naming of Alkanal',
    question_year: 2018
  },
  {
    question: 'Name the only non-metal that is liquid at room temperature.',
    answer: 'Bromine (Br2)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Liquid Non-Metal at Room Temperature',
    question_year: 2018
  },
  {
    question:
      'There are three metals that are liquid at room temperature. Name the one that does not belong to the Main Group elements.',
    answer: 'Mercury (Hg)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Liquid Metals',
    question_year: 2018
  },
  {
    question:
      'Metalloids or semi-metals have both metallic and non-metallic properties. Give two properties of metalloids that are similar to those of non-metals.',
    answer:
      '(i) They are poor conductors of electricity when pure. (ii) They are poor conductors of heat.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Properties of Metalloids',
    question_year: 2018
  },
  {
    question:
      '1.3 g of a pure metal is heated in oxygen until there is no change in weight. If the oxide formed weighs 2.5 g, calculate the empirical formula of the oxide. The atomic mass of the metal is 52.',
    answer: 'Empirical formula = MO3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Empirical Formula Calculation for a Metal Oxide',
    question_year: 2018
  },
  {
    question:
      'A hydrocarbon consists of 7.7 % hydrogen. Calculate the empirical formula and therefore the molecular formula if the molar mass is 156.',
    answer: 'Empirical formula: CH; Molecular formula: C12H12',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Empirical and Molecular Formula from Hydrocarbon Analysis',
    question_year: 2018
  },
  {
    question:
      '5.0 g of a metal M, atomic mass 50, forms an oxide, weighing 7.4 g. Determine the empirical formula of the oxide.',
    answer: 'Empirical formula = M2O3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Empirical Formula Calculation for a Metal Oxide',
    question_year: 2018
  },
  {
    question:
      'Explain why some of the illegal mining activities in Ghana have turned the water of our rivers muddy.',
    answer: 'Alluvial gold is being mined from the river beds and banks.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Illegal Mining in Ghana and Water Pollution',
    question_year: 2018
  },

  {
    question:
      'Mining alluvial gold does not require roasting or heating of the sand, why?',
    answer:
      'In the alluvial gold, the gold has been released from the rock lattice as a result of weathering or disintegration of the rock by the water and therefore does not have arsenic sulphide that has to be removed by heating.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Alluvial Gold Mining',
    question_year: 2018
  },
  {
    question:
      'Gold may be purified by electrolysis in which both electrodes are gold. Explain this practice.',
    answer:
      'The anode is impure gold. The cathode is pure gold (coated with a layer of graphite). Electrolyte is AuNO3 in HNO3. The impure gold goes into solution as Au+ at the anode and this is discharged as pure Au on the cathode.\nAt anode: Au -> Au+ + e\nAt cathode: Au+ + e -> Au (pure)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gold Purification by Electrolysis',
    question_year: 2018
  },
  {
    question:
      'A 0.10 mol dm-3 solution of a weak organic acid has a pH of 4.0. Calculate the pKa of the acid.',
    answer: 'pKa = 7.0',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Calculating pKa of a Weak Organic Acid',
    question_year: 2018
  },
  {
    question:
      'The pKb of a weak base is 5.6. Calculate the pH of its 0.10 mol dm-3 solution.',
    answer: 'pH = 10.7',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Calculating pH of a Weak Base Solution',
    question_year: 2018
  },
  {
    question:
      'Phosphoric acid, H3PO4, has three pKa values; pK1 2.1; pK2 7.2; pK3 12.7. Calculate the pH of 0.10 mol dm-3 solution of NaH2PO4.',
    answer: 'pH = 4.1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'pH Calculation for Phosphoric Acid Solution',
    question_year: 2018
  },
  {
    question:
      'The oxidation of 23.0 g of ethanol gave 27.0 g of ethanoic acid. Calculate the percentage yield of this preparation and give your answer to one place of decimal.',
    answer: '% yield = 90.0%',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Percentage Yield Calculation',
    question_year: 2018
  },
  {
    question:
      '6.0 g of impure magnesium yielded 8.5 g of pure MgO. Calculate the percentage purity of the magnesium and give your answer to one place of decimal.',
    answer: '% Purity of the Mg = 85.0%',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Percentage Purity Calculation',
    question_year: 2018
  },
  {
    question:
      'Calcium oxide can be obtained by heating calcium trioxocarbonate (IV). What mass of calcium oxide can be obtained from 12.0 g of calcium trioxocarbonate (IV) if the conversion gives 100 % yield?',
    answer: '6.72 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry in Calcium Oxide Formation',
    question_year: 2018
  },
  {
    question:
      'Give the electron configuration of the valence shell of Group 3 or 13 elements.',
    answer: 'ns2 np1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electron Configuration of Group 13 Elements',
    question_year: 2018
  },
  {
    question:
      'Give the electron configuration of the valence shell of any member of the first d-transition series.',
    answer: 'ns2 (n-1)dx, where x = 1 to 10',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electron Configuration of First d-Transition Series',
    question_year: 2018
  },
  {
    question:
      'Give the electron configuration of the valence shell of the members of Group zero (0).',
    answer: 'ns2 np6',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electron Configuration of Group 18 Elements',
    question_year: 2018
  },
  {
    question:
      'Balance the equation for the redox reaction: S + H2SO4 → H2O + SO2.',
    answer: '2H2S + 3O2 → 2H2O + 2SO2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Redox Reaction Balancing',
    question_year: 2018
  },
  {
    question:
      'Balance the equation for the redox reaction: H2SO4 + H2S → H2O + SO2 + S (s).',
    answer: '2H2SO4 + 3H2S → 5H2O + 5SO2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Redox Reaction Balancing',
    question_year: 2018
  },
  {
    question:
      'Which is the most important property of elements that would determine the type of bond to be formed between them?',
    answer: 'Electronegativities',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Factors Determining Bond Type',
    question_year: 2018
  },
  {
    question:
      'Name the type of bond expected to be formed between (i) carbon and boron and (ii) carbon and aluminum.',
    answer:
      '(i) Carbon – boron: Covalent (ii) Carbon – aluminum: Ionic/Electrovalent',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Types of Bonds for Carbon and Boron',
    question_year: 2018
  },

  {
    question:
      'Why does lithium form covalent bonds with carbon although the electronegativity difference is relatively large?',
    answer:
      'Lithium ion is very small and therefore has a high polarizing effect',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Lithium Forming Covalent Bonds',
    question_year: 2018
  },
  {
    question:
      'Calculate the moles per dm3 of a gas at a pressure of 83.1 kPa at 27 °C.',
    answer: '0.033 moles/dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gas Moles at Specific Conditions',
    question_year: 2018
  },
  {
    question:
      'If 1 dm3 of a gas at a temperature T K and pressure P kPa contains 0.045 mol of a gas, calculate the density of the gas in g dm-3.',
    answer: '1.44 g/dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Density of a Gas Calculation',
    question_year: 2018
  },
  {
    question:
      'The density of a gas at temperature T °C and pressure kPa is 1.344 g dm-3. If 1 dm3 of this gas at the same temperature and pressure contains 0.024 mol, calculate the molar mass of the gas.',
    answer: '56.00 g/mol',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Molar Mass of a Gas',
    question_year: 2018
  },
  {
    question:
      "Name an element in the Main Group elements of the Periodic Table whose symbol starts with the letter 'g'.",
    answer: 'Gallium (Ga); Germanium (Ge)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: "Element Symbol Starting with 'g'",
    question_year: 2018
  },
  {
    question: "Name an element in Group V or 15 whose symbol has an 's' in it.",
    answer: 'Arsenic (As); Antimony (Sb)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: "Element in Group 15 with 's' in the Symbol",
    question_year: 2018
  },
  {
    question:
      "Name an element in Period 3 of the Periodic Table whose symbol starts with the letter 'a'.",
    answer: 'Aluminium (Al)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: "Element in Period 3 with 'a' in the Symbol",
    question_year: 2018
  },
  {
    question:
      'Calculate the mass of magnesium that will react completely with 5.6 dm3 of chlorine gas at STP.',
    answer: '6.0 grams',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry in Calcium Oxide Formation',
    question_year: 2018
  },
  {
    question:
      'Calculate the volume of oxygen gas at STP that will react completely with 10.0 g of metallic calcium to form calcium oxide.',
    answer: '2.8 dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry in Sodium-Chlorine Reaction',
    question_year: 2018
  },
  {
    question:
      'Calculate the mass of sodium metal that will react with 11.2 dm3 of chlorine gas at STP.',
    answer: '23.0 grams',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry in Sodium-Chlorine Reaction',
    question_year: 2018
  },
  {
    question:
      '50 cm3 of 0.50 moldm-3 H2SO4 solution are diluted to 500 cm3. What is the pH of the diluted solution?',
    answer: 'pH = 1.0',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'pH Calculation for Diluted Sulfuric Acid',
    question_year: 2018
  },
  {
    question:
      'Calculate the pH of 50 cm3 solution of 0.10 moldm-3 solution of a weak base of pKb 6.0',
    answer: 'pH = 10.5',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'pH Calculation for Weak Base Solution',
    question_year: 2018
  },
  {
    question:
      '250 cm3 of 0.200 moldm-3 NaCl solution are mixed with 150 cm3 of 0.150 moldm-3 of MgCl2 solution. Calculate the total mmol of Cl- ions in the combined solution.',
    answer: 'Total mmol of Cl- ions = 95 mmol',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Calculating Total Chloride Ions',
    question_year: 2018
  },
  {
    question:
      '250 cm3 of 0.200 moldm-3 NaCl solution are mixed with 150 cm3 of 0.150 moldm-3 of MgCl2 solution.',
    answer: 'Concentration of Na+ = 0.125 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Calculating Total Chloride Ions',
    question_year: 2018
  },
  {
    question:
      '250 cm3 of 0.200 moldm-3 NaCl solution are mixed with 150 cm3 of 0.150 moldm-3 of MgCl2 solution.',
    answer: 'Concentration of Cl- = 0.238 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Calculating Total Chloride Ions',
    question_year: 2018
  },

  {
    question:
      '5.4 mols of PCl5 were put in a sealed glass vessel and heated to about 400 K. At equilibrium only 0.4 mol of the PCl5 were decomposed. The equation for the equilibrium reaction is as follows: PCl5 (g) → PCl3 (g) + Cl2 (g)',
    answer:
      'Calculate the KC of the equilibrium at 400 K and give your answer in the scientific form. KC = 3.2*10^-2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Equilibrium Constant (KP) Calculation',
    question_year: 2018
  },
  {
    question:
      '5.4 mols of PCl5 were put in a sealed glass vessel and heated to about 400 K. At equilibrium only 0.4 mol of the PCl5 were decomposed. The equation for the equilibrium reaction is as follows: PCl5 (g) → PCl3 (g) + Cl2 (g)',
    answer:
      'When the same experiment was repeated but the vessel heated up to 500 K, 0.6 mol of the PCl5 was found to have decomposed. Calculate the new KC for the equilibrium reaction and give your answer in the scientific form to one place of decimal. KC = 7.5*10^-2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Equilibrium Constant (KP) Calculation',
    question_year: 2018
  },
  {
    question:
      '5.4 mols of PCl5 were put in a sealed glass vessel and heated to about 400 K. At equilibrium only 0.4 mol of the PCl5 were decomposed. The equation for the equilibrium reaction is as follows: PCl5 (g) → PCl3 (g) + Cl2 (g)',
    answer:
      'Calculate the KP for the equilibrium at 500 K if the KC at that temperature is 7.5*10^-2. For this calculation, assume R is 8.0 JK-1mol-1. KP = 3.0*10^2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Equilibrium Constant (KP) Calculation',
    question_year: 2018
  },
  {
    question:
      'Each school will be provided with a general molecular formula of compounds. From the formula, state the possible molecular geometry the molecules will possess and indicate if the dipole moment will be zero or not zero',
    answer:
      'AX3\n(i) Trigonal planar (zero dipole)\n(ii) Triagonal pyramidal (non-zero dipole)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Molecular Geometry and Dipole Moment',
    question_year: 2018
  },
  {
    question:
      'Each school will be provided with a general molecular formula of compounds. From the formula, state the possible molecular geometry the molecules will possess and indicate if the dipole moment will be zero or not zero',
    answer:
      'AX4\n(i) Tetrahedral (zero dipole)\n(ii) Square planar (zero dipole)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Molecular Geometry and Dipole Moment',
    question_year: 2018
  },
  {
    question:
      'Each school will be provided with a general molecular formula of compounds. From the formula, state the possible molecular geometry the molecules will possess and indicate if the dipole moment will be zero or not zero',
    answer: 'AX2\n(i) Linear (zero dipole)\n(ii) Bent (non-zero dipole)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Molecular Geometry and Dipole Moment',
    question_year: 2018
  },
  {
    question:
      'Name one essential component of a Mass Spectrometer and give its function.',
    answer:
      'Essential Component: (i) Ionisation chamber - Function: Ionisation of gaseous molecules takes place in the chamber\n(ii) Heated Filament - Function: Produces a beam of electrons which ionises the gaseous molecules\n(iii) A negative grid/pole - Function: Causes acceleration of the positively charged ions\n(iv) Magnet - Function: Provides a magnetic field that separates the ions according to mass-to-charge ratios\n(v) Detector - Function: Detects the presence of various ions and determines the relative quantities and produces a chart',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Essential Component of Mass Spectrometer',
    question_year: 2018
  },
  {
    question:
      'Calculate the number of CO2 molecules in a gaseous sample occupying a volume of 33.24 dm3 at a pressure of 100 kPa and temperature of 300 K. Gas constant R = 8.31 kPaK-1mol-1 (same as JK-1mol-1); Avogadro’s number 6.0*10^23 mol^-1',
    answer:
      'Use Ideal gas equation to determine the number of moles\nPV = nRT;\nn = (PV)/(RT)\n= (100*33.24)/(300*8.31) = 4/3 mol\nNumber of molecules of CO2 = (4/3)*6*10^23 = 8.0*10^23',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume Change at Constant Temperature',
    question_year: 2018
  },
  {
    question:
      'Calculate the pressure in kPa that will be exerted by 2.4*10^24 molecules of oxygen in a vessel of volume 50 dm3 and at a temperature of 300 K. Give your answer to one place of decimal. Avogadro’s number 6.0*10^23 mol^-1; R = 8.31 JK-1mol-1',
    answer:
      'The number of moles of O2 in the vessel = (2.4*10^24)/(6.0*10^23) = 4.0\nP = (nRT/V) = (4*8.31*300)/50 = 199.4 kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Pressure Calculation',
    question_year: 2018
  },
  {
    question:
      'A volume of air occupying 30 dm3 at 300 K exerts a pressure of 120 kPa. If the air is compressed to a pressure of 180 kPa while temperature remains constant, calculate the new volume and give your answer to one place of decimal',
    answer:
      "Use Boyle's Law.\nV2P2 = V1P1;\nV2 = (P1/P2)*V1 = (120*30)/180 = 20.0 dm3",
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Volume Change at Constant Temperature',
    question_year: 2018
  },
  {
    question:
      'Silver (II) trioxocarbonate (IV) is precipitated when a solution of sodium or potassium trioxocarbonate (IV) is added to a solution of Ag+ ions.\n2Ag+ + CO3^2- → Ag2CO3\nAg = 108.0; O = 16.0; C = 12.0\nCalculate the mmole of Ag2CO3 that will precipitate when 100 cm3 of 0.100 moldm^-3 of Na2CO3 solution is added to 200 cm3 of 0.060 moldm^-3 of AgNO3 solution',
    answer:
      'mmole of CO3^2- = 10\nmmole of Ag+ = 12\nHence, mmole of Ag2CO3 = 6.0',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Precipitation Reaction - Concentration Adjustment',
    question_year: 2018
  },
  {
    question:
      'Silver (II) trioxocarbonate (IV) is precipitated when a solution of sodium or potassium trioxocarbonate (IV) is added to a solution of Ag+ ions.\n2Ag+ + CO3^2- → Ag2CO3\nAg = 108.0; O = 16.0; C = 12.0\nCalculate the mass of Ag2CO3 precipitated in grams. Give your answer to two places of decimal',
    answer:
      'Ag2CO3 = 2*108 + 12 + 48 = 276\nMass of Ag2CO3 in g = 6*10^-3*276 = 1.66 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Precipitation Reaction - Concentration Adjustment',
    question_year: 2018
  },
  {
    question:
      'Consider the following reaction: 2A → 4B + C. The following results were obtained in two kinetic measurements. Initial Conc. of A (moldm^-3) Initial Rate of disappearance of A moldm^-3s^-1\n1 0.010 6.10 *10^-5\n2 0.030 1.83 *10^-4\nDetermine the order of the reaction with respect to A',
    answer:
      'When the concentration of A is increased by a factor of 3, the rate also increases by a factor of 3. Hence the order is 1.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Rate Order Determination',
    question_year: 2018
  },
  {
    question:
      'Consider the following reaction: 2A → 4B + C. The following results were obtained in two kinetic measurements. Initial Conc. of A (moldm^-3) Initial Rate of disappearance of A moldm^-3s^-1\n1 0.010 6.10 *10^-5\n2 0.030 1.83 *10^-4\nUse the results of the first experiment to calculate the rate constant of the reaction and give its units.',
    answer: 'Rate = k[A]^1\n6.10 *10^-5 = k[10^-2]; k = 6.10 *10^-3 s^-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Rate Constant Calculation',
    question_year: 2018
  },

  {
    question: 'Consider the following reaction: 2A → 4B + C',
    answer:
      'Since the order is first order, when the initial concentration is increased fourfold the initial rate will increase by a factor of four',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Expected Initial Rate Calculation',
    question_year: 2018
  },
  {
    question: 'Give the names of the two major components of cement',
    answer:
      'Calcium trioxosilicate (IV) (CaSiO3) and Calcium dioxoaluminate (III) [Ca(AlO2)2]',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Major Components of Cement',
    question_year: 2018
  },
  {
    question:
      'Clay is a major raw material for the formation of clinker which is powdered to give cement. Name two components of clay that may undergo separate reactions to give clinker',
    answer:
      'Silicon IV oxide [silica] and aluminium oxide (anhydrous) [alumina] or aluminium hydroxide [hydrated alumina]',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Components of Clay for Clinker Formation',
    question_year: 2018
  },
  {
    question:
      'Name the main source of the calcium in the clinker and what process or processes that raw material goes through during the formation of clinker',
    answer:
      'Limestone or calcium trioxocarbonate IV (or CaCO3) is the source of the calcium. It decomposes to CaO during the heating, and the CaO reacts with SiO2 and aluminium oxide/ aluminium hydroxide to form the trioxosilicate and dioxoaluminate',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Source of Calcium in Clinker',
    question_year: 2018
  },
  {
    question:
      'Elemental calcium burns in air to give calcium oxide. Calculate the mass in gram of calcium oxide that can be obtained from 110.0g of pure calcium if the yield is 100%. Give your answer to one place of decimal.',
    answer:
      'Ca + ½O2 → CaO\nMass of CaO from 40g Ca = 56g\nMass of CaO from 110.0g of Ca = (110/40)*56 = 154.0g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question:
      'In the preparation of CaO by the burning of calcium metal, 10.0g of the metal yields 12.6g of the oxide. Calculate the percentage yield of this preparation. Give your answer to one place of decimal.',
    answer:
      'Ca + ½O2 → CaO\n40g of Ca yield 56.0 g of CaO. The expected yield in mass of CaO from 10.0g Ca = (10/40)*56 = 14.0g. Percentage yield = (12.6/14)*100 = 90.0%',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question:
      'If in another preparation of calcium oxide the yield is only 80%, what mass in gram of calcium oxide can be obtained from 27.0 g of calcium? Give your answer to two places of decimal.',
    answer:
      'Expected mass of CaO from 27.0g Ca assuming 100% yield = (27/40)*56 = 37.8g. Mass of CaO for 80% yield = 0.8*37.8 = 30.24g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question:
      'For the sake of comparisons, enthalpy changes for various processes may be quoted with respect to some standard conditions. Give one standard parameter and its value.',
    answer: 'Standard temperature ≡ 298 K (25°C)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Thermodynamics',
    question_year: 2018
  },
  {
    question:
      'When Iodine (V) oxide oxidizes carbon (II) oxide, CO2 and elemental iodine are formed. Give a balanced equation for this reaction.',
    answer: 'I2O5 + 5CO → I2 + 5CO2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Equations',
    question_year: 2018
  },
  {
    question:
      'Iron (III) tetraoxosulphate (VI) decomposes when heated to iron (III) oxide and sulphur (VI) oxide. Give a balanced equation for this reaction.',
    answer: 'Fe2(SO4)3 → Fe2O3 + 3SO3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Equations',
    question_year: 2018
  },
  {
    question:
      'Silver metal dissolves in trioxonitrate (V) acid to give silver (I) trioxonitrate, water and nitrogen (II) oxide. Give a balanced equation for this reaction.',
    answer: '3Ag + 4HNO3 → 3AgNO3 + 2H2O + NO',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Equations',
    question_year: 2018
  },
  {
    question:
      'In which direction do electrons flow in the external circuit when a Voltaic cell is used as a source of power? How different is it from an electrolytic cell?',
    answer:
      'Voltaic cell: From the anode to the cathode in the external circuit. Electrolytic cell: Same direction as in a Voltaic cell.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },
  {
    question: 'Define an electrode potential of a half-cell.',
    answer:
      'It is the potential measured as voltage for an oxidation form of a substance to be reduced.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },
  {
    question:
      'How can the electrode potential of a hypothetical half-cell M+/M be obtained?',
    answer:
      'Set up a voltaic cell with the hydrogen electrode H+, H2/Pt. The electrode potential of the hydrogen electrode is arbitrarily set to zero. The electrode potential is therefore equal to the experimentally determined emf.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },

  {
    question:
      'Calculate the volume of 0.0120 moldm-3 solution of K2Cr2O7 that will react completely with 24.0 cm3 of acidified 0.0800 moldm-3 solution of Fe2+.',
    answer:
      'V, 0.012    24, 0.08\n(24*0.08)/ (V*0.012) = 6/1\nV = (24*0.08)/ (6*0.012) = 26.7 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },
  {
    question:
      'In a determination using 20.0 cm3 of 0.0120 moldm-3 of K2Cr2O7 solution, what volume of 0.100 moldm-3 H2SO4 will be needed?',
    answer:
      '(Cr2O72-)/2H+ = 1/7; since H2SO4 ≡ 2H+\nmmol of Cr2O72- used = 0.24\nmmol of H2SO4 needed = 7*0.24 = 1.68\nVolume of 0.100 H2SO4 needed = 1.68/0.1 = 16.8 cm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },
  {
    question:
      'Calculate the concentration of acidified Fe2+ solution if 25.0 cm3 of it required 20.0 cm3 of 0.0150 moldm-3 of K2Cr2O7 solution for a complete reaction.',
    answer:
      'Fe2+/Cr2O72- = 6/1; (25*M)/ (20*0.015) = 6/1\nM = (6*20*0.015)/25 = 0.0720 moldm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Ion Exchange and Water Purification',
    question_year: 2018
  },
  {
    question:
      'In the purification of water by ion-exchange which cation and which anion are preferred to be on the cation and anion exchangers before the impure water is passed?',
    answer: 'H+ on the cation-exchanger; OH- on the anion exchanger',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Ion Exchange and Water Softening',
    question_year: 2018
  },
  {
    question:
      'In the softening of water of temporary or permanent hardness by the addition of solid sodium trioxocarbonate IV, why is the resultant water not pure and which substances may be the main impurities?',
    answer:
      'Addition of Na2CO3 to water of temporary hardness: M(HCO3)2 + Na2CO3 → MCO3 + 2NaH(CO3) (M may be Ca2+ or Mg2+ or both). Addition of Na2CO3 to water of permanent hardness: MX + Na2CO3 → MCO3 + NaX (X is any suitable anion) Main impurities are soluble Na+ salts (NaHCO3 and Na2X).',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Ion Exchange vs. Distillation for Water Purification',
    question_year: 2018
  },
  {
    question:
      'Pure water for laboratory work such as quantitative analyses can be prepared by (a) use of ion-exchange or (b) by distillation. If both are available which is the preferred one and why?',
    answer:
      'The distilled water is better than the de-ionised water because distillation removes both inorganic and organic impurities while the ion-exchanger removes only inorganic substances.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility and Solubility Products',
    question_year: 2018
  },
  {
    question:
      'Calculate the solubility of a salt MX in gdm-3 if its solubility product is 1.60*10-7 at 25°C.',
    answer:
      'MX = 85.0\nKsp = 1.6*10-7 or 16*10-8\nSolubility of X of MX = √Ksp = 4.0*10-4 moldm-3\nSolubility in gdm-3 = 4*85*10-4 = 3.40*10-2',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility and Solubility Products',
    question_year: 2018
  },
  {
    question:
      'Calculate the solubility of M(OH)2 in moldm-3 if its solubility product at 30°C is 2.70*10-14.',
    answer:
      'Ksp = 2.7*10-14 or 27.0*10-15\nBut solubility of X of M(OH)2 = (Ksp)1/3 = 3.00*10-5',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Solubility and Solubility Products',
    question_year: 2018
  },
  {
    question:
      'Calculate the solubility of a salt MY in gdm-3 if its solubility product is 2.5*10-11.',
    answer:
      'MY = 105.0\nKsp = 2.5*10-11 or 25*10-12\nSolubility, X of MY = √Ksp = 5.0*10-6 moldm-3\nSolubility in gdm-3 = 5.0*105*10-6 = 5.25*10-4 gdm-3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Atomic Theory',
    question_year: 2018
  },
  {
    question:
      'State one of the Postulates of Dalton’s Atomic Theory and indicate if the idea is still valid or not. If not explain why.',
    answer:
      'Matter/Element is made up of atoms. This is no longer valid because matter may consist of molecules. All atoms of an element are identical; they have the same mass and size. This is no longer valid because there are elements with isotopes. Atoms of different elements have different mass/weights and size and different chemical properties. This is still valid. Atoms of different elements combine in simple whole number ratios to form compounds. This is still valid. Atoms cannot be created or destroyed. This is no longer valid. Nuclear reactions can destroy atoms and create new ones.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acids and Bases',
    question_year: 2018
  },
  {
    question:
      'Calculate the pH of 0.100 moldm-3 solution of a weak base of pKb 3.40.',
    answer:
      'pOH = ½pKb – ½logCb = 3.4/2 + 0.5 = 2.20\npH = 14 – pOH = 14 – 2.2 = 11.80',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Acids and Bases',
    question_year: 2018
  },
  {
    question:
      'Calculate the pH of 0.100 moldm-3 solution of NH4+Cl- if the pKb of ammonia is 4.80.',
    answer:
      'For acid – base conjugate pair\npKb (base) + pKa (conjugate) = 14.0\nTherefore, pKa of NH4+ = 14 – 4.8 = 9.20\npH (NH4+) = ½pKa – ½logCa = 9.2/2 + 0.5 = 5.10',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gas Laws',
    question_year: 2018
  },
  {
    question:
      '500 cm3 of 0.500 moldm-3 H2SO4 solution were diluted to 1 dm3 and 30 cm3 of this further diluted to 150 cm3. Calculate the expected pH of the diluted solution.',
    answer:
      '1st Dilution 500 cm3 to 1000 cm3: 1 in 2\n2nd Dilution 30 cm3 to 150 cm3: 1 in 5\nTotal dilution: 1 in 10\nNew H2SO4 concentration = 0.5/10 = 0.05 moldm-3\nH+ concentration = 0.10 moldm-3; pH = 1.0',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gas Laws',
    question_year: 2018
  },
  {
    question: 'Gas densities are directly proportional to ...',
    answer: 'Their molar masses at a given temperature and pressure',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gas Laws',
    question_year: 2018
  },
  {
    question: 'Equal volumes of different gases contain...',
    answer:
      'The same number of particles at constant temperature and pressure.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Gas Laws',
    question_year: 2018
  },

  {
    question:
      'The ratio of the volume of gases consumed or produced in a chemical reaction ...',
    answer:
      'Is equal to the ratio of simple whole numbers when temperature and pressure are constant. (Gay-Lussac Law).',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question:
      'If the solubility of a given salt of molecular mass 60.0 is 0.090 moldm-3 at 30°C, what mass in grams of the salt is needed to prepare 350cm3 of a saturated solution?',
    answer:
      'Mass of salt needed to prepare 1dm3 saturated solution = 0.090*60.0 = 5.40 g\nMass of salt needed for 350cm3 = 5.40*0.35 = 1.89 g',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question: 'Here is a list of ores of some well-known metals...',
    answer: 'Iron: Siderite; Potassium: Feldspar',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question: 'Here is a list of ores of some well-known metals...',
    answer:
      'Gold: None for gold. Gold occurs in the uncombined state. Manganese: Braunite (Mn2O4)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question: 'Here is a list of ores of some well-known metals...',
    answer: 'Aluminium: Corrundum/Feldspar; Magnesium: Carnallite',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question:
      'Consider the following half-cells with their corresponding electrode potentials...',
    answer:
      'Oxidation: Ni - 2e → Ni2+ + 0.23 V\nReduction: O2 + 4e + 4H+ → 2H2O + 1.23 V\nMultiply (1) by 2 and add to (2):\n2Ni + O2 + 4H+ → 2Ni2+ + 2H2O\nEmf = 1.23 + 0.23 = 1.46 V\nSince emf is positive Ni can be oxidised by air (O2) in acidic medium.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },
  {
    question:
      'Consider the following half-cells and their respective electrode potentials...',
    answer:
      'Oxidation: Pb - 2e → Pb2+ (1) + 0.13 V\nReduction: ClO3- + H2O + 2e → ClO2- + 2OH- (2) + 0.35 V\nAdd (1) and (2):\nCell reaction: Pb + ClO3- + H2O → Pb2+ + ClO2- + 2OH-\nEmf = 0.13 + 0.35 = 0.48 V',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },
  {
    question:
      'Consider the following half-cells and their respective electrode potentials...',
    answer:
      'For solution to turn brown bromine has to be released\nOxidation: 2Br- - 2e → Br2 (1) - 1.07 V\nReduction: O2 + 4e + 4H+ → 2H2O (2) + 1.23\nMultiply (1) by 2 and add to (2):\n2Br- + O2 + 4H+ → 2Br2 + 2H2O\nEmf = 1.23 – 1.07 = 0.16 V\nBromine will be formed hence solution will turn brown',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Electrochemistry',
    question_year: 2018
  },
  {
    question:
      'An inflatable balloon is filled with 8.0 g oxygen gas, 33.0 g of carbon (IV) oxide and 20.0 g of Neon...',
    answer:
      'Moles of O2 = 0.25\nMoles of CO2 = 0.75\nMoles of Ne = 1.00\nTotal moles of gases = 2\nSince the conditions are equivalent to STP,\nVolume to be occupied by 2 moles of gases = 22.4*2 dm3 = 44.8 dm3',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Equilibrium',
    question_year: 2018
  },
  {
    question:
      'An inflatable balloon is filled with 8.0 g oxygen gas, 33.0 g of carbon (IV) oxide and 20.0 g of Neon...',
    answer:
      'Partial pressure = (Mole fraction of gas) * Total pressure\nPartial pressure of O2 = (0.25/2) * 160 = 20.0 kPa\nPartial pressure of CO2 = (0.75/2) * 160 = 60 kPa',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction Rate and Equilibrium Constant',
    question_year: 2018
  },
  {
    question:
      'An inflatable balloon is filled with 8.0 g oxygen gas, 33.0 g of carbon (IV) oxide and 20.0 g of Neon...',
    answer:
      '23892U + 10n → 23993X + 0-1e\nX, new nuclide has mass number of 239; atomic number 93 (X = Neptunium)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction Rate and Equilibrium Constant',
    question_year: 2018
  },
  {
    question:
      'A reaction between A and B to form C is first order with respect to A and also with respect to B...',
    answer:
      'Rate = k[A]1[B]1\n4.20*10-3 = k[1.0*10-2][2.0*10-2]\nk = 4.20*10-5/2.0*10-4 = 0.21 mol-1dm3s-1 or 2.10*10-1 mol-1dm3s-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction Rate and Equilibrium Constant',
    question_year: 2018
  },
  {
    question:
      'If the half-life of a first order reaction is 5.0 minutes, calculate the rate constant of the reaction and give its units.',
    answer:
      'For first order reaction\nt1/2 = 0.693/k\nk = 0.693/5*60 = 2.31*10-3s-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reaction Rate and Equilibrium Constant',
    question_year: 2018
  },
  {
    question:
      'The Collision Theory defines Activation Energy. State the Collision Theory and define Activation Energy.',
    answer:
      'Collision Theory states that in order for a reaction to occur, reactant molecules must collide with energy greater than some minimum value and with proper orientation.\nActivation Energy is the minimum energy that a collision needs to make molecules react.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Heat and Thermochemistry',
    question_year: 2018
  },
  {
    question:
      'Name all the structural isomers of pentene which are also pentenes with the double bond between the second and third carbons and an OH group as a substituent such that no OH is on an sp2-carbon.',
    answer:
      '(i) Pent-2-en-1-ol or 2-Penten-1-ol: HOCH2CH=CHCH2CH3\n(ii) Pent-3-en-1-ol or 3-Penten-1-ol: CH3CH=CHCH2CH2OH\n(iii) Pent-3-en-2-ol or 3-Penten-2-ol: CH3CH=CHCHOHCH3\n(Note OH has priority over C = C, so the numbering of the carbons should be such that OH has the lower number)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Heat and Thermochemistry',
    question_year: 2018
  },

  {
    question: 'Consider the following equilibrium process...',
    answer:
      'From the equation: A/C = 3/2; A = (3/2) C\nHence moles of A = 3/2 * 0.64 = 0.96 moles',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Heat and Thermochemistry',
    question_year: 2018
  },
  {
    question:
      'If the equilibrium reaction: 3A + B → 2C + 4D, all the compounds are gases, how would an increase in the external pressure affect the equilibrium constant KC?',
    answer:
      'The equilibrium will momentarily shift in the backward direction to favor formation of more reactants. Finally equilibrium will be re-established with the same KC. Only a temperature change can change KC.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Heat and Thermochemistry',
    question_year: 2018
  },
  {
    question: 'A 50 cm3 burette was filled to the mark...',
    answer: 'Rate = change in volume/time = 10/20 = 0.500 cm3s-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Heat and Thermochemistry',
    question_year: 2018
  },
  {
    question: 'A 50 cm3 burette was filled to the mark...',
    answer: 'Rate = 11/30 = 0.367 cm3s-1',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Heat and Thermochemistry',
    question_year: 2018
  },
  {
    question: 'A 50 cm3 burette was filled to the mark...',
    answer:
      'i) Rate depends on the height of the column of water.\n(ii) Rates of chemical reactions depend on concentration of reactants.',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reduction of Metal Oxides',
    question_year: 2018
  },
  {
    question: 'Haematite is a well-known ore of iron...',
    answer:
      'Fe2O3 → 2Fe + 3/2O2\nLoss in mass = 48\n% Loss in mass = (48/160) * 100 = 30.0%',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reduction of Metal Oxides',
    question_year: 2018
  },
  {
    question:
      'FeO can also be reduced to metallic iron. In which reduction is the percentage loss greater and by how much?',
    answer:
      'FeO → Fe + ½O2\nLoss in mass = 16\n% Loss in mass = (6/72) * 100 = 22.2%\nThe percentage loss is greater for Fe2O3 by (30 – 22.2) or 7.8%',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Reduction of Metal Oxides',
    question_year: 2018
  },
  {
    question: 'An ore of iron consists of FeS2. What is the name of this ore?',
    answer: 'Iron pyrites',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Types of Ores',
    question_year: 2018
  },
  {
    question: 'Consider the following bond energies all in kJmol-1...',
    answer:
      'CH3CH2CH3 + 5O2 → 3CO2 + 4H2O\nBonds to be broken = 8C – H + 2 C – C + 5O2\nEnergy needed = 8*411 + 2*346 + 5*494 = 6450 or 6.45*103 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonds and Energetics',
    question_year: 2018
  },
  {
    question: 'Consider the following bond energies all in kJmol-1...',
    answer:
      'CH3CH2CH3 + 5O2 → 3CO2 + 4H2O\nBond formed = 6C = O + 8O – H\nHeat given out = -6*799 – 8*459 = -8466 or – 8.47*103 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Bonds and Energetics',
    question_year: 2018
  },
  {
    question: 'Consider the following bond energies all in kJmol-1...',
    answer:
      '∆Hcombustion = -8466 + 6450 = -2016 kJ\n∆H per C = -2016/3 = -672 kJ',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Stoichiometry and Chemical Reactions',
    question_year: 2018
  },
  {
    question:
      'When scandium–45, atomic number 21 is bombarded with neutrons...',
    answer:
      '4521Sc + 10n → 4219X + 42α; Atomic number 19\nElement = Potassium (K)',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Nuclear Reactions',
    question_year: 2018
  },
  {
    question:
      'When sulphur–33, atomic number 16, is bombarded with neutrons...',
    answer: '3316S + 10n → 3315P + 11X\nNuclear particle = proton',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Reactions and Observations',
    question_year: 2018
  },
  {
    question:
      'In a nuclear bombardment, Lithium–6, atomic number 3 absorbs one neutron...',
    answer: '63Li + 10n → 42X + 31H\nX must be helium nucleus',
    difficulty_level: '1/8TH',
    subject_name: 'Chemistry',
    topic: 'Chemical Reactions and Observations',
    question_year: 2018
  },
  {
    question:
      'Bubbling CO2 gas through limewater is a test for CO2. What is limewater?',
    answer: 'It is a solution of calcium hydroxide.',
    difficulty_level: 'Quarter finals',
    subject_name: 'Chemistry',
    topic: 'Chemical Reactions and Observations',
    question_year: 2018
  }
];

export default questionsData;
