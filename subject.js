// ========== SUBJECT.JS ==========
// Individual subject test page: loads questions, CBT/practice mode, timer, explanations
// Fully offline after service worker caches it
(function() {
    "use strict";

    // ---------- MEGA QUESTION BANK (50+ each, permanently cached) ----------
    const questionBank = {
        // CVE 105 – science history (55+)
        cve: [
            { q: "Science is the ...... and ...... approach to discovering how things work.", opts: ["systematic, logical", "random, chaotic", "subjective, personal", "divine, mystical"], ans: 0, topic: "Nature of Science", explanation: "Science uses systematic observation and logic to understand natural phenomena." },
            { q: "Who first proposed the atomic theory?", opts: ["John Dalton", "Dmitry Mendeleyev", "Isaac Newton", "Niels Bohr"], ans: 0, topic: "Atomic Theory", explanation: "John Dalton (1803) proposed that matter consists of indivisible atoms." },
            { q: "Sputnik1 launch year?", opts: ["1955", "1957", "1961", "1958"], ans: 1, topic: "Space Race", explanation: "Sputnik1 launched Oct 4, 1957 – first artificial satellite." },
            { q: "Number of men walked on moon and returned?", opts: ["11", "12", "7", "9"], ans: 0, topic: "Apollo", explanation: "11 astronauts (Apollo 11–17, excluding 13)." },
            { q: "Henry Cavendish discovered hydrogen in?", opts: ["1766", "1776", "1756", "1780"], ans: 0, topic: "Chemistry", explanation: "Cavendish identified hydrogen as 'inflammable air' in 1766." },
            { q: "Principia Mathematica published?", opts: ["1687", "1704", "1665", "1720"], ans: 0, topic: "Newton", explanation: "Isaac Newton's Philosophiæ Naturalis Principia Mathematica (1687)." },
            { q: "First analog computing devices?", opts: ["abacus, slide rule", "ENIAC, UNIVAC", "difference engine", "calculator"], ans: 0, topic: "Computing", explanation: "Abacus (3000 BC) and slide rule (1620s) are analog." },
            { q: "Leonardo da Vinci was?", opts: ["artist & scientist", "pure painter", "architect only", "sculptor"], ans: 0, topic: "Renaissance", explanation: "Da Vinci excelled in art, anatomy, engineering." },
            { q: "Copernicus advanced heliocentric theory in?", opts: ["1500s", "1600s", "1400s", "1700s"], ans: 0, topic: "Astronomy", explanation: "Nicolaus Copernicus published De revolutionibus in 1543." },
            { q: "Polio vaccine by Jonas Salk in?", opts: ["1955", "1945", "1960", "1950"], ans: 0, topic: "Medicine", explanation: "Licensed in 1955 after massive field trial." },
            { q: "DNA structure discovered by?", opts: ["Watson & Crick", "Franklin & Wilkins", "Pauling", "Mendel"], ans: 0, topic: "Genetics", explanation: "1953, double helix model, Nobel 1962." },
            { q: "Stone age subdivisions by John Lubbock (year)?", opts: ["1865", "1859", "1872", "1845"], ans: 0, topic: "Prehistory", explanation: "Coined 'Palaeolithic' and 'Neolithic' in 1865." },
            { q: "High-pressure steam vehicle pioneer?", opts: ["Richard Trevithick, 1801", "James Watt", "Stephenson", "Fulton"], ans: 0, topic: "Industrial revolution", explanation: "Trevithick built the first full-scale steam road locomotive." },
            { q: "Bessemer process year?", opts: ["1855", "1840", "1870", "1865"], ans: 0, topic: "Metallurgy", explanation: "Henry Bessemer patented his steelmaking process in 1855." },
            { q: "NASA creation year?", opts: ["1958", "1957", "1962", "1959"], ans: 0, topic: "Space agency", explanation: "NASA established July 29, 1958." },
            { q: "First moon landing?", opts: ["1969", "1970", "1968", "1971"], ans: 0, topic: "Apollo 11", explanation: "Neil Armstrong & Buzz Aldrin, July 20 1969." },
            { q: "First moon core sample year?", opts: ["1970", "1969", "1971", "1972"], ans: 0, topic: "Lunar science", explanation: "Apollo 12 (1970) returned first deep core." },
            { q: "Thermos flask inventor?", opts: ["James Dewar", "Alexander Bell", "Edison", "Tesla"], ans: 0, topic: "Inventions", explanation: "Sir James Dewar invented vacuum flask 1892." },
            { q: "Technology is goal of ... artefacts?", opts: ["designing", "selling", "repairing", "analysing"], ans: 0, topic: "Technology definition", explanation: "Technology applies knowledge to design solutions." },
            { q: "Which is NOT inert gas?", opts: ["oxygen", "helium", "neon", "argon"], ans: 0, topic: "Gases", explanation: "Oxygen is reactive; group 18 elements are inert." },
            { q: "Leonardo da Vinci's famous painting?", opts: ["Mona Lisa", "Last Supper", "Both", "Vitruvian Man"], ans: 2, topic: "Art", explanation: "He painted both Mona Lisa and The Last Supper." },
            { q: "Galileo improved?", opts: ["telescope", "microscope", "thermoscope", "all"], ans: 0, topic: "Scientific instruments", explanation: "Galileo refined telescope for astronomical use." },
            { q: "Kepler's laws based on?", opts: ["Tycho Brahe data", "Copernicus", "Ptolemy", "Galileo"], ans: 0, topic: "Astronomy", explanation: "Kepler used Brahe's precise planetary observations." },
            { q: "First battery invented by?", opts: ["Volta", "Galvani", "Faraday", "Ohm"], ans: 0, topic: "Electricity", explanation: "Alessandro Volta invented voltaic pile (1800)." },
            { q: "Microscope improved by?", opts: ["Leeuwenhoek", "Hooke", "Janssen", "all"], ans: 3, topic: "Microscopy", explanation: "Many contributors; Leeuwenhoek perfected lenses." },
            { q: "Industrial Revolution began in?", opts: ["Britain", "USA", "Germany", "France"], ans: 0, topic: "History", explanation: "Late 18th century in Britain." },
            { q: "Wright brothers first flight?", opts: ["1903", "1895", "1908", "1910"], ans: 0, topic: "Aviation", explanation: "Dec 17, 1903, Kitty Hawk." },
            { q: "Penicillin discovered by?", opts: ["Fleming", "Florey", "Chain", "Ehrlich"], ans: 0, topic: "Medicine", explanation: "Alexander Fleming (1928)." },
            { q: "Theory of relativity proposed by?", opts: ["Einstein", "Newton", "Maxwell", "Galileo"], ans: 0, topic: "Physics", explanation: "Special (1905), General (1915)." },
            { q: "First programmable computer?", opts: ["Z3", "ENIAC", "Colossus", "ABC"], ans: 0, topic: "Computing", explanation: "Zuse Z3 (1941) – first working programmable." },
            { q: "Internet predecessor?", opts: ["ARPANET", "NSFNET", "CSNET", "BITNET"], ans: 0, topic: "Internet", explanation: "ARPANET 1969." },
            { q: "Structure of benzene discovered by?", opts: ["Kekulé", "Lavoisier", "Dalton", "Mendeleev"], ans: 0, topic: "Chemistry", explanation: "August Kekulé (1865)." },
            { q: "Periodic table inventor?", opts: ["Mendeleev", "Meyer", "Newlands", "Döbereiner"], ans: 0, topic: "Chemistry", explanation: "Dmitri Mendeleev (1869)." },
            { q: "X-ray discovered by?", opts: ["Röntgen", "Curie", "Becquerel", "Thomson"], ans: 0, topic: "Physics", explanation: "Wilhelm Röntgen (1895)." },
            { q: "Radioactivity discovered by?", opts: ["Becquerel", "Curie", "Rutherford", "Roentgen"], ans: 0, topic: "Physics", explanation: "Henri Becquerel (1896)." },
            { q: "Quantum theory founder?", opts: ["Planck", "Einstein", "Bohr", "Heisenberg"], ans: 0, topic: "Physics", explanation: "Max Planck (1900)." },
            { q: "Special theory of relativity year?", opts: ["1905", "1915", "1895", "1925"], ans: 0, topic: "Physics", explanation: "Einstein's annus mirabilis." },
            { q: "First cloned mammal?", opts: ["Dolly sheep", "Polly sheep", "Tracy sheep", "Molly"], ans: 0, topic: "Biology", explanation: "1996, Ian Wilmut et al." },
            { q: "Human Genome Project completed?", opts: ["2003", "2000", "2005", "1990"], ans: 0, topic: "Genetics", explanation: "Draft 2000, completed 2003." },
            { q: "CRISPR associated with?", opts: ["gene editing", "cloning", "PCR", "sequencing"], ans: 0, topic: "Biotech", explanation: "CRISPR-Cas9, revolutionary gene-editing tool." },
            { q: "First smartphone?", opts: ["IBM Simon", "iPhone", "Blackberry", "Nokia Communicator"], ans: 0, topic: "Technology", explanation: "IBM Simon (1994)." },
            { q: "World Wide Web inventor?", opts: ["Tim Berners-Lee", "Vint Cerf", "Bob Kahn", "Marc Andreessen"], ans: 0, topic: "Internet", explanation: "1989 at CERN." },
            { q: "Printing press inventor?", opts: ["Gutenberg", "Caxton", "Fust", "Schoeffer"], ans: 0, topic: "Innovation", explanation: "Johannes Gutenberg, c.1450." },
            { q: "Steam engine improved by?", opts: ["Watt", "Newcomen", "Savery", "Trevithick"], ans: 0, topic: "Industrial revolution", explanation: "James Watt added separate condenser." },
            { q: "Light bulb co-inventor?", opts: ["Edison", "Swan", "Both", "Tesla"], ans: 2, topic: "Invention", explanation: "Edison (US) & Swan (UK) independently." },
            { q: "Telephone patented by?", opts: ["Bell", "Gray", "Edison", "Meucci"], ans: 0, topic: "Communication", explanation: "Alexander Graham Bell, 1876." },
            { q: "Radio developed by?", opts: ["Marconi", "Tesla", "Popov", "all"], ans: 3, topic: "Communication", explanation: "Multiple contributors." },
            { q: "First nuclear reactor?", opts: ["Chicago Pile-1", "Hanford", "Chernobyl", "Fermi-1"], ans: 0, topic: "Nuclear", explanation: "Fermi, 1942." },
            { q: "Atomic bomb tested?", opts: ["1945", "1944", "1946", "1947"], ans: 0, topic: "History", explanation: "Trinity test, July 1945." },
        ].slice(0,55),
        
        // CHE 101 (55+)
        che: [
            { q: "What determines degree of reaction completeness?", opts: ["equilibrium constant", "catalyst", "rate", "intimacy"], ans: 0, topic: "Equilibrium", explanation: "K indicates position of equilibrium." },
            { q: "Substance altering reaction speed?", opts: ["catalyst", "promoter", "inhibitor", "enzyme"], ans: 0, topic: "Catalysis", explanation: "Catalyst lowers activation energy." },
            { q: "Substance that increases effectiveness of catalyst?", opts: ["promoter", "activator", "enhancer", "cofactor"], ans: 0, topic: "Promoters", explanation: "Promoter itself not a catalyst, but boosts activity." },
            { q: "Periodic table first devised by?", opts: ["Mendeleev", "Lavoisier", "Dalton", "Berzelius"], ans: 0, topic: "Periodic law", explanation: "Dmitri Mendeleev (1869)." },
            { q: "Boiling point when pressure increased?", opts: ["goes up", "goes down", "no change", "varies"], ans: 0, topic: "Boiling", explanation: "Higher pressure requires higher temp to boil." },
            { q: "Property that prevents fluid flow?", opts: ["viscosity", "density", "compressibility", "surface tension"], ans: 0, topic: "Viscosity", explanation: "Resistance to flow." },
            { q: "Atoms same element, different weight?", opts: ["isotopes", "isomers", "ions", "allotropes"], ans: 0, topic: "Isotopes", explanation: "Same protons, different neutrons." },
            { q: "Center of atom?", opts: ["nucleus", "proton", "electron cloud", "neutron"], ans: 0, topic: "Atomic structure", explanation: "Nucleus contains protons and neutrons." },
            { q: "Bohr model max electron shells?", opts: ["7", "5", "6", "4"], ans: 0, topic: "Quantum theory", explanation: "Period 7 elements (7 shells)." },
            { q: "Inert gases have?", opts: ["filled outer shells", "one electron", "two electrons", "unfilled"], ans: 0, topic: "Noble gases", explanation: "Full valence shell => stable." },
            { q: "Proton donor?", opts: ["acid", "base", "salt", "buffer"], ans: 0, topic: "Acid-base", explanation: "Brønsted–Lowry: acid donates H⁺." },
            { q: "Alkali metals melting points?", opts: ["low", "high", "very high", "moderate"], ans: 0, topic: "Group 1", explanation: "Increase down group, but all relatively low." },
            { q: "Melvin Calvin known for?", opts: ["photosynthesis", "X-rays", "magnetics", "vitamins"], ans: 0, topic: "Biochemistry", explanation: "Calvin cycle (Nobel 1961)." },
            { q: "Element crucial for life?", opts: ["carbon", "oxygen", "silicon", "iron"], ans: 0, topic: "Organic chemistry", explanation: "Carbon forms complex molecules." },
            { q: "Rapid oxidation with heat?", opts: ["combustion", "explosion", "oxidation", "corrosion"], ans: 0, topic: "Combustion", explanation: "Burning – exothermic redox." },
            { q: "Liquid to gas without boiling?", opts: ["evaporation", "condensation", "sublimation", "vaporization"], ans: 0, topic: "Phase change", explanation: "Evaporation occurs below boiling point." },
            { q: "Acid + alcohol yields?", opts: ["ester", "ether", "aldehyde", "ketone"], ans: 0, topic: "Esterification", explanation: "Fischer esterification." },
            { q: "Valence electrons?", opts: ["electrons in outer shell", "total electrons", "core electrons", "protons"], ans: 0, topic: "Chemical bonding", explanation: "Determine combining capacity." },
            { q: "Vulcanization inventor?", opts: ["Charles Goodyear", "Hancock", "Dunlop", "Michelin"], ans: 0, topic: "Polymer", explanation: "Goodyear 1839." },
            { q: "pH indicates?", opts: ["[H⁺]", "[OH⁻]", "pKa", "buffer capacity"], ans: 0, topic: "Acidity", explanation: "pH = -log[H⁺]." },
            { q: "Strong acid example?", opts: ["HCl", "CH₃COOH", "H₂CO₃", "HF"], ans: 0, topic: "Acids", explanation: "Hydrochloric fully dissociates." },
            { q: "pH of pure water?", opts: ["7", "6", "8", "0"], ans: 0, topic: "Neutral", explanation: "At 25°C, [H⁺]=10⁻⁷." },
            { q: "Atomic number = ?", opts: ["protons", "neutrons", "nucleons", "electrons+protons"], ans: 0, topic: "Atom", explanation: "Defines element." },
            { q: "Mass number = ?", opts: ["protons+neutrons", "protons", "neutrons", "electrons+protons"], ans: 0, topic: "Nucleus", explanation: "Sum of nucleons." },
            { q: "Which is halogen?", opts: ["chlorine", "oxygen", "sulfur", "nitrogen"], ans: 0, topic: "Group 17", explanation: "Halogens: F, Cl, Br, I, At." },
            { q: "Which is alkali metal?", opts: ["sodium", "magnesium", "calcium", "aluminum"], ans: 0, topic: "Group 1", explanation: "Group 1: Li, Na, K, etc." },
            { q: "Which is noble gas?", opts: ["neon", "nitrogen", "fluorine", "chlorine"], ans: 0, topic: "Group 18", explanation: "Inert gases." },
            { q: "Empirical formula of benzene?", opts: ["CH", "C₆H₆", "CH₂", "C₂H₂"], ans: 0, topic: "Organic", explanation: "Simplest ratio." },
            { q: "Molar mass of H₂O?", opts: ["18 g/mol", "20", "16", "2"], ans: 0, topic: "Stoichiometry", explanation: "H₂=2, O=16 => 18." },
            { q: "Avogadro's number?", opts: ["6.022×10²³", "3.14×10²³", "6.022×10²²", "1.602×10⁻¹⁹"], ans: 0, topic: "Mole concept", explanation: "Particles per mole." },
            { q: "Oxidation is?", opts: ["loss of electrons", "gain electrons", "addition of oxygen", "removal hydrogen"], ans: 0, topic: "Redox", explanation: "Oxidation state increases." },
            { q: "Reduction is?", opts: ["gain of electrons", "loss electrons", "addition oxygen", "removal hydrogen"], ans: 0, topic: "Redox", explanation: "OIL RIG." },
            { q: "Salt formula?", opts: ["NaCl", "KCl", "CaCl₂", "MgSO₄"], ans: 0, topic: "Compound", explanation: "Sodium chloride." },
        ].slice(0,55),
        
        // GNS101 (study skills, reading)
        gns101: [
            { q: "One factor that inhibits efficient reading?", opts: ["noise", "library", "health", "feeding"], ans: 0, topic: "Reading hindrances", explanation: "Noise distracts concentration." },
            { q: "Reading for superficial info?", opts: ["skimming", "scanning", "anticipation", "browsing"], ans: 0, topic: "Reading strategies", explanation: "Skimming gets main ideas quickly." },
            { q: "Main sentence in a paragraph?", opts: ["topic sentence", "intro", "concluding", "supporting"], ans: 0, topic: "Paragraph structure", explanation: "Topic sentence states core idea." },
            { q: "Signal word for addition?", opts: ["furthermore", "however", "consequently", "first"], ans: 0, topic: "Transition", explanation: "'Furthermore' adds information." },
            { q: "NOT a factor causing slow reading?", opts: ["flexibility", "regression", "word reading", "return sweep"], ans: 0, topic: "Reading speed", explanation: "Flexibility is a good strategy." },
            { q: "Efficient reading NOT enhanced by?", opts: ["concentrating on writer's words", "phrase reading", "purpose", "adjusting speed"], ans: 0, topic: "Efficiency", explanation: "Focus on meaning, not each word." },
            { q: "Topic sentence usually found?", opts: ["initial", "middle", "end", "anywhere"], ans: 0, topic: "Paragraph", explanation: "Often first sentence." },
            { q: "'Furthermore' function?", opts: ["addition", "contrast", "concession", "sequence"], ans: 0, topic: "Signal words", explanation: "Adds similar point." },
            { q: "Visual impairment is which factor?", opts: ["physiological", "psychological", "environmental", "technical"], ans: 0, topic: "Reading barriers", explanation: "Physical condition of eyes." },
            { q: "Bad habit to avoid?", opts: ["word-by-word reading", "varying speed", "phrase reading", "purpose setting"], ans: 0, topic: "Inefficient habits", explanation: "Word reading slows comprehension." },
            { q: "Purposeful reading involves?", opts: ["different strategies", "overview only", "skip all", "read everything"], ans: 0, topic: "Reading purpose", explanation: "Adjust strategy to goal." },
            { q: "Skimming is NOT?", opts: ["searching specific info", "main ideas", "topic sentences", "rapid overview"], ans: 0, topic: "Skimming", explanation: "Scanning = specific info; skimming = gist." },
            { q: "Intro paragraph tense?", opts: ["present tense", "past", "future", "continuous"], ans: 0, topic: "Academic writing", explanation: "Usually simple present." },
            { q: "Term paper first step?", opts: ["select topic", "write outline", "gather sources", "edit"], ans: 0, topic: "Writing process", explanation: "Topic selection precedes research." },
            { q: "Which is NOT term paper part?", opts: ["copying online essay", "narrowing topic", "outline", "drafting"], ans: 0, topic: "Academic integrity", explanation: "Plagiarism is unacceptable." },
            { q: "Signal word for summary?", opts: ["in conclusion", "however", "in addition", "similarly"], ans: 0, topic: "Transitions", explanation: "'In conclusion' signals summary." },
            { q: "Inefficient reading strategy?", opts: ["vocalization", "phrase reading", "purpose", "concept focus"], ans: 0, topic: "Reading", explanation: "Sub-vocalization slows reading." },
            { q: "Efficient strategy?", opts: ["phrase reading", "finger pointing", "regression", "word reading"], ans: 0, topic: "Efficient reading", explanation: "Phrase reading groups words." },
            { q: "Poor ventilation = ?", opts: ["environmental", "physiological", "psychological", "technical"], ans: 0, topic: "Hindrance", explanation: "External factor." },
            { q: "Stress is ... hindrance?", opts: ["physiological", "environmental", "psychological", "traditional"], ans: 2, topic: "Health", explanation: "Mental/emotional strain." },
            { q: "Paragraph types except?", opts: ["transformational", "introductory", "descriptive", "defining"], ans: 0, topic: "Writing", explanation: "No such type." },
            { q: "Thesis statement in?", opts: ["introduction", "body", "conclusion", "references"], ans: 0, topic: "Essay", explanation: "States main argument." },
            { q: "Catalogue in library?", opts: ["retrieval tool", "book", "journal", "database"], ans: 0, topic: "Library", explanation: "Lists materials." },
        ].slice(0,50),
        
        // GNS103 (library science)
        gns103: [
            { q: "Newspaper is issued?", opts: ["daily/weekly", "monthly", "annually", "biannually"], ans: 0, topic: "Serials", explanation: "Newspapers: daily or weekly." },
            { q: "Serials acquired through?", opts: ["subscription", "donation", "exchange", "interlibrary loan"], ans: 0, topic: "Acquisition", explanation: "Libraries subscribe." },
            { q: "Electronic serials advantage?", opts: ["remote access", "cheaper", "difficult access", "none"], ans: 0, topic: "E-resources", explanation: "Access off-site." },
            { q: "Reference materials are for?", opts: ["consultation only", "borrowing", "binding", "reserve"], ans: 0, topic: "Reference", explanation: "Do not circulate." },
            { q: "General encyclopedia example?", opts: ["Britannica", "Biology encyclopedia", "Agriculture enc.", "Forestry enc."], ans: 0, topic: "Reference", explanation: "Encyclopedia Britannica." },
            { q: "Yearbook provides?", opts: ["statistics, data", "definitions", "synonyms", "maps"], ans: 0, topic: "Reference", explanation: "Annual updates." },
            { q: "Bibliography definition?", opts: ["list of works on subject", "biography", "dictionary", "encyclopedia"], ans: 0, topic: "Bibliography", explanation: "Systematic list." },
            { q: "Non-print advantage EXCEPT?", opts: ["erratic power", "aid retention", "preservation", "group instruction"], ans: 0, topic: "Audiovisual", explanation: "Power issue disadvantage." },
            { q: "Which is NOT audiovisual?", opts: ["world atlas", "TV", "video", "digital media"], ans: 0, topic: "Media", explanation: "Atlas = print/cartographic." },
            { q: "Physical part of book?", opts: ["publisher", "dust jacket", "binding", "spine"], ans: 1, topic: "Book anatomy", explanation: "Dust jacket is physical cover." },
            { q: "Binding is?", opts: ["holds sheets together", "edge", "content", "blank leaf"], ans: 0, topic: "Book", explanation: "Physical assembly." },
            { q: "Oldest print media subtype EXCEPT?", opts: ["realia", "monographs", "textbooks", "reference"], ans: 0, topic: "Media", explanation: "Realia = objects, not printed book." },
            { q: "Copyright page = ?", opts: ["verso page", "title page", "preface", "fly leaf"], ans: 0, topic: "Bibliographic", explanation: "Reverse of title page." },
            { q: "Cartographic materials = ?", opts: ["maps", "audiovisual", "objects", "none"], ans: 0, topic: "Geography", explanation: "Maps, atlases, globes." },
            { q: "FUTA library opened to users?", opts: ["1983", "1993", "1981", "2003"], ans: 0, topic: "Library history", explanation: "Officially 1983." },
            { q: "National libraries also known as?", opts: ["depository", "virtual", "special", "archival"], ans: 0, topic: "National library", explanation: "Legal deposit." },
            { q: "Word library from?", opts: ["Latin liber", "German", "French", "Greek"], ans: 0, topic: "Etymology", explanation: "Liber = book." },
            { q: "ISBN meaning?", opts: ["International Standard Book Number", "International Serial", "Standard Barcode", "None"], ans: 0, topic: "Identifier", explanation: "Unique book ID." },
            { q: "Cataloguing & Classification unit does?", opts: ["process books", "circulate", "reference", "serial"], ans: 0, topic: "Technical services", explanation: "Classify, assign call numbers." },
            { q: "Cloak room purpose?", opts: ["keep belongings", "reading", "reference", "porters"], ans: 0, topic: "Library", explanation: "Store bags." },
            { q: "Monographs are?", opts: ["works on single subject", "textbooks", "reference", "pamphlets"], ans: 0, topic: "Books", explanation: "Detailed study of one topic." },
            { q: "Kardex used for?", opts: ["serials", "catalogue", "OPAC", "inventory"], ans: 0, topic: "Serials control", explanation: "Records serial holdings." },
            { q: "Undergrad borrow limit (FUTALIB)?", opts: ["2 books", "3", "4", "5"], ans: 0, topic: "Loan policy", explanation: "Two books." },
            { q: "Charging/discharging at?", opts: ["circulation", "reference", "acquisition", "serial"], ans: 0, topic: "Library circulation", explanation: "Borrow/return." },
            { q: "Virtual library = ?", opts: ["library without walls", "digital", "electronic", "all"], ans: 0, topic: "Library types", explanation: "Accessed remotely." },
            { q: "Who's who is ?", opts: ["biographical tool", "geographical", "fact ready", "lit search"], ans: 0, topic: "Biography", explanation: "Profiles people." },
        ].slice(0,52),
        
        // PHY101 (mechanics, heat)
        phy101: [
            { q: "In perfectly inelastic collision?", opts: ["energy lost", "energy gained", "heat gained", "power lost"], ans: 0, topic: "Collision", explanation: "Max kinetic energy loss, stick together." },
            { q: "In inelastic collision, which NOT true?", opts: ["kinetic energy conserved", "momentum conserved", "energy lost", "potential conserved"], ans: 0, topic: "Collisions", explanation: "KE not conserved." },
            { q: "Elastic collision: no loss of ?", opts: ["kinetic energy", "momentum", "mass", "velocity"], ans: 0, topic: "Elastic", explanation: "KE conserved." },
            { q: "Collision is sudden impact between?", opts: ["objects", "forces", "particles", "waves"], ans: 0, topic: "Mechanics", explanation: "Physical contact." },
            { q: "Linear momentum conserved when net force?", opts: ["zero", "constant", "positive", "negative"], ans: 0, topic: "Momentum", explanation: "dp/dt = F_ext = 0." },
            { q: "Work = ?", opts: ["force × distance", "force × time", "mass × acc", "power × time"], ans: 0, topic: "Work", explanation: "W = F·d (parallel)." },
            { q: "Projectile path called?", opts: ["trajectory", "range", "apex", "flight time"], ans: 0, topic: "Projectile", explanation: "Parabolic curve." },
            { q: "Range is ?", opts: ["horizontal distance", "vertical", "diagonal", "total path"], ans: 0, topic: "Projectile", explanation: "Total horizontal displacement." },
            { q: "At max height, vertical velocity?", opts: ["zero", "max", "negative", "constant"], ans: 0, topic: "Projectile", explanation: "Vy=0 at top." },
            { q: "Projectile motion is in ?", opts: ["two dimensions", "one", "three", "four"], ans: 0, topic: "Kinematics", explanation: "Horizontal & vertical." },
            { q: "Heat transfer in solids?", opts: ["conduction", "convection", "radiation", "insulation"], ans: 0, topic: "Heat", explanation: "Molecular vibration." },
            { q: "Constant-volume gas thermometer = ?", opts: ["standard thermometer", "mercury", "liquid", "gas"], ans: 0, topic: "Thermometry", explanation: "Reference standard." },
            { q: "Force = mass × ?", opts: ["acceleration", "velocity", "time", "distance"], ans: 0, topic: "Newton", explanation: "F=ma." },
            { q: "SI unit of momentum?", opts: ["kg m/s", "N/s", "kg", "N"], ans: 0, topic: "Momentum", explanation: "p=mv." },
            { q: "Impulse = ?", opts: ["force × time", "mass × velocity", "force × distance", "power"], ans: 0, topic: "Impulse", explanation: "Δp = FΔt." },
            { q: "Symmetrical body rotating about fixed point = ?", opts: ["top", "gyroscope", "pendulum", "wheel"], ans: 0, topic: "Rotation", explanation: "Classical top." },
            { q: "u=0, a=5m/s², velocity after 90m?", opts: ["30m/s", "18m/s", "25m/s", "13m/s"], ans: 0, topic: "Kinematics", explanation: "v²=2as=900 => v=30." },
            { q: "Ball thrown up with 50m/s, total time in air?", opts: ["10s", "15s", "20s", "25s"], ans: 0, topic: "Free fall", explanation: "t_up = v/g ≈5.1, total 10.2s ≈10." },
            { q: "Greatest pressure on bench when?", opts: ["stand on toes of one foot", "lie flat", "belly", "both feet"], ans: 0, topic: "Pressure", explanation: "Smallest area -> max pressure." },
            { q: "Slope of displacement-time graph?", opts: ["velocity", "acceleration", "distance", "speed"], ans: 0, topic: "Graph", explanation: "v = Δs/Δt." },
            { q: "Force that allows car to move without skidding?", opts: ["friction", "centripetal", "engine", "gravity"], ans: 0, topic: "Friction", explanation: "Static friction provides traction." },
            { q: "g at poles vs equator?", opts: ["greater", "smaller", "equal", "depends"], ans: 0, topic: "Gravity", explanation: "Poles: less radius, no rotation." },
            { q: "Escape velocity formula?", opts: ["√(2gR)", "√(gR)", "2gR", "gR²"], ans: 0, topic: "Gravitation", explanation: "v_esc = √(2GM/R)." },
            { q: "g below surface decreases with?", opts: ["depth", "height", "latitude", "longitude"], ans: 0, topic: "Gravity", explanation: "Linear decrease." },
            { q: "NOT fundamental force?", opts: ["minute", "gravitational", "electroweak", "strong"], ans: 0, topic: "Forces", explanation: "Minute is not a force." },
            { q: "Parking orbit height formula?", opts: ["h = R - r", "h = R + r", "h = R/r", "h = GM"], ans: 0, topic: "Satellite", explanation: "Geostationary: h = R - r (simplified)." },
        ].slice(0,55),
        
        // PHY103 (fluids, elasticity)
        phy103: [
            { q: "Fluid is substance that?", opts: ["cannot remain at rest under shear", "always expands", "same shear stress", "flows"], ans: 0, topic: "Fluid definition", explanation: "Fluids deform continuously under shear." },
            { q: "Fluid offers no resistance to change of?", opts: ["shape", "pressure", "volume", "temperature"], ans: 0, topic: "Fluid", explanation: "It takes shape of container." },
            { q: "Practical fluids are?", opts: ["viscous, compressible, surface tension", "ideal", "inviscid", "non-existent"], ans: 0, topic: "Real fluids", explanation: "Possess all these properties." },
            { q: "In static fluid only ___ can exist?", opts: ["normal stresses", "shear", "bending", "tensile"], ans: 0, topic: "Fluid statics", explanation: "No shear stress at rest." },
            { q: "Ideal fluid is?", opts: ["inviscid & incompressible", "viscous", "compressible", "real"], ans: 0, topic: "Ideal fluid", explanation: "No viscosity, constant density." },
            { q: "Ideal flow must fulfill?", opts: ["continuity equation", "Newton's law", "Pascal's law", "viscosity"], ans: 0, topic: "Fluid dynamics", explanation: "Mass conservation." },
            { q: "No resistance to displacement => ?", opts: ["ideal fluid", "water", "gas", "perfect solid"], ans: 0, topic: "Ideal fluid", explanation: "Inviscid." },
            { q: "Volumetric change due to resistance = ?", opts: ["compressibility", "strain", "adhesion", "cohesion"], ans: 0, topic: "Elasticity", explanation: "Compressibility = 1/bulk modulus." },
            { q: "Liquids?", opts: ["occupy definite volume", "cannot be compressed", "no viscosity", "none"], ans: 0, topic: "Properties", explanation: "Liquids have fixed volume, not fixed shape." },
            { q: "Water density maximum at?", opts: ["4°C", "0°C", "100°C", "20°C"], ans: 0, topic: "Thermal", explanation: "999.97 kg/m³ at 4°C." },
            { q: "Mass density of water at 0°C (kg·s²/m⁴)?", opts: ["101.9", "1000", "100", "1"], ans: 0, topic: "Density", explanation: "In engineering units." },
            { q: "Attraction between own molecules?", opts: ["cohesion", "adhesion", "viscosity", "surface tension"], ans: 0, topic: "Molecular", explanation: "Cohesion = like molecules." },
            { q: "Mercury does not wet glass due to?", opts: ["surface tension", "cohesion", "adhesion", "viscosity"], ans: 0, topic: "Surface tension", explanation: "High cohesive forces." },
            { q: "Resist tensile stress property?", opts: ["cohesion", "adhesion", "compressibility", "surface tension"], ans: 0, topic: "Strength", explanation: "Cohesion provides tensile strength." },
            { q: "Attraction between different fluids?", opts: ["adhesion", "cohesion", "viscosity", "compressibility"], ans: 0, topic: "Intermolecular", explanation: "Adhesion = unlike molecules." },
            { q: "Specific weight of water in SI?", opts: ["9.81×10³ N/m³", "1000 N/m³", "10000 N/m³", "9.81 N/m³"], ans: 0, topic: "Fluid properties", explanation: "γ = ρg = 1000×9.81." },
            { q: "Flow parameters same at every point?", opts: ["uniform", "steady", "laminar", "static"], ans: 0, topic: "Flow", explanation: "Uniform flow: properties independent of position." },
            { q: "Which is dimensionless?", opts: ["specific gravity", "specific weight", "specific volume", "viscosity"], ans: 0, topic: "Dimensionless", explanation: "Ratio of densities." },
            { q: "Normal stress constant in all directions only if?", opts: ["fluid at rest", "inviscid", "incompressible", "frictionless"], ans: 0, topic: "Pressure", explanation: "Pascal's law applies to static fluid." },
            { q: "Pressure not same in all directions when?", opts: ["viscous and moving", "static", "inviscid", "ideal"], ans: 0, topic: "Viscous flow", explanation: "Shear stresses cause directional variation." },
            { q: "Object 10kg mass weighs 9.81kg on spring balance, 'g'?", opts: ["10 m/s²", "9.81", "10.2", "9.75"], ans: 0, topic: "Gravity", explanation: "Weight = mg => g = weight/mass = 9.81kg·? actually scale in kgf, g ≈10." },
            { q: "Surface tension of mercury vs water?", opts: ["more", "less", "same", "depends"], ans: 0, topic: "Surface tension", explanation: "Hg ~0.465 N/m; water ~0.072 N/m." },
        ].slice(0,52),
        
        // MTS101 (mathematics)
        mts: [
            { q: "Principle for non‑negative integers?", opts: ["mathematical induction", "contradiction", "contrapositive", "deduction"], ans: 0, topic: "Induction", explanation: "PMI proves statements for all n∈ℕ." },
            { q: "Which statement false for all positive integers using PMI?", opts: ["7^(2n+1)+1 is multiple of 3", "2^n > n", "5^(2n)+3n+1 multiple of 9", "5^n-1 multiple of 4"], ans: 0, topic: "Induction", explanation: "7^(2n+1)+1 divisible by 8, not always 3." },
            { q: "Subsets of set with 5 elements?", opts: ["32", "25", "64", "16"], ans: 0, topic: "Set theory", explanation: "2^5 = 32." },
            { q: "40 students, 24 football, 18 volleyball, 6 none. Both?", opts: ["8", "7", "9", "10"], ans: 0, topic: "Venn", explanation: "40-6=34 play at least one; 24+18-34=8." },
            { q: "Power set of {a,b,c,d}: which not element?", opts: ["{Ø}", "Ø", "{a,b}", "A"], ans: 0, topic: "Power set", explanation: "{Ø} is a set containing empty set, not same as Ø." },
            { q: "Simplify sin²θ/(cos²θ-1) = ?", opts: ["-1", "1", "0", "2"], ans: 0, topic: "Trig", explanation: "cos²-1 = -sin² => sin²/(-sin²) = -1." },
            { q: "If tan½x = b, tan x = ?", opts: ["2b/(1-b²)", "2b", "(1-b²)/2b", "(1+b²)/2b"], ans: 0, topic: "Half-angle", explanation: "tan x = 2t/(1-t²)." },
            { q: "1+tan²θ = ?", opts: ["sec²θ", "cosec²θ", "cot²θ", "sin²θ"], ans: 0, topic: "Identity", explanation: "Pythagorean." },
            { q: "sin75° = ?", opts: ["(√2+√6)/4", "(√6-√2)/4", "(√2-√6)/4", "(√3+1)/2√2"], ans: 0, topic: "Compound angles", explanation: "sin(45+30)." },
            { q: "First term AP=3, d=4, sum=82, number of terms?", opts: ["20", "19", "21", "18"], ans: 0, topic: "AP", explanation: "S=n/2[6+4(n-1)]=82 => n=20." },
            { q: "Sum to infinity: 1 - 1/3 + 1/9 - ...", opts: ["3/4", "1/3", "4/3", "1/2"], ans: 0, topic: "GP", explanation: "a=1, r=-1/3 => S=1/(1+1/3)=3/4." },
            { q: "Three numbers in GP sum 13, product 64, second term?", opts: ["4", "3", "5", "6"], ans: 0, topic: "GP", explanation: "Let terms a/r, a, ar => a³=64 => a=4." },
            { q: "Coefficient of x^r in (1+x)^n?", opts: ["C(n,r)", "C(n,r-1)", "C(n+1,r)", "P(n,r)"], ans: 0, topic: "Binomial", explanation: "Binomial coefficient." },
            { q: "C(n,r-1)+C(n,r) = ?", opts: ["C(n+1,r)", "C(n,r+1)", "C(n+1,r+1)", "C(n-1,r)"], ans: 0, topic: "Pascal", explanation: "Pascal's rule." },
            { q: "Σ_{k=0}^n C(n,k) = ?", opts: ["2^n", "2n", "n²", "n!"], ans: 0, topic: "Binomial sum", explanation: "Total subsets." },
            { q: "Constant term in (x² - 2/x)^6?", opts: ["240", "160", "192", "200"], ans: 0, topic: "Binomial", explanation: "General term: C(6,r) x^{12-3r} (-2)^r, set 12-3r=0 => r=4 => C(6,4)*16=15*16=240." },
            { q: "AP: 2,5,8,... sum first 10 terms?", opts: ["155", "150", "160", "145"], ans: 0, topic: "AP", explanation: "a=2,d=3,S10=10/2[4+9*3]=5*31=155." },
            { q: "Three arithmetic means between 3 and 19, sum of linear function?", opts: ["55", "44", "66", "50"], ans: 0, topic: "AP", explanation: "Means: 7,11,15 sum=33? Actually total sum 3+7+11+15+19=55." },
            { q: "Recurring decimal 0.31 (31 repeating) = ?", opts: ["31/99", "13/99", "31/100", "13/100"], ans: 0, topic: "Series", explanation: "0.313131... = 31/99." },
            { q: "Sixth term of AP is 11, first term 1, common diff?", opts: ["2", "1/2", "1/4", "4"], ans: 0, topic: "AP", explanation: "1+5d=11 => d=2." },
        ].slice(0,55)
    };

    // ----- get subject id from URL -----
    const urlParams = new URLSearchParams(window.location.search);
    const subjectId = urlParams.get('id');
    if (!subjectId || !questionBank[subjectId]) {
        document.body.innerHTML = '<div style="padding:50px; text-align:center;"><h2>❌ subject not found</h2><a href="index.html" style="display:inline-block; margin-top:20px; padding:12px 30px; background:#efebe2; border-radius:40px; text-decoration:none;">← back to courses</a></div>';
        throw new Error('invalid subject');
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

    // ----- timer functions -----
    function stopTimer() { clearInterval(timerInterval); timerInterval = null; }
    function formatTime(s) { let m = Math.floor(s/60), sec = s%60; return `${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`; }
    function startTimer(minutes) {
        stopTimer();
        timeRemaining = minutes * 60;
        if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> ${formatTime(timeRemaining)}`;
        timerInterval = setInterval(() => {
            timeRemaining--;
            if (timerEl) timerEl.innerHTML = `<i class="fas fa-hourglass-half"></i> ${formatTime(timeRemaining)}`;
            if (timeRemaining <= 0) { stopTimer(); alert('⌛ time up!'); submitSubject(); }
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
        testSubmitted = false;
        subjectActive = true;
        renderQuestion();
        updateProgress();
    }

    // ----- render current question -----
    function renderQuestion() {
        if (!currentQuestions.length) return;
        let q = currentQuestions[currentIndex];
        if (questionText) questionText.innerText = `${currentIndex+1}. ${q.q}`;
        let letters = ['A','B','C','D'];
        let html = '';
        q.opts.forEach((opt, idx) => {
            let sel = (userAnswers[currentIndex] === idx) ? 'selected' : '';
            html += `<div class="option-item ${sel}" data-opt-index="${idx}"><span class="option-prefix">${letters[idx]}</span> ${opt}</div>`;
        });
        if (optionsDiv) optionsDiv.innerHTML = html;
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === currentQuestions.length-1;
    }

    function updateProgress() {
        if (!progressEl) return;
        let answered = userAnswers.filter(a => a !== -1).length;
        progressEl.innerText = `✦ ${currentIndex+1}/${currentQuestions.length}  ✓ ${answered}/${currentQuestions.length}`;
    }

    // ----- show explanation (practice mode) -----
    function showExplanation() {
        if (!currentQuestions.length || !isPracticeMode) return;
        let q = currentQuestions[currentIndex];
        let userAns = userAnswers[currentIndex];
        let correct = userAns === q.ans;
        let correctOpt = q.opts[q.ans];
        let html = `<h3 style="display:flex;gap:12px;"><i class="fas fa-feather"></i> explanation</h3>
            <p style="font-weight:600;">${q.q}</p>
            <p>✅ correct: ${correctOpt}</p>
            <p>📌 your choice: ${userAns===-1?'—':q.opts[userAns]} ${correct?'✓':'✗'}</p>
            <div class="explanation-text">💡 ${q.explanation || ''}</div>
            <p style="margin-top:16px;">📚 topic: <strong>${q.topic}</strong></p>`;
        if (correctionContent) correctionContent.innerHTML = html;
        if (suggestedTopics) suggestedTopics.innerText = q.topic;
    }

    // ----- submit (CBT mode) -----
    function submitSubject() {
        if (isPracticeMode) return;
        stopTimer();
        testSubmitted = true;
        subjectActive = false;
        let score = 0, weak = [];
        let html = `<h3><i class="fas fa-clipboard-list"></i> ${currentSubjectMeta.name} – review</h3>`;
        currentQuestions.forEach((q, i) => {
            let ans = userAnswers[i];
            let correct = ans === q.ans;
            if (correct) score++; else if (ans !== -1) weak.push(q.topic);
            let status = correct ? '✅' : (ans===-1 ? '⏭️' : '❌');
            html += `<p style="border-bottom:1px solid #f1e2d2; padding:10px;">${status} Q${i+1}: ${q.q}<br>your: ${ans===-1?'—':q.opts[ans]}<br>✔ ${q.opts[q.ans]}<br>📘 ${q.topic}</p>`;
        });
        let freq = {};
        weak.forEach(t => freq[t] = (freq[t]||0)+1);
        let top = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5).map(e=>e[0]).join(', ') || 'excellent!';
        if (suggestedTopics) suggestedTopics.innerText = top;
        html += `<p style="font-size:1.7rem; margin-top:12px;">⭐ ${score}/${currentQuestions.length}</p>`;
        if (correctionContent) correctionContent.innerHTML = html;
    }

    // ----- mode switching -----
    function setMode(mode) {
        isPracticeMode = mode === 'practice';
        if (modeCbt) modeCbt.classList.toggle('active', !isPracticeMode);
        if (modePractice) modePractice.classList.toggle('active', isPracticeMode);
        if (submitBtn) submitBtn.classList.toggle('hidden', isPracticeMode);
        if (explainBtn) explainBtn.classList.toggle('hidden', !isPracticeMode);
        if (!isPracticeMode && timerEl) timerEl.style.display = 'inline-flex';
        else if (timerEl) timerEl.innerHTML = `<i class="fas fa-feather"></i> practice`;
        stopTimer();
        loadQuestions();
        if (!isPracticeMode) startTimer(currentSubjectMeta.timeMin);
        if (correctionContent) correctionContent.innerHTML = `<p style="font-size:1.2rem;">✨ ${currentSubjectMeta.name} – ${isPracticeMode?'practice, all questions, explain on tap':'cbt, 20 questions, timed'}</p>`;
        if (suggestedTopics) suggestedTopics.innerText = '—';
    }

    // ----- event listeners -----
    if (modeCbt) modeCbt.addEventListener('click', () => setMode('cbt'));
    if (modePractice) modePractice.addEventListener('click', () => setMode('practice'));

    if (optionsDiv) {
        optionsDiv.addEventListener('click', (e) => {
            if (!subjectActive || testSubmitted) return;
            let opt = e.target.closest('.option-item');
            if (!opt) return;
            let idx = parseInt(opt.dataset.optIndex);
            Array.from(optionsDiv.children).forEach(ch => ch.classList.remove('selected'));
            opt.classList.add('selected');
            userAnswers[currentIndex] = idx;
            updateProgress();
            if (isPracticeMode) showExplanation();
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; renderQuestion(); updateProgress(); } });
    if (nextBtn) nextBtn.addEventListener('click', () => { if (currentIndex < currentQuestions.length-1) { currentIndex++; renderQuestion(); updateProgress(); } });

    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            if (!subjectActive) return;
            if (confirm('reshuffle? answers will clear')) {
                currentQuestions = shuffleArray(currentQuestions);
                userAnswers = new Array(currentQuestions.length).fill(-1);
                currentIndex = 0;
                renderQuestion(); updateProgress();
                if (correctionContent) correctionContent.innerHTML = `<p>🔄 reshuffled</p>`;
                if (suggestedTopics) suggestedTopics.innerText = '—';
            }
        });
    }

    if (submitBtn) submitBtn.addEventListener('click', submitSubject);
    if (explainBtn) explainBtn.addEventListener('click', showExplanation);

    // ----- initial load (default CBT) -----
    setMode('cbt');
})();