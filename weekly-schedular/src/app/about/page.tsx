import Link from 'next/link';

export default function About(){
    return <>
      <div>
            <h1 className="font-bold text-center my-5 text-4xl text-white">About Us</h1>
            <p className="font text-justify mx-12 text-xl text-white">
            Welcome to The PlanPro Weekly Schedular, a platform inspired by the timeless wisdom of Stephen R. Covey's 7 Habits of Highly Effective People. 
            We believe that effective time management goes beyond checking off to-do lists—it&#39;s about living a life that reflects your values, achieves your goals, 
            and nurtures all aspects of your well-being. 
            Our mission is to help individuals and teams plan their weeks with purpose, focusing on what truly matters and finding balance amidst life&#39;s demands.
            </p>
            <h2 className="font-bold text-center my-5 text-2xl text-white">Why We Exist?</h2>
            <p className="font text-justify mx-12 text-xl text-white">
            In a world filled with distractions and demands, it's easy to lose sight of long-term goals while juggling daily tasks. 
            Our weekly scheduler is designed to bring clarity, balance, and effectiveness to your life by focusing on important but non-urgent priorities. 
            </p>
            <h2 className="font-bold text-center my-5 text-2xl text-white">What We Offer?</h2>
            <ul>
              <li className="font text-justify mx-12 text-xl text-white"><b>1. Role-Based Scheduling:</b> Align your weekly plans with your key roles in life, ensuring holistic growth and progress.</li>
              <li className="font text-justify mx-12 text-xl text-white"><b>2. Prioritization Tools:</b> Focus on what matters most, using Covey&#39;s principles to guide your time management.</li>
              <li className="font text-justify mx-12 text-xl text-white"><b>3. Flexibility and Simplicity:</b> Adapt your schedule as life unfolds, without losing sight of your bigger picture.</li>
              <li className="font text-justify mx-12 text-xl text-white"><b>4. Empowerment Through Planning:</b> Shift from reactive to proactive living, creating a meaningful and fulfilling life.</li>
            </ul>
            <h2 className="font-bold text-center my-5 text-2xl text-white">Our Inspiration</h2>
            <p className="font text-justify mx-12 text-xl text-white">
            Our platform is deeply rooted in the principle of &#34;Put First Things First&#34;—prioritizing important tasks that align with your values and goals. 
            By integrating Covey&#39;s proven framework, we offer a tool to help you stay organized, intentional, and balanced. 
            </p>
            <p className="font text-justify mx-12 text-xl text-white my-3">
            Join us in redefining how you approach your week. Let&#39;s build a life where your actions align with your purpose, one week at a time.
            </p>
            <Link
            href="/roles"
            >
            <div className="flex justify-center">
              <button type="button" className="my-4 text-white my-8 bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-bold text-center me-2 mb-2 transition-transform transform hover:scale-125 smooth">Get Started</button>
            </div>
            </Link>
          </div>
    </>
}