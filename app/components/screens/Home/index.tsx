import Navbar from '../../../navigations/Navbar';
import Posts from '../../blocks/Posts';

export default function Home({ navigation }: any) {


    return (
        <>
            <Posts />
            <Navbar navigation={navigation} />
        </>

    );
}
