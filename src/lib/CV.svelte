<script lang="ts">
  import Header from "./components/Header.svelte";
  import Section from "./components/Section.svelte";
  import Education from "./components/Education.svelte";
  import Experience from "./components/Experience.svelte";
  import Teaching from "./components/Teaching.svelte";
  import ResearchInterests from "./components/ResearchInterests.svelte";
</script>

<div class="min-h-screen px-4 py-8 bg-gray-100">
  <div class="max-w-[21cm] mx-auto bg-white shadow-lg">
    <div id="cv-content" class="p-12">
      <Header
        name="WASITA MAHAPHANIT"
        email="wasita.gr@dartmouth.edu"
        website="website"
        github="github"
      />

      <ResearchInterests
        description="How can we effectively collaborate with others and enhance our understanding of the world, given our unique viewpoints and incomplete access to information? In other words, how do we adaptively interact with others and improve our mental models of the world in the face of uncertainty? What role does communication and other types of interaction play in this collaborative effort, and how are these processes computationally supported? To investigate these questions, I primarily use large-scale real-time online behavioral experiments, natural language processing (NLP), and computational modeling."
      />

      <Section title="Education">
        <Education
          school="Dartmouth College"
          degree="Ph.D. Candidate in Cognitive Neuroscience"
          location="Hanover, NH"
          date="Jan 2021 — Present"
          advisor="Luke J. Chang"
          committee="Luke J. Chang, Jonathan S. Phillips, Thalia Wheatley, & Robert D. Hawkins"
        />
        <Education
          school="Brown University"
          degree="B.S., Cognitive Neuroscience (Honors)"
          location="Providence, RI"
          date="2014 — 2018"
          coadvisors="Amitai Shenhav & Romy Frömer"
        />
      </Section>

      <Section title="Research Experience">
        <Experience
          title="Doctoral Researcher"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences (PBS)"
          organization="Computational Social Affective Neuroscience (COSAN) Lab"
          location="Hanover, NH"
          date="Jan 2021 — Present"
          website="https://cosanlab.com"
          coadvisor="Luke J. Chang & Robert D. Hawkins"
          details={[
            "Research focuses: shared experience, collaboration, communication, theory of mind, dyadic & group social interactions, NLP, Bayesian inference",
          ]}
        />
        <Experience
          title="Lab Manager"
          department="Brown University | Dept. of Cognitive, Linguistics, & Psychology (CLPS)"
          organization="Laboratory of Neural Computation + Cognition (LNCC)"
          location="Providence, RI"
          date="Jun 2018 — Dec 2020"
          website="https://lnccbrown.com"
          coadvisor="Michael J. Frank, Andra Geana, & Matt Nassar"
          details={[
            "Research focuses: computational psychiatry (esp. OCD), reinforcement learning, decision-making, EEG, pharmacology, Parkinson's Disease",
          ]}
        />
        <Experience
          title="Undergraduate Research Assistant"
          department="Brown University | Dept. of Cognitive, Linguistics, & Psychology (CLPS)"
          organization="Shenhav Lab"
          location="Providence, RI"
          date="Sept 2016 — Jun 2018"
          website="https://shenhavlab.org"
          coadvisor="Amitai Shenhav & Romy Frömer"
          details={[
            "Research focuses: cognitive control, performance monitoring, task-switching, EEG",
          ]}
        />
        <Experience
          title="Summer Undergraduate Research Intern"
          department="Providence VA Medical Center"
          organization="Psychiatric Neuromodulation Clinic"
          location="Providence, RI"
          date="May 2016 — Jun 2016"
          website="https://vivo.brown.edu/display/nphilip"
          advisor="Noah S. Phillips"
          details={[
            "Research focuses: major-depressive disorder, post-traumatic stress disorder, rTMS",
          ]}
        />
      </Section>
      <Section title="Teaching Experience">
        <Teaching
          title="Graduate Teaching Assistant"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences (PBS)"
          location="Hanover, NH"
          date="Spring 2023"
          course="Cognitive Psychology"
          professor="Viola Stoermer"
        />
        <Teaching
          title="Graduate Teaching Assistant"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences (PBS)"
          location="Hanover, NH"
          date="Fall 2022"
          course="Human Brain Mapping with fMRI"
          website="https://dartbrains.org"
          professor="Luke J. Chang"
        />
        <Teaching
          title="Graduate Teaching Assistant"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences (PBS)"
          location="Hanover, NH"
          date="Spring 2022"
          course="Emotion"
          professor="Mark Thornton"
        />
        <Teaching
          title="Graduate Teaching Assistant"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences (PBS)"
          location="Hanover, NH"
          date="Fall 2021"
          course="Human Brain Mapping with fMRI"
          website="https://dartbrains.org"
          professor="Luke J. Chang"
        />
        <Teaching
          title="Undergraduate Teaching Assistant"
          department="Brown University | Dept. of Computer Science"
          location="Providence, RI"
          date="Spring 2018"
          course="Intro to Scientific Computing and Problem Solving"
          website="https://cs.brown.edu/courses/info/csci0040/"
          professor="Daniel Potter"
        />
        <Teaching
          title="Undergraduate Teaching Assistant"
          department="Brown University | Dept. of Cognitive, Linguistics, & Psychology (CLPS)"
          location="Providence, RI"
          date="Fall 2017"
          course="Intro to Programming"
          professor="Thomas Serre"
        />
      </Section>
    </div>
  </div>
</div>
