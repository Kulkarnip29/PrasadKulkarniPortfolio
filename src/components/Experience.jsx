const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-primary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <div className="py-6">
          <p className="text-2xl font-bold">Frontend Developer Intern </p>
          <p className="text-xl text-gray-300">
            GyamaTech (May 2023 - Oct 2023)
          </p>
          <ul className="list-disc ml-8 mt-4">
            <li className="text-lg">
              As a frontend developer intern at Gyamatech.com, I played a
              pivotal role in crafting responsive and visually appealing
              websites. Working closely with a team of experienced developers,
              designers, and project managers, I contributed to the creation of
              dynamic web experiences that seamlessly integrate user interface
              design with functionality.
            </li>
            <li className="text-lg">
              Key Responsibilities: Developed and maintained responsive websites
              using HTML, CSS, and JavaScript, ensuring compatibility across
              various browsers and devices. Collaborated with design and
              development teams to implement user interface designs,
              incorporating best practices for usability and user experience.
              Conducted thorough testing and debugging to optimize website
              performance and functionality. Assisted in the creation and
              implementation of web development strategies, contributing
              innovative ideas and solutions to enhance project outcomes.
              Participated in team meetings and project discussions, providing
              valuable insights and recommendations for improving frontend
              development processes.
            </li>
            {/* <li className="text-lg">
              
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
