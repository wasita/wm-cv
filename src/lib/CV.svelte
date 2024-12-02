<script lang="ts">
  import Header from "./components/Header.svelte";
  import ResearchInterests from "./components/ResearchInterests.svelte";
  import Section from "./components/Section.svelte";
  import Education from "./components/Education.svelte";
  import Experience from "./components/Experience.svelte";
  import Teaching from "./components/Teaching.svelte";
  import Papers from "./components/Papers.svelte";
  import Talks from "./components/Talks.svelte";
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
      <Section title="Working Papers">
        <Papers
          WM="Mahaphanit, W.*"
          postWM="Welker, C.*, Schmidt, H., Chang, L.J., & Hawkins, R.D."
          year="In Prep."
          title="When & why do we infer commonalities in social interactions?"
        />
        <Papers
          twoAuthors={true}
          year="In Prep."
          postWM="Chang, L.J."
          title="Are shared experiences blind?"
        />
        <Papers
          twoAuthors={true}
          year="In Prep."
          postWM="Chang, L.J."
          title="Communication as behavioral annotation for naturalistic stimuli."
        />
        <Papers
          preWM="Kang, J.,"
          postWM="Provenza, N., Nassar, M., Allam, A., Bechtold, R., Diab, N., Rajesh, S., Reddy S., Reyes, G., Dastin-van Rijn, E., Gandhi, A., Hirani, S., Banks, G., Dang, H., Avendano-Ortega, M., McKay, S., Borton, D., Frank, M.J., Storch, E., Herron, J., Goodman, W., Hayden, B., & Sheth, S."
          year="In Prep."
          title="The effect of adaptive deep brain stimulation for obsessive-compulsive disorder in cognitive self-control under uncertainty."
        />
      </Section>
      <Section title="Preprints">
        <Papers
          WM="Mahaphanit, W.*"
          postWM="Welker, C.*, Schmidt, H., Chang, L.J., & Hawkins, R.D."
          year="2024"
          title="When & why does shared reality generalize?"
          journal="PsyArXiv"
          URL="https://osf.io/preprints/psyarxiv/g9p3e"
        />
      </Section>
      <Section title="Proceedings Papers">
        <Papers
          WM="Mahaphanit, W.*"
          postWM="Welker, C.*, Schmidt, H., Chang, L.J., & Hawkins, R.D."
          year="2024"
          title="When & why does shared reality generalize?"
          journal="Proceedings of the 46th Annual Conference of the Cognitive Science Society"
          URL="https://escholarship.org/uc/item/6t6195s5"
        />
        <Papers
          postWM="Welker, C., Schmidt, H., Chang, L.J., & Hawkins, R.D."
          year="2024"
          title="How does shared reality generalize?"
          journal="Proceedings of the 7th Annual Conference on Cognitive Computational Neuroscience (CCN)"
        />
      </Section>
      <Section title="Journal Papers">
        <Papers
          preWM="Culbreth, A., Moran, E.,"
          postWM="Erickson, M., Boudewyn, M., Frank, M.J., Barch, D., MacDonald III, A., Ragland, J., Luck, S., Silverstein, S., Carter, C., & Gold, J."
          year="2023"
          title="A Transdiagnostic Study of Effort-Cost Decision-Making in Psychotic and Mood Disorders."
          journal="Schizophrenia Bulletin"
        />
        <Papers
          preWM="Provenza, N.R., Gelin, L.,"
          postWM="McGrath, M., Dastin-van Rijin, E., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K., and Borton, D."
          year="2021"
          title="Honeycomb: a template forreproducible psychophysiological tasks for clinic, laboratory, and home use."
          journal="Brazillian Journal of Psychiatry"
        />
      </Section>

      <Section title="Talks">
        <Talks
          year="November 2024"
          title="Inferring commonalities in social interactions."
          venue="Crockett Lab Meeting (PI: Molly Crockett), Princeton University, Princeton, NJ"
        />
        <Talks
          year="July 2024"
          title="When & why does shared reality generalize?"
          venue="Cognitive Science Society conference (CogSci 2024), Rotterdam, Netherlands"
        />
        <Talks
          year="February 2024"
          title="Are shared experiences blind?"
          venue="Shared Reality Mini-Conference (Virtual)"
        />
        <Talks
          year="December 2023"
          title="Web dev approaches to studying social interactions."
          venue="Social Interaction Lab Meeting (PI: Robert D. Hawkins), University of Wisconsin-Madison, Madison, WI"
        />
        <Talks
          year="November 2023"
          title="Learning to communicate a shared wavelength."
          venue="New England Research on Decision-Making (NERD) conference, Harvard University, Cambridge, MA"
        />
        <Talks
          year="October 2023"
          title="Learning to communicate a shared wavelength."
          venue="Social Interaction Lab Meeting (PI: Robert D. Hawkins), University of Wisconsin-Madison, Madison, WI"
        />
        <Talks
          year="October 2023"
          title="Does shared reality generalize?"
          venue="Social Interaction Lab Meeting (PI: Robert D. Hawkins), University of Wisconsin-Madison, Madison, WI"
        />
        <Talks
          year="September 2023"
          title="Learning to collaboratively communicate a shared wavelength"
          venue="Social Lab (SLAB) Talk Series at Dartmouth College, Hanover, NH"
        />
        <Talks
          year="May 2023"
          title="Decision-Making."
          venue="Guest lecture for PSYC 028 (Cognitive Psychology) class taught by Prof. Viola Störmer, Dartmouth College, Hanover, NH."
        />
        <Talks
          year="September 2022"
          title="On using a chat app to study communication and shared reality."
          venue="Social Lab (SLAB) Talk Series at Dartmouth College, Hanover, NH"
        />
        <Talks
          year="May 2022"
          title="Evolutionary game theory"
          venue="Guest lecture for PSYC 043 (Emotion) class taught by Prof. Mark Thornton, Dartmouth College, Hanover, NH."
        />
        <Talks
          year="October 2021"
          title="On building a chat app for studying shared reality construction and communication."
          venue="Social Lab (SLAB) Talk Series at Dartmouth College, Hanover, NH"
        />
        <Talks
          year="December 2020"
          title="Computations in information-seeking and decision-making in Obsessive-Compulsive Disorder."
          venue="Learning, Memory, & Decision Lab Meeting (PI: Matt Nassar), Brown University, Providence, RI"
        />
        <Talks
          year="November 2020"
          title="Intro to Honeycomb: a template for reproducible psychophysiological task creation."
          venue="Center for Computation & Visualization (CCV) tutorial series, Brown University, Providence, RI"
        />
        <Talks
          year="June 2020"
          title="Computations in information-seeking and decision-making in Obsessive-Compulsive Disorder."
          venue="Brown Uncomference on Computational Intelligence and Applications. Brown University, Providence, RI"
        />
        <Talks
          year="May 2018"
          title="The costs of having better alternatives."
          venue="Departmental undergraduate honors thesis oral defense presentation. Brown University, Providence, RI"
        />
      </Section>
    </div>
  </div>
</div>
