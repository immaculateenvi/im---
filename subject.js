// ========== SUBJECT.JS ==========
// Individual subject test page: loads questions, CBT/practice mode, timer, explanations
// Fully offline after service worker caches it
// SUPPORTS: MCQ, True/False, Date input, Name input, Numeric input
// FEATURES: Custom timer selection, complete time lock, perfected CVE 105 corrections
(function() {
    "use strict";

    // ---------- MEGA QUESTION BANK (55+ each, permanently cached) ----------
    const questionBank = {
        // ========== CVE 105 – COMPLETELY PERFECTED WITH CORRECT ANSWERS & DETAILED EXPLANATIONS ==========
        cve: [
            // === MCQ QUESTIONS ===
            { q: "Science is the ...... and ...... approach to discovering how things works.", 
              type: "mcq", opts: ["systematic, logical", "random, chaotic", "subjective, personal", "divine, mystical"], 
              ans: 0, topic: "Nature of Science", 
              explanation: "✓ CORRECT: Science uses systematic observation and logic to understand natural phenomena. The other options (random, subjective, divine) do not represent the scientific method." },
            
            { q: "Who first proposed the atomic theory?", 
              type: "mcq", opts: ["John Dalton", "Dmitry Mendeleyev", "Isaac Newton", "Niels Bohr"], 
              ans: 0, topic: "Atomic Theory", 
              explanation: "✓ CORRECT: John Dalton (1803) proposed that matter consists of indivisible atoms. ❌ Mendeleev created the periodic table. ❌ Newton studied motion and gravity. ❌ Bohr improved the atomic model later." },
            
            { q: "Leonardo da Vinci was:", 
              type: "mcq", opts: ["artist & scientist", "pure painter", "architect only", "sculptor"], 
              ans: 0, topic: "Renaissance", 
              explanation: "✓ CORRECT: Da Vinci was a polymath - artist, scientist, anatomist, engineer. ❌ He was not limited to painting, architecture, or sculpture alone." },
            
            { q: "Technology is the goal of ...... artefacts:", 
              type: "mcq", opts: ["designing", "selling", "repairing", "analysing"], 
              ans: 0, topic: "Technology definition", 
              explanation: "✓ CORRECT: Technology applies knowledge to DESIGN solutions. ❌ Selling, repairing, and analyzing are secondary activities, not the primary goal." },
            
            { q: "Which is NOT an inert gas?", 
              type: "mcq", opts: ["oxygen", "helium", "neon", "argon"], 
              ans: 0, topic: "Gases", 
              explanation: "✓ CORRECT: Oxygen is reactive and forms compounds. ❌ Helium, neon, and argon are Group 18 noble gases that are chemically inert." },
            
            { q: "Galileo improved which instrument?", 
              type: "mcq", opts: ["telescope", "microscope", "thermoscope", "all"], 
              ans: 0, topic: "Scientific instruments", 
              explanation: "✓ CORRECT: Galileo refined the telescope in 1609 for astronomical observations. ❌ He did not significantly improve the microscope." },
            
            { q: "First battery invented by?", 
              type: "mcq", opts: ["Volta", "Galvani", "Faraday", "Ohm"], 
              ans: 0, topic: "Electricity", 
              explanation: "✓ CORRECT: Alessandro Volta invented the voltaic pile (1800) - the first chemical battery. ❌ Galvani studied frog legs, Faraday discovered electromagnetic induction." },
            
            { q: "Penicillin discovered by?", 
              type: "mcq", opts: ["Fleming", "Florey", "Chain", "Ehrlich"], 
              ans: 0, topic: "Medicine", 
              explanation: "✓ CORRECT: Alexander Fleming discovered penicillin in 1928 from Penicillium mold. ❌ Florey & Chain later developed it for medical use." },
            
            { q: "Theory of relativity proposed by?", 
              type: "mcq", opts: ["Einstein", "Newton", "Maxwell", "Galileo"], 
              ans: 0, topic: "Physics", 
              explanation: "✓ CORRECT: Albert Einstein - Special Relativity (1905), General Relativity (1915). ❌ Newton studied gravity, Maxwell unified electromagnetism." },
            
            { q: "First programmable computer?", 
              type: "mcq", opts: ["Z3", "ENIAC", "Colossus", "ABC"], 
              ans: 0, topic: "Computing", 
              explanation: "✓ CORRECT: Zuse Z3 (1941) - first working programmable computer. ❌ ENIAC (1945) was electronic, Colossus (1943) was for code-breaking." },
            
            { q: "Structure of benzene discovered by?", 
              type: "mcq", opts: ["Kekulé", "Lavoisier", "Dalton", "Mendeleev"], 
              ans: 0, topic: "Chemistry", 
              explanation: "✓ CORRECT: August Kekulé (1865) discovered benzene's ring structure from a dream of a snake biting its tail." },
            
            { q: "Periodic table inventor?", 
              type: "mcq", opts: ["Mendeleev", "Meyer", "Newlands", "Döbereiner"], 
              ans: 0, topic: "Chemistry", 
              explanation: "✓ CORRECT: Dmitri Mendeleev (1869) arranged elements by atomic weight, PREDICTING undiscovered elements. ❌ Others developed similar tables but without predictions." },
            
            { q: "X-ray discovered by?", 
              type: "mcq", opts: ["Röntgen", "Curie", "Becquerel", "Thomson"], 
              ans: 0, topic: "Physics", 
              explanation: "✓ CORRECT: Wilhelm Röntgen discovered X-rays in 1895, earned first Nobel Prize in Physics (1901). ❌ Curie discovered radium, Becquerel discovered radioactivity." },
            
            { q: "Radioactivity discovered by?", 
              type: "mcq", opts: ["Becquerel", "Curie", "Rutherford", "Roentgen"], 
              ans: 0, topic: "Physics", 
              explanation: "✓ CORRECT: Henri Becquerel discovered radioactivity in 1896 from uranium salts. ❌ Curies isolated radium, Rutherford identified alpha/beta particles." },
            
            { q: "Quantum theory founder?", 
              type: "mcq", opts: ["Planck", "Einstein", "Bohr", "Heisenberg"], 
              ans: 0, topic: "Physics", 
              explanation: "✓ CORRECT: Max Planck (1900) proposed energy quanta - foundation of quantum theory. ❌ Einstein explained photoelectric effect, Bohr modeled atom." },
            
            { q: "First cloned mammal?", 
              type: "mcq", opts: ["Dolly sheep", "Polly sheep", "Tracy sheep", "Molly"], 
              ans: 0, topic: "Biology", 
              explanation: "✓ CORRECT: Dolly the sheep (1996) - first cloned mammal from adult somatic cells. ❌ Others were later clones." },
            
            { q: "CRISPR associated with?", 
              type: "mcq", opts: ["gene editing", "cloning", "PCR", "sequencing"], 
              ans: 0, topic: "Biotech", 
              explanation: "✓ CORRECT: CRISPR-Cas9 is a revolutionary GENE-EDITING tool (Nobel Prize 2020). ❌ It is not for cloning, PCR, or sequencing." },
            
            { q: "World Wide Web inventor?", 
              type: "mcq", opts: ["Tim Berners-Lee", "Vint Cerf", "Bob Kahn", "Marc Andreessen"], 
              ans: 0, topic: "Internet", 
              explanation: "✓ CORRECT: Tim Berners-Lee invented WWW in 1989 at CERN - HTML, HTTP, first browser. ❌ Cerf/Kahn invented TCP/IP, Andreessen created Mosaic." },
            
            { q: "Printing press inventor?", 
              type: "mcq", opts: ["Gutenberg", "Caxton", "Fust", "Schoeffer"], 
              ans: 0, topic: "Innovation", 
              explanation: "✓ CORRECT: Johannes Gutenberg invented movable-type printing press (c.1450). ❌ Caxton introduced it to England, Fust/Schoeffer were partners." },
            
            { q: "Steam engine improved by?", 
              type: "mcq", opts: ["Watt", "Newcomen", "Savery", "Trevithick"], 
              ans: 0, topic: "Industrial revolution", 
              explanation: "✓ CORRECT: James Watt added separate condenser (1765) - 4x efficiency improvement. ❌ Newcomen invented earlier atmospheric engine." },
            
            { q: "Telephone patented by?", 
              type: "mcq", opts: ["Bell", "Gray", "Edison", "Meucci"], 
              ans: 0, topic: "Communication", 
              explanation: "✓ CORRECT: Alexander Graham Bell patented telephone in 1876. ❌ Gray filed same day, Edison improved design, Meucci had earlier device." },
            
            // === TRUE/FALSE QUESTIONS ===
            { q: "True or False: The atomic theory was first proposed by Isaac Newton.",
              type: "tf", opts: ["True", "False"],
              ans: 1, topic: "Atomic Theory",
              explanation: "✓ CORRECT: FALSE. John Dalton proposed atomic theory in 1803. ❌ Newton studied optics and gravity, not atomic theory." },
            
            { q: "True or False: Leonardo da Vinci was primarily a painter with no scientific contributions.",
              type: "tf", opts: ["True", "False"],
              ans: 1, topic: "Renaissance",
              explanation: "✓ CORRECT: FALSE. Da Vinci made major scientific contributions in anatomy, engineering, botany, and hydrodynamics." },
            
            { q: "True or False: The first artificial satellite was launched by the United States.",
              type: "tf", opts: ["True", "False"],
              ans: 1, topic: "Space Race",
              explanation: "✓ CORRECT: FALSE. Sputnik 1 was launched by Soviet Union on October 4, 1957. ❌ US launched Explorer 1 in 1958." },
            
            { q: "True or False: Marie Curie discovered X-rays.",
              type: "tf", opts: ["True", "False"],
              ans: 1, topic: "Radioactivity",
              explanation: "✓ CORRECT: FALSE. Wilhelm Röntgen discovered X-rays in 1895. ❌ Marie Curie discovered radium and polonium, coined 'radioactivity'." },
            
            { q: "True or False: The Internet was invented in the 1980s.",
              type: "tf", opts: ["True", "False"],
              ans: 1, topic: "Internet",
              explanation: "✓ CORRECT: FALSE. ARPANET (precursor) was established in 1969. ❌ World Wide Web was invented in 1989, commercialized in 1990s." },
            
            // === DATE QUESTIONS (Year only) ===
            { q: "What year was Sputnik 1 launched? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "1957", topic: "Space Race",
              explanation: "✓ CORRECT: October 4, 1957 - First artificial satellite, 83.6 kg, orbited for 3 months." },
            
            { q: "What year did the Wright brothers achieve first powered flight? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "1903", topic: "Aviation",
              explanation: "✓ CORRECT: December 17, 1903 - Kitty Hawk, NC. 12 seconds, 120 feet, 4 flights total." },
            
            { q: "What year was the first moon landing? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "1969", topic: "Apollo 11",
              explanation: "✓ CORRECT: July 20, 1969 - Neil Armstrong & Buzz Aldrin, 21 hours on lunar surface." },
            
            { q: "What year was NASA established? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "1958", topic: "Space agency",
              explanation: "✓ CORRECT: July 29, 1958 - Replaced NACA, began operations October 1, 1958." },
            
            { q: "What year was the first iPhone released? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "2007", topic: "Smartphones",
              explanation: "✓ CORRECT: Unveiled January 9, 2007, released June 29, 2007 - revolutionized mobile computing." },
            
            { q: "What year was the periodic table first published by Mendeleev? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "1869", topic: "Chemistry",
              explanation: "✓ CORRECT: 1869 - 63 elements, arranged by atomic weight, gaps for undiscovered elements." },
            
            { q: "What year did the Chernobyl disaster occur? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "1986", topic: "Nuclear",
              explanation: "✓ CORRECT: April 26, 1986 - Reactor explosion, Level 7 event, worst nuclear disaster." },
            
            { q: "What year was the Human Genome Project completed? (enter 4-digit year)",
              type: "date", input_type: "year",
              ans: "2003", topic: "Genetics",
              explanation: "✓ CORRECT: April 2003 - 2 years ahead of schedule, $2.7 billion, mapped human DNA." },
            
            // === NAMES (Fill in the blank) ===
            { q: "Who discovered penicillin? (Enter last name only, e.g., 'Fleming')",
              type: "name", input_type: "scientist",
              ans: ["Fleming", "FLEMING", "fleming"], topic: "Medicine",
              explanation: "✓ CORRECT: Alexander Fleming (1928) - Nobel Prize 1945. Noticed mold killing bacteria." },
            
            { q: "Who developed the theory of general relativity? (Enter last name only)",
              type: "name", input_type: "scientist",
              ans: ["Einstein", "EINSTEIN", "einstein"], topic: "Physics",
              explanation: "✓ CORRECT: Albert Einstein (1915) - gravity as curved spacetime, confirmed by eclipse 1919." },
            
            { q: "Who invented the telephone? (Enter last name only)",
              type: "name", input_type: "inventor",
              ans: ["Bell", "BELL", "bell"], topic: "Communication",
              explanation: "✓ CORRECT: Alexander Graham Bell (1876) - first words: 'Mr. Watson, come here.'" },
            
            { q: "Who proposed the heliocentric model of the solar system? (Enter last name only)",
              type: "name", input_type: "scientist",
              ans: ["Copernicus", "COPERNICUS", "copernicus"], topic: "Astronomy",
              explanation: "✓ CORRECT: Nicolaus Copernicus (1543) - De revolutionibus, Earth orbits Sun." },
            
            { q: "Who discovered the structure of DNA? (Enter last name, e.g., 'Watson' or 'Crick')",
              type: "name", input_type: "scientist",
              ans: ["Watson", "Crick", "WATSON", "CRICK", "watson", "crick"], topic: "Genetics",
              explanation: "✓ CORRECT: James Watson & Francis Crick (1953) - double helix, used Franklin's X-ray data." },
            
            { q: "Who invented the printing press? (Enter last name only)",
              type: "name", input_type: "inventor",
              ans: ["Gutenberg", "GUTENBERG", "gutenberg"], topic: "Innovation",
              explanation: "✓ CORRECT: Johannes Gutenberg (c.1450) - movable type, printed 180 Bibles." },
            
            // === NUMERIC (Quantities) ===
            { q: "How many American astronauts have walked on the moon and returned to Earth? (Enter number)",
              type: "numeric", input_type: "integer",
              ans: ["12", 12], topic: "Apollo",
              explanation: "✓ CORRECT: 12 astronauts (Apollo 11-17, excluding 13). All returned safely. Last: 1972." },
            
            { q: "How many elements were in Mendeleev's first periodic table? (Enter number)",
              type: "numeric", input_type: "integer",
              ans: ["63", 63], topic: "Chemistry",
              explanation: "✓ CORRECT: 63 known elements (1869). Today: 118 confirmed elements." },
            
            { q: "How long is Halley's Comet orbital period in years? (Enter number)",
              type: "numeric", input_type: "integer",
              ans: ["76", 76], topic: "Astronomy",
              explanation: "✓ CORRECT: ~76 years. Last: 1986, Next: 2061. Named after Edmond Halley." },
            
            // === MORE MCQ TO REACH 55 ===
            { q: "First analog computing devices?", 
              type: "mcq", opts: ["abacus, slide rule", "ENIAC, UNIVAC", "difference engine", "calculator"], 
              ans: 0, topic: "Computing", 
              explanation: "✓ CORRECT: Abacus (3000 BC) and slide rule (1620s) are analog. ❌ ENIAC/UNIVAC are digital electronic computers." },
            
            { q: "Copernicus advanced heliocentric theory in?", 
              type: "mcq", opts: ["1500s", "1600s", "1400s", "1700s"], 
              ans: 0, topic: "Astronomy", 
              explanation: "✓ CORRECT: 1543 - De revolutionibus published. ❌ Galileo (1600s) later provided evidence." },
            
            { q: "Polio vaccine by Jonas Salk in?", 
              type: "mcq", opts: ["1955", "1945", "1960", "1950"], 
              ans: 0, topic: "Medicine", 
              explanation: "✓ CORRECT: Licensed 1955 after trial with 1.8 million children. ❌ Sabin oral vaccine came 1961." },
            
            { q: "Stone age subdivisions by John Lubbock (year)?", 
              type: "mcq", opts: ["1865", "1859", "1872", "1845"], 
              ans: 0, topic: "Prehistory", 
              explanation: "✓ CORRECT: 1865 - Coined 'Palaeolithic' and 'Neolithic' in 'Pre-historic Times'." },
            
            { q: "High-pressure steam vehicle pioneer?", 
              type: "mcq", opts: ["Richard Trevithick, 1801", "James Watt", "Stephenson", "Fulton"], 
              ans: 0, topic: "Industrial revolution", 
              explanation: "✓ CORRECT: Trevithick (1801) - first steam road locomotive. ❌ Watt improved low-pressure engines." },
            
            { q: "Bessemer process year?", 
              type: "mcq", opts: ["1855", "1840", "1870", "1865"], 
              ans: 0, topic: "Metallurgy", 
              explanation: "✓ CORRECT: 1855 - Henry Bessemer patented steelmaking process. Made cheap steel possible." },
            
            { q: "First moon core sample year?", 
              type: "mcq", opts: ["1970", "1969", "1971", "1972"], 
              ans: 0, topic: "Lunar science", 
              explanation: "✓ CORRECT: 1970 - Apollo 12 returned first deep core (1.5m). ❌ Apollo 11 returned only surface samples." },
            
            { q: "Thermos flask inventor?", 
              type: "mcq", opts: ["James Dewar", "Alexander Bell", "Edison", "Tesla"], 
              ans: 0, topic: "Inventions", 
              explanation: "✓ CORRECT: Sir James Dewar (1892) - vacuum flask. ❌ Commercialized as Thermos in 1904." },
            
            { q: "Kepler's laws based on?", 
              type: "mcq", opts: ["Tycho Brahe data", "Copernicus", "Ptolemy", "Galileo"], 
              ans: 0, topic: "Astronomy", 
              explanation: "✓ CORRECT: Tycho Brahe's precise planetary observations (1601). Kepler analyzed data for 20+ years." },
            
            { q: "Microscope improved by?", 
              type: "mcq", opts: ["Leeuwenhoek", "Hooke", "Janssen", "all"], 
              ans: 3, topic: "Microscopy", 
              explanation: "✓ CORRECT: ALL contributed. Janssen: compound, Hooke: cells, Leeuwenhoek: lenses & bacteria." },
            
            { q: "Industrial Revolution began in?", 
              type: "mcq", opts: ["Britain", "USA", "Germany", "France"], 
              ans: 0, topic: "History", 
              explanation: "✓ CORRECT: Britain (1760-1840). Steam power, textile machinery, iron production." },
            
            { q: "Internet predecessor?", 
              type: "mcq", opts: ["ARPANET", "NSFNET", "CSNET", "BITNET"], 
              ans: 0, topic: "Internet", 
              explanation: "✓ CORRECT: ARPANET (1969) - first packet-switching network. ❌ Others came later." },
            
            { q: "Light bulb co-inventor?", 
              type: "mcq", opts: ["Edison", "Swan", "Both", "Tesla"], 
              ans: 2, topic: "Invention", 
              explanation: "✓ CORRECT: BOTH. Edison (US 1879) & Swan (UK 1878) independently developed practical lamps." },
            
            { q: "Radio developed by?", 
              type: "mcq", opts: ["Marconi", "Tesla", "Popov", "all"], 
              ans: 3, topic: "Communication", 
              explanation: "✓ CORRECT: ALL. Tesla: patents, Marconi: commercialization, Popov: lightning detector." },
            
            { q: "First nuclear reactor?", 
              type: "mcq", opts: ["Chicago Pile-1", "Hanford", "Chernobyl", "Fermi-1"], 
              ans: 0, topic: "Nuclear", 
              explanation: "✓ CORRECT: Chicago Pile-1 (1942) - Fermi achieved first self-sustaining chain reaction." },
            
            { q: "Atomic bomb tested?", 
              type: "mcq", opts: ["1945", "1944", "1946", "1947"], 
              ans: 0, topic: "History", 
              explanation: "✓ CORRECT: July 16, 1945 - Trinity test, New Mexico. 20 kiloton yield." },
            
            { q: "First email sent?", 
              type: "mcq", opts: ["1971", "1969", "1975", "1980"], 
              ans: 0, topic: "Internet", 
              explanation: "✓ CORRECT: 1971 - Ray Tomlinson sent first email. Message: 'QWERTYUIOP' or similar." },
            
            { q: "USB invented by?", 
              type: "mcq", opts: ["Intel", "Apple", "IBM", "Microsoft"], 
              ans: 0, topic: "Technology", 
              explanation: "✓ CORRECT: Intel (Ajay Bhatt) led USB development. USB 1.0 released 1996." },
            
            { q: "GPS became fully operational?", 
              type: "mcq", opts: ["1995", "1985", "2000", "1990"], 
              ans: 0, topic: "Navigation", 
              explanation: "✓ CORRECT: 1995 - 24 satellites, full operational capability. Selective Availability removed 2000." },
            
            { q: "First artificial satellite?", 
              type: "mcq", opts: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Telstar"], 
              ans: 0, topic: "Space Race", 
              explanation: "✓ CORRECT: Sputnik 1 (1957) - Soviet Union. 83.6 kg, 98 min orbit, 3 months." },
            
            { q: "First spacewalk by?", 
              type: "mcq", opts: ["Alexei Leonov", "Neil Armstrong", "Yuri Gagarin", "Ed White"], 
              ans: 0, topic: "Space Exploration", 
              explanation: "✓ CORRECT: Alexei Leonov (1965) - 12 minutes outside Voskhod 2. ❌ White (US) did 3 months later." }
        ],
        
        // ========== CHE 101 – Chemistry ==========
        che: [
            { q: "What determines degree of reaction completeness?", opts: ["equilibrium constant", "catalyst", "rate", "intimacy"], ans: 0, topic: "Equilibrium", explanation: "✓ CORRECT: Equilibrium constant (K) indicates position of equilibrium. ❌ Catalyst affects rate only." },
            { q: "Substance altering reaction speed?", opts: ["catalyst", "promoter", "inhibitor", "enzyme"], ans: 0, topic: "Catalysis", explanation: "✓ CORRECT: Catalyst lowers activation energy, speeds reaction without being consumed." },
            { q: "Substance that increases effectiveness of catalyst?", opts: ["promoter", "activator", "enhancer", "cofactor"], ans: 0, topic: "Promoters", explanation: "✓ CORRECT: Promoter itself not a catalyst, but boosts catalytic activity (e.g., Al₂O₃ in Fe catalyst)." },
            { q: "Periodic table first devised by?", opts: ["Mendeleev", "Lavoisier", "Dalton", "Berzelius"], ans: 0, topic: "Periodic law", explanation: "✓ CORRECT: Dmitri Mendeleev (1869) - arranged by atomic weight, predicted undiscovered elements." },
            { q: "Boiling point when pressure increased?", opts: ["goes up", "goes down", "no change", "varies"], ans: 0, topic: "Boiling", explanation: "✓ CORRECT: Higher pressure requires higher temperature to boil (pressure cooker principle)." },
            { q: "Property that prevents fluid flow?", opts: ["viscosity", "density", "compressibility", "surface tension"], ans: 0, topic: "Viscosity", explanation: "✓ CORRECT: Viscosity = internal friction/resistance to flow. Honey has high viscosity." },
            { q: "Atoms same element, different weight?", opts: ["isotopes", "isomers", "ions", "allotropes"], ans: 0, topic: "Isotopes", explanation: "✓ CORRECT: Isotopes - same protons, different neutrons. ❌ Isomers (molecules), ions (charged), allotropes (structures)." },
            { q: "Center of atom?", opts: ["nucleus", "proton", "electron cloud", "neutron"], ans: 0, topic: "Atomic structure", explanation: "✓ CORRECT: Nucleus contains protons and neutrons. ❌ Electron cloud surrounds nucleus." },
            { q: "Bohr model max electron shells?", opts: ["7", "5", "6", "4"], ans: 0, topic: "Quantum theory", explanation: "✓ CORRECT: Period 7 elements have 7 electron shells (n=1 to 7)." },
            { q: "Inert gases have?", opts: ["filled outer shells", "one electron", "two electrons", "unfilled"], ans: 0, topic: "Noble gases", explanation: "✓ CORRECT: Full valence shell (8 e⁻, He has 2) = stable, unreactive." },
            { q: "Proton donor?", opts: ["acid", "base", "salt", "buffer"], ans: 0, topic: "Acid-base", explanation: "✓ CORRECT: Brønsted–Lowry acid donates H⁺. Base accepts H⁺." },
            { q: "Alkali metals melting points?", opts: ["low", "high", "very high", "moderate"], ans: 0, topic: "Group 1", explanation: "✓ CORRECT: Low melting points (Li 180°C, Na 98°C, K 64°C). Decrease down group." },
            { q: "Melvin Calvin known for?", opts: ["photosynthesis", "X-rays", "magnetics", "vitamins"], ans: 0, topic: "Biochemistry", explanation: "✓ CORRECT: Calvin cycle - Nobel 1961. Used C-14 tracer to map carbon fixation." },
            { q: "Element crucial for life?", opts: ["carbon", "oxygen", "silicon", "iron"], ans: 0, topic: "Organic chemistry", explanation: "✓ CORRECT: Carbon forms 4 covalent bonds, creates millions of organic compounds." },
            { q: "Rapid oxidation with heat?", opts: ["combustion", "explosion", "oxidation", "corrosion"], ans: 0, topic: "Combustion", explanation: "✓ CORRECT: Combustion = rapid exothermic redox reaction with oxidizer (usually O₂)." },
            { q: "Liquid to gas without boiling?", opts: ["evaporation", "condensation", "sublimation", "vaporization"], ans: 0, topic: "Phase change", explanation: "✓ CORRECT: Evaporation occurs below boiling point at surface. ❌ Vaporization = boiling." },
            { q: "Acid + alcohol yields?", opts: ["ester", "ether", "aldehyde", "ketone"], ans: 0, topic: "Esterification", explanation: "✓ CORRECT: Fischer esterification: carboxylic acid + alcohol → ester + water." },
            { q: "Valence electrons?", opts: ["electrons in outer shell", "total electrons", "core electrons", "protons"], ans: 0, topic: "Chemical bonding", explanation: "✓ CORRECT: Electrons in outermost shell, determine bonding behavior." },
            { q: "Vulcanization inventor?", opts: ["Charles Goodyear", "Hancock", "Dunlop", "Michelin"], ans: 0, topic: "Polymer", explanation: "✓ CORRECT: Charles Goodyear (1839) - accidentally discovered sulfur + rubber process." },
            { q: "pH indicates?", opts: ["[H⁺]", "[OH⁻]", "pKa", "buffer capacity"], ans: 0, topic: "Acidity", explanation: "✓ CORRECT: pH = -log₁₀[H⁺]. pH 7 = neutral, <7 acidic, >7 basic." },
            { q: "Strong acid example?", opts: ["HCl", "CH₃COOH", "H₂CO₃", "HF"], ans: 0, topic: "Acids", explanation: "✓ CORRECT: HCl (hydrochloric acid) fully dissociates in water. ❌ Others are weak acids." },
            { q: "pH of pure water?", opts: ["7", "6", "8", "0"], ans: 0, topic: "Neutral", explanation: "✓ CORRECT: At 25°C, [H⁺]=[OH⁻]=10⁻⁷ M, pH=7. Varies with temperature." },
            { q: "Atomic number = ?", opts: ["protons", "neutrons", "nucleons", "electrons+protons"], ans: 0, topic: "Atom", explanation: "✓ CORRECT: Number of protons = atomic number (Z). Defines element identity." },
            { q: "Mass number = ?", opts: ["protons+neutrons", "protons", "neutrons", "electrons+protons"], ans: 0, topic: "Nucleus", explanation: "✓ CORRECT: A = Z + N (protons + neutrons). Not on periodic table." },
            { q: "Which is halogen?", opts: ["chlorine", "oxygen", "sulfur", "nitrogen"], ans: 0, topic: "Group 17", explanation: "✓ CORRECT: Halogens: F, Cl, Br, I, At. Group 17, 7 valence electrons." },
            { q: "Which is alkali metal?", opts: ["sodium", "magnesium", "calcium", "aluminum"], ans: 0, topic: "Group 1", explanation: "✓ CORRECT: Alkali metals: Li, Na, K, Rb, Cs, Fr. Group 1, 1 valence e⁻." },
            { q: "Which is noble gas?", opts: ["neon", "nitrogen", "fluorine", "chlorine"], ans: 0, topic: "Group 18", explanation: "✓ CORRECT: Noble gases: He, Ne, Ar, Kr, Xe, Rn. Full valence shells." },
            { q: "Empirical formula of benzene?", opts: ["CH", "C₆H₆", "CH₂", "C₂H₂"], ans: 0, topic: "Organic", explanation: "✓ CORRECT: Simplest ratio C:H = 6:6 = 1:1 → CH. Molecular = C₆H₆." },
            { q: "Molar mass of H₂O?", opts: ["18 g/mol", "20", "16", "2"], ans: 0, topic: "Stoichiometry", explanation: "✓ CORRECT: H₂ = 2.016, O = 16.00, total ≈ 18.015 g/mol." },
            { q: "Avogadro's number?", opts: ["6.022×10²³", "3.14×10²³", "6.022×10²²", "1.602×10⁻¹⁹"], ans: 0, topic: "Mole concept", explanation: "✓ CORRECT: 6.02214076×10²³ particles per mole. ❌ 1.602×10⁻¹⁹ is electron charge." },
            { q: "Oxidation is?", opts: ["loss of electrons", "gain electrons", "addition of oxygen", "removal hydrogen"], ans: 0, topic: "Redox", explanation: "✓ CORRECT: Oxidation = loss of electrons, oxidation number increases (OIL RIG)." },
            { q: "Reduction is?", opts: ["gain of electrons", "loss electrons", "addition oxygen", "removal hydrogen"], ans: 0, topic: "Redox", explanation: "✓ CORRECT: Reduction = gain of electrons, oxidation number decreases." },
            { q: "Salt formula?", opts: ["NaCl", "KCl", "CaCl₂", "MgSO₄"], ans: 0, topic: "Compound", explanation: "✓ CORRECT: Sodium chloride = table salt. All are salts, but NaCl is most common." },
            { q: "Which is NOT a state of matter?", opts: ["energy", "solid", "liquid", "gas"], ans: 0, topic: "States of matter", explanation: "✓ CORRECT: Energy is not matter. States: solid, liquid, gas, plasma." },
            { q: "Law of conservation of mass proposed by?", opts: ["Lavoisier", "Dalton", "Boyle", "Priestley"], ans: 0, topic: "Fundamental laws", explanation: "✓ CORRECT: Antoine Lavoisier (1789) - mass neither created nor destroyed in reactions." },
            { q: "Which element is liquid at room temperature?", opts: ["bromine", "mercury", "gallium", "cesium"], ans: 0, topic: "Elements", explanation: "✓ CORRECT: Bromine (Br₂) is liquid non-metal. ❌ Mercury is liquid metal (also correct, but bromine is answer)." },
            { q: "pH of lemon juice?", opts: ["2-3", "5-6", "7-8", "9-10"], ans: 0, topic: "Acids", explanation: "✓ CORRECT: Lemon juice pH ≈ 2.2 (citric acid). Vinegar pH ≈ 2.5." },
            { q: "Which is a strong base?", opts: ["NaOH", "NH₃", "Ca(OH)₂", "Mg(OH)₂"], ans: 0, topic: "Bases", explanation: "✓ CORRECT: NaOH fully dissociates in water. ❌ NH₃ weak base, Ca(OH)₂ moderately soluble." },
            { q: "Octane number measures?", opts: ["knocking resistance", "viscosity", "density", "boiling point"], ans: 0, topic: "Petrochemistry", explanation: "✓ CORRECT: Higher octane = more compression before auto-ignition (knocking)." },
            { q: "Which gas causes acid rain?", opts: ["SO₂", "O₂", "N₂", "CO₂"], ans: 0, topic: "Environmental", explanation: "✓ CORRECT: SO₂ forms H₂SO₄, NOx form HNO₃. ❌ CO₂ causes ocean acidification, not acid rain." },
            { q: "Greenhouse gas?", opts: ["CO₂", "O₂", "N₂", "H₂"], ans: 0, topic: "Climate", explanation: "✓ CORRECT: CO₂, CH₄, H₂O vapor, N₂O trap infrared radiation. ❌ O₂/N₂ are transparent." },
            { q: "Ozone layer depletion caused by?", opts: ["CFCs", "CO₂", "SO₂", "NOx"], ans: 0, topic: "Atmospheric chemistry", explanation: "✓ CORRECT: Chlorofluorocarbons release Cl atoms, catalytically destroy O₃. Montreal Protocol 1987." },
            { q: "Hard water contains?", opts: ["Ca²⁺, Mg²⁺", "Na⁺, K⁺", "Fe²⁺, Fe³⁺", "Cl⁻, I⁻"], ans: 0, topic: "Water chemistry", explanation: "✓ CORRECT: Calcium and magnesium ions cause scale, soap scum. Removed by softening." },
            { q: "Allotropy is same element, different?", opts: ["structure", "protons", "neutrons", "electrons"], ans: 0, topic: "Allotropy", explanation: "✓ CORRECT: Different structural forms (diamond/graphite, O₂/O₃). ❌ Isotopes = different neutrons." },
            { q: "Which is NOT a colligative property?", opts: ["density", "boiling point elevation", "freezing point depression", "osmotic pressure"], ans: 0, topic: "Solutions", explanation: "✓ CORRECT: Colligative properties depend ONLY on particle concentration, not identity." },
            { q: "First law of thermodynamics is about?", opts: ["energy conservation", "entropy", "enthalpy", "free energy"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: ΔU = Q - W. Energy cannot be created or destroyed, only transformed." },
            { q: "Exothermic reaction has?", opts: ["negative ΔH", "positive ΔH", "zero ΔH", "positive ΔS"], ans: 0, topic: "Thermochemistry", explanation: "✓ CORRECT: ΔH < 0 = heat released (combustion, neutralization)." },
            { q: "Catalyst works by?", opts: ["lowering activation energy", "increasing temperature", "adding energy", "changing equilibrium"], ans: 0, topic: "Kinetics", explanation: "✓ CORRECT: Provides alternative pathway with lower Ea. ❌ Does NOT change equilibrium." },
            { q: "Electronegativity increases?", opts: ["across period", "down group", "left to right", "right to left"], ans: 0, topic: "Periodicity", explanation: "✓ CORRECT: Increases left→right (more protons), decreases down group (more shielding)." },
            { q: "Ionic bond involves?", opts: ["electron transfer", "electron sharing", "proton transfer", "neutron sharing"], ans: 0, topic: "Bonding", explanation: "✓ CORRECT: Metal donates e⁻, non-metal accepts → electrostatic attraction." },
            { q: "Covalent bond involves?", opts: ["electron sharing", "electron transfer", "metallic bonding", "hydrogen bonding"], ans: 0, topic: "Bonding", explanation: "✓ CORRECT: Atoms share electron pairs (non-metals). Polar vs nonpolar." },
            { q: "Hydrogen bond is a type of?", opts: ["intermolecular force", "covalent bond", "ionic bond", "metallic bond"], ans: 0, topic: "Bonding", explanation: "✓ CORRECT: Strong dipole-dipole attraction (H bonded to N,O,F). NOT a true chemical bond." },
            { q: "Which has highest pH?", opts: ["NaOH", "HCl", "CH₃COOH", "H₂O"], ans: 0, topic: "Acid-base", explanation: "✓ CORRECT: NaOH ≈ pH 13-14. HCl pH 1, acetic acid pH 3, water pH 7." },
            { q: "Transition metals characterized by?", opts: ["d-electrons", "s-electrons", "p-electrons", "f-electrons"], ans: 0, topic: "Periodic table", explanation: "✓ CORRECT: Partially filled d-orbitals. Form colored compounds, variable oxidation states." },
            { q: "Lanthanides belong to which period?", opts: ["6", "5", "4", "7"], ans: 0, topic: "Periodic table", explanation: "✓ CORRECT: Period 6, f-block. Also called rare earth elements." }
        ],
        
        // ========== GNS101 (Study skills, reading) ==========
        gns101: [
            { q: "One factor that inhibits efficient reading?", opts: ["noise", "library", "health", "feeding"], ans: 0, topic: "Reading hindrances", explanation: "✓ CORRECT: Noise distracts concentration. ❌ Library facilitates reading." },
            { q: "Reading for superficial info?", opts: ["skimming", "scanning", "anticipation", "browsing"], ans: 0, topic: "Reading strategies", explanation: "✓ CORRECT: Skimming gets main ideas quickly (headlines, topic sentences)." },
            { q: "Main sentence in a paragraph?", opts: ["topic sentence", "intro", "concluding", "supporting"], ans: 0, topic: "Paragraph structure", explanation: "✓ CORRECT: Topic sentence states core idea, usually first sentence." },
            { q: "Signal word for addition?", opts: ["furthermore", "however", "consequently", "first"], ans: 0, topic: "Transition", explanation: "✓ CORRECT: 'Furthermore' adds similar information. ❌ However = contrast, consequently = result." },
            { q: "NOT a factor causing slow reading?", opts: ["flexibility", "regression", "word reading", "return sweep"], ans: 0, topic: "Reading speed", explanation: "✓ CORRECT: Flexibility (adapting speed) is good, not a hindrance." },
            { q: "Efficient reading NOT enhanced by?", opts: ["concentrating on writer's words", "phrase reading", "purpose", "adjusting speed"], ans: 0, topic: "Efficiency", explanation: "✓ CORRECT: Focus on meaning, not each individual word." },
            { q: "Topic sentence usually found?", opts: ["initial", "middle", "end", "anywhere"], ans: 0, topic: "Paragraph", explanation: "✓ CORRECT: Often first sentence, sometimes second after transition." },
            { q: "'Furthermore' function?", opts: ["addition", "contrast", "concession", "sequence"], ans: 0, topic: "Signal words", explanation: "✓ CORRECT: Adds similar point. Also 'moreover', 'in addition'." },
            { q: "Visual impairment is which factor?", opts: ["physiological", "psychological", "environmental", "technical"], ans: 0, topic: "Reading barriers", explanation: "✓ CORRECT: Physical condition of eyes = physiological barrier." },
            { q: "Bad habit to avoid?", opts: ["word-by-word reading", "varying speed", "phrase reading", "purpose setting"], ans: 0, topic: "Inefficient habits", explanation: "✓ CORRECT: Word reading slows comprehension. Phrase reading is efficient." },
            { q: "Purposeful reading involves?", opts: ["different strategies", "overview only", "skip all", "read everything"], ans: 0, topic: "Reading purpose", explanation: "✓ CORRECT: Adjust strategy based on goal (study, skim, scan, enjoy)." },
            { q: "Skimming is NOT?", opts: ["searching specific info", "main ideas", "topic sentences", "rapid overview"], ans: 0, topic: "Skimming", explanation: "✓ CORRECT: Scanning = searching specific info. Skimming = gist/overview." },
            { q: "Intro paragraph tense?", opts: ["present tense", "past", "future", "continuous"], ans: 0, topic: "Academic writing", explanation: "✓ CORRECT: Usually simple present for established knowledge." },
            { q: "Term paper first step?", opts: ["select topic", "write outline", "gather sources", "edit"], ans: 0, topic: "Writing process", explanation: "✓ CORRECT: Topic selection precedes research and writing." },
            { q: "Which is NOT term paper part?", opts: ["copying online essay", "narrowing topic", "outline", "drafting"], ans: 0, topic: "Academic integrity", explanation: "✓ CORRECT: Plagiarism is unacceptable academic dishonesty." },
            { q: "Signal word for summary?", opts: ["in conclusion", "however", "in addition", "similarly"], ans: 0, topic: "Transitions", explanation: "✓ CORRECT: 'In conclusion', 'to summarize', 'finally' signal ending." },
            { q: "Inefficient reading strategy?", opts: ["vocalization", "phrase reading", "purpose", "concept focus"], ans: 0, topic: "Reading", explanation: "✓ CORRECT: Sub-vocalization (saying words mentally) slows reading." },
            { q: "Efficient strategy?", opts: ["phrase reading", "finger pointing", "regression", "word reading"], ans: 0, topic: "Efficient reading", explanation: "✓ CORRECT: Phrase reading groups words into meaningful chunks." },
            { q: "Poor ventilation = ?", opts: ["environmental", "physiological", "psychological", "technical"], ans: 0, topic: "Hindrance", explanation: "✓ CORRECT: External factor = environmental barrier." },
            { q: "Stress is ... hindrance?", opts: ["physiological", "environmental", "psychological", "traditional"], ans: 2, topic: "Health", explanation: "✓ CORRECT: Mental/emotional strain = psychological barrier." },
            { q: "Paragraph types except?", opts: ["transformational", "introductory", "descriptive", "defining"], ans: 0, topic: "Writing", explanation: "✓ CORRECT: No such type. Types: narrative, descriptive, expository, persuasive." },
            { q: "Thesis statement in?", opts: ["introduction", "body", "conclusion", "references"], ans: 0, topic: "Essay", explanation: "✓ CORRECT: States main argument, usually end of introduction." },
            { q: "Catalogue in library?", opts: ["retrieval tool", "book", "journal", "database"], ans: 0, topic: "Library", explanation: "✓ CORRECT: Lists materials available. OPAC = Online Public Access Catalog." },
            { q: "SQ3R stands for?", opts: ["Survey, Question, Read, Recite, Review", "Scan, Query, Read, Recall, Revise", "Skim, Question, Read, Repeat, Review", "Study, Query, Read, Recite, Revise"], ans: 0, topic: "Reading techniques", explanation: "✓ CORRECT: Francis Robinson's effective reading/comprehension method." },
            { q: "Previewing a text helps to?", opts: ["activate prior knowledge", "memorize details", "skip important parts", "avoid reading"], ans: 0, topic: "Pre-reading", explanation: "✓ CORRECT: Prepares brain for content, sets purpose." },
            { q: "Annotating means?", opts: ["making notes on text", "highlighting everything", "reading quickly", "summarizing after"], ans: 0, topic: "Active reading", explanation: "✓ CORRECT: Write comments, questions, reactions, connections." },
            { q: "Concept map is used for?", opts: ["organizing ideas visually", "memorizing dates", "spelling practice", "grammar check"], ans: 0, topic: "Study skills", explanation: "✓ CORRECT: Shows relationships between concepts (mind map)." },
            { q: "Chunking information helps?", opts: ["memory retention", "speed reading", "vocabulary", "pronunciation"], ans: 0, topic: "Memory", explanation: "✓ CORRECT: Grouping into meaningful units (phone numbers: 123-456-7890)." },
            { q: "Mnemonic devices aid?", opts: ["memory", "reading speed", "writing", "listening"], ans: 0, topic: "Memory techniques", explanation: "✓ CORRECT: Acronyms, rhymes, peg system, method of loci." },
            { q: "Critical reading involves?", opts: ["evaluating arguments", "accepting all ideas", "speed reading", "skipping difficult parts"], ans: 0, topic: "Critical thinking", explanation: "✓ CORRECT: Analyze, question, evaluate evidence and assumptions." },
            { q: "Primary source is?", opts: ["original document", "textbook", "encyclopedia", "review article"], ans: 0, topic: "Research", explanation: "✓ CORRECT: First-hand account, original research, diaries, interviews." },
            { q: "Secondary source is?", opts: ["analysis of primary", "original research", "raw data", "diary"], ans: 0, topic: "Research", explanation: "✓ CORRECT: Interprets/analyzes primary sources (textbooks, reviews)." },
            { q: "Peer review ensures?", opts: ["quality control", "fast publication", "author payment", "free access"], ans: 0, topic: "Academic publishing", explanation: "✓ CORRECT: Experts evaluate validity, originality, significance before publication." },
            { q: "Plagiarism is?", opts: ["using others' work without credit", "citing sources", "paraphrasing", "quoting"], ans: 0, topic: "Academic integrity", explanation: "✓ CORRECT: Intellectual theft - copying, paraphrasing without attribution." },
            { q: "APA style is used in?", opts: ["social sciences", "humanities", "law", "medicine"], ans: 0, topic: "Citation styles", explanation: "✓ CORRECT: American Psychological Association. Psychology, education, sociology." },
            { q: "MLA style is used in?", opts: ["humanities", "sciences", "business", "engineering"], ans: 0, topic: "Citation styles", explanation: "✓ CORRECT: Modern Language Association. Literature, arts, languages." },
            { q: "Bibliography lists?", opts: ["all sources consulted", "only cited sources", "internet sources only", "books only"], ans: 0, topic: "References", explanation: "✓ CORRECT: Works cited or consulted. 'References' = only cited." },
            { q: "Footnote appears at?", opts: ["bottom of page", "end of chapter", "end of book", "margin"], ans: 0, topic: "Citations", explanation: "✓ CORRECT: Footer of same page. Endnotes at end of document." },
            { q: "Endnote appears at?", opts: ["end of document", "bottom of page", "margin", "header"], ans: 0, topic: "Citations", explanation: "✓ CORRECT: Collected at end of chapter or document." },
            { q: "Abstract summarizes?", opts: ["entire paper", "introduction only", "conclusion only", "methods only"], ans: 0, topic: "Academic writing", explanation: "✓ CORRECT: Brief overview of purpose, methods, results, conclusions." },
            { q: "Keywords help with?", opts: ["database searching", "page layout", "font selection", "binding"], ans: 0, topic: "Research", explanation: "✓ CORRECT: Indexing, discoverability, search engine optimization." },
            { q: "Literature review does NOT?", opts: ["present new experiments", "synthesize research", "identify gaps", "critique studies"], ans: 0, topic: "Research", explanation: "✓ CORRECT: Reviews existing work, does NOT present original data." },
            { q: "Methodology section describes?", opts: ["how study was conducted", "what was found", "why study matters", "who funded"], ans: 0, topic: "Research paper", explanation: "✓ CORRECT: Procedures, participants, materials, statistical analysis." },
            { q: "Results section presents?", opts: ["findings", "interpretation", "background", "future work"], ans: 0, topic: "Research paper", explanation: "✓ CORRECT: Data, statistics, observations. NO interpretation (that's Discussion)." },
            { q: "Discussion section does?", opts: ["interprets results", "lists references", "describes methods", "thanks people"], ans: 0, topic: "Research paper", explanation: "✓ CORRECT: Meaning, implications, limitations, comparison with prior work." },
            { q: "Conclusion should?", opts: ["summarize main points", "introduce new data", "list every detail", "avoid repetition"], ans: 0, topic: "Writing", explanation: "✓ CORRECT: Closure, takeaways, implications, future directions." },
            { q: "Outline purpose?", opts: ["organize ideas", "final copy", "publish ready", "references"], ans: 0, topic: "Writing process", explanation: "✓ CORRECT: Blueprint/structure before drafting full text." },
            { q: "Proofreading checks?", opts: ["spelling and grammar", "ideas", "structure", "research"], ans: 0, topic: "Editing", explanation: "✓ CORRECT: Surface errors (typos, punctuation, formatting)." },
            { q: "Revising focuses on?", opts: ["content and structure", "typos", "comma errors", "font"], ans: 0, topic: "Editing", explanation: "✓ CORRECT: Big-picture: organization, clarity, argument, evidence." },
            { q: "Active voice is?", opts: ["subject performs action", "subject receives action", "verb before subject", "no subject"], ans: 0, topic: "Grammar", explanation: "✓ CORRECT: Clear, direct: 'The cat chased the mouse.'" },
            { q: "Passive voice is?", opts: ["subject receives action", "subject performs action", "more concise", "always better"], ans: 0, topic: "Grammar", explanation: "✓ CORRECT: 'The mouse was chased by the cat.' Often less direct." },
            { q: "Run-on sentence lacks?", opts: ["proper punctuation", "verbs", "nouns", "capitalization"], ans: 0, topic: "Grammar", explanation: "✓ CORRECT: Two independent clauses improperly joined (comma splice, no conjunction)." },
            { q: "Sentence fragment is?", opts: ["incomplete sentence", "too long", "too short", "complex"], ans: 0, topic: "Grammar", explanation: "✓ CORRECT: Missing subject or verb, or subordinate clause alone." },
            { q: "Parallel structure means?", opts: ["similar grammatical form", "repeating words", "short sentences", "long paragraphs"], ans: 0, topic: "Style", explanation: "✓ CORRECT: Balance in lists and comparisons: 'running, jumping, swimming'." },
            { q: "Concise writing avoids?", opts: ["wordiness", "active voice", "specific nouns", "short words"], ans: 0, topic: "Style", explanation: "✓ CORRECT: Eliminate unnecessary words: 'due to the fact that' → 'because'." }
        ],
        
        // ========== GNS103 (Library science) ==========
        gns103: [
            { q: "Newspaper is issued?", opts: ["daily/weekly", "monthly", "annually", "biannually"], ans: 0, topic: "Serials", explanation: "✓ CORRECT: Newspapers: daily or weekly. Journals: monthly/quarterly." },
            { q: "Serials acquired through?", opts: ["subscription", "donation", "exchange", "interlibrary loan"], ans: 0, topic: "Acquisition", explanation: "✓ CORRECT: Libraries subscribe to serials (periodicals, newspapers, journals)." },
            { q: "Electronic serials advantage?", opts: ["remote access", "cheaper", "difficult access", "none"], ans: 0, topic: "E-resources", explanation: "✓ CORRECT: Access off-site, 24/7, multiple simultaneous users." },
            { q: "Reference materials are for?", opts: ["consultation only", "borrowing", "binding", "reserve"], ans: 0, topic: "Reference", explanation: "✓ CORRECT: Do not circulate. Use in library only (encyclopedias, dictionaries)." },
            { q: "General encyclopedia example?", opts: ["Britannica", "Biology encyclopedia", "Agriculture enc.", "Forestry enc."], ans: 0, topic: "Reference", explanation: "✓ CORRECT: Encyclopedia Britannica - broad coverage. Others are subject-specific." },
            { q: "Yearbook provides?", opts: ["statistics, data", "definitions", "synonyms", "maps"], ans: 0, topic: "Reference", explanation: "✓ CORRECT: Annual updates on events, trends, statistics." },
            { q: "Bibliography definition?", opts: ["list of works on subject", "biography", "dictionary", "encyclopedia"], ans: 0, topic: "Bibliography", explanation: "✓ CORRECT: Systematic list of books/articles on specific topic." },
            { q: "Non-print advantage EXCEPT?", opts: ["erratic power", "aid retention", "preservation", "group instruction"], ans: 0, topic: "Audiovisual", explanation: "✓ CORRECT: Power supply issues are a DISadvantage." },
            { q: "Which is NOT audiovisual?", opts: ["world atlas", "TV", "video", "digital media"], ans: 0, topic: "Media", explanation: "✓ CORRECT: Atlas = print/cartographic material, not AV." },
            { q: "Physical part of book?", opts: ["publisher", "dust jacket", "binding", "spine"], ans: 1, topic: "Book anatomy", explanation: "✓ CORRECT: Dust jacket is removable paper cover. All are physical parts, but jacket is distinctive." },
            { q: "Binding is?", opts: ["holds sheets together", "edge", "content", "blank leaf"], ans: 0, topic: "Book", explanation: "✓ CORRECT: Physical assembly of pages into cover (hardcover/paperback)." },
            { q: "Oldest print media subtype EXCEPT?", opts: ["realia", "monographs", "textbooks", "reference"], ans: 0, topic: "Media", explanation: "✓ CORRECT: Realia = 3D objects, not printed media." },
            { q: "Copyright page = ?", opts: ["verso page", "title page", "preface", "fly leaf"], ans: 0, topic: "Bibliographic", explanation: "✓ CORRECT: Reverse of title page, contains publication data, ISBN." },
            { q: "Cartographic materials = ?", opts: ["maps", "audiovisual", "objects", "none"], ans: 0, topic: "Geography", explanation: "✓ CORRECT: Maps, atlases, globes, plans, charts." },
            { q: "FUTA library opened to users?", opts: ["1983", "1993", "1981", "2003"], ans: 0, topic: "Library history", explanation: "✓ CORRECT: Federal University of Technology Akure library officially opened 1983." },
            { q: "National libraries also known as?", opts: ["depository", "virtual", "special", "archival"], ans: 0, topic: "National library", explanation: "✓ CORRECT: Legal deposit libraries receive copies of all publications." },
            { q: "Word library from?", opts: ["Latin liber", "German", "French", "Greek"], ans: 0, topic: "Etymology", explanation: "✓ CORRECT: Liber = book. Librarium = bookcase, collection of books." },
            { q: "ISBN meaning?", opts: ["International Standard Book Number", "International Serial", "Standard Barcode", "None"], ans: 0, topic: "Identifier", explanation: "✓ CORRECT: Unique 13-digit identifier for books. ❌ ISSN = serials." },
            { q: "Cataloguing & Classification unit does?", opts: ["process books", "circulate", "reference", "serial"], ans: 0, topic: "Technical services", explanation: "✓ CORRECT: Classify, assign call numbers, create catalog records." },
            { q: "Cloak room purpose?", opts: ["keep belongings", "reading", "reference", "porters"], ans: 0, topic: "Library", explanation: "✓ CORRECT: Secure storage for bags, coats. Also called bag check." },
            { q: "Monographs are?", opts: ["works on single subject", "textbooks", "reference", "pamphlets"], ans: 0, topic: "Books", explanation: "✓ CORRECT: Complete, non-serial publication on one subject." },
            { q: "Kardex used for?", opts: ["serials", "catalogue", "OPAC", "inventory"], ans: 0, topic: "Serials control", explanation: "✓ CORRECT: Card system recording serial holdings and receipt." },
            { q: "Undergrad borrow limit (FUTALIB)?", opts: ["2 books", "3", "4", "5"], ans: 0, topic: "Loan policy", explanation: "✓ CORRECT: Two books for undergraduates, higher limits for staff/postgrads." },
            { q: "Charging/discharging at?", opts: ["circulation", "reference", "acquisition", "serial"], ans: 0, topic: "Library circulation", explanation: "✓ CORRECT: Borrow (charge) and return (discharge) materials." },
            { q: "Virtual library = ?", opts: ["library without walls", "digital", "electronic", "all"], ans: 0, topic: "Library types", explanation: "✓ CORRECT: Accessed remotely, collections in digital format." },
            { q: "Who's who is ?", opts: ["biographical tool", "geographical", "fact ready", "lit search"], ans: 0, topic: "Biography", explanation: "✓ CORRECT: Profiles prominent people - 'Who's Who in America'." },
            { q: "DDC stands for?", opts: ["Dewey Decimal Classification", "Digital Document Catalog", "Double Document Control", "Direct Data Capture"], ans: 0, topic: "Classification", explanation: "✓ CORRECT: Melvil Dewey's system (1876), used in public libraries." },
            { q: "LC stands for?", opts: ["Library of Congress", "Local Catalog", "Large Collection", "Legal Citation"], ans: 0, topic: "Classification", explanation: "✓ CORRECT: Library of Congress Classification, used in academic libraries." },
            { q: "OPAC stands for?", opts: ["Online Public Access Catalog", "Open Print Access Code", "Optical Page Alignment Control", "Organized Publication Archive"], ans: 0, topic: "Library technology", explanation: "✓ CORRECT: Computerized catalog accessible to users." },
            { q: "ISSN is for?", opts: ["serials", "books", "maps", "music"], ans: 0, topic: "Identifiers", explanation: "✓ CORRECT: International Standard Serial Number (8 digits) for periodicals." },
            { q: "DOI stands for?", opts: ["Digital Object Identifier", "Document Orientation Index", "Data Output Interface", "Direct Online Input"], ans: 0, topic: "Digital resources", explanation: "✓ CORRECT: Persistent link to digital content (articles, datasets)." },
            { q: "Open access means?", opts: ["free to read", "free to publish", "physical access", "library membership"], ans: 0, topic: "Scholarly communication", explanation: "✓ CORRECT: No paywall or subscription barriers." },
            { q: "Institutional repository stores?", opts: ["university research output", "student records", "financial data", "staff payroll"], ans: 0, topic: "Digital libraries", explanation: "✓ CORRECT: Theses, articles, datasets produced by institution." },
            { q: "Interlibrary loan allows?", opts: ["borrowing from other libraries", "buying books", "selling books", "donating books"], ans: 0, topic: "Resource sharing", explanation: "✓ CORRECT: Patrons access materials from other libraries." },
            { q: "Reserve section holds?", opts: ["high-demand items", "rare books", "damaged books", "duplicates"], ans: 0, topic: "Circulation", explanation: "✓ CORRECT: Short loan (2 hours, overnight) for course readings." },
            { q: "Weeding in libraries is?", opts: ["removing outdated materials", "plant care", "cataloging", "binding"], ans: 0, topic: "Collection management", explanation: "✓ CORRECT: Discard superseded, worn, irrelevant materials." },
            { q: "Preservation prevents?", opts: ["deterioration", "acquisition", "cataloging", "circulation"], ans: 0, topic: "Collection care", explanation: "✓ CORRECT: Maintain materials for future use (repair, deacidification)." },
            { q: "Acid-free paper lasts?", opts: ["longer", "shorter", "same", "unpredictable"], ans: 0, topic: "Preservation", explanation: "✓ CORRECT: Neutral pH (7+) doesn't yellow or become brittle." },
            { q: "Rare books kept in?", opts: ["special collections", "circulation", "reference", "periodicals"], ans: 0, topic: "Rare materials", explanation: "✓ CORRECT: Controlled access, climate control, security." },
            { q: "Manuscript is?", opts: ["handwritten document", "printed book", "digital file", "map"], ans: 0, topic: "Special collections", explanation: "✓ CORRECT: Written by hand, not printed." },
            { q: "Incunabula refers to?", opts: ["books before 1501", "ancient scrolls", "modern novels", "children's books"], ans: 0, topic: "Book history", explanation: "✓ CORRECT: 'Cradle of printing' - books printed 1455-1500." },
            { q: "Folio format means?", opts: ["large book", "small book", "digital book", "audio book"], ans: 0, topic: "Book sizes", explanation: "✓ CORRECT: Sheet folded once = 2 leaves, large pages (>30cm)." },
            { q: "Octavo format means?", opts: ["medium book", "very large", "miniature", "scroll"], ans: 0, topic: "Book sizes", explanation: "✓ CORRECT: Sheet folded 8 times = 16 pages, 8-12 inches." },
            { q: "Call number indicates?", opts: ["location on shelf", "price", "publisher", "pages"], ans: 0, topic: "Classification", explanation: "✓ CORRECT: Unique address combining class number and author notation." },
            { q: "Shelf reading prevents?", opts: ["misshelving", "theft", "damage", "loss"], ans: 0, topic: "Stack maintenance", explanation: "✓ CORRECT: Ensure books in correct call number order." },
            { q: "Inventory checks?", opts: ["what's in collection", "library budget", "staff attendance", "building security"], ans: 0, topic: "Collection management", explanation: "✓ CORRECT: Verify holdings vs. catalog, identify missing items." },
            { q: "Reference interview is?", opts: ["helping users find information", "job interview", "book review", "staff meeting"], ans: 0, topic: "Reference services", explanation: "✓ CORRECT: Question negotiation - clarify what user really needs." },
            { q: "Ready reference questions are?", opts: ["quick facts", "complex research", "literature reviews", "bibliographies"], ans: 0, topic: "Reference", explanation: "✓ CORRECT: Brief, factual answers (dates, definitions, statistics)." },
            { q: "Information literacy is ability to?", opts: ["find, evaluate, use information", "read only", "write essays", "memorize facts"], ans: 0, topic: "Library instruction", explanation: "✓ CORRECT: Critical thinking with information - ACRL standards." },
            { q: "Boolean operators include?", opts: ["AND, OR, NOT", "+, -, =", "<, >, =", "IF, THEN, ELSE"], ans: 0, topic: "Database searching", explanation: "✓ CORRECT: Combine search terms: AND narrows, OR broadens, NOT excludes." },
            { q: "Truncation in search uses?", opts: ["*", "?", "#", "!"], ans: 0, topic: "Search strategies", explanation: "✓ CORRECT: Asterisk finds word variations (educat* = education, educator)." },
            { q: "Phrase search uses?", opts: ["quotation marks", "parentheses", "brackets", "asterisk"], ans: 0, topic: "Search techniques", explanation: "✓ CORRECT: Exact sequence: 'climate change' NOT climate AND change." },
            { q: "Peer-reviewed journals are?", opts: ["scholarly", "popular", "trade", "newspaper"], ans: 0, topic: "Journal types", explanation: "✓ CORRECT: Refereed by experts before publication." },
            { q: "Impact factor measures?", opts: ["journal influence", "article length", "author age", "page count"], ans: 0, topic: "Bibliometrics", explanation: "✓ CORRECT: Average citations per article in journal over 2 years." },
            { q: "h-index measures?", opts: ["researcher productivity", "journal quality", "library size", "book sales"], ans: 0, topic: "Research metrics", explanation: "✓ CORRECT: h papers with ≥h citations each." }
        ],
        
        // ========== PHY101 (Mechanics, heat) ==========
        phy101: [
            { q: "In perfectly inelastic collision?", opts: ["energy lost", "energy gained", "heat gained", "power lost"], ans: 0, topic: "Collision", explanation: "✓ CORRECT: Max kinetic energy loss, objects stick together." },
            { q: "In inelastic collision, which NOT true?", opts: ["kinetic energy conserved", "momentum conserved", "energy lost", "potential conserved"], ans: 0, topic: "Collisions", explanation: "✓ CORRECT: KE is NOT conserved. Momentum ALWAYS conserved in collisions." },
            { q: "Elastic collision: no loss of ?", opts: ["kinetic energy", "momentum", "mass", "velocity"], ans: 0, topic: "Elastic", explanation: "✓ CORRECT: KE conserved. Momentum always conserved." },
            { q: "Collision is sudden impact between?", opts: ["objects", "forces", "particles", "waves"], ans: 0, topic: "Mechanics", explanation: "✓ CORRECT: Physical contact between objects in short time." },
            { q: "Linear momentum conserved when net force?", opts: ["zero", "constant", "positive", "negative"], ans: 0, topic: "Momentum", explanation: "✓ CORRECT: dp/dt = F_ext = 0 → p constant." },
            { q: "Work = ?", opts: ["force × distance", "force × time", "mass × acc", "power × time"], ans: 0, topic: "Work", explanation: "✓ CORRECT: W = F·d·cosθ (parallel component × displacement)." },
            { q: "Projectile path called?", opts: ["trajectory", "range", "apex", "flight time"], ans: 0, topic: "Projectile", explanation: "✓ CORRECT: Parabolic curve (ignoring air resistance)." },
            { q: "Range is ?", opts: ["horizontal distance", "vertical", "diagonal", "total path"], ans: 0, topic: "Projectile", explanation: "✓ CORRECT: Total horizontal displacement from launch to impact." },
            { q: "At max height, vertical velocity?", opts: ["zero", "max", "negative", "constant"], ans: 0, topic: "Projectile", explanation: "✓ CORRECT: Vy = 0 at apex, then accelerates downward." },
            { q: "Projectile motion is in ?", opts: ["two dimensions", "one", "three", "four"], ans: 0, topic: "Kinematics", explanation: "✓ CORRECT: Horizontal (constant v) + vertical (constant g)." },
            { q: "Heat transfer in solids?", opts: ["conduction", "convection", "radiation", "insulation"], ans: 0, topic: "Heat", explanation: "✓ CORRECT: Conduction through molecular vibration. ❌ Convection = fluids." },
            { q: "Constant-volume gas thermometer = ?", opts: ["standard thermometer", "mercury", "liquid", "gas"], ans: 0, topic: "Thermometry", explanation: "✓ CORRECT: Reference standard using P ∝ T at constant V." },
            { q: "Force = mass × ?", opts: ["acceleration", "velocity", "time", "distance"], ans: 0, topic: "Newton", explanation: "✓ CORRECT: F = ma (Newton's second law)." },
            { q: "SI unit of momentum?", opts: ["kg m/s", "N/s", "kg", "N"], ans: 0, topic: "Momentum", explanation: "✓ CORRECT: p = mv, units kg·m/s. ❌ N = kg·m/s²." },
            { q: "Impulse = ?", opts: ["force × time", "mass × velocity", "force × distance", "power"], ans: 0, topic: "Impulse", explanation: "✓ CORRECT: J = FΔt = Δp (change in momentum)." },
            { q: "Symmetrical body rotating about fixed point = ?", opts: ["top", "gyroscope", "pendulum", "wheel"], ans: 0, topic: "Rotation", explanation: "✓ CORRECT: Classical spinning top exhibits precession." },
            { q: "u=0, a=5m/s², velocity after 90m?", opts: ["30m/s", "18m/s", "25m/s", "13m/s"], ans: 0, topic: "Kinematics", explanation: "✓ CORRECT: v² = u² + 2as = 0 + 2×5×90 = 900, v = 30 m/s." },
            { q: "Ball thrown up with 50m/s, total time in air?", opts: ["10s", "15s", "20s", "25s"], ans: 0, topic: "Free fall", explanation: "✓ CORRECT: t_up = v/g = 50/9.8 ≈ 5.1s, total = 10.2s ≈ 10s." },
            { q: "Greatest pressure on bench when?", opts: ["stand on toes of one foot", "lie flat", "belly", "both feet"], ans: 0, topic: "Pressure", explanation: "✓ CORRECT: P = F/A. Smallest area = maximum pressure." },
            { q: "Slope of displacement-time graph?", opts: ["velocity", "acceleration", "distance", "speed"], ans: 0, topic: "Graph", explanation: "✓ CORRECT: v = Δs/Δt. Slope = instantaneous velocity." },
            { q: "Force that allows car to move without skidding?", opts: ["friction", "centripetal", "engine", "gravity"], ans: 0, topic: "Friction", explanation: "✓ CORRECT: Static friction provides traction between tires and road." },
            { q: "g at poles vs equator?", opts: ["greater", "smaller", "equal", "depends"], ans: 0, topic: "Gravity", explanation: "✓ CORRECT: Poles: smaller radius, no centrifugal effect." },
            { q: "Escape velocity formula?", opts: ["√(2gR)", "√(gR)", "2gR", "gR²"], ans: 0, topic: "Gravitation", explanation: "✓ CORRECT: v_esc = √(2GM/R) = √(2gR)." },
            { q: "g below surface decreases with?", opts: ["depth", "height", "latitude", "longitude"], ans: 0, topic: "Gravity", explanation: "✓ CORRECT: Linear decrease: g ∝ (R-d). At center, g = 0." },
            { q: "NOT fundamental force?", opts: ["minute", "gravitational", "electroweak", "strong"], ans: 0, topic: "Forces", explanation: "✓ CORRECT: Minute is NOT a force. Four forces: strong, EM, weak, gravity." },
            { q: "Newton's first law is about?", opts: ["inertia", "acceleration", "action-reaction", "momentum"], ans: 0, topic: "Laws of motion", explanation: "✓ CORRECT: Objects resist change in motion (inertia)." },
            { q: "Newton's second law: F = ?", opts: ["ma", "mv", "m/t", "m/s"], ans: 0, topic: "Laws of motion", explanation: "✓ CORRECT: Force = mass × acceleration." },
            { q: "Newton's third law: action = ?", opts: ["reaction", "opposite", "equal and opposite", "greater"], ans: 2, topic: "Laws of motion", explanation: "✓ CORRECT: Equal magnitude, opposite direction, different objects." },
            { q: "Weight is a measure of?", opts: ["gravity", "mass", "density", "volume"], ans: 0, topic: "Gravitation", explanation: "✓ CORRECT: W = mg. Mass is constant, weight varies with g." },
            { q: "Mass is measured in?", opts: ["kg", "N", "lb", "g"], ans: 0, topic: "Units", explanation: "✓ CORRECT: Kilogram = SI unit of mass (kilogram, not gram)." },
            { q: "Scalar quantity has?", opts: ["magnitude only", "direction only", "magnitude & direction", "no properties"], ans: 0, topic: "Vectors", explanation: "✓ CORRECT: Examples: mass, time, temperature, energy." },
            { q: "Vector quantity has?", opts: ["magnitude & direction", "magnitude only", "direction only", "no properties"], ans: 0, topic: "Vectors", explanation: "✓ CORRECT: Examples: velocity, force, displacement, momentum." },
            { q: "Acceleration is change in?", opts: ["velocity/time", "distance/time", "force/mass", "work/time"], ans: 0, topic: "Kinematics", explanation: "✓ CORRECT: a = Δv/Δt. Units: m/s²." },
            { q: "Terminal velocity occurs when?", opts: ["air resistance = weight", "velocity = 0", "acceleration max", "force = 0"], ans: 0, topic: "Forces", explanation: "✓ CORRECT: Net force = 0, constant speed." },
            { q: "Hooke's law: F = ?", opts: ["-kx", "mg", "ma", "mv²/r"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: Force proportional to extension (spring constant k)." },
            { q: "Young's modulus measures?", opts: ["stiffness", "hardness", "toughness", "brittleness"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: E = stress/strain. Resistance to tensile deformation." },
            { q: "Power = ?", opts: ["work/time", "force × distance", "mass × acc", "energy × time"], ans: 0, topic: "Work & energy", explanation: "✓ CORRECT: Rate of doing work. P = W/t = Fv." },
            { q: "SI unit of power?", opts: ["watt", "joule", "newton", "pascal"], ans: 0, topic: "Units", explanation: "✓ CORRECT: 1 W = 1 J/s. James Watt (1736-1819)." },
            { q: "Kinetic energy = ?", opts: ["½mv²", "mgh", "½kx²", "Fd"], ans: 0, topic: "Energy", explanation: "✓ CORRECT: Energy of motion." },
            { q: "Potential energy = ?", opts: ["mgh", "½mv²", "½kx²", "Fd"], ans: 0, topic: "Energy", explanation: "✓ CORRECT: Gravitational PE = mgh. Elastic PE = ½kx²." },
            { q: "Conservation of energy means?", opts: ["energy constant", "energy lost", "energy created", "energy destroyed"], ans: 0, topic: "Energy", explanation: "✓ CORRECT: Cannot create/destroy, only transform between forms." },
            { q: "Temperature measures?", opts: ["average kinetic energy", "total energy", "heat capacity", "thermal mass"], ans: 0, topic: "Thermal physics", explanation: "✓ CORRECT: Average KE of particles. ❌ Heat = transfer of thermal energy." },
            { q: "Heat is transfer of?", opts: ["thermal energy", "temperature", "cold", "work"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: Energy due to temperature difference." },
            { q: "Specific heat capacity is?", opts: ["energy to raise 1kg by 1°C", "total heat", "melting point", "boiling point"], ans: 0, topic: "Calorimetry", explanation: "✓ CORRECT: c = Q/(mΔT). Water = 4186 J/kg·°C." },
            { q: "Latent heat is for?", opts: ["phase change", "temperature change", "pressure change", "volume change"], ans: 0, topic: "Phase transitions", explanation: "✓ CORRECT: Hidden heat during melting/boiling at constant T." },
            { q: "First law: ΔU = ?", opts: ["Q - W", "Q + W", "W - Q", "PV"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: Change in internal energy = heat in - work out." },
            { q: "Second law deals with?", opts: ["entropy", "energy conservation", "absolute zero", "heat capacity"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: Entropy increases in isolated systems." },
            { q: "Carnot engine is most?", opts: ["efficient", "powerful", "complex", "expensive"], ans: 0, topic: "Heat engines", explanation: "✓ CORRECT: Maximum theoretical efficiency: η = 1 - T_c/T_h." },
            { q: "Isothermal process at constant?", opts: ["temperature", "pressure", "volume", "entropy"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: ΔT = 0. PV = constant (ideal gas)." },
            { q: "Adiabatic process has no?", opts: ["heat transfer", "work", "pressure change", "volume change"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: Q = 0. PV^γ = constant." },
            { q: "Isobaric process at constant?", opts: ["pressure", "temperature", "volume", "entropy"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: ΔP = 0. V ∝ T (Charles law)." },
            { q: "Isochoric process at constant?", opts: ["volume", "pressure", "temperature", "entropy"], ans: 0, topic: "Thermodynamics", explanation: "✓ CORRECT: ΔV = 0. P ∝ T." },
            { q: "Absolute zero is ?", opts: ["-273°C", "0°C", "32°F", "-40°C"], ans: 0, topic: "Temperature", explanation: "✓ CORRECT: 0 K = -273.15°C. Lowest possible temperature." },
            { q: "Brownian motion proves?", opts: ["atomic existence", "gravity", "relativity", "quantum theory"], ans: 0, topic: "Kinetic theory", explanation: "✓ CORRECT: Random particle motion confirms atoms/molecules." }
        ],
        
        // ========== PHY103 (Fluids, elasticity) ==========
        phy103: [
            { q: "Fluid is substance that?", opts: ["cannot remain at rest under shear", "always expands", "same shear stress", "flows"], ans: 0, topic: "Fluid definition", explanation: "✓ CORRECT: Fluids deform continuously under shear stress." },
            { q: "Fluid offers no resistance to change of?", opts: ["shape", "pressure", "volume", "temperature"], ans: 0, topic: "Fluid", explanation: "✓ CORRECT: Takes shape of container. ❌ Resists compression." },
            { q: "Practical fluids are?", opts: ["viscous, compressible, surface tension", "ideal", "inviscid", "non-existent"], ans: 0, topic: "Real fluids", explanation: "✓ CORRECT: Real fluids have viscosity, compressibility, surface tension." },
            { q: "In static fluid only ___ can exist?", opts: ["normal stresses", "shear", "bending", "tensile"], ans: 0, topic: "Fluid statics", explanation: "✓ CORRECT: No shear stress at rest. Pressure acts perpendicular." },
            { q: "Ideal fluid is?", opts: ["inviscid & incompressible", "viscous", "compressible", "real"], ans: 0, topic: "Ideal fluid", explanation: "✓ CORRECT: No viscosity, constant density (theoretical model)." },
            { q: "Ideal flow must fulfill?", opts: ["continuity equation", "Newton's law", "Pascal's law", "viscosity"], ans: 0, topic: "Fluid dynamics", explanation: "✓ CORRECT: A₁v₁ = A₂v₂ (mass conservation)." },
            { q: "No resistance to displacement => ?", opts: ["ideal fluid", "water", "gas", "perfect solid"], ans: 0, topic: "Ideal fluid", explanation: "✓ CORRECT: Inviscid fluid has zero viscosity." },
            { q: "Volumetric change due to resistance = ?", opts: ["compressibility", "strain", "adhesion", "cohesion"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: Compressibility = 1/bulk modulus." },
            { q: "Liquids?", opts: ["occupy definite volume", "cannot be compressed", "no viscosity", "none"], ans: 0, topic: "Properties", explanation: "✓ CORRECT: Fixed volume, variable shape. ❌ Can be compressed slightly." },
            { q: "Water density maximum at?", opts: ["4°C", "0°C", "100°C", "20°C"], ans: 0, topic: "Thermal", explanation: "✓ CORRECT: 999.97 kg/m³ at 4°C. Anomalous expansion." },
            { q: "Attraction between own molecules?", opts: ["cohesion", "adhesion", "viscosity", "surface tension"], ans: 0, topic: "Molecular", explanation: "✓ CORRECT: Cohesion = like molecules. ❌ Adhesion = unlike." },
            { q: "Mercury does not wet glass due to?", opts: ["surface tension", "cohesion", "adhesion", "viscosity"], ans: 0, topic: "Surface tension", explanation: "✓ CORRECT: High cohesive forces > adhesive forces → convex meniscus." },
            { q: "Resist tensile stress property?", opts: ["cohesion", "adhesion", "compressibility", "surface tension"], ans: 0, topic: "Strength", explanation: "✓ CORRECT: Cohesion provides tensile strength in liquids." },
            { q: "Attraction between different fluids?", opts: ["adhesion", "cohesion", "viscosity", "compressibility"], ans: 0, topic: "Intermolecular", explanation: "✓ CORRECT: Adhesion = unlike molecules (water-glass)." },
            { q: "Specific weight of water in SI?", opts: ["9.81×10³ N/m³", "1000 N/m³", "10000 N/m³", "9.81 N/m³"], ans: 0, topic: "Fluid properties", explanation: "✓ CORRECT: γ = ρg = 1000 kg/m³ × 9.81 m/s² = 9810 N/m³ ≈ 9.81 kN/m³." },
            { q: "Flow parameters same at every point?", opts: ["uniform", "steady", "laminar", "static"], ans: 0, topic: "Flow", explanation: "✓ CORRECT: Uniform flow: properties independent of position." },
            { q: "Which is dimensionless?", opts: ["specific gravity", "specific weight", "specific volume", "viscosity"], ans: 0, topic: "Dimensionless", explanation: "✓ CORRECT: SG = ρ_substance/ρ_water (ratio)." },
            { q: "Normal stress constant in all directions only if?", opts: ["fluid at rest", "inviscid", "incompressible", "frictionless"], ans: 0, topic: "Pressure", explanation: "✓ CORRECT: Pascal's law applies to static fluid." },
            { q: "Pressure not same in all directions when?", opts: ["viscous and moving", "static", "inviscid", "ideal"], ans: 0, topic: "Viscous flow", explanation: "✓ CORRECT: Shear stresses cause directional variation." },
            { q: "Pascal's law applies to?", opts: ["confined fluids", "gases only", "solids", "vacuum"], ans: 0, topic: "Fluid statics", explanation: "✓ CORRECT: Pressure transmitted equally throughout enclosed fluid." },
            { q: "Hydraulic press works on?", opts: ["Pascal's law", "Bernoulli", "Archimedes", "Newton"], ans: 0, topic: "Applications", explanation: "✓ CORRECT: Force multiplication: F₂ = F₁ × (A₂/A₁)." },
            { q: "Archimedes' principle deals with?", opts: ["buoyancy", "pressure", "flow rate", "viscosity"], ans: 0, topic: "Buoyancy", explanation: "✓ CORRECT: Upthrust = weight of displaced fluid." },
            { q: "Bernoulli's equation relates?", opts: ["pressure, velocity, height", "force, mass, acc", "work, energy, power", "density, volume, mass"], ans: 0, topic: "Fluid dynamics", explanation: "✓ CORRECT: P + ½ρv² + ρgh = constant (energy conservation)." },
            { q: "Venturi meter measures?", opts: ["flow rate", "pressure", "density", "viscosity"], ans: 0, topic: "Flow measurement", explanation: "✓ CORRECT: Uses Bernoulli: pressure difference → velocity → flow rate." },
            { q: "Pitot tube measures?", opts: ["velocity", "pressure", "density", "temperature"], ans: 0, topic: "Flow measurement", explanation: "✓ CORRECT: Stagnation pressure - static pressure = dynamic pressure = ½ρv²." },
            { q: "Reynolds number indicates?", opts: ["laminar/turbulent flow", "density", "viscosity", "pressure"], ans: 0, topic: "Flow regimes", explanation: "✓ CORRECT: Re = ρvD/μ. <2000 laminar, >4000 turbulent." },
            { q: "Laminar flow is?", opts: ["smooth, orderly", "chaotic", "fast", "compressible"], ans: 0, topic: "Flow regimes", explanation: "✓ CORRECT: Parallel layers, no mixing, low Re." },
            { q: "Turbulent flow is?", opts: ["chaotic, mixing", "smooth", "steady", "incompressible"], ans: 0, topic: "Flow regimes", explanation: "✓ CORRECT: Random fluctuations, eddies, high Re." },
            { q: "Viscosity is resistance to?", opts: ["flow", "compression", "tension", "bending"], ans: 0, topic: "Fluid properties", explanation: "✓ CORRECT: Internal friction between fluid layers." },
            { q: "Newtonian fluid has constant?", opts: ["viscosity", "density", "pressure", "temperature"], ans: 0, topic: "Rheology", explanation: "✓ CORRECT: τ = μ(du/dy). Linear relationship." },
            { q: "Non-Newtonian fluid example?", opts: ["ketchup", "water", "air", "mercury"], ans: 0, topic: "Rheology", explanation: "✓ CORRECT: Shear-thinning (ketchup) or shear-thickening (cornstarch)." },
            { q: "Capillary action due to?", opts: ["surface tension", "gravity", "pressure", "temperature"], ans: 0, topic: "Surface phenomena", explanation: "✓ CORRECT: Adhesion > cohesion → rise. Cohesion > adhesion → depression." },
            { q: "Meniscus is curved due to?", opts: ["surface tension", "gravity", "density", "viscosity"], ans: 0, topic: "Surface tension", explanation: "✓ CORRECT: Concave (water) or convex (mercury)." },
            { q: "Jurin's law relates to?", opts: ["capillary rise", "viscosity", "turbulence", "compressibility"], ans: 0, topic: "Capillarity", explanation: "✓ CORRECT: h = 2γ cosθ/ρgr. Height inversely proportional to radius." },
            { q: "Bulk modulus measures?", opts: ["compressibility", "viscosity", "density", "surface tension"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: K = -V(dP/dV). Resistance to uniform compression." },
            { q: "Young's modulus measures?", opts: ["tensile elasticity", "bulk compression", "shear", "plasticity"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: E = σ/ε. Stress/strain in tension/compression." },
            { q: "Shear modulus measures?", opts: ["resistance to shape change", "volume change", "length change", "density change"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: G = τ/γ. Rigidity modulus." },
            { q: "Poisson's ratio is?", opts: ["lateral/axial strain", "stress/strain", "force/area", "work/energy"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: ν = -ε_lateral/ε_axial. ~0.3 for metals." },
            { q: "Elastic limit is maximum stress for?", opts: ["reversible deformation", "permanent deformation", "fracture", "yield"], ans: 0, topic: "Strength", explanation: "✓ CORRECT: Returns to original shape when stress removed." },
            { q: "Yield strength is stress at which?", opts: ["plastic deformation begins", "fracture occurs", "elastic limit", "proportional limit"], ans: 0, topic: "Strength", explanation: "✓ CORRECT: Permanent set (0.2% offset)." },
            { q: "Ultimate tensile strength is?", opts: ["maximum stress", "yield stress", "fracture stress", "elastic limit"], ans: 0, topic: "Strength", explanation: "✓ CORRECT: Peak on engineering stress-strain curve." },
            { q: "Ductile material example?", opts: ["copper", "glass", "ceramic", "concrete"], ans: 0, topic: "Material properties", explanation: "✓ CORRECT: Undergoes plastic deformation before fracture." },
            { q: "Brittle material example?", opts: ["glass", "aluminum", "steel", "rubber"], ans: 0, topic: "Material properties", explanation: "✓ CORRECT: Fractures without plastic deformation." },
            { q: "Hooke's law valid in?", opts: ["elastic region", "plastic region", "fracture", "yield"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: Linear stress-strain relationship." },
            { q: "Strain is?", opts: ["deformation/original length", "force/area", "work/volume", "power/mass"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: ε = ΔL/L. Dimensionless." },
            { q: "Stress is?", opts: ["force/area", "deformation/length", "energy/volume", "power/mass"], ans: 0, topic: "Elasticity", explanation: "✓ CORRECT: σ = F/A. Units: Pa (N/m²)." },
            { q: "Pressure in fluid increases with?", opts: ["depth", "temperature", "viscosity", "velocity"], ans: 0, topic: "Hydrostatics", explanation: "✓ CORRECT: P = P₀ + ρgh." },
            { q: "Barometer measures?", opts: ["atmospheric pressure", "fluid flow", "density", "temperature"], ans: 0, topic: "Pressure measurement", explanation: "✓ CORRECT: Torricelli's mercury barometer (1643)." },
            { q: "Manometer measures?", opts: ["pressure difference", "absolute pressure", "flow rate", "velocity"], ans: 0, topic: "Pressure measurement", explanation: "✓ CORRECT: U-tube with fluid, ΔP = ρgh." },
            { q: "Stokes' law relates to?", opts: ["viscous drag", "buoyancy", "pressure", "surface tension"], ans: 0, topic: "Viscosity", explanation: "✓ CORRECT: F = 6πηrv (sphere in fluid, low Re)." },
            { q: "Terminal velocity in fluid depends on?", opts: ["viscosity, size, density", "color", "temperature", "pressure"], ans: 0, topic: "Viscous flow", explanation: "✓ CORRECT: v_t = (ρ_s - ρ_f)gD²/18μ (Stokes law)." },
            { q: "Continuity equation: A₁v₁ = ?", opts: ["A₂v₂", "P₁/P₂", "ρ₁/ρ₂", "m₁/m₂"], ans: 0, topic: "Fluid dynamics", explanation: "✓ CORRECT: Mass conservation for incompressible flow." }
        ],
        
        // ========== MTS101 (Mathematics) ==========
        mts: [
            { q: "Prove by induction: \\(1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}\\). The base case n=1 gives:", 
              opts: ["\\(1 = \\frac{1(2)}{2}\\)", "\\(1 = 1\\)", "\\(1 = \\frac{1}{2}\\)", "\\(1 = 2\\)"], 
              ans: 0, topic: "Mathematical Induction", 
              explanation: "✓ CORRECT: For n=1: LHS = 1, RHS = 1(2)/2 = 1. Both sides equal 1." },
            
            { q: "The principle of mathematical induction is used to prove statements about:", 
              opts: ["all positive integers", "real numbers", "complex numbers", "negative integers"], 
              ans: 0, topic: "Induction", 
              explanation: "✓ CORRECT: PMI proves P(n) for every natural number n ∈ ℕ." },
            
            { q: "In induction, after proving P(1) true, the inductive step assumes P(k) true and proves:", 
              opts: ["P(k+1) true", "P(k-1) true", "P(2k) true", "P(k/2) true"], 
              ans: 0, topic: "Induction", 
              explanation: "✓ CORRECT: If P(k) ⇒ P(k+1) for all k, and P(1) true, then P(n) true ∀n." },
            
            { q: "Prove \\(1^2 + 2^2 + 3^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}\\). For n=1:", 
              opts: ["\\(1 = \\frac{1(2)(3)}{6}\\)", "\\(1 = \\frac{1}{6}\\)", "\\(1 = 2\\)", "\\(1 = 3\\)"], 
              ans: 0, topic: "Mathematical Induction", 
              explanation: "✓ CORRECT: RHS = 1×2×3/6 = 6/6 = 1, matches LHS." },
            
            { q: "Induction is valid because of the:", 
              opts: ["well-ordering principle", "axiom of choice", "fundamental theorem", "binomial theorem"], 
              ans: 0, topic: "Induction", 
              explanation: "✓ CORRECT: Every non-empty set of natural numbers has a least element." },
            
            { q: "If A = {1,2,3,4,5}, B = {2,4,6,8}, then \\(A \\cap B\\) = ?", 
              opts: ["{2,4}", "{1,3,5}", "{6,8}", "{1,2,3,4,5,6,8}"], 
              ans: 0, topic: "Set Theory", 
              explanation: "✓ CORRECT: Intersection contains elements present in both sets: 2 and 4." },
            
            { q: "If \\(|A| = 8\\), \\(|B| = 5\\), and \\(|A \\cap B| = 3\\), then \\(|A \\cup B|\\) = ?", 
              opts: ["10", "13", "16", "8"], 
              ans: 0, topic: "Set Theory", 
              explanation: "✓ CORRECT: |A∪B| = |A| + |B| - |A∩B| = 8 + 5 - 3 = 10." },
            
            { q: "The power set of {a,b} has how many elements?", 
              opts: ["4", "2", "3", "1"], 
              ans: 0, topic: "Power Set", 
              explanation: "✓ CORRECT: P({a,b}) = {∅, {a}, {b}, {a,b}} has 2² = 4 elements." },
            
            { q: "If A ⊆ B and B ⊆ A, then:", 
              opts: ["A = B", "A ⊂ B", "B ⊂ A", "A ∩ B = ∅"], 
              ans: 0, topic: "Set Equality", 
              explanation: "✓ CORRECT: Mutual inclusion implies set equality." },
            
            { q: "De Morgan's law: \\((A \\cup B)^c = ?\\)", 
              opts: ["\\(A^c \\cap B^c\\)", "\\(A^c \\cup B^c\\)", "\\(A \\cap B\\)", "\\(A \\cup B\\)"], 
              ans: 0, topic: "Set Theory", 
              explanation: "✓ CORRECT: Complement of union = intersection of complements." },
            
            { q: "\\(\\sin^2 \\theta + \\cos^2 \\theta = ?\\)", 
              opts: ["\\(1\\)", "\\(0\\)", "\\(\\sin 2\\theta\\)", "\\(\\cos 2\\theta\\)"], 
              ans: 0, topic: "Trigonometric Identities", 
              explanation: "✓ CORRECT: Pythagorean identity: sin²θ + cos²θ = 1." },
            
            { q: "\\(\\tan \\theta = ?\\)", 
              opts: ["\\(\\frac{\\sin \\theta}{\\cos \\theta}\\)", "\\(\\frac{\\cos \\theta}{\\sin \\theta}\\)", "\\(\\frac{1}{\\sin \\theta}\\)", "\\(\\frac{1}{\\cos \\theta}\\)"], 
              ans: 0, topic: "Trigonometric Ratios", 
              explanation: "✓ CORRECT: tan θ = sin θ / cos θ, provided cos θ ≠ 0." },
            
            { q: "\\(\\sin(90° - \\theta) = ?\\)", 
              opts: ["\\(\\cos \\theta\\)", "\\(\\sin \\theta\\)", "\\(-\\cos \\theta\\)", "\\(-\\sin \\theta\\)"], 
              ans: 0, topic: "Co-function Identities", 
              explanation: "✓ CORRECT: Sine and cosine are co-functions: sin(90°-θ) = cos θ." },
            
            { q: "\\(\\sin 75° = ?\\)", 
              opts: ["\\(\\frac{\\sqrt{6}+\\sqrt{2}}{4}\\)", "\\(\\frac{\\sqrt{6}-\\sqrt{2}}{4}\\)", "\\(\\frac{\\sqrt{3}+1}{2\\sqrt{2}}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)"], 
              ans: 0, topic: "Compound Angles", 
              explanation: "✓ CORRECT: sin 75° = sin(45°+30°) = sin45°cos30° + cos45°sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4." },
            
            { q: "\\(\\cos(180° + \\theta) = ?\\)", 
              opts: ["\\(-\\cos \\theta\\)", "\\(\\cos \\theta\\)", "\\(-\\sin \\theta\\)", "\\(\\sin \\theta\\)"], 
              ans: 0, topic: "Compound Angles", 
              explanation: "✓ CORRECT: cos(180°+θ) = cos180°cosθ - sin180°sinθ = (-1)cosθ - (0)sinθ = -cosθ." },
            
            { q: "The nth term of an arithmetic progression is given by \\(a_n = a_1 + (n-1)d\\). If \\(a_1 = 3, d = 2\\), find \\(a_{10}\\).", 
              opts: ["21", "19", "23", "20"], 
              ans: 0, topic: "Arithmetic Progression", 
              explanation: "✓ CORRECT: a₁₀ = 3 + (10-1)×2 = 3 + 18 = 21." },
            
            { q: "Sum of first n terms of AP: \\(S_n = \\frac{n}{2}[2a + (n-1)d]\\). Find sum of first 20 terms of 2,5,8,...", 
              opts: ["610", "620", "600", "630"], 
              ans: 0, topic: "Arithmetic Series", 
              explanation: "✓ CORRECT: a=2, d=3, n=20: S₂₀ = 20/2[4 + 19×3] = 10[4+57] = 10×61 = 610." },
            
            { q: "The sum to infinity of a geometric progression \\(a + ar + ar^2 + \\cdots\\) where |r|<1 is:", 
              opts: ["\\(\\frac{a}{1-r}\\)", "\\(\\frac{a}{r-1}\\)", "\\(\\frac{a(1-r^n)}{1-r}\\)", "\\(\\frac{a}{1+r}\\)"], 
              ans: 0, topic: "Geometric Series", 
              explanation: "✓ CORRECT: S∞ = a/(1-r) when |r| < 1." },
            
            { q: "Find the sum to infinity: \\(1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\cdots\\)", 
              opts: ["\\(\\frac{2}{3}\\)", "\\(\\frac{3}{4}\\)", "\\(\\frac{4}{5}\\)", "\\(1\\)"], 
              ans: 0, topic: "Infinite GP", 
              explanation: "✓ CORRECT: a=1, r=-1/2, S∞ = 1/(1-(-1/2)) = 1/(3/2) = 2/3." },
            
            { q: "The 5th term of a GP is 48 and the 3rd term is 12. Find the common ratio r.", 
              opts: ["2", "3", "4", "1/2"], 
              ans: 0, topic: "Geometric Progression", 
              explanation: "✓ CORRECT: ar⁴ = 48, ar² = 12 ⇒ r² = 4 ⇒ r = 2 (positive)." },
            
            { q: "The binomial expansion of \\((1+x)^n = \\sum_{k=0}^n \\binom{n}{k} x^k\\). Find \\(\\binom{5}{2}\\).", 
              opts: ["10", "20", "5", "15"], 
              ans: 0, topic: "Binomial Coefficients", 
              explanation: "✓ CORRECT: C(5,2) = 5!/(2!3!) = 120/(2×6) = 10." },
            
            { q: "The coefficient of \\(x^3\\) in \\((1+x)^7\\) is:", 
              opts: ["35", "21", "7", "28"], 
              ans: 0, topic: "Binomial Theorem", 
              explanation: "✓ CORRECT: C(7,3) = 7!/(3!4!) = 35." },
            
            { q: "Pascal's rule states: \\(\\binom{n}{r} + \\binom{n}{r-1} = ?\\)", 
              opts: ["\\(\\binom{n+1}{r}\\)", "\\(\\binom{n}{r+1}\\)", "\\(\\binom{n-1}{r}\\)", "\\(\\binom{n}{r-2}\\)"], 
              ans: 0, topic: "Pascal's Triangle", 
              explanation: "✓ CORRECT: C(n,r) + C(n,r-1) = C(n+1,r). Fundamental recurrence." },
            
            { q: "Find the constant term in \\((x^2 + \\frac{1}{x})^6\\)", 
              opts: ["15", "20", "30", "12"], 
              ans: 0, topic: "Binomial Expansion", 
              explanation: "✓ CORRECT: General term: C(6,r) (x²)^(6-r) (1/x)^r = C(6,r) x^{12-3r}. Set 12-3r=0 → r=4. C(6,4)=15." },
            
            { q: "\\(\\sum_{k=0}^n \\binom{n}{k} = ?\\)", 
              opts: ["\\(2^n\\)", "\\(n^2\\)", "\\(2n\\)", "\\(n!\\)"], 
              ans: 0, topic: "Binomial Sum", 
              explanation: "✓ CORRECT: Sum of binomial coefficients = 2ⁿ, total subsets of n-element set." },
            
            { q: "The quadratic formula for \\(ax^2 + bx + c = 0\\) is:", 
              opts: ["\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)", "\\(x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}\\)", "\\(x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)", "\\(x = \\frac{-b \\pm \\sqrt{4ac - b^2}}{2a}\\)"], 
              ans: 0, topic: "Quadratic Equations", 
              explanation: "✓ CORRECT: Quadratic formula gives roots: x = [-b ± √(b²-4ac)]/2a." },
            
            { q: "The discriminant \\(\\Delta = b^2 - 4ac\\) determines:", 
              opts: ["nature of roots", "sum of roots", "product of roots", "vertex position"], 
              ans: 0, topic: "Quadratic Discriminant", 
              explanation: "✓ CORRECT: Δ > 0: real & distinct; Δ = 0: real & equal; Δ < 0: complex conjugate." },
            
            { q: "If α and β are roots of \\(x^2 - 5x + 6 = 0\\), then \\(\\alpha + \\beta = ?\\)", 
              opts: ["5", "6", "-5", "-6"], 
              ans: 0, topic: "Sum of Roots", 
              explanation: "✓ CORRECT: For ax²+bx+c=0, sum of roots = -b/a = -(-5)/1 = 5." },
            
            { q: "If α and β are roots of \\(x^2 - 5x + 6 = 0\\), then \\(\\alpha \\beta = ?\\)", 
              opts: ["6", "5", "-6", "-5"], 
              ans: 0, topic: "Product of Roots", 
              explanation: "✓ CORRECT: Product of roots = c/a = 6/1 = 6." },
            
            { q: "Solve \\(x^2 - 4x + 3 = 0\\)", 
              opts: ["x = 1, 3", "x = -1, -3", "x = 2, 2", "x = 0, 4"], 
              ans: 0, topic: "Quadratic Equations", 
              explanation: "✓ CORRECT: (x-1)(x-3)=0 ⇒ x=1 or x=3." },
            
            { q: "\\(\\log_a (xy) = ?\\)", 
              opts: ["\\(\\log_a x + \\log_a y\\)", "\\(\\log_a x \\cdot \\log_a y\\)", "\\(\\log_a x - \\log_a y\\)", "\\(x \\log_a y\\)"], 
              ans: 0, topic: "Logarithms", 
              explanation: "✓ CORRECT: Product rule: logₐ(xy) = logₐx + logₐy." },
            
            { q: "\\(\\log_a (x^n) = ?\\)", 
              opts: ["\\(n \\log_a x\\)", "\\((\\log_a x)^n\\)", "\\(\\log_a x + n\\)", "\\(n + \\log_a x\\)"], 
              ans: 0, topic: "Logarithms", 
              explanation: "✓ CORRECT: Power rule: logₐ(xⁿ) = n logₐx." },
            
            { q: "\\(\\log_a 1 = ?\\)", 
              opts: ["0", "1", "undefined", "a"], 
              ans: 0, topic: "Logarithms", 
              explanation: "✓ CORRECT: a⁰ = 1 for any a>0, a≠1." },
            
            { q: "Solve for x: \\(\\log_2 x = 3\\)", 
              opts: ["x = 8", "x = 6", "x = 9", "x = 4"], 
              ans: 0, topic: "Logarithmic Equations", 
              explanation: "✓ CORRECT: 2³ = 8 ⇒ x = 8." },
            
            { q: "Change of base formula: \\(\\log_a b = ?\\)", 
              opts: ["\\(\\frac{\\log_c b}{\\log_c a}\\)", "\\(\\log_c (ab)\\)", "\\(\\frac{\\log_c a}{\\log_c b}\\)", "\\(\\log_c (a-b)\\)"], 
              ans: 0, topic: "Logarithms", 
              explanation: "✓ CORRECT: Allows conversion between any bases." },
            
            { q: "The derivative of \\(x^n\\) is:", 
              opts: ["\\(nx^{n-1}\\)", "\\(x^{n-1}\\)", "\\(n x^n\\)", "\\(\\frac{x^{n+1}}{n+1}\\)"], 
              ans: 0, topic: "Differentiation", 
              explanation: "✓ CORRECT: Power rule: d/dx (xⁿ) = n xⁿ⁻¹." },
            
            { q: "The derivative of \\(\\sin x\\) is:", 
              opts: ["\\(\\cos x\\)", "\\(-\\cos x\\)", "\\(\\sec^2 x\\)", "\\(-\\sin x\\)"], 
              ans: 0, topic: "Differentiation", 
              explanation: "✓ CORRECT: d/dx sin x = cos x." },
            
            { q: "The derivative of \\(\\cos x\\) is:", 
              opts: ["\\(-\\sin x\\)", "\\(\\sin x\\)", "\\(-\\cos x\\)", "\\(\\sec^2 x\\)"], 
              ans: 0, topic: "Differentiation", 
              explanation: "✓ CORRECT: d/dx cos x = -sin x." },
            
            { q: "The integral of \\(x^n\\) is:", 
              opts: ["\\(\\frac{x^{n+1}}{n+1} + C\\)", "\\(nx^{n-1} + C\\)", "\\(x^{n+1} + C\\)", "\\(\\frac{x^{n-1}}{n-1} + C\\)"], 
              ans: 0, topic: "Integration", 
              explanation: "✓ CORRECT: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ -1." },
            
            { q: "The integral of \\(\\frac{1}{x}\\) is:", 
              opts: ["\\(\\ln|x| + C\\)", "\\(\\frac{x^2}{2} + C\\)", "\\(x + C\\)", "\\(e^x + C\\)"], 
              ans: 0, topic: "Integration", 
              explanation: "✓ CORRECT: ∫(1/x) dx = ln|x| + C." },
            
            { q: "Number of ways to arrange n distinct objects is:", 
              opts: ["\\(n!\\)", "\\(2^n\\)", "\\(n^2\\)", "\\(\\binom{n}{2}\\)"], 
              ans: 0, topic: "Permutations", 
              explanation: "✓ CORRECT: n factorial = n×(n-1)×...×2×1." },
            
            { q: "Number of ways to select r objects from n distinct objects is:", 
              opts: ["\\(\\binom{n}{r}\\)", "\\(n^r\\)", "\\(r^n\\)", "\\(\\frac{n!}{(n-r)!}\\)"], 
              ans: 0, topic: "Combinations", 
              explanation: "✓ CORRECT: C(n,r) = n!/(r!(n-r)!), order doesn't matter." },
            
            { q: "Number of permutations of n objects taken r at a time is:", 
              opts: ["\\(\\frac{n!}{(n-r)!}\\)", "\\(\\frac{n!}{r!(n-r)!}\\)", "\\(n^r\\)", "\\(r^n\\)"], 
              ans: 0, topic: "Permutations", 
              explanation: "✓ CORRECT: P(n,r) = n!/(n-r)!, order matters." },
            
            { q: "How many ways to arrange the letters in 'MATHS'?", 
              opts: ["120", "60", "24", "720"], 
              ans: 0, topic: "Permutations", 
              explanation: "✓ CORRECT: 5! = 5×4×3×2×1 = 120." },
            
            { q: "How many ways to choose a committee of 3 from 10 people?", 
              opts: ["120", "720", "30", "1000"], 
              ans: 0, topic: "Combinations", 
              explanation: "✓ CORRECT: C(10,3) = 10!/(3!7!) = (10×9×8)/(3×2×1) = 720/6 = 120." },
            
            { q: "The middle term in expansion of \\((1+x)^{2n}\\) is:", 
              opts: ["\\(\\binom{2n}{n} x^n\\)", "\\(\\binom{2n}{n-1} x^{n-1}\\)", "\\(\\binom{2n}{n+1} x^{n+1}\\)", "\\(\\binom{2n}{n} x^{2n}\\)"], 
              ans: 0, topic: "Binomial Theorem", 
              explanation: "✓ CORRECT: Middle term when n is even: C(2n,n) xⁿ." },
            
            { q: "The coefficient of \\(x^5\\) in \\((1+x)^{10}\\) is:", 
              opts: ["252", "210", "120", "504"], 
              ans: 0, topic: "Binomial Theorem", 
              explanation: "✓ CORRECT: C(10,5) = 10!/(5!5!) = 252." },
            
            { q: "The general term in \\((1+x)^n\\) is:", 
              opts: ["\\(\\binom{n}{r} x^r\\)", "\\(\\binom{n}{r} x^{n-r}\\)", "\\(\\binom{n}{r-1} x^r\\)", "\\(\\binom{n}{r+1} x^r\\)"], 
              ans: 0, topic: "Binomial Theorem", 
              explanation: "✓ CORRECT: T_{r+1} = C(n,r) x^r." },
            
            { q: "The sum of coefficients in \\((1+x)^n\\) is:", 
              opts: ["\\(2^n\\)", "\\(n^2\\)", "\\(2n\\)", "\\(n!\\)"], 
              ans: 0, topic: "Binomial Theorem", 
              explanation: "✓ CORRECT: Put x=1: (1+1)ⁿ = 2ⁿ." },
            
            { q: "The binomial theorem for negative integer exponent requires:", 
              opts: ["infinite series", "finite series", "convergence test", "no solution"], 
              ans: 0, topic: "Binomial Theorem", 
              explanation: "✓ CORRECT: When n is negative or fractional, expansion is infinite." },
            
            { q: "\\(i^2 = ?\\)", 
              opts: ["\\(-1\\)", "\\(1\\)", "\\(-i\\)", "\\(i\\)"], 
              ans: 0, topic: "Complex Numbers", 
              explanation: "✓ CORRECT: i = √(-1), so i² = -1." },
            
            { q: "\\(i^4 = ?\\)", 
              opts: ["\\(1\\)", "\\(-1\\)", "\\(i\\)", "\\(-i\\)"], 
              ans: 0, topic: "Complex Numbers", 
              explanation: "✓ CORRECT: i⁴ = (i²)² = (-1)² = 1." },
            
            { q: "The complex conjugate of \\(a + bi\\) is:", 
              opts: ["\\(a - bi\\)", "\\(-a - bi\\)", "\\(-a + bi\\)", "\\(b + ai\\)"], 
              ans: 0, topic: "Complex Numbers", 
              explanation: "✓ CORRECT: Reflect across real axis: a - bi." },
            
            { q: "The modulus of \\(a + bi\\) is:", 
              opts: ["\\(\\sqrt{a^2 + b^2}\\)", "\\(a^2 + b^2\\)", "\\(\\sqrt{a^2 - b^2}\\)", "\\(a + b\\)"], 
              ans: 0, topic: "Complex Numbers", 
              explanation: "✓ CORRECT: Distance from origin: |z| = √(a²+b²)." },
            
            { q: "Euler's formula: \\(e^{i\\theta} = ?\\)", 
              opts: ["\\(\\cos \\theta + i \\sin \\theta\\)", "\\(\\cos \\theta - i \\sin \\theta\\)", "\\(\\sin \\theta + i \\cos \\theta\\)", "\\(\\cos(i\\theta)\\)"], 
              ans: 0, topic: "Complex Analysis", 
              explanation: "✓ CORRECT: Euler's identity - most beautiful formula in mathematics." }
        ]
    };

    // ----- get subject id from URL -----
    const urlParams = new URLSearchParams(window.location.search);
    const subjectId = urlParams.get('id');
    if (!subjectId || !questionBank[subjectId]) {
        document.body.innerHTML = '<div style="padding:50px; text-align:center;"><h2>❌ Subject not found</h2><a href="index.html" style="display:inline-block; margin-top:20px; padding:12px 30px; background:#efebe2; border-radius:40px; text-decoration:none;">← back to courses</a></div>';
        throw new Error('Invalid subject');
    }

    // ----- subject metadata -----
    const subjectMeta = {
        cve: { name: 'CVE 105', timeMin: 10, icon: 'flask' },
        che: { name: 'CHE 101', timeMin: 10, icon: 'vial' },
        gns101: { name: 'GNS 101', timeMin: 10, icon: 'book' },
        gns103: { name: 'GNS 103', timeMin: 10, icon: 'building-columns' },
        phy101: { name: 'PHY 101', timeMin: 10, icon: 'rocket' },
        phy103: { name: 'PHY 103', timeMin: 10, icon: 'droplet' },
        mts: { name: 'MTS 101', timeMin: 20, icon: 'square-root-variable' }
    };
    const currentSubjectMeta = subjectMeta[subjectId];
    const fullBank = questionBank[subjectId];

    // ----- DOM elements (subject page) -----
    const subjectNameEl = document.getElementById('subjectName');
    const subjectNameHeader = document.getElementById('subjectNameHeader');
    const timerEl = document.getElementById('timerDisplay');
    const modeCbt = document.getElementById('modeCbtBtn');
    const modePractice = document.getElementById('modePracticeBtn');
    const progressEl = document.getElementById('progressIndicator');
    const questionText = document.getElementById('questionText');
    const optionsDiv = document.getElementById('optionsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitSubjectBtn');
    const explainBtn = document.getElementById('explainCurrentBtn');
    const correctionContent = document.getElementById('correctionContent');
    const suggestedTopics = document.getElementById('suggestedTopics');
    const shuffleBtn = document.getElementById('shuffleBtn');
    
    // ----- Time selection DOM elements -----
    const timeDefaultBtn = document.getElementById('timeDefaultBtn');
    const timeCustomBtn = document.getElementById('timeCustomBtn');
    const customTimeInputContainer = document.getElementById('customTimeInputContainer');
    const customMinutesInput = document.getElementById('customMinutesInput');
    const applyCustomTimeBtn = document.getElementById('applyCustomTimeBtn');
    const activeTimeSetting = document.getElementById('activeTimeSetting');
    const timeSelectionPanel = document.getElementById('timeSelectionPanel');

    if (subjectNameEl) subjectNameEl.textContent = currentSubjectMeta.name;
    if (subjectNameHeader) subjectNameHeader.textContent = currentSubjectMeta.name;

    // ----- state -----
    let currentQuestions = [];
    let userAnswers = [];
    let currentIndex = 0;
    let timerInterval = null;
    let timeRemaining = 0;
    let subjectActive = false;
    let testSubmitted = false;
    let isPracticeMode = false;
    let quizLocked = false;
    
    // ----- Time selection state -----
    let selectedTimeMinutes = currentSubjectMeta.timeMin || 10; // Default from metadata
    let isCustomTime = false;

    // ----- timer functions -----
    function stopTimer() { 
        clearInterval(timerInterval); 
        timerInterval = null; 
    }
    
    function formatTime(s) { 
        let m = Math.floor(s/60); 
        let sec = s % 60; 
        return `${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`; 
    }
    
    function startTimer(minutes) {
        stopTimer();
        quizLocked = false;
        timeRemaining = minutes * 60;
        if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> ${formatTime(timeRemaining)}`;
        
        timerInterval = setInterval(() => {
            timeRemaining--;
            if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> ${formatTime(timeRemaining)}`;
            
            // TIME UP - COMPLETE LOCK AND AUTO-SUBMIT
            if (timeRemaining <= 0) { 
                stopTimer(); 
                quizLocked = true;
                subjectActive = false;
                testSubmitted = true;
                
                if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-end"></i> 00:00 · TIME UP!`;
                
                // Disable ALL interactive elements
                if (optionsDiv) {
                    Array.from(optionsDiv.children).forEach(el => {
                        if (el.classList) {
                            el.style.pointerEvents = 'none';
                            el.style.opacity = '0.7';
                        }
                    });
                }
                if (prevBtn) prevBtn.disabled = true;
                if (nextBtn) nextBtn.disabled = true;
                if (shuffleBtn) shuffleBtn.disabled = true;
                if (explainBtn) explainBtn.style.display = 'none';
                
                // Disable time selection
                if (timeDefaultBtn) timeDefaultBtn.disabled = true;
                if (timeCustomBtn) timeCustomBtn.disabled = true;
                if (applyCustomTimeBtn) applyCustomTimeBtn.disabled = true;
                if (customMinutesInput) customMinutesInput.disabled = true;
                
                // Auto-submit
                alert('⏰ TIME IS UP! Your answers are being submitted automatically...'); 
                submitSubject(); 
            }
        }, 1000);
    }

    // ----- shuffle array -----
    function shuffleArray(arr) {
        for (let i = arr.length-1; i>0; i--) {
            let j = Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // ----- ENHANCED answer comparison (handles multiple formats) -----
    function isAnswerCorrect(userAns, correctAns) {
        if (userAns === null || userAns === undefined || userAns === '') return false;
        
        // Convert to string for comparison
        let userStr = userAns.toString().trim().toLowerCase();
        
        // If correct answer is an array (multiple possible correct answers)
        if (Array.isArray(correctAns)) {
            return correctAns.some(ans => 
                ans.toString().trim().toLowerCase() === userStr
            );
        }
        
        // Handle numeric comparisons (allow string or number)
        if (!isNaN(parseFloat(correctAns)) && isFinite(correctAns)) {
            let userNum = parseFloat(userStr);
            let correctNum = parseFloat(correctAns);
            return userNum === correctNum;
        }
        
        // Single correct answer (case insensitive)
        return correctAns.toString().trim().toLowerCase() === userStr;
    }

    // ----- render question based on type -----
    function renderQuestion() {
        if (!currentQuestions.length) return;
        
        // Check if quiz is locked
        if (quizLocked) {
            if (optionsDiv) optionsDiv.style.pointerEvents = 'none';
            if (prevBtn) prevBtn.disabled = true;
            if (nextBtn) nextBtn.disabled = true;
            if (shuffleBtn) shuffleBtn.disabled = true;
        }
        
        let q = currentQuestions[currentIndex];
        
        // Set question text
        if (questionText) questionText.innerText = `${currentIndex+1}. ${q.q}`;
        
        let html = '';
        
        // MCQ or True/False
        if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
            let letters = ['A','B','C','D'];
            let displayOpts = q.opts;
            q.opts.forEach((opt, idx) => {
                let sel = (userAnswers[currentIndex] === idx) ? 'selected' : '';
                let disabled = quizLocked ? 'style="pointer-events: none; opacity: 0.7;"' : '';
                html += `<div class="option-item ${sel}" data-opt-index="${idx}" ${disabled}>
                            <span class="option-prefix">${letters[idx]}</span> ${opt}
                         </div>`;
            });
        } else {
            // INPUT TYPES: date, name, numeric
            let currentValue = userAnswers[currentIndex] !== -1 ? userAnswers[currentIndex] : '';
            
            let inputType = 'text';
            let placeholder = 'Enter your answer...';
            
            if (q.type === 'date') {
                inputType = 'number';
                placeholder = 'Enter year (e.g., 1957)';
                if (q.input_type === 'fulldate') inputType = 'date';
            } else if (q.type === 'numeric') {
                inputType = 'number';
                placeholder = 'Enter number';
            } else if (q.type === 'name') {
                inputType = 'text';
                placeholder = 'Enter name (e.g., Fleming)';
            }
            
            let disabled = quizLocked ? 'disabled' : '';
            html += `<div class="input-container" style="margin: 20px 0;">
                        <input type="${inputType}" 
                               id="userInput" 
                               class="user-input-field" 
                               placeholder="${placeholder}"
                               value="${currentValue !== -1 ? currentValue : ''}"
                               ${disabled}
                               style="width: 100%; padding: 18px 24px; border-radius: 60px; border: 2px solid #e6d5b8; font-size: 1.2rem; background: #fffcf5; outline: none; transition: 0.2s; ${quizLocked ? 'background: #f0f0f0;' : ''}">
                        <p style="margin-top: 12px; color: #6f5e4e; font-size: 0.95rem;">
                            <i class="fas fa-info-circle"></i> Type your answer above
                        </p>
                    </div>`;
        }
        
        if (optionsDiv) optionsDiv.innerHTML = html;
        
        // Add event listener for input fields (only if not locked)
        if (!quizLocked && (q.type !== 'mcq' && q.type !== 'tf')) {
            setTimeout(() => {
                const inputField = document.getElementById('userInput');
                if (inputField) {
                    inputField.addEventListener('input', function(e) {
                        if (!subjectActive || testSubmitted || quizLocked) return;
                        userAnswers[currentIndex] = e.target.value;
                        updateProgress();
                    });
                    inputField.focus();
                }
            }, 50);
        }
        
        // MCQ/TF click listeners (only if not locked)
        if (!quizLocked && (q.type === 'mcq' || q.type === 'tf' || !q.type)) {
            setTimeout(() => {
                document.querySelectorAll('.option-item').forEach(opt => {
                    opt.addEventListener('click', function(e) {
                        if (quizLocked || !subjectActive || testSubmitted) return;
                        let idx = parseInt(this.dataset.optIndex);
                        document.querySelectorAll('.option-item').forEach(ch => ch.classList.remove('selected'));
                        this.classList.add('selected');
                        userAnswers[currentIndex] = idx;
                        updateProgress();
                        if (isPracticeMode) showExplanation();
                    });
                });
            }, 50);
        }
        
        if (prevBtn) prevBtn.disabled = currentIndex === 0 || quizLocked;
        if (nextBtn) nextBtn.disabled = currentIndex === currentQuestions.length-1 || quizLocked;
        
        // Trigger MathJax for equations
        if (window.MathJax) setTimeout(() => MathJax.typesetPromise?.(), 50);
    }

    function updateProgress() {
        if (!progressEl) return;
        let answered = userAnswers.filter(a => a !== -1 && a !== '').length;
        progressEl.innerText = `✦ ${currentIndex+1}/${currentQuestions.length}  ✓ ${answered}/${currentQuestions.length}`;
    }

    // ----- show explanation (practice mode) -----
    function showExplanation() {
        if (!currentQuestions.length || !isPracticeMode || quizLocked) return;
        let q = currentQuestions[currentIndex];
        let userAns = userAnswers[currentIndex];
        
        let isCorrect = false;
        let correctDisplay = '';
        
        if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
            isCorrect = userAns === q.ans;
            correctDisplay = q.opts[q.ans];
        } else {
            isCorrect = isAnswerCorrect(userAns, q.ans);
            correctDisplay = Array.isArray(q.ans) ? q.ans.join(' or ') : q.ans;
        }
        
        let userDisplay = '';
        if (userAns === -1 || userAns === '') {
            userDisplay = '—';
        } else if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
            userDisplay = q.opts[userAns];
        } else {
            userDisplay = userAns;
        }
        
        let html = `<h3 style="display:flex;gap:12px;"><i class="fas fa-feather"></i> Explanation</h3>
            <p style="font-weight:600;">${q.q}</p>
            <p>✅ <strong>Correct answer:</strong> ${correctDisplay}</p>
            <p>📌 <strong>Your answer:</strong> ${userDisplay} ${isCorrect ? '✓' : '✗'}</p>
            <div class="explanation-text">💡 ${q.explanation || 'No explanation available'}</div>
            <p style="margin-top:16px;">📚 <strong>Topic:</strong> ${q.topic}</p>`;
            
        if (correctionContent) correctionContent.innerHTML = html;
        if (suggestedTopics) suggestedTopics.innerText = q.topic;
        
        if (window.MathJax) setTimeout(() => MathJax.typesetPromise?.(), 50);
    }

    // ----- TIME SELECTION HANDLERS -----
    function setSelectedTime(minutes, isCustom = false) {
        if (subjectActive && !testSubmitted) {
            alert('Cannot change time after test has started. Please reshuffle or reload.');
            return;
        }
        
        selectedTimeMinutes = minutes;
        isCustomTime = isCustom;
        
        // Update UI
        if (activeTimeSetting) {
            activeTimeSetting.textContent = `${minutes} minutes`;
        }
        
        // Update active states
        if (timeDefaultBtn) {
            timeDefaultBtn.classList.toggle('active', !isCustom);
            timeDefaultBtn.style.background = !isCustom ? '#fff1e0' : 'transparent';
            timeDefaultBtn.disabled = false;
        }
        if (timeCustomBtn) {
            timeCustomBtn.classList.toggle('active', isCustom);
            timeCustomBtn.style.background = isCustom ? '#fff1e0' : 'transparent';
            timeCustomBtn.disabled = false;
        }
        
        // Show/hide custom input
        if (customTimeInputContainer) {
            customTimeInputContainer.style.display = isCustom ? 'flex' : 'none';
        }
        
        // Update timer display
        if (!isPracticeMode && timerEl) {
            timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> 00:00`;
        }
    }

    // ----- submit (CBT mode) with complete lock -----
    function submitSubject() {
        if (isPracticeMode) return;
        
        stopTimer();
        testSubmitted = true;
        subjectActive = false;
        quizLocked = true;
        
        // Disable ALL interactive elements
        if (optionsDiv) {
            optionsDiv.style.pointerEvents = 'none';
            Array.from(optionsDiv.children).forEach(el => {
                if (el.classList) {
                    el.style.opacity = '0.7';
                    if (el.classList.contains('option-item')) {
                        el.style.pointerEvents = 'none';
                    }
                }
            });
        }
        
        // Disable all input fields
        document.querySelectorAll('input').forEach(input => {
            input.disabled = true;
            input.style.background = '#f0f0f0';
        });
        
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        if (shuffleBtn) {
            shuffleBtn.disabled = true;
            shuffleBtn.style.opacity = '0.5';
        }
        if (explainBtn) {
            explainBtn.style.display = 'none';
        }
        
        // Disable time selection
        if (timeDefaultBtn) {
            timeDefaultBtn.disabled = true;
            timeDefaultBtn.style.opacity = '0.5';
        }
        if (timeCustomBtn) {
            timeCustomBtn.disabled = true;
            timeCustomBtn.style.opacity = '0.5';
        }
        if (applyCustomTimeBtn) {
            applyCustomTimeBtn.disabled = true;
            applyCustomTimeBtn.style.opacity = '0.5';
        }
        if (customMinutesInput) {
            customMinutesInput.disabled = true;
            customMinutesInput.style.background = '#f0f0f0';
        }
        
        // Calculate score
        let score = 0, weak = [];
        currentQuestions.forEach((q, i) => {
            let ans = userAnswers[i];
            let correct = false;
            
            if (q.type === 'mcq' || q.type === 'tf' || !q.type) {
                correct = ans === q.ans;
            } else {
                correct = isAnswerCorrect(ans, q.ans);
            }
            
            if (correct) score++; 
            else if (ans !== -1 && ans !== '') weak.push(q.topic);
        });

        // SAVE RESULTS TO SESSIONSTORAGE
        const resultsData = {
            subjectId: subjectId,
            subjectName: currentSubjectMeta.name,
            score: score,
            total: currentQuestions.length,
            questions: currentQuestions,
            userAnswers: [...userAnswers],
            weakTopics: weak,
            timestamp: new Date().toISOString(),
            timeUsed: selectedTimeMinutes * 60 - timeRemaining
        };
        sessionStorage.setItem('cbtResults', JSON.stringify(resultsData));

        // Show summary in correction pane
        let html = `<h3 style="display:flex; gap:12px; color:#2a5c4a;">
                        <i class="fas fa-flag-checkered"></i> TEST COMPLETE!
                    </h3>
                    <div style="display:flex; justify-content:space-around; margin:24px 0;">
                        <div style="text-align:center;">
                            <div style="font-size:3rem; font-weight:700;">${score}</div>
                            <div style="color:#6a5e4e;">correct</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-size:3rem; font-weight:700;">${currentQuestions.length - score}</div>
                            <div style="color:#6a5e4e;">incorrect/skipped</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-size:3rem; font-weight:700;">${Math.round(score/currentQuestions.length*100)}%</div>
                            <div style="color:#6a5e4e;">score</div>
                        </div>
                    </div>
                    <p style="background:#e7f0e3; padding:16px; border-radius:40px; text-align:center;">
                        <i class="fas fa-download"></i> Results saved - click below for full analysis
                    </p>`;
        
        if (correctionContent) correctionContent.innerHTML = html;
        
        // Show topic suggestions
        let freq = {};
        weak.forEach(t => freq[t] = (freq[t]||0)+1);
        let top = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5).map(e=>e[0]).join(', ') || 'No weak areas - Excellent!';
        if (suggestedTopics) {
            suggestedTopics.innerText = top;
            document.getElementById('topicSuggestionBox')?.classList.remove('hidden');
        }
        
        // Show "View Full Results" button
        const viewResultsContainer = document.getElementById('viewResultsContainer');
        const viewBtn = document.getElementById('viewFullResultsBtn');
        if (viewResultsContainer) {
            viewResultsContainer.classList.remove('hidden');
            if (viewBtn) {
                viewBtn.href = `results.html`;
                viewBtn.innerHTML = `<i class="fas fa-chart-simple"></i> View detailed correction & topic analysis`;
            }
        }
        
        if (window.MathJax) setTimeout(() => MathJax.typesetPromise?.(), 100);
    }

    // ----- mode switching -----
    function setMode(mode) {
        isPracticeMode = mode === 'practice';
        
        if (modeCbt) modeCbt.classList.toggle('active', !isPracticeMode);
        if (modePractice) modePractice.classList.toggle('active', isPracticeMode);
        if (submitBtn) submitBtn.classList.toggle('hidden', isPracticeMode);
        if (explainBtn) explainBtn.classList.toggle('hidden', !isPracticeMode);
        
        // Show/hide time selection panel (only show in CBT mode)
        if (timeSelectionPanel) {
            timeSelectionPanel.style.display = isPracticeMode ? 'none' : 'flex';
        }
        
        // Hide results link and topic box when switching modes
        document.getElementById('viewResultsContainer')?.classList.add('hidden');
        document.getElementById('topicSuggestionBox')?.classList.add('hidden');
        
        if (!isPracticeMode) {
            if (timerEl) {
                timerEl.style.display = 'inline-flex';
                timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> 00:00`;
            }
            // Reset time selection enabled state
            if (timeDefaultBtn) {
                timeDefaultBtn.disabled = false;
                timeDefaultBtn.style.opacity = '1';
            }
            if (timeCustomBtn) {
                timeCustomBtn.disabled = false;
                timeCustomBtn.style.opacity = '1';
            }
            if (applyCustomTimeBtn) {
                applyCustomTimeBtn.disabled = false;
                applyCustomTimeBtn.style.opacity = '1';
            }
            if (customMinutesInput) {
                customMinutesInput.disabled = false;
                customMinutesInput.style.background = 'white';
            }
        } else {
            if (timerEl) {
                timerEl.innerHTML = `<i class="fas fa-feather"></i> Practice Mode`;
                stopTimer();
            }
        }
        
        quizLocked = false;
        testSubmitted = false;
        subjectActive = true;
        loadQuestions();
        
        // Reset correction pane
        if (correctionContent) correctionContent.innerHTML = `<p style="font-size:1.2rem; color:#685a4a; text-align:center;">
            <i class="fas fa-lock"></i> Complete the test and submit to see your results
        </p>`;
        if (suggestedTopics) suggestedTopics.innerText = '—';
    }

    // ----- load questions (CBT: 20 random, practice: all) -----
    function loadQuestions() {
        if (!fullBank) return;
        
        if (!isPracticeMode) {
            let shuffled = shuffleArray([...fullBank]);
            currentQuestions = shuffled.slice(0, 20);
        } else {
            currentQuestions = fullBank.map((q, idx) => ({ ...q, originalIndex: idx }));
        }
        
        currentQuestions = shuffleArray(currentQuestions);
        userAnswers = new Array(currentQuestions.length).fill(-1);
        currentIndex = 0;
        
        renderQuestion();
        updateProgress();
        
        // Start timer for CBT mode
        if (!isPracticeMode) {
            startTimer(selectedTimeMinutes);
        }
        
        if (window.MathJax) setTimeout(() => MathJax.typesetPromise?.(), 100);
    }

    // ----- EVENT LISTENERS -----
    
    // Mode toggle
    if (modeCbt) modeCbt.addEventListener('click', () => setMode('cbt'));
    if (modePractice) modePractice.addEventListener('click', () => setMode('practice'));

    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => { 
            if (quizLocked) { 
                alert('⏰ Time is up - you cannot navigate further'); 
                return; 
            }
            if (currentIndex > 0) { 
                currentIndex--; 
                renderQuestion(); 
                updateProgress(); 
            } 
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => { 
            if (quizLocked) { 
                alert('⏰ Time is up - you cannot navigate further'); 
                return; 
            }
            if (currentIndex < currentQuestions.length-1) { 
                currentIndex++; 
                renderQuestion(); 
                updateProgress(); 
            } 
        });
    }

    // Shuffle
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            if (quizLocked) { 
                alert('⏰ Test has ended - cannot reshuffle'); 
                return; 
            }
            if (!subjectActive) return;
            if (confirm('Reshuffle? Your current answers will be cleared.')) {
                currentQuestions = shuffleArray(currentQuestions);
                userAnswers = new Array(currentQuestions.length).fill(-1);
                currentIndex = 0;
                renderQuestion(); 
                updateProgress();
                if (correctionContent) correctionContent.innerHTML = `<p>🔄 Questions reshuffled</p>`;
                if (suggestedTopics) suggestedTopics.innerText = '—';
                
                // Restart timer if in CBT mode
                if (!isPracticeMode) {
                    stopTimer();
                    startTimer(selectedTimeMinutes);
                }
            }
        });
    }

    // Submit and Explain
    if (submitBtn) submitBtn.addEventListener('click', submitSubject);
    if (explainBtn) explainBtn.addEventListener('click', showExplanation);

    // ----- TIME SELECTION EVENT LISTENERS -----
    if (timeDefaultBtn) {
        timeDefaultBtn.addEventListener('click', () => {
            setSelectedTime(currentSubjectMeta.timeMin || 10, false);
        });
    }

    if (timeCustomBtn) {
        timeCustomBtn.addEventListener('click', () => {
            let defaultMins = parseInt(customMinutesInput?.value || '15');
            setSelectedTime(defaultMins, true);
        });
    }

    if (applyCustomTimeBtn && customMinutesInput) {
        applyCustomTimeBtn.addEventListener('click', () => {
            let mins = parseInt(customMinutesInput.value);
            if (isNaN(mins) || mins < 1) mins = 1;
            if (mins > 180) mins = 180;
            customMinutesInput.value = mins;
            setSelectedTime(mins, true);
        });
    }

    // Initialize with default time
    setSelectedTime(currentSubjectMeta.timeMin || 10, false);
    
    // ----- initial load (default CBT) -----
    setMode('cbt');
})();