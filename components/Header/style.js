import {Theme} from '../config'

export default (props) => (
    <style>
	  {`
	  	.header-wrapper{
			min-width: 1200px;
			height: 70px;
			background: #fff;
			border-bottom: 1px solid #d9d9d9;
		}
		.header{
			margin: 0 auto;
			width: 1100px;
			line-height: 70px;
		}
		.logo{
			display: inline-block;
			vertical-align: baseline;
			margin-top: 15px;
			width: 40px;
			line-height: 40px;
			background-color: ${Theme.primary};
			border-radius: 50%;
			text-align: center;
			font-size: 16px;
			color: #e0f0fc;
		}
		a.home-nav{
			display: inline-block;
			margin: 0 10px 0 60px;
			padding: 0 20px;
			color: #707070;
			font-size: 16px;
			text-decoration: none;
		}
		.home-nav:hover{
			color: #333;	
		}
		.header-wrapper-right{
			float: right;
			height: 70px;
			line-height: 70px;
		}
		.loginWrapper-nav{
			margin-left: 20px;
			display: inline-block;
			width: 140px;
			color: #D9DDE1;
			font-size: 14px;
		}
		.login-nav{
			display: inline-block;
			padding: 0 12px;
			color: #4D555D;
			font-size: 12px;
			cursor: pointer;
		}
		a.login-nav:hover{
			color: #0f88eb;
			text-decoration: none
		}
		a.button-portrait{
			position: relative;
			display: inline-block;
			vertical-align: top;
			width: 160px;
			height: 100%;
		}
		a.button-portrait img{
			position: absolute;
			top: 50%;
			left: 35px;
			margin-top: -16px;
			width: 32px;
			height: 32px;
			border-radius: 50%;
			border: 2px solid transparent;
			box-sizing: content-box;
			overflow: hidden;
		}
		a.button-portrait:hover img{
			border: 2px solid ${Theme.primary};
		}
	  `}
	</style>
)