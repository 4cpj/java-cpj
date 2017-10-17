import {Theme} from '../config'
export default (props) => (
    <style>
	  {`
  		.list-wrapper{
  			position: relative;
  			min-height: 300px;
  		}
  		.list-item{
  			padding: 20px 10px;
			  border-bottom: 1px solid #e4e4e4;
			  color: ${Theme.black};
  		}
      .list-wrapper .list-item:last-child{
        border-bottom: none;
      }
  		.meta-list{
  			padding: 5px 0;
  		}
  		.meta-list .item{
  			display: inline-block;
  			margin-right: 9px;
  			line-height: 14px;
  			font-size: 12px;
  			color: #999;
  		}
		  .meta-list .title:hover{
  			color:  ${Theme.primary};
  			cursor: pointer;
  		}

  		.info-row{
  			padding: 5px 0;
  			font-size: 15px;
  			font-weight: 600;
    		color: ${Theme.black};
    		white-space:nowrap; 
  			overflow:hidden; 
  			text-overflow:ellipsis;
  			cursor: pointer;
  		}
      .info-row a{
        font-size: 15px;
        font-weight: 600;
        color: ${Theme.black};
      } 
      .info-row a:visited {
        color: #909090;
      }
	  `}
	</style>
)