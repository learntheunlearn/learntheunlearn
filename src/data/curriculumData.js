// src/data/curriculumData.js

// Dynamic helper to generate generic modules if we want a fallback
const generatePlaceholderModules = (gradeName, curriculumType) => {
  return Array.from({ length: 14 }, (_, i) => {
    const modNum = i + 1;
    const paddedNum = modNum.toString().padStart(2, '0');
    return {
      moduleNumber: paddedNum,
      title: `${gradeName} Module ${paddedNum}: Core Concepts`,
      description: `Detailed exploration of essential mathematical concepts for ${gradeName} under the ${curriculumType} standards, focusing on interactive reasoning.`,
      learningOutcomes: [
        "Develop visual understanding of core topics",
        "Build mental speed shortcuts and problem-solving skills",
        "Apply logic to practical math applications"
      ],
      topics: [
        "Topic A: Introduction and Definitions",
        "Topic B: Step-by-Step Visualization",
        "Topic C: Practice and Speed Exercises"
      ]
    };
  });
};

// Realistic Module Titles for US Curriculum
const US_GRADE_TOPICS = {
  1: [
    { title: "Numbers & Counting", desc: "Counting forward and backward to 120, understanding cardinality and numeral recognition." },
    { title: "Number Patterns", desc: "Identifying and extending simple number sequences and repeating patterns." },
    { title: "Comparing Numbers", desc: "Using symbols >, =, and < to compare quantities and two-digit numbers." },
    { title: "Base Ten Blocks", desc: "Representing numbers using base ten blocks to visualize tens and ones." },
    { title: "Place Value", desc: "Understanding that two-digit numbers represent amounts of tens and ones." },
    { title: "Addition", desc: "Adding numbers up to 20 using pictures, number lines, and mental strategies." },
    { title: "Subtraction", desc: "Understanding subtraction as taking away, finding differences within 20." },
    { title: "Fractions", desc: "Partitioning circles and rectangles into halves and fourths." },
    { title: "Measurement", desc: "Comparing and measuring lengths using non-standard and standard units." },
    { title: "Counting Money", desc: "Identifying pennies, nickels, dimes, and quarters and counting coin values." },
    { title: "Telling Time", desc: "Telling time to the hour and half-hour on analog and digital clocks." },
    { title: "Geometry", desc: "Identifying and defining two-dimensional and three-dimensional shapes." },
    { title: "Data & Graphing", desc: "Organizing, representing, and interpreting data with tally marks and simple graphs." },
    { title: "Word Problems", desc: "Solving addition and subtraction word problems within 20." }
  ],
  2: [
    { title: "Skip Counting", desc: "Skip counting by 2s, 5s, 10s, and 100s to build multiplication foundations." },
    { title: "Place Value & Rounding", desc: "Understanding hundreds, tens, and ones, and rounding to the nearest ten." },
    { title: "Addition", desc: "Adding within 100 and 1000 using strategies based on place value." },
    { title: "Subtraction", desc: "Subtracting within 100 and 1000 with and without regrouping." },
    { title: "Multiplication", desc: "Introduction to multiplication using arrays and repeated addition." },
    { title: "Fractions", desc: "Partitioning shapes into equal shares and naming halves, thirds, and fourths." },
    { title: "Measurement", desc: "Measuring lengths in inches, feet, centimeters, and meters." },
    { title: "Counting Money", desc: "Solving word problems involving dollar bills, quarters, dimes, nickels, and pennies." },
    { title: "Telling Time", desc: "Telling and writing time from analog and digital clocks to the nearest five minutes." },
    { title: "Geometry", desc: "Recognizing and drawing shapes with specified numbers of angles or faces." },
    { title: "Data & Graphing", desc: "Drawing picture graphs and bar graphs to represent and interpret datasets." },
    { title: "Word Problems", desc: "Solving challenging one-step and two-step addition and subtraction word problems." }
  ],
  3: [
    { title: "Place Value & Rounding", desc: "Using place value understanding to round whole numbers to the nearest 10 or 100." },
    { title: "Addition", desc: "Fluently adding within 1000 using strategies and algorithms based on place value." },
    { title: "Subtraction", desc: "Fluently subtracting within 1000 using regrouping and mental methods." },
    { title: "Multiplication", desc: "Representing and solving multiplication problems within 100." },
    { title: "Division", desc: "Understanding division as an unknown-factor problem and solving within 100." },
    { title: "Order of Operations", desc: "Applying correct order of operations in simple multi-step calculations." },
    { title: "Roman Numerals", desc: "Reading and writing Roman numerals and understanding their place in history." },
    { title: "Fractions & Decimals", desc: "Representing fractions on number lines and introducing decimal notation." },
    { title: "Measurement", desc: "Estimating and measuring liquid volumes, masses, and lengths." },
    { title: "Counting Money", desc: "Adding and subtracting amounts of money and making change." },
    { title: "Time & Calendar", desc: "Telling time to the nearest minute and measuring elapsed time intervals." },
    { title: "Geometry", desc: "Classifying shapes by attributes, understanding area and perimeter." },
    { title: "Data & Graphing", desc: "Representing data on scaled bar and picture graphs and solving problems." }
  ],
  4: [
    { title: "Place Value & Rounding", desc: "Recognizing place value in multi-digit numbers and rounding to any place." },
    { title: "Addition", desc: "Fluently adding multi-digit whole numbers using the standard algorithm." },
    { title: "Subtraction", desc: "Fluently subtracting multi-digit whole numbers using the standard algorithm." },
    { title: "Mental Multiplication", desc: "Multiplying using mental strategies, properties of operations, and estimation." },
    { title: "Multiply in Columns", desc: "Multiplying a multi-digit number by a one-digit or two-digit number using columnar method." },
    { title: "Mental Division", desc: "Dividing using mental strategies and understanding remainders." },
    { title: "Long Division", desc: "Finding whole-number quotients and remainders with up to four-digit dividends." },
    { title: "Order of Operations", desc: "Using parentheses and applying correct order of operations in expressions." },
    { title: "Roman Numerals", desc: "Reading and writing Roman numerals to 1000 (M) and beyond." },
    { title: "Fractions", desc: "Comparing, ordering, adding, and subtracting fractions with like denominators." },
    { title: "Decimals", desc: "Expressing fractions with denominators 10 or 100 as decimals and comparing." },
    { title: "Measurement", desc: "Converting between units of measurement and solving measurement word problems." },
    { title: "Geometry", desc: "Classifying angles, identifying lines of symmetry, and geometric properties." },
    { title: "Factoring", desc: "Finding all factor pairs for whole numbers and identifying prime and composite numbers." },
    { title: "Data & Graphing", desc: "Interpreting and creating line plots, bar graphs, and frequency tables." }
  ],
  5: [
    { title: "Place Value & Rounding", desc: "Reading, writing, and rounding decimals to thousandths and whole numbers to millions." },
    { title: "Addition & Subtraction", desc: "Adding and subtracting multi-digit whole numbers and decimals fluently." },
    { title: "Multiplication & Division", desc: "Multiplying and dividing multi-digit numbers using standard algorithms." },
    { title: "Order of Operations", desc: "Using parentheses, brackets, and braces in numerical expressions." },
    { title: "Fractions - Add/Subtract", desc: "Adding and subtracting fractions with unlike denominators." },
    { title: "Fractions - Multiply/Divide", desc: "Multiplying and dividing fractions and mixed numbers." },
    { title: "Fractions - Converting", desc: "Converting between improper fractions, mixed numbers, and simplifying." },
    { title: "Fractions vs Decimals", desc: "Converting between fractions and decimals and comparing their values." },
    { title: "Decimals - Add/Subtract", desc: "Adding and subtracting decimals to hundredths and thousandths." },
    { title: "Decimals - Multiplication", desc: "Multiplying decimals by whole numbers and other decimals." },
    { title: "Decimals - Division", desc: "Dividing decimals by whole numbers and other decimals." },
    { title: "Measurement", desc: "Converting among different-sized standard measurement units." },
    { title: "Geometry", desc: "Classifying two-dimensional figures and understanding coordinate planes." },
    { title: "Factoring", desc: "Finding greatest common factors and least common multiples." },
    { title: "Exponents", desc: "Understanding and evaluating expressions with whole-number exponents." },
    { title: "Data & Graphing", desc: "Making line plots and interpreting data sets with fractional measurements." },
    { title: "Integers", desc: "Understanding positive and negative numbers and their positions on number lines." },
    { title: "Algebra", desc: "Writing and evaluating simple algebraic expressions and equations." },
    { title: "Word Problems", desc: "Solving multi-step word problems involving all four operations and fractions." }
  ],
  6: [
    { title: "Ratios & Rates", desc: "Understanding ratio concepts and using ratio reasoning to solve problems." },
    { title: "Unit Rates & Percentages", desc: "Solving unit rate problems and finding a percent of a quantity." },
    { title: "Division of Fractions", desc: "Computing quotients of fractions divided by fractions." },
    { title: "Multi-Digit Decimals", desc: "Fluently adding, subtracting, multiplying, and dividing multi-digit decimals." },
    { title: "Greatest Common Factor & LCM", desc: "Finding GCF of numbers up to 100 and LCM of numbers up to 12." },
    { title: "Integers & Rational Numbers", desc: "Understanding positive and negative numbers and ordering integers." },
    { title: "Coordinate Plane (Four Quadrants)", desc: "Finding and positioning pairs of integers on a coordinate plane." },
    { title: "Writing Expressions", desc: "Writing and evaluating numerical and algebraic expressions." },
    { title: "Solving One-Variable Equations", desc: "Understanding solving equations as a process of answering a question." },
    { title: "Inequalities Introduction", desc: "Writing and graphing simple inequalities on number lines." },
    { title: "Area of Polygons", desc: "Finding the area of right triangles, other triangles, and special quadrilaterals." },
    { title: "Volume & Surface Area", desc: "Finding volume and surface area using nets made of rectangles and triangles." },
    { title: "Statistical Measures", desc: "Understanding statistical variability, mean, median, mode, and range." },
    { title: "Sixth Grade Comprehensive Exam Review", desc: "Reviewing all foundational Grade 6 mathematics." }
  ],
  7: [
    { title: "Proportional Relationships", desc: "Computing unit rates and identifying constants of proportionality." },
    { title: "Ratios & Percents", desc: "Using proportional relationships to solve multistep ratio and percent problems." },
    { title: "Rational Number Operations", desc: "Adding, subtracting, multiplying, and dividing positive and negative rational numbers." },
    { title: "Linear Expressions", desc: "Applying properties of operations to add, subtract, factor, and expand linear expressions." },
    { title: "Solving Multi-Step Equations", desc: "Solving real-world problems using numerical and algebraic equations." },
    { title: "Scale Drawings", desc: "Solving problems involving scale drawings of geometric figures." },
    { title: "Geometric Constructions", desc: "Drawing geometric shapes with given conditions (angles, side lengths)." },
    { title: "Cross-Sections of 3D Figures", desc: "Describing the two-dimensional figures that result from slicing three-dimensional figures." },
    { title: "Circle Area & Circumference", desc: "Understanding the formulas for the area and circumference of a circle." },
    { title: "Angle Relationships", desc: "Using facts about supplementary, complementary, vertical, and adjacent angles." },
    { title: "Random Sampling", desc: "Using random sampling to draw inferences about a population." },
    { title: "Comparing Two Populations", desc: "Informally assessing the degree of visual overlap of two numerical data distributions." },
    { title: "Probability Models", desc: "Approximating the probability of a chance event by collecting data." },
    { title: "Seventh Grade Mid-High Prep", desc: "Preparing for advanced pre-algebra and geometric reasoning." }
  ],
  8: [
    { title: "Rational & Irrational Numbers", desc: "Understanding that numbers that are not rational are called irrational." },
    { title: "Radicals & Integer Exponents", desc: "Working with radicals and integer exponents, including scientific notation." },
    { title: "Proportional Relationships & Slope", desc: "Graphing proportional relationships and interpreting unit rate as slope." },
    { title: "Linear Equations (y = mx + b)", desc: "Solving linear equations in one variable and graphing lines." },
    { title: "Systems of Linear Equations", desc: "Analyzing and solving pairs of simultaneous linear equations." },
    { title: "Functions Introduction", desc: "Defining, evaluating, and comparing functions." },
    { title: "Linear Functions Modeling", desc: "Constructing functions to model linear relationships." },
    { title: "Congruence & Similarity", desc: "Understanding congruence and similarity using physical models or rotations." },
    { title: "Parallel Lines & Transversals", desc: "Establishing facts about interior and exterior angles of triangles." },
    { title: "Pythagorean Theorem", desc: "Explaining and applying the Pythagorean Theorem and its converse." },
    { title: "Pythagorean Distance Formula", desc: "Applying the Pythagorean Theorem to find distance in coordinate systems." },
    { title: "Volume: Cones, Cylinders, Spheres", desc: "Knowing the formulas for volume of cones, cylinders, and spheres." },
    { title: "Scatter Plots & Association", desc: "Constructing and interpreting scatter plots for bivariate measurement data." },
    { title: "Eighth Grade Pre-Algebra Capstone", desc: "Final readiness prep for high school algebra and geometry." }
  ],
  9: [
    { title: "Algebra 1: Equations & Inequalities", desc: "Solving linear equations, compound inequalities, and absolute value equations." },
    { title: "Linear Functions & Graphing", desc: "Graphing linear equations, calculating slope, and writing slope-intercept forms." },
    { title: "Systems of Equations & Inequalities", desc: "Solving systems of equations by graphing, substitution, and elimination." },
    { title: "Exponents & Exponential Functions", desc: "Applying laws of exponents and graphing exponential growth and decay models." },
    { title: "Polynomial Addition & Subtraction", desc: "Understanding and simplifying polynomial expressions." },
    { title: "Multiplying & Factoring Polynomials", desc: "Multiplying binomials and factoring quadratic trinomials." },
    { title: "Quadratic Equations", desc: "Solving quadratic equations by factoring, completing the square, and using the formula." },
    { title: "Graphing Quadratic Functions", desc: "Identifying vertices, axes of symmetry, and intercepts of parabolas." },
    { title: "Radical Expressions & Equations", desc: "Simplifying radical expressions and solving simple radical equations." },
    { title: "Rational Expressions & Functions", desc: "Simplifying rational expressions and solving rational equations." },
    { title: "Data Analysis & Statistics", desc: "Interpreting box plots, histograms, standard deviation, and correlation." },
    { title: "Geometry: Points, Lines, Angles", desc: "Introduction to geometric terminology, segments, and angle measurements." },
    { title: "Parallel & Perpendicular Lines", desc: "Proving lines parallel and writing equations of parallel/perpendicular lines." },
    { title: "Ninth Grade Algebra 1 Mastery", desc: "Comprehensive review of all High School Algebra 1 topics." }
  ],
  10: [
    { title: "Geometry: Logical Reasoning & Proofs", desc: "Writing conditional statements, biconditionals, and two-column proofs." },
    { title: "Congruent Triangles", desc: "Proving triangle congruence using SSS, SAS, ASA, AAS, and HL." },
    { title: "Properties of Triangles", desc: "Investigating midsegments, medians, altitudes, and bisectors of triangles." },
    { title: "Similarity & Proportions", desc: "Proving triangles similar and using proportional segments." },
    { title: "Right Triangles & Trigonometry", desc: "Calculating sine, cosine, and tangent ratios, and solving right triangles." },
    { title: "Polygons & Quadrilaterals", desc: "Studying properties of parallelograms, rectangles, rhombuses, squares, and trapezoids." },
    { title: "Transformations", desc: "Graphing translations, reflections, rotations, and dilations in coordinate grids." },
    { title: "Circles: Tangents, Secants, Arcs", desc: "Calculating arc length, sector area, and angle measures formed by tangents/secants." },
    { title: "Area of Polygons & Circles", desc: "Finding area of regular polygons, composite figures, and shaded regions." },
    { title: "Surface Area & Volume of 3D Solids", desc: "Calculating lateral area, surface area, and volume of prisms, pyramids, cylinders, cones." },
    { title: "Coordinate Geometry Proofs", desc: "Using distance, midpoint, and slope formulas to classify geometric figures." },
    { title: "Algebra 2: Linear Systems Review", desc: "Reviewing systems of equations in three variables." },
    { title: "Quadratic & Absolute Value Functions", desc: "Studying absolute value functions and complex number solutions." },
    { title: "Tenth Grade Geometry Capstone", desc: "Complete mastery review of standard high school geometry." }
  ],
  11: [
    { title: "Algebra 2: Equations & Inequalities", desc: "Solving absolute value equations, systems, and quadratic systems." },
    { title: "Polynomial & Rational Functions", desc: "Graphing polynomial functions, finding zeros, and analyzing end behavior." },
    { title: "Rational Exponents & Radicals", desc: "Solving radical equations and working with rational exponents." },
    { title: "Exponential & Logarithmic Functions", desc: "Properties of logarithms, solving exponential equations, and base e." },
    { title: "Rational Expressions & Equations", desc: "Multiplying, dividing, adding, and subtracting complex rational expressions." },
    { title: "Conic Sections Introduction", desc: "Graphing and writing equations of parabolas, circles, ellipses, and hyperbolas." },
    { title: "Sequences & Series", desc: "Working with arithmetic and geometric sequences, and finding sums of series." },
    { title: "Probability & Combinatorics", desc: "Permutations, combinations, binomial theorem, and conditional probability." },
    { title: "Trigonometric Ratios & Graphs", desc: "Evaluating trigonometric functions of general angles and graphing sine/cosine." },
    { title: "Trigonometric Identities", desc: "Proving reciprocal, quotient, Pythagorean, double-angle, and half-angle formulas." },
    { title: "Matrices & Determinants", desc: "Performing operations on matrices and solving systems using Cramer's Rule." },
    { title: "Systems of Inequalities Graphing", desc: "Graphing systems of linear and non-linear inequalities on grids." },
    { title: "Data Distributions & Stats", desc: "Analyzing normal distributions, z-scores, and margin of error." },
    { title: "Eleventh Grade Algebra 2 Review", desc: "Comprehensive preparation for Pre-Calculus and Advanced Math." }
  ],
  12: [
    { title: "Functions & Their Graphs", desc: "Analyzing domain, range, transformations, and operations on functions." },
    { title: "Polynomial, Rational, Radical Zeros", desc: "Finding rational and complex roots of higher degree polynomials." },
    { title: "Exponential & Logarithmic Models", desc: "Modeling real-world growth, decay, and logistic curves." },
    { title: "Trigonometric Functions & Unit Circle", desc: "Mastering unit circle values, inverse trig functions, and applications." },
    { title: "Analytic Trigonometry", desc: "Solving trigonometric equations using advanced identities." },
    { title: "Vectors in 2D & 3D Space", desc: "Calculating dot products, cross products, and vector projections." },
    { title: "Polar Coordinates & Complex Numbers", desc: "Graphing polar equations and converting to rectangular form." },
    { title: "Systems of Equations & Matrices", desc: "Solving large systems of equations using Gaussian elimination." },
    { title: "Analytic Geometry: Conics Review", desc: "Using focus, directrix, and eccentricity to define conic sections." },
    { title: "Limits & Continuity Intro", desc: "Evaluating limits numerically, graphically, and algebraically." },
    { title: "Introduction to Derivatives", desc: "Finding derivatives using the limit definition and tangent lines." },
    { title: "Derivative Rules & Speed Math", desc: "Power rule, product rule, quotient rule, and chain rule applications." },
    { title: "Integrals & Anti-derivatives", desc: "Approximating area under curves using Riemann sums and integrals." },
    { title: "Twelfth Grade Pre-Calculus Mastery", desc: "Comprehensive final review for AP Calculus and collegiate mathematics." }
  ]
};

// Realistic Module Titles for UK Curriculum (Key Stages & GCSE / A-Levels terminology)
const UK_GRADE_TOPICS = {
  1: [
    { title: "Number & Place Value", desc: "Counting to 100, reading and writing numbers, and place value basics." },
    { title: "Addition & Subtraction to 20", desc: "Using concrete objects, pictorial representations, and number lines." },
    { title: "Fractions Intro (Half & Quarter)", desc: "Recognizing, finding, and naming a half and a quarter as equal parts." },
    { title: "Measurement: Lengths & Heights", desc: "Measuring and recording lengths, heights, weights, and capacities." },
    { title: "Time: Hours & Half Hours", desc: "Telling the time to the hour and half past the hour, and drawing hands." },
    { title: "Geometry: 2D Shapes", desc: "Recognizing and naming common 2D shapes including circles, triangles, rectangles." },
    { title: "Geometry: 3D Shapes", desc: "Recognizing and naming common 3D shapes including cuboids, pyramids, spheres." },
    { title: "Money & Coins", desc: "Recognizing and knowing the value of different denominations of coins and notes." },
    { title: "Position & Direction", desc: "Describing position, direction, and movement, including whole, half, and quarter turns." },
    { title: "Comparing Quantities", desc: "Using language such as equal to, more than, less than, fewer, and most." },
    { title: "Number Bonds to 20", desc: "Representing and using number bonds and related subtraction facts within 20." },
    { title: "Grouping & Sharing Basics", desc: "Solving simple one-step multiplication and division problems using concrete resources." },
    { title: "Simple Patterns", desc: "Ordering objects and shapes in repeating patterns and sequences." },
    { title: "Year 1 Mathematics Review", desc: "Consolidating key Year 1 numeracy standards." }
  ],
  2: [
    { title: "Place Value to 100", desc: "Comparing and ordering numbers from 0 up to 100; using <, > and = signs." },
    { title: "Addition & Subtraction within 100", desc: "Adding and subtracting two two-digit numbers using mental arithmetic." },
    { title: "Multiplication Tables (2, 5, 10)", desc: "Recall and use multiplication and division facts for the 2, 5 and 10 times tables." },
    { title: "Fractions: 1/3, 1/4, 2/4, 3/4", desc: "Recognizing, finding, naming, and writing simple fractions of shapes." },
    { title: "Measurement: Metres & Centimetres", desc: "Choosing and using appropriate standard units to estimate and measure." },
    { title: "Money: Combinations of Coins", desc: "Finding different combinations of coins that equal the same amounts." },
    { title: "Time: 15-Minute Intervals", desc: "Telling and writing the time to five minutes, including quarter past/to the hour." },
    { title: "Geometry: Properties of 2D Shapes", desc: "Identifying sides, lines of symmetry, and vertices of 2D shapes." },
    { title: "Geometry: Properties of 3D Shapes", desc: "Identifying edges, vertices, and faces of 3D shapes." },
    { title: "Position & Turns", desc: "Distinguishing between rotation as a turn, and in terms of right angles." },
    { title: "Data: Tally Charts & Pictograms", desc: "Interpreting and constructing simple pictograms, tally charts, and block diagrams." },
    { title: "Multiplication & Division Word Problems", desc: "Solving problems using arrays, repeated addition, mental methods, and facts." },
    { title: "Addition & Subtraction Inverse Relations", desc: "Showing that addition of two numbers can be done in any order (commutative)." },
    { title: "Year 2 Mathematics Review", desc: "Reviewing Key Stage 1 curriculum requirements." }
  ],
  3: [
    { title: "Place Value to 1000", desc: "Finding 10 or 100 more or less than a given number; recognizing value." },
    { title: "3-Digit Addition & Subtraction", desc: "Adding and subtracting numbers mentally and using formal written methods." },
    { title: "Multiplication Tables (3, 4, 8)", desc: "Recall and use multiplication and division facts for the 3, 4, and 8 tables." },
    { title: "Fractions: Unit & Non-Unit", desc: "Counting up and down in tenths; recognizing tenths arise from dividing." },
    { title: "Equivalent Fractions", desc: "Recognizing and showing equivalent fractions with small denominators." },
    { title: "Measurement: Perimeter", desc: "Measuring and calculating the perimeter of simple 2D shapes." },
    { title: "Money: Adding & Subtracting", desc: "Adding and subtracting amounts of money to give change, using both £ and p." },
    { title: "Time: 12 & 24 Hour Clocks", desc: "Telling time from a 12-hour analogue clock and 24-hour digital clocks." },
    { title: "Geometry: Right Angles", desc: "Identifying right angles, perpendicular lines, and parallel lines." },
    { title: "Statistics: Bar Charts & Tables", desc: "Interpreting and presenting data using bar charts, pictograms, and tables." },
    { title: "Comparing Fractions", desc: "Comparing and ordering unit fractions, and fractions with the same denominators." },
    { title: "Multiplication & Division Algorithms", desc: "Writing and calculating mathematical statements for multiplication/division." },
    { title: "Measuring Mass & Capacity", desc: "Measuring, comparing, adding, and subtracting lengths, mass, and volume/capacity." },
    { title: "Year 3 Mathematics Review", desc: "Consolidating Year 3 math standards." }
  ],
  4: [
    { title: "Number & Decimals Place Value", desc: "Finding 1000 more or less; counting backwards through zero to negative numbers." },
    { title: "Multiplication Tables to 12×12", desc: "Recall multiplication and division facts for multiplication tables up to 12 × 12." },
    { title: "Division & Remainders", desc: "Multiplying two-digit and three-digit numbers by a one-digit number." },
    { title: "Fractions & Decimals Equivalents", desc: "Recognizing and writing decimal equivalents of any number of tenths or hundredths." },
    { title: "Rounding Decimals", desc: "Rounding decimals with one decimal place to the nearest whole number." },
    { title: "Measurement: Area of Rectilinear Shapes", desc: "Finding the area of rectilinear shapes by counting squares." },
    { title: "Time: Hours, Minutes & Seconds", desc: "Converting time between analogue and digital 12- and 24-hour clocks." },
    { title: "Geometry: Triangles & Quadrilaterals", desc: "Comparing and classifying geometric shapes based on their properties." },
    { title: "Geometry: Symmetry", desc: "Identifying line symmetry in 2D shapes presented in different orientations." },
    { title: "Geometry: Coordinates in First Quadrant", desc: "Describing positions on a 2D grid as coordinates in the first quadrant." },
    { title: "Statistics: Time Graphs", desc: "Interpreting and presenting discrete and continuous data using graphs." },
    { title: "Fractions Operations", desc: "Adding and subtracting fractions with the same denominator." },
    { title: "Roman Numerals to 100", desc: "Reading Roman numerals to 100 (I to C) and understanding place value." },
    { title: "Year 4 Mathematics Review", desc: "Consolidating Year 4 math concepts." }
  ],
  5: [
    { title: "Place Value to 1,000,000", desc: "Reading, writing, ordering, and comparing numbers to at least 1,000,000." },
    { title: "Addition & Subtraction Strategies", desc: "Adding and subtracting numbers with more than 4 digits using written methods." },
    { title: "Primes, Factors & Multiples", desc: "Identifying multiples and factors, including finding all factor pairs." },
    { title: "Fractions: Mixed & Improper", desc: "Identifying, naming, and writing equivalent fractions of a given fraction." },
    { title: "Fractions Addition & Subtraction", desc: "Adding and subtracting fractions with denominators that are multiples." },
    { title: "Fractions Multiplication", desc: "Multiplying proper fractions and mixed numbers by whole numbers." },
    { title: "Decimals & Percentages", desc: "Writing decimals as fractions and understanding percent sign as hundredths." },
    { title: "Measurement: Volume & Capacity", desc: "Understanding and comparing metric units and estimating volume." },
    { title: "Geometry: Measuring Angles", desc: "Measuring and drawing angles in degrees using a protractor." },
    { title: "Geometry: Shapes Properties", desc: "Distinguishing between regular and irregular polygons." },
    { title: "Position: Coordinates & Reflection", desc: "Representing the position of a shape following a reflection or translation." },
    { title: "Statistics: Line Graphs", desc: "Solving comparison, sum, and difference problems using line graphs." },
    { title: "Square & Cube Numbers", desc: "Recognizing and using square numbers and cube numbers, and notation." },
    { title: "Year 5 Mathematics Review", desc: "Consolidating Year 5 numeracy standards." }
  ],
  6: [
    { title: "Place Value to 10,000,000", desc: "Reading, writing, ordering, and comparing numbers up to 10 million." },
    { title: "Long Multiplication & Division", desc: "Multiplying multi-digit numbers and dividing using formal written methods." },
    { title: "Fractions: Four Operations", desc: "Adding, subtracting, multiplying, and dividing fractions with unlike denominators." },
    { title: "Decimals Operations", desc: "Multiplying one-digit numbers with up to two decimal places by whole numbers." },
    { title: "Percentages of Amounts", desc: "Solving problems involving the calculation of percentages and rates." },
    { title: "Ratio & Proportion Concepts", desc: "Solving problems involving relative sizes and scale factors." },
    { title: "Algebra: Expressions & Formulae", desc: "Using simple formulae; generating linear number sequences." },
    { title: "Algebra: Missing Number Equations", desc: "Expressing missing number problems algebraically." },
    { title: "Area & Perimeter Formulas", desc: "Calculating area of parallelograms and triangles; volume of cubes/cuboids." },
    { title: "Geometry: Angles in Polygons", desc: "Finding unknown angles in triangles, quadrilaterals, and regular polygons." },
    { title: "Geometry: Coordinates (4 Quadrants)", desc: "Describing positions on the full coordinate grid (all four quadrants)." },
    { title: "Statistics: Pie Charts & Line Graphs", desc: "Interpreting and constructing pie charts and line graphs to solve problems." },
    { title: "Statistics: Calculating Mean", desc: "Calculating and interpreting the mean average of a set of data." },
    { title: "Year 6 SATs Preparation Mastery", desc: "Comprehensive SATs revision for Key Stage 2 standards." }
  ],
  7: [
    { title: "Algebraic Thinking", desc: "Describing sequences, writing algebraic expressions, and substituting values." },
    { title: "Place Value & Rounding (Significant Figures)", desc: "Rounding to decimal places, significant figures, and estimation." },
    { title: "Fractions, Decimals, Percents", desc: "Converting fluently and ordering fractions, decimals, and percentages." },
    { title: "Proportion & Directed Numbers", desc: "Adding and subtracting directed numbers; understanding direct proportion." },
    { title: "Lines & Angles", desc: "Classifying angles, parallel lines, alternate/corresponding angles." },
    { title: "Number Sense & Order of Operations", desc: "Applying BODMAS rules to complex multi-step numerical calculations." },
    { title: "Probability Intro", desc: "Calculating experimental and theoretical probabilities of single events." },
    { title: "Area & Perimeter of Composites", desc: "Calculating area of trapeziums, parallelograms, and compound shapes." },
    { title: "Sequences (Arithmetic & Geometric)", desc: "Finding the term-to-term rule and nth term of arithmetic sequences." },
    { title: "Solving Equations (Linear)", desc: "Solving one-step and two-step linear equations algebraically." },
    { title: "Representing Data", desc: "Constructing and interpreting frequency tables, bar charts, and stem-and-leaf." },
    { title: "3D Geometry & Nets", desc: "Visualizing 3D shapes from their plans, elevations, and 2D nets." },
    { title: "Ratio & Scale Factors", desc: "Dividing quantities into ratios, and working with scale drawings." },
    { title: "Year 7 Mathematics Review", desc: "Comprehensive review of Year 7 Key Stage 3 math standards." }
  ],
  8: [
    { title: "Indices & Prime Factorisation", desc: "Using index notation and writing numbers as products of prime factors (HCF/LCM)." },
    { title: "Standard Form (Scientific Notation)", desc: "Converting numbers between standard form and ordinary numbers." },
    { title: "Algebra: Brackets & Factorisation", desc: "Expanding single brackets and factorising linear expressions." },
    { title: "Equations & Inequalities", desc: "Solving equations with variables on both sides and graphing inequalities." },
    { title: "Linear Graphs (y = mx + c)", desc: "Plotting linear functions and calculating gradient and intercept." },
    { title: "Real-Life Graphs", desc: "Interpreting conversion graphs, distance-time graphs, and financial graphs." },
    { title: "Trangles & Angle Sum Proofs", desc: "Proving interior angles of triangles sum to 180 degrees." },
    { title: "Pythagoras' Theorem", desc: "Calculating hypotenuse and shorter side lengths in right-angled triangles." },
    { title: "Volume of Prisms & Cylinders", desc: "Calculating cross-sectional area and volume of prisms." },
    { title: "Percentages: Growth & Decay", desc: "Solving reverse percentage and simple interest problems." },
    { title: "Averages & Spread Comparisons", desc: "Comparing data using mean, median, mode, and range." },
    { title: "Probability: Venn Diagrams", desc: "Using Venn diagrams and sample space diagrams to represent events." },
    { title: "Transformations: Reflection & Rotation", desc: "Reflecting shapes in lines and rotating shapes about centers." },
    { title: "Year 8 Mathematics Review", desc: "Review of Key Stage 3 Year 8 curriculum standards." }
  ],
  9: [
    { title: "GCSE: Quad Expressions", desc: "Expanding double brackets and factorising simple quadratic expressions." },
    { title: "GCSE: Simultaneous Equations", desc: "Solving linear simultaneous equations algebraically and graphically." },
    { title: "GCSE: Indices Laws", desc: "Working with fractional, negative, and zero indices." },
    { title: "GCSE: Pythagoras & Basic Trig", desc: "Applying SOH CAH TOA to find missing lengths and angles." },
    { title: "GCSE: Circle Theorems Basics", desc: "Angle at center is twice angle at circumference, angles in semicircle." },
    { title: "GCSE: Standard Form & Estimation", desc: "Performing operations (+, -, *, /) on numbers in standard form." },
    { title: "GCSE: Graphs of Quadratics", desc: "Plotting quadratic curves and identifying turning points." },
    { title: "GCSE: Real-Life Proportion", desc: "Working with direct and inverse proportion variables." },
    { title: "GCSE: Surface Area of Cylinders & Spheres", desc: "Calculating surface area and volume of cylinders, cones, and spheres." },
    { title: "GCSE: Cumulative Frequency & Box Plots", desc: "Drawing cumulative frequency curves and estimating median/IQR." },
    { title: "GCSE: Probability Tree Diagrams", desc: "Calculating probability of independent and dependent combined events." },
    { title: "GCSE: Algebraic Fractions Intro", desc: "Simplifying and solving simple algebraic fractions." },
    { title: "GCSE: Vectors Introduction", desc: "Adding vectors geometrically and column vectors arithmetic." },
    { title: "Year 9 GCSE Foundation Mastery", desc: "Evaluating and preparing foundations for GCSE syllabus." }
  ],
  10: [
    { title: "GCSE Higher: Algebra Mechanics", desc: "Completing the square, solving quadratic inequalities, and formulas." },
    { title: "GCSE Higher: Sine & Cosine Rules", desc: "Solving non-right-angled triangles using Sine and Cosine rules." },
    { title: "GCSE Higher: Advanced Circle Theorems", desc: "Alternate segment theorem, cyclic quadrilaterals, tangents." },
    { title: "GCSE Higher: Sequences (Quadratic & Fibonacci)", desc: "Finding the nth term of quadratic and other non-linear sequences." },
    { title: "GCSE Higher: Trigonometric Graphs", desc: "Graphing sine, cosine, tangent functions and applying transformations." },
    { title: "GCSE Higher: Bounds & Error Intervals", desc: "Calculating upper and lower bounds for arithmetic operations." },
    { title: "GCSE Higher: Similarity & Congruence Proofs", desc: "Proving triangles congruent and finding volume/area scale factors." },
    { title: "GCSE Higher: Functions (Composite & Inverse)", desc: "Evaluating composite functions f(g(x)) and finding inverse f^-1(x)." },
    { title: "GCSE Higher: Iterative Methods", desc: "Solving equations using iterative formulas." },
    { title: "GCSE Higher: Vectors Proofs", desc: "Using vector geometry to prove lines are parallel or collinear." },
    { title: "GCSE Higher: Histograms", desc: "Drawing and interpreting histograms with unequal class widths." },
    { title: "GCSE Higher: Conditional Probability", desc: "Calculating probability where the outcome of one event affects another." },
    { title: "GCSE Higher: Algebraic Proofs", desc: "Constructing rigorous mathematical proofs for odd/even numbers, etc." },
    { title: "Year 10 GCSE Higher Exam Prep", desc: "Mastery and mocks preparation for GCSE Year 10 math." }
  ],
  11: [
    { title: "A-Level Prep: Algebraic Methods", desc: "Proof by contradiction, factor theorem, and algebraic division." },
    { title: "A-Level Prep: Quadratics & Discriminants", desc: "Using discriminants to determine number of roots of quadratics." },
    { title: "A-Level Prep: Coordinate Geometry (Circles)", desc: "Equations of circles, tangents to circles, intersection of lines." },
    { title: "A-Level Prep: Binomial Expansion", desc: "Expanding expressions of the form (a+bx)^n for integer power n." },
    { title: "A-Level Prep: Trigonometric Identities", desc: "Using sin^2 x + cos^2 x = 1 and sin x / cos x = tan x." },
    { title: "A-Level Prep: Exponentials & Logs", desc: "Solving exponential equations using natural logarithms and base 10." },
    { title: "A-Level Prep: Differentiation Basics", desc: "Finding gradients of curves using limits and differentiation rules." },
    { title: "A-Level Prep: Integration Basics", desc: "Finding antiderivatives and evaluating definite integrals." },
    { title: "A-Level Prep: Vectors in 2D", desc: "Calculating magnitude, direction, and unit vectors in 2D." },
    { title: "A-Level Prep: Data Presentation", desc: "Histograms, box plots, scatter graphs, and regression lines." },
    { title: "A-Level Prep: Probability Distributions", desc: "Calculating probabilities using the Binomial distribution." },
    { title: "A-Level Prep: Hypothesis Testing", desc: "Conducting one-tailed and two-tailed hypothesis tests." },
    { title: "A-Level Prep: Kinematics Basics", desc: "Constant acceleration equations (suvat formulas) and motion graphs." },
    { title: "Year 11 GCSE Finals & Transition", desc: "Concluding GCSE Higher exams and transitioning to Advanced Level maths." }
  ],
  12: [
    { title: "A-Level: Proof & Algebra", desc: "Rigorous proofs, algebraic division, and partial fractions." },
    { title: "A-Level: Functions & Graphs", desc: "Modulus functions, composite, inverse, and coordinate transformations." },
    { title: "A-Level: Sequences & Series", desc: "Arithmetic and geometric progressions, summation notation, cobweb plots." },
    { title: "A-Level: Binomial Theorem (Any Power)", desc: "Expanding (1+x)^n where n is any rational number." },
    { title: "A-Level: Radian Measure & Sector Area", desc: "Solving trig equations and finding areas using radians." },
    { title: "A-Level: Trigonometric Addition Formulae", desc: "Double angle, half angle, and R-cos(x-alpha) form equations." },
    { title: "A-Level: Parametric Equations", desc: "Converting parametric equations to Cartesian forms and sketching." },
    { title: "A-Level: Differentiation (Chain, Product, Quotient)", desc: "Differentiating trigonometric, exponential, logarithmic, and implicit functions." },
    { title: "A-Level: Integration Techniques", desc: "Integration by substitution, by parts, and using partial fractions." },
    { title: "A-Level: Differential Equations", desc: "Solving first-order differential equations with separable variables." },
    { title: "A-Level: Numerical Methods", desc: "Newton-Raphson method and trapezium rule for definite integrals." },
    { title: "A-Level: Vectors in 3D", desc: "Representing lines and vectors in three-dimensional Cartesian space." },
    { title: "A-Level: Mechanics (Forces & Friction)", desc: "Newton's laws of motion, resolving forces on inclined planes, friction." },
    { title: "Year 12 A-Level Mathematics Mastery", desc: "Comprehensive final preparation for advanced collegiate calculus." }
  ]
};

// Export raw curriculum data
export const CURRICULUM_DATA = {
  US: Array.from({ length: 12 }, (_, i) => {
    const gradeNum = i + 1;
    const topics = US_GRADE_TOPICS[gradeNum] || [];
    const moduleCount = topics.length || 14;
    const modules = Array.from({ length: moduleCount }, (_, mIdx) => {
      const topic = topics[mIdx] || { title: `US Grade ${gradeNum} Core Topic ${mIdx + 1}`, desc: "Essential mathematical concept." };
      const paddedNum = (mIdx + 1).toString().padStart(2, '0');
      return {
        moduleNumber: paddedNum,
        title: topic.title,
        description: topic.desc,
        learningOutcomes: [
          `Develop visual intuition for ${topic.title}`,
          "Solve speed-math problems with shortcut methods",
          "Apply mathematical reasoning to solve multi-step problems"
        ],
        topics: [
          "Interactive exercises & visual proofs",
          "Mental math shortcuts & reasoning",
          "Comprehensive review & practice"
        ]
      };
    });
    return {
      grade: gradeNum,
      modules
    };
  }),
  UK: Array.from({ length: 12 }, (_, i) => {
    const gradeNum = i + 1;
    const topics = UK_GRADE_TOPICS[gradeNum] || [];
    const moduleCount = topics.length || 14;
    const modules = Array.from({ length: moduleCount }, (_, mIdx) => {
      const topic = topics[mIdx] || { title: `UK Grade ${gradeNum} Core Topic ${mIdx + 1}`, desc: "Key Stage mathematical learning objective." };
      const paddedNum = (mIdx + 1).toString().padStart(2, '0');
      return {
        moduleNumber: paddedNum,
        title: topic.title,
        description: topic.desc,
        learningOutcomes: [
          `Develop visual intuition for ${topic.title}`,
          "Solve speed-math problems with shortcut methods",
          "Apply mathematical reasoning to solve multi-step problems"
        ],
        topics: [
          "Interactive exercises & visual proofs",
          "Mental math shortcuts & reasoning",
          "Comprehensive review & practice"
        ]
      };
    });
    return {
      grade: gradeNum,
      modules
    };
  })
};
