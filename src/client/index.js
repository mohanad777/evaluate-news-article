import'./styles/main.scss';
import'./styles/style.scss';
import { handleForm } from "./js/formHandler";


const performAction = async (event) => {
event.preventDefault();
     const url=handleForm();

        //If the url is not correct   
       if(url===''){
        return;
       }
       //save the url in the server 
      const res=  await fetch('/saveData', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({url})
    });


  //Fetch tthe data from the server
    const res2 = await fetch('/all');
    const data = await res2.json();
//Udpate the forntend
    document.getElementById('text').innerHTML = 'Text: '+data.sentence_list[0].text;
    document.getElementById("agreement").innerHTML = `Agreement: ${data.sentence_list[0].agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.sentence_list[0].subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.sentence_list[0].confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.sentence_list[0].irony}`;
    document.getElementById("score_tag").innerHTML = `Score tag: ${data.sentence_list[0].score_tag}`;

    console.log("done");


    
}
  
document.getElementById('submit').addEventListener('click', performAction);

// TODO: include your scss file here

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */


/**
 * 
     await fetch('/saveData', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ temp, feeling, newDate })
    });
 */