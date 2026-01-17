import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, ExternalLink, Calendar, Award, BookOpen } from 'lucide-react';

const EconometricsLearningPlan = () => {
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem('econometrics-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('econometrics-progress', JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleItem = (id) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const learningPlan = {
    "Phase 1: Math Foundation (8 weeks)": {
      icon: "📐",
      duration: "8 weeks",
      commitment: "10-12 hours/week",
      sections: [
        {
          title: "Weeks 1-2: Single-Variable Calculus Review",
          items: [
            {
              id: "calc-1-1",
              task: "Complete Khan Academy Differential Calculus (derivatives, optimization, chain rule)",
              link: "https://www.khanacademy.org/math/differential-calculus"
            },
            {
              id: "calc-1-2",
              task: "Complete Khan Academy Integral Calculus (basic integrals, fundamental theorem)",
              link: "https://www.khanacademy.org/math/integral-calculus"
            }
          ]
        },
        {
          title: "Weeks 3-4: Multivariable Calculus",
          items: [
            {
              id: "calc-2-1",
              task: "Complete Khan Academy Multivariable Calculus (partial derivatives, gradients)",
              link: "https://www.khanacademy.org/math/multivariable-calculus"
            },
            {
              id: "calc-2-2",
              task: "Master Lagrange multipliers and constrained optimization",
              link: "https://www.khanacademy.org/math/multivariable-calculus"
            }
          ]
        },
        {
          title: "Weeks 5-6: Linear Algebra",
          items: [
            {
              id: "linalg-1",
              task: "Watch all 15 chapters of 3Blue1Brown Essence of Linear Algebra (~3-4 hours)",
              link: "https://www.3blue1brown.com/topics/linear-algebra"
            },
            {
              id: "linalg-2",
              task: "Practice Khan Academy Linear Algebra (matrix operations, eigenvalues)",
              link: "https://www.khanacademy.org/math/linear-algebra"
            },
            {
              id: "linalg-3",
              task: "Deep dive: Eigenvectors/eigenvalues and determinants",
              link: "https://www.khanacademy.org/math/linear-algebra"
            }
          ]
        },
        {
          title: "Weeks 7-8: Matrix Calculus",
          items: [
            {
              id: "matrix-1",
              task: "Read 'The Matrix Calculus You Need For Deep Learning' by Parr & Howard",
              link: "https://arxiv.org/pdf/1802.01528"
            },
            {
              id: "matrix-2",
              task: "Work through HTML version for interactive understanding",
              link: "http://parrt.cs.usfca.edu/doc/matrix-calculus/index.html"
            },
            {
              id: "matrix-3",
              task: "Practice: Jacobians, gradients, and chain rule for vectors",
              link: "https://arxiv.org/pdf/1802.01528"
            }
          ]
        }
      ]
    },
    "Phase 2: Foundation Econometrics (Months 3-4)": {
      icon: "📊",
      duration: "2 months",
      commitment: "12-15 hours/week",
      sections: [
        {
          title: "Core Theory Course (Choose ONE)",
          items: [
            {
              id: "found-1",
              task: "Option A: Complete Mastering Econometrics by Joshua Angrist (MIT, Free)",
              link: "https://mru.org/mastering-econometrics-joshua-angrist"
            },
            {
              id: "found-2",
              task: "Option B: Complete 365 Data Science Applied Econometrics with Python",
              link: "https://365datascience.com/courses/econometrics-i/"
            }
          ]
        },
        {
          title: "Complementary Learning",
          items: [
            {
              id: "found-3",
              task: "Work through QuantEcon Data Science Introduction",
              link: "https://datascience.quantecon.org/"
            },
            {
              id: "found-4",
              task: "Install Python libraries: numpy, pandas, statsmodels, matplotlib",
              link: "https://datascience.quantecon.org/"
            }
          ]
        },
        {
          title: "First Project",
          items: [
            {
              id: "proj-1",
              task: "Project 1: Causal inference using difference-in-differences on policy change",
              link: ""
            }
          ]
        }
      ]
    },
    "Phase 3: Advanced Econometrics (Months 5-7)": {
      icon: "🎓",
      duration: "3 months",
      commitment: "12-15 hours/week",
      sections: [
        {
          title: "Primary Advanced Course (Choose ONE)",
          items: [
            {
              id: "adv-1",
              task: "Option A: MIT OCW 14.382 Econometrics (Graduate-level, Free)",
              link: "https://ocw.mit.edu/courses/14-382-econometrics-spring-2017/"
            },
            {
              id: "adv-2",
              task: "Option B: Udemy Econometrics for Business (R & Python)",
              link: "https://www.udemy.com/course/econometrics-for-business/"
            },
            {
              id: "adv-3",
              task: "Option C: EcoMod Applied Machine Learning in Python",
              link: "https://ecomod.net/modeling-school/list-of-courses/applied-machine-learning-in-python-for-economic-analysis-and-econome"
            }
          ]
        },
        {
          title: "Parallel Study",
          items: [
            {
              id: "adv-4",
              task: "Work through QuantEcon Intermediate Python lectures (2-3 per week)",
              link: "https://python.quantecon.org/"
            },
            {
              id: "adv-5",
              task: "Study MIT 14.387 Applied Econometrics - Big Data lectures",
              link: "https://ocw.mit.edu/courses/14-387-applied-econometrics-mostly-harmless-big-data-fall-2014/"
            }
          ]
        },
        {
          title: "Projects",
          items: [
            {
              id: "proj-2",
              task: "Project 2: Time series forecasting (ARIMA or state space models)",
              link: ""
            },
            {
              id: "proj-3",
              task: "Project 3: Panel data analysis with fixed effects",
              link: ""
            }
          ]
        }
      ]
    },
    "Phase 4: Modern Spatial Econometrics (Months 8-9)": {
      icon: "🗺️",
      duration: "2 months",
      commitment: "12-15 hours/week",
      sections: [
        {
          title: "Core Resources",
          items: [
            {
              id: "spatial-1",
              task: "Read 'Geographic Data Science with Python' (Free online textbook)",
              link: "https://geographicdata.science/book/intro.html"
            },
            {
              id: "spatial-2",
              task: "Study PySAL spatial regression documentation and notebooks",
              link: "https://darribas.org/gds_scipy16/ipynb_md/08_spatial_regression.html"
            }
          ]
        },
        {
          title: "Modern Geospatial Stack",
          items: [
            {
              id: "spatial-3",
              task: "Install core libraries: pip install pysal geopandas h3 pydeck keplergl",
              link: "https://github.com/pysal/pysal"
            },
            {
              id: "spatial-4",
              task: "Learn H3 hexagonal spatial indexing (Uber's system)",
              link: "https://uber.github.io/h3-py/intro.html"
            },
            {
              id: "spatial-5",
              task: "Complete H3 polygon tutorial for spatial aggregation",
              link: "https://github.com/uber/h3-py/blob/master/docs/polygon_tutorial.ipynb"
            },
            {
              id: "spatial-6",
              task: "Master GeoPandas for vector data processing",
              link: "https://geopandas.org/"
            }
          ]
        },
        {
          title: "Modern Visualization Tools",
          items: [
            {
              id: "spatial-7",
              task: "Learn Kepler.gl for interactive geospatial visualization in Jupyter",
              link: "https://kepler.gl/"
            },
            {
              id: "spatial-8",
              task: "Work through Kepler.gl and Pydeck geospatial analysis tutorial",
              link: "https://www.kaggle.com/code/ramjasmaurya/geospatial-analysis-using-kepler-gl-and-pydeck"
            },
            {
              id: "spatial-9",
              task: "Explore Kepler.gl AI Assistant for spatial analysis",
              link: "https://github.com/keplergl/kepler.gl/discussions/2843"
            }
          ]
        },
        {
          title: "Spatial Econometric Models",
          items: [
            {
              id: "spatial-10",
              task: "Week 1-2: Master spatial weights matrices with PySAL",
              link: "https://pysal.org/"
            },
            {
              id: "spatial-11",
              task: "Week 3-4: Learn spatial lag (SAR) and spatial error (SEM) models",
              link: "https://darribas.org/gds_scipy16/ipynb_md/08_spatial_regression.html"
            },
            {
              id: "spatial-12",
              task: "Week 5-6: H3 aggregation for spatial analysis at multiple resolutions",
              link: "https://h3geo.org/docs/"
            },
            {
              id: "spatial-13",
              task: "Week 7-8: Build spatial econometrics project with modern tools",
              link: ""
            }
          ]
        },
        {
          title: "Project",
          items: [
            {
              id: "proj-4",
              task: "Project 4: Spatial analysis with H3 aggregation and interactive Kepler.gl viz",
              link: ""
            }
          ]
        }
      ]
    },
    "Phase 5: Advanced Topics (Month 10+)": {
      icon: "🚀",
      duration: "Ongoing",
      commitment: "10-15 hours/week",
      sections: [
        {
          title: "Advanced Quantitative Economics",
          items: [
            {
              id: "adv-topic-1",
              task: "Study QuantEcon Advanced lectures (dynamic optimization)",
              link: "https://python-advanced.quantecon.org/"
            },
            {
              id: "adv-topic-2",
              task: "Master heterogeneous agent models",
              link: "https://python-advanced.quantecon.org/"
            }
          ]
        },
        {
          title: "Specialized Topics",
          items: [
            {
              id: "adv-topic-3",
              task: "Deep dive: Advanced time series (ARIMA, VAR, GARCH)",
              link: "https://python.quantecon.org/"
            },
            {
              id: "adv-topic-4",
              task: "Master causal inference: IV techniques, synthetic controls",
              link: "https://mru.org/mastering-econometrics-joshua-angrist"
            },
            {
              id: "adv-topic-5",
              task: "Learn computational methods: GMM, maximum likelihood",
              link: "https://ocw.mit.edu/courses/14-382-econometrics-spring-2017/"
            }
          ]
        },
        {
          title: "Capstone Project",
          items: [
            {
              id: "proj-5",
              task: "Project 5: Original research combining multiple techniques (e.g., spatial panel + causal inference)",
              link: ""
            }
          ]
        }
      ]
    }
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
            A refresher learning checklist for advanced econometrics with Python, 
            spatial analysis, and causal inference. Woo! 
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
              Estimated: 10-12 months
            </span>
          </div>
        </div>

        {/* Learning Plan Sections */}
        {Object.entries(learningPlan).map(([phaseName, phaseData]) => (
          <div key={phaseName} className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
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
              </div>
            </div>

            {phaseData.sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
                  {section.title}
                </h3>
                
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📚 Python Libraries Checklist</h3>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
            <p className="mb-2"># Core data analysis</p>
            <p className="mb-4">pip install numpy pandas matplotlib seaborn</p>
            
            <p className="mb-2"># Econometrics</p>
            <p className="mb-4">pip install statsmodels linearmodels</p>
            
            <p className="mb-2"># Spatial analysis (modern stack)</p>
            <p className="mb-4">pip install pysal geopandas h3 pydeck keplergl</p>
            
            <p className="mb-2"># QuantEcon</p>
            <p className="mb-4">pip install quantecon</p>
            
            <p className="mb-2"># Additional tools</p>
            <p>pip install scikit-learn jupyter</p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-gray-800 mb-2">💡 Pro Tips:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Progress is saved automatically in the browser</li>
              <li>Focus on completing one phase before moving to the next</li>
              <li>Projects are crucial!</li>
              <li>Modern spatial tools (H3, Kepler.gl) give you a competitive edge</li>
              <li>Timeline: 10-12 months at 12-15 hours/week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconometricsLearningPlan;
