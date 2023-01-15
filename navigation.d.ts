import { TypeMenuList } from "./app/navigations/types";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends TypeMenuList{}
    }
}