const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetch = require("node-fetch");

(async () => {
    const response = await fetch('https://www.udemy.com/course/cognitive-behavioural-therapy-online-course-cbt-practitioner-course/');
    const text = await response.text();
    const dom = await new JSDOM(text);
    data = (dom.window.document.querySelectorAll("li"));
    sections = dom.window.document.querySelectorAll(".section--section-title--8blTh")
    timing = dom.window.document.querySelectorAll(".section--section-content--9kwnY")
    

    sections.forEach((item,index) => {
        console.log(index,item.textContent)
    
    })

    timing.forEach((item,index) => {

        console.log(index,item.textContent)
    
    })

  })()