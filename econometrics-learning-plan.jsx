import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, ExternalLink, Calendar, Award, BookOpen, AlertTriangle, Trophy, MessageCircle } from 'lucide-react';

const EconometricsLearningPlan = () => {
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem('econometrics-progress');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [phaseValidations, setPhaseValidations] = useState(() => {
    const saved = localStorage.getItem('econometrics-validations');
    return saved ? JSON.parse(saved) : {};
  });

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('econometrics-progress', JSON.stringify(completedItems));
  }, [completedItems]);

  // Save phase validations to localStorage
  useEffect(() => {
    localStorage.setItem('econometrics-validations', JSON.stringify(phaseValidations));
  }, [phaseValidations]);

  const toggleItem = (id) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleValidation = (phaseId, checkId) => {
    setPhaseValidations(prev => ({
      ...prev,
      [phaseId]: {
        ...prev[phaseId],
        [checkId]: !prev[phaseId]?.[checkId]
      }
    }));
  };

  const learningPlan = {
    "Phase 1: Math Foundation (8 weeks)": {
      icon: "📐",
      duration: "8 weeks",
      commitment: "10-12 hours/week",
      phaseId: "phase1",
      prerequisites: [],
      validationChecks: [
        { id: "val-1-1", check: "Can compute partial derivatives and gradients without looking up formulas" },
        { id: "val-1-2", check: "Can solve constrained optimization problems using Lagrange multipliers" },
        { id: "val-1-3", check: "Understand matrix multiplication, inverses, and eigendecomposition conceptually and computationally" },
        { id: "val-1-4", check: "Can derive gradients of vector-valued functions (Jacobians)" }
      ],
      sections: [
        {
          title: "Weeks 1-2: Single-Variable Calculus Review",
          items: [
            {
              id: "calc-1-1",
              task: "Complete Khan Academy Differential Calculus (derivatives, optimization, chain rule)",
              link: "https://www.khanacademy.org/math/differential-calculus",
              estimatedHours: 10
            },
            {
              id: "calc-1-2",
              task: "Complete Khan Academy Integral Calculus (basic integrals, fundamental theorem)",
              link: "https://www.khanacademy.org/math/integral-calculus",
              estimatedHours: 8
            },
            {
              id: "calc-1-3",
              task: "Practice: Solve 20 optimization problems (profit maximization, cost minimization)",
              link: "https://www.khanacademy.org/math/differential-calculus",
              estimatedHours: 4
            }
          ]
        },
        {
          title: "Weeks 3-4: Multivariable Calculus",
          items: [
            {
              id: "calc-2-1",
              task: "Complete Khan Academy Multivariable Calculus (partial derivatives, gradients)",
              link: "https://www.khanacademy.org/math/multivariable-calculus",
              estimatedHours: 12
            },
            {
              id: "calc-2-2",
              task: "Master Lagrange multipliers and constrained optimization",
              link: "https://www.khanacademy.org/math/multivariable-calculus",
              estimatedHours: 8
            },
            {
              id: "calc-2-3",
              task: "Exercise: Derive first-order conditions for utility maximization with budget constraint",
              link: "",
              estimatedHours: 3
            }
          ]
        },
        {
          title: "Weeks 5-6: Linear Algebra",
          items: [
            {
              id: "linalg-1",
              task: "Watch all 15 chapters of 3Blue1Brown Essence of Linear Algebra (~3-4 hours)",
              link: "https://www.3blue1brown.com/topics/linear-algebra",
              estimatedHours: 4
            },
            {
              id: "linalg-2",
              task: "Practice Khan Academy Linear Algebra (matrix operations, eigenvalues)",
              link: "https://www.khanacademy.org/math/linear-algebra",
              estimatedHours: 10
            },
            {
              id: "linalg-3",
              task: "Deep dive: Eigenvectors/eigenvalues and determinants",
              link: "https://www.khanacademy.org/math/linear-algebra",
              estimatedHours: 6
            },
            {
              id: "linalg-4",
              task: "Code: Implement matrix operations from scratch in NumPy (no high-level functions)",
              link: "https://numpy.org/doc/stable/reference/routines.linalg.html",
              estimatedHours: 5
            }
          ]
        },
        {
          title: "Weeks 7-8: Matrix Calculus",
          items: [
            {
              id: "matrix-1",
              task: "Read 'The Matrix Calculus You Need For Deep Learning' by Parr & Howard",
              link: "https://arxiv.org/pdf/1802.01528",
              estimatedHours: 6
            },
            {
              id: "matrix-2",
              task: "Work through HTML version for interactive understanding",
              link: "http://parrt.cs.usfca.edu/doc/matrix-calculus/index.html",
              estimatedHours: 6
            },
            {
              id: "matrix-3",
              task: "Practice: Jacobians, gradients, and chain rule for vectors",
              link: "https://arxiv.org/pdf/1802.01528",
              estimatedHours: 6
            },
            {
              id: "matrix-4",
              task: "Exercise: Derive gradient of OLS loss function (β = (X'X)⁻¹X'y) from scratch",
              link: "",
              estimatedHours: 4
            }
          ]
        }
      ]
    },
    "Phase 2: Foundation Econometrics (Months 3-4)": {
      icon: "📊",
      duration: "2 months",
      commitment: "12-15 hours/week",
      phaseId: "phase2",
      prerequisites: ["phase1"],
      validationChecks: [
        { id: "val-2-1", check: "Can explain and implement OLS regression from scratch in Python" },
        { id: "val-2-2", check: "Understand identification assumptions for causal inference" },
        { id: "val-2-3", check: "Can interpret regression coefficients in causal vs. predictive contexts" },
        { id: "val-2-4", check: "Have completed Project 1 with documented code and write-up" }
      ],
      sections: [
        {
          title: "Core Theory Course",
          note: "Pick the course that matches your learning style. Angrist is conceptual/intuitive. 365 Data Science is more computational.",
          items: [
            {
              id: "found-1",
              task: "Complete Mastering Econometrics by Joshua Angrist (MIT, Free) - RECOMMENDED for causal focus",
              link: "https://mru.org/mastering-econometrics-joshua-angrist",
              estimatedHours: 40
            },
            {
              id: "found-2",
              task: "OR Complete 365 Data Science Applied Econometrics with Python - Better for Python integration",
              link: "https://365datascience.com/courses/econometrics-i/",
              estimatedHours: 35
            }
          ]
        },
        {
          title: "Complementary Learning",
          items: [
            {
              id: "found-3",
              task: "Work through QuantEcon Data Science Introduction (focus on pandas, visualization)",
              link: "https://datascience.quantecon.org/",
              estimatedHours: 20
            },
            {
              id: "found-4",
              task: "Install and test Python environment: numpy, pandas, statsmodels, matplotlib, seaborn",
              link: "https://datascience.quantecon.org/",
              estimatedHours: 2
            },
            {
              id: "found-5",
              task: "Read Angrist & Pischke 'Mastering Metrics' Chapter 1-2 (causality fundamentals)",
              link: "https://www.masteringmetrics.com/",
              estimatedHours: 8
            }
          ]
        },
        {
          title: "First Project",
          items: [
            {
              id: "proj-1",
              task: "PROJECT 1: Difference-in-Differences Analysis - See detailed spec below",
              link: "#project1-spec",
              estimatedHours: 30,
              projectSpec: {
                title: "Project 1: Difference-in-Differences Analysis",
                dataset: "Card & Krueger minimum wage data (available at https://davidcard.berkeley.edu/data_sets.html) OR state-level policy change from FRED/BLS",
                objective: "Estimate causal effect of policy change using DiD methodology",
                deliverables: [
                  "Jupyter notebook with full analysis pipeline",
                  "Parallel trends assumption test (visual + statistical)",
                  "DiD regression with standard errors",
                  "2-3 page write-up interpreting results and discussing threats to identification",
                  "One robustness check (placebo test, alternative control group, etc.)"
                ],
                helpResources: [
                  "https://www.nber.org/papers/w4509",
                  "https://mixtape.scunning.com/09-difference_in_differences"
                ]
              }
            }
          ]
        }
      ]
    },
    "Phase 3: Advanced Econometrics (Months 5-7)": {
      icon: "🎓",
      duration: "3 months",
      commitment: "12-15 hours/week",
      phaseId: "phase3",
      prerequisites: ["phase2"],
      validationChecks: [
        { id: "val-3-1", check: "Can implement and interpret panel data models with fixed effects" },
        { id: "val-3-2", check: "Understand time series properties (stationarity, autocorrelation, unit roots)" },
        { id: "val-3-3", check: "Can run and interpret IV/2SLS regressions" },
        { id: "val-3-4", check: "Have completed Projects 2 and 3 with full documentation" }
      ],
      sections: [
        {
          title: "Primary Advanced Course",
          note: "MIT 14.382 is rigorous graduate-level theory. Udemy is more applied. Choose based on your math comfort and career goals.",
          items: [
            {
              id: "adv-1",
              task: "MIT OCW 14.382 Econometrics (Graduate-level, Free) - Most rigorous, focus on theory",
              link: "https://ocw.mit.edu/courses/14-382-econometrics-spring-2017/",
              estimatedHours: 60
            },
            {
              id: "adv-2",
              task: "OR Udemy Econometrics for Business (R & Python) - More practical business applications",
              link: "https://www.udemy.com/course/econometrics-for-business/",
              estimatedHours: 35
            },
            {
              id: "adv-3",
              task: "OR EcoMod Applied Machine Learning in Python - Bridges econometrics and ML",
              link: "https://ecomod.net/modeling-school/list-of-courses/applied-machine-learning-in-python-for-economic-analysis-and-econome",
              estimatedHours: 40
            }
          ]
        },
        {
          title: "Parallel Study - Time Series & Panel",
          items: [
            {
              id: "adv-4",
              task: "Work through QuantEcon Python lectures on time series (2-3 per week)",
              link: "https://python.quantecon.org/",
              estimatedHours: 25
            },
            {
              id: "adv-5",
              task: "Study MIT 14.387 Applied Econometrics lectures (watch 4-6 key lectures on IV, panel data)",
              link: "https://ocw.mit.edu/courses/14-387-applied-econometrics-mostly-harmless-big-data-fall-2014/",
              estimatedHours: 20
            },
            {
              id: "adv-6",
              task: "Read: Wooldridge 'Econometric Analysis of Cross Section and Panel Data' Ch 10-11",
              link: "https://mitpress.mit.edu/9780262232586/",
              estimatedHours: 12
            }
          ]
        },
        {
          title: "Projects",
          items: [
            {
              id: "proj-2",
              task: "PROJECT 2: Time Series Forecasting - See spec below",
              link: "#project2-spec",
              estimatedHours: 25,
              projectSpec: {
                title: "Project 2: Time Series Forecasting with ARIMA",
                dataset: "Federal Reserve Economic Data (FRED) - choose CPI, unemployment, or GDP (https://fred.stlouisfed.org/)",
                objective: "Build ARIMA model, forecast 12 months ahead, evaluate accuracy",
                deliverables: [
                  "Stationarity tests (ADF, KPSS) with interpretation",
                  "ACF/PACF plots with model order selection justification",
                  "ARIMA model estimation and diagnostic checks",
                  "Out-of-sample forecast with confidence intervals",
                  "Comparison with naive baseline (random walk or seasonal naive)",
                  "1-2 page write-up discussing forecast accuracy and limitations"
                ],
                helpResources: [
                  "https://otexts.com/fpp3/",
                  "https://www.statsmodels.org/stable/tsa.html"
                ]
              }
            },
            {
              id: "proj-3",
              task: "PROJECT 3: Panel Data Analysis - See spec below",
              link: "#project3-spec",
              estimatedHours: 25,
              projectSpec: {
                title: "Project 3: Panel Data with Fixed Effects",
                dataset: "NLSY79 (National Longitudinal Survey) or PSID (Panel Study of Income Dynamics) - available at https://www.nlsinfo.org/",
                objective: "Estimate wage equation controlling for individual fixed effects",
                deliverables: [
                  "Pooled OLS, Random Effects, and Fixed Effects estimates",
                  "Hausman test to choose between RE and FE",
                  "Interpretation of time-varying vs. time-invariant effects",
                  "Robustness: cluster standard errors, test for serial correlation",
                  "2-3 page write-up comparing models and interpreting economic significance"
                ],
                helpResources: [
                  "https://www.stata.com/manuals/xtxtreg.pdf",
                  "https://bashtage.github.io/linearmodels/panel/panel/linearmodels.panel.model.PanelOLS.html"
                ]
              }
            }
          ]
        }
      ]
    },
    "Phase 4: Modern Spatial Econometrics (Months 8-9)": {
      icon: "🗺️",
      duration: "2 months",
      commitment: "12-15 hours/week",
      phaseId: "phase4",
      prerequisites: ["phase3"],
      validationChecks: [
        { id: "val-4-1", check: "Can construct spatial weights matrices and explain different specifications" },
        { id: "val-4-2", check: "Understand spatial lag vs. spatial error models conceptually and mathematically" },
        { id: "val-4-3", check: "Can use H3 for multi-resolution spatial aggregation" },
        { id: "val-4-4", check: "Have built interactive geospatial visualization in Kepler.gl or Pydeck" }
      ],
      sections: [
        {
          title: "Core Resources",
          items: [
            {
              id: "spatial-1",
              task: "Read 'Geographic Data Science with Python' Chapters 1-7 (Free online textbook)",
              link: "https://geographicdata.science/book/intro.html",
              estimatedHours: 20
            },
            {
              id: "spatial-2",
              task: "Study PySAL spatial regression documentation and work through notebooks",
              link: "https://darribas.org/gds_scipy16/ipynb_md/08_spatial_regression.html",
              estimatedHours: 15
            }
          ]
        },
        {
          title: "Modern Geospatial Stack",
          items: [
            {
              id: "spatial-3",
              task: "Install and test libraries: pip install pysal geopandas h3 pydeck keplergl",
              link: "https://github.com/pysal/pysal",
              estimatedHours: 2
            },
            {
              id: "spatial-4",
              task: "Learn H3 hexagonal spatial indexing (work through Uber's H3 tutorial)",
              link: "https://uber.github.io/h3-py/intro.html",
              estimatedHours: 6
            },
            {
              id: "spatial-5",
              task: "Complete H3 polygon tutorial for spatial aggregation at multiple resolutions",
              link: "https://github.com/uber/h3-py/blob/master/docs/polygon_tutorial.ipynb",
              estimatedHours: 5
            },
            {
              id: "spatial-6",
              task: "Master GeoPandas for vector data processing (CRS, spatial joins, overlays)",
              link: "https://geopandas.org/",
              estimatedHours: 8
            }
          ]
        },
        {
          title: "Modern Visualization Tools",
          items: [
            {
              id: "spatial-7",
              task: "Learn Kepler.gl for interactive geospatial visualization in Jupyter",
              link: "https://kepler.gl/",
              estimatedHours: 5
            },
            {
              id: "spatial-8",
              task: "Work through Kepler.gl and Pydeck geospatial analysis tutorial",
              link: "https://www.kaggle.com/code/ramjasmaurya/geospatial-analysis-using-kepler-gl-and-pydeck",
              estimatedHours: 6
            },
            {
              id: "spatial-9",
              task: "Experiment with Pydeck for 3D geospatial visualizations",
              link: "https://deckgl.readthedocs.io/en/latest/",
              estimatedHours: 4
            }
          ]
        },
        {
          title: "Spatial Econometric Models",
          items: [
            {
              id: "spatial-10",
              task: "Weeks 1-2: Master spatial weights matrices with PySAL (queen, rook, k-nearest, distance-based)",
              link: "https://pysal.org/",
              estimatedHours: 10
            },
            {
              id: "spatial-11",
              task: "Weeks 3-4: Learn spatial lag (SAR) and spatial error (SEM) models - theory and implementation",
              link: "https://darribas.org/gds_scipy16/ipynb_md/08_spatial_regression.html",
              estimatedHours: 12
            },
            {
              id: "spatial-12",
              task: "Weeks 5-6: H3 aggregation for spatial analysis at multiple resolutions (compare res 6 vs 8 vs 10)",
              link: "https://h3geo.org/docs/",
              estimatedHours: 10
            },
            {
              id: "spatial-13",
              task: "Weeks 7-8: Build end-to-end spatial econometrics pipeline (Project 4)",
              link: "",
              estimatedHours: 25
            }
          ]
        },
        {
          title: "Project",
          items: [
            {
              id: "proj-4",
              task: "PROJECT 4: Spatial Econometric Analysis - See spec below",
              link: "#project4-spec",
              estimatedHours: 30,
              projectSpec: {
                title: "Project 4: Spatial Analysis with Modern Tools",
                dataset: "US Census ACS data or OpenStreetMap POI data via GeoPandas (https://geodacenter.github.io/data-and-lab/)",
                objective: "Estimate spatial spillover effects using spatial lag model with interactive visualization",
                deliverables: [
                  "Data collection and H3 spatial aggregation at resolution 7",
                  "Exploratory spatial data analysis (Moran's I, LISA clusters)",
                  "Spatial weights matrix construction with justification",
                  "OLS baseline vs. Spatial Lag model comparison",
                  "Interactive Kepler.gl or Pydeck visualization showing spatial patterns",
                  "3-4 page write-up interpreting spatial spillover effects",
                  "GitHub repo with reproducible code"
                ],
                helpResources: [
                  "https://geographicdata.science/book/notebooks/11_regression.html",
                  "https://pysal.org/spreg/",
                  "https://observablehq.com/@nrabinowitz/h3-tutorial-spatial-indexing"
                ]
              }
            }
          ]
        }
      ]
    },
    "Phase 5: Advanced Topics (Month 10+)": {
      icon: "🚀",
      duration: "Ongoing",
      commitment: "10-15 hours/week",
      phaseId: "phase5",
      prerequisites: ["phase4"],
      validationChecks: [
        { id: "val-5-1", check: "Can explain and implement instrumental variables estimation" },
        { id: "val-5-2", check: "Understand advanced time series (VAR, GARCH) and when to apply them" },
        { id: "val-5-3", check: "Have completed capstone project combining multiple techniques" },
        { id: "val-5-4", check: "Can read and critique econometrics papers independently" }
      ],
      sections: [
        {
          title: "Advanced Quantitative Economics",
          items: [
            {
              id: "adv-topic-1",
              task: "Study QuantEcon Advanced lectures (dynamic programming, heterogeneous agents)",
              link: "https://python-advanced.quantecon.org/",
              estimatedHours: 40
            },
            {
              id: "adv-topic-2",
              task: "Master heterogeneous agent models (Aiyagari, Bewley-Huggett-Aiyagari)",
              link: "https://python-advanced.quantecon.org/",
              estimatedHours: 25
            }
          ]
        },
        {
          title: "Specialized Techniques",
          items: [
            {
              id: "adv-topic-3",
              task: "Deep dive: Advanced time series (VAR for multivariate, GARCH for volatility)",
              link: "https://python.quantecon.org/",
              estimatedHours: 20
            },
            {
              id: "adv-topic-4",
              task: "Master causal inference: IV techniques, regression discontinuity, synthetic controls",
              link: "https://mixtape.scunning.com/",
              estimatedHours: 30
            },
            {
              id: "adv-topic-5",
              task: "Learn computational methods: GMM, maximum likelihood estimation, bootstrap",
              link: "https://ocw.mit.edu/courses/14-382-econometrics-spring-2017/",
              estimatedHours: 25
            },
            {
              id: "adv-topic-6",
              task: "Read 5 recent econometrics papers in your domain of interest and replicate one",
              link: "https://www.aeaweb.org/journals/aer",
              estimatedHours: 40
            }
          ]
        },
        {
          title: "Capstone Project",
          items: [
            {
              id: "proj-5",
              task: "PROJECT 5: Capstone Research Project - See spec below",
              link: "#project5-spec",
              estimatedHours: 60,
              projectSpec: {
                title: "Project 5: Original Research Combining Multiple Techniques",
                dataset: "Your choice - real-world problem in your domain of interest",
                objective: "Conduct original research combining at least 2 advanced techniques (e.g., spatial panel + IV, time series + causal inference)",
                deliverables: [
                  "Research question with clear motivation and literature review",
                  "Data collection and cleaning pipeline with documentation",
                  "Multiple econometric specifications with robustness checks",
                  "Interpretation of economic and statistical significance",
                  "Interactive visualization or dashboard",
                  "8-12 page research paper in journal format",
                  "Presentation slides (20 min talk)",
                  "Public GitHub repository with reproducible analysis"
                ],
                helpResources: [
                  "https://www.aeaweb.org/journals/policies/sample-references",
                  "https://github.com/Pseudo-Lab/Tutorial-Book/blob/master/docs/Economic%20Research%20-%20Paper%20Writing.md"
                ]
              }
            }
          ]
        }
      ]
    }
  };

  const getPhaseProgress = (phaseData) => {
    const items = phaseData.sections.flatMap(s => s.items);
    const completed = items.filter(item => completedItems[item.id]).length;
    const validationComplete = phaseData.validationChecks?.every(
      check => phaseValidations[phaseData.phaseId]?.[check.id]
    ) || false;
    return { items: items.length, completed, validationComplete };
  };

  const calculateProgress = () => {
    const total = Object.values(learningPlan).reduce((acc, phase) => {
      return acc + phase.sections.reduce((secAcc, section) => {
        return secAcc + section.items.length;
      }, 0);
    }, 0);
    
    const completed = Object.values(completedItems).filter(Boolean).length;
    return { total, completed, percentage: Math.round((completed / total) * 100) };
  };

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎯 Advanced Econometrics Learning Plan
          </h1>
          <p className="text-gray-600 mb-6">
            Comprehensive curriculum for mastering econometrics with Python, spatial analysis, and causal inference.
            Progress is saved automatically in your browser.
          </p>
          
          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-8 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full flex items-center justify-center text-white font-semibold transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            >
              {progress.percentage}%
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              <Award className="inline w-4 h-4 mr-1" />
              {progress.completed} of {progress.total} items completed
            </span>
            <span>
              <Calendar className="inline w-4 h-4 mr-1" />
              Estimated: 10-12 months at 12-15 hrs/week
            </span>
          </div>
        </div>

        {/* Learning Plan Sections */}
        {Object.entries(learningPlan).map(([phaseName, phaseData]) => {
          const phaseProgress = getPhaseProgress(phaseData);
          const phasePercentage = Math.round((phaseProgress.completed / phaseProgress.items) * 100);
          
          return (
            <div key={phaseName} className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">{phaseData.icon}</span>
                    {phaseName}
                  </h2>
                  <div className="flex gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {phaseData.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {phaseData.commitment}
                    </span>
                  </div>
                  
                  {/* Phase Progress Bar */}
                  <div className="mt-3 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${phasePercentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {phaseProgress.completed}/{phaseProgress.items} tasks completed
                  </div>
                </div>
              </div>

              {/* Prerequisites Warning */}
              {phaseData.prerequisites && phaseData.prerequisites.length > 0 && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <strong>Prerequisites:</strong> Complete {phaseData.prerequisites.join(', ')} before starting this phase
                  </div>
                </div>
              )}

              {phaseData.sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
                    {section.title}
                  </h3>
                  
                  {section.note && (
                    <div className="mb-3 p-2 bg-blue-50 border-l-4 border-blue-400 text-sm text-gray-700">
                      <MessageCircle className="inline w-4 h-4 mr-1" />
                      {section.note}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.id}>
                        <div
                          className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                            completedItems[item.id]
                              ? 'bg-green-50 border border-green-200'
                              : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="flex-shrink-0 mt-1"
                          >
                            {completedItems[item.id] ? (
                              <CheckCircle className="w-6 h-6 text-green-600" />
                            ) : (
                              <Circle className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                            )}
                          </button>
                          
                          <div className="flex-grow">
                            <p className={`${
                              completedItems[item.id]
                                ? 'text-gray-500 line-through'
                                : 'text-gray-800'
                            }`}>
                              {item.task}
                            </p>
                            {item.estimatedHours && (
                              <p className="text-xs text-gray-500 mt-1">
                                Estimated: {item.estimatedHours} hours
                              </p>
                            )}
                          </div>
                          
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-blue-600 hover:text-blue-800 mt-1"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                        
                        {/* Project Specification */}
                        {item.projectSpec && (
                          <div className="ml-12 mt-2 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                            <h4 className="font-semibold text-indigo-900 mb-2">
                              📋 {item.projectSpec.title}
                            </h4>
                            <div className="text-sm space-y-2 text-gray-700">
                              <p><strong>Dataset:</strong> {item.projectSpec.dataset}</p>
                              <p><strong>Objective:</strong> {item.projectSpec.objective}</p>
                              <div>
                                <strong>Deliverables:</strong>
                                <ul className="list-disc ml-5 mt-1">
                                  {item.projectSpec.deliverables.map((d, i) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              </div>
                              {item.projectSpec.helpResources && (
                                <div>
                                  <strong>Help Resources:</strong>
                                  <ul className="ml-2 mt-1">
                                    {item.projectSpec.helpResources.map((r, i) => (
                                      <li key={i}>
                                        <a href={r} target="_blank" rel="noopener noreferrer" 
                                           className="text-blue-600 hover:underline text-xs">
                                          {r}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Phase Validation Checklist */}
              {phaseData.validationChecks && (
                <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Phase {phaseData.phaseId} Validation Checklist
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Complete these self-checks before moving to the next phase:
                  </p>
                  <div className="space-y-2">
                    {phaseData.validationChecks.map((check) => (
                      <div key={check.id} className="flex items-start gap-2">
                        <button
                          onClick={() => toggleValidation(phaseData.phaseId, check.id)}
                          className="flex-shrink-0"
                        >
                          {phaseValidations[phaseData.phaseId]?.[check.id] ? (
                            <CheckCircle className="w-5 h-5 text-purple-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400 hover:text-purple-600" />
                          )}
                        </button>
                        <span className={`text-sm ${
                          phaseValidations[phaseData.phaseId]?.[check.id]
                            ? 'text-gray-500 line-through'
                            : 'text-gray-800'
                        }`}>
                          {check.check}
                        </span>
                      </div>
                    ))}
                  </div>
                  {phaseProgress.validationComplete && (
                    <div className="mt-3 p-2 bg-green-100 text-green-800 rounded text-sm font-semibold">
                      ✅ All validation checks completed! Ready for next phase.
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📚 Python Environment Setup</h3>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
            <p className="mb-2 text-gray-600"># Core data analysis</p>
            <p className="mb-4">pip install numpy pandas matplotlib seaborn jupyter</p>
            
            <p className="mb-2 text-gray-600"># Econometrics</p>
            <p className="mb-4">pip install statsmodels linearmodels</p>
            
            <p className="mb-2 text-gray-600"># Spatial analysis</p>
            <p className="mb-4">pip install pysal geopandas h3 pydeck keplergl</p>
            
            <p className="mb-2 text-gray-600"># QuantEcon</p>
            <p className="mb-4">pip install quantecon</p>
            
            <p className="mb-2 text-gray-600"># Additional tools</p>
            <p>pip install scikit-learn scipy</p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-gray-800 mb-2">💡 Learning Strategy Tips:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Progress saves automatically in your browser (localStorage)</li>
              <li>Complete validation checklists before advancing to next phase</li>
              <li>Projects are not optional - they solidify theory through application</li>
              <li>When stuck, consult help resources or online forums (Stack Overflow, Cross Validated)</li>
              <li>Document your code and findings - future you will thank you</li>
              <li>Estimated timeline assumes 12-15 hours/week of focused study</li>
              <li>Adjust pace as needed - depth matters more than speed</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-gray-800 mb-2">🚨 When You Get Stuck:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><strong>Math:</strong> Khan Academy comments section, Math Stack Exchange</li>
              <li><strong>Econometrics Theory:</strong> Cross Validated (stats.stackexchange.com)</li>
              <li><strong>Python Code:</strong> Stack Overflow, specific library documentation</li>
              <li><strong>Projects:</strong> Review help resources, find similar analyses on GitHub</li>
              <li><strong>Conceptual:</strong> Re-watch lectures at 0.75x speed, work through numerical examples</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconometricsLearningPlan;
