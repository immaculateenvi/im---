// ========== PHY103.JS ==========
// PHY 103 - General Physics II (Fluids, Heat, Waves) question bank

(function() {
    "use strict";

    window.questionBank = window.questionBank || {};

    window.questionBank.phy103 = [
        { 
            q: "Fluid is a substance that:", 
            type: "mcq", 
            opts: ["Cannot remain at rest under action of any shear force", "Cannot be subjected to shear forces", "Always expands to fill container", "Has same shear stress at a point regardless of motion"], 
            ans: 0, 
            topic: "Fluid Definition",
            explanation: "✓ CORRECT: Fluids deform continuously under shear stress." 
        },
        
        { 
            q: "Fluid is a substance which offers no resistance to change of:", 
            type: "mcq", 
            opts: ["Shape", "Pressure", "Flow", "Volume"], 
            ans: 0, 
            topic: "Fluid Properties",
            explanation: "✓ CORRECT: Fluids take the shape of their container." 
        },
        
        { 
            q: "Practical fluids:", 
            type: "mcq", 
            opts: ["Possess all properties: viscous, surface tension, compressible", "Are viscous", "Possess surface tension", "Are compressible"], 
            ans: 0, 
            topic: "Real Fluids",
            explanation: "✓ CORRECT: Real fluids have viscosity, surface tension, and compressibility." 
        },
        
        { 
            q: "In a static fluid:", 
            type: "mcq", 
            opts: ["Only normal stresses can exist", "Resistance to shear stress is small", "Fluid pressure is zero", "Linear deformation is small"], 
            ans: 0, 
            topic: "Fluid Statics",
            explanation: "✓ CORRECT: No shear stress in static fluid; pressure acts normal to surface." 
        },
        
        { 
            q: "A fluid is said to be ideal, if it is:", 
            type: "mcq", 
            opts: ["Inviscous and incompressible", "Incompressible", "Inviscous", "Viscous and incompressible"], 
            ans: 0, 
            topic: "Ideal Fluid",
            explanation: "✓ CORRECT: Ideal fluid: no viscosity, constant density." 
        },
        
        { 
            q: "An ideal flow of any fluid must fulfill the following:", 
            type: "mcq", 
            opts: ["Continuity equation", "Newton's law of motion", "Pascal's law", "Boundary layer theory"], 
            ans: 0, 
            topic: "Fluid Dynamics",
            explanation: "✓ CORRECT: Continuity equation: A₁v₁ = A₂v₂ (mass conservation)." 
        },
        
        { 
            q: "If no resistance is encountered by displacement, such a substance is known as:", 
            type: "mcq", 
            opts: ["Ideal fluid", "Fluid", "Gas", "Perfect solid"], 
            ans: 0, 
            topic: "Ideal Fluid",
            explanation: "✓ CORRECT: Ideal fluid has zero viscosity." 
        },
        
        { 
            q: "The volumetric change of the fluid caused by a resistance is known as:", 
            type: "mcq", 
            opts: ["Compressibility", "Volumetric strain", "Adhesion", "Cohesion"], 
            ans: 0, 
            topic: "Fluid Properties",
            explanation: "✓ CORRECT: Compressibility = 1/Bulk modulus." 
        },
        
        { 
            q: "Liquids:", 
            type: "mcq", 
            opts: ["Occupy definite volume", "Cannot be compressed", "Are not viscous", "None of the above"], 
            ans: 0, 
            topic: "Liquids",
            explanation: "✓ CORRECT: Liquids have fixed volume, variable shape." 
        },
        
        { 
            q: "Density of water is maximum at:", 
            type: "mcq", 
            opts: ["4°C", "0°C", "100°C", "20°C"], 
            ans: 0, 
            topic: "Thermal Properties",
            explanation: "✓ CORRECT: Water density maximum at 4°C (anomalous expansion)." 
        },
        
        { 
            q: "The value of mass density in kg/m³ for water at 4°C is:", 
            type: "mcq", 
            opts: ["1000", "1", "100", "101.9"], 
            ans: 0, 
            topic: "Fluid Properties",
            explanation: "✓ CORRECT: ρ_water = 1000 kg/m³ at 4°C." 
        },
        
        { 
            q: "Property of a fluid by which its own molecules are attracted is called:", 
            type: "mcq", 
            opts: ["Cohesion", "Adhesion", "Viscosity", "Surface tension"], 
            ans: 0, 
            topic: "Intermolecular Forces",
            explanation: "✓ CORRECT: Cohesion = attraction between like molecules." 
        },
        
        { 
            q: "Mercury does not wet glass. This is due to property of liquid known as:", 
            type: "mcq", 
            opts: ["Surface tension", "Cohesion", "Adhesion", "Viscosity"], 
            ans: 0, 
            topic: "Surface Tension",
            explanation: "✓ CORRECT: High cohesive forces > adhesive forces → convex meniscus." 
        },
        
        { 
            q: "The property of a fluid which enables it to resist tensile stress is known as:", 
            type: "mcq", 
            opts: ["Cohesion", "Adhesion", "Surface tension", "Compressibility"], 
            ans: 0, 
            topic: "Fluid Properties",
            explanation: "✓ CORRECT: Cohesion provides tensile strength in liquids." 
        },
        
        { 
            q: "Property of a fluid by which molecules of different kinds of fluids are attracted to each other is called:", 
            type: "mcq", 
            opts: ["Adhesion", "Cohesion", "Viscosity", "Surface tension"], 
            ans: 0, 
            topic: "Intermolecular Forces",
            explanation: "✓ CORRECT: Adhesion = attraction between unlike molecules." 
        },
        
        { 
            q: "The specific weight of water is 1000 kg/m³ at:", 
            type: "mcq", 
            opts: ["All the above", "Normal pressure of 760 mm", "4°C temperature", "Mean sea level"], 
            ans: 0, 
            topic: "Fluid Properties",
            explanation: "✓ CORRECT: Specific weight γ = ρg; ρ = 1000 kg/m³ at 4°C, 1 atm." 
        },
        
        { 
            q: "Specific weight of water in S.I. units is equal to:", 
            type: "mcq", 
            opts: ["9.81 × 10³ N/m³", "1000 N/m³", "10000 N/m³", "9.81 N/m³"], 
            ans: 0, 
            topic: "Fluid Properties",
            explanation: "✓ CORRECT: γ = ρg = 1000 × 9.81 = 9810 N/m³ ≈ 9.81 kN/m³." 
        },
        
        { 
            q: "When the flow parameters at any given instant remain same at every point, then flow is said to be:", 
            type: "mcq", 
            opts: ["Uniform", "Steady", "Laminar", "Static"], 
            ans: 0, 
            topic: "Flow Types",
            explanation: "✓ CORRECT: Uniform flow: properties independent of position." 
        },
        
        { 
            q: "Which of the following is dimensionless?", 
            type: "mcq", 
            opts: ["Specific gravity", "Specific weight", "Specific volume", "Viscosity"], 
            ans: 0, 
            topic: "Dimensionless Quantities",
            explanation: "✓ CORRECT: SG = ρ_substance/ρ_water." 
        },
        
        { 
            q: "The normal stress in a fluid will be constant in all directions at a point only if:", 
            type: "mcq", 
            opts: ["It is at rest", "It is incompressible", "It has zero viscosity", "It is frictionless"], 
            ans: 0, 
            topic: "Pascal's Law",
            explanation: "✓ CORRECT: Pascal's law applies to static fluids." 
        },
        
        { 
            q: "The pressure at a point in a fluid will not be same in all the directions when the fluid is:", 
            type: "mcq", 
            opts: ["Viscous and moving", "Viscous and static", "Inviscid and moving", "At rest"], 
            ans: 0, 
            topic: "Fluid Pressure",
            explanation: "✓ CORRECT: Shear stresses in viscous flow cause directional pressure variation." 
        },
        
        { 
            q: "An object having 10 kg mass weighs 9.81 N on a spring balance. The value of 'g' at this place is:", 
            type: "mcq", 
            opts: ["0.981 m/s²", "9.81 m/s²", "10 m/s²", "9.75 m/s²"], 
            ans: 0, 
            topic: "Weight",
            explanation: "✓ CORRECT: W = mg → g = W/m = 9.81/10 = 0.981 m/s² (moon-like)." 
        },
        
        { 
            q: "The tendency of a liquid surface to contract is due to the following property:", 
            type: "mcq", 
            opts: ["Surface tension", "Cohesion", "Adhesion", "Viscosity"], 
            ans: 0, 
            topic: "Surface Tension",
            explanation: "✓ CORRECT: Surface tension minimizes surface area." 
        },
        
        { 
            q: "The surface tension of mercury at normal temperature compared to that of water is:", 
            type: "mcq", 
            opts: ["More", "Less", "Same", "Depends on tube size"], 
            ans: 0, 
            topic: "Surface Tension",
            explanation: "✓ CORRECT: Mercury: ~0.486 N/m, Water: ~0.072 N/m." 
        },
        
        { 
            q: "A perfect gas:", 
            type: "mcq", 
            opts: ["None of the above", "Has constant viscosity", "Has zero viscosity", "Is incompressible"], 
            ans: 0, 
            topic: "Ideal Gas",
            explanation: "✓ CORRECT: Perfect gas obeys PV = nRT; viscosity varies with temperature." 
        },
        
        { 
            q: "For very great pressures, viscosity of most gases and liquids:", 
            type: "mcq", 
            opts: ["Shows erratic behaviour", "Remains same", "Increases", "Decreases"], 
            ans: 0, 
            topic: "Viscosity",
            explanation: "✓ CORRECT: At extreme pressures, viscosity behavior becomes complex." 
        },
        
        { 
            q: "A fluid in equilibrium can't sustain:", 
            type: "mcq", 
            opts: ["Shear stress", "Tensile stress", "Compressive stress", "Bending stress"], 
            ans: 0, 
            topic: "Fluid Statics",
            explanation: "✓ CORRECT: Fluids at rest cannot support shear." 
        },
        
        { 
            q: "Viscosity of water in comparison to mercury is:", 
            type: "mcq", 
            opts: ["Higher", "Lower", "Same", "Temperature dependent"], 
            ans: 0, 
            topic: "Viscosity",
            explanation: "✓ CORRECT: Water μ ≈ 0.001 Pa·s, Mercury μ ≈ 0.0015 Pa·s." 
        },
        
        { 
            q: "The bulk modulus of elasticity with increase in pressure:", 
            type: "mcq", 
            opts: ["Increases", "Decreases", "Remains constant", "Unpredictable"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: K = -V(dP/dV); fluids become harder to compress at higher P." 
        },
        
        { 
            q: "The bulk modulus of elasticity:", 
            type: "mcq", 
            opts: ["Increases with pressure", "Has dimensions of 1/pressure", "Large when fluid is compressible", "Independent of pressure"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: K has units of pressure (Pa)." 
        },
        
        { 
            q: "A balloon lifting in air follows the following principle:", 
            type: "mcq", 
            opts: ["All of the above", "Archimedes principle", "Buoyancy", "Law of gravitation"], 
            ans: 0, 
            topic: "Buoyancy",
            explanation: "✓ CORRECT: Balloon rises due to buoyant force." 
        },
        
        { 
            q: "The value of the coefficient of compressibility for water at ordinary pressure and temperature in kg/cm² is equal to:", 
            type: "mcq", 
            opts: ["21,000", "1000", "2100", "2700"], 
            ans: 0, 
            topic: "Compressibility",
            explanation: "✓ CORRECT: Bulk modulus K ≈ 2.1 × 10⁴ kg/cm²." 
        },
        
        { 
            q: "The increase of temperature results in:", 
            type: "mcq", 
            opts: ["Decrease in viscosity of liquid", "Increase in viscosity of gas", "Decrease in viscosity of gas", "Both A and B"], 
            ans: 3, 
            topic: "Viscosity",
            explanation: "✓ CORRECT: Liquid viscosity decreases with T; gas viscosity increases with T." 
        },
        
        { 
            q: "Surface tension has the units of:", 
            type: "mcq", 
            opts: ["N/m", "N·m", "N/m²", "N·m²"], 
            ans: 0, 
            topic: "Units",
            explanation: "✓ CORRECT: Force per unit length (N/m) or energy per unit area (J/m²)." 
        },
        
        { 
            q: "Surface tension:", 
            type: "mcq", 
            opts: ["Acts in the plane of the interface normal to any line", "Is also known as capillarity", "Decreases with fall in temperature", "Has no units"], 
            ans: 0, 
            topic: "Surface Tension",
            explanation: "✓ CORRECT: Surface tension acts tangentially to surface." 
        },
        
        { 
            q: "The stress-strain relation of the Newtonian fluid is:", 
            type: "mcq", 
            opts: ["Linear", "Parabolic", "Hyperbolic", "Inverse"], 
            ans: 0, 
            topic: "Rheology",
            explanation: "✓ CORRECT: τ = μ(du/dy) for Newtonian fluids." 
        },
        
        { 
            q: "A liquid compressed in cylinder has a volume of 0.04 m³ at 50 kg/cm² and a volume of 0.039 m³ at 150 kg/cm². The bulk modulus of elasticity of liquid is:", 
            type: "mcq", 
            opts: ["4000 kg/cm²", "400 kg/cm²", "40 × 10⁵ kg/cm²", "40 × 10⁶ kg/cm²"], 
            ans: 0, 
            topic: "Bulk Modulus",
            explanation: "✓ CORRECT: K = -V dP/dV = -0.04 × (100)/( -0.001) = 4000 kg/cm²." 
        },
        
        { 
            q: "The units of viscosity are:", 
            type: "mcq", 
            opts: ["kg/(m·s) or Pa·s", "m²/s", "N·s/m²", "All of the above"], 
            ans: 3, 
            topic: "Units",
            explanation: "✓ CORRECT: Dynamic viscosity: Pa·s = N·s/m² = kg/(m·s)." 
        },
        
        { 
            q: "Kinematic viscosity is dependent upon:", 
            type: "mcq", 
            opts: ["Density", "Pressure", "Distance", "Flow"], 
            ans: 0, 
            topic: "Viscosity",
            explanation: "✓ CORRECT: ν = μ/ρ." 
        },
        
        { 
            q: "Units of surface tension are:", 
            type: "mcq", 
            opts: ["Both energy/unit area and force/length", "Energy/unit area", "Force/length", "It has no units"], 
            ans: 0, 
            topic: "Units",
            explanation: "✓ CORRECT: N/m = J/m²." 
        },
        
        { 
            q: "Which of the following meters is not associated with viscosity:", 
            type: "mcq", 
            opts: ["Orsat", "Red wood", "Say bolt", "Engler"], 
            ans: 0, 
            topic: "Viscometry",
            explanation: "✓ CORRECT: Orsat is gas analyzer, not viscometer." 
        },
        
        { 
            q: "Choose the correct relationship:", 
            type: "mcq", 
            opts: ["Dynamic viscosity = kinematic viscosity × density", "Specific gravity = gravity × density", "Gravity = specific gravity × density", "Kinematic viscosity = dynamic viscosity × density"], 
            ans: 0, 
            topic: "Viscosity",
            explanation: "✓ CORRECT: μ = ν × ρ." 
        },
        
        { 
            q: "Dimensions of surface tension are:", 
            type: "mcq", 
            opts: ["MT⁻²", "MLT⁻²", "ML²T⁻²", "ML⁻¹T⁻²"], 
            ans: 0, 
            topic: "Dimensions",
            explanation: "✓ CORRECT: [γ] = [Force]/[Length] = MLT⁻²/L = MT⁻²." 
        },
        
        { 
            q: "The capacity to do work is called as:", 
            type: "mcq", 
            opts: ["Energy", "Heat", "Work", "Power"], 
            ans: 0, 
            topic: "Energy",
            explanation: "✓ CORRECT: Energy = ability to do work." 
        },
        
        { 
            q: "Heat is measured in:", 
            type: "mcq", 
            opts: ["Joule", "Calorie", "Both A and B", "Joule/second"], 
            ans: 2, 
            topic: "Units",
            explanation: "✓ CORRECT: Joule (SI) and Calorie (thermal)." 
        },
        
        { 
            q: "1 cal = ?", 
            type: "mcq", 
            opts: ["4.2 joule", "1.2 joule", "3.2 joule", "None"], 
            ans: 0, 
            topic: "Units",
            explanation: "✓ CORRECT: 1 calorie = 4.184 J." 
        },
        
        { 
            q: "The form of energy that produces feeling of hotness is called as:", 
            type: "mcq", 
            opts: ["Heat", "Work", "Energy", "None"], 
            ans: 0, 
            topic: "Thermodynamics",
            explanation: "✓ CORRECT: Heat is thermal energy transfer." 
        },
        
        { 
            q: "With increase in temperature, heat will be:", 
            type: "mcq", 
            opts: ["Increase", "Constant", "Decrease", "Double"], 
            ans: 0, 
            topic: "Thermodynamics",
            explanation: "✓ CORRECT: Higher temperature means more thermal energy." 
        },
        
        { 
            q: "The amount of heat required to raise temperature of a substance by 1°C is called as:", 
            type: "mcq", 
            opts: ["Heat capacity", "Work capacity", "Energy capacity", "None"], 
            ans: 0, 
            topic: "Calorimetry",
            explanation: "✓ CORRECT: Heat capacity C = Q/ΔT." 
        },
        
        { 
            q: "Heat capacity depends on:", 
            type: "mcq", 
            opts: ["All the above", "Mass of body", "Change in temperature", "Nature of substance"], 
            ans: 0, 
            topic: "Calorimetry",
            explanation: "✓ CORRECT: C = mc (extensive property)." 
        },
        
        { 
            q: "Heat brings ________ change:", 
            type: "mcq", 
            opts: ["Chemical", "Physical", "Reversible", "Periodic"], 
            ans: 0, 
            topic: "Heat",
            explanation: "✓ CORRECT: Heat can cause chemical reactions and phase changes." 
        },
        
        { 
            q: "________ is neither created nor destroyed it can only changed one form to another:", 
            type: "mcq", 
            opts: ["Energy", "Work", "Heat", "Mass"], 
            ans: 0, 
            topic: "Conservation Laws",
            explanation: "✓ CORRECT: First law of thermodynamics." 
        },
        
        { 
            q: "The amount of heat required to raise the temperature of 1 kg by 1°C is called as:", 
            type: "mcq", 
            opts: ["Specific heat capacity", "Heat capacity", "Work capacity", "Energy capacity"], 
            ans: 0, 
            topic: "Specific Heat",
            explanation: "✓ CORRECT: c = Q/(mΔT)." 
        },
        
        { 
            q: "Which of the following are the processes of transfer of heat?", 
            type: "mcq", 
            opts: ["All the above", "Conduction", "Convection", "Radiation"], 
            ans: 0, 
            topic: "Heat Transfer",
            explanation: "✓ CORRECT: Three modes of heat transfer." 
        },
        
        { 
            q: "The process of transfer of heat in solids is called as:", 
            type: "mcq", 
            opts: ["Conduction", "Convection", "Radiation", "None"], 
            ans: 0, 
            topic: "Heat Transfer",
            explanation: "✓ CORRECT: Conduction via lattice vibrations." 
        },
        
        { 
            q: "The temperature at which liquid changes into vapour is called as:", 
            type: "mcq", 
            opts: ["Boiling point", "Melting point", "Expansion point", "None"], 
            ans: 0, 
            topic: "Phase Changes",
            explanation: "✓ CORRECT: Boiling point at given pressure." 
        },
        
        { 
            q: "The process of transfer of heat in liquids & gases is called as:", 
            type: "mcq", 
            opts: ["Convection", "Conduction", "Radiation", "Absorption"], 
            ans: 0, 
            topic: "Heat Transfer",
            explanation: "✓ CORRECT: Convection via fluid motion." 
        },
        
        { 
            q: "In convection, the molecules:", 
            type: "mcq", 
            opts: ["Move from one place to another", "Do not move from positions", "Without moving", "None"], 
            ans: 0, 
            topic: "Convection",
            explanation: "✓ CORRECT: Bulk fluid movement carries heat." 
        },
        
        { 
            q: "It is the process of heat transfer from a hot body to a colder body without heating the space between the two is called as:", 
            type: "mcq", 
            opts: ["Radiation", "Conduction", "Convection", "Absorption"], 
            ans: 0, 
            topic: "Radiation",
            explanation: "✓ CORRECT: Electromagnetic waves, no medium required." 
        },
        
        { 
            q: "At night a current of air blows from the colder land to the warmer sea is called as:", 
            type: "mcq", 
            opts: ["Land Breeze", "Sea Breezes", "Air Breezes", "None"], 
            ans: 0, 
            topic: "Convection",
            explanation: "✓ CORRECT: Land cools faster than sea at night." 
        },
        
        { 
            q: "The transfer of heat by radiation:", 
            type: "mcq", 
            opts: ["Does not require any medium", "Requires any medium", "Does not require space", "Requires space"], 
            ans: 0, 
            topic: "Radiation",
            explanation: "✓ CORRECT: Radiation can travel through vacuum." 
        },
        
        { 
            q: "A wooden spoon is dipped in a cup of ice cream. Its other end:", 
            type: "mcq", 
            opts: ["Does not become cold", "Becomes cold by conduction", "Becomes cold by radiation", "Becomes cold by convection"], 
            ans: 0, 
            topic: "Conduction",
            explanation: "✓ CORRECT: Wood is poor conductor, so no heat transfer." 
        },
        
        { 
            q: "Radiation is the transfer of heat by means of:", 
            type: "mcq", 
            opts: ["Electromagnetic waves", "Magnetic wave", "Electrical wave", "None"], 
            ans: 0, 
            topic: "Radiation",
            explanation: "✓ CORRECT: Infrared radiation, visible light, UV." 
        },
        
        { 
            q: "The effect of a material upon heat transfer rates is often expressed in terms of a number known as:", 
            type: "mcq", 
            opts: ["Thermal conductivity", "Electrical conductivity", "Conductivity", "None"], 
            ans: 0, 
            topic: "Conduction",
            explanation: "✓ CORRECT: k (W/m·K)." 
        },
        
        { 
            q: "If the area through which heat is transferred is increased by a factor of 2, then the rate of heat transfer is:", 
            type: "mcq", 
            opts: ["Increased by factor of 2", "Decreased by factor of 2", "Increased by factor of 4", "Decreased by factor of 4"], 
            ans: 0, 
            topic: "Heat Transfer",
            explanation: "✓ CORRECT: Q̇ = kAΔT/d, proportional to A." 
        },
        
        { 
            q: "The equation relating the heat transfer rate to these variables is:", 
            type: "mcq", 
            opts: ["Q̇ = kA(T₁-T₂)/d", "Q̇ = k(T₁-T₂)/d", "Q̇ = A(T₁-T₂)/d", "Q̇ = kA(T₁-T₂)/r"], 
            ans: 0, 
            topic: "Conduction",
            explanation: "✓ CORRECT: Fourier's law for conduction through plane wall." 
        },
        
        { 
            q: "Kelvin scale is also called as:", 
            type: "mcq", 
            opts: ["Absolute scale", "Celsius scale", "Fahrenheit scale", "All"], 
            ans: 0, 
            topic: "Temperature",
            explanation: "✓ CORRECT: 0 K = -273.15°C." 
        },
        
        { 
            q: "The effects of heat on an object are:", 
            type: "mcq", 
            opts: ["Change in temperature", "Never change shape", "Never change state", "All"], 
            ans: 0, 
            topic: "Heat",
            explanation: "✓ CORRECT: Heat causes temperature change and phase change." 
        },
        
        { 
            q: "A force of 50 N acts uniformly over and at right angles to a surface. When the area of the surface is 5 m², the pressure on the area is:", 
            type: "mcq", 
            opts: ["10 Pa", "250 Pa", "45 Pa", "55 Pa"], 
            ans: 0, 
            topic: "Pressure",
            explanation: "✓ CORRECT: P = F/A = 50/5 = 10 Pa." 
        },
        
        { 
            q: "Which of the following statements is false? The pressure at a given depth in a fluid:", 
            type: "mcq", 
            opts: ["Depends on the area of the surface", "Is equal in all directions", "Is independent of container shape", "Acts at right angles to surface"], 
            ans: 0, 
            topic: "Hydrostatics",
            explanation: "✓ CORRECT: Pressure depends on depth, density, gravity - not area." 
        },
        
        { 
            q: "A container holds water of density 1000 kg/m³. Taking gravitational acceleration as 10 m/s², the pressure at a depth of 100 mm is:", 
            type: "mcq", 
            opts: ["1 kPa", "1 MPa", "100 Pa", "1 Pa"], 
            ans: 0, 
            topic: "Hydrostatic Pressure",
            explanation: "✓ CORRECT: P = ρgh = 1000 × 10 × 0.1 = 1000 Pa = 1 kPa." 
        },
        
        { 
            q: "If the water is replaced by a fluid having density 2000 kg/m³, the pressure at a depth of 100 mm is:", 
            type: "mcq", 
            opts: ["2 kPa", "500 kPa", "200 Pa", "0.5 kPa"], 
            ans: 0, 
            topic: "Hydrostatic Pressure",
            explanation: "✓ CORRECT: P = 2000 × 10 × 0.1 = 2000 Pa = 2 kPa." 
        },
        
        { 
            q: "The gauge pressure of fluid in a pipe is 70 kPa and atmospheric pressure is 100 kPa. The absolute pressure is:", 
            type: "mcq", 
            opts: ["170 kPa", "7 MPa", "30 kPa", "10/7 kPa"], 
            ans: 0, 
            topic: "Pressure",
            explanation: "✓ CORRECT: P_abs = P_gauge + P_atm = 70 + 100 = 170 kPa." 
        },
        
        { 
            q: "A U-tube manometer contains mercury of density 13600 kg/m³. When height difference is 100 mm and g = 10 m/s², the gauge pressure is:", 
            type: "mcq", 
            opts: ["13.6 kPa", "13.6 Pa", "13.6 MPa", "13710 Pa"], 
            ans: 0, 
            topic: "Manometer",
            explanation: "✓ CORRECT: P = ρgh = 13600 × 10 × 0.1 = 13600 Pa = 13.6 kPa." 
        },
        
        { 
            q: "The mercury is replaced by water of density 1000 kg/m³. The height of the tube to contain the water for the same gauge pressure is:", 
            type: "mcq", 
            opts: ["13.6 times the original height", "1/13.6 of original", "13.6 m more", "13.6 m less"], 
            ans: 0, 
            topic: "Manometer",
            explanation: "✓ CORRECT: h ∝ 1/ρ; water density 1/13.6 of mercury, so height ×13.6." 
        },
        
        { 
            q: "Which of the following devices does not measure pressure?", 
            type: "mcq", 
            opts: ["Thermocouple", "Barometer", "McLeod gauge", "Manometer"], 
            ans: 0, 
            topic: "Measurement",
            explanation: "✓ CORRECT: Thermocouple measures temperature." 
        },
        
        { 
            q: "When a certain weight is suspended from a long uniform wire, its length increases by one cm. If the same weight is suspended from another wire of same material and length but diameter half of the first one, the increase in length will be:", 
            type: "mcq", 
            opts: ["4 cm", "0.5 cm", "2 cm", "8 cm"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: ΔL ∝ 1/A ∝ 1/r²; half diameter = 1/4 area = 4× extension." 
        },
        
        { 
            q: "The bulk modulus of an ideal gas at constant temperature:", 
            type: "mcq", 
            opts: ["Is equal to its pressure p", "Is equal to its volume V", "Is equal to p/2", "Cannot be determined"], 
            ans: 0, 
            topic: "Gas Elasticity",
            explanation: "✓ CORRECT: For isothermal process, K = P (since PV = constant)." 
        },
        
        { 
            q: "The area of cross-section of a wire of length 1.1 metre is 1 mm². It is loaded with 1 kg. If Young's modulus of copper is 1.1 × 10¹¹ N/m², then the increase in length will be (g = 10):", 
            type: "mcq", 
            opts: ["0.1 mm", "0.01 mm", "0.075 mm", "0.15 mm"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: ΔL = FL/AY = (10×1.1)/(1e-6×1.1e11) = 11/1.1e5 = 1e-4 m = 0.1 mm." 
        },
        
        { 
            q: "If Young's modulus of iron is 2 × 10¹¹ N/m² and interatomic spacing is 3 × 10⁻¹⁰ m, the interatomic force constant is:", 
            type: "mcq", 
            opts: ["60 N/m", "30 N/m", "120 N/m", "180 N/m"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: k = Y × r₀ = 2e11 × 3e-10 = 60 N/m." 
        },
        
        { 
            q: "A steel wire is stretched with a definite load. If the Young's modulus of the wire is Y. For decreasing the value of Y:", 
            type: "mcq", 
            opts: ["None of the above", "Radius is to be decreased", "Length is to be increased", "Radius is to be increased"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: Y is material property, independent of dimensions." 
        },
        
        { 
            q: "The force constant of a wire does not depend on:", 
            type: "mcq", 
            opts: ["None of the above", "Nature of material", "Length of wire", "Radius of wire"], 
            ans: 0, 
            topic: "Spring Constant",
            explanation: "✓ CORRECT: k = YA/L; depends on Y, A, L." 
        },
        
        { 
            q: "The ratio of lengths of two wires A and B of same material is 1:2 and ratio of diameters is 2:1. They are stretched by same force, then ratio of increase in length will be:", 
            type: "mcq", 
            opts: ["1:8", "2:1", "1:4", "8:1"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: ΔL ∝ L/A ∝ L/d²; (ΔL_A/ΔL_B) = (1/2) × (1²/2²) = 1/2 × 1/4 = 1/8." 
        },
        
        { 
            q: "The Young's modulus of a wire of length L and radius r is Y N/m². If length and radius are reduced to L/2 and r/2, then its Young's modulus will be:", 
            type: "mcq", 
            opts: ["Y", "Y/2", "2Y", "4Y"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: Y is material property, independent of dimensions." 
        },
        
        { 
            q: "If the temperature increases, the modulus of elasticity:", 
            type: "mcq", 
            opts: ["Decreases", "Remains constant", "Increases", "Becomes zero"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: For most materials, Y decreases with temperature." 
        },
        
        { 
            q: "Hook's law defines:", 
            type: "mcq", 
            opts: ["Stress proportional to strain", "Stress", "Strain", "Elastic limit"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: σ ∝ ε within elastic limit." 
        },
        
        { 
            q: "In a wire of length L, the increase in length is l. If the length is reduced to half, the increase in length will be:", 
            type: "mcq", 
            opts: ["l/2", "l", "2l", "None"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: ΔL ∝ L (for same force and cross-section)." 
        },
        
        { 
            q: "The extension of a wire by the application of load is 3 mm. The extension in a wire of same material and length but half the radius by the same load is:", 
            type: "mcq", 
            opts: ["12 mm", "15 mm", "0.75 mm", "6 mm"], 
            ans: 0, 
            topic: "Elasticity",
            explanation: "✓ CORRECT: ΔL ∝ 1/A ∝ 1/r²; half radius = 1/4 area = 4× extension = 12 mm." 
        },
        
        { 
            q: "The compressibility of a material is:", 
            type: "mcq", 
            opts: ["Fractional change in volume per unit change in pressure", "Product of volume and pressure", "Change in pressure per unit volume strain", "Reciprocal of bulk modulus"], 
            ans: 3, 
            topic: "Compressibility",
            explanation: "✓ CORRECT: β = 1/K = -(1/V)(dV/dP)." 
        }
    ];

    console.log('PHY 103 question bank loaded with ' + window.questionBank.phy103.length + ' questions');
})();