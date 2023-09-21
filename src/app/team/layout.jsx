export async function generateMetadata(){
    return{
        title:"Team",
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