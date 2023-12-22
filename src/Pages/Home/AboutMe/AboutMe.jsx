

const AboutMe = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 p-4 gap-10 md:gap-24 py-20 md:px-28 text-black">
            {/* section 1 */}
            <div>
                <h2 className="text-3xl mb-3">Hi there I am Niloy,</h2>
                <h4>
                    And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch
                    </h4>
            </div>
            {/* section 2 */}
            <div>
                <p className="text-blue-500 mb-3">2023 - PRESENT</p>
                <h3 className="font-bold">Font End Developer</h3>
                <p>Working happily on my own web projects</p>
            </div>
        </div>
    );
};

export default AboutMe;