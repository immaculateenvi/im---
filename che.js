// ========== CHE.JS ==========
// CHE 101 - Chemistry question bank
// Loads into global questionBank object for subject.js to use

(function() {
    "use strict";

    // Initialize global question bank if not exists
    window.questionBank = window.questionBank || {};

    // ========== CHE 101 QUESTION BANK ==========
    window.questionBank.che = [
        // === MCQ QUESTIONS (80+) ===
        { 
            q: "What determines the degree of completeness of a reaction?", 
            type: "mcq", 
            opts: ["Equilibrium constant", "Catalyst", "Rate of reaction", "Intimacy of contact"], 
            ans: 0, 
            topic: "Chemical Equilibrium",
            explanation: "✓ CORRECT: The equilibrium constant (K) indicates the extent to which a reaction proceeds to completion. ❌ Catalyst affects rate only, not position of equilibrium." 
        },
        
        { 
            q: "What is the substance called that causes an alteration of the speed of a chemical reaction?", 
            type: "mcq", 
            opts: ["Catalyst", "Promoter", "Inhibitor", "Enzyme"], 
            ans: 0, 
            topic: "Chemical Kinetics",
            explanation: "✓ CORRECT: A catalyst speeds up a reaction by lowering activation energy without being consumed. ❌ Promoters enhance catalyst activity, inhibitors slow reactions." 
        },
        
        { 
            q: "What substance does not have catalytic capability, but does increase the effectiveness of a catalyst?", 
            type: "mcq", 
            opts: ["Promoter", "Enzyme", "Anti-catalyst", "Inhibitor"], 
            ans: 0, 
            topic: "Catalysis",
            explanation: "✓ CORRECT: Promoters (e.g., Al₂O₃ in Fe catalyst for Haber process) enhance catalytic activity but are not catalysts themselves." 
        },
        
        { 
            q: "Who first proposed the atomic theory?", 
            type: "mcq", 
            opts: ["John Dalton", "Democritus", "Aristotle", "Antoine Lavoisier"], 
            ans: 0, 
            topic: "Atomic Theory",
            explanation: "✓ CORRECT: John Dalton (1803) proposed that matter consists of indivisible atoms, atomic weights, and law of multiple proportions." 
        },
        
        { 
            q: "What is the temperature at which the vapor pressure of a liquid equals the atmospheric pressure?", 
            type: "mcq", 
            opts: ["Boiling point", "Melting point", "Freezing point", "Triple point"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: At boiling point, vapor pressure = external pressure. ❌ Melting point is solid↔liquid equilibrium." 
        },
        
        { 
            q: "When the pressure on a liquid is increased, the boiling point:", 
            type: "mcq", 
            opts: ["Goes up", "Goes down", "Remains constant", "Varies unpredictably"], 
            ans: 0, 
            topic: "Boiling Point",
            explanation: "✓ CORRECT: Higher pressure requires higher temperature to boil (pressure cooker: 120°C at 2 atm)." 
        },
        
        { 
            q: "What is the property of a fluid that prevents it from flowing when subjected to an applied force?", 
            type: "mcq", 
            opts: ["Viscosity", "Density", "Compressibility", "Surface tension"], 
            ans: 0, 
            topic: "Fluid Properties",
            explanation: "✓ CORRECT: Viscosity measures internal friction/resistance to flow. Honey has high viscosity, water has low viscosity." 
        },
        
        { 
            q: "High-viscosity fluids tend to:", 
            type: "mcq", 
            opts: ["Resist flow", "Flow easily", "Evaporate quickly", "Freeze at lower temperatures"], 
            ans: 0, 
            topic: "Viscosity",
            explanation: "✓ CORRECT: High viscosity = high resistance to flow (e.g., tar, glycerol, honey)." 
        },
        
        { 
            q: "What theory states that equal volumes of different gases contain the same number of molecules under same conditions?", 
            type: "mcq", 
            opts: ["Avogadro's Law", "Boyle's Law", "Charles's Law", "Gay-Lussac's Law"], 
            ans: 0, 
            topic: "Gas Laws",
            explanation: "✓ CORRECT: Avogadro's hypothesis (1811): V ∝ n at constant T and P. 1 mole of any gas = 6.022×10²³ molecules." 
        },
        
        { 
            q: "What are atoms of the same element that differ in weight?", 
            type: "mcq", 
            opts: ["Isotopes", "Isomers", "Ions", "Allotropes"], 
            ans: 0, 
            topic: "Nuclear Chemistry",
            explanation: "✓ CORRECT: Isotopes have same number of protons, different neutrons (e.g., C-12, C-13, C-14)." 
        },
        
        { 
            q: "Who first came up with the periodic table?", 
            type: "mcq", 
            opts: ["Dmitri Mendeleev", "Lothar Meyer", "John Newlands", "Henry Moseley"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Mendeleev (1869) arranged 63 elements by atomic weight, left gaps for undiscovered elements, predicted properties." 
        },
        
        { 
            q: "What is the number of the element on the Periodic Table called?", 
            type: "mcq", 
            opts: ["Atomic number", "Mass number", "Atomic weight", "Periodic number"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Atomic number (Z) = number of protons, defines element identity. ❌ Mass number = protons + neutrons." 
        },
        
        { 
            q: "Who invented the X-ray?", 
            type: "mcq", 
            opts: ["Wilhelm Röntgen", "Marie Curie", "Henri Becquerel", "Ernest Rutherford"], 
            ans: 0, 
            topic: "Physics",
            explanation: "✓ CORRECT: Röntgen (1895) discovered X-rays, first Nobel Prize in Physics (1901). ❌ Curie discovered radium and polonium." 
        },
        
        { 
            q: "What is the center of the atom?", 
            type: "mcq", 
            opts: ["Nucleus", "Proton", "Neutron", "Electron cloud"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Nucleus contains protons and neutrons, 99.9% of atom's mass, diameter ~10⁻¹⁵ m." 
        },
        
        { 
            q: "Whose theory proposed that electrons are arranged in shells at a distance from the nucleus?", 
            type: "mcq", 
            opts: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "Erwin Schrödinger"], 
            ans: 0, 
            topic: "Quantum Theory",
            explanation: "✓ CORRECT: Bohr model (1913) - electrons in quantized orbits, explained hydrogen spectrum. ❌ Schrödinger gave wave mechanical model." 
        },
        
        { 
            q: "If helium has an atomic number of 2, how many electrons does it have?", 
            type: "mcq", 
            opts: ["2", "1", "3", "4"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Neutral atom: electrons = protons = atomic number. Helium: 2 protons, 2 electrons." 
        },
        
        { 
            q: "According to Bohr's Theory, what is the maximum number of electron orbital layers?", 
            type: "mcq", 
            opts: ["7", "5", "6", "4"], 
            ans: 0, 
            topic: "Electron Configuration",
            explanation: "✓ CORRECT: Period 7 elements (n=1 to 7) have 7 electron shells. Currently 7 periods in periodic table." 
        },
        
        { 
            q: "Which gas is not an inert gas?", 
            type: "mcq", 
            opts: ["Oxygen", "Helium", "Neon", "Argon"], 
            ans: 0, 
            topic: "Noble Gases",
            explanation: "✓ CORRECT: Oxygen is reactive (Group 16). Noble gases (Group 18): He, Ne, Ar, Kr, Xe, Rn are inert due to full valence shells." 
        },
        
        { 
            q: "Inert gases have:", 
            type: "mcq", 
            opts: ["Completely filled outer shells", "One electron in outer shell", "Two electrons in outer shell", "No electrons"], 
            ans: 0, 
            topic: "Noble Gases",
            explanation: "✓ CORRECT: Octet rule: ns²np⁶ (8 valence e⁻) except He: 1s² (2 e⁻). Full shells = stable, unreactive." 
        },
        
        { 
            q: "Do inert gases enter into chemical combinations in nature?", 
            type: "mcq", 
            opts: ["No", "Yes", "Sometimes", "Rarely"], 
            ans: 0, 
            topic: "Noble Gases",
            explanation: "✓ CORRECT: Noble gases are monatomic and unreactive. First compound XePtF₆ synthesized in 1962 by Neil Bartlett." 
        },
        
        { 
            q: "The innermost electron shell can contain how many electrons?", 
            type: "mcq", 
            opts: ["2", "8", "18", "32"], 
            ans: 0, 
            topic: "Electron Configuration",
            explanation: "✓ CORRECT: First shell (n=1) has only s orbital, holds max 2 electrons (1s²)." 
        },
        
        { 
            q: "Which is a proton donor?", 
            type: "mcq", 
            opts: ["Acid", "Base", "Salt", "Buffer"], 
            ans: 0, 
            topic: "Acid-Base Theory",
            explanation: "✓ CORRECT: Brønsted-Lowry acid donates H⁺ (proton). ❌ Base accepts proton." 
        },
        
        { 
            q: "Which is a proton acceptor?", 
            type: "mcq", 
            opts: ["Base", "Acid", "Salt", "Alkali"], 
            ans: 0, 
            topic: "Acid-Base Theory",
            explanation: "✓ CORRECT: Brønsted-Lowry base accepts H⁺. ❌ Arrhenius base produces OH⁻." 
        },
        
        { 
            q: "Alkali metals have:", 
            type: "mcq", 
            opts: ["Low melting points", "High melting points", "High densities", "Low reactivity"], 
            ans: 0, 
            topic: "Group 1 Elements",
            explanation: "✓ CORRECT: Alkali metals (Li, Na, K, Rb, Cs, Fr) have low melting points that decrease down group (Cs: 28.5°C)." 
        },
        
        { 
            q: "How many Alkali metals are there?", 
            type: "mcq", 
            opts: ["6", "4", "5", "7"], 
            ans: 0, 
            topic: "Group 1 Elements",
            explanation: "✓ CORRECT: 6 naturally occurring: Li, Na, K, Rb, Cs, Fr (francium is radioactive, trace amounts)." 
        },
        
        { 
            q: "Which is not an Alkali metal?", 
            type: "mcq", 
            opts: ["Gold", "Lithium", "Sodium", "Potassium"], 
            ans: 0, 
            topic: "Group 1 Elements",
            explanation: "✓ CORRECT: Gold (Au) is transition metal (Group 11). Alkali metals are Group 1." 
        },
        
        { 
            q: "What was Melvin Calvin known for his study of?", 
            type: "mcq", 
            opts: ["Photosynthesis", "X-rays", "Nuclear fission", "Thermodynamics"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: Calvin cycle - Nobel Prize 1961, traced carbon fixation in photosynthesis using C-14 isotope." 
        },
        
        { 
            q: "What element is crucial to the existence of living organisms?", 
            type: "mcq", 
            opts: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Carbon forms 4 covalent bonds, can form chains, rings, and millions of organic compounds." 
        },
        
        { 
            q: "What is the process of rapid oxidation of a substance with simultaneous evolution of heat?", 
            type: "mcq", 
            opts: ["Combustion", "Explosion", "Oxidation", "Corrosion"], 
            ans: 0, 
            topic: "Chemical Reactions",
            explanation: "✓ CORRECT: Combustion = rapid exothermic redox reaction with oxidizer (usually O₂). Fire triangle: fuel, oxygen, heat." 
        },
        
        { 
            q: "What is the gradual change of a liquid into a gas without boiling?", 
            type: "mcq", 
            opts: ["Evaporation", "Condensation", "Sublimation", "Vaporization"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Evaporation occurs at surface below boiling point. Rate increases with temperature, surface area, and air flow." 
        },
        
        { 
            q: "What is the breaking down of a substance or compound into its simpler components?", 
            type: "mcq", 
            opts: ["Decomposition", "Combustion", "Synthesis", "Precipitation"], 
            ans: 0, 
            topic: "Chemical Reactions",
            explanation: "✓ CORRECT: Decomposition: AB → A + B. Examples: 2H₂O → 2H₂ + O₂ (electrolysis), CaCO₃ → CaO + CO₂ (thermal)." 
        },
        
        { 
            q: "What are chemical changes in organic substances caused by the action of enzymes called?", 
            type: "mcq", 
            opts: ["Fermentation", "Oxidation", "Reduction", "Hydrolysis"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: Fermentation - enzymes break down organic compounds anaerobically. Examples: glucose → ethanol + CO₂ (yeast)." 
        },
        
        { 
            q: "What compounds are formed by the reaction of acids and alcohols?", 
            type: "mcq", 
            opts: ["Esters", "Ethers", "Ketones", "Aldehydes"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Fischer esterification: R-COOH + R'-OH ⇌ R-COO-R' + H₂O. Requires acid catalyst and heat." 
        },
        
        { 
            q: "Which of the following elements must be present for fire to exist?", 
            type: "mcq", 
            opts: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"], 
            ans: 0, 
            topic: "Combustion",
            explanation: "✓ CORRECT: Oxygen is the oxidizer. Fire triangle: oxygen, fuel, heat. Remove any one, fire extinguishes." 
        },
        
        { 
            q: "What is the number of electrons that an atom can give to or accept from another atom in a chemical reaction?", 
            type: "mcq", 
            opts: ["Valence", "Atomic number", "Mass number", "Quantum number"], 
            ans: 0, 
            topic: "Chemical Bonding",
            explanation: "✓ CORRECT: Valence electrons are in outermost shell, determine bonding capacity and oxidation state." 
        },
        
        { 
            q: "Who was key to developing the valence theory?", 
            type: "mcq", 
            opts: ["Gilbert N. Lewis", "Linus Pauling", "Friedrich Wöhler", "August Kekulé"], 
            ans: 0, 
            topic: "Chemical Bonding",
            explanation: "✓ CORRECT: Lewis (1916) proposed covalent bond as shared electron pairs, Lewis dot structures, octet rule." 
        },
        
        { 
            q: "What is the temperature at which a liquid congeals into the solid state at a given pressure?", 
            type: "mcq", 
            opts: ["Freezing point", "Melting point", "Boiling point", "Triple point"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Freezing point = temperature where liquid ↔ solid equilibrium. Same as melting point at given pressure." 
        },
        
        { 
            q: "What is the change of a substance from the solid to the liquid state called?", 
            type: "mcq", 
            opts: ["Fusion", "Vaporization", "Sublimation", "Condensation"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Fusion = melting. Requires latent heat of fusion (ΔH_fus). Water: 334 J/g." 
        },
        
        { 
            q: "Who invented vulcanization for the rubber industry?", 
            type: "mcq", 
            opts: ["Charles Goodyear", "Thomas Hancock", "John Dunlop", "Édouard Michelin"], 
            ans: 0, 
            topic: "Polymer Chemistry",
            explanation: "✓ CORRECT: Goodyear (1839) accidentally discovered sulfur + heat strengthens natural rubber, making it durable and elastic." 
        },
        
        { 
            q: "What process combines rubber and sulfur at a high temperature?", 
            type: "mcq", 
            opts: ["Vulcanization", "Polymerization", "Esterification", "Fermentation"], 
            ans: 0, 
            topic: "Polymer Chemistry",
            explanation: "✓ CORRECT: Vulcanization creates cross-links (sulfur bridges) between polyisoprene chains, increases strength and elasticity." 
        },
        
        { 
            q: "Who won the 1944 Nobel Prize in chemistry for his work in nuclear fission?", 
            type: "mcq", 
            opts: ["Otto Hahn", "Lise Meitner", "Enrico Fermi", "Niels Bohr"], 
            ans: 0, 
            topic: "Nuclear Chemistry",
            explanation: "✓ CORRECT: Otto Hahn discovered nuclear fission of uranium-235 (1938). Meitner provided theoretical explanation." 
        },
        
        { 
            q: "How many Halogens are there?", 
            type: "mcq", 
            opts: ["5", "6", "7", "4"], 
            ans: 0, 
            topic: "Group 17",
            explanation: "✓ CORRECT: 5 halogens: Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I), Astatine (At - radioactive)." 
        },
        
        { 
            q: "What elements are Hydrocarbons composed of?", 
            type: "mcq", 
            opts: ["Hydrogen and Carbon", "Hydrogen and Oxygen", "Carbon and Oxygen", "Carbon and Nitrogen"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Hydrocarbons contain only C and H atoms. Examples: methane CH₄, ethane C₂H₆, benzene C₆H₆." 
        },
        
        { 
            q: "What is something called when it changes color in response to the nature of its chemical environment?", 
            type: "mcq", 
            opts: ["Indicator", "Catalyst", "Buffer", "Enzyme"], 
            ans: 0, 
            topic: "Acid-Base Indicators",
            explanation: "✓ CORRECT: Indicators change color at specific pH ranges. Litmus: red (acid), blue (base). Phenolphthalein: colorless (acid), pink (base)." 
        },
        
        { 
            q: "What color does Litmus change to in acid solutions?", 
            type: "mcq", 
            opts: ["Red", "Blue", "Green", "Yellow"], 
            ans: 0, 
            topic: "Acid-Base Indicators",
            explanation: "✓ CORRECT: Litmus turns red in acidic conditions (pH < 7). Blue litmus paper tests for acids." 
        },
        
        { 
            q: "What color does Litmus change to in basic solutions?", 
            type: "mcq", 
            opts: ["Blue", "Red", "Green", "Purple"], 
            ans: 0, 
            topic: "Acid-Base Indicators",
            explanation: "✓ CORRECT: Litmus turns blue in basic/alkaline conditions (pH > 7). Red litmus paper tests for bases." 
        },
        
        { 
            q: "What does an atom that loses an electron form?", 
            type: "mcq", 
            opts: ["Cation", "Anion", "Isotope", "Isomer"], 
            ans: 0, 
            topic: "Ions",
            explanation: "✓ CORRECT: Loss of electron = positive charge = cation (e.g., Na → Na⁺ + e⁻)." 
        },
        
        { 
            q: "What does an atom that gains an electron form?", 
            type: "mcq", 
            opts: ["Anion", "Cation", "Isotope", "Radical"], 
            ans: 0, 
            topic: "Ions",
            explanation: "✓ CORRECT: Gain of electron = negative charge = anion (e.g., Cl + e⁻ → Cl⁻)." 
        },
        
        { 
            q: "What is one of two or more species of atom having identical atomic number but differing in mass number called?", 
            type: "mcq", 
            opts: ["Isotope", "Isomer", "Ion", "Allotrope"], 
            ans: 0, 
            topic: "Nuclear Chemistry",
            explanation: "✓ CORRECT: Isotopes: same Z (protons), different A (protons + neutrons). Examples: C-12, C-13, C-14." 
        },
        
        { 
            q: "What is one of two or more molecules, having the same chemical compositions, but a differing arrangement of atoms?", 
            type: "mcq", 
            opts: ["Isomer", "Isotope", "Polymer", "Homologue"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Isomers have same molecular formula but different structural arrangements. Example: C₄H₁₀: butane (linear) and isobutane (branched)." 
        },
        
        { 
            q: "Who invented the Carbon-14 dating method?", 
            type: "mcq", 
            opts: ["Willard Libby", "Marie Curie", "Ernest Rutherford", "Otto Hahn"], 
            ans: 0, 
            topic: "Radiometric Dating",
            explanation: "✓ CORRECT: Libby (1949) - Nobel Prize 1960. C-14 half-life = 5,730 years, used for dating organic materials up to 50,000 years." 
        },
        
        { 
            q: "Amalgams are types of what?", 
            type: "mcq", 
            opts: ["Alloys", "Elements", "Compounds", "Mixtures"], 
            ans: 0, 
            topic: "Metallurgy",
            explanation: "✓ CORRECT: Amalgams are alloys containing mercury. Dental amalgam: Ag (35%), Sn (13%), Cu (2%), Hg (50%)." 
        },
        
        { 
            q: "Alloys are:", 
            type: "mcq", 
            opts: ["Combinations of metals", "Pure elements", "Compounds", "Non-metals"], 
            ans: 0, 
            topic: "Metallurgy",
            explanation: "✓ CORRECT: Alloys are mixtures of metals with other metals or non-metals. Examples: brass (Cu+Zn), steel (Fe+C), bronze (Cu+Sn)." 
        },
        
        { 
            q: "What is the ability of a solid substance to resist abrasion and surface deformation called?", 
            type: "mcq", 
            opts: ["Hardness", "Toughness", "Strength", "Elasticity"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Hardness - resistance to scratching, indentation. Mohs scale: talc=1, diamond=10." 
        },
        
        { 
            q: "What is the resistance to breakage called?", 
            type: "mcq", 
            opts: ["Tensile strength", "Hardness", "Elasticity", "Malleability"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Tensile strength = maximum stress before fracture under tension. Units: Pa or psi." 
        },
        
        { 
            q: "What is the ability to return to the original shape after being deformed called?", 
            type: "mcq", 
            opts: ["Elasticity", "Plasticity", "Ductility", "Malleability"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Elasticity - reversible deformation (Hooke's law: stress ∝ strain within elastic limit)." 
        },
        
        { 
            q: "What is the ability to be shaped called?", 
            type: "mcq", 
            opts: ["Malleability", "Ductility", "Hardness", "Elasticity"], 
            ans: 0, 
            topic: "Material Properties",
            explanation: "✓ CORRECT: Malleability - ability to hammer into thin sheets (gold is most malleable). Ductility - ability to draw into wires." 
        },
        
        { 
            q: "What is the sum of all the atomic weights of all the atoms in a molecule?", 
            type: "mcq", 
            opts: ["Molecular weight", "Atomic mass", "Formula weight", "Molar mass"], 
            ans: 0, 
            topic: "Stoichiometry",
            explanation: "✓ CORRECT: Molecular weight = sum of atomic masses. H₂O: 2×1.008 + 16.00 = 18.016 g/mol." 
        },
        
        { 
            q: "What is the smallest particle of a substance having the specific chemical properties of that substance?", 
            type: "mcq", 
            opts: ["Molecule", "Atom", "Electron", "Ion"], 
            ans: 0, 
            topic: "Matter",
            explanation: "✓ CORRECT: Molecule is smallest unit retaining chemical properties. Atom is smallest unit of element." 
        },
        
        { 
            q: "What term indicates the hydrogen ion concentration of a solution?", 
            type: "mcq", 
            opts: ["pH", "pOH", "pKa", "pKb"], 
            ans: 0, 
            topic: "Acid-Base Chemistry",
            explanation: "✓ CORRECT: pH = -log₁₀[H⁺]. Scale 0-14. pH 7 = neutral, <7 acidic, >7 basic/alkaline." 
        },
        
        { 
            q: "What is the chemical formula for salt?", 
            type: "mcq", 
            opts: ["NaCl", "KCl", "CaCl₂", "MgSO₄"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Sodium chloride - table salt. Ionic compound: Na⁺ Cl⁻, crystal lattice structure." 
        },
        
        { 
            q: "What is the chemical formula for water?", 
            type: "mcq", 
            opts: ["H₂O", "H₂O₂", "OH⁻", "H₃O⁺"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Water - dihydrogen monoxide, universal solvent, bent molecular geometry (104.5°)." 
        },
        
        { 
            q: "What is a solvent for salt?", 
            type: "mcq", 
            opts: ["Water", "Oil", "Benzene", "Ethanol"], 
            ans: 0, 
            topic: "Solutions",
            explanation: "✓ CORRECT: Water is polar, dissolves ionic compounds like NaCl via hydration of ions." 
        },
        
        { 
            q: "Polymers are made up of smaller repeating units called?", 
            type: "mcq", 
            opts: ["Monomers", "Dimers", "Trimers", "Oligomers"], 
            ans: 0, 
            topic: "Polymer Chemistry",
            explanation: "✓ CORRECT: Mono = one, mer = part. Polymerization: monomers join to form polymers. Examples: ethylene → polyethylene." 
        },
        
        { 
            q: "What is the pH of pure water at 25°C?", 
            type: "mcq", 
            opts: ["7", "6", "8", "0"], 
            ans: 0, 
            topic: "Acid-Base Chemistry",
            explanation: "✓ CORRECT: Pure water: [H⁺] = [OH⁻] = 10⁻⁷ M, pH = -log(10⁻⁷) = 7." 
        },
        
        { 
            q: "Which of the following is a strong acid?", 
            type: "mcq", 
            opts: ["HCl", "CH₃COOH", "H₂CO₃", "H₃PO₄"], 
            ans: 0, 
            topic: "Acids and Bases",
            explanation: "✓ CORRECT: HCl completely dissociates in water. Strong acids: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄." 
        },
        
        { 
            q: "Which of the following is a strong base?", 
            type: "mcq", 
            opts: ["NaOH", "NH₃", "Ca(OH)₂", "Mg(OH)₂"], 
            ans: 0, 
            topic: "Acids and Bases",
            explanation: "✓ CORRECT: NaOH fully dissociates to Na⁺ and OH⁻ in water. Strong bases: Group 1 and 2 hydroxides (except Be)." 
        },
        
        { 
            q: "What is the atomic number of carbon?", 
            type: "mcq", 
            opts: ["6", "12", "14", "4"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Carbon has 6 protons, atomic number 6. Mass number 12 (6 protons + 6 neutrons)." 
        },
        
        { 
            q: "What is the most abundant gas in Earth's atmosphere?", 
            type: "mcq", 
            opts: ["Nitrogen", "Oxygen", "Argon", "Carbon dioxide"], 
            ans: 0, 
            topic: "Atmospheric Chemistry",
            explanation: "✓ CORRECT: N₂ = 78.08%, O₂ = 20.95%, Ar = 0.93%, CO₂ = 0.04%." 
        },
        
        { 
            q: "Which element has the chemical symbol 'Au'?", 
            type: "mcq", 
            opts: ["Gold", "Silver", "Copper", "Aluminum"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Au from Latin 'aurum' meaning gold. Atomic number 79." 
        },
        
        { 
            q: "What is the process by which plants convert light energy to chemical energy?", 
            type: "mcq", 
            opts: ["Photosynthesis", "Respiration", "Fermentation", "Combustion"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Occurs in chloroplasts, chlorophyll absorbs light." 
        },
        
        { 
            q: "Which subatomic particle has a positive charge?", 
            type: "mcq", 
            opts: ["Proton", "Electron", "Neutron", "Positron"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Proton (+1.602×10⁻¹⁹ C), Electron (-1.602×10⁻¹⁹ C), Neutron (0)." 
        },
        
        { 
            q: "Which subatomic particle has a negative charge?", 
            type: "mcq", 
            opts: ["Electron", "Proton", "Neutron", "Alpha particle"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Electron orbits nucleus in shells, mass ≈ 1/1836 amu." 
        },
        
        { 
            q: "Which subatomic particle has no charge?", 
            type: "mcq", 
            opts: ["Neutron", "Proton", "Electron", "Positron"], 
            ans: 0, 
            topic: "Atomic Structure",
            explanation: "✓ CORRECT: Neutron mass ≈ 1.0087 amu, slightly heavier than proton (1.0073 amu)." 
        },
        
        { 
            q: "What is the law that states mass is neither created nor destroyed in chemical reactions?", 
            type: "mcq", 
            opts: ["Conservation of mass", "Conservation of energy", "Definite proportions", "Multiple proportions"], 
            ans: 0, 
            topic: "Fundamental Laws",
            explanation: "✓ CORRECT: Lavoisier (1789) - mass of reactants = mass of products. Basis of balancing chemical equations." 
        },
        
        { 
            q: "Who is known as the father of modern chemistry?", 
            type: "mcq", 
            opts: ["Antoine Lavoisier", "Robert Boyle", "John Dalton", "Joseph Priestley"], 
            ans: 0, 
            topic: "Chemistry History",
            explanation: "✓ CORRECT: Lavoisier - law of conservation, named oxygen/hydrogen, metric system, debunked phlogiston theory." 
        },
        
        { 
            q: "What is the SI unit of amount of substance?", 
            type: "mcq", 
            opts: ["Mole", "Gram", "Kilogram", "Avogadro"], 
            ans: 0, 
            topic: "Units",
            explanation: "✓ CORRECT: 1 mole = 6.02214076×10²³ particles (Avogadro's number). Symbol: mol." 
        },
        
        { 
            q: "Which gas is known as 'laughing gas'?", 
            type: "mcq", 
            opts: ["Nitrous oxide", "Carbon dioxide", "Oxygen", "Hydrogen"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: N₂O - nitrous oxide, used as anesthetic and propellant. Discovered by Joseph Priestley." 
        },
        
        { 
            q: "What is the most electronegative element?", 
            type: "mcq", 
            opts: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"], 
            ans: 0, 
            topic: "Periodicity",
            explanation: "✓ CORRECT: Fluorine (Pauling scale: 4.0) - strongest electron attracting ability. Francium (0.7) is least." 
        },
        
        { 
            q: "What is the chemical name for baking soda?", 
            type: "mcq", 
            opts: ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"], 
            ans: 0, 
            topic: "Common Compounds",
            explanation: "✓ CORRECT: NaHCO₃ - used in baking (releases CO₂), antacid, fire extinguishers." 
        },
        
        { 
            q: "What is the chemical name for chalk?", 
            type: "mcq", 
            opts: ["Calcium carbonate", "Calcium oxide", "Calcium sulfate", "Calcium hydroxide"], 
            ans: 0, 
            topic: "Common Compounds",
            explanation: "✓ CORRECT: CaCO₃ - limestone, marble, chalk, calcite. Decomposes to CaO (quicklime) + CO₂ when heated." 
        },
        
        { 
            q: "What is the pH of lemon juice?", 
            type: "mcq", 
            opts: ["2-3", "5-6", "7-8", "9-10"], 
            ans: 0, 
            topic: "Acids",
            explanation: "✓ CORRECT: Lemon juice pH ≈ 2.2 (citric acid). Vinegar pH ≈ 2.5, stomach acid pH ≈ 1.5-3.5." 
        },
        
        { 
            q: "Which element is liquid at room temperature?", 
            type: "mcq", 
            opts: ["Bromine", "Mercury", "Gallium", "Cesium"], 
            ans: 0, 
            topic: "Elements",
            explanation: "✓ CORRECT: Bromine (Br₂) is liquid non-metal (melting point -7.2°C). Mercury (Hg) is liquid metal (-38.8°C)." 
        },
        
        { 
            q: "What is the hardest natural substance?", 
            type: "mcq", 
            opts: ["Diamond", "Graphite", "Quartz", "Corundum"], 
            ans: 0, 
            topic: "Materials",
            explanation: "✓ CORRECT: Diamond (Mohs 10) - allotrope of carbon, tetrahedral structure, each C bonded to 4 others." 
        },
        
        { 
            q: "Which gas is responsible for ozone layer depletion?", 
            type: "mcq", 
            opts: ["CFCs", "CO₂", "SO₂", "NOx"], 
            ans: 0, 
            topic: "Environmental Chemistry",
            explanation: "✓ CORRECT: Chlorofluorocarbons release Cl atoms that catalytically destroy O₃. Montreal Protocol 1987 phased them out." 
        },
        
        { 
            q: "What is the main component of natural gas?", 
            type: "mcq", 
            opts: ["Methane", "Ethane", "Propane", "Butane"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: Methane (CH₄) - 70-90% of natural gas. Cleanest burning fossil fuel." 
        },
        
        { 
            q: "Which vitamin is produced by the skin when exposed to sunlight?", 
            type: "mcq", 
            opts: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"], 
            ans: 0, 
            topic: "Biochemistry",
            explanation: "✓ CORRECT: UV light converts 7-dehydrocholesterol to cholecalciferol (vitamin D₃)." 
        },
        
        { 
            q: "What is the chemical symbol for iron?", 
            type: "mcq", 
            opts: ["Fe", "Ir", "In", "I"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Fe from Latin 'ferrum'. Atomic number 26." 
        },
        
        { 
            q: "What is the chemical symbol for lead?", 
            type: "mcq", 
            opts: ["Pb", "Ld", "Le", "Pl"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Pb from Latin 'plumbum'. Atomic number 82." 
        },
        
        { 
            q: "What is the chemical symbol for potassium?", 
            type: "mcq", 
            opts: ["K", "P", "Po", "Pt"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: K from Latin 'kalium'. Atomic number 19." 
        },
        
        { 
            q: "What is the chemical symbol for sodium?", 
            type: "mcq", 
            opts: ["Na", "S", "So", "Nd"], 
            ans: 0, 
            topic: "Periodic Table",
            explanation: "✓ CORRECT: Na from Latin 'natrium'. Atomic number 11." 
        },
        
        { 
            q: "Which acid is found in vinegar?", 
            type: "mcq", 
            opts: ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: CH₃COOH - ethanoic acid. 4-8% concentration in vinegar." 
        },
        
        { 
            q: "Which acid is found in citrus fruits?", 
            type: "mcq", 
            opts: ["Citric acid", "Ascorbic acid", "Malic acid", "Tartaric acid"], 
            ans: 0, 
            topic: "Organic Chemistry",
            explanation: "✓ CORRECT: C₆H₈O₇ - gives sour taste. Also in berries, tropical fruits." 
        },
        
        { 
            q: "What is the formula for sulfuric acid?", 
            type: "mcq", 
            opts: ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: King of chemicals - most produced industrial chemical. Used in fertilizers, batteries, processing." 
        },
        
        { 
            q: "What is the formula for nitric acid?", 
            type: "mcq", 
            opts: ["HNO₃", "H₂SO₄", "HCl", "CH₃COOH"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Nitric acid - used in fertilizers, explosives (TNT, nitroglycerin), and aqua regia with HCl." 
        },
        
        { 
            q: "What is the formula for hydrochloric acid?", 
            type: "mcq", 
            opts: ["HCl", "H₂SO₄", "HNO₃", "HF"], 
            ans: 0, 
            topic: "Inorganic Chemistry",
            explanation: "✓ CORRECT: Hydrochloric acid - stomach acid (0.5% HCl), cleaning agent, pH adjuster." 
        }
    ];

    console.log('CHE 101 question bank loaded with ' + window.questionBank.che.length + ' questions');
})();