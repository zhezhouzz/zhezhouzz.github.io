const SITE_CONFIG = {
  "title": "Zhe Zhou's Homepage",
  "page-top-title": "Zhe Zhou",
  "top-section-bg-text": "Programming Languages & Formal Methods",
  "home-subtitle": "Zhe Zhou (周喆)&ensp;|&ensp;Postdoctoral Researcher",
  "copyright-text": "&copy; Zhe Zhou 2025-2026. All Rights Reserved."
};

const SITE_SECTIONS = {
  "home": `[![zhezhouzz](https://img.shields.io/badge/zhezhouzz-github-blue?logo=github)](https://github.com/zhezhouzz)
[![Google Scholar](https://img.shields.io/badge/Google_Scholar-blue?logo=google-scholar&logoColor=white)](https://scholar.google.com/citations?user=cLoaC9kAAAAJ&hl=en&oi=sra)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/zhe-zhou-56b66a238/)

I am a postdoctoral researcher at Purdue University, working with [Prof. Suresh Jagannathan](https://www.cs.purdue.edu/homes/suresh). I received my Ph.D. in Computer Science from Purdue University, where I was advised by [Prof. Suresh Jagannathan](https://www.cs.purdue.edu/homes/suresh) and [Prof. Benjamin Delaware](https://www.cs.purdue.edu/homes/bendy/). Prior to my doctoral studies, I worked as a software engineer at Megvii (Face++) from 2017 to 2018. I earned my bachelor's degree from Peking University in 2017, where I was advised by [Prof. Guangyu Sun](https://ceca.pku.edu.cn/en/people_/faculty_/guangyu_sun/).

My research focuses on formal methods, with particular on formal verification and property-based testing for complex systems software. I develop automated verification techniques to establish deep semantic correctness guarantees for complex systems software---beyond basic crash safety or memory safety. My current work explores how AI tools (e.g., LLMs) can strengthen automated verification and complicate property (e.g., liveness and reachability property) reasoning for distributed systems and concurrent programs.

Here is my [CV](https://github.com/zhezhouzz/CV/blob/main/resume-20260330.pdf) and [research statement](https://github.com/zhezhouzz/CV/blob/main/research_statement-zhe.pdf).

#### Contact

- **Email:** zhou956[at]purdue.edu
- **Office:** LWSN 3133 (#55), Purdue University, West Lafayette, IN 47907

#### Education

Ph.D., Computer Science, Purdue University, Aug 2018 – Jul 2025.\\
B.Sc., Computer Science, Peking University, Sep 2013 – Jul 2017.

#### Experience

Postdoctoral Researcher, Purdue University, Jul 2025 – present.\\
Applied Scientist Intern, Amazon, May 2024 – Sep 2024 & Mar 2025 – Jun 2025.\\
Software Engineer, Megvii (Face++), Jul 2017 – Jul 2018.

#### Research Interests

Formal Methods; Formal Verification; Property-Based Testing; Programming Languages; Distributed Systems; AI for Formal Methods
`,

  "publications": `#### Conference Papers

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">PLDI 2026</span> **Trace-Guided Synthesis of Effectful Test Generators.**<br>
   **Zhe Zhou**, Ankush Desai, Benjamin Delaware, and Suresh Jagannathan.<br>
   *ACM SIGPLAN Conference on Programming Language Design and Implementation*, 2026. [[DOI]](https://doi.org/10.1145/3808264) [[Full Version]](https://arxiv.org/abs/2604.04345) [[Artifact]](https://zenodo.org/records/19076511)

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">OOPSLA 2025</span> **We've Got You Covered: Type-Guided Repair of Incomplete Input Generators.**<br>
   Patrick LaFontaine, **Zhe Zhou**, Ashish Mishra, Suresh Jagannathan, and Benjamin Delaware.<br>
   *ACM Conference on Object-Oriented Programming, Systems, Languages, and Applications*, 2025. [[DOI]](https://dl.acm.org/doi/10.1145/3763158) [[Full Version]](https://arxiv.org/abs/2504.06421) [[Artifact]](https://zenodo.org/records/15761808)

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">POPL 2025</span> **Derivative-Guided Symbolic Execution.**<br>
   Yongwei Yuan, **Zhe Zhou**, Julia Belyakova, and Suresh Jagannathan.<br>
   *Proceedings of the ACM on Programming Languages (POPL)*, 2025. [[DOI]](https://dl.acm.org/doi/10.1145/3704886) [[Full Version]](https://arxiv.org/pdf/2411.02716) [[Artifact]](https://zenodo.org/records/13800040)

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">PLDI 2024</span> **A HAT Trick: Automatically Verifying Representation Invariants Using Symbolic Finite Automata.**<br>
   **Zhe Zhou**, Qianchuan Ye, Benjamin Delaware, and Suresh Jagannathan.<br>
   *ACM SIGPLAN Conference on Programming Language Design and Implementation*, 2024. [[DOI]](https://doi.org/10.1145/3656433) [[Full Version]](https://arxiv.org/pdf/2404.01484.pdf) [[Artifact]](https://doi.org/10.5281/zenodo.10806686)

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">PLDI 2023</span> **Covering All the Bases: Type-Based Verification of Test Input Generators.**<br>
   **Zhe Zhou**, Ashish Mishra, Benjamin Delaware, and Suresh Jagannathan.<br>
   *ACM SIGPLAN Conference on Programming Language Design and Implementation*, 2023. [[DOI]](https://doi.org/10.1145/3591271) [[Full Version]](https://arxiv.org/pdf/2304.03393.pdf) [[Artifact]](https://doi.org/10.5281/zenodo.7811004)<br>
   <span style="color:red;font-weight:bold;">Distinguished Paper Award</span>

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">OOPSLA 2021</span> **Data-Driven Abductive Inference of Library Specifications.**<br>
   **Zhe Zhou**, Robert Dickerson, Benjamin Delaware, and Suresh Jagannathan.<br>
   *ACM Conference on Object-Oriented Programming, Systems, Languages, and Applications*, 2021. [[DOI]](https://dl.acm.org/doi/10.1145/3485493) [[Full Version]](https://arxiv.org/pdf/2108.04783.pdf) [[Artifact]](https://dl.acm.org/do/10.5281/zenodo.5130646/full) [[Talk]](https://youtu.be/x4i9VHMbSOU)<br>
   <span style="color:tomato;font-weight:bold;">Distinguished Artifact Award</span>

#### Workshop Papers

1. <span style="background:#f0f4e8;color:#4a7c2f;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">TPSA 2025</span> **From Traces to Program Incorrectness: A Type-Theoretic Approach.**<br>
   Yongwei Yuan, **Zhe Zhou**, Julia Belyakova, Benjamin Delaware, and Suresh Jagannathan.<br>
   *Theory and Practice of Static Analysis*, 2025.

1. <span style="background:#f0f4e8;color:#4a7c2f;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">Incorrectness 2024</span> **Type-Based Incorrectness Reasoning.**<br>
   **Zhe Zhou**, Ashish Mishra, Benjamin Delaware, and Suresh Jagannathan.<br>
   *Formal Methods for Incorrectness*, 2024.

#### Pre-prints

1. **Polymorphic Coverage Types.** Under Review.<br>
   **Zhe Zhou**, Benjamin Delaware, and Suresh Jagannathan.

1. **Adaptive Proof Refinement with LLM-Guided Strategy Selection.** Under Review.<br>
   Minghai Lu, **Zhe Zhou**, Danning Xie, Songlin Jia, Benjamin Delaware, and Tianyi Zhang.<br>
   [[Preprint]](https://arxiv.org/abs/2510.25103)
`,

  "awards": `- Maurice H. Halstead Memorial Award, Purdue University, 2025.

- Distinguished Paper Award, PLDI 2023.

- Distinguished Artifact Award, OOPSLA 2021.
`
};
