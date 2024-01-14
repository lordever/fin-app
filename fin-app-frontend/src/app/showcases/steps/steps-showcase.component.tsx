import React from 'react';
import {Divider, Steps} from "antd";

const StepsShowcase = () => {
    const description = 'This is a description';

    return (
        <>
            <Divider>
                <h2>Steps showcases</h2>
            </Divider>

            <Steps
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description,
                    },
                    {
                        title: 'In Progress',
                        description,
                        subTitle: 'Left 00:00:08',
                    },
                    {
                        title: 'Waiting',
                        description,
                    },
                ]}
            />

            <Divider/>

            <Steps
                current={1}
                status="error"
                items={[
                    {
                        title: 'Finished',
                        description,
                    },
                    {
                        title: 'In Process',
                        description,
                    },
                    {
                        title: 'Waiting',
                        description,
                    },
                ]}
            />

            <Divider/>

            <Steps
                progressDot
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description.',
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description.',
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description.',
                    },
                ]}
            />

            <Divider/>

            <Steps
                progressDot
                current={1}
                direction="vertical"
                items={[
                    {
                        title: 'Finished',
                        description: 'This is a description. This is a description.',
                    },
                    {
                        title: 'Finished',
                        description: 'This is a description. This is a description.',
                    },
                    {
                        title: 'In Progress',
                        description: 'This is a description. This is a description.',
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description.',
                    },
                    {
                        title: 'Waiting',
                        description: 'This is a description.',
                    },
                ]}
            />
        </>
    );
};

export default StepsShowcase;