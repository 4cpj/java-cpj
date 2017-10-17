import {Theme} from '../config'

export default (props) => (
    <style>
	  {`
	  	.breadcrumbs-wrapper{
			padding: 22px 0;
			height: 14px;
			line-height: 14px;
			font-size: 14px;
			color:  ${Theme.brown};
			font-weight: 500;
			background-color: #fff;
			box-sizing: content-box;
		}
		.breadcrumbs-wrapper-before{
			display: inline-block;
			margin: 0 10px;
			width: 5px;
			height: 14px;
			background-color: ${Theme.primary};
			vertical-align: top;
		}
	  `}
	</style>
)