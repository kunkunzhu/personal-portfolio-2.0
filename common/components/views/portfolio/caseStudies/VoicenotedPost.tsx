import React from "react";
import PortfolioBox from "@/common/components/elements/portfolio/PortfolioBox";
import { 
    TallHero, 
    Summary, 
    Title,
    Heading,
    Paragraph,
    Section,
    SectionDivider,
    Wrapper,
    Nutshell
 } from './PostStyles'

function VoicenotedPostContent() {
    return (
            <Wrapper>
                <Summary>
                    <Title>
                        <div className="title">
                            Voicenoted.
                        </div>
                        <div className="subtitle">
                            Reimagining the podcast experience through notetaking functionality to optimize the learning experience.
                        </div>
                    </Title>
                    <TallHero src="https://i.ibb.co/5xYM2z2/Hero.png"/> 
                </Summary>
                <Section>
                    <Paragraph>
                        <div className="paragraph">
                            Hack the North is the largest hackathon that occurs annually in Canada.
                            During this year's virtual weekend-long event, I collaborated with 3 other
                            individuals to build a digital product within the time constraint of 36 hours. 
                            As a team, we worked together for the first time to ideate the product, create 
                            the prototype, implement the functionalities, and finally present our pitch.
                            In the end, we were selected as a <b>winner</b>!
                        </div>
                    </Paragraph>
                    <Nutshell
                        timeline="Sept 17-19, 2021 (36 hours)"
                        role="UX Designer"
                        team={["Jacquelyn (UX Designer)", "Max (Backend Developer)", "Emily (Fullstack Developer)"]}
                    />
                </Section>
                <SectionDivider/>
                <Section>
                    <Heading
                    style={{textTransform: "lowercase"}}>
                        identifying the problem. 💭
                    </Heading>
                    <Paragraph>
                        <div className="paragraph">
                            After some secondary research, we identified an increasing trend in audio-based 
                            learning and content consumption. In fact, <b>74% of users state that they go to
                            podcasts as a resource for learning new things.</b> As such, we decided to focus 
                            our project on the question:
                        </div>
                        <div className="quote">
                            "How might we improve the podcast-listening experience to enhance learning?"
                        </div>
                        <div className="paragraph">
                            Due to the limited time constraint of the hackathon, conducting primary research did
                            not seem feasible. Instead, we discussed our experience with audio-based learning among 
                            the team in order to brainstorm our solution. A common pain point is brought up: 
                        </div>
                        <div className="paragraph">
                            <b>Notetaking has long been an integral part of the learning process</b>, however, there has 
                            not been a convenient way for people to take notes on audio format of information. Most 
                            platforms simply do not have a way for users to record meaningful clips of audio content, 
                            nor to integrate these clips into their customized notes. 
                        </div>
                        <div className="paragraph">
                            We began to imagine a way to seamlessly integrate the functionality of notetaking into 
                            audio-learning experience. A mobile-first application is decided upon, as most users listen to 
                            podcast through their mobile devices. From here, <b>Voicenoted</b> — an audio notetaking mobile
                            application — is ideated.
                        </div>
                    </Paragraph>
                </Section>
                <SectionDivider/>
                <Section>
                    <Heading
                    style={{textTransform: "lowercase"}}>
                        defining the solution. ⭐
                    </Heading>
                    <Paragraph>
                        <h5 className="subheading">1. user flow</h5>
                        <div className="paragraph">
                            The main functionalities of Voicenoted are listen, write, discover, 
                            and organize. The user would listen to a podcast episode as they would 
                            with a typical podcast app. Once they hear a passage that they want to 
                            take notes on, they can record the timestamps create a customized note on 
                            an audio passage, called a voicenote. The voicenote is then organized into 
                            the user's personal library and available to be publically shared for 
                            others' discovery. 
                        </div>
                        <img 
                        src="https://i.ibb.co/6ykbdH5/userflow.png"
                        alt="user journey map"/>
                        <img
                        src="https://i.ibb.co/nMbMjGm/userflowsketch.png"
                        alt="user flow sketch"/>
                        <hr className="subdivider"/>
                    </Paragraph>
                    <Paragraph>
                        <h5 className="subheading">2. lofi wireframes</h5>
                        <img
                        src="https://i.ibb.co/vQ2HYjW/lofi1.png"
                        alt="low fidelity wireframe for listen + note functions"/>
                        <img
                        src="https://i.ibb.co/YDJJk6z/lofi2.png"
                        alt="low fidelity wireframe for organize + share functions"/>
                        <div className="paragraph">
                            Three tabs are created to capture these functionalities.
                            For each tab, a specific design question is asked:
                        </div>
                        <div className="quote" >
                            How can we integrate the notetaking component into a part of the podcast listening experience in an intuitive way?
                        </div>
                        <div 
                        className="paragraph"
                        style={{
                            fontSize: "0.9rem", 
                            paddingLeft: "10rem",
                            paddingTop: "0"
                        }}>
                            The <b>Listen Tab</b> allows the user to listen to podcast episodes and write voicenotes.
                            Since audio-based media is excellent for learning while multitasking, users will mostly likely 
                            be engaging in other activities. As such, we wanted to ensure that the notetaking experience is 
                            as conveneint as possible by ensuring that it could be done within a few clicks.
                            We imagined 2 scenarios in which the user will be creating a voicenote. Depending on their situation, 
                            one could either create detailed notes immediately, or simply mark the timestamp and stash the voicenote 
                            into draft for later edit (ex. after they finish listening to the entire episode). With the transcribed 
                            audio clip, users can add text to an existing page of notes or create a new page to start taking notes.
                            Audio transcript will be automatically transcribed with the podcast name, episode, and timestamp 
                            displaying underneath. However, if there exists an error in the generated transcript, user could edit it.
                        </div>
                        <div className="quote" >
                            How can we organize previous voicenotes so that users can access them with ease?
                        </div>
                        <div 
                        className="paragraph"
                        style={{
                            fontSize: "0.9rem", 
                            paddingLeft: "15rem",
                            paddingTop: "0"
                        }}>
                            All voicenotes are organized in a <b>Library tab</b>. Initially created voicenotes are 
                            automatically added to a folder for the podcast ep or a drafts area, user can move 
                            them into other places later on. We considered that two of the most helpful ways to 
                            organize the voicenotes are by chronology, and according to the episode it cites from. 
                            Users can automatically load all the audio clips from a podcast episode into one document. 
                            Other than that, one can also create customized albums to organize their voicenotes in
                            the way they desire.
                        </div>
                        <div className="quote" >
                            How can we help the users discover other contents that might be meaningful to them?
                        </div>
                        <div 
                        className="paragraph"
                        style={{
                            fontSize: "0.9rem", 
                            paddingLeft: "25rem",
                            paddingTop: "0"
                        }}>
                            We imagined that community-based learning can be facilitated if a user can make a voicenote 
                            public and the browse through other people's notes. For the <b>Explore Tab</b>, user can discover 
                            new episodes to listen to as well as discover voicenotes created by others. It also helps to 
                            include a frequency map to show which part of the podcast is mostly frequently noted by other 
                            users, so that one can jump to the most important sections of the episode. The voicenotes are 
                            sorted by popularity, and a user can easily bookmark a note they found interesting.
                        </div>
                        <hr className="subdivider"/>
                    </Paragraph>
                    <Paragraph>
                        <h5 className="subheading">3. visual branding</h5>
                        <div className="paragraph"> 
                            Having defined the lofi views, it is time to decide on the visual elements.
                        </div>
                        <div className="paragraph"> 
                            From the external inspirations gathered, we noticed that most color palette of these podcast apps 
                            fall on the dark or light end of the spectrum. For our application, we decided to incorporate lighter 
                            tones to combine of a sophisticated interface and soothing reading + noteteaking experience. For instance,
                            a warm beige as the background colour and a forest green for the primary accent deliver a refreshing and 
                            composed visual effect.
                        </div>
                        <div className="paragraph">
                            Nunito is chosen as the Logomark font for its round terminals. From there, we also designed our app icon,
                            which mimicked the shape of audio waves.
                        </div>
                        <img
                        src="https://i.ibb.co/LphDrRw/stylebrainstorm.png"
                        alt="style brainstorm"/>
                        <img
                        src="https://i.ibb.co/DD6xNmT/styleguide.png"
                        alt="style guide"/>
                        <hr className="subdivider"/>
                    </Paragraph>
                    <Paragraph>
                        <h5 className="subheading">4. hifi wireframes</h5>
                        <div className="paragraph"> 
                            From here, we are able to flesh out our high-fidelity wireframes.
                        </div>
                        <img
                        src="https://i.ibb.co/G2t5csw/listentab.png"
                        alt="listen tab wireframe"/>
                        <img
                        src="https://i.ibb.co/0QcxvT4/librarytab.png"
                        alt="library tab wireframe"/>
                        <img
                        src="https://i.ibb.co/5M1wtJX/exploretab.png"
                        alt="explore tab wireframe"/>
                        <div className="paragraph">
                            After designing a thorough <a href="https://www.figma.com/proto/Vj2irgZW3INsWEC2f2kv2s/voicenoted?node-id=22%3A4859&scaling=contain&page-id=17%3A697&starting-point-node-id=22%3A4859&show-proto-sidebar=1">prototype
                            </a> of the app, we managed to complete all our core functionalities using 
                            <b> React, Node.JS, Express.JS</b>, and <b>Google Cloud Firebase</b>.
                            The final <a href="https://www.voicenotedvotednoice.tech/">demo</a> can be viewed here.
                        </div>
                    </Paragraph>
                </Section>
                <SectionDivider/>
                <Section>
                    <Heading
                    style={{textTransform: "lowercase"}}>
                        future steps & reflection. ⭐
                    </Heading>
                    <Paragraph>
                        <div className="paragraph">
                            We worked as a team for the first time this weekend! We’re happy that we were able to 
                            delegate the work according to our different strengths and build a project over such a 
                            short period of time.
                        </div>
                        <div className="paragraph">
                            If given more time, we hope to conduct additional user research to streamline the voicenote
                            creation, editing, and sharing functionalities. Laptops and desktops are popular note-taking 
                            devices, so we also want to refine our desktop app. Additionally, we want expand our potential 
                            use cases beyond podcasts and audiobooks, such as lectures and videos. Lastly, we also want to 
                            look into potential ways to integrate voicenoted into other podcast and audiobook platforms, 
                            such as Apple Podcasts, Spotify, and Audible.  ✨
                        </div>
                        <div className="quote">
                            Thank you for reading!
                        </div>
                    </Paragraph>
                </Section>
                </Wrapper>
    )
}

export default function VoicenotedPost() {
    return (
        <PortfolioBox gifBackground={false}>
            <VoicenotedPostContent/>
        </PortfolioBox>
    )
}