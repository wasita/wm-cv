<script lang="ts">
  import Header from "./components/Header.svelte";
  import ResearchInterests from "./components/ResearchInterests.svelte";
  import Section from "./components/Section.svelte";
  import Education from "./components/Education.svelte";
  import Experience from "./components/Experience.svelte";
  import Teaching from "./components/Teaching.svelte";
  import Papers from "./components/Papers.svelte";
  import Presentations from "./components/Presentations.svelte";
  import Honors from "./components/Honors.svelte";
</script>

<div class="px-2 py-8 min-h-screen bg-white">
  <div class="min-w-[4in] max-w-[8.25in] mx-auto bg-white">
    <div id="cv-content" class="p-12">
      <Header
        name="WASITA MAHAPHANIT"
        email="wasita.gr@dartmouth.edu"
        website="https://wasita.space"
        github="https://github.com/wasita"
      />

      <ResearchInterests
        description="How do people build shared understanding through real-time interaction, despite having unique viewpoints and incomplete information? I study how we leap from sparse social signals to rich inferences about others' minds, how we coordinate on meaning when everyone brings different interpretative frameworks, and how these dynamic processes create social connection.
        To investigate these questions, I develop interactive web-based paradigms that capture the richness of actual social interaction while maintaining experimental control. I combine these multiplayer web apps with natural language processing (NLP) and computational cognitive modeling (primarily Bayesian inference)."
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
          department="Dartmouth College | Psychological & Brain Sciences"
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
          department="Brown University | Cognitive, Linguistic, & Psychological Sciences"
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
          department="Brown University | Cognitive, Linguistic, & Psychological Sciences"
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
          date="May 2016 — July 2016"
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
          department="Dartmouth College | Dept. of Psychological & Brain Sciences"
          location="Hanover, NH"
          date="Spring 2023"
          course="Cognitive Psychology"
          professor="Viola Störmer"
        />
        <Teaching
          title="Graduate Teaching Assistant"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences"
          location="Hanover, NH"
          date="Fall 2022"
          course="Human Brain Mapping with fMRI"
          website="https://dartbrains.org"
          professor="Luke J. Chang"
        />
        <Teaching
          title="Graduate Teaching Assistant"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences"
          location="Hanover, NH"
          date="Spring 2022"
          course="Emotion"
          professor="Mark Thornton"
        />
        <Teaching
          title="Graduate Teaching Assistant"
          department="Dartmouth College | Dept. of Psychological & Brain Sciences"
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
          department="Brown University | Dept. of Cognitive, Linguistic, & Psychological Sciences"
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
          title="When & why do we infer commonalities in social interactions?"
        />
        <Papers
          postWM="Templeton, E., & Chang, L.J."
          title="Are shared experiences blind?"
        />
        <Papers
          twoAuthors={true}
          postWM="Chang, L.J."
          title="Communication as behavioral annotation for naturalistic stimuli."
        />
        <Papers
          preWM="Kang, J.,"
          postWM="Provenza, N., Nassar, M., Allam, A., Bechtold, R., Diab, N., Rajesh, S., Reddy S., Reyes, G., Dastin-van Rijn, E., Gandhi, A., Hirani, S., Banks, G., Dang, H., Avendano-Ortega, M., McKay, S., Borton, D., Frank, M.J., Storch, E., Herron, J., Goodman, W., Hayden, B., & Sheth, S."
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
          journal="Proceedings of the 46th Annual Conference of the Cognitive Science (CogSci) Society"
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
          URL="https://pmc.ncbi.nlm.nih.gov/articles/PMC10919776/pdf/sbad155.pdf"
        />
        <Papers
          preWM="Provenza, N.R., Gelin, L.,"
          postWM="McGrath, M., Dastin-van Rijin, E., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K., and Borton, D."
          year="2021"
          title="Honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use."
          journal="Brazilian Journal of Psychiatry"
          URL="https://pmc.ncbi.nlm.nih.gov/articles/PMC9041958/pdf/bjp-44-02-147.pdf"
        />
      </Section>

      <Section title="Talks">
        <Presentations
          year="September 2025"
          title="Escaping Flatland: From isolated minds to interacting ones."
          venue="Lab Meeting (PI: Mark Ho)"
          location="New York University, New York, NY"
        />
        <Presentations
          year="April 2025"
          title="Inferring commonalities in social interactions."
          venue="Lab Meeting (PI: Elisa Baek)"
          location="University of Southern California, Los Angeles, CA"
        />
        <Presentations
          year="November 2024"
          title="Inferring commonalities in social interactions."
          venue="Lab Meeting (PI: Molly Crockett)"
          location="Princeton University, Princeton, NJ"
        />
        <Presentations
          year="July 2024"
          title="When & why does shared reality generalize?"
          venue="Cognitive Science (CogSci) Society conference"
          location="Rotterdam, Netherlands"
        />
        <Presentations
          year="February 2024"
          title="Are shared experiences blind?"
          venue="Shared Reality Mini-Conference"
          location="Virtual"
        />
        <Presentations
          year="December 2023"
          title="Web dev approaches to studying social interactions."
          venue="Lab Meeting (PI: Robert D. Hawkins)"
          location="Virtual"
        />
        <Presentations
          year="November 2023"
          title="Learning to communicate a shared wavelength."
          venue="New England Research on Decision-Making (NERD) conference"
          location="Harvard University, Cambridge, MA"
        />
        <Presentations
          year="October 2023"
          title="Learning to communicate a shared wavelength."
          venue="Lab Meeting (PI: Robert D. Hawkins)"
          location="Virtual"
        />
        <Presentations
          year="October 2023"
          title="Does shared reality generalize?"
          venue="Lab Meeting (PI: Robert D. Hawkins)"
          location="Virtual"
        />
        <Presentations
          year="September 2023"
          title="Learning to collaboratively communicate a shared wavelength."
          venue="Social Lab (SLAB) Talk Series"
          location="Dartmouth College, Hanover, NH"
        />
        <Presentations
          year="May 2023"
          title="Decision-Making."
          venue="Guest lecture for PSYC 028 (Cognitive Psychology) class taught by Prof. Viola Störmer"
          location="Dartmouth College, Hanover, NH"
        />
        <Presentations
          year="September 2022"
          title="On using a chat app to study communication and shared reality."
          venue="Social Lab (SLAB) Talk Series"
          location="Dartmouth College, Hanover, NH"
        />
        <Presentations
          year="May 2022"
          title="Evolutionary game theory."
          venue="Guest lecture for PSYC 043 (Emotion) class taught by Prof. Mark Thornton"
          location="Dartmouth College, Hanover, NH"
        />
        <Presentations
          year="October 2021"
          title="On building a chat app for studying shared reality construction and communication."
          venue="Social Lab (SLAB) Talk Series"
          location="Dartmouth College, Hanover, NH"
        />
        <Presentations
          year="December 2020"
          title="Computations in information-seeking and decision-making in Obsessive-Compulsive Disorder."
          venue="Lab Meeting (PI: Matt Nassar)"
          location="Brown University, Providence, RI"
        />
        <Presentations
          year="November 2020"
          title="Intro to Honeycomb: a template for reproducible psychophysiological task creation."
          venue="Center for Computation & Visualization (CCV) tutorial series"
          location="Brown University, Providence, RI"
        />
        <Presentations
          year="June 2020"
          title="Computations in information-seeking and decision-making in Obsessive-Compulsive Disorder."
          venue="Brown Unconference on Computational Intelligence and Applications"
          location="Brown University, Providence, RI"
        />
        <Presentations
          year="May 2018"
          title="The costs of having better alternatives."
          venue="Departmental undergraduate honors thesis oral defense presentation"
          location="Brown University, Providence, RI"
        />
      </Section>
      <Section title="Posters">
        <Presentations
          poster={true}
          year="July 2025"
          postWM="Keller, B., Phillips, J.S., Hawkins, R.D., & Chang, L.J."
          title="Learning to communicate a shared wavelength."
          venue="Cognitive Science (CogSci) Society conference"
          location="San Francisco, CA"
        />
        <Presentations
          poster={true}
          year="May 2025"
          postWM="Welker, C., Schmidt, H., Chang, L.J., & Hawkins, R.D."
          title="When & why do we infer commonalities in social interactions?"
          venue="Trends in Psychological Science (TiPS) conference"
          location="Harvard University, Cambridge, MA"
        />
        <Presentations
          poster={true}
          twoAuthors={true}
          year="September 2024"
          postWM="Chang, L.J."
          title="Shared experiences increase social connection."
          venue="OppNet Social Connectedness and Isolation (SCI) grantee meeting"
          location="NIH, Rockville, MD"
        />
        <Presentations
          poster={true}
          year="August 2024"
          title="How does shared reality generalize?"
          postWM="Welker, C., Schmidt, H., Chang, L.J., & Hawkins, R.D."
          venue="7th annual conference on Cognitive Computational Neuroscience (CCN)"
          location="MIT, Cambridge, MA"
        />
        <Presentations
          poster={true}
          year="June 2024"
          preWM="Kang, J.,"
          postWM="Provenza, N., Nassar, M., Allam, A., Bechtold, R., Diab, N., Rajesh, S., Reddy S., Reyes, G., Dastin-van Rijn, E., Gandhi, A., Hirani, S., Banks, G., Dang, H., Avendano-Ortega, M., McKay, S., Borton, D., Frank, M.J., Storch, E., Herron, J., Goodman, W., Hayden, B., & Sheth, S."
          title="The effect of adaptive deep brain stimulation for obsessive-compulsive disorder in cognitive self-control under uncertainty. "
          venue="American Society for Stereotactic & Functional Neurosurgery (ASSFN)"
          location="Nashville, TN"
        />
        <Presentations
          poster={true}
          year="April 2024"
          postWM="Hawkins, R.D., Phillips, J.S., & Chang, L.J."
          title="Learning to communicate a shared wavelength facilitates social connection."
          venue="Social & Affective Neuroscience (SANS) Society"
          location="Toronto, CA"
        />
        <Presentations
          poster={true}
          twoAuthors={true}
          year="February 2024"
          postWM="Chang, L.J."
          title="Shared experiences strengthen social connectedness through shared impression formation and communication behavior."
          venue="Society for Personality & Social Psychology (SPSP)"
          location="San Diego, CA"
        />
        <Presentations
          poster={true}
          twoAuthors={true}
          year="July 2023"
          postWM="Chang, L.J."
          title="Shared experiences strengthen social connectedness through shared impression formation and communication behavior."
          venue="Cognitive Science (CogSci) Society conference"
          location="Virtual"
        />
        <Presentations
          poster={true}
          twoAuthors={true}
          year="April 2023"
          postWM="Chang, L.J."
          title="Are shared experiences blind?"
          venue="Social & Affective Neuroscience (SANS) Society"
          location="Santa Barbara, CA"
        />
        <Presentations
          poster={true}
          year="October 2019"
          preWM="Geana, A.,"
          postWM="& Frank, M.J."
          title="The role of perceptual uncertainty in value learning and naturalistic stimulus categorization."
          venue="Society for Neuroscience (SfN)"
          location="Chicago, IL"
        />
        <Presentations
          poster={true}
          year="July 2019"
          postWM="Geana, A., & Frank, M.J."
          title="Perceptual uncertainty influences stimulus value learning in perceptual categorization."
          venue="4th Multidisciplinary conference on Reinforcement Learning and Decision Making (RLDM)"
          location="Montreal, CA"
        />
        <Presentations
          poster={true}
          year="April 2019"
          preWM="Provenza, P., Dastin-van Rijn, E., McLaughlin, N., Sheth, S., Viswanathan, A., Vogt, G., Ramakrishnan, R., McIngvale, E., Storch, E.,"
          postWM="Nassar, M., Frank, M.J., Ertugrul, I., Jeni, L., Cohn, J., Borton, D., & Goodman, W."
          title="Preliminary experience with developing adaptive Deep Brain Stimulation for Obsessive Compulsive Disorder."
          venue="5th Annual BRAIN Initiative Investigators Meeting"
          location="Washington, D.C"
        />
      </Section>
      <Section title="Awards & Honors">
        <Honors
          info="Neukom Travel Award | $1,000"
          details="Dartmouth College"
          date="July 2025"
        />
        <Honors
          info="Diversity & Inclusion Conference Award | $1,000"
          details="Cognitive Science Society"
          date="July 2024"
        />
        <Honors
          info="Neukom Travel Award | $1,000"
          details="Dartmouth College"
          date="July 2024"
        />
        <Honors
          info="Neukom Travel Award | $1,000"
          details="Dartmouth College"
          date="April 2023"
        />
        <Honors
          info="Honorable Mention"
          details="NSF Graduate Research Fellowship (GRFP)"
          date="April 2022"
        />
        <Honors
          info="Inductee"
          details="Sigma Xi Honor Society"
          date="May 2018"
        />
        <Honors
          info="Deep Learning Datathon | 1st Place"
          details="Brown University"
          date="January 2018"
        />
        <Honors
          info="National College Match Finalist"
          details="QuestBridge"
          date="2014"
        />
        <Honors info="College Prep Scholar" details="QuestBridge" date="2013" />
      </Section>

      <Section title="Fellowships & Scholarships">
        <Honors
          info="Undergraduate Teaching & Research Award | $3,500"
          details="Brown University"
          date="Summer 2017"
        ></Honors>
        <Honors
          info="Undergraduate Teaching & Research Award | $1,000"
          details="Brown University"
          date="Spring 2016"
        ></Honors>
        <Honors
          info="Sorensen Family Chancellor's Scholarship"
          details="Brown University"
          date="2015 - 2017"
        ></Honors>
        <Honors
          info="Junior Volunteer Endowment Scholarship | $2,000"
          details="Maine Medical Center"
          date="Spring 2014"
        ></Honors>
      </Section>
      <Section title="Scientific & Community Outreach">
        <Honors
          info="PBS NOVA | Episode: Who's in Control?"
          URL="https://www.youtube.com/watch?v=yQ6VOOd73MA"
          details="Software Engineer for Featured Trust Game & fMRI Operator"
          date="May 2023"
        />
        <Honors
          info="Svelte Radio | Episode: Svelte in Research at Dartmouth with Wasita & Eshin"
          URL="https://open.spotify.com/episode/3JzRDzPOylvhBSIj7jZLDz?si=9S9qbaU5SF-GzaTJPtZl_g"
          details="Podcast Guest"
          date="April 2023"
        />
        <Honors
          info="Women in Network Science (WiNS) Society"
          URL="https://sites.google.com/view/womeninnetworkscience/society/membership/membership-list?authuser=0"
          details="Site Maintainer | Website Working Group"
          date="2022 - Present"
        />
        <Honors
          info="Info Theory Book"
          URL="https://cosanlab.github.io/info-theory-book"
          details="Content Contributor & Site Maintainer"
          date="2022 - Present"
        />
        <Honors
          info="Intro to fMRI at Dartmouth"
          URL="https://dartbrains.org"
          details="Content Contributor & Site Maintainer"
          date="2021 - 2023"
        />
        <Honors
          info="Project SHORT"
          URL="https://www.project-short.com"
          details="Pre-Grad Mentor"
          date="2020 - 2022"
        />
        <Honors
          info="Honeycomb"
          URL="https://brown-ccv.github.io/honeycomb-docs"
          details="Contributing Software Engineer"
          date="2019 - 2021"
        />
        <Honors
          info="Rhode Island Brain Week"
          URL="https://brainweekri.org"
          details="Booth Organizer"
          date="2018 - 2020"
        />
        <Honors
          info="Rhode Island Brain Week"
          URL="https://brainweekri.org"
          details="Booth Volunteer"
          date="2017 - 2018"
        />
      </Section>
      <Section title="Additional Research Training">
        <Honors
          info="Computational Summer school on Modeling Social and collective behavior (COSMOS)"
          URL="https://cosmossummerschool.github.io"
          details="RIKEN Center for Brain Science, Tokyo, Japan"
          date="2025"
        />
        <Honors
          info="Methods in Neuroscience at Dartmouth (MIND) Summer School"
          URL="https://mindsummerschool.org"
          details="Dartmouth College"
          date="2023"
        />
        <Honors
          info="Computational Neuroscience"
          URL="https://compneuro.neuromatch.io/tutorials/intro.html"
          details="Neuromatch Academy (NMA)"
          date="2021"
        />
        <Honors
          info="Carney Computational Modeling Workshop"
          URL="https://ccbs.carney.brown.edu/training-education/competitions"
          details="Brown University"
          date="2018"
        />
      </Section>
      <Section title="Mentorship">
        <Honors
          info="Chelsea Mills (Dartmouth College)"
          date="2025 - Present"
        />
        <Honors info="Ben Keller (Dartmouth College)" date="2025" />
        <Honors info="Eli Bailit (Dartmouth College)" date="2024" />
        <Honors info="Helen Horan (Dartmouth College)" date="2022" />
        <Honors info="Jonathan Lim (Dartmouth College)" date="2022" />
        <Honors
          info="Cleveland (Rob) Chambliss (Brown University)"
          date="2018 - 2019"
        />
        <Honors info="Caroline Hunt (Brown University)" date="2018 - 2019" />
        <Honors
          info="Juan Muneton Gallego (Brown University)"
          date="2018 - 2019"
        />
        <Honors info="Hattie Xu (Brown University)" date="2017 - 2018" />
      </Section>
      <Section title="Professional & Departmental Service">
        <Honors
          info="Social Lab (SLAB) Talk Series Co-Organizer"
          details="Dartmouth College | PBS"
          date="2021 - 2024"
        />
        <Honors
          info="Consortium for Interacting Minds (CIM) Talk Series Co-Organizer"
          details="Dartmouth College | PBS"
          date="2021 - 2024"
        />
        <Honors
          info="Teaching Assistant Repository Creation & Organization Committee"
          details="Dartmouth College | PBS"
          date="2022 - 2023"
        />
        <Honors
          info="Meeting Harmonization Committee"
          details="Dartmouth College | PBS"
          date="2021 - 2023"
        />
        <Honors
          info="Transitioning from Intro to Programming to Career in Computation | Alumni Panelist"
          details="Brown University | CLPS"
          date="2021"
        />
        <Honors
          info="Managing Minds (Lab Manager Peer Mentoring Group) | Founder & Organizer"
          details="Brown University | CLPS & Carney Institute"
          date="2019 - 2021"
        />
        <Honors
          info="Cognitive Neuroscience DUG Alumni Career Panelist"
          details="Brown University | CLPS"
          date="2018"
        />
      </Section>
      <Section title="Ad Hoc Review">
        <Honors info="Proceedings of the Cognitive Science Society" />
        <Honors info="Proceedings on Cognitive Computational Neuroscience" />
        <Honors info="Nature Scientific Reports" />
        <Honors
          info="Cyberpsychology: Journal of Psychosocial Research on Cyberspace"
        />
        <Honors info="Inquisitive Mind (In-Mind) Magazine International" />
      </Section>
    </div>
  </div>
</div>
