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
    { title: "Place Value & Scientific Notation", desc: "Understanding extremely large and small numbers using powers of 10 and scientific notation." },
    { title: "Addition & Subtraction", desc: "Performing mental and column operations with multi-digit numbers and decimals." },
    { title: "Multiplication & Division", desc: "Solving multi-digit multiplication and long division algorithms." },
    { title: "Fractions – Addition & Subtraction", desc: "Adding and subtracting fractions and mixed numbers with unlike denominators." },
    { title: "Fractions – Multiplication & Division", desc: "Multiplying and dividing proper fractions, improper fractions, and mixed numbers." },
    { title: "Simplifying Fractions", desc: "Reducing fractions to their simplest form using greatest common divisors." },
    { title: "Fractions vs. Decimals", desc: "Converting numbers between fractional forms and decimal notations." },
    { title: "Decimals – Addition & Subtraction", desc: "Lining up decimals to solve addition and subtraction equations." },
    { title: "Decimals – Multiplication", desc: "Multiplying decimals with whole numbers and other decimals." },
    { title: "Decimals – Division", desc: "Dividing decimals by integers and other decimals." },
    { title: "Measurement", desc: "Converting units within and between standard and metric systems." },
    { title: "Geometry", desc: "Understanding lines, angles, area, perimeter, volume, and coordinate geometry." },
    { title: "Factoring", desc: "Finding prime factorizations, greatest common factors, and least common multiples." },
    { title: "Exponents", desc: "Evaluating bases raised to whole-number exponents." },
    { title: "Proportions", desc: "Understanding ratios, rates, unit rates, and proportional relationships." },
    { title: "Percents", desc: "Converting between fractions, decimals, and percentages, and solving basic percentage problems." },
    { title: "Integers", desc: "Comparing, ordering, and understanding negative and positive numbers on a number line." }
  ],
  7: [
    { title: "Multi-Step Problems with Percents", desc: "Solving complex percentage problems, including tax, tip, interest, markups, and discounts." },
    { title: "Graphing Solutions to Two-Step Inequalities", desc: "Solving linear inequalities in one variable and graphing the solution sets on a number line." },
    { title: "Addition and Subtraction of Integers", desc: "Adding and subtracting positive and negative whole numbers using visual models and number lines." },
    { title: "Probability of Simple Events", desc: "Calculating the likelihood of single events occurring using theoretical and experimental probability." },
    { title: "Interpreting Graphs of Proportional Relationships", desc: "Analyzing graphs of proportional relationships to determine the constant of proportionality (slope)." }
  ],
  8: [
    { title: "Graphing Lines from Equations in Slope-Intercept Form", desc: "Plotting linear equations on a coordinate plane using the slope (m) and y-intercept (b)." },
    { title: "Pythagorean Theorem – Finding the Length of the Hypotenuse", desc: "Using the formula a² + b² = c² to calculate the longest side of a right-angled triangle." },
    { title: "Reflections – Graphing the Image", desc: "Performing reflections of shapes across the x-axis, y-axis, or other lines on a coordinate grid." },
    { title: "Predictions and Trends in Scatter Plots", desc: "Analyzing scatter plots to identify positive, negative, or no association, and sketching lines of best fit." }
  ],
  9: [
    { title: "Solving Linear Equations", desc: "Solving one-step, multi-step, and variables-on-both-sides linear equations." },
    { title: "Solving Linear Inequalities", desc: "Solving and graphing linear inequalities, including compound inequalities." },
    { title: "Graphing Linear Functions", desc: "Understanding function notation and graphing linear functions in various forms." },
    { title: "Writing Linear Functions", desc: "Writing equations of lines in slope-intercept, point-slope, and standard forms." },
    { title: "Solving Systems of Linear Equations", desc: "Solving systems of two linear equations using graphing, substitution, and elimination." },
    { title: "Exponential Functions and Sequences", desc: "Evaluating and graphing exponential functions, growth, decay, and geometric sequences." },
    { title: "Polynomial Equations and Factoring", desc: "Adding, subtracting, multiplying, and factoring polynomial expressions." },
    { title: "Graphing Quadratic Functions", desc: "Graphing quadratic equations and identifying vertices, axes of symmetry, and intercepts." },
    { title: "Solving Quadratic Equations", desc: "Solving quadratics by factoring, taking square roots, completing the square, and using the quadratic formula." },
    { title: "Radical Functions and Equations", desc: "Graphing radical functions and solving radical equations." },
    { title: "Data Analysis and Displays", desc: "Interpreting data using box plots, histograms, and scatter plots, and analyzing correlation." }
  ],
  10: [
    { title: "Basics of Geometry", desc: "Understanding points, lines, planes, segments, angles, and midpoints." },
    { title: "Reasoning and Proofs", desc: "Using inductive and deductive reasoning, conditional statements, and writing geometric proofs." },
    { title: "Parallel and Perpendicular Lines", desc: "Proving lines parallel and writing equations of parallel and perpendicular lines." },
    { title: "Transformations", desc: "Performing translations, reflections, rotations, and dilations in the coordinate plane." },
    { title: "Congruent Triangles", desc: "Proving triangle congruence using SSS, SAS, ASA, AAS, and HL theorems." },
    { title: "Relationships Within Triangles", desc: "Studying midsegments, perpendicular bisectors, angle bisectors, medians, and altitudes." },
    { title: "Quadrilaterals and Other Polygons", desc: "Analyzing properties of parallelograms, trapezoids, kites, and regular polygons." },
    { title: "Similarity", desc: "Using ratios and proportions to prove triangles similar and solve scale models." },
    { title: "Right Triangles and Trigonometry", desc: "Applying Pythagorean theorem, special right triangles, and trigonometric ratios (sine, cosine, tangent)." },
    { title: "Circles", desc: "Studying tangents, secants, chords, inscribed angles, and equations of circles." },
    { title: "Circumference, Area and Volume", desc: "Calculating circumference, area of polygons, surface area, and volume of three-dimensional solids." },
    { title: "Probability", desc: "Calculating conditional probability, independent and dependent events, and combinations/permutations." }
  ],
  11: [
    { title: "Linear Functions", desc: "Reviewing parent functions, absolute value equations, systems of three equations, and linear programming." },
    { title: "Quadratic Functions", desc: "Graphing quadratic functions and inequalities, and modeling real-world quadratic relationships." },
    { title: "Quadratic Equations and Complex Numbers", desc: "Performing operations on complex numbers and solving quadratics with complex roots." },
    { title: "Polynomial Functions", desc: "Dividing polynomials, finding zeros, graphing polynomial functions, and the Fundamental Theorem of Algebra." },
    { title: "Rational Exponents and Radical Functions", desc: "Evaluating expressions with rational exponents, simplifying radical expressions, and solving equations." },
    { title: "Exponential and Logarithmic Functions", desc: "Graphing exponential/logarithmic functions and applying properties of logarithms to solve equations." },
    { title: "Rational Functions", desc: "Simplifying rational expressions, graphing rational functions, and solving rational equations." },
    { title: "Sequences and Series", desc: "Evaluating arithmetic and geometric sequences and finding sums of infinite series." },
    { title: "Trigonometric Ratios and Functions", desc: "Using radian measure, the unit circle, and graphing sine, cosine, and tangent curves." },
    { title: "Probability", desc: "Calculating permutations, combinations, binomial probability distributions, and normal distributions." },
    { title: "Data Analysis and Statistics", desc: "Analyzing samples, surveys, experiments, and drawing inferences using statistical margins of error." }
  ],
  12: [
    { title: "Introduction to Trigonometry", desc: "Evaluating trigonometric functions on the unit circle and understanding inverse functions." },
    { title: "Graphing Trigonometric Functions", desc: "Graphing sine, cosine, tangent, cosecant, secant, and cotangent curves with phase shifts." },
    { title: "Trigonometric Identities", desc: "Verifying reciprocal, Pythagorean, sum/difference, double-angle, and half-angle identities." },
    { title: "Trigonometric Equations", desc: "Solving algebraic and quadratic-style trigonometric equations over specified intervals." },
    { title: "Oblique Triangles", desc: "Applying the Law of Sines and Law of Cosines to solve non-right-angled triangles." },
    { title: "Vectors", desc: "Calculating vector components, magnitudes, directions, dot products, and cross products." },
    { title: "Polars and Parametrics", desc: "Converting coordinates between polar and rectangular systems, and graphing parametric equations." },
    { title: "Conic Sections", desc: "Analyzing and graphing circles, parabolas, ellipses, and hyperbolas using equations and focal properties." },
    { title: "Rational Functions", desc: "Graphing rational functions by identifying vertical, horizontal, and slant asymptotes." },
    { title: "Piecewise Functions", desc: "Evaluating and graphing piecewise-defined functions, and examining limits and continuity." },
    { title: "Matrices and determinants", desc: "Performing matrix operations, calculating determinants, and solving systems using Cramer's rule." }
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
    { title: "Addition and Subtraction", desc: "Master addition and subtraction strategies and fundamental numerical fluency." },
    { title: "Multiplication and Division", desc: "Understand basic multiplication and division concepts and equal groupings." },
    { title: "Time", desc: "Tell and write time on analogue and digital clocks." },
    { title: "Metric Conversions", desc: "Convert between standard metric units of length, mass, and capacity." },
    { title: "Writing, Simplifying and Ordering Fractions", desc: "Write, simplify, compare, and order basic fractional amounts." },
    { title: "Place Value", desc: "Understand place value and number structure." },
    { title: "Rounding", desc: "Round numbers to the nearest 10, 100, or whole number." },
    { title: "Negative Numbers", desc: "Understand negative numbers and counting below zero." },
    { title: "Powers and Roots", desc: "Introduction to square numbers, powers, and square roots." },
    { title: "BIDMAS (Order of Operations)", desc: "Apply the correct order of operations (Brackets, Indices, Division, Multiplication, Addition, Subtraction)." },
    { title: "Factors and Multiples", desc: "Identify factors, multiples, and common multiples of whole numbers." },
    { title: "Coordinates", desc: "Read and plot coordinates on a grid." },
    { title: "Pictograms", desc: "Interpret and construct pictograms to represent data." }
  ],
  2: [
    { title: "Calculation Problems", desc: "Solve multi-step calculation problems using efficient mental and written methods." },
    { title: "Using a Calculator", desc: "Use a calculator effectively and accurately for complex calculations." },
    { title: "Systematic Listing", desc: "Use systematic listing and counting strategies to find all possible outcomes." },
    { title: "Fractions of an Amount", desc: "Calculate unit and non-unit fractions of quantities and amounts." },
    { title: "Fractions, Decimals and Percentages", desc: "Convert fluently between equivalent fractions, decimals, and percentages." },
    { title: "Simplifying Algebra / Collecting Like Terms", desc: "Simplify algebraic expressions by combining like terms." },
    { title: "Writing an Expression", desc: "Formulate algebraic expressions from word problems and visual representations." },
    { title: "Function Machines", desc: "Use input-output function machines to explore operations and algebraic relationships." },
    { title: "Solving One-Step Equations", desc: "Solve simple linear equations involving a single operation." },
    { title: "Angles", desc: "Identify, measure, and calculate angles on a line and around a point." },
    { title: "Area and Perimeter", desc: "Calculate the area and perimeter of 2D shapes including rectangles and triangles." },
    { title: "Probability", desc: "Calculate basic theoretical probabilities of single events." },
    { title: "Frequency Polygons", desc: "Construct and interpret frequency polygons to analyze data distributions." },
    { title: "Averages: Mean, Median, Mode and Range", desc: "Calculate and compare the mean, median, mode, and range of datasets." },
    { title: "Bar Charts", desc: "Construct and interpret single and dual bar charts." },
    { title: "Stem-and-Leaf Diagrams", desc: "Organize and analyze quantitative data using stem-and-leaf diagrams." }
  ],
  3: [
    { title: "Error Intervals", desc: "Determine error intervals for numbers rounded or truncated to a given degree of accuracy." },
    { title: "Fractions", desc: "Perform operations with proper, improper fractions, and mixed numbers." },
    { title: "Estimating", desc: "Estimate answers to calculations by rounding numbers to 1 significant figure." },
    { title: "Writing and Simplifying Ratios", desc: "Write and simplify ratios in their simplest form." },
    { title: "Sharing in a Ratio", desc: "Share quantities into given two-part or three-part ratios." },
    { title: "Proportion", desc: "Solve direct proportion problems using unitary and scaling methods." },
    { title: "Percentages", desc: "Calculate percentage amounts of quantities with and without a calculator." },
    { title: "Percentage Change", desc: "Calculate percentage increase, decrease, and percentage change." },
    { title: "Exchange Rates", desc: "Convert between different currencies using foreign exchange rates." },
    { title: "Conversions and Units", desc: "Convert between compound units and metric measurement systems." },
    { title: "Scale Drawings", desc: "Interpret and construct scale drawings and map scales." },
    { title: "Best-Buy Questions", desc: "Compare unit prices to solve value-for-money problems." },
    { title: "Substitution", desc: "Substitute positive and negative numbers into algebraic expressions and formulae." },
    { title: "Solving Equations", desc: "Solve linear equations with unknown variables on one or both sides." },
    { title: "Drawing Linear Graphs", desc: "Plot linear graphs using tables of values and y = mx + c." },
    { title: "Area and Circumference of Circles", desc: "Calculate the area and circumference of circles using pi." },
    { title: "Transformations (Rotations, Reflections, Enlargements, Translations, Mixed)", desc: "Perform and describe rotations, reflections, enlargements, translations, and mixed transformations." },
    { title: "Area of Compound Shapes", desc: "Calculate the area of complex 2D shapes by decomposing them into simpler shapes." },
    { title: "Frequency Trees", desc: "Construct and complete frequency trees to represent categorical data." },
    { title: "Two-Way Tables", desc: "Construct and interpret two-way tables to analyze multi-variable data." }
  ],
  4: [
    { title: "Compound Interest and Depreciation", desc: "Calculate compound growth and decay over multiple time periods." },
    { title: "Indices", desc: "Apply index laws for multiplication, division, and powers." },
    { title: "Prime Factors, HCF and LCM", desc: "Express numbers as products of prime factors to find highest common factors and lowest common multiples." },
    { title: "Real-Life and Distance–Time Graphs", desc: "Interpret distance-time graphs and real-life rate graphs." },
    { title: "Inequalities", desc: "Solve linear inequalities and represent solutions on a number line." },
    { title: "Forming and Solving Equations", desc: "Formulate algebraic equations from geometric and word problems and solve them." },
    { title: "Sequences: Finding the nth Term", desc: "Find the nth term formula for linear arithmetic sequences." },
    { title: "Expanding and Factorising", desc: "Expand single and double brackets and factorise linear and simple quadratic expressions." },
    { title: "Pythagoras’ Theorem", desc: "Apply Pythagoras’ theorem to find missing sides in right-angled triangles." },
    { title: "Angles in Parallel Lines", desc: "Identify alternate, corresponding, co-interior, and vertically opposite angles." },
    { title: "Angles in Polygons", desc: "Calculate interior and exterior angle sums of regular and irregular polygons." },
    { title: "Surface Area", desc: "Calculate total surface area of 3D prisms and composite solids." },
    { title: "Volume of Prisms", desc: "Calculate the volume of triangular, rectangular, and polygonal prisms." },
    { title: "Volume and Surface Area of Cylinders", desc: "Use Pi to calculate the volume and surface area of cylinders." },
    { title: "Loci and Construction", desc: "Use ruler and compasses to construct angle bisectors, perpendicular bisectors, and loci." },
    { title: "Bearings", desc: "Measure, calculate, and draw 3-figure bearings." },
    { title: "Plans and Elevations", desc: "Draw front, side elevations, and top plans of 3D solids." },
    { title: "Averages from Frequency Tables", desc: "Calculate estimated mean, modal class, and median interval from grouped frequency tables." },
    { title: "Probability and Relative Frequency", desc: "Compare experimental probability and theoretical probability." },
    { title: "Scatter Graphs", desc: "Plot scatter graphs, identify correlation types, and draw lines of best fit to make predictions." }
  ],
  5: [
    { title: "Writing a Ratio as a Fraction or Linear Function", desc: "Convert ratios into fractional forms and linear functional relationships." },
    { title: "Direct and Inverse Proportion", desc: "Formulate direct and inverse proportion equations (y = kx, y = k/x)." },
    { title: "Reverse Percentages", desc: "Find original values prior to percentage increases or decreases." },
    { title: "Standard Form", desc: "Write numbers in standard index form and perform arithmetic operations." },
    { title: "Speed, Density and Compound Measures", desc: "Calculate speed, distance, time, mass, volume, density, and pressure." },
    { title: "Changing the Subject of a Formula", desc: "Rearrange algebraic formulas where the new subject appears once or multiple times." },
    { title: "Expanding and Factorising Quadratics", desc: "Expand double brackets and factorise quadratics of the form x^2 + bx + c." },
    { title: "Solving Quadratics", desc: "Solve quadratic equations by factorising and finding roots." },
    { title: "Drawing Quadratic Graphs", desc: "Plot quadratic curves and identify roots, intercepts, and turning points." },
    { title: "Drawing Cubic and Reciprocal Graphs", desc: "Recognize and sketch cubic and reciprocal (y = 1/x) graph shapes." },
    { title: "Simultaneous Equations", desc: "Solve linear simultaneous equations by elimination and substitution." },
    { title: "Solving Simultaneous Equations Graphically", desc: "Find graphical intersection points of linear functions." },
    { title: "Midpoint of a Line Segment", desc: "Calculate coordinate midpoints between two points in 2D space." },
    { title: "Gradient of a Line", desc: "Calculate gradients of straight lines using change in y divided by change in x." },
    { title: "Equation of a Line", desc: "Find equations of straight lines in y = mx + c form." },
    { title: "Spheres and Cones", desc: "Calculate volume and surface area of spheres, hemispheres, and cones." },
    { title: "Sector Areas and Arc Lengths", desc: "Calculate arc lengths and areas of circle sectors." },
    { title: "Similar Shapes: Lengths", desc: "Use scale factors to calculate missing lengths in mathematically similar shapes." },
    { title: "SOHCAHTOA (Trigonometry)", desc: "Use sine, cosine, and tangent ratios to find missing sides and angles in right triangles." },
    { title: "Exact Trigonometric Values", desc: "Know and use exact values for sin, cos, and tan of 0°, 30°, 45°, 60°, and 90°." },
    { title: "Vectors", desc: "Represent vectors graphically and perform vector arithmetic." },
    { title: "Probability Trees", desc: "Construct probability tree diagrams for independent and dependent events." },
    { title: "Venn Diagrams", desc: "Use Venn diagrams to calculate probabilities and set relationships." }
  ],
  6: [
    { title: "Converting Recurring Decimals to Fractions", desc: "Convert recurring decimals to exact simplified fractions algebraically." },
    { title: "Fractional and Negative Indices", desc: "Evaluate expressions with negative and fractional index powers." },
    { title: "Product Rule for Counting", desc: "Use the product rule to calculate total combinations of choices." },
    { title: "Repeated Percentage Change", desc: "Solve complex multi-step percentage change and growth/decay problems." },
    { title: "Expanding Triple Brackets", desc: "Expand products of three linear binomial brackets." },
    { title: "Parallel and Perpendicular Lines", desc: "Determine equations of parallel and perpendicular lines using m1 × m2 = -1." },
    { title: "Inequalities on Graphs", desc: "Shade regions on coordinate axes representing system of linear inequalities." },
    { title: "Similar Shapes: Area and Volume", desc: "Apply length, area, and volume scale factors (k, k^2, k^3) to similar solids." },
    { title: "Enlargement with Negative Scale Factors", desc: "Enlarge shapes using negative scale factors about a center of enlargement." },
    { title: "Circle Theorems", desc: "Apply formal circle theorems to prove and find geometric angles." },
    { title: "Cumulative Frequency", desc: "Construct cumulative frequency tables and draw curves to estimate median and quartiles." },
    { title: "Box Plots", desc: "Construct and compare box plots using minimum, lower quartile, median, upper quartile, and maximum values." },
    { title: "Capture–Recapture", desc: "Use capture-recapture method to estimate total population sizes." }
  ],
  7: [
    { title: "Surds", desc: "Simplify surds, expand expressions containing surds, and rationalize denominators." },
    { title: "Bounds", desc: "Find upper and lower bounds for calculations involving rounded measurements." },
    { title: "Direct and Inverse Proportion", desc: "Solve non-linear proportion problems involving powers (y ∝ x^2, y ∝ 1/x^2)." },
    { title: "Quadratic Formula", desc: "Solve non-factorisable quadratic equations using the quadratic formula." },
    { title: "Factorising Harder Quadratics", desc: "Factorise quadratics where the coefficient of x^2 is greater than 1 (ax^2 + bx + c)." },
    { title: "Algebraic Fractions", desc: "Simplify, add, subtract, multiply, and divide complex algebraic fractions." },
    { title: "Rearranging Harder Formulae", desc: "Change the subject of formulas where the subject appears in fractions or squared terms." },
    { title: "Trigonometric and Exponential Graphs", desc: "Sketch sine, cosine, tangent, and exponential growth/decay graphs." },
    { title: "Inverse and Composite Functions", desc: "Find inverse functions f^-1(x) and evaluate composite functions fg(x)." },
    { title: "Solving Equations Using Iteration", desc: "Use numerical iterative formulas x_{n+1} = f(x_n) to locate roots of equations." },
    { title: "Finding the Area of Any Triangle", desc: "Use 1/2 a b sin C to find the area of non-right-angled triangles." },
    { title: "Sine Rule", desc: "Apply the Sine Rule to find missing sides and angles in non-right-angled triangles." },
    { title: "Cosine Rule", desc: "Apply the Cosine Rule to calculate sides and angles in non-right-angled triangles." },
    { title: "Congruent Triangles", desc: "Prove triangle congruence using SSS, SAS, ASA, and RHS criteria." },
    { title: "3D Pythagoras and Trigonometry", desc: "Apply Pythagoras and SOHCAHTOA in three-dimensional shapes and cuboids." },
    { title: "Histograms", desc: "Construct and interpret histograms with unequal class intervals using frequency density." },
    { title: "Conditional Probability", desc: "Calculate conditional probabilities P(A|B) using tree diagrams and Venn diagrams." }
  ],
  8: [
    { title: "Quadratic Simultaneous Equations", desc: "Solve simultaneous equations where one is linear and one is quadratic." },
    { title: "Transforming Graphs: y=f(x)", desc: "Apply graph transformations including f(x+a), f(x)+a, f(-x), and -f(x)." },
    { title: "Proof", desc: "Construct rigorous algebraic and geometric proofs." },
    { title: "Completing the Square", desc: "Complete the square for quadratic expressions to find turning points and solve equations." },
    { title: "Finding the nth Term of a Quadratic Sequence", desc: "Find the closed-form nth term expression (an^2 + bn + c) for quadratic sequences." },
    { title: "Quadratic Inequalities", desc: "Solve quadratic inequalities and state valid region intervals." },
    { title: "Velocity–Time Graphs", desc: "Calculate acceleration from gradients and distance traveled from areas under velocity-time curves." },
    { title: "Proof of Circle Theorems", desc: "Construct formal geometric proofs for standard circle theorems." },
    { title: "Perpendicular Lines and the Equation of a Tangent", desc: "Find equations of tangents to circles at given boundary points." },
    { title: "Vector Proof Questions", desc: "Use vector geometry to prove lines are parallel, collinear, or divided in specific ratios." },
    { title: "Probability Equation Questions", desc: "Solve complex multi-step probability problems leading to algebraic equations." }
  ]
};

export const GRADE_DESCRIPTIONS = {
  'Grade 1': 'Master fundamental addition, subtraction, place value, and basic measurement concepts. Build early numerical fluency and spatial awareness through visual problem-solving.',
  'Grade 2': 'Develop strong addition and subtraction strategies within 1,000, along with early multiplication foundations. Explore 2D/3D shapes, time, money, and simple word problems.',
  'Grade 3': 'Build fluency in multiplication and division while understanding basic fractions and area models. Strengthen analytical thinking through multi-step real-world arithmetic problems.',
  'Grade 4': 'Extend operations to multi-digit multiplication, long division, and equivalent fraction arithmetic. Analyze angles, geometric classifications, and early decimal concepts.',
  'Grade 5': 'Perform complex operations with multi-digit numbers, fractions, and decimals with precision. Explore coordinate planes, volume calculation, and foundational algebraic thinking.',
  'Grade 6': 'Transition to ratios, unit rates, percentages, and basic algebraic expressions. Master operations with positive and negative integers alongside statistical variability.',
  'Grade 7': 'Solve multi-step proportional relationships, rational number equations, and linear inequalities. Investigate geometric scale drawings, circumference, area, and basic probability.',
  'Grade 8': 'Work with linear equations, systems, functions, and the Pythagorean theorem. Gain mastery over exponents, scientific notation, and irrational numbers to prep for high school.',
  'Algebra 1': 'Solve and graph linear, quadratic, and exponential functions, inequalities, and systems. Build the core mathematical foundation for advanced high school problem-solving.',
  'Geometry': 'Explore Euclidean geometry, formal proofs, coordinate geometry, and trigonometry basics. Deepen spatial logic through congruence, similarity, transformations, and 3D measurements.',
  'Algebra 2': 'Analyze complex polynomial, rational, radical, logarithmic, and trigonometric functions. Model real-world phenomena with advanced systems, sequences, and series.',
  'Precalculus': 'Master advanced trigonometry, vectors, matrices, parametric equations, and polar coordinates. Study limits and continuous functions to bridge seamlessly into calculus.',
  'Statistics': 'Interpret data distributions, regression models, probability rules, and random variables. Conduct hypothesis testing and confidence intervals to analyze real-world data.',
  'Calculus': 'Understand differential and integral calculus through rates of change, accumulation, and limits. Apply derivatives, integrals, and series to solve complex physics and optimization problems.',
  'PSAT Math': 'Target essential algebraic reasoning, data analysis, and advanced math concepts tested on the PSAT. Sharpen test-taking efficiency, pacing strategies, and fundamental problem-solving.',
  'PSAT': 'Target essential algebraic reasoning, data analysis, and advanced math concepts tested on the PSAT. Sharpen test-taking efficiency, pacing strategies, and fundamental problem-solving.',
  'SAT Math': 'Master Heart of Algebra, Problem Solving & Data Analysis, and Advanced Math modules. Learn targeted strategy, Desmos utilization, and timing techniques for a competitive score.',
  'SAT': 'Master Heart of Algebra, Problem Solving & Data Analysis, and Advanced Math modules. Learn targeted strategy, Desmos utilization, and timing techniques for a competitive score.'
};

export const CURRICULUM_DATA = {
  US: [
    ...Array.from({ length: 12 }, (_, i) => {
      const gradeNum = i + 1;
      const topics = US_GRADE_TOPICS[gradeNum] || [];
      const moduleCount = topics.length || 14;
      
      let label = `Grade ${gradeNum}`;
      if (gradeNum === 9) label = "Algebra 1";
      else if (gradeNum === 10) label = "Geometry";
      else if (gradeNum === 11) label = "Algebra 2";
      else if (gradeNum === 12) label = "Precalculus";

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
        id: gradeNum.toString(),
        label,
        description: GRADE_DESCRIPTIONS[label] || GRADE_DESCRIPTIONS[`Grade ${gradeNum}`] || "",
        modules
      };
    }),
    { id: "statistics", label: "Statistics", description: GRADE_DESCRIPTIONS["Statistics"], modules: [] },
    { id: "calculus", label: "Calculus", description: GRADE_DESCRIPTIONS["Calculus"], modules: [] },
    { id: "psat", label: "PSAT Math", description: GRADE_DESCRIPTIONS["PSAT Math"], modules: [] },
    { id: "sat", label: "SAT Math", description: GRADE_DESCRIPTIONS["SAT Math"], modules: [] }
  ],
  UK: Array.from({ length: 8 }, (_, i) => {
    const gradeNum = i + 1;
    const topics = UK_GRADE_TOPICS[gradeNum] || [];
    const moduleCount = topics.length;
    const modules = Array.from({ length: moduleCount }, (_, mIdx) => {
      const topic = topics[mIdx] || { title: `UK Grade ${gradeNum} Core Topic ${mIdx + 1}`, desc: "Key Stage mathematical learning objective." };
      return {
        moduleNumber: `${gradeNum}.${mIdx + 1}`,
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
      id: gradeNum.toString(),
      label: `Grade ${gradeNum}`,
      description: GRADE_DESCRIPTIONS[`Grade ${gradeNum}`] || `Comprehensive UK National Curriculum modules for Grade ${gradeNum}.`,
      modules
    };
  })
};
