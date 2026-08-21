const SITE_CONFIG = {
   "title": "Zhe Zhou's Homepage",
   "page-top-title": "Zhe Zhou",
   "top-section-bg-text": "Programming Languages & Formal Methods",
   "home-subtitle": "Zhe Zhou&ensp;|&ensp;周喆",
   "copyright-text": "&copy; Zhe Zhou 2025-2026. All Rights Reserved."
};

const SITE_SECTIONS = {
   "home": `[![zhezhouzz](https://img.shields.io/badge/zhezhouzz-github-blue?logo=github)](https://github.com/zhezhouzz)
[![Google Scholar](https://img.shields.io/badge/Google_Scholar-blue?logo=google-scholar&logoColor=white)](https://scholar.google.com/citations?user=cLoaC9kAAAAJ&hl=en&oi=sra)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/zhe-zhou-56b66a238/)

In Fall 2026, I will join the [Institute of Software](https://cs.pku.edu.cn/info/1106/1476.htm), [School of Computer Science](http://cs.pku.edu.cn/English/Home.htm), [Peking University](http://english.pku.edu.cn/) as an Assistant Professor. Before joining Peking University, I was a postdoctoral researcher at Purdue University, working with [Prof. Suresh Jagannathan](https://www.cs.purdue.edu/homes/suresh). I received my Ph.D. in Computer Science from Purdue University, where I was advised by [Prof. Suresh Jagannathan](https://www.cs.purdue.edu/homes/suresh) and [Prof. Benjamin Delaware](https://www.cs.purdue.edu/homes/bendy/). Prior to my doctoral studies, I worked as a software engineer at Megvii (Face++) from 2017 to 2018. I earned my bachelor's degree from Peking University in 2017, where I was advised by [Prof. Guangyu Sun](https://gsunpku.github.io/).

I am looking for motivated Ph.D. students interested in formal methods, programming languages, AI for proof, and property-based testing. Prospective students are warmly encouraged to contact me.

My research focuses on formal methods, programming languages, AI for proof, and property-based testing. My current work follows three main threads. The first develops new verification techniques, including under-approximated styles of verification, trace-based verification, and other type-based verification methods. The second explores AI for program verification, with an emphasis on repository-level verification of large-scale systems software such as operating systems, distributed systems, and software written in Rust and C. The third studies how to make property-based testing more realistic, automated, and intelligent, especially through better support for test generators.

Here is my [CV](https://github.com/zhezhouzz/CV/blob/main/Zhe_CV_2026_08.pdf) and [research statement](https://github.com/zhezhouzz/CV/blob/main/research_statement-zhe.pdf).

#### Contact

- **Email:** zhou956[at]purdue.edu
- **Office:** TBD, Peking University

#### Education

Ph.D., Computer Science, Purdue University, Aug 2018 – Jul 2025.\\
B.Sc., Computer Science, Peking University, Sep 2013 – Jul 2017.

#### Experience

Postdoctoral Researcher, Purdue University, Aug 2025 – Aug 2026.\\
Applied Scientist Intern, Amazon, May 2024 – Sep 2024 & Mar 2025 – Jun 2025.\\
Software Engineer, Megvii (Face++), Jul 2017 – Jul 2018.

#### Research Interests

Formal Methods; Programming Languages; AI for Proof; Property-Based Testing
`,

   // Venue badge colors (reuse the matching span style when adding papers):
   //   Journal:    purple — background:#f3e8fd; color:#7c3aed
   //   Conference: blue   — background:#e8f0fe; color:#1a73e8
   //   Workshop:   green  — background:#f0f4e8; color:#4a7c2f
   //
   // Paper status & awards (on a new line after authors):
   //   To appear — gray note while not yet formally published; remove once published:
   //     <br><span style="color:gray;">To appear</span>
   //   Conditional Accept — gray note while not yet formally published; remove once published:
   //     <br><span style="color:gray;">Conditional Accept</span>
   //   Awards — add on a new line when applicable (keep after publication):
   //     <br><span style="color:red;font-weight:bold;">Distinguished Paper Award</span>
   //     <br><span style="color:tomato;font-weight:bold;">Distinguished Artifact Award</span>
   //   Extended journal version — gray note (keep after publication):
   //     <br><span style="color:gray;">Extended version of *Title* (VENUE YEAR).</span>
   //
   // Entry format:
   //   Line 1: badge + title + links (DOI / Full Version / Artifact / Talk)
   //   Line 2: authors — highlight your name with <span class="author-self">Zhe Zhou</span>
   "publications": `#### Journal & Conference Papers

\\* denotes corresponding author.

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">ASE 2026</span> **Adaptive Proof Refinement with LLM-Guided Strategy Selection.** [[DOI]](https://doi.org/10.1145/3832783.3834382) [[Full Version]](https://arxiv.org/abs/2510.25103)<br>
   Minghai Lu, <span class="author-self">Zhe Zhou*</span>, Danning Xie, Songlin Jia, Benjamin Delaware, and Tianyi Zhang.

1. <span style="background:#f3e8fd;color:#7c3aed;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">JFP 2026</span> **Polymorphic Coverage Types.** [[DOI]](https://doi.org/10.46298/jfp.17755) [[Full Version]](https://arxiv.org/pdf/2304.03393)<br>
   <span class="author-self">Zhe Zhou</span>, Ashish Mishra, Benjamin Delaware, and Suresh Jagannathan.<br>
   <span style="color:gray;">Extended version of *Covering All the Bases: Type-Based Verification of Test Input Generators* (PLDI 2023).</span>

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">PLDI 2026</span> **Trace-Guided Synthesis of Effectful Test Generators.** [[DOI]](https://doi.org/10.1145/3808264) [[Full Version]](https://arxiv.org/abs/2604.04345) [[Artifact]](https://zenodo.org/records/19076511)<br>
   <span class="author-self">Zhe Zhou</span>, Ankush Desai, Benjamin Delaware, and Suresh Jagannathan.

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">OOPSLA 2025</span> **We've Got You Covered: Type-Guided Repair of Incomplete Input Generators.** [[DOI]](https://dl.acm.org/doi/10.1145/3763158) [[Full Version]](https://arxiv.org/abs/2504.06421) [[Artifact]](https://zenodo.org/records/15761808)<br>
   Patrick LaFontaine, <span class="author-self">Zhe Zhou</span>, Ashish Mishra, Suresh Jagannathan, and Benjamin Delaware.

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">POPL 2025</span> **Derivative-Guided Symbolic Execution.** [[DOI]](https://dl.acm.org/doi/10.1145/3704886) [[Full Version]](https://arxiv.org/pdf/2411.02716) [[Artifact]](https://zenodo.org/records/13800040)<br>
   Yongwei Yuan, <span class="author-self">Zhe Zhou</span>, Julia Belyakova, and Suresh Jagannathan.

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">PLDI 2024</span> **A HAT Trick: Automatically Verifying Representation Invariants Using Symbolic Finite Automata.** [[DOI]](https://doi.org/10.1145/3656433) [[Full Version]](https://arxiv.org/pdf/2404.01484.pdf) [[Artifact]](https://doi.org/10.5281/zenodo.10806686)<br>
   <span class="author-self">Zhe Zhou</span>, Qianchuan Ye, Benjamin Delaware, and Suresh Jagannathan.

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">PLDI 2023</span> **Covering All the Bases: Type-Based Verification of Test Input Generators.** [[DOI]](https://doi.org/10.1145/3591271) [[Full Version]](https://arxiv.org/pdf/2304.03393.pdf) [[Artifact]](https://doi.org/10.5281/zenodo.7811004)<br>
   <span class="author-self">Zhe Zhou</span>, Ashish Mishra, Benjamin Delaware, and Suresh Jagannathan.<br>
   <span style="color:red;font-weight:bold;">Distinguished Paper Award</span>

1. <span style="background:#e8f0fe;color:#1a73e8;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">OOPSLA 2021</span> **Data-Driven Abductive Inference of Library Specifications.** [[DOI]](https://dl.acm.org/doi/10.1145/3485493) [[Full Version]](https://arxiv.org/pdf/2108.04783.pdf) [[Artifact]](https://dl.acm.org/do/10.5281/zenodo.5130646/full) [[Talk]](https://youtu.be/x4i9VHMbSOU)<br>
   <span class="author-self">Zhe Zhou</span>, Robert Dickerson, Benjamin Delaware, and Suresh Jagannathan.<br>
   <span style="color:tomato;font-weight:bold;">Distinguished Artifact Award</span>

#### Workshop Papers

1. <span style="background:#f0f4e8;color:#4a7c2f;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">TPSA 2025</span> **From Traces to Program Incorrectness: A Type-Theoretic Approach.**<br>
   Yongwei Yuan, <span class="author-self">Zhe Zhou</span>, Julia Belyakova, Benjamin Delaware, and Suresh Jagannathan.<br>
   *Theory and Practice of Static Analysis*, 2025.

1. <span style="background:#f0f4e8;color:#4a7c2f;padding:2px 8px;border-radius:4px;font-weight:bold;font-size:0.88em;">Incorrectness 2024</span> **Type-Based Incorrectness Reasoning.**<br>
   <span class="author-self">Zhe Zhou</span>, Ashish Mishra, Benjamin Delaware, and Suresh Jagannathan.<br>
   *Formal Methods for Incorrectness*, 2024.
`,

   "awards": `- Maurice H. Halstead Memorial Award, Purdue University, 2025.

- Distinguished Paper Award, PLDI 2023.

- Distinguished Artifact Award, OOPSLA 2021.
`
};
