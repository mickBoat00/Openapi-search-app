const data = [
    {
       "id":1,
       "name":"Alice Smith",
       "profilePhoto":"https://randomuser.me/api/portraits/women/1.jpg",
       "headline":"Senior Software Engineer | Full-Stack Developer",
       "about":"As a Senior Software Engineer with over 10 years of experience in developing robust web applications and AI-driven solutions, I am passionate about leveraging technology to solve real-world problems.",
       "experience":[
          {
             "jobTitle":"Senior Software Engineer",
             "companyName":"Tech Innovators Inc.",
             "location":"San Francisco, CA",
             "dates":"January 2018 – Present",
             "description":"Led the development of a scalable e-commerce platform, increasing sales by 30%. Implemented AI-driven recommendation systems to enhance user experience. Mentored junior developers, fostering a collaborative and productive team environment."
          },
          {
             "jobTitle":"Software Engineer",
             "companyName":"Web Solutions LLC",
             "location":"New York, NY",
             "dates":"June 2014 – December 2017",
             "description":"Developed and maintained web applications using React and Node.js. Optimized database queries, improving application performance by 20%. Collaborated with cross-functional teams to deliver projects on time."
          }
       ],
       "education":[
          {
             "schoolName":"University of California, Berkeley",
             "degree":"Master of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2012 – 2014",
             "activities":"Machine Learning, Distributed Systems, Data Structures"
          },
          {
             "schoolName":"University of Texas at Austin",
             "degree":"Bachelor of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "JavaScript",
          "React",
          "Python",
          "Machine Learning"
       ],
       "recommendations":[
          {
             "name":"Jane Doe",
             "position":"Project Manager at Tech Innovators Inc.",
             "text":"John's expertise in full-stack development and his innovative approach to problem-solving have been invaluable to our team. His leadership and mentorship have significantly contributed to the success of our projects."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Certified Kubernetes Administrator (CKA)",
             "AWS Certified Solutions Architect"
          ],
          "projects":[
             "Developed a real-time chat application using Node.js and WebSocket.",
             "Led the implementation of a machine learning model to predict customer churn."
          ],
          "languages":[
             "English (Native)",
             "Spanish (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "Google",
          "Microsoft",
          "TechCrunch"
       ]
    },
    {
       "id":2,
       "name":"Bob Johnson",
       "profilePhoto":"https://randomuser.me/api/portraits/men/2.jpg",
       "headline":"Data Scientist | Machine Learning Specialist",
       "about":"Experienced Data Scientist with a demonstrated history of working in the tech industry. Skilled in data analysis, machine learning, and statistical modeling.",
       "experience":[
          {
             "jobTitle":"Data Scientist",
             "companyName":"Data Analytics Corp.",
             "location":"Boston, MA",
             "dates":"March 2016 – Present",
             "description":"Developed predictive models to forecast sales and optimize marketing strategies. Conducted deep-dive analyses to uncover actionable insights from large datasets. Collaborated with cross-functional teams to deliver data-driven solutions."
          },
          {
             "jobTitle":"Junior Data Scientist",
             "companyName":"Insightful Analytics",
             "location":"Chicago, IL",
             "dates":"May 2014 – February 2016",
             "description":"Assisted in the development of machine learning models for various client projects. Conducted data cleaning and preprocessing. Generated reports and visualizations to communicate findings to stakeholders."
          }
       ],
       "education":[
          {
             "schoolName":"Harvard University",
             "degree":"Master of Science in Data Science",
             "fieldOfStudy":"Data Science",
             "dates":"2012 – 2014",
             "activities":"Big Data, Statistical Analysis, Machine Learning"
          },
          {
             "schoolName":"University of Chicago",
             "degree":"Bachelor of Science in Mathematics",
             "fieldOfStudy":"Mathematics",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "Python",
          "R",
          "Machine Learning",
          "Statistical Analysis"
       ],
       "recommendations":[
          {
             "name":"Sarah Lee",
             "position":"Senior Data Scientist at Data Analytics Corp.",
             "text":"Bob has a keen analytical mind and a talent for uncovering insights from complex datasets. His contributions have been instrumental in driving our data initiatives forward."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Certified Data Scientist (CDS)",
             "Certified Machine Learning Professional (CMLP)"
          ],
          "projects":[
             "Developed a recommendation system for an e-commerce platform.",
             "Built a customer segmentation model to enhance targeted marketing efforts."
          ],
          "languages":[
             "English (Native)",
             "French (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "Kaggle",
          "O'Reilly Media",
          "Towards Data Science"
       ]
    },
    {
       "id":3,
       "name":"Charlie Lee",
       "profilePhoto":"https://randomuser.me/api/portraits/men/3.jpg",
       "headline":"Backend Developer | Java Expert",
       "about":"Skilled Backend Developer with a strong foundation in Java and extensive experience in building scalable and efficient server-side applications.",
       "experience":[
          {
             "jobTitle":"Backend Developer",
             "companyName":"ServerTech Solutions",
             "location":"Seattle, WA",
             "dates":"April 2017 – Present",
             "description":"Designed and implemented backend services for high-traffic web applications. Ensured application scalability and reliability through effective code optimization and load testing. Integrated third-party APIs to enhance application functionality."
          },
          {
             "jobTitle":"Java Developer",
             "companyName":"CodeCraft Inc.",
             "location":"San Francisco, CA",
             "dates":"June 2014 – March 2017",
             "description":"Developed and maintained Java-based applications. Collaborated with front-end developers to integrate user-facing elements with server-side logic. Conducted code reviews and provided mentorship to junior developers."
          }
       ],
       "education":[
          {
             "schoolName":"Stanford University",
             "degree":"Master of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2012 – 2014",
             "activities":"Distributed Systems, Algorithms, Database Systems"
          },
          {
             "schoolName":"University of California, Los Angeles",
             "degree":"Bachelor of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "Java",
          "Spring",
          "Hibernate",
          "SQL"
       ],
       "recommendations":[
          {
             "name":"Michael Brown",
             "position":"CTO at ServerTech Solutions",
             "text":"Charlie's expertise in Java and backend development has been a significant asset to our team. His attention to detail and problem-solving skills are exceptional."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Oracle Certified Professional, Java SE",
             "AWS Certified Developer"
          ],
          "projects":[
             "Developed a microservices architecture for a large-scale web application.",
             "Implemented a secure authentication system using OAuth2."
          ],
          "languages":[
             "English (Native)",
             "Chinese (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "Oracle",
          "AWS",
          "Spring Framework"
       ]
    },
    {
       "id":4,
       "name":"Diana Green",
       "profilePhoto":"https://randomuser.me/api/portraits/women/4.jpg",
       "headline":"DevOps Engineer | Cloud Architect",
       "about":"Experienced DevOps Engineer with a strong background in cloud architecture and infrastructure automation. Passionate about optimizing deployment processes and improving system reliability.",
       "experience":[
          {
             "jobTitle":"DevOps Engineer",
             "companyName":"CloudNet Solutions",
             "location":"Austin, TX",
             "dates":"May 2018 – Present",
             "description":"Designed and implemented CI/CD pipelines to automate software deployment. Managed cloud infrastructure on AWS, ensuring high availability and scalability. Collaborated with development teams to improve application performance and reliability."
          },
          {
             "jobTitle":"System Administrator",
             "companyName":"Tech Services LLC",
             "location":"Dallas, TX",
             "dates":"July 2014 – April 2018",
             "description":"Maintained and monitored server infrastructure. Automated routine tasks using scripting languages. Provided technical support and troubleshooting for system issues."
          }
       ],
       "education":[
          {
             "schoolName":"Texas A&M University",
             "degree":"Master of Science in Information Technology",
             "fieldOfStudy":"Information Technology",
             "dates":"2012 – 2014",
             "activities":"Cloud Computing, Network Security, System Administration"
          },
          {
             "schoolName":"University of Texas at Dallas",
             "degree":"Bachelor of Science in Computer Engineering",
             "fieldOfStudy":"Computer Engineering",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "AWS",
          "Docker",
          "Kubernetes",
          "CI/CD"
       ],
       "recommendations":[
          {
             "name":"Emily White",
             "position":"Senior DevOps Engineer at CloudNet Solutions",
             "text":"Diana's expertise in cloud architecture and DevOps practices has been instrumental in optimizing our deployment processes. She is a highly skilled and reliable engineer."
          }
       ],
       "accomplishments":{
          "certifications":[
             "AWS Certified Solutions Architect",
             "Certified Kubernetes Administrator (CKA)"
          ],
          "projects":[
             "Implemented a container orchestration system using Kubernetes.",
             "Designed and deployed a scalable cloud infrastructure on AWS."
          ],
          "languages":[
             "English (Native)",
             "German (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "AWS",
          "Docker",
          "Kubernetes"
       ]
    },
    {
       "id":5,
       "name":"Eve Wright",
       "profilePhoto":"https://randomuser.me/api/portraits/women/5.jpg",
       "headline":"UX/UI Designer | Product Designer",
       "about":"Creative UX/UI Designer with a passion for crafting intuitive and visually appealing user experiences. Skilled in user research, wireframing, prototyping, and visual design.",
       "experience":[
          {
             "jobTitle":"UX/UI Designer",
             "companyName":"DesignWorks Studio",
             "location":"New York, NY",
             "dates":"February 2016 – Present",
             "description":"Led design projects for a variety of clients, from startups to large enterprises. Conducted user research and usability testing to inform design decisions. Created wireframes, prototypes, and high-fidelity mockups."
          },
          {
             "jobTitle":"Product Designer",
             "companyName":"Creative Solutions Ltd.",
             "location":"Los Angeles, CA",
             "dates":"June 2013 – January 2016",
             "description":"Designed and iterated on user interfaces for mobile and web applications. Collaborated with developers to ensure the feasibility and fidelity of designs. Conducted A/B testing to optimize user experiences."
          }
       ],
       "education":[
          {
             "schoolName":"Parsons School of Design",
             "degree":"Master of Fine Arts in Design and Technology",
             "fieldOfStudy":"Design and Technology",
             "dates":"2011 – 2013",
             "activities":"Interaction Design, User Research, Visual Design"
          },
          {
             "schoolName":"University of California, San Diego",
             "degree":"Bachelor of Arts in Visual Arts",
             "fieldOfStudy":"Visual Arts",
             "dates":"2007 – 2011",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "Sketch",
          "Figma",
          "Adobe XD",
          "User Research"
       ],
       "recommendations":[
          {
             "name":"Laura Scott",
             "position":"Creative Director at DesignWorks Studio",
             "text":"Eve is an incredibly talented designer with a keen eye for detail. Her designs are not only visually stunning but also highly functional. She has a unique ability to understand user needs and translate them into exceptional user experiences."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Certified User Experience Professional (CUXP)",
             "Certified Usability Analyst (CUA)"
          ],
          "projects":[
             "Redesigned a major e-commerce website, resulting in a 25% increase in conversion rates.",
             "Developed a mobile app prototype that won the Best User Experience award at a design competition."
          ],
          "languages":[
             "English (Native)",
             "Italian (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "InVision",
          "Behance",
          "Dribbble"
       ]
    },
    {
       "id":6,
       "name":"Frank Harris",
       "profilePhoto":"https://randomuser.me/api/portraits/men/6.jpg",
       "headline":"Cybersecurity Specialist | Ethical Hacker",
       "about":"Cybersecurity Specialist with a focus on ethical hacking and penetration testing. Experienced in identifying vulnerabilities and securing systems against potential threats.",
       "experience":[
          {
             "jobTitle":"Cybersecurity Specialist",
             "companyName":"SecureTech Corp.",
             "location":"Washington, D.C.",
             "dates":"March 2017 – Present",
             "description":"Conducted penetration testing and vulnerability assessments for clients across various industries. Implemented security protocols and procedures to safeguard sensitive data. Provided training and support to clients on cybersecurity best practices."
          },
          {
             "jobTitle":"Security Analyst",
             "companyName":"InfoSec Solutions",
             "location":"Atlanta, GA",
             "dates":"July 2014 – February 2017",
             "description":"Monitored and analyzed security incidents and threats. Conducted risk assessments and implemented mitigation strategies. Collaborated with IT teams to enhance overall security posture."
          }
       ],
       "education":[
          {
             "schoolName":"Georgia Institute of Technology",
             "degree":"Master of Science in Cybersecurity",
             "fieldOfStudy":"Cybersecurity",
             "dates":"2012 – 2014",
             "activities":"Network Security, Cryptography, Ethical Hacking"
          },
          {
             "schoolName":"University of Florida",
             "degree":"Bachelor of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "Penetration Testing",
          "Network Security",
          "Cryptography",
          "Ethical Hacking"
       ],
       "recommendations":[
          {
             "name":"John Williams",
             "position":"Chief Information Security Officer at SecureTech Corp.",
             "text":"Frank is a highly skilled cybersecurity specialist with a deep understanding of the latest security threats and trends. His expertise in penetration testing has been invaluable in identifying and mitigating potential vulnerabilities."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Certified Ethical Hacker (CEH)",
             "Certified Information Systems Security Professional (CISSP)"
          ],
          "projects":[
             "Conducted a comprehensive security audit for a Fortune 500 company.",
             "Developed a cybersecurity training program for employees."
          ],
          "languages":[
             "English (Native)",
             "Russian (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "Black Hat",
          "DEF CON",
          "Cybersecurity News"
       ]
    },
    {
       "id":7,
       "name":"Grace Miller",
       "profilePhoto":"https://randomuser.me/api/portraits/women/7.jpg",
       "headline":"Digital Marketing Strategist | SEO Specialist",
       "about":"Digital Marketing Strategist with expertise in SEO, content marketing, and social media management. Passionate about driving brand awareness and engagement through innovative marketing strategies.",
       "experience":[
          {
             "jobTitle":"Digital Marketing Strategist",
             "companyName":"Marketing Solutions Inc.",
             "location":"Chicago, IL",
             "dates":"April 2018 – Present",
             "description":"Developed and executed digital marketing campaigns to increase brand visibility and drive traffic. Managed SEO strategies to improve search engine rankings. Analyzed performance metrics and optimized campaigns based on data insights."
          },
          {
             "jobTitle":"SEO Specialist",
             "companyName":"Web Marketing Pros",
             "location":"Miami, FL",
             "dates":"June 2015 – March 2018",
             "description":"Conducted keyword research and implemented on-page and off-page SEO strategies. Created and optimized content for websites and blogs. Monitored and reported on SEO performance using analytics tools."
          }
       ],
       "education":[
          {
             "schoolName":"Northwestern University",
             "degree":"Master of Science in Integrated Marketing Communications",
             "fieldOfStudy":"Marketing",
             "dates":"2013 – 2015",
             "activities":"Digital Marketing, Brand Strategy, Consumer Behavior"
          },
          {
             "schoolName":"University of Florida",
             "degree":"Bachelor of Arts in Communication",
             "fieldOfStudy":"Communication",
             "dates":"2009 – 2013",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "SEO",
          "Content Marketing",
          "Social Media Management",
          "Google Analytics"
       ],
       "recommendations":[
          {
             "name":"Tom Harris",
             "position":"CEO at Marketing Solutions Inc.",
             "text":"Grace's expertise in digital marketing has significantly boosted our online presence. Her strategic approach and ability to analyze and optimize campaigns have driven impressive results for our clients."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Google Analytics Certified",
             "HubSpot Content Marketing Certified"
          ],
          "projects":[
             "Developed a comprehensive SEO strategy for a leading e-commerce website.",
             "Managed a successful social media campaign that increased engagement by 40%."
          ],
          "languages":[
             "English (Native)",
             "Spanish (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "Moz",
          "Search Engine Journal",
          "Content Marketing Institute"
       ]
    },
    {
       "id":8,
       "name":"Henry Thompson",
       "profilePhoto":"https://randomuser.me/api/portraits/men/8.jpg",
       "headline":"Mobile App Developer | iOS & Android",
       "about":"Experienced Mobile App Developer with a focus on creating high-quality iOS and Android applications. Skilled in Swift, Kotlin, and cross-platform development using Flutter.",
       "experience":[
          {
             "jobTitle":"Mobile App Developer",
             "companyName":"AppWorks Studio",
             "location":"San Francisco, CA",
             "dates":"May 2018 – Present",
             "description":"Developed and maintained mobile applications for iOS and Android platforms. Collaborated with designers and product managers to create user-friendly and visually appealing apps. Implemented new features and resolved bugs to improve app performance."
          },
          {
             "jobTitle":"iOS Developer",
             "companyName":"Tech Innovators Inc.",
             "location":"New York, NY",
             "dates":"July 2014 – April 2018",
             "description":"Designed and built advanced applications for the iOS platform. Worked closely with the backend team to integrate APIs. Conducted unit testing and debugging to ensure app stability."
          }
       ],
       "education":[
          {
             "schoolName":"Massachusetts Institute of Technology",
             "degree":"Master of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2012 – 2014",
             "activities":"Mobile Development, Software Engineering, Human-Computer Interaction"
          },
          {
             "schoolName":"University of California, Berkeley",
             "degree":"Bachelor of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "Swift",
          "Kotlin",
          "Flutter",
          "React Native"
       ],
       "recommendations":[
          {
             "name":"Lisa Brown",
             "position":"Product Manager at AppWorks Studio",
             "text":"Henry is an exceptional mobile app developer with a talent for creating intuitive and engaging user experiences. His technical expertise and collaborative nature make him a valuable asset to any development team."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Certified iOS Developer",
             "Certified Android Developer"
          ],
          "projects":[
             "Developed a fitness tracking app with over 1 million downloads.",
             "Built a cross-platform messaging app using Flutter."
          ],
          "languages":[
             "English (Native)",
             "Japanese (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "WWDC",
          "Google I/O",
          "Mobile App Development"
       ]
    },
    {
       "id":9,
       "name":"Ivy Wilson",
       "profilePhoto":"https://randomuser.me/api/portraits/women/9.jpg",
       "headline":"Product Manager | Agile Specialist",
       "about":"Product Manager with a proven track record of delivering successful products. Skilled in agile methodologies, user-centered design, and cross-functional team leadership.",
       "experience":[
          {
             "jobTitle":"Product Manager",
             "companyName":"Innovative Products Inc.",
             "location":"San Francisco, CA",
             "dates":"January 2017 – Present",
             "description":"Led the development and launch of several high-impact products. Conducted market research and gathered user feedback to inform product decisions. Managed product roadmaps and ensured timely delivery of features."
          },
          {
             "jobTitle":"Associate Product Manager",
             "companyName":"Tech Solutions Ltd.",
             "location":"Los Angeles, CA",
             "dates":"June 2014 – December 2016",
             "description":"Assisted in the development of product strategies and roadmaps. Coordinated with engineering, design, and marketing teams to deliver features. Conducted user testing and analysis to improve product usability."
          }
       ],
       "education":[
          {
             "schoolName":"Stanford University",
             "degree":"Master of Business Administration",
             "fieldOfStudy":"Business Administration",
             "dates":"2012 – 2014",
             "activities":"Product Management, Entrepreneurship, Marketing"
          },
          {
             "schoolName":"University of California, Berkeley",
             "degree":"Bachelor of Science in Business Administration",
             "fieldOfStudy":"Business Administration",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "Product Management",
          "Agile Methodologies",
          "User-Centered Design",
          "Market Research"
       ],
       "recommendations":[
          {
             "name":"Tom Anderson",
             "position":"CEO at Innovative Products Inc.",
             "text":"Ivy is a highly effective product manager with a deep understanding of user needs and market trends. Her strategic thinking and leadership skills have been instrumental in the success of our products."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Certified Scrum Product Owner (CSPO)",
             "Certified Agile Project Manager (CAPM)"
          ],
          "projects":[
             "Led the development and launch of a new SaaS product.",
             "Implemented a user feedback system to continuously improve product quality."
          ],
          "languages":[
             "English (Native)",
             "French (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "Product Management",
          "Agile",
          "SaaS"
       ]
    },
    {
       "id":10,
       "name":"Jack Davis",
       "profilePhoto":"https://randomuser.me/api/portraits/men/10.jpg",
       "headline":"Data Engineer | Big Data Specialist",
       "about":"Data Engineer with extensive experience in building and maintaining large-scale data pipelines. Skilled in big data technologies, ETL processes, and data warehousing.",
       "experience":[
          {
             "jobTitle":"Data Engineer",
             "companyName":"DataWorks Inc.",
             "location":"Boston, MA",
             "dates":"April 2016 – Present",
             "description":"Designed and developed data pipelines to process large volumes of data. Implemented ETL processes to integrate data from various sources. Maintained data warehouses to support analytics and reporting."
          },
          {
             "jobTitle":"Junior Data Engineer",
             "companyName":"Tech Analytics LLC",
             "location":"Chicago, IL",
             "dates":"June 2014 – March 2016",
             "description":"Assisted in the development and maintenance of data pipelines. Conducted data cleaning and transformation tasks. Worked with data analysts to provide accurate and timely data for analysis."
          }
       ],
       "education":[
          {
             "schoolName":"Massachusetts Institute of Technology",
             "degree":"Master of Science in Computer Science",
             "fieldOfStudy":"Data Science",
             "dates":"2012 – 2014",
             "activities":"Big Data, Data Engineering, Machine Learning"
          },
          {
             "schoolName":"University of Illinois at Urbana-Champaign",
             "degree":"Bachelor of Science in Computer Science",
             "fieldOfStudy":"Computer Science",
             "dates":"2008 – 2012",
             "activities":"Graduated with honors"
          }
       ],
       "skills":[
          "Hadoop",
          "Spark",
          "SQL",
          "ETL"
       ],
       "recommendations":[
          {
             "name":"Sarah Johnson",
             "position":"Senior Data Engineer at DataWorks Inc.",
             "text":"Jack's expertise in data engineering and his ability to handle large-scale data processing tasks have been crucial to our team's success. His technical skills and problem-solving abilities are outstanding."
          }
       ],
       "accomplishments":{
          "certifications":[
             "Cloudera Certified Data Engineer",
             "AWS Certified Big Data - Specialty"
          ],
          "projects":[
             "Developed a real-time data processing system using Apache Kafka and Spark.",
             "Built a data warehouse to support business intelligence and reporting."
          ],
          "languages":[
             "English (Native)",
             "German (Professional Working Proficiency)"
          ]
       },
       "interests":[
          "Big Data",
          "Data Engineering",
          "Machine Learning"
       ]
    }
 ]

export default data;