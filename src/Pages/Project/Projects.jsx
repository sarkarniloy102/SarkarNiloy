import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FontEnd from './FontEnd/FontEnd';
import Responsive from './Responsive/Responsive';
import WithBackend from './WithBackend/WithBackend';
const Projects = () => {
    return (
        <div className="pt-32 pb-5 px-10 lg:px-28">
            <div>
                <div >

                    <Tabs>
                        <TabList className="flex flex-col lg:flex-row mb-6 justify-between text-black">
                            <h2 className="text-4xl text-center lg:text-end  font-bold text-black">My Projects</h2>
                            <div className='flex mb-6  text-black'>
                                <Tab className="border-b-2 focus:text-violet-500 py-2 px-4 cursor-pointer">html+css</Tab>
                                <Tab className="border-b-2 focus:text-violet-500 py-2 px-4 cursor-pointer">Font End</Tab>
                                <Tab className="border-b-2 focus:text-violet-500 py-2 px-4 cursor-pointer">Font+Back end</Tab>
                            </div>

                        </TabList>

                        <TabPanel>
                            <FontEnd></FontEnd>
                        </TabPanel>
                        <TabPanel>
                            <Responsive></Responsive>
                        </TabPanel>
                        <TabPanel>
                            <WithBackend></WithBackend>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        </div>
    );
};

export default Projects;