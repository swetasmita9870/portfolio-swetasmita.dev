import React from 'react'
import DvHeader from '../component/DvHeader';
import animationJson from '../public/Lottie/animation.json'
import responsive from '../public/Lottie/responsive.json'
import javascript from '../public/Lottie/javascript.json'
import tailwind from '../public/Lottie/tailwind.json'
import react from '../public/Lottie/react.json'
import nextJs from '../public/Lottie/next.json'
import Bootstrap from '../public/Lottie/bootstrap.json'
import frontend from '../public/Lottie/frontend.json'
import storage from '../public/Lottie/storage.json'
import codeing from '../public/Lottie/coading.json'
import web from '../public/Lottie/web.json'
import LottieAnumation from '../component/LottieAnumation';

const Blog = () => {
  const blogData = [
    {
      "id": "Portfolio",
      "heading": "Portfolio Project Deep Drive",
      "subpoint1": "Unveiling the Vision:",
      "desc1": "Explore the conceptualization phase of the project, from identifying the initial problem to setting clear goals and objectives. Learn how a solid vision lays the foundation for a successful frontend project",
      "subpoint2": "Challenges and Solutions:",
      "desc2": "Navigate through the hurdles encountered during development. From cross-browser compatibility issues to responsive design challenges, discover the strategic solutions implemented to ensure a seamless user experience.",
      "subpoint3": "Technology Integration Showcase:",
      "desc3": "Highlight the seamless integration of HTML, CSS, JavaScript, React, Redux, and Next.js. Each technology plays a crucial role in the project's success, with practical insights into their utilization and synergy.",
      "animation": animationJson,
      "size": 400
    },
    {
      "id": "Responsive",
      "heading": "Responsive Design Best Practices:",
      "subpoint1": "Understanding Viewports and Breakpoints:",
      "desc1": "Delve into the intricacies of responsive design by understanding viewports and strategically selecting breakpoints. Learn how to create fluid layouts that adapt seamlessly to various screen sizes, from mobile devices to large desktop screens.",
      "subpoint2": "Media Queries Mastery:",
      "desc2": " Uncover the power of media queries in achieving responsive designs. Explore practical examples of how media queries can be utilized to apply specific styles based on the device characteristics, ensuring a visually appealing experience for all users.",
      "subpoint3": "Mobile-First Approach:",
      "desc3": "Embrace the mobile-first design philosophy. Understand the benefits of starting with a mobile-centric approach and gradually enhancing the user interface for larger screens, optimizing performance and user experience.",
      "animation": responsive,
      "size": 400
    },
    {
      "id": "JavaScript",
      "heading": "JavaScript Tips and Tricks:",
      "subpoint1": "ES6 Feature Showcase:",
      "desc1": "Explore the advanced features of ECMAScript 2015 (ES6) that enhance the readability and efficiency of your JavaScript code. From arrow functions to destructuring, unlock the potential of these modern language features.",
      "subpoint2": "Effective Use of Functions: ",
      "desc2": "Dive into the art of crafting functions that are not only functional but also maintainable. Discover best practices for writing reusable functions, handling scope, and optimizing for performance.",
      "subpoint3": "Error Handling Strategies: ",
      "desc3": "Learn how to implement robust error-handling mechanisms. From try-catch blocks to utilizing custom error objects, understand how to gracefully handle errors and improve the overall stability of your frontend applications.",
      "animation": javascript,
      "size": 400
    },
    {
      "id": "Tailwind",
      "heading": "Mastering Tailwind CSS:",
      "subpoint1": "Customization Deep Dive:",
      "desc1": "Explore the world of Tailwind CSS customization. From adjusting default color schemes to creating custom utility classes, understand how to tailor Tailwind to match your project's unique design requirements.",
      "subpoint2": "Utility Classes Unleashed:",
      "desc2": "Delve into the power of utility-first styling. Showcase practical examples of how utility classes can expedite your styling process, providing a concise and expressive way to design user interfaces.",
      "subpoint3": "Real-world Styling Scenarios:",
      "desc3": "Apply Tailwind CSS to real-world styling scenarios. From card components to navigation bars, witness the versatility of Tailwind in action as it simplifies complex styling challenges.",
      "animation": tailwind,
      "size": 400
    },
    {
      "id": "React",
      "heading": "Building Scalable React Applications:",
      "subpoint1": "Component Architecture Strategies:",
      "desc1": "Deepen your understanding of scalable component architecture. Learn how to structure React components in a modular and scalable way, ensuring maintainability as your project grows.",
      "subpoint2": "Redux State Management Excellence: ",
      "desc2": "Master the art of state management with Redux. Explore best practices for organizing your Redux store, handling asynchronous actions, and ensuring a predictable state flow throughout your React application.",
      "subpoint3": "Performance Optimization Techniques:",
      "desc3": "Uncover strategies for optimizing the performance of your React applications. From code splitting to lazy loading, implement techniques that enhance the user experience by reducing load times and resource consumption.",
      "animation": react,
      "size": 400
    },
    {
      "id": "NextJs",
      "heading": "Next.js and Server-Side Rendering:",
      "subpoint1": "SEO Benefits of Server-Side Rendering:",
      "desc1": "Understand how server-side rendering (SSR) enhances search engine optimization (SEO). Explore the technical aspects of SSR in Next.js and its impact on improving the discoverability of your frontend applications.",
      "subpoint2": "Simplified Routing:",
      "desc2": "Experience the simplicity of routing in Next.js. Discover how the framework streamlines the navigation process, making it intuitive for developers to create dynamic and SEO-friendly routes within their React applications.",
      "subpoint3": "Optimizing Development Workflows:",
      "desc3": "Explore how Next.js optimizes development workflows. From automatic code splitting to serverless deployments, witness how Next.js simplifies the development process, allowing for faster iterations and efficient collaboration.",
      "animation": nextJs,
      "size": 400
    },
    {
      "id": "BootstrapTailwind",
      "heading": "Bootstrap vs. Tailwind CSS: A Comparison:",
      "subpoint1": "Feature Comparison:",
      "desc1": "Conduct a comprehensive feature comparison between Bootstrap and Tailwind CSS. Explore the grid systems, styling approaches, and component libraries offered by each framework to help you make informed decisions for your projects.",
      "subpoint2": "Customization and Theming:",
      "desc2": "Dive into the customization and theming capabilities of Bootstrap and Tailwind CSS. Understand how easily each framework allows you to adapt its default styles to match your project's unique design requirements.",
      "subpoint3": "Pros and Cons Analysis:",
      "desc3": "Perform a detailed analysis of the pros and cons of using Bootstrap and Tailwind CSS. Consider factors such as ease of use, flexibility, and community support to determine which framework aligns better with your development workflow.",
      "animation": Bootstrap,
      "size": 400
    },
    {
      "id": "PersonalBrand",
      "heading": "Creating a Personal Brand as a Frontend Developer:",
      "subpoint1": "Portfolio Showcase:",
      "desc1": "Highlight the importance of a well-crafted portfolio in establishing your personal brand. Showcase your best projects, provide case studies, and demonstrate your skills to make a lasting impression on potential employers and clients.",
      "subpoint2": "Social Media Presence:",
      "desc2": "Explore strategies for building a strong social media presence as a frontend developer. Discuss platforms such as LinkedIn, Twitter, and GitHub, and share tips on engaging with the developer community to enhance your visibility.",
      "subpoint3": "Contributing to the Community:",
      "desc3": "Discuss the significance of contributing to the frontend development community. Whether it's through open-source contributions, blog posts, or mentoring, active participation can help you establish credibility and expand your network.",
      "animation": frontend,
      "size": 400
    },
    {
      "id": "ReactAnimation",
      "heading": "Enhancing User Interfaces with Animation in React:",
      "subpoint1": "Choosing the Right Animation Library:",
      "desc1": "Guide developers in choosing the right animation library for React projects. Compare popular choices such as React Spring and Framer Motion, and provide insights into their strengths and use cases.",
      "subpoint2": "Incorporating Animation Components:",
      "desc2": "Demonstrate how to incorporate animation components into React applications. Use practical examples to showcase how animations can enhance user interactions, create smooth transitions, and contribute to a delightful user experience.",
      "subpoint3": "Optimizing Performance:",
      "desc3": "Discuss strategies for optimizing the performance of animations in React. Address common challenges such as jank and layout thrashing, and provide tips on achieving buttery-smooth animations without compromising performance.",
      "animation": animationJson,
      "size": 400
    },
    {
      "id": "ReduxOptimization",
      "heading": "Optimizing Redux for Large-Scale Applications:",
      "subpoint1": "Selective Data Fetching:",
      "desc1": "Explore strategies for selectively fetching data in large-scale Redux applications. Discuss techniques such as lazy loading and on-demand fetching to minimize unnecessary data transfer and enhance application performance.",
      "subpoint2": "Data Normalization Techniques:",
      "desc2": "Dive into data normalization techniques to manage complex state structures in Redux. Understand the benefits of normalizing data, preventing redundant storage, and ensuring a consistent and efficient state management approach.",
      "subpoint3": "Efficient State Management:",
      "desc3": "Provide insights into efficient state management practices with Redux. Discuss concepts like state immutability, reselect for memoized selectors, and middleware optimization to maintain a scalable and maintainable codebase.",
      "animation": storage,
      "size": 400
    },
    {
      "id": "WebAccessibility",
      "heading": "Web Accessibility Best Practices:",
      "subpoint1": "Semantic HTML and ARIA Roles:",
      "desc1": "Emphasize the importance of semantic HTML and ARIA roles in creating accessible web interfaces. Discuss how proper document structure and role attribution contribute to a more inclusive and user-friendly experience.",
      "subpoint2": "Keyboard Navigation and Focus Management:",
      "desc2": "Guide developers on implementing keyboard navigation and focus management in web applications. Share best practices for ensuring that all interactive elements are accessible and usable through keyboard input.",
      "subpoint3": "Testing for Accessibility:",
      "desc3": "Highlight the significance of incorporating accessibility testing into the development workflow. Discuss tools and methodologies for testing web applications, and stress the role of developers in fostering a culture of accessibility.",
      "animation": web,
      "size": 400
    },
    {
      "id": "CodingChallenges",
      "heading": "Coding Challenges and Solutions:",
      "subpoint1": "Real-World Coding Challenges:",
      "desc1": "Present real-world coding challenges encountered during frontend development projects. Discuss the context, complexity, and the thought process involved in finding effective and elegant solutions to these challenges.",
      "subpoint2": "Code Refactoring Techniques:",
      "desc2": "Explore code refactoring as a solution to common challenges. Discuss techniques for improving code readability, maintainability, and performance while preserving or enhancing the functionality of the original implementation.",
      "subpoint3": "Community Engagement and Collaboration:",
      "desc3": "Encourage community engagement through coding challenges. Share experiences of collaborating with other developers, hosting coding challenges, and participating in code reviews to foster a culture of continuous learning and improvement.",
      "animation": codeing,
      "size": 400
    }

  ]
  return (
    <>
      <DvHeader />
      <div className='col-12 d-flex flex-wrap justify-content-around'>
        <div className='col-9 d-flex flex-wrap justify-content-around'>
          {blogData.map((data, i) => {
            return (
              <>
                <div key={i} className='blogtile col-12 radius10 my-3 p-3 d-flex align-items-center justify-content-center' style={{ background: "var( --l_section_bg)" }}>
                  {i % 2 === 0 && <div className='col-6'> <LottieAnumation width={data.size} height={data.size} animationName={data.animation} /></div>}
                  <div>
                <p className='fntSz25 font-wight-500  '>{data.heading}</p>
                <p className='fntSz15'><span className='fntSz18'>{data.subpoint1}</span> {data.desc1}</p>
                <p className='fntS15'><span className='fntSz18'>{data.subpoint2}</span> {data.desc2}</p>
                <p className='fntSz15'><span className='fntSz18'>{data.subpoint3}</span> {data.desc3}</p>
              </div>
                  {i % 2 !== 0 && <div className='col-6'><LottieAnumation width={data.size} height={data.size} animationName={data.animation} /></div>}
                </div>
              </>
            )
          })}
        </div>
        <style jsx>{`
        .blogtile{
            box-shadow: inset 0 0 10px #e9b91140;
        }
        `}</style>
      </div>
    </>
  )
}

export default Blog