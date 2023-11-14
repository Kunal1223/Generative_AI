import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-img">
                    <img src="./images/cute.png" alt="" className='aimg' />
                </div>
                <div className="about-content">
                    <h1>About AISolutionCraft</h1>
                    <h5>Welcome to AISolutionCraft, where innovation meets simplicity. Our mission is to empower individuals by providing instant and tailored solutions through the magic of Generative AI.</h5>
                    <NavLink to='/login' className='home-btn'>Become a Member</NavLink>

                </div>
            </div>

            <div className="about-team">
                <h1>Who We Are</h1>
                <hr className="about-hr" />
                <h5>At AISolutionCraft, we are a team of passionate innovators dedicated to simplifying life's complexities. Our journey began with a simple idea: harness the power of Generative AI to create a platform that transforms user inputs into comprehensive and personalized solutions.The seeds of AISolutionCraft were sown when our founders, driven by a shared vision, recognized the untapped potential of Generative AI. We saw an opportunity to revolutionize the way people interact with technology and, more importantly, how technology could serve them.</h5>
            </div>

            <div className="about-team1">
                <h1>What We Offer</h1>
                <hr className="about-hr" />
                <h1 className='about-small'>1. Recipe Generation Made Effortless</h1>
                <h5>Tired of searching through endless recipes? Say goodbye to complicated cooking instructions. With our Recipe Generator, just input your ingredients, and we'll craft a delightful recipe for you. Plus, we'll suggest convenient buy links from leading e-commerce platforms, making your culinary adventure a breeze.</h5>

                <h3>Recipe Generation Made Effortless</h3>
                <h5>Tired of the culinary guessing game? At AISolutionCraft, we've revolutionized the way you approach cooking. Our Recipe Generator is your culinary companion, making the journey from ingredients to a delightful dish as easy as 1-2-3.No more scrolling through endless recipe pages or flipping through cookbooks. With our Recipe Generator, bid farewell to the overwhelming world of recipe hunting. We've streamlined the process to bring you what you need – a personalized recipe that suits your ingredients and tastes.</h5>

                <h3>Say Goodbye to Complicated Cooking</h3>
                <h5>Complicated cooking instructions, be gone! Our Recipe Generator understands that your time is precious. Simply input the ingredients you have, and let our Generative AI work its magic. The result? A clear, step-by-step recipe tailored to your preferences, skill level, and available ingredients.But we don't stop there. Enhance your culinary adventure with ease. Our platform goes beyond recipes; we provide convenient buy links from leading e-commerce platforms. Need that special spice or a kitchen gadget? We've got you covered, making your cooking experience truly seamless.</h5>

                {/* ########## for the low ##################################### */}

                <h1 className='about-low'>2. Legal Solutions at Your Fingertips</h1>
                <h5>Navigating legal challenges just got simpler. Introducing AISolutionCraft's Legal Solutions page – your compass through the intricate terrain of legal matters. Say goodbye to legal complexities, and hello to clear, actionable advice tailored to your specific concerns.Legal issues can be overwhelming, often leaving individuals feeling lost in a sea of jargon and complexity. Recognizing the need for accessible legal guidance, we developed the Legal Solutions page to empower you with the knowledge you need.</h5>

                <h3>Your Legal Companion</h3>
                <h5>Consider our Legal Solutions page your virtual legal companion. We've harnessed the power of Generative AI to demystify the legal landscape. No need for extensive legal background or terminology; just type in your concerns, and our AI will do the rest.Watch as our Generative AI processes your input and generates clear, comprehensible advice. No more deciphering legalese – just straightforward solutions.</h5>

                <h3>Empowering You</h3>
                <h5>Empowerment is at the heart of what we do. We want you to navigate legal matters with confidence and clarity. AISolutionCraft's Legal Solutions page is your key to unlocking the complexities of the legal world.</h5>
            </div>

            <div className="about-team">
                <h1>Our Vision</h1>
                <hr className="about-hr" />
                <h5>At AISolutionCraft, our vision extends beyond the horizon of today; it's a glimpse into a future where complexity is met with simplicity, efficiency, and innovation. We're on a mission to shape a world where technology isn't just a tool but a transformative force that enhances lives and simplifies everyday challenges.In a world that often seems tangled in intricate problems, we envision a paradigm shift. Our vision is rooted in the belief that complex challenges can be met with elegantly simple solutions. Whether it's crafting a recipe or providing legal advice, we strive to untangle the complexities, making the seemingly difficult, effortless.</h5>
            </div>

            <img src="./images/images.png" alt="" className='rotate-img'/>
        </>
    )
}

export default About