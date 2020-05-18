import React from 'react';

const withClass =(WrappedComponents,Stylist)=> {
    return class extends React.Component{
        render(){
            return(
                <div className={Stylist}>
                    <WrappedComponents {...this.props}/>
                </div>
            );    
        }
    }
}

export default withClass;