// stateless component
// renders a json preview

import React from "react";

import prevData from './testData.json';

class JsonPreview extends React.Component {
    render(){
        return (
        <div className="test-json">
            <div>
                {prevData.formed}
            </div>
        </div>


        );
    }
}

/* 
          {prevData.map((prev, index) => {
                    return <div key={index}> {prev.members} </div>
                })}
*/

export default JsonPreview;