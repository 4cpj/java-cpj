import {Theme} from '../config'
export default (props) => (
    <style>
	  {`
  		.relevant-wrapper{
  			margin: 0;
  			padding: 0 10px;
  		}
  		.relevant-item{
  			margin: 0;
  			padding: 10px 0;
  			border-bottom: 1px solid #e4e4e4;
  		}
  		.relevant-list{
  			padding: 0;
  		}
  		.relevant-list .item{
  			display: inline-block;
  			color: ${Theme.black};
  			font-size: 12px;
  			font-weight: 400;
  		}
  		.relevant-list .relevant-type{
  			margin-right: 12px;
  			padding: 3px 8px;
  			color: #999;
  			border: 1px solid #e4e4e4;
  			border-radius: 10px;
  			cursor: pointer;
  		}
  		.relevant-list .relevant-type:hover{
  			color: ${Theme.primary};
  			border: 1px solid ${Theme.primary};
  		}
  		.relevant-item:last-child{
	        border-bottom: none;
	    }
  		.relevant-list .relevant-answer{
  			margin-right: 9px;
  			color: ${Theme.black};
  			text-decoration: underline;
  		}
  		.relevant-list a.relevant-answer:hover{
  			color: ${Theme.primary};
  		}
	  `}
	</style>
)