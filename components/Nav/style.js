import {Theme} from '../config'
export default (props) => (
    <style>
	  {`
  		.nav-wrapper{
  			position: relative;
  			height: 40px;
  		}
  		.nav-item{
  			display: inline-block;
  			padding: 14px 20px 11px 20px;
			line-height: 14px;
			font-size: 14px;
			color: ${Theme.black};
			vertical-align: baseline;
			box-sizing: content-box;
			cursor: pointer;
			user-select:none;
  		}
  		.nav-item.nav-item-active{
			color: ${Theme.primary};
  		}
	  `}
	</style>
)