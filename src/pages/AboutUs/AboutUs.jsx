import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (<section className="py-20 px-2">
        <Helmet>
            <title>About Us | Crowd Cube</title>
        </Helmet>

        <Title title="About Us" extraCSS="text-center uppercase sm:text-4xl mb-12" />

        <div className="relative max-w-screen-xl mx-auto min-h-72 text-desc dark:text-secondary text-base md:text-lg">

            <p>Welcome to CrowdCube - a transformative crowdfunding platform where communities come together to make a difference. We believe in the power of collective efforts and are committed to empower individuals and organizations to bring their ideas, projects, and causes to life.</p>

            <Title mb="mt-16" title="Our Mission" />

            <p className="md:text-xl font-semibold">At CrowdCube, our mission is simple yet powerful:</p>

            <ul className="list-disc list-inside mt-5">
                <li className="my-2">To provide an accessible, transparent, and secure platform where anyone can raise funds and contribute to initiatives that resonate with them.</li>

                <li className="my-2">We aim to bridge the gap between ideas and resources, making it easier for creators and donors to connect and collaborate.</li>

                <li className="my-2">To build a global community where everyone has the opportunity to bring their vision to life.</li>
            </ul>


            <Title mb="mt-16" title="What We Offer" />

            <p className="md:text-xl font-semibold">CrowdCube is a versatile platform designed to meet the diverse needs of our users. Here&apos;s what you can expect:</p>

            <ul className="list-disc list-inside mt-5">
                <li className="my-2"><strong>Browse Inspiring Campaigns:</strong> Discover a wide variety of campaigns across categories such as innovation, arts, education, health, social causes, and more.</li>

                <li className="my-2"><strong>Create Your Campaign:</strong> Have an idea or a cause close to your heart? CrowdCube enables you to create and customize your own campaigns with ease.</li>

                <li className="my-2"><strong>Donate with Confidence:</strong> Join thousands of contributors who trust CrowdCube to ensure their donations reach the right hands.</li>

                <li className="my-2"><strong>Manage Your Campaigns:</strong> As a creator, you have complete control over your campaigns.</li>
            </ul>

            <Title mb="mt-16" title="Why Choose CrowdCube?" />

            <p className="md:text-xl font-semibold">We understand that there are many crowdfunding platforms out there, so why should you choose CrowdCube? Here&apos;s what sets us apart:</p>

            <ul className="list-disc list-inside mt-5">
                <li className="my-2"><strong>User-Friendly Interface:</strong> From campaign creation to browsing and donating, our platform is designed with simplicity and efficiency in mind.</li>

                <li className="my-2"><strong>Comprehensive Features:</strong> CrowdCube offers a suite of features to enhance your crowdfunding experience, including detailed analytics, secure payment options, and campaign promotion tools.</li>

                <li className="my-2"><strong>Community Focused:</strong> By joining CrowdCube, you become part of a supportive network of creators and donors working together to make a difference.</li>

                <li className="my-2"><strong>Secure and Transparent:</strong> Transparency is at the core of everything we do, so you can trust that your contributions are making a real impact.</li>

                <li className="my-2"><strong>Global Reach:</strong> No matter where you are, CrowdCube connects you with a worldwide audience.</li>
            </ul>

            <Title mb="mt-16" title="How It Works" />

            <p className="md:text-xl font-semibold">Using CrowdCube is simple and intuitive. Here&apos;s a quick overview of how our platform works:</p>

            <ul className="list-disc list-inside mt-5">
                <li className="my-2"><strong>Sign Up:</strong> Whether you&apos;re here to create campaigns or contribute to them, registration is quick and easy.</li>

                <li className="my-2"><strong>Explore Campaigns:</strong> Use our filters and search options to find projects that align with your interests and values.</li>

                <li className="my-2"><strong>Start a Campaign:</strong> Launch your own campaign by sharing your story, setting goals, and uploading relevant visuals.</li>

                <li className="my-2"><strong>Contribute to Campaigns:</strong> Support the campaigns you love by donating securely through our platform.</li>

                <li className="my-2"><strong>Engage and Share:</strong> Share campaigns on social media and invite your friends and family to join the cause.</li>
            </ul>

            <Title mb="mt-16" title="Our Impact" />

            <p className="md:text-xl font-semibold">From funding groundbreaking innovations to supporting community-driven initiatives, the impact of our platform is far-reaching. Here are some highlights:</p>

            <ul className="list-disc list-inside mt-5 mb-16">
                <li className="my-2"><strong>Thousands of Successful Campaigns:</strong> From small-scale projects to large-scale initiatives, our platform has supported a wide array of campaigns.</li>

                <li className="my-2"><strong>Millions Raised:</strong> Thanks to the generosity of our community, millions of dollars have been raised to turn dreams into reality.</li>

                <li className="my-2"><strong>A Growing Community:</strong> With a global user base, CrowdCube continues to grow and foster connections between creators and supporters.</li>
            </ul>

            <p>Reach out to us through our <Link to="/contact" className="text-info font-semibold">contact page</Link>, and we&apos;ll get back to you as soon as possible.</p>

            <p>Together, let&apos;s turn ideas into impact and build a brighter future, one campaign at a time. Welcome to CrowdCube!</p>
        </div>
    </section>);
};

export default AboutUs;