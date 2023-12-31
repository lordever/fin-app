import React from 'react';

interface TestElementParams {
    params: {
        id: string
    };
}

const TestElementPage = ({params}: TestElementParams) => {
    return (
        <div>
            Element: {params.id}
        </div>
    );
};

export default TestElementPage;