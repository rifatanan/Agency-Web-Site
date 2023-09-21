export async function generateMetadata(){
    return{
        title:"Services",
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