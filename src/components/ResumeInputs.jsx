const inputHeading = `text-xl font-semibold collapse-title`;
const collapse = `collapse collapse-arrow bg-base-200 mb-4`;
const collapseBody = `collapse-content lg:grid lg:grid-cols-2 gap-4 px-4`;
const inputStyle = `input my-2 w-fill w-full max-w-xs mx-2 py-4  input-bordered`

export default function ResumeInput({
  data,
  OnChange_personal,
  OnChange_summary,
  OnChange_experience,
  OnChange_education,
  OnChange_project,
  OnChange_skill,
}) {
  return (
    <section className="px-4 w-full h-fit bg-base-100 lg:sticky lg:right-0 lg:top-0">
      <div className={`${collapse}`}>
        <input type="radio" name="resume-input-group" />
        <div className={inputHeading}>Personal Data</div>
        <div className={`${collapseBody}`}>

          <input
            type="text"
            name="username"
            value={data.personalData.username}
            onChange={OnChange_personal}
            placeholder="Name"
            className={`${inputStyle}`}
          />
        <input
          type="text"
          name="role"
          value={data.personalData.role}
          onChange={OnChange_personal}
          placeholder="role"
          className={`${inputStyle}`}
        />
       
        <input
          type="email"
          name="email"
          value={data.personalData.email}
          onChange={OnChange_personal}
          placeholder="email"
          className={`${inputStyle}`}
        />
       
        <input
          type="phone"
          name="phone"
          value={data.personalData.phone}
          onChange={OnChange_personal}
          placeholder="phone"
          className={`${inputStyle}`}
        />
        
        <input
          type="text"
          name="website"
          value={data.personalData.website}
          onChange={OnChange_personal}
          placeholder="website"
          className={`${inputStyle}`}
        />
        </div>
      </div>

      {/* Summary */}
      <div className={`${collapse}`}>
      <input type="radio" name="resume-input-group" />
        <div className={inputHeading}>Summary</div>
        <div className={`${collapseBody}`}>
        <textarea className={`${inputStyle} min-h-24`} value={data.summary} onChange={OnChange_summary} rows="4"/>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className={`${collapse}`}>
      <input type="radio" name="resume-input-group" />
        <div className={inputHeading}>Experience</div>
      <div className={`${collapseBody}`}>
        {/* map func for experience array*/}
        {
          data.experience.map((exp, index) => (
            <div key={index} className="my-2">
                    <h4 className="text-md">Experince {index+1}</h4>
                    <input type="text" className={`${inputStyle}`} value={exp.title} name="title" onChange={(e) => OnChange_experience(index, 'title', e.target.value)} />
                    <input type="text" className={`${inputStyle}`} value={exp.date} name="date" onChange={(e) => OnChange_experience(index, 'date', e.target.value)} />
                    <textarea className={`${inputStyle} min-h-24`} value={exp.disc} name="disc" onChange={(e) => OnChange_experience(index, 'disc', e.target.value)} />
                </div>
            ))
          }
      </div>
      </div>


      {/* EDUCATION */}
      <div className={`${collapse}`}>
        <input type="radio" name="resume-input-group" />
        <div className={inputHeading}>EDUCATION</div>
      <div className={`${collapseBody}`}>
        {/* map func for experience array*/}
        {
            data.education.map((edu, index) => (
                <div key={index} className="my-2">
                    <h4 className="text-md">Education {index+1}</h4>
                    <input type="text" className={`${inputStyle}`} value={edu.title} name="title" onChange={(e) => OnChange_education(index, 'title', e.target.value)} />
                    <input type="text" className={`${inputStyle}`} value={edu.date} name="date" onChange={(e) => OnChange_education(index, 'date', e.target.value)} />
                    <textarea className={`${inputStyle} min-h-24`} value={edu.disc} name="disc" onChange={(e) => OnChange_education(index, 'disc', e.target.value)} />
                </div>
            ))
        }
      </div>
      </div>
      
    {/* Project */}
    <div className={`${collapse}`}>
    <input type="radio" name="resume-input-group" />
      <div className={inputHeading}>Projects</div>
      <div className={`${collapseBody}`}>
      {
          data.project.map((proj, index) =>(
            <div key={index} className="my-2">
            <h4 className="text-md">Project {index+1}</h4>
            <input className={`${inputStyle}`} type="text" name="title" value={proj.title} placeholder="Project Title" onChange={(e)=>OnChange_project(index, 'title', e.target.value)} />
            <input className={`${inputStyle}`} type="text" name="sub" value={proj.sub} placeholder="Project Sub title" onChange={(e)=>OnChange_project(index, 'sub', e.target.value)} />
            <input className={`${inputStyle}`} type="text" name="disc" value={proj.disc} placeholder="Project discription" onChange={(e)=>OnChange_project(index, 'disc' ,e.target.value)} />
            </div>
          ))
        }
      </div>
    </div>

      
      <div className={`${collapse}`}>
        <div className={inputHeading}>Skills</div>
        <input type="radio" name="resume-input-group" />
        <div className={`${collapseBody}`}>
          {
            data.skill.map((skills ,index) => (
              <input  key={index} type="text" value={skills} className={`${inputStyle}`} onChange={(e)=> OnChange_skill(index, e.target.value)}></input>
            ))
          }
        </div>
      </div>

    </section>
  );
}

/*
    {
      personalData: {
        username: '',
        role: '',
        email: '',
        phone: '',
        website: '',
      },
      summary: '',
      experience:[
        {
          title: '',
          date: '', 
          disc: '', 
        }
      ],
      project: [
        {
          title: '',
          sub: '',
          disc: '',
          skills: [],
        }
      ],
      educatio: [
        {
          title: '',
          date: '',
          disc: '',
        }
      ],
      skill1: [],
    )
*/
