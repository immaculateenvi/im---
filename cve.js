// ========== CVE.JS ==========
// CVE 105 - Science and Technology question bank
// Loads into global questionBank object for subject.js to use

(function() {
    "use strict";

    // Initialize global question bank if not exists
    window.questionBank = window.questionBank || {};

    // ========== CVE 105 QUESTION BANK ==========
    window.questionBank.cve = [
        // === FILL-IN-THE-BLANKS (45 questions) ===
        { 
            q: "Science is derived from the Latin word ________.", 
            type: "fill", input_type: "text",
            ans: ["scientia", "SCIENTIA", "Scientia"], 
            topic: "Etymology of Science",
            explanation: "✓ CORRECT: 'Scientia' means knowledge in Latin. This is the root of the word science." 
        },
        
        { 
            q: "The first true mathematician, ________, established a movement in 500BC.", 
            type: "fill", input_type: "name",
            ans: ["Pythagoras", "PYTHAGORAS", "pythagoras"], 
            topic: "Greek Mathematics",
            explanation: "✓ CORRECT: Pythagoras founded the Pythagorean brotherhood and made major contributions to mathematics." 
        },
        
        { 
            q: "________ was the first to use the word 'philosophy'.", 
            type: "fill", input_type: "name",
            ans: ["Pythagoras", "PYTHAGORAS", "pythagoras"], 
            topic: "Philosophy",
            explanation: "✓ CORRECT: Pythagoras coined the term 'philosophy' meaning 'love of wisdom'." 
        },
        
        { 
            q: "The Stone Age was subdivided by British naturalist ________ in 1865.", 
            type: "fill", input_type: "name",
            ans: ["John Lubbock", "Lubbock", "JOHN LUBBOCK", "lubbock"], 
            topic: "Prehistory",
            explanation: "✓ CORRECT: John Lubbock coined the terms 'Palaeolithic' and 'Neolithic'." 
        },
        
        { 
            q: "The Palaeolithic period refers to ________ stone tools.", 
            type: "fill", input_type: "text",
            ans: ["flaked", "FLAKED", "Flaked", "chipped", "CHIPPED"], 
            topic: "Stone Age",
            explanation: "✓ CORRECT: Palaeolithic (Old Stone Age) tools were made by flaking or chipping stone." 
        },
        
        { 
            q: "The Neolithic period refers to ________ stone tools.", 
            type: "fill", input_type: "text",
            ans: ["polished", "POLISHED", "Polished", "ground", "GROUND"], 
            topic: "Stone Age",
            explanation: "✓ CORRECT: Neolithic (New Stone Age) tools were polished and ground smooth." 
        },
        
        { 
            q: "________ was the primary material for tool making in the Stone age.", 
            type: "fill", input_type: "text",
            ans: ["stone", "STONE", "Stone", "flint", "FLINT"], 
            topic: "Prehistory",
            explanation: "✓ CORRECT: Stone, especially flint, was the primary material for early tools." 
        },
        
        { 
            q: "The first person to use high pressure steam to power a vehicle was ________ in 1801.", 
            type: "fill", input_type: "name",
            ans: ["Richard Trevithick", "Trevithick", "RICHARD TREVITHICK", "trevithick"], 
            topic: "Industrial Revolution",
            explanation: "✓ CORRECT: Richard Trevithick built the first steam-powered road locomotive." 
        },
        
        { 
            q: "________ discovered a new process of converting crude iron to steel in 1855.", 
            type: "fill", input_type: "name",
            ans: ["Henry Bessemer", "Bessemer", "HENRY BESSEMER", "bessemer"], 
            topic: "Metallurgy",
            explanation: "✓ CORRECT: Henry Bessemer patented the Bessemer process for mass-producing steel." 
        },
        
        { 
            q: "Sputnik 1 was launched in October ________ (enter 4-digit year).", 
            type: "date", input_type: "year",
            ans: ["1957", 1957], 
            topic: "Space Race",
            explanation: "✓ CORRECT: October 4, 1957 - First artificial satellite, 83.6 kg, orbited for 3 months." 
        },
        
        { 
            q: "Explorer 1 was launched by the Americans in ________ (enter 4-digit year).", 
            type: "date", input_type: "year",
            ans: ["1958", 1958], 
            topic: "Space Race",
            explanation: "✓ CORRECT: January 31, 1958 - First US satellite, discovered Van Allen radiation belts." 
        },
        
        { 
            q: "NASA was created in the United States in ________ (enter 4-digit year).", 
            type: "date", input_type: "year",
            ans: ["1958", 1958], 
            topic: "Space Agency",
            explanation: "✓ CORRECT: July 29, 1958 - National Aeronautics and Space Act established NASA." 
        },
        
        { 
            q: "________ men have walked on moon's surface and returned to Earth (enter number).", 
            type: "numeric", input_type: "integer",
            ans: ["12", 12], 
            topic: "Apollo Program",
            explanation: "✓ CORRECT: 12 astronauts walked on the moon between 1969-1972 (Apollo 11-17, excluding 13)." 
        },
        
        { 
            q: "Soviet cosmonaut ________ and American astronaut ________ manned the first space vehicle.", 
            type: "fill", input_type: "text",
            ans: ["Yuri Gagarin, Alan Shepard", "Gagarin, Shepard", "YURI GAGARIN, ALAN SHEPARD"], 
            topic: "Space Race",
            explanation: "✓ CORRECT: Gagarin (April 1961) and Shepard (May 1961) were the first in space." 
        },
        
        { 
            q: "US Astronauts ________ and ________ became the first humans to set foot on the moon.", 
            type: "fill", input_type: "text",
            ans: ["Neil Armstrong, Buzz Aldrin", "Armstrong, Aldrin", "NEIL ARMSTRONG, BUZZ ALDRIN"], 
            topic: "Apollo 11",
            explanation: "✓ CORRECT: July 20, 1969 - Armstrong and Aldrin spent 21 hours on lunar surface." 
        },
        
        { 
            q: "The first moon core sample was collected in ________ (enter 4-digit year).", 
            type: "date", input_type: "year",
            ans: ["1970", 1970], 
            topic: "Lunar Science",
            explanation: "✓ CORRECT: Apollo 12 returned the first deep core sample from the moon in 1970." 
        },
        
        { 
            q: "The ________ and ________ were the first analog computing devices.", 
            type: "fill", input_type: "text",
            ans: ["abacus, slide rule", "abacus and slide rule", "ABACUS, SLIDE RULE"], 
            topic: "Computing History",
            explanation: "✓ CORRECT: Abacus (3000 BC) and slide rule (1620s) are early analog computers." 
        },
        
        { 
            q: "The slide rule was developed by ________ in 1622.", 
            type: "fill", input_type: "name",
            ans: ["William Oughtred", "Oughtred", "WILLIAM OUGHTRED", "oughtred"], 
            topic: "Computing",
            explanation: "✓ CORRECT: William Oughtred invented the slide rule based on John Napier's logarithms." 
        },
        
        { 
            q: "________ discovered the properties of hydrogen gas in 1766.", 
            type: "fill", input_type: "name",
            ans: ["Henry Cavendish", "Cavendish", "HENRY CAVENDISH", "cavendish"], 
            topic: "Chemistry",
            explanation: "✓ CORRECT: Henry Cavendish identified hydrogen as 'inflammable air'." 
        },
        
        { 
            q: "Henry Cavendish discovered that air was a mixture of gases in ________ (enter 4-digit year).", 
            type: "date", input_type: "year",
            ans: ["1781", 1781], 
            topic: "Chemistry",
            explanation: "✓ CORRECT: Cavendish determined air composition: 79.167% phlogiston (nitrogen) and 20.833% dephlogisticated air (oxygen)." 
        },
        
        { 
            q: "Henry Cavendish discovered that water was made up of hydrogen and oxygen in ________ (enter 4-digit year).", 
            type: "date", input_type: "year",
            ans: ["1783", 1783], 
            topic: "Chemistry",
            explanation: "✓ CORRECT: Cavendish synthesized water by burning hydrogen in oxygen." 
        },
        
        { 
            q: "________ invented the thermos flask.", 
            type: "fill", input_type: "name",
            ans: ["James Dewar", "Dewar", "JAMES DEWAR", "dewar"], 
            topic: "Inventions",
            explanation: "✓ CORRECT: Sir James Dewar invented the vacuum flask in 1892. Commercialized as 'Thermos' in 1904." 
        },
        
        { 
            q: "Greek civilization was between ________ and ________ BC.", 
            type: "fill", input_type: "text",
            ans: ["800, 146", "800-146", "800BC, 146BC"], 
            topic: "Ancient History",
            explanation: "✓ CORRECT: Greek civilization flourished from the Archaic period (800 BC) to the Roman conquest (146 BC)." 
        },
        
        { 
            q: "________ was a Greek philosopher who died around 400BC.", 
            type: "fill", input_type: "name",
            ans: ["Socrates", "SOCRATES", "socrates"], 
            topic: "Philosophy",
            explanation: "✓ CORRECT: Socrates (470-399 BC) was executed by drinking hemlock." 
        },
        
        { 
            q: "Aristotle taught that all things were made up of four elements: ________, ________, ________ and ________.", 
            type: "fill", input_type: "text",
            ans: ["earth, air, fire, water", "earth air fire water", "EARTH, AIR, FIRE, WATER"], 
            topic: "Ancient Science",
            explanation: "✓ CORRECT: Aristotle's four elements: earth (solid), water (liquid), air (gas), fire (plasma/energy)." 
        },
        
        { 
            q: "________ and ________ put the study of heat on scholarly basis.", 
            type: "fill", input_type: "text",
            ans: ["Joseph Black, Antoine Lavoisier", "Black, Lavoisier", "JOSEPH BLACK, ANTOINE LAVOISIER"], 
            topic: "Thermodynamics",
            explanation: "✓ CORRECT: Black discovered latent heat; Lavoisier developed calorimetry and caloric theory." 
        },
        
        { 
            q: "________ and ________ did much pioneer work on electricity.", 
            type: "fill", input_type: "text",
            ans: ["Benjamin Franklin, Alessandro Volta", "Franklin, Volta", "BENJAMIN FRANKLIN, ALESSANDRO VOLTA"], 
            topic: "Electricity",
            explanation: "✓ CORRECT: Franklin proved lightning is electrical; Volta invented the battery." 
        },
        
        { 
            q: "The great invention of the ________ was the railway.", 
            type: "fill", input_type: "text",
            ans: ["Industrial Revolution", "INDUSTRIAL REVOLUTION", "industrial revolution"], 
            topic: "Transportation",
            explanation: "✓ CORRECT: Railways transformed transportation during the Industrial Revolution (1825 Stockton-Darlington)." 
        },
        
        // === MCQ QUESTIONS (80+ questions) ===
        { 
            q: "What determines the degree of completeness of a reaction?", 
            type: "mcq", 
            opts: ["Equilibrium constant", "Catalyst", "Rate of reaction", "Intimacy of contact"], 
            ans: 0, 
            topic: "Chemical Equilibrium",
            explanation: "✓ CORRECT: Equilibrium constant (K) indicates the extent of reaction completion." 
        },
        
        { 
            q: "What is the substance called that causes an alteration of the speed of a chemical reaction?", 
            type: "mcq", 
            opts: ["Catalyst", "Promoter", "Inhibitor", "Enzyme"], 
            ans: 0, 
            topic: "Chemical Kinetics",
            explanation: "✓ CORRECT: A catalyst speeds up reaction without being consumed." 
        },
        
        { 
            q: "What substance does not have catalytic capability, but does increase the effectiveness of a catalyst?", 
            type: "mcq", 
            opts: ["Promoter", "Enzyme", "Anti-catalyst", "Inhibitor"], 
            ans: 0, 
            topic: "Catalysis",
            explanation: "✓ CORRECT: Promoters (e.g., Al₂O₃ in Fe catalyst for Haber process) enhance catalytic activity." 
        },
        
        { 
            q: "Who first proposed the atomic theory?", 
            type: "mcq", 
            opts: ["John Dalton", "Democritus", "Aristotle", "Lavoisier"], 
            ans: 0, 
            topic: "Atomic Theory",
            explanation: "✓ CORRECT: John Dalton (1803) - solid sphere model, atomic weights, law of multiple proportions." 
        },
        
        { 
            q: "What is the temperature at which the vapor pressure of a liquid equals atmospheric pressure?", 
            type: "mcq", 
            opts: ["Boiling point", "Melting point", "Freezing point", "Triple point"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: At boiling point, vapor pressure equals external pressure." 
        },
        
        { 
            q: "When the pressure on a liquid is increased, the boiling point:", 
            type: "mcq", 
            opts: ["Goes up", "Goes down", "Stays same", "Varies unpredictably"], 
            ans: 0, 
            topic: "Boiling",
            explanation: "✓ CORRECT: Higher pressure requires higher temperature to boil (pressure cooker principle)." 
        },
        
        { 
            q: "What is the property of a fluid that prevents it from flowing when subjected to an applied force?", 
            type: "mcq", 
            opts: ["Viscosity", "Density", "Compressibility", "Surface tension"], 
            ans: 0, 
            topic: "Fluid Mechanics",
            explanation: "✓ CORRECT: Viscosity measures internal friction/resistance to flow." 
        },
        
        { 
            q: "High-viscosity fluids tend to:", 
            type: "mcq", 
            opts: ["Resist flow", "Flow easily", "Evaporate quickly", "Freeze easily"], 
            ans: 0, 
            topic: "Viscosity",
            explanation: "✓ CORRECT: High viscosity = high resistance to flow (e.g., honey, tar)." 
        },
        
        { 
            q: "What theory states that equal volumes of different gases contain the same number of molecules under same conditions?", 
            type: "mcq", 
            opts: ["Avogadro's Law", "Boyle's Law", "Charles's Law", "Gay-Lussac's Law"], 
            ans: 0, 
            topic: "Gas Laws",
            explanation: "✓ CORRECT: Avogadro's hypothesis (1811): V ∝ n at constant T and P." 
        },
        
        { 
            q: "What are atoms of the same element that differ in weight?", 
            type: "mcq", 
            opts: ["Isotopes", "Isomers", "Ions", "Allotropes"], 
            ans: 0, 
            topic: "Nuclear Chemistry",
            explanation: "✓ CORRECT: Isotopes - same protons, different neutrons (e.g., C-12, C-13, C-14)." 
        },
        
        { 
            q: "Who first came up with the periodic table?", 
            type: "mcq", 
            opts: ["Dmitri Mendeleev", "Lothar Meyer", "John Newlands", "Antoine Lavoisier"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Mendeleev (1869) arranged by atomic weight, predicted undiscovered elements." 
        },
        
        { 
            q: "What is the number of the element on the Periodic Table called?", 
            type: "mcq", 
            opts: ["Atomic number", "Mass number", "Periodic number", "Element number"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Atomic number (Z) = number of protons, defines element identity." 
        },
        
        { 
            q: "Who invented the X-ray?", 
            type: "mcq", 
            opts: ["Wilhelm Röntgen", "Marie Curie", "Henri Becquerel", "Ernest Rutherford"], 
            ans: 0, 
            topic: "Physics",
            explanation: "✓ CORRECT: Röntgen (1895) discovered X-rays, first Nobel Prize in Physics (1901)." 
        },
        
        { 
            q: "What is the center of the atom?", 
            type: "mcq", 
            opts: ["Nucleus", "Proton", "Neutron", "Electron cloud"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Nucleus contains protons and neutrons, 99.9% of mass, extremely dense." 
        },
        
        { 
            q: "Who's theory proposed that electrons are arranged in shells at a distance from the nucleus?", 
            type: "mcq", 
            opts: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "Erwin Schrödinger"], 
            ans: 0, 
            topic: "Quantum Theory",
            explanation: "✓ CORRECT: Bohr model (1913) - electrons in quantized orbits, explained hydrogen spectrum." 
        },
        
        { 
            q: "If helium has an atomic number of 2, how many electrons does it have?", 
            type: "mcq", 
            opts: ["2", "1", "3", "4"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Neutral atom: electrons = protons = atomic number." 
        },
        
        { 
            q: "According to Bohr's Theory, what is the maximum number of electron orbital layers?", 
            type: "mcq", 
            opts: ["7", "5", "6", "4"], 
            ans: 0, 
            topic: "Electron Configuration",
            explanation: "✓ CORRECT: Periods 1-7 correspond to n=1 to n=7 shells." 
        },
        
        { 
            q: "Which gas is not an inert gas?", 
            type: "mcq", 
            opts: ["Oxygen", "Helium", "Neon", "Argon"], 
            ans: 0, 
            topic: "Noble Gases",
            explanation: "✓ CORRECT: Oxygen is reactive; noble gases (Group 18) are inert." 
        },
        
        { 
            q: "Inert gases have:", 
            type: "mcq", 
            opts: ["Completely filled outer shells", "One electron in outer shell", "Two electrons in outer shell", "No electrons"], 
            ans: 0, 
            topic: "Noble Gases",
            explanation: "✓ CORRECT: Full valence shell (8 e⁻, He has 2) = stable octet." 
        },
        
        { 
            q: "Do inert gases enter into chemical combinations in nature?", 
            type: "mcq", 
            opts: ["No", "Yes", "Sometimes", "Rarely"], 
            ans: 0, 
            topic: "Noble Gases",
            explanation: "✓ CORRECT: Noble gases are unreactive due to full valence shells. First compounds made 1962 (XePtF₆)." 
        },
        
        { 
            q: "The innermost electron shell can contain how many electrons?", 
            type: "mcq", 
            opts: ["2", "8", "18", "32"], 
            ans: 0, 
            topic: "Electron Configuration",
            explanation: "✓ CORRECT: First shell (n=1) holds max 2 electrons (1s²)." 
        },
        
        { 
            q: "Which is a proton donor?", 
            type: "mcq", 
            opts: ["Acid", "Base", "Salt", "Buffer"], 
            ans: 0, 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: Brønsted-Lowry acid donates H⁺; base accepts H⁺." 
        },
        
        { 
            q: "Which is a proton acceptor?", 
            type: "mcq", 
            opts: ["Base", "Acid", "Salt", "Alkali"], 
            ans: 0, 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: Base accepts protons (H⁺ ions)." 
        },
        
        { 
            q: "Alkali metals have:", 
            type: "mcq", 
            opts: ["Low melting points", "High melting points", "Very high density", "Low reactivity"], 
            ans: 0, 
            topic: "Group 1 Elements",
            explanation: "✓ CORRECT: Alkali metals (Li, Na, K, Rb, Cs, Fr) have low melting points that decrease down group." 
        },
        
        { 
            q: "How many Alkali metals are there?", 
            type: "mcq", 
            opts: ["6", "4", "5", "7"], 
            ans: 0, 
            topic: "Group 1 Elements",
            explanation: "✓ CORRECT: 6 naturally occurring: Li, Na, K, Rb, Cs, Fr (radioactive)." 
        },
        
        { 
            q: "Which is not an Alkali metal?", 
            type: "mcq", 
            opts: ["Gold", "Lithium", "Sodium", "Potassium"], 
            ans: 0, 
            topic: "Group 1 Elements",
            explanation: "✓ CORRECT: Gold (Au) is transition metal; alkali metals are Group 1." 
        },
        
        { 
            q: "What was Melvin Calvin known for his study of?", 
            type: "mcq", 
            opts: ["Photosynthesis", "X-rays", "Nuclear fission", "Thermodynamics"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: Calvin cycle - Nobel Prize 1961, traced carbon fixation using C-14 isotope." 
        },
        
        { 
            q: "What element is crucial to the existence of living organisms?", 
            type: "mcq", 
            opts: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Carbon forms 4 covalent bonds, backbone of all organic molecules." 
        },
        
        { 
            q: "What is the process of rapid oxidation of a substance with simultaneous evolution of heat?", 
            type: "mcq", 
            opts: ["Combustion", "Explosion", "Oxidation", "Corrosion"], 
            ans: 0, 
            topic: "Chemical Reactions",
            explanation: "✓ CORRECT: Combustion is rapid exothermic oxidation (fire)." 
        },
        
        { 
            q: "What is the gradual change of a liquid into a gas without boiling?", 
            type: "mcq", 
            opts: ["Evaporation", "Condensation", "Sublimation", "Vaporization"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Evaporation occurs at surface below boiling point." 
        },
        
        { 
            q: "What is the breaking down of a substance or compound into its simpler components?", 
            type: "mcq", 
            opts: ["Decomposition", "Combustion", "Synthesis", "Precipitation"], 
            ans: 0, 
            topic: "Chemical Reactions",
            explanation: "✓ CORRECT: Decomposition breaks compounds into simpler substances (e.g., 2H₂O → 2H₂ + O₂)." 
        },
        
        { 
            q: "What are chemical changes in organic substances caused by the action of enzymes called?", 
            type: "mcq", 
            opts: ["Fermentation", "Oxidation", "Reduction", "Hydrolysis"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: Fermentation - enzymes break down organic compounds anaerobically." 
        },
        
        { 
            q: "What compounds are formed by the reaction of acids and alcohols?", 
            type: "mcq", 
            opts: ["Esters", "Ethers", "Ketones", "Aldehydes"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Fischer esterification: R-COOH + R'-OH → R-COO-R' + H₂O." 
        },
        
        { 
            q: "Which of the following elements must be present for fire to exist?", 
            type: "mcq", 
            opts: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"], 
            ans: 0, 
            topic: "Combustion",
            explanation: "✓ CORRECT: Fire requires oxygen (oxidizer), fuel, and heat - fire triangle." 
        },
        
        { 
            q: "What is the number of electrons that an atom can give to or accept from another atom in a chemical reaction?", 
            type: "mcq", 
            opts: ["Valence", "Atomic number", "Mass number", "Quantum number"], 
            ans: 0, 
            topic: "Chemical Bonding",
            explanation: "✓ CORRECT: Valence electrons determine combining capacity and oxidation state." 
        },
        
        { 
            q: "Who was key to developing the valence theory?", 
            type: "mcq", 
            opts: ["Gilbert N. Lewis", "Linus Pauling", "Friedrich Wöhler", "August Kekulé"], 
            ans: 0, 
            topic: "Chemical Bonding",
            explanation: "✓ CORRECT: Lewis (1916) proposed covalent bond as shared electron pairs." 
        },
        
        { 
            q: "What is the temperature at which a liquid congeals into the solid state at a given pressure?", 
            type: "mcq", 
            opts: ["Freezing point", "Melting point", "Boiling point", "Triple point"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Freezing point = melting point (equilibrium temperature)." 
        },
        
        { 
            q: "What is the change of a substance from the solid to the liquid state called?", 
            type: "mcq", 
            opts: ["Fusion", "Vaporization", "Sublimation", "Condensation"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Fusion = melting, requires latent heat of fusion." 
        },
        
        { 
            q: "Who invented vulcanization for the rubber industry?", 
            type: "mcq", 
            opts: ["Charles Goodyear", "Thomas Hancock", "John Dunlop", "Édouard Michelin"], 
            ans: 0, 
            topic: "Polymer Chemistry",
            explanation: "✓ CORRECT: Goodyear (1839) accidentally discovered sulfur + heat strengthens rubber." 
        },
        
        { 
            q: "What process combines rubber and sulfur at a high temperature?", 
            type: "mcq", 
            opts: ["Vulcanization", "Polymerization", "Esterification", "Fermentation"], 
            ans: 0, 
            topic: "Polymer Chemistry",
            explanation: "✓ CORRECT: Vulcanization creates cross-links between polymer chains, increases strength and elasticity." 
        },
        
        { 
            q: "Who won the 1944 Nobel Prize in chemistry for his work in nuclear fission?", 
            type: "mcq", 
            opts: ["Otto Hahn", "Lise Meitner", "Enrico Fermi", "Niels Bohr"], 
            ans: 0, 
            topic: "Nuclear Chemistry",
            explanation: "✓ CORRECT: Otto Hahn discovered nuclear fission of uranium (1938)." 
        },
        
        { 
            q: "How many Halogens are there?", 
            type: "mcq", 
            opts: ["5", "6", "7", "4"], 
            ans: 0, 
            topic: "Group 17",
            explanation: "✓ CORRECT: 5 halogens: F, Cl, Br, I, At (astatine is radioactive)." 
        },
        
        { 
            q: "What elements are Hydrocarbons composed of?", 
            type: "mcq", 
            opts: ["Hydrogen and Carbon", "Hydrogen and Oxygen", "Carbon and Oxygen", "Carbon and Nitrogen"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Hydrocarbons contain only C and H atoms." 
        },
        
        { 
            q: "What is something called when it changes color in response to the nature of its chemical environment?", 
            type: "mcq", 
            opts: ["Indicator", "Catalyst", "Buffer", "Enzyme"], 
            ans: 0, 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: Indicators change color at specific pH ranges (e.g., litmus, phenolphthalein)." 
        },
        
        { 
            q: "What color does Litmus change to in acid solutions?", 
            type: "mcq", 
            opts: ["Red", "Blue", "Green", "Yellow"], 
            ans: 0, 
            topic: "Acid-Base Indicators",
            explanation: "✓ CORRECT: Litmus turns red in acidic conditions (pH < 7)." 
        },
        
        { 
            q: "What color does Litmus change to in basic solutions?", 
            type: "mcq", 
            opts: ["Blue", "Red", "Green", "Purple"], 
            ans: 0, 
            topic: "Acid-Base Indicators",
            explanation: "✓ CORRECT: Litmus turns blue in basic/alkaline conditions (pH > 7)." 
        },
        
        { 
            q: "What does an atom that loses an electron form?", 
            type: "mcq", 
            opts: ["Cation", "Anion", "Isotope", "Isomer"], 
            ans: 0, 
            topic: "Ions",
            explanation: "✓ CORRECT: Loss of electron = positive charge = cation." 
        },
        
        { 
            q: "What does an atom that gains an electron form?", 
            type: "mcq", 
            opts: ["Anion", "Cation", "Isotope", "Radical"], 
            ans: 0, 
            topic: "Ions",
            explanation: "✓ CORRECT: Gain of electron = negative charge = anion." 
        },
        
        { 
            q: "What is one of two or more species of atom having identical atomic number but differing in mass number called?", 
            type: "mcq", 
            opts: ["Isotope", "Isomer", "Ion", "Allotrope"], 
            ans: 0, 
            topic: "Nuclear Chemistry",
            explanation: "✓ CORRECT: Isotopes - same protons, different neutrons." 
        },
        
        { 
            q: "What is one of two or more molecules, having the same chemical compositions, but a differing arrangement of atoms?", 
            type: "mcq", 
            opts: ["Isomer", "Isotope", "Polymer", "Homologue"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Isomers - same molecular formula, different structural arrangements." 
        },
        
        { 
            q: "Who invented the Carbon-14 dating method?", 
            type: "mcq", 
            opts: ["Willard Libby", "Marie Curie", "Ernest Rutherford", "Otto Hahn"], 
            ans: 0, 
            topic: "Radiometric Dating",
            explanation: "✓ CORRECT: Libby (1949) - Nobel Prize 1960, half-life 5,730 years." 
        },
        
        { 
            q: "Amalgams are types of what?", 
            type: "mcq", 
            opts: ["Alloys", "Elements", "Compounds", "Mixtures"], 
            ans: 0, 
            topic: "Metallurgy",
            explanation: "✓ CORRECT: Amalgams are alloys containing mercury (e.g., dental amalgam: Ag, Sn, Cu, Hg)." 
        },
        
        { 
            q: "Alloys are:", 
            type: "mcq", 
            opts: ["Combinations of metals", "Pure elements", "Compounds", "Non-metals"], 
            ans: 0, 
            topic: "Metallurgy",
            explanation: "✓ CORRECT: Alloys are mixtures of metals (e.g., brass: Cu+Zn, steel: Fe+C)." 
        },
        
        { 
            q: "What is the ability of a solid substance to resist abrasion and surface deformation called?", 
            type: "mcq", 
            opts: ["Hardness", "Toughness", "Strength", "Elasticity"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Hardness - resistance to scratching, indentation (Mohs scale)." 
        },
        
        { 
            q: "What is the resistance to breakage called?", 
            type: "mcq", 
            opts: ["Tensile strength", "Hardness", "Elasticity", "Malleability"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Tensile strength - maximum stress before failure under tension." 
        },
        
        { 
            q: "What is the ability to return to the original shape after being deformed called?", 
            type: "mcq", 
            opts: ["Elasticity", "Plasticity", "Ductility", "Malleability"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Elasticity - reversible deformation (Hooke's law)." 
        },
        
        { 
            q: "What is the ability to be shaped called?", 
            type: "mcq", 
            opts: ["Malleability", "Ductility", "Hardness", "Elasticity"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Malleability - ability to hammer into thin sheets." 
        },
        
        { 
            q: "What is the sum of all the atomic weights of all the atoms in a molecule?", 
            type: "mcq", 
            opts: ["Molecular weight", "Atomic mass", "Formula weight", "Molar mass"], 
            ans: 0, 
            topic: "Stoichiometry",
            explanation: "✓ CORRECT: Molecular weight = sum of atomic masses of all atoms in molecule." 
        },
        
        { 
            q: "What is the smallest particle of a substance having the specific chemical properties of that substance?", 
            type: "mcq", 
            opts: ["Molecule", "Atom", "Electron", "Ion"], 
            ans: 0, 
            topic: "Matter",
            explanation: "✓ CORRECT: Molecule - smallest unit retaining chemical properties." 
        },
        
        { 
            q: "What term indicates the hydrogen ion concentration of a solution?", 
            type: "mcq", 
            opts: ["pH", "pOH", "pKa", "pKb"], 
            ans: 0, 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: pH = -log₁₀[H⁺], scale 0-14." 
        },
        
        { 
            q: "What is the chemical formula for salt?", 
            type: "mcq", 
            opts: ["NaCl", "KCl", "CaCl₂", "MgSO₄"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Sodium chloride - table salt." 
        },
        
        { 
            q: "What is the chemical formula for water?", 
            type: "mcq", 
            opts: ["H₂O", "H₂O₂", "OH⁻", "H₃O⁺"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Water - dihydrogen monoxide, universal solvent." 
        },
        
        { 
            q: "What is a solvent for salt?", 
            type: "mcq", 
            opts: ["Water", "Oil", "Benzene", "Ethanol"], 
            ans: 0, 
            topic: "Solutions",
            explanation: "✓ CORRECT: Water is polar, dissolves ionic compounds like NaCl." 
        },
        
        { 
            q: "Polymers are made up of smaller repeating units called?", 
            type: "mcq", 
            opts: ["Monomers", "Dimers", "Trimers", "Oligomers"], 
            ans: 0, 
            topic: "Polymer Chemistry",
            explanation: "✓ CORRECT: Mono = one, mer = part - single unit that repeats." 
        },
        
        { 
            q: "What is the pH of pure water at 25°C?", 
            type: "mcq", 
            opts: ["7", "6", "8", "0"], 
            ans: 0, 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: Pure water: [H⁺] = [OH⁻] = 10⁻⁷ M, pH = 7." 
        },
        
        { 
            q: "Which of the following is a strong acid?", 
            type: "mcq", 
            opts: ["HCl", "CH₃COOH", "H₂CO₃", "H₃PO₄"], 
            ans: 0, 
            topic: "Acids",
            explanation: "✓ CORRECT: HCl fully dissociates in water; weak acids partially dissociate." 
        },
        
        { 
            q: "Which of the following is a strong base?", 
            type: "mcq", 
            opts: ["NaOH", "NH₃", "Ca(OH)₂", "Mg(OH)₂"], 
            ans: 0, 
            topic: "Bases",
            explanation: "✓ CORRECT: NaOH fully dissociates to Na⁺ and OH⁻ in water." 
        },
        
        { 
            q: "What is the atomic number of carbon?", 
            type: "mcq", 
            opts: ["6", "12", "14", "4"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Carbon has 6 protons, atomic number 6." 
        },
        
        { 
            q: "What is the most abundant gas in Earth's atmosphere?", 
            type: "mcq", 
            opts: ["Nitrogen", "Oxygen", "Argon", "Carbon dioxide"], 
            ans: 0, 
            topic: "Atmospheric Chemistry",
            explanation: "✓ CORRECT: Nitrogen (N₂) is 78.08% of dry air." 
        },
        
        { 
            q: "Which element has the chemical symbol 'Au'?", 
            type: "mcq", 
            opts: ["Gold", "Silver", "Copper", "Aluminum"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Au from Latin 'aurum' meaning gold." 
        },
        
        { 
            q: "What is the process by which plants convert light energy to chemical energy?", 
            type: "mcq", 
            opts: ["Photosynthesis", "Respiration", "Fermentation", "Combustion"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂." 
        },
        
        { 
            q: "Which subatomic particle has a positive charge?", 
            type: "mcq", 
            opts: ["Proton", "Electron", "Neutron", "Positron"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Proton (+1), Electron (-1), Neutron (0)." 
        },
        
        { 
            q: "Which subatomic particle has a negative charge?", 
            type: "mcq", 
            opts: ["Electron", "Proton", "Neutron", "Alpha particle"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Electron carries -1.602 × 10⁻¹⁹ coulombs." 
        },
        
        { 
            q: "Which subatomic particle has no charge?", 
            type: "mcq", 
            opts: ["Neutron", "Proton", "Electron", "Positron"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Neutron is neutral, mass slightly larger than proton." 
        },
        
        { 
            q: "What is the law that states mass is neither created nor destroyed in chemical reactions?", 
            type: "mcq", 
            opts: ["Conservation of mass", "Conservation of energy", "Definite proportions", "Multiple proportions"], 
            ans: 0, 
            topic: "Fundamental Laws",
            explanation: "✓ CORRECT: Lavoisier (1789) - mass of reactants = mass of products." 
        },
        
        { 
            q: "Who is known as the father of modern chemistry?", 
            type: "mcq", 
            opts: ["Antoine Lavoisier", "Robert Boyle", "John Dalton", "Joseph Priestley"], 
            ans: 0, 
            topic: "Chemistry History",
            explanation: "✓ CORRECT: Lavoisier - law of conservation, naming oxygen/hydrogen, metric system." 
        },
        
        { 
            q: "What is the SI unit of amount of substance?", 
            type: "mcq", 
            opts: ["Mole", "Gram", "Kilogram", "Avogadro"], 
            ans: 0, 
            topic: "Units",
            explanation: "✓ CORRECT: 1 mole = 6.022 × 10²³ particles (Avogadro's number)." 
        },
        
        { 
            q: "Which gas is known as 'laughing gas'?", 
            type: "mcq", 
            opts: ["Nitrous oxide", "Carbon dioxide", "Oxygen", "Hydrogen"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: N₂O - used as anesthetic and propellant." 
        },
        
        { 
            q: "What is the most electronegative element?", 
            type: "mcq", 
            opts: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"], 
            ans: 0, 
            topic: "Periodicity",
            explanation: "✓ CORRECT: Fluorine (Pauling scale: 4.0) - strongest electron attracting ability." 
        },
        
        { 
            q: "What is the chemical name for baking soda?", 
            type: "mcq", 
            opts: ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"], 
            ans: 0, 
            topic: "Common Compounds",
            explanation: "✓ CORRECT: NaHCO₃ - used in baking, antacid." 
        },
        
        { 
            q: "What is the chemical name for chalk?", 
            type: "mcq", 
            opts: ["Calcium carbonate", "Calcium oxide", "Calcium sulfate", "Calcium hydroxide"], 
            ans: 0, 
            topic: "Common Compounds",
            explanation: "✓ CORRECT: CaCO₃ - limestone, marble, chalk." 
        },
        
        { 
            q: "What is the pH of lemon juice?", 
            type: "mcq", 
            opts: ["2-3", "5-6", "7-8", "9-10"], 
            ans: 0, 
            topic: "Acids",
            explanation: "✓ CORRECT: Lemon juice pH ≈ 2.2 (citric acid)." 
        },
        
        { 
            q: "Which element is liquid at room temperature?", 
            type: "mcq", 
            opts: ["Bromine", "Mercury", "Gallium", "Cesium"], 
            ans: 0, 
            topic: "Elements",
            explanation: "✓ CORRECT: Bromine (Br₂) is liquid non-metal, Mercury (Hg) is liquid metal." 
        },
        
        { 
            q: "What is the hardest natural substance?", 
            type: "mcq", 
            opts: ["Diamond", "Graphite", "Quartz", "Corundum"], 
            ans: 0, 
            topic: "Materials",
            explanation: "✓ CORRECT: Diamond (Mohs 10) - allotrope of carbon." 
        },
        
        { 
            q: "Which gas is responsible for ozone layer depletion?", 
            type: "mcq", 
            opts: ["CFCs", "CO₂", "SO₂", "NOx"], 
            ans: 0, 
            topic: "Environmental Chemistry",
            explanation: "✓ CORRECT: Chlorofluorocarbons release Cl atoms that catalytically destroy O₃." 
        },
        
        { 
            q: "What is the main component of natural gas?", 
            type: "mcq", 
            opts: ["Methane", "Ethane", "Propane", "Butane"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Methane (CH₄) - 70-90% of natural gas." 
        },
        
        { 
            q: "Which vitamin is produced by the skin when exposed to sunlight?", 
            type: "mcq", 
            opts: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: UV light converts 7-dehydrocholesterol to vitamin D₃." 
        },
        
        { 
            q: "What is the chemical symbol for iron?", 
            type: "mcq", 
            opts: ["Fe", "Ir", "In", "I"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Fe from Latin 'ferrum'." 
        },
        
        { 
            q: "What is the chemical symbol for lead?", 
            type: "mcq", 
            opts: ["Pb", "Ld", "Le", "Pl"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Pb from Latin 'plumbum'." 
        },
        
        { 
            q: "What is the chemical symbol for potassium?", 
            type: "mcq", 
            opts: ["K", "P", "Po", "Pt"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: K from Latin 'kalium'." 
        },
        
        { 
            q: "What is the chemical symbol for sodium?", 
            type: "mcq", 
            opts: ["Na", "S", "So", "Nd"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Na from Latin 'natrium'." 
        },
        
        { 
            q: "Which acid is found in vinegar?", 
            type: "mcq", 
            opts: ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: CH₃COOH - 4-8% concentration in vinegar." 
        },
        
        { 
            q: "Which acid is found in citrus fruits?", 
            type: "mcq", 
            opts: ["Citric acid", "Ascorbic acid", "Malic acid", "Tartaric acid"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Citric acid (C₆H₈O₇) gives sour taste." 
        },
        
        { 
            q: "What is the formula for sulfuric acid?", 
            type: "mcq", 
            opts: ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: King of chemicals - most produced industrial chemical." 
        },
        
        { 
            q: "What is the formula for nitric acid?", 
            type: "mcq", 
            opts: ["HNO₃", "H₂SO₄", "HCl", "CH₃COOH"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Nitric acid - used in fertilizers and explosives." 
        },
        
        { 
            q: "What is the formula for hydrochloric acid?", 
            type: "mcq", 
            opts: ["HCl", "H₂SO₄", "HNO₃", "HF"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Hydrochloric acid - stomach acid, cleaning agent." 
        },
        
        // === TRUE/FALSE QUESTIONS (20+) ===
        { 
            q: "True or False: The atomic theory was first proposed by Isaac Newton.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Atomic Theory",
            explanation: "✓ CORRECT: FALSE. John Dalton proposed atomic theory in 1803." 
        },
        
        { 
            q: "True or False: Leonardo da Vinci was primarily a painter with no scientific contributions.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Renaissance",
            explanation: "✓ CORRECT: FALSE. Da Vinci made major scientific contributions in anatomy, engineering, botany." 
        },
        
        { 
            q: "True or False: The first artificial satellite was launched by the United States.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Space Race",
            explanation: "✓ CORRECT: FALSE. Sputnik 1 was launched by Soviet Union on October 4, 1957." 
        },
        
        { 
            q: "True or False: Marie Curie discovered X-rays.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Radioactivity",
            explanation: "✓ CORRECT: FALSE. Wilhelm Röntgen discovered X-rays in 1895." 
        },
        
        { 
            q: "True or False: The Internet was invented in the 1980s.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Internet",
            explanation: "✓ CORRECT: FALSE. ARPANET was established in 1969." 
        },
        
        { 
            q: "True or False: Water boils at 100°C at all altitudes.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Boiling Point",
            explanation: "✓ CORRECT: FALSE. Boiling point decreases with altitude due to lower atmospheric pressure." 
        },
        
        { 
            q: "True or False: Isotopes have the same number of protons but different number of neutrons.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 0, 
            topic: "Isotopes",
            explanation: "✓ CORRECT: TRUE. Isotopes have same Z, different A (mass number)." 
        },
        
        { 
            q: "True or False: Noble gases are highly reactive.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Noble Gases",
            explanation: "✓ CORRECT: FALSE. Noble gases are inert due to full valence shells." 
        },
        
        { 
            q: "True or False: Catalysts are consumed in chemical reactions.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Catalysis",
            explanation: "✓ CORRECT: FALSE. Catalysts are not consumed; they lower activation energy and remain unchanged." 
        },
        
        { 
            q: "True or False: pH of 7 is always neutral regardless of temperature.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "pH",
            explanation: "✓ CORRECT: FALSE. At 25°C, pH 7 is neutral; at higher T, neutral pH is lower." 
        },
        
        { 
            q: "True or False: Diamond and graphite are isotopes of carbon.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Allotropes",
            explanation: "✓ CORRECT: FALSE. They are allotropes (different structural forms), not isotopes." 
        },
        
        { 
            q: "True or False: The periodic table is arranged by atomic mass.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: FALSE. Modern table is arranged by atomic number (protons)." 
        },
        
        { 
            q: "True or False: An acid turns blue litmus red.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 0, 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: TRUE. Acids: red; bases: blue." 
        },
        
        { 
            q: "True or False: A base turns red litmus blue.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 0, 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: TRUE. Bases/alkalis turn red litmus blue." 
        },
        
        { 
            q: "True or False: Oxidation always involves oxygen.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Redox",
            explanation: "✓ CORRECT: FALSE. Oxidation is loss of electrons, gain of oxygen, or loss of hydrogen." 
        },
        
        { 
            q: "True or False: All organic compounds contain carbon.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: TRUE. Carbon is the essential element in organic compounds." 
        },
        
        { 
            q: "True or False: Alloys are pure elements.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Metallurgy",
            explanation: "✓ CORRECT: FALSE. Alloys are mixtures of metals with other metals or non-metals." 
        },
        
        { 
            q: "True or False: Stainless steel contains chromium.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 0, 
            topic: "Metallurgy",
            explanation: "✓ CORRECT: TRUE. Chromium (≥10.5%) provides corrosion resistance." 
        },
        
        { 
            q: "True or False: The ozone layer is in the troposphere.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 1, 
            topic: "Atmospheric Chemistry",
            explanation: "✓ CORRECT: FALSE. Ozone layer is in the stratosphere (15-35 km)." 
        },
        
        { 
            q: "True or False: Greenhouse gases trap heat in the atmosphere.", 
            type: "tf", 
            opts: ["True", "False"],
            ans: 0, 
            topic: "Climate Change",
            explanation: "✓ CORRECT: TRUE. CO₂, CH₄, H₂O vapor absorb and re-emit infrared radiation." 
        },
        
        // === NUMERIC QUESTIONS (20+) ===
        { 
            q: "How many protons does carbon have? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["6", 6], 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Carbon has 6 protons, atomic number 6." 
        },
        
        { 
            q: "What is the atomic number of oxygen? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["8", 8], 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Oxygen has 8 protons, atomic number 8." 
        },
        
        { 
            q: "What is the atomic number of hydrogen? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["1", 1], 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Hydrogen has 1 proton, atomic number 1." 
        },
        
        { 
            q: "How many naturally occurring alkali metals are there? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["6", 6], 
            topic: "Group 1",
            explanation: "✓ CORRECT: Li, Na, K, Rb, Cs, Fr (francium is radioactive)." 
        },
        
        { 
            q: "How many halogens are there? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["5", 5], 
            topic: "Group 17",
            explanation: "✓ CORRECT: F, Cl, Br, I, At (astatine is radioactive)." 
        },
        
        { 
            q: "What is the maximum number of electrons in the first shell? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["2", 2], 
            topic: "Electron Configuration",
            explanation: "✓ CORRECT: n=1 shell holds max 2 electrons (1s²)." 
        },
        
        { 
            q: "What is the maximum number of electrons in the second shell? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["8", 8], 
            topic: "Electron Configuration",
            explanation: "✓ CORRECT: n=2 shell holds max 8 electrons (2s² 2p⁶)." 
        },
        
        { 
            q: "What is the maximum number of electrons in the third shell? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["18", 18], 
            topic: "Electron Configuration",
            explanation: "✓ CORRECT: n=3 shell holds max 18 electrons (3s² 3p⁶ 3d¹⁰)." 
        },
        
        { 
            q: "What is the boiling point of water at sea level in °C? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["100", 100], 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Water boils at 100°C at 1 atm pressure." 
        },
        
        { 
            q: "What is the freezing point of water at sea level in °C? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["0", 0], 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Water freezes at 0°C at 1 atm pressure." 
        },
        
        { 
            q: "What is Avogadro's number × 10²³? (enter number only, e.g., 6.022)", 
            type: "numeric", input_type: "decimal",
            ans: ["6.022", 6.022, "6.02214076"], 
            topic: "Mole Concept",
            explanation: "✓ CORRECT: 6.02214076 × 10²³ particles per mole." 
        },
        
        { 
            q: "What is the pH of pure water at 25°C? (enter number)", 
            type: "numeric", input_type: "decimal",
            ans: ["7", 7, "7.0"], 
            topic: "Acid-Base",
            explanation: "✓ CORRECT: Pure water: [H⁺] = 10⁻⁷ M, pH = 7." 
        },
        
        { 
            q: "How many elements were in Mendeleev's first periodic table? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["63", 63], 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: 63 known elements in 1869." 
        },
        
        { 
            q: "How many confirmed elements are there today? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["118", 118], 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: 118 elements, up to oganesson (Og)." 
        },
        
        { 
            q: "What is the half-life of Carbon-14 in years? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["5730", 5730], 
            topic: "Radiometric Dating",
            explanation: "✓ CORRECT: C-14 half-life = 5,730 ± 40 years." 
        },
        
        { 
            q: "How many American astronauts have walked on the moon? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["12", 12], 
            topic: "Apollo Program",
            explanation: "✓ CORRECT: 12 astronauts (Apollo 11-17, excluding 13)." 
        },
        
        { 
            q: "How many moon landings were successful? (enter number)", 
            type: "numeric", input_type: "integer",
            ans: ["6", 6], 
            topic: "Apollo Program",
            explanation: "✓ CORRECT: Apollo 11, 12, 14, 15, 16, 17 (Apollo 13 aborted)." 
        },
        
        { 
            q: "What year was NASA established? (enter 4-digit year)", 
            type: "date", input_type: "year",
            ans: ["1958", 1958], 
            topic: "Space Agency",
            explanation: "✓ CORRECT: July 29, 1958 - National Aeronautics and Space Act." 
        },
        
        { 
            q: "What year was Sputnik 1 launched? (enter 4-digit year)", 
            type: "date", input_type: "year",
            ans: ["1957", 1957], 
            topic: "Space Race",
            explanation: "✓ CORRECT: October 4, 1957 - First artificial satellite." 
        },
        
        { 
            q: "What year was the first moon landing? (enter 4-digit year)", 
            type: "date", input_type: "year",
            ans: ["1969", 1969], 
            topic: "Apollo 11",
            explanation: "✓ CORRECT: July 20, 1969 - Armstrong and Aldrin." 
        }
    ];

    console.log('CVE 105 question bank loaded with ' + window.questionBank.cve.length + ' questions');
})();