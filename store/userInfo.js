import { observer } from "mobx-react";
import { observable, action, computed} from "mobx";

class UserInfo {
    @observable userName;  //observable data 注册一个数据，这个数据将会成为一个可mobx监测的数据
    @observable password;
    @observable portrait;
    @action login(e){  //注册action ,action里面可以改变mobx注册的数据,从而改变store里的数据
        this.userName = e.userName;
        this.password = e.password;
        this.portrait = e.portrait
    }
}
export default new UserInfo()