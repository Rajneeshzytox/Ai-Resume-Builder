import ResumeSamples from '../components/ResumeSamples.jsx'
import ResumeInput from '../components/ResumeInputs.jsx';
import { useState } from 'react';

export default function ResumeBuilder() {
    const [resumeData, setResumeData] = useState({
      personalData: {
        username: 'name',
        role: 'role',
        email: 'email',
        phone: 'phone',
        website: 'website',
      },
      summary: 'summary',
      experience:[
        {
          title: 'title',
          date: 'date', 
          disc: 'disc', 
        },
        {
          title: 'title',
          date: 'date', 
          disc: 'disc', 
        },
        {
          title: 'title',
          date: 'date', 
          disc: 'disc', 
        },
      ],
      project: [
        {
          title: 'title',
          sub: 'sub',
          disc: 'disc',
          skills: [],
        },
      ],
      education: [
        {
          title: 'title',
          date: 'date',
          disc: 'disc',
        },
      ],
      skills: ['skill 1', 'skill 2',],
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
    <p className='px-2 py-1 bg-warning text-warning-content'>
        WE forgot to ask our developer to add a good layout, so we are sorry for that...
        </p> 
    <section id="resume-builder" className="min-h-screen flex flex-col-reverse md:flex-row">
        <ResumeSamples data={resumeData} />
        <ResumeInput 
          data={resumeData} 
          OnChange_personal={changePersonal}
          OnChange_summary={chanageSummary}
          OnChange_experience={changeExperience}
          OnChange_education={changeEducation}
        />
    </section>
      
  
  </>);
}

 {/* <input className='w-fit h-fit' type='text' placeholder='your name' name='username' onKeyUp={handlePersonalChange} />
<input className='w-fit h-fit' type='text' placeholder='your email' name='email' onKeyUp={handlePersonalChange} />
<input className='w-fit h-fit' type='text' placeholder='your role' name='role' onKeyUp={handlePersonalChange} />
<input className='w-fit h-fit' type='text' placeholder='your phone' name='phone' onKeyUp={handlePersonalChange} />  */}