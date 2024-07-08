const inputHeading = `text-xl font-semibold`;



export default function ResumeInput({
  data,
  OnChange_personal,
  OnChange_summary,
  OnChange_experience,
  OnChange_education,
}) {
  return (
    <section className="px-4 form flex flex-wrap *:flex *:flex-wrap *:gap-1">
      <div className="">
        <h3>Personal Data</h3>
        <input
          type="text"
          name="username"
          value={data.personalData.username}
          onChange={OnChange_personal}
          placeholder="Name"
          className="input ml-4 mb-4  bg-base-300"
        />
        <br />
        <input
          type="text"
          name="role"
          value={data.personalData.role}
          onChange={OnChange_personal}
          placeholder="role"
          className="mb-4 input ml-4 bg-base-300"
        />
        <br />
        <input
          type="email"
          name="email"
          value={data.personalData.email}
          onChange={OnChange_personal}
          placeholder="email"
          className="mb-4 input ml-4 bg-base-300"
        />
        <br />
        <input
          type="phone"
          name="phone"
          value={data.personalData.phone}
          onChange={OnChange_personal}
          placeholder="phone"
          className="mb-4 input ml-4 bg-base-300"
        />
        <br />
        <input
          type="text"
          name="website"
          value={data.personalData.website}
          onChange={OnChange_personal}
          placeholder="website"
          className="mb-4 input ml-4 bg-base-300"
        />
        <br />
      </div>

      {/* EXPERIENCE */}
      <div >
        <h3 className={inputHeading}>Experience</h3>
      <div className="flex flex-wrap gap-4">
        {/* map func for experience array*/}
        {
            data.experience.map((exp, index) => (
                <div key={index} className=" flex flex-col gap-2">
                    <h4 className="text-md">Experince {index}</h4>
                    <input type="text" className="input bg-base-300 ml-4" value={exp.title} name="title" onChange={(e) => OnChange_experience(index, 'title', e.target.value)} />
                    <input type="text" className="input bg-base-300 ml-4" value={exp.date} name="date" onChange={(e) => OnChange_experience(index, 'date', e.target.value)} />
                    <textarea className="input bg-base-300 ml-4" value={exp.disc} name="disc" onChange={(e) => OnChange_experience(index, 'disc', e.target.value)} />
                </div>
            ))
        }
      </div>
      </div>


      {/* EDUCATION */}
      <div >
        <h3>EDUCATION</h3>
      <div className="flex flex-wrap gap-4">
        {/* map func for experience array*/}
        {
            data.education.map((edu, index) => (
                <div key={index} className=" flex flex-col">
                    <input type="text" className="input bg-base-300 ml-4" value={edu.title} name="title" onChange={(e) => OnChange_education(index, 'title', e.target.value)} />
                    <input type="text" className="input bg-base-300 ml-4" value={edu.date} name="date" onChange={(e) => OnChange_education(index, 'date', e.target.value)} />
                    <textarea className="input bg-base-300 ml-4" value={edu.disc} name="disc" onChange={(e) => OnChange_education(index, 'disc', e.target.value)} />
                </div>
            ))
        }
      </div>
      </div>

      <div className="w-full">
        <h3>Summary</h3>
        <textarea className="textarea ml-4 bg-base-300 mx-auto w-[90%]" value={data.summary} onChange={OnChange_summary}/>
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
