import{l9 as o,a as r,c as i}from"./cim4usely8ixso70.js";import{j as n,a as l,r as c}from"./n97h6so7iblif4c5.js";import{P as p}from"./myfwcu6kxx5hwidw.js";import"./kvlflg3xlp6vnbym.js";import"./ivbsxyeeopn30y8l.js";import"./izs5tzicgi7y5kov.js";const m={title:"ChatGPT for Professors",description:`Chat prompts for professors to help them create engaging lectures, assignments, and more. 

 Tap one of the prompts below to get started.`,template:"default",prompts_with_categories:[{category:{name:"All",slug:"",color:"",assets:[],prompts:[{number:1,title:"Refine your syllabus",prompt:`Please analyze this syllabus carefully, taking on the perspective of an experienced educator. Your analysis should cover several specific areas of consideration. For each section, please be thorough but concise, focusing on actionable feedback.

Please cover:
- First Impressions & Questions
- Content Gaps Analysis
- Suggested Additional Sections
- Visual Enhancement Opportunities
- General Improvement Ideas`,promptQuery:`Please analyze this syllabus carefully, taking on the perspective of an experienced educator. Your analysis should cover several specific areas of consideration. For each section, please be thorough but concise, focusing on actionable feedback.

Please cover:
- First Impressions & Questions
- Content Gaps Analysis
- Suggested Additional Sections
- Visual Enhancement Opportunities
- General Improvement Ideas

[Upload docs]`,attachments:[{icon:"file",fileName:"Syllabus.pdf"}]},{number:2,title:"Generate a quiz based on your lecture",prompt:"Generate 10 multiple choice questions I can use as a quiz during this lecture to help my students test their understanding of the material. For each question, indicate the correct answer with an explanation.",promptQuery:`Generate 10 multiple choice questions I can use as a quiz during this lecture to help my students test their understanding of the material. For each question, indicate the correct answer with an explanation.

[Upload docs]`,attachments:[{icon:"slide",fileName:"Slides.ppt"},{icon:"file",fileName:"Lecture transcript.txt"}]},{number:3,title:"Process your course feedback",prompt:"Analyze these course evaluations I received and take apart the feedback so that I can make it actionable. I'm interested in their overall trends and the things that point to improvements I can make. Rank these improvements by importance and explain why.",promptQuery:`Analyze these course evaluations I received and take apart the feedback so that I can make it actionable. I'm interested in their overall trends and the things that point to improvements I can make. Rank these improvements by importance and explain why.

[Upload docs]`,attachments:[{icon:"file",fileName:"Course evaluations.pdf"}]},{number:4,title:"Tailor a problem set to your student’s interests",prompt:"Here’s a set of practice problems on linear equations. Keep the core math problems and number values the same, but rewrite them for a student interested in skateboarding, anime and basketball.",promptQuery:`Here’s a set of practice problems on [topic]. Keep the core math problems and number values the same, but rewrite them for a student interested in [personal interests].

[Upload docs]`,attachments:[{icon:"file",fileName:"Practice problems.pdf"}]},{number:5,title:"Brainstorm hands-on activities",prompt:`Generate 5 unconventional, surprising, creative activities for a graduate-level journalism class on presentation skills. Activities should help students:
- Practice 30-sec venture pitches
- Master calming breathing techniques
- Apply our presentation principles (eye contact, charisma, gentle hands, planted feet, simple slides, clear start/end)

Focus on surprising approaches that reinforce these principles while building students' confidence. The class is 60 minutes.`,promptQuery:"Generate 5 unconventional, surprising, creative activities for a [level] class on [topic]. Activities should help students [learning goals]. Focus on surprising approaches that reinforce these principles while building students' confidence. The class is [length] minutes.",attachments:[]},{number:6,title:"Improve your lectures",prompt:"Help me identify what I could have done better in this lecture for next time. I am teaching an introductory software engineering course and the lecture is on the impact of software engineering on the industry. Please provide a list of concrete improvements I could make.",promptQuery:`Help me identify what I could have done better in this lecture for next time. I am teaching [course]. Lecture is on [topic]. Please provide a list of concrete improvements I could make.

[Upload docs]`,attachments:[{icon:"file",fileName:"Syllabus.pdf"},{icon:"slide",fileName:"Slides.ppt"},{icon:"file",fileName:"Lecture transcript.txt"}]},{number:7,title:"Find new resources",prompt:"I am teaching a course titled “Thinking Analytically in an Uncertain World” for students who are doing a master’s in public policy. I would like to open the course with the example of the decision that President Kennedy and his administration made during the Cuban Missile Crisis. Recommend resources I should read or watch to prepare.",promptQuery:`I’m preparing for my course on [topic]. Recommend resources I should read or watch.

[Upload docs]`,attachments:[{icon:"file",fileName:"Syllabus.pdf"}]},{number:8,title:"Make images for your slides",prompt:`I have a framework that I like to share with my entrepreneurship and tech innovation students about the impact of pivots that draws an analogy to the planets in our solar system. See my slides.

Help me express all of this in an image I can show my students.`,promptQuery:"I’m giving a lecture on [topic]. I want to visualize [concept]. Help me express this in an image I can show my students.",attachments:[{icon:"slide",fileName:"Slides.ppt"}]},{number:9,title:"Draft follow-up emails",prompt:"Based on the tone and structure of my example email, please help me draft a follow-up email for my graduate-level entrepreneurial journalism course that reinforces key takeaways and provides clear next steps.",promptQuery:`Based on the tone and structure of my example email, please help me draft a follow-up email for my [course] that reinforces key takeaways and provides clear next steps. [Add criteria or additional direction]

[Upload docs]`,attachments:[{icon:"file",fileName:"Syllabus.pdf"},{icon:"slide",fileName:"Slides.ppt"},{icon:"file",fileName:"Example follow-up email.pdf"}]},{number:10,title:"Draft a letter of recommendation",prompt:"I need to write a letter of recommendation for my research assistant. Here’s an outline of their strengths. Use the structure, style, and voice of my past letters of recommendation to write a first draft.",promptQuery:`I need to write a letter of recommendation for [student]. Here’s an outline of their strengths. Use the structure, style, and voice of my past letters of recommendation to write a first draft.

[Upload docs]`,attachments:[{icon:"file",fileName:"Notes on student.txt"},{icon:"file",fileName:"Past letters of recommendation.pdf"}]},{number:11,title:"Outline a grant proposal",prompt:"Help me outline a grant proposal that seeks funding to translate and collect the works of Adah Isaacs Menken based on the attached call for proposals from the NEH.",promptQuery:`Help me outline a grant proposal that seeks funding to [research objective] based on the attached call for proposals.

[Upload docs]`,attachments:[{icon:"file",fileName:"NEH Grant requirements.pdf"}]},{number:12,title:"Conduct a lit review",prompt:`Conduct a comprehensive literature review on consumer-AI relationships. Give me a report from marketing and consumer research journals, drawing exclusively from articles published in the Financial Times Top 50 (FT50) academic journals. Ensure that all references are accurately cited, and the content is suitable for inclusion in a peer-reviewed academic journal.

Your analysis should encompass:
- Theoretical Frameworks
- Conceptual Models
- Scholarly Debates
- Research Gaps
- Methodological Approaches`,promptQuery:"Conduct a comprehensive literature review on [topic]. Give me a report from research journals, drawing exclusively from [sources]. Ensure that all references are accurately cited, and the content is suitable for inclusion in a peer-reviewed academic journal. [Add additional details and direction.]",attachments:[]},{number:13,title:"Write replies to an email",prompt:`Act as my executive communications assistant. Please write a professional, compassionate, and warm response to the following email.

I want to maintain strong relationships, even when I’m setting a boundary, asking for more time, or saying no. Help me sound emotionally intelligent, gracious, and human. When appropriate, affirm their message, acknowledge effort or feelings, and provide helpful next steps or support.

Please keep it short, sincere, and solution-oriented. Close the message with warmth, encouragement, or gratitude.`,promptQuery:`Act as my executive communications assistant. Please write a professional, compassionate, and warm response to the following email. [Add direction on length or goals.]

[Upload docs]`,attachments:[{icon:"file",fileName:"Email.pdf"}]},{number:14,title:"AI-proof your assignments ",prompt:"I want to redesign assignments that are easily completed by AI. Can you analyze this assignment and suggest a creative alternative that still assesses the same skills — but makes AI a support tool, not the whole solution?",promptQuery:`I want to redesign assignments that are easily completed by AI. Can you analyze this assignment and suggest a creative alternative that still assesses the same skills — but makes AI a support tool, not the whole solution? 

[Upload docs]`,attachments:[{icon:"file",fileName:"Syllabus.pdf"},{icon:"file",fileName:"Assignment.pdf"}]},{number:15,title:"Summarize a report",prompt:"I’m giving a presentation to engineering faculty today. Give me a few quick bullets from this report that I could use to encourage the use of gen AI to map to ABET guidelines.",promptQuery:`I’m giving a presentation today. Give me a few quick bullets from this report that I could use to support my argument on [topic].

[Upload docs]`,attachments:[{icon:"file",fileName:"Report.pdf"}]}]}}]};function u(){return n.jsx(p,{pageData:m,audience:"professors"})}function d(){return n.jsx(u,{})}const w=o(function(){const e=r(),a=i(e,"3345485524"),s=l();return c.useEffect(()=>{a||s("/",{replace:!0})},[a,s]),a?n.jsx(d,{}):null}),I=()=>{const t="ChatGPT for Professors",e="Explore top ChatGPT chats for teachers and professors—plan lessons, create assessments, give feedback, and support students faster.";return[{title:t},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:t},{property:"og:url",content:window.location.origin+"/use-cases/professors"},{name:"description",content:e},{property:"og:description",content:e},{property:"twitter:card",content:"summary_large_image"}]},k=()=>[{rel:"canonical",href:window.location.origin+"/use-cases/professors"}];export{w as default,k as links,I as meta};
//# sourceMappingURL=b7nnmyoyv2tnk3k7.js.map
