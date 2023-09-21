import Brands from '@/components/Brands';
import Contacts from '@/components/Contacts';
import FeaturedProject from '@/components/FeaturedProject';
import Hero from '@/components/Hero';
import HowWorks from '@/components/HowWorks';
import Stats from '@/components/Stats';

const page = () => {
    return (
        <div>
            <Hero/>
            <Stats/>
            <HowWorks/>
            <FeaturedProject/>
            <Contacts/>
            <Brands/>
        </div>
    );
};

export default page;
