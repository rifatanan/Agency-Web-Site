import './globals.css'
import Footer from "@/components/Footer";
import SiteNavBar from "@/components/SiteNavBar";
import NextTopLoader from 'nextjs-toploader';

export async function generateMetadata(){
    return{
        title:"Home",
        keyword:""
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NextTopLoader color='#269669' height={3} speed={200} />
                <SiteNavBar/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}
