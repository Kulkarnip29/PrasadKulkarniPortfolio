const Education = () => {
  return (
    <div name="education" className="w-full h-screen bg-primary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
        
        <div className="py-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Master Of Computer Application(MCA)</h3>
            <p className="text-xl text-gray-300">Swami Ramanand Teerth Marathwada University</p>
            <p className="text-lg"> 2024 </p> <i>CGPA: <b>7.25</b></i>
            <p className="mt-2">
            College Name: Institute Of Computer Education(ICE), Latur
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold">Bachlores in Computer Science (Bsc Computer Science)</h3>
            <p className="text-xl text-gray-300">Swami Ramanand Teerth Marathwada University</p>
            <p className="text-lg"> 2022 </p> <i>CGPA: <b>9.11</b></i>
            <p className="mt-2">
            College Name: College Of Computer Science And Information Technology(COCSIT), Latur
            </p>
          </div>
          
          {/* Add more education entries as needed */}
        </div>
      </div>
    </div>
  );
};

export default Education;