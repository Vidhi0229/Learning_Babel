import { bodyStyle, addTitle } from "./dom";
import users, {getNonPremium} from "./data";


addTitle('Hello, World')
bodyStyle();
const nonPremium = getNonPremium(users)
console.log(users, nonPremium)