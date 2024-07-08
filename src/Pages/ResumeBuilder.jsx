import ResumeSamples from '../components/ResumeSamples.jsx'
import ResumeInput from '../components/ResumeInputs.jsx';
import { useState } from 'react';

export default function ResumeBuilder() {
    const [IsAlert, setIsAlert] = useState(true);
    const [resumeData, setResumeData] = useState({
      personalData: {
        username: 'Rajneeshzytox',
        role: 'Frontend web developer',
        email: 'kumarrajneesh.work@gmail.com',
        phone: '828282828282',
        website: 'rajneeshzytox.github.io/portfolio',
      },
      summary: 'Frontend Web Developer',
      experience:[
        {
          title: 'Uable - Coding & Design Club Moderator',
          date: 'July 2021 - March 2022', 
          disc: 'Too tired to write now, checkout my linkedin /in/rajneeshzytox', 
        },
        
      ],
      project: [
        {
          title: 'Ai Rewriter',
          sub: 'Beginner Project',
          disc: 'I need to use my project, to write discription about itself',
         
        },
        {
          title: 'Full Stack Blog Magazine with Ai Article generator',
          sub: 'Html css js php mysql',
          disc: 'not completed yet, use mohit mohit@1234 or test test@1234 if any password needed',
         
        },
        {
          title: 'Many small webpages',
          sub: 'Html css js',
          disc: 'i will upload on github. checkout rajneeshzytox',
         
        },
       
      ],
      education: [
        {
          title: 'Bca 2nd year',
          date: 'July 9 2024',
          disc: 'no disc',
        },
      ],
      skill: ['Frontend',],
    })

    // functoi n to chanage personalData
    const changePersonal = (e) => {
      const { name, value } = e.target;
      // console.log(`${name}, ${value}`)
      setResumeData({ ...resumeData, personalData: { ...resumeData.personalData, [name]: value } });
    };
    
    // fun to change summary
    const chanageSummary = (e) => {
      const value = e.target.value;
      setResumeData({...resumeData, summary: value})
    }

    // change experience function
    const changeExperience =  (index, field, value) => {
      const newExperience = [...resumeData.experience];
      newExperience[index][field] = value;
      setResumeData({ ...resumeData, experience: newExperience });
    };

    // change education function
    const changeEducation =  (index, field, value) => {
      const newEducation = [...resumeData.education];
      newEducation[index][field] = value;
      setResumeData({ ...resumeData, education: newEducation });
    };

    // change education function
    const changeProject =  (index, field, value) => {
      const newProject = [...resumeData.project];
      newProject[index][field] = value;
      setResumeData({ ...resumeData, project: newProject });
    };

    // change education function
    const changeSkill =  (index, value) => {
      const newskill = [...resumeData.skill]
      newskill[index] = value;
      console.log({...resumeData, newskill})
      setResumeData({...resumeData, skill: newskill})

    }


  return (<>
      <section className="hero bg-base-300 min-h-screen relative">
      <div className="hero-content text-center">
        {/* top breadcum */}
        <div className="absolute left-0 top-[10%] flex gap-4 items-center justify-between px-10">
            <span className="tooltip tooltip-bottom tooltip-primary" data-tip="go back">
                <a href="/" className="kbd kbd-md " >{'cd ..'}</a>
            </span>
            <span className=" px-4 py-1 text-sm rounded-btn"><span className="kbd kbd-sm rounded-sm bg-transparent">/</span> resume-builder</span>
        </div>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold bg-clip-text bg-gradient-to-r to-blue-400 from-primary text-transparent">Resume Sample</h1>
          <p className="py-6">
          This is not a official builder, but will give you a idea about the product
          </p>
          <a href="#resume-builder" className="tooltip tooltip-bottom tooltip-primary scroll-smooth" data-tip="Scroll Down"><i className="fa-solid fa-chevron-down animate-bounce"></i></a>
        </div>
      </div>
      
    </section>
{(IsAlert) ? 
    <div id='tempAlert-layoutMsg' className='flex justify-between items-center px-2 py-1 text-warning-content bg-warning '>
    <p className=''>
        WE forgot to ask our developer to add a good layout, so we are sorry for that... {IsAlert}
        </p>
        <a onClick={() => setIsAlert(!IsAlert)}>
        <i className="fa-solid fa-multiply cursor-pointer " ></i>
        </a>
      </div>
    : null
    
}
    
    <section id="resume-builder" className="min-h-screen flex flex-col-reverse md:flex-row">
        <ResumeSamples data={resumeData} />
        <ResumeInput 
          data={resumeData} 
          OnChange_personal={changePersonal}
          OnChange_summary={chanageSummary}
          OnChange_experience={changeExperience}
          OnChange_education={changeEducation}
          OnChange_project={changeProject}
          OnChange_skill={changeSkill}
        />
    </section>
      
  
  </>);
}

 {/* <input className='w-fit h-fit' type='text' placeholder='your name' name='username' onKeyUp={handlePersonalChange} />
<input className='w-fit h-fit' type='text' placeholder='your email' name='email' onKeyUp={handlePersonalChange} />
<input className='w-fit h-fit' type='text' placeholder='your role' name='role' onKeyUp={handlePersonalChange} />
<input className='w-fit h-fit' type='text' placeholder='your phone' name='phone' onKeyUp={handlePersonalChange} />  */}