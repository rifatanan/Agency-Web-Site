export async function generateMetadata(){
    return{
        title:"Projects",
        keyword:""
    }
}

const layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;