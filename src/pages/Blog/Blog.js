import React from 'react';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { RiNumber1 } from 'react-icons/ri';
import { RiNumber2 } from 'react-icons/ri';
import { RiNumber3 } from 'react-icons/ri';
import { RiNumber4 } from 'react-icons/ri';
import useTitle from '../../CustomeHOOk/MakeDynamicTitle/UseTitle';

const Blog = () => {
    useTitle('Blog');
    return (
            <div className=" flex flex-col items-center max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 container p-6 mx-auto">
                <div className="flex flex-col items-center pb-4 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <RiQuestionnaireFill className='text-amber-400 text-3xl mr-4'></RiQuestionnaireFill>
                    <h1 className='text-3xl font-semibold'>Top Four Question & Answer of <span className='text-amber-400'>MernStack</span></h1>
                </div>
                <hr />
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="text-3xl inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-pink-50 sm:mr-10 shadow-md">
                        <AiOutlineFieldNumber></AiOutlineFieldNumber>
                        <RiNumber1></RiNumber1>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2 className='font-semibold text-xl'>What are the different ways to manage a state in a React application?</h2>
                        <p>There are four different way of stateproperly manage in React apps:
                        <strong>1. Local (UI) state -</strong> Local state is data we 2/2.manage in one or another component.
                        <strong>2. Global (UI) state -</strong> Global state is data we manage across multiple components.
                        <strong>3. Server state -</strong> Data that comes from an external server that must be integrated with our UI state. 
                        <strong>4. URL state -</strong> Data that exists on our URLs, including the pathname and query parameters.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="text-3xl inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-pink-50 sm:mr-10 shadow-md">
                    <AiOutlineFieldNumber></AiOutlineFieldNumber>
                        <RiNumber2></RiNumber2>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2 className='font-semibold text-xl'>How does prototypical inheritance work?</h2>
                        <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). <br />
                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="text-3xl inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-pink-50 sm:mr-10 shadow-md">
                    <AiOutlineFieldNumber></AiOutlineFieldNumber>
                        <RiNumber3></RiNumber3>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2 className='font-semibold text-xl'>What is a unit test? Why should we write unit tests?</h2>
                        <p>A unit test is a type of software test that focuses on components of a software product. The purpose is to ensure that each unit of software code works as expected. A unit can be a function, method, module, object, or other entity in an application’s source code. <br />
                        Unit tests usually consist of three phases: <br />1. Planning—developers consider which units in the code they need to test, and how to execute all relevant functionality of each unit to test it effectively. <br />
                        2. Test cases and scripts—developers write the unit test code and prepare the scripts to execute the code.<br />
                        3. Unit testing and results—finally, the unit test runs and developers can identify errors or issues in the code and fix them.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="text-3xl inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-pink-50 sm:mr-10 shadow-md">
                    <AiOutlineFieldNumber></AiOutlineFieldNumber>
                        <RiNumber4></RiNumber4>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2 className='font-semibold text-xl'>React vs. Angular vs. Vue?</h2><br />
                        <p><strong>React</strong> is considered a UI library. They define themselves as: <br/> “A JavaScript library for building user interfaces” <br/> Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.</p><br />
                        <p><strong>Angular</strong> is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as <br />“The modern web developer’s platform”<br/>It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.</p>
                        <br />
                        <p><strong>Vue.js</strong> is, according to its site: <br /> “A progressive JavaScript framework” <br /> Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Blog;