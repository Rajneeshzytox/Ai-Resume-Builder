export default function ResumeSamples({ data }) {
    console.log(data)
  return (
    <div
      className="bg-neutral min-h-screen h-screen p-4 flex justify-center text-sm"
      
    >
      <div className="bg-white shadow-lg rounded-sm w-full max-w-3xl aspect-[1/1.414] p-4">
        {/* top section of resume */}
        <header className="border-b pb-6 mb-4 text-xs">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                {data.personalData.username}
              </h1>
              <p className="text-gray-600">{data.personalData.role}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">{data.personalData.email}</p>
              <p className="text-gray-600">{data.personalData.phone}</p>
              <p className="text-gray-600">{data.personalData.website}</p>
            </div>
          </div>
        </header>

        <section className="mb-2">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-700">{data.summary}</p>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Experience</h2>
          <ul>
            {
              // EXPERIENCE
                data.experience.map((exp, index) => (
                <li key={index} className="mb-2">
                    <h3 className="text-md font-semibold text-gray-800">
                    {exp.title}
                    </h3>
                    <p className="text-gray-600">{exp.date}</p>
                    <p className="text-gray-600">{exp.disc}</p>
                </li>
                ))
            }
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Education</h2>
          <ul>
            {
                data.education.map((exp, index) => (
                <li key={index} className="mb-2">
                    <h3 className="text-md font-semibold text-gray-800">
                    {exp.title}
                    </h3>
                    <p className="text-gray-600">{exp.date}</p>
                    <p className="text-gray-600">{exp.disc}</p>
                </li>
                ))
            }
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Skills</h2>
          <ul className="flex flex-wrap">
            
            {
                data.skills.map((skill, key) => 
                    <li key={key} className="bg-gray-200 rounded-full px-2 py-1 m-1 text-gray-700">
                        {skill}
                    </li>
                )
            }
          </ul>
        </section>
      </div>
    </div>
  );
}
